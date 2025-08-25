// app/api/git-content/route.ts
import { NextResponse } from "next/server";

const OWNER  = process.env.GITHUB_OWNER  ?? "rdunleavy23";
const REPO   = process.env.GITHUB_REPO   ?? "my-app";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN  = process.env.GITHUB_TOKEN;

const OK_PREFIX = "app/";
const OK_EXTS = [".ts", ".tsx", ".css"];
const MAX_BYTES = 512 * 1024; // 512 KB

const badPath = (p: string) =>
  !p.startsWith(OK_PREFIX) || !OK_EXTS.some((ext) => p.endsWith(ext));

export async function GET(req: Request) {
  try {
    const pathParam = new URL(req.url).searchParams.get("path");
    if (!pathParam) return NextResponse.json({ error: "Missing 'path' query" }, { status: 400 });
    const path = decodeURIComponent(pathParam).replace(/^\/+/, "");
    if (badPath(path)) return NextResponse.json({ error: "Path not allowed" }, { status: 403 });
    if (!TOKEN) return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });

    const api = `https://api.github.com/repos/${encodeURIComponent(OWNER)}/${encodeURIComponent(REPO)}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;
    const gh = await fetch(api, {
      headers: { Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github+json" },
      cache: "no-store",
    });

    if (!gh.ok) {
      const body = await gh.text();
      return NextResponse.json({ error: "GitHub fetch failed", status: gh.status, body }, { status: 502 });
    }

    const json: { content?: string; encoding?: string; size?: number } = await gh.json();
    if (json.size && Number(json.size) > MAX_BYTES) return NextResponse.json({ error: "File too large" }, { status: 413 });
    if (!json.content || json.encoding !== "base64") return NextResponse.json({ error: "Unexpected GitHub response" }, { status: 502 });

    const text = Buffer.from(json.content, "base64").toString("utf8");
    return new NextResponse(text, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Unhandled error", message: msg }, { status: 500 });
  }
}
