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
  'what-is-fractional-cmo': 0.9,
  'fractional-cmo-hourly-rate': 0.9,
  'fractional-cmo-services': 0.8,
  'fractional-cmo-responsibilities': 0.8,
  'fractional-marketing-services': 0.8,
  'benefits-of-fractional-cmo': 0.8,
  'sprint-vs-fractional-cmo': 0.9, // Comparison page - high value
  'hey-ai-read-me': 0.4, // AI-readable page - utility

  // Blog content (varies by pillar status)
  blog: 0.7,
  'blog-pillar': 0.8,
  'blog-cluster': 0.6,

  // Legal/utility pages (lowest priority)
  privacy: 0.3,
  default: 0.5,
}

// Pages to exclude from sitemap
const EXCLUDED_ROUTES = [
  'styleguide',
  'publish',
  '(marketing)', // Next.js route groups
]

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
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const stats = fs.statSync(fullPath)
      
      // Prefer publishedAt for SEO accuracy, fallback to file mtime
      // publishedAt is more reliable for content freshness signals
      let modifiedDate: string
      if (data.publishedAt) {
        // If publishedAt is provided, use it as both published and lastModified
        // For blog posts, content is typically published once and may be updated
        // Using publishedAt ensures consistent indexing signals
        const publishedDate = new Date(data.publishedAt)
        modifiedDate = publishedDate.toISOString()
      } else {
        // Fallback to file modification time if no publishedAt
        modifiedDate = stats.mtime.toISOString()
      }
      
      return {
        slug,
        modifiedDate,
        published: data.published !== false,
        priority: data.priority || 'blog-cluster',
      }
    })
    .filter(post => post.published && !isTestPost(post.slug))
}

function getPriorityForPage(url: string, postsCache?: ReturnType<typeof getBlogPosts>): number {
  const path = url.replace(SITE_URL, '').replace(/^\//, '').split('/')[0] || 'home'

  // Check if it's a blog post and determine priority
  if (url.includes('/blog/')) {
    // Use cached posts if provided, otherwise fetch (for backward compatibility)
    const posts = postsCache || getBlogPosts()
    const post = posts.find(p => url.includes(p.slug))
    if (post) {
      return post.priority === 'blog-pillar' ? PRIORITY_MAP['blog-pillar'] : PRIORITY_MAP['blog-cluster']
    }
    return PRIORITY_MAP['blog-cluster']
  }

  return PRIORITY_MAP[path as keyof typeof PRIORITY_MAP] || PRIORITY_MAP.default
}

// Known page update dates - manually tracked for accuracy
// File system timestamps are unreliable in deployed environments
const PAGE_LAST_MODIFIED: Record<string, string> = {
  '/': '2025-01-20',
  '/about': '2025-01-20',
  '/process': '2025-01-20',
  '/blog': '2025-01-20',
  '/what-is-fractional-cmo': '2025-01-20',
  '/fractional-cmo-hourly-rate': '2025-01-20',
  '/fractional-cmo-services': '2025-01-20',
  '/fractional-cmo-responsibilities': '2025-01-20',
  '/fractional-marketing-services': '2025-01-20',
  '/benefits-of-fractional-cmo': '2025-01-20',
  '/sprint-vs-fractional-cmo': '2025-01-20',
  '/hey-ai-read-me': '2025-01-20',
  '/privacy': '2025-01-15',
}

function getLastModifiedForPage(url: string): Date {
  const urlPath = url.replace(SITE_URL, '') || '/'
  
  // Use manually tracked dates (most reliable for SEO)
  if (PAGE_LAST_MODIFIED[urlPath]) {
    return new Date(PAGE_LAST_MODIFIED[urlPath])
  }
  
  // For unknown pages, use a reasonable recent date
  return new Date('2025-01-20')
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
    '/sprint-vs-fractional-cmo': 'monthly',
    '/hey-ai-read-me': 'monthly',
    '/styleguide': 'yearly',
  }

  return frequencyMap[url.replace(SITE_URL, '')] || 'monthly'
}

/**
 * Automatically discover all page routes in the app directory
 * This ensures the sitemap stays up to date as new pages are added
 */
function discoverAppRoutes(dir: string = path.join(process.cwd(), 'app'), baseRoute: string = ''): string[] {
  const routes: string[] = []

  if (!fs.existsSync(dir)) return routes

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    // Skip excluded routes, api routes, and Next.js special files
    if (EXCLUDED_ROUTES.includes(entry.name) ||
        entry.name === 'api' ||
        entry.name.startsWith('_') ||
        entry.name.startsWith('.')) {
      continue
    }

    if (entry.isDirectory()) {
      // Check if this directory contains a page.tsx
      const pagePath = path.join(fullPath, 'page.tsx')
      if (fs.existsSync(pagePath)) {
        // Convert directory name to route
        // Skip route groups like (marketing)
        if (!entry.name.startsWith('(') && !entry.name.startsWith('[')) {
          const route = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`
          routes.push(route)
        }
      }

      // Recursively search subdirectories, but skip dynamic routes
      if (!entry.name.startsWith('[')) {
        const newBaseRoute = entry.name.startsWith('(') ? baseRoute : (baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`)
        routes.push(...discoverAppRoutes(fullPath, newBaseRoute))
      }
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Cache blog posts to avoid multiple file system reads
  // getBlogPosts() reads files from disk - calling it multiple times is inefficient
  const posts = getBlogPosts()

  // Auto-discover all app routes
  const discoveredRoutes = discoverAppRoutes()

  // Add homepage (which doesn't have a folder)
  const allRoutes = ['/', ...discoveredRoutes]

  // Build static pages from discovered routes
  const staticPages: MetadataRoute.Sitemap = allRoutes.map(route => {
    // Homepage: use SITE_URL without trailing slash to match canonical
    // Other pages: append route directly (no trailing slash per site standard)
    const url = route === '/' ? SITE_URL : `${SITE_URL}${route}`
    return {
      url,
      lastModified: getLastModifiedForPage(url),
      changeFrequency: getChangeFrequencyForPage(url),
      priority: getPriorityForPage(url, posts),
    }
  })

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate), // Convert ISO string to Date for proper formatting
    changeFrequency: 'monthly' as const,
    priority: post.priority === 'blog-pillar' ? PRIORITY_MAP['blog-pillar'] : PRIORITY_MAP['blog-cluster'],
  }))

  return [...staticPages, ...blogPages].sort((a, b) => (b.priority || 0.5) - (a.priority || 0.5))
}
