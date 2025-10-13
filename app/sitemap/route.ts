import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const SITE_URL = 'https://patterngrowth.com'
const TEST_POST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i]

function isTestPost(slug: string): boolean {
  return TEST_POST_PATTERNS.some((pattern) => pattern.test(slug))
}

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const stats = fs.statSync(fullPath)
      return {
        slug,
        publishDate:
          data.publishDate || data.date || stats.mtime.toISOString(),
        modifiedDate: stats.mtime.toISOString(),
        published: data.published !== false,
      }
    })
    .filter((post) => post.published && !isTestPost(post.slug))
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
}

export async function GET() {
  const posts = getBlogPosts()

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.modifiedDate || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const sitemapEntries = [...staticPages, ...blogPages]

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemapEntries
      .map(
        (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join('\n') +
    '\n</urlset>'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control':
        'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    },
  })
}
