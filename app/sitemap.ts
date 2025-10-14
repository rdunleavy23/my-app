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
    .sort((a, b) => new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime())
}

function getStaticPages(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const pages: string[] = []
  
  function scanDir(dir: string, basePath = '') {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      // Skip special Next.js files/folders
      if (item.name.startsWith('_') || item.name.startsWith('.') || 
          item.name === 'api' || item.name === 'sitemap.ts') continue
      
      const fullPath = path.join(dir, item.name)
      const urlPath = basePath + '/' + item.name
      
      if (item.isDirectory()) {
        // Check if directory has page.tsx
        if (fs.existsSync(path.join(fullPath, 'page.tsx')) || 
            fs.existsSync(path.join(fullPath, 'page.ts'))) {
          // Skip dynamic routes like [slug]
          if (!item.name.startsWith('[')) {
            pages.push(urlPath === '/' ? '/' : urlPath)
          }
        }
        // Recursively scan subdirectories
        scanDir(fullPath, urlPath)
      }
    }
  }
  
  scanDir(appDir)
  
  // Add root page
  if (fs.existsSync(path.join(appDir, 'page.tsx')) || 
      fs.existsSync(path.join(appDir, 'page.ts'))) {
    pages.unshift('/')
  }
  
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()
  const staticPagePaths = getStaticPages()
  
  // Map static pages to sitemap entries
  const staticPages: MetadataRoute.Sitemap = staticPagePaths.map(pagePath => {
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly'
    let priority = 0.5
    
    if (pagePath === '/') {
      changeFrequency = 'daily'
      priority = 1.0
    } else if (pagePath === '/blog') {
      changeFrequency = 'weekly'
      priority = 0.8
    } else if (pagePath === '/about' || pagePath === '/process') {
      priority = 0.9
    } else if (pagePath === '/privacy') {
      changeFrequency = 'yearly'
      priority = 0.3
    }
    
    return {
      url: `${SITE_URL}${pagePath}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    }
  })

  // Add blog posts
  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
