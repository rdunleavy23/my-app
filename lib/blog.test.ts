import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getAllPosts, getPostBySlug } from './blog'
import type { BlogPost } from './types'

// Mock the fs module
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    readFileSync: vi.fn(),
  },
}))

// Mock gray-matter
vi.mock('gray-matter', () => ({
  default: vi.fn(),
}))

import fs from 'fs'
import matter from 'gray-matter'

describe('blog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllPosts', () => {
    it('returns empty array when posts directory does not exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false)

      const result = getAllPosts()

      expect(result).toEqual([])
      expect(fs.existsSync).toHaveBeenCalled()
      expect(fs.readdirSync).not.toHaveBeenCalled()
    })

    it('returns empty array when no markdown files exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['README.txt', 'package.json'] as any)

      const result = getAllPosts()

      expect(result).toEqual([])
    })

    it('parses markdown files correctly', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['post1.md', 'post2.md'] as any)

      vi.mocked(fs.readFileSync)
        .mockReturnValueOnce('---\ntitle: Post 1\n---\nContent 1')
        .mockReturnValueOnce('---\ntitle: Post 2\n---\nContent 2')

      vi.mocked(matter)
        .mockReturnValueOnce({
          data: {
            title: 'First Post',
            description: 'First post description',
            publishedAt: '2024-01-15',
            author: { name: 'John Doe', title: 'Developer', image: '/author.jpg' },
            seo: { title: 'SEO Title', description: 'SEO Desc', keywords: ['test'] },
          },
          content: 'This is the first post content with some words.',
        } as any)
        .mockReturnValueOnce({
          data: {
            title: 'Second Post',
            description: 'Second post description',
            publishedAt: '2024-01-20',
            author: { name: 'Jane Smith', title: 'Designer', image: '/author2.jpg' },
            seo: { title: 'SEO Title 2', description: 'SEO Desc 2', keywords: ['test2'] },
          },
          content: 'This is the second post content with more words to read.',
        } as any)

      const result = getAllPosts()

      expect(result).toHaveLength(2)
      expect(result[0].title).toBe('Second Post') // Sorted by date descending
      expect(result[1].title).toBe('First Post')
    })

    it('filters out test/debug/sha posts', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue([
        'valid-post.md',
        'test-post.md',
        'debug-post.md',
        'sha-abc123.md',
        'hello-from-api.md',
      ] as any)

      vi.mocked(fs.readFileSync).mockReturnValue('---\ntitle: Test\n---\nContent')

      vi.mocked(matter).mockReturnValue({
        data: {
          title: 'Test',
          publishedAt: '2024-01-15',
        },
        content: 'Short content here.',
      } as any)

      const result = getAllPosts()

      expect(result).toHaveLength(1)
      expect(result[0].slug).toBe('valid-post')
    })

    it('handles missing frontmatter fields with defaults', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['minimal-post.md'] as any)
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')

      vi.mocked(matter).mockReturnValue({
        data: {},
        content: 'This is some content to calculate reading time.',
      } as any)

      const result = getAllPosts()

      expect(result).toHaveLength(1)
      expect(result[0]).toMatchObject({
        slug: 'minimal-post',
        title: 'Untitled',
        description: '',
        publishedAt: '',
        author: {
          name: 'Unknown',
          title: '',
          image: '',
        },
        seo: {
          title: 'Untitled',
          description: '',
          keywords: [],
        },
      })
    })

    it('calculates reading time correctly', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['post.md'] as any)
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')

      // 200 words at 200 WPM = 1 minute
      const content200Words = 'word '.repeat(200).trim()
      vi.mocked(matter).mockReturnValue({
        data: { title: 'Test', publishedAt: '2024-01-15' },
        content: content200Words,
      } as any)

      const result = getAllPosts()

      expect(result[0].readingTime).toBe(1)
    })

    it('rounds up reading time', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['post.md'] as any)
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')

      // 250 words at 200 WPM = 1.25 minutes, should round to 2
      const content250Words = 'word '.repeat(250).trim()
      vi.mocked(matter).mockReturnValue({
        data: { title: 'Test', publishedAt: '2024-01-15' },
        content: content250Words,
      } as any)

      const result = getAllPosts()

      expect(result[0].readingTime).toBe(2)
    })

    it('sorts posts by publishedAt date descending', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['p1.md', 'p2.md', 'p3.md'] as any)
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')

      vi.mocked(matter)
        .mockReturnValueOnce({
          data: { title: 'Old', publishedAt: '2024-01-01' },
          content: 'content',
        } as any)
        .mockReturnValueOnce({
          data: { title: 'Newest', publishedAt: '2024-03-01' },
          content: 'content',
        } as any)
        .mockReturnValueOnce({
          data: { title: 'Middle', publishedAt: '2024-02-01' },
          content: 'content',
        } as any)

      const result = getAllPosts()

      expect(result.map(p => p.title)).toEqual(['Newest', 'Middle', 'Old'])
    })
  })

  describe('getPostBySlug', () => {
    it('returns post when file exists', () => {
      vi.mocked(fs.readFileSync).mockReturnValue('---\ntitle: Test\n---\nContent')
      vi.mocked(matter).mockReturnValue({
        data: {
          title: 'Test Post',
          description: 'Test description',
          publishedAt: '2024-01-15',
          author: { name: 'John Doe', title: 'Dev', image: '/img.jpg' },
          seo: { title: 'SEO', description: 'SEO desc', keywords: ['test'] },
        },
        content: 'This is test content.',
      } as any)

      const result = getPostBySlug('test-post')

      expect(result).not.toBeNull()
      expect(result?.slug).toBe('test-post')
      expect(result?.title).toBe('Test Post')
    })

    it('returns null when file does not exist', () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File not found')
      })

      const result = getPostBySlug('non-existent')

      expect(result).toBeNull()
    })

    it('handles missing frontmatter fields with defaults', () => {
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')
      vi.mocked(matter).mockReturnValue({
        data: {},
        content: 'Content here.',
      } as any)

      const result = getPostBySlug('minimal')

      expect(result).toMatchObject({
        slug: 'minimal',
        title: 'Untitled',
        description: '',
        publishedAt: '',
        author: {
          name: 'Unknown',
          title: '',
          image: '',
        },
        seo: {
          title: 'Untitled',
          description: '',
          keywords: [],
        },
      })
    })

    it('uses fallback SEO values from main fields', () => {
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')
      vi.mocked(matter).mockReturnValue({
        data: {
          title: 'Main Title',
          description: 'Main Description',
        },
        content: 'Content.',
      } as any)

      const result = getPostBySlug('test')

      expect(result?.seo.title).toBe('Main Title')
      expect(result?.seo.description).toBe('Main Description')
    })

    it('calculates reading time for the post', () => {
      vi.mocked(fs.readFileSync).mockReturnValue('---\n---\nContent')
      const content100Words = 'word '.repeat(100).trim()
      vi.mocked(matter).mockReturnValue({
        data: { title: 'Test' },
        content: content100Words,
      } as any)

      const result = getPostBySlug('test')

      expect(result?.readingTime).toBe(1) // 100 words / 200 WPM = 0.5, rounds to 1
    })

    it('handles read errors gracefully', () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('Permission denied')
      })

      const result = getPostBySlug('error-post')

      expect(result).toBeNull()
    })
  })
})
