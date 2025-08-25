import { NextResponse } from "next/server";

const OWNER = process.env.GITHUB_OWNER ?? "rdunleavy23";
const REPO = process.env.GITHUB_REPO ?? "my-app";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");
    if (!path) return NextResponse.json({ error: "Missing 'path' query" }, { status: 400 });
    if (!TOKEN) return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });

    const api = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`;
    const res = await fetch(api, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json"
      },
      cache: "no-store"
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ error: "GitHub fetch failed", status: res.status, body: txt }, { status: 502 });
    }

    const json = await res.json();
    if (!json.content || !json.encoding) {
      return NextResponse.json({ error: "Unexpected GitHub response" }, { status: 502 });
    }

    const content = Buffer.from(json.content, "base64").toString("utf8");
    return new NextResponse(content, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  } catch (e: any) {
    return NextResponse.json({ error: "Unhandled error", message: e?.message ?? String(e) }, { status: 500 });
  }
}
