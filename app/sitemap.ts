import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const SITE_URL = siteConfig.url
const TEST_POST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i]

// Priority mapping based on content type and business value
const PRIORITY_MAP = {
  // Core business pages (highest priority)
  home: 1.0,
  process: 0.9,
  about: 0.8,

  // High-value service pages
  'what-is-fractional-cmo': 0.8,
  'fractional-cmo-hourly-rate': 0.8,
  'benefits-of-fractional-cmo': 0.7,

  // Supporting service pages
  'fractional-cmo-services': 0.7,
  'fractional-cmo-responsibilities': 0.6,
  'fractional-marketing-services': 0.6,

  // Blog content (varies by pillar status)
  blog: 0.7,
  'blog-pillar': 0.8,
  'blog-cluster': 0.6,

  // Legal/utility pages (lowest priority)
  privacy: 0.3,
  default: 0.5,
}

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
        priority: data.priority || 'blog-cluster',
      }
    })
    .filter(post => post.published && !isTestPost(post.slug))
}

function getPriorityForPage(url: string): number {
  const path = url.replace(SITE_URL, '').replace(/^\//, '').split('/')[0] || 'home'

  // Check if it's a blog post and determine priority
  if (url.includes('/blog/')) {
    const posts = getBlogPosts()
    const post = posts.find(p => url.includes(p.slug))
    if (post) {
      return post.priority === 'blog-pillar' ? PRIORITY_MAP['blog-pillar'] : PRIORITY_MAP['blog-cluster']
    }
    return PRIORITY_MAP['blog-cluster']
  }

  return PRIORITY_MAP[path as keyof typeof PRIORITY_MAP] || PRIORITY_MAP.default
}

function getLastModifiedForPage(url: string): string {
  // Map of last modified dates for static pages
  const lastModifiedMap: Record<string, string> = {
    '/': '2025-10-23', // Updated today
    '/about': '2025-10-20',
    '/blog': '2025-10-23', // Updated today
    '/privacy': '2025-01-01',
    '/process': '2025-10-23', // Updated today
    '/benefits-of-fractional-cmo': '2025-10-20',
    '/fractional-cmo-hourly-rate': '2025-10-23', // Updated today
    '/fractional-cmo-responsibilities': '2025-10-20',
    '/fractional-cmo-services': '2025-10-20',
    '/fractional-marketing-services': '2025-10-20',
    '/what-is-fractional-cmo': '2025-10-23', // Updated today
  }

  return lastModifiedMap[url.replace(SITE_URL, '')] || new Date().toISOString().split('T')[0]
}

function getChangeFrequencyForPage(url: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Blog posts change less frequently
  if (url.includes('/blog/')) {
    return 'monthly'
  }

  // Core business pages need more frequent updates
  const frequencyMap: Record<string, 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'> = {
    '/': 'weekly',
    '/about': 'monthly',
    '/blog': 'weekly',
    '/privacy': 'yearly',
    '/process': 'monthly',
    '/what-is-fractional-cmo': 'monthly',
    '/fractional-cmo-hourly-rate': 'monthly',
    '/benefits-of-fractional-cmo': 'monthly',
    '/fractional-cmo-services': 'monthly',
    '/fractional-cmo-responsibilities': 'monthly',
    '/fractional-marketing-services': 'monthly',
  }

  return frequencyMap[url.replace(SITE_URL, '')] || 'monthly'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: getLastModifiedForPage(`${SITE_URL}/`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/`), priority: getPriorityForPage(`${SITE_URL}/`) },
    { url: `${SITE_URL}/about`, lastModified: getLastModifiedForPage(`${SITE_URL}/about`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/about`), priority: getPriorityForPage(`${SITE_URL}/about`) },
    { url: `${SITE_URL}/blog`, lastModified: getLastModifiedForPage(`${SITE_URL}/blog`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/blog`), priority: getPriorityForPage(`${SITE_URL}/blog`) },
    { url: `${SITE_URL}/privacy`, lastModified: getLastModifiedForPage(`${SITE_URL}/privacy`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/privacy`), priority: getPriorityForPage(`${SITE_URL}/privacy`) },
    { url: `${SITE_URL}/process`, lastModified: getLastModifiedForPage(`${SITE_URL}/process`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/process`), priority: getPriorityForPage(`${SITE_URL}/process`) },
    { url: `${SITE_URL}/benefits-of-fractional-cmo`, lastModified: getLastModifiedForPage(`${SITE_URL}/benefits-of-fractional-cmo`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/benefits-of-fractional-cmo`), priority: getPriorityForPage(`${SITE_URL}/benefits-of-fractional-cmo`) },
    { url: `${SITE_URL}/fractional-cmo-hourly-rate`, lastModified: getLastModifiedForPage(`${SITE_URL}/fractional-cmo-hourly-rate`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/fractional-cmo-hourly-rate`), priority: getPriorityForPage(`${SITE_URL}/fractional-cmo-hourly-rate`) },
    { url: `${SITE_URL}/fractional-cmo-responsibilities`, lastModified: getLastModifiedForPage(`${SITE_URL}/fractional-cmo-responsibilities`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/fractional-cmo-responsibilities`), priority: getPriorityForPage(`${SITE_URL}/fractional-cmo-responsibilities`) },
    { url: `${SITE_URL}/fractional-cmo-services`, lastModified: getLastModifiedForPage(`${SITE_URL}/fractional-cmo-services`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/fractional-cmo-services`), priority: getPriorityForPage(`${SITE_URL}/fractional-cmo-services`) },
    { url: `${SITE_URL}/fractional-marketing-services`, lastModified: getLastModifiedForPage(`${SITE_URL}/fractional-marketing-services`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/fractional-marketing-services`), priority: getPriorityForPage(`${SITE_URL}/fractional-marketing-services`) },
    { url: `${SITE_URL}/what-is-fractional-cmo`, lastModified: getLastModifiedForPage(`${SITE_URL}/what-is-fractional-cmo`), changeFrequency: getChangeFrequencyForPage(`${SITE_URL}/what-is-fractional-cmo`), priority: getPriorityForPage(`${SITE_URL}/what-is-fractional-cmo`) },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: post.priority === 'blog-pillar' ? PRIORITY_MAP['blog-pillar'] : PRIORITY_MAP['blog-cluster'],
  }))

  return [...staticPages, ...blogPages].sort((a, b) => (b.priority || 0.5) - (a.priority || 0.5))
}
