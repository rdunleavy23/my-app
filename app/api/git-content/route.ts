import { NextResponse } from "next/server";

export const runtime = "edge"; // fast, read-only

const OWNER = process.env.GITHUB_OWNER ?? "rdunleavy23";
const REPO = process.env.GITHUB_REPO ?? "my-app";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN;

// Allow only these roots and extensions (safety)
const ALLOWED_PREFIXES = ["app/"];
const ALLOWED_EXTS = [".ts", ".tsx", ".css"];
const MAX_BYTES = 512 * 1024; // 512KB guard

function isAllowedPath(p: string) {
  if (!ALLOWED_PREFIXES.some((prefix) => p.startsWith(prefix))) return false;
  return ALLOWED_EXTS.some((ext) => p.endsWith(ext));
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pathParam = searchParams.get("path");
    if (!pathParam) {
      return NextResponse.json({ error: "Missing 'path' query" }, { status: 400 });
    }

    // Normalize and validate target path
    const path = decodeURIComponent(pathParam).replace(/^\/+/, ""); // strip leading slashes
    if (!isAllowedPath(path)) {
      return NextResponse.json({ error: "Path not allowed" }, { status: 403 });
    }

    if (!TOKEN) {
      return NextResponse.json({ error: "Missing GITHUB_TOKEN" }, { status: 500 });
    }

    const api = `https://api.github.com/repos/${encodeURIComponent(
      OWNER
    )}/${encodeURIComponent(REPO)}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;

    const res = await fetch(api, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json(
        { error: "GitHub fetch failed", status: res.status, body: txt },
        { status: 502 }
      );
    }

    const json: {
      content?: string;
      encoding?: "base64" | string;
      size?: number;
    } = await res.json();

    if (!json.content || json.encoding !== "base64") {
      return NextResponse.json({ error: "Unexpected GitHub response" }, { status: 502 });
    }

    if (json.size && Number(json.size) > MAX_BYTES) {
      return NextResponse.json({ error: "File too large" }, { status: 413 });
    }

    const content = Buffer.from(json.content, "base64").toString("utf8");
    return new NextResponse(content, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Unhandled error", message: msg }, { status: 500 });
  }
}
