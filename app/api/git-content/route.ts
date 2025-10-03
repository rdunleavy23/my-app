import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

const OWNER = process.env.GITHUB_OWNER ?? "rdunleavy23";
const REPO = process.env.GITHUB_REPO ?? "my-app";
const DEFAULT_BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN;
const WRITE_API_KEY = process.env.WRITE_API_KEY; // For POST/DELETE operations

// === CONFIGURATION ===

const ALLOWED_DIRECTORIES = [
  "app/",
  "lib/",
  "components/",
  "content/",
  "public/",
  "styles/",
  "hooks/",
  "types/",
];

const ALLOWED_EXTENSIONS = [
  // Code
  ".ts", ".tsx", ".js", ".jsx",
  // Styles
  ".css", ".scss", ".sass",
  // Content
  ".md", ".mdx",
  // Config
  ".json", ".yaml", ".yml",
  // Assets
  ".svg", ".txt",
];

const ALLOWED_ROOT_FILES = [
  "tailwind.config.ts",
  "tailwind.config.js", 
  "next.config.js",
  "next.config.mjs",
  "package.json",
  "components.json",
  "tsconfig.json",
  "postcss.config.js",
  "postcss.config.mjs",
  ".eslintrc.json",
  ".prettierrc",
  "README.md",
];

const BLOCKED_PATTERNS = [
  ".env",
  ".git/",
  "node_modules/",
  ".next/",
  "dist/",
  ".vercel/",
];

const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const MAX_BATCH_FILES = 10;

// === SECURITY ===

function isValidPath(path: string): boolean {
  // Block dangerous patterns
  if (BLOCKED_PATTERNS.some(p => path.includes(p))) return false;
  
  // Allow root config files
  if (ALLOWED_ROOT_FILES.includes(path)) return true;
  
  // Check directory and extension
  const hasAllowedDir = ALLOWED_DIRECTORIES.some(dir => path.startsWith(dir));
  const hasAllowedExt = ALLOWED_EXTENSIONS.some(ext => path.endsWith(ext));
  
  return hasAllowedDir && hasAllowedExt;
}

function validateWriteAuth(req: Request): boolean {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return false;
  
  const token = authHeader.replace("Bearer ", "");
  return token === WRITE_API_KEY;
}

// === INITIALIZE OCTOKIT ===

function getOctokit(): Octokit | null {
  if (!TOKEN) return null;
  return new Octokit({ auth: TOKEN });
}

// === GET: READ FILE OR LIST DIRECTORY ===

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pathParam = url.searchParams.get("path");
    const listMode = url.searchParams.get("list") === "true";
    const branch = url.searchParams.get("branch") || DEFAULT_BRANCH;

    if (!pathParam) {
      return NextResponse.json({ error: "Missing 'path' parameter" }, { status: 400 });
    }

    const path = decodeURIComponent(pathParam).replace(/^\/+/, "");

    if (!isValidPath(path) && !listMode) {
      return NextResponse.json({ 
        error: "Path not allowed",
        allowedDirs: ALLOWED_DIRECTORIES,
        allowedExts: ALLOWED_EXTENSIONS
      }, { status: 403 });
    }

    const octokit = getOctokit();
    if (!octokit) {
      return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
    }

    // LIST MODE: Return directory contents
    if (listMode) {
      const { data } = await octokit.repos.getContent({
        owner: OWNER,
        repo: REPO,
        path,
        ref: branch,
      });

      if (!Array.isArray(data)) {
        return NextResponse.json({ error: "Path is not a directory" }, { status: 400 });
      }

      const files = data.map(item => ({
        name: item.name,
        path: item.path,
        type: item.type,
        size: item.size,
      }));

      return NextResponse.json({ files }, { status: 200 });
    }

    // READ MODE: Return file content
    const { data } = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path,
      ref: branch,
    });

    if (Array.isArray(data) || data.type !== "file") {
      return NextResponse.json({ error: "Path is not a file" }, { status: 400 });
    }

    if (data.size && data.size > MAX_FILE_SIZE) {
      return NextResponse.json({ 
        error: "File too large",
        maxSize: `${MAX_FILE_SIZE / 1024}KB`,
        fileSize: `${Math.round(data.size / 1024)}KB`
      }, { status: 413 });
    }

    if (!data.content || data.encoding !== "base64") {
      return NextResponse.json({ error: "Invalid file encoding" }, { status: 502 });
    }

    const content = Buffer.from(data.content, "base64").toString("utf8");

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-File-SHA": data.sha, // Useful for updates
        "Cache-Control": "public, max-age=60",
      },
    });

  } catch (err: any) {
    if (err.status === 404) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
    
    return NextResponse.json({ 
      error: "Request failed",
      message: err.message 
    }, { status: 500 });
  }
}

// === POST: CREATE OR UPDATE FILE ===

export async function POST(req: Request) {
  try {
    // Validate authentication
    if (!validateWriteAuth(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { path, content, message, branch = DEFAULT_BRANCH, sha } = body;

    if (!path || !content || !message) {
      return NextResponse.json({ 
        error: "Missing required fields: path, content, message" 
      }, { status: 400 });
    }

    const cleanPath = path.replace(/^\/+/, "");

    if (!isValidPath(cleanPath)) {
      return NextResponse.json({ error: "Path not allowed" }, { status: 403 });
    }

    const octokit = getOctokit();
    if (!octokit) {
      return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
    }

    // Create or update file
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: cleanPath,
      message,
      content: Buffer.from(content).toString("base64"),
      branch,
      ...(sha && { sha }), // Include SHA if updating existing file
    });

    return NextResponse.json({
      success: true,
      commit: {
        sha: data.commit.sha,
        url: data.commit.html_url,
      },
      file: {
        path: data.content?.path,
        sha: data.content?.sha,
      },
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ 
      error: "Write failed",
      message: err.message 
    }, { status: 500 });
  }
}

// === DELETE: REMOVE FILE ===

export async function DELETE(req: Request) {
  try {
    // Validate authentication
    if (!validateWriteAuth(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { path, message, branch = DEFAULT_BRANCH, sha } = body;

    if (!path || !message || !sha) {
      return NextResponse.json({ 
        error: "Missing required fields: path, message, sha" 
      }, { status: 400 });
    }

    const cleanPath = path.replace(/^\/+/, "");

    if (!isValidPath(cleanPath)) {
      return NextResponse.json({ error: "Path not allowed" }, { status: 403 });
    }

    const octokit = getOctokit();
    if (!octokit) {
      return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
    }

    const { data } = await octokit.repos.deleteFile({
      owner: OWNER,
      repo: REPO,
      path: cleanPath,
      message,
      sha,
      branch,
    });

    return NextResponse.json({
      success: true,
      commit: {
        sha: data.commit.sha,
        url: data.commit.html_url,
      },
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ 
      error: "Delete failed",
      message: err.message 
    }, { status: 500 });
  }
}