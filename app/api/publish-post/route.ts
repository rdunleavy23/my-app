import { NextResponse } from "next/server";

// --- Helper: ensure unique slug if file exists ---
function createSafeSlug(input: string, existing: string[]): string {
  let base = input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  let slug = base;
  let count = 2;
  while (existing.includes(slug)) {
    slug = `${base}-${count}`;
    count++;
  }
  return slug;
}

export async function POST(req: Request) {
  try {
    const { password, title, description = "", author = "Ryan", content } = await req.json();

    const PUBLISH_PASSWORD = process.env.PUBLISH_PASSWORD;
    if (!PUBLISH_PASSWORD) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    if (password !== PUBLISH_PASSWORD) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const date = new Date().toISOString().split("T")[0];

    // ✅ Prevent slug collisions
    const fs = await import("fs");
    const path = await import("path");
    const postsDir = path.join(process.cwd(), "content/posts");
    const existing = fs.existsSync(postsDir) ? fs.readdirSync(postsDir).map(f => f.replace(/\.md$/, "")) : [];
    const slug = createSafeSlug(title, existing);

    // ✅ Generate simple keyword list
    const words = (content + " " + title + " " + description).toLowerCase().match(/\b[a-z]{4,}\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1 });
    const keywords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 7).map(([w]) => w);

    // ✅ Keep your original frontmatter shape
    const markdown = `---
title: "${title}"
description: "${description}"
publishedAt: "${date}"
author:
  name: "${author}"
  title: "Founder"
seo:
  title: "${title}"
  description: "${description}"
  keywords: [${keywords.map(k => `"${k}"`).join(", ")}]
---
# ${title}

${content}
`;

    // 🔑 Use the correct API key (gatekeeper secret)
    const WRITE_API_KEY = process.env.WRITE_API_KEY;
    if (!WRITE_API_KEY) {
      return NextResponse.json({ error: "Write key not configured" }, { status: 500 });
    }

    // Commit content via your git-content endpoint
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

    // 🔔 Trigger redeploy
    if (process.env.VERCEL_DEPLOY_HOOK_URL) {
      try {
        await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, { method: "POST" });
      } catch {
        // ignore deploy hook errors
      }
    }

    return NextResponse.json({ success: true, slug, url: `/blog/${slug}` });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
