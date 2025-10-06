export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const OWNER = process.env.GITHUB_REPO_OWNER || "rdunleavy23";
const REPO = process.env.GITHUB_REPO_NAME || "my-app";
const DEFAULT_BRANCH = process.env.GITHUB_BRANCH || "main";
const WRITE_KEY = process.env.WRITE_API_KEY;

const ALLOW = {
  read: [/^app\//, /^components\//, /^content\/posts\//],
  write: [/^app\//, /^components\//, /^content\/posts\//],
  destroy: [/^content\/posts\//],
};

function bad(status: number, message: string) {
  return NextResponse.json({ error: message }, { status });
}

function requireAuth(req: NextRequest) {
  const h = req.headers.get("authorization") || "";
  const m = h.match(/^Bearer\s+(.+)$/i);
  const key = m ? m[1] : "";
  if (!WRITE_KEY || key !== WRITE_KEY) {
    throw new Response("Unauthorized", { status: 401 });
  }
}

function normalize(p: string) {
  const s = String(p || "").trim().replace(/^\.\/+/, "");
  if (!s) throw new Response("Missing path", { status: 400 });
  if (s.includes("..") || s.startsWith("/") || s.includes("\\")) {
    throw new Response("Bad path", { status: 400 });
  }
  return s;
}

function allowed(path: string, rules: RegExp[]) {
  return rules.some((r) => r.test(path));
}

function toB64(s: string) {
  return Buffer.from(s, "utf8").toString("base64");
}

async function getContent(octo: Octokit, path: string, ref: string) {
  return await octo.repos.getContent({ owner: OWNER, repo: REPO, path, ref });
}

export async function GET(req: NextRequest) {
  try {
    requireAuth(req);
    const url = new URL(req.url);
    const path = normalize(url.searchParams.get("path") || "");
    if (!allowed(path, ALLOW.read)) return bad(403, "Path not allowed");

    const octo = new Octokit({ auth: process.env.GITHUB_TOKEN_WRITE });
    const { data } = await getContent(octo, path, DEFAULT_BRANCH);

    if (Array.isArray(data)) {
      const items = data.map((i: any) => ({ path: i.path, sha: i.sha }));
      return NextResponse.json({ items });
    }

    if ((data as any).type === "file") {
      const enc = (data as any).encoding || "base64";
      const raw =
        enc === "base64"
          ? Buffer.from((data as any).content || "", "base64").toString("utf8")
          : String((data as any).content || "");
      const res = new NextResponse(raw);
      res.headers.set("content-type", "text/plain; charset=utf-8");
      if ((data as any).sha) res.headers.set("x-file-sha", (data as any).sha);
      return res;
    }

    return bad(500, "Unsupported content type");
  } catch (e: any) {
    const status = e?.status || e?.response?.status || 500;
    const msg = e?.response?.data?.message || e?.message || String(e);
    return NextResponse.json({ error: "GET failed", message: msg }, { status });
  }
}

export async function POST(req: NextRequest) {
  try {
    requireAuth(req);
    const body = await req.json();
    const path = normalize(String(body.path || ""));
    const message = String(body.message || "update: " + path);
    const content = String(body.content || "");
    const branch = String(body.branch || DEFAULT_BRANCH);
    const sha = body.sha ? String(body.sha) : undefined;

    if (!allowed(path, ALLOW.write)) return bad(403, "Path not allowed");
    if (!content) return bad(400, "Missing content");

    const octo = new Octokit({ auth: process.env.GITHUB_TOKEN_WRITE });
    const resp = await octo.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path,
      message,
      content: toB64(content),
      branch,
      sha,
    } as any);

    const out = {
      success: true,
      commit: {
        sha: resp.data.commit.sha,
        url: resp.data.commit.html_url,
      },
      file: {
        path: resp.data.content?.path,
        sha: resp.data.content?.sha,
      },
    };
    const res = NextResponse.json(out);
    if (resp.data.content?.sha) res.headers.set("x-file-sha", resp.data.content.sha);
    return res;
  } catch (e: any) {
    const status = e?.status || e?.response?.status || 500;
    const msg = e?.response?.data?.message || e?.message || String(e);
    return NextResponse.json({ error: "Write failed", message: msg }, { status });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    requireAuth(req);
    const body = await req.json();
    const path = normalize(String(body.path || ""));
    const message = String(body.message || "delete: " + path);
    const sha = String(body.sha || "");
    const branch = String(body.branch || DEFAULT_BRANCH);

    if (!allowed(path, ALLOW.destroy)) return bad(403, "Path not allowed");
    if (!sha) return bad(400, "Missing sha");

    const octo = new Octokit({ auth: process.env.GITHUB_TOKEN_WRITE });
    const resp = await octo.repos.deleteFile({
      owner: OWNER,
      repo: REPO,
      path,
      message,
      sha,
      branch,
    } as any);

    return NextResponse.json({
      success: true,
      commit: { sha: resp.data.commit.sha, url: resp.data.commit.html_url },
    });
  } catch (e: any) {
    const status = e?.status || e?.response?.status || 500;
    const msg = e?.response?.data?.message || e?.message || String(e);
    return NextResponse.json({ error: "Delete failed", message: msg }, { status });
  }
}
