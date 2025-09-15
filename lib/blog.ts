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
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        readingTime: calculateReadingTime(content),
        content,
        author: data.author,
        seo: data.seo
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      readingTime: calculateReadingTime(content),
      content,
      author: data.author,
      seo: data.seo
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
