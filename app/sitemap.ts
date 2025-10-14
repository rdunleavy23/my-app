import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const SITE_URL = 'https://patterngrowth.com'
const TEST_POST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i]

function isTestPost(slug: string): boolean {
  return TEST_POST_PATTERNS.some(pattern => pattern.test(slug))
}

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  if (!fs.existsSync(postsDirectory)) return []

  return fs.readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      const stats = fs.statSync(fullPath)
      return {
        slug,
        modifiedDate: stats.mtime.toISOString(),
        published: data.published !== false,
      }
    })
    .filter(post => post.published && !isTestPost(post.slug))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date().toISOString(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/styleguide`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.2 },
    { url: `${SITE_URL}/process`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/benefits-of-fractional-cmo`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/fractional-cmo-hourly-rate`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/fractional-cmo-responsibilities`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/fractional-cmo-services`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/fractional-marketing-services`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/what-is-fractional-cmo`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
