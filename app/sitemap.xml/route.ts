import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://patterngrowth.com";

const TEST_POST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i];

function isTestPost(slug: string) {
  return TEST_POST_PATTERNS.some((p) => p.test(slug));
}

function getBlogPosts() {
  const dir = path.join(process.cwd(), "content/posts");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const full = path.join(dir, f);
      const { data } = matter(fs.readFileSync(full, "utf8"));
      const stats = fs.statSync(full);
      return {
        slug,
        publishDate:
          data.publishDate || data.date || stats.mtime.toISOString(),
        modifiedDate: stats.mtime.toISOString(),
        published: data.published !== false,
      };
    })
    .filter((p) => p.published && !isTestPost(p.slug))
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export async function GET() {
  const posts = getBlogPosts();

  const staticPages = [
    { url: SITE_URL, changefreq: "daily", priority: 1 },
    { url: `${SITE_URL}/about`, changefreq: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changefreq: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changefreq: "yearly", priority: 0.3 },
  ];

  const blogPages = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastmod: p.modifiedDate,
    changefreq: "monthly",
    priority: 0.7,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...blogPages]
  .map(
    (p) => `<url>
  <loc>${p.url}</loc>
  ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}
  <changefreq>${p.changefreq}</changefreq>
  <priority>${p.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    },
  });
}
