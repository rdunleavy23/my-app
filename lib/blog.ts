import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title ?? 'Untitled',
        description: data.description ?? '',
        publishedAt: data.publishedAt ?? '',
        readingTime: calculateReadingTime(content),
        content,
        author: {
          name: data?.author?.name ?? 'Unknown',
          title: data?.author?.title ?? '',
          image: data?.author?.image ?? '',
        },
        seo: {
          title: data?.seo?.title ?? (data.title ?? 'Untitled'),
          description: data?.seo?.description ?? (data.description ?? ''),
          keywords: data?.seo?.keywords ?? [],
        },
      } as BlogPost
    })

  // 🧩 Filter out test/debug/sha posts globally
  const TEST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i]
  const filteredPosts = allPostsData.filter(
    post => !TEST_PATTERNS.some(rx => rx.test(post.slug))
  )

  return filteredPosts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title ?? 'Untitled',
      description: data.description ?? '',
      publishedAt: data.publishedAt ?? '',
      readingTime: calculateReadingTime(content),
      content,
      author: {
        name: data?.author?.name ?? 'Unknown',
        title: data?.author?.title ?? '',
        image: data?.author?.image ?? '',
      },
      seo: {
        title: data?.seo?.title ?? (data.title ?? 'Untitled'),
        description: data?.seo?.description ?? (data.description ?? ''),
        keywords: data?.seo?.keywords ?? [],
      },
    }
  } catch {
    return null
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
