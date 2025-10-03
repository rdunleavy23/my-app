import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password, title, description, author, content } = body;

    const PUBLISH_PASSWORD = process.env.PUBLISH_PASSWORD;
    if (!PUBLISH_PASSWORD) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    if (password !== PUBLISH_PASSWORD) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const date = new Date().toISOString().split("T")[0];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const words = (content + " " + title + " " + description).toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach((word) => { freq[word] = (freq[word] || 0) + 1; });
    const keywords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 7).map(([word]) => word);

    const markdown = `---
title: "${title}"
description: "${description}"
publishedAt: "${date}"
author:
  name: "${author || "Ryan"}"
  title: "Founder"
seo:
  title: "${title}"
  description: "${description}"
  keywords: [${keywords.map(k => `"${k}"`).join(", ")}]
---
# ${title}

${content}
`;

    const WRITE_API_KEY = process.env.WRITE_API_KEY;
    if (!WRITE_API_KEY) {
      return NextResponse.json({ error: "Write key not configured" }, { status: 500 });
    }

    const gitResponse = await fetch("https://patterngrowth.com/api/git-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${WRITE_API_KEY}`,
      },
      body: JSON.stringify({
        path: `content/posts/${slug}.md`,
        message: `Publish blog post: ${title}`,
        content: markdown,
      }),
    });

    if (!gitResponse.ok) {
      const error = await gitResponse.text();
      return NextResponse.json({ error: "Failed to publish", details: error }, { status: 500 });
    }

    const result = await gitResponse.json();
    return NextResponse.json({ success: true, slug, url: `/blog/${slug}` });

  } catch (error) {
    return NextResponse.json({ error: "Server error", details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
