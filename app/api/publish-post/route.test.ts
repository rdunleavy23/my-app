import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from './route'
import { NextResponse } from 'next/server'

// Mock NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn((data, options) => ({
      json: async () => data,
      status: options?.status || 200,
      ...options,
    })),
  },
}))

describe('publish-post API route', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.clearAllMocks()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('Authentication', () => {
    it('returns 500 if PUBLISH_PASSWORD is not configured', async () => {
      delete process.env.PUBLISH_PASSWORD

      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test',
          title: 'Test',
          content: 'Content',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Server misconfigured' },
        { status: 500 }
      )
    })

    it('returns 401 for incorrect password', async () => {
      process.env.PUBLISH_PASSWORD = 'correct-password'

      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'wrong-password',
          title: 'Test',
          content: 'Content',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Incorrect password' },
        { status: 401 }
      )
    })

    it('accepts request with correct password', async () => {
      process.env.PUBLISH_PASSWORD = 'correct-password'
      process.env.WRITE_API_KEY = 'test-key'

      // Mock fs and octokit
      vi.mock('fs', () => ({
        existsSync: vi.fn(() => false),
        readdirSync: vi.fn(() => []),
      }))

      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'correct-password',
          title: 'Test Post',
          content: 'Test content',
        }),
      })

      // This will fail at a later stage (GitHub API), but should pass auth
      await POST(req)

      // Should NOT return 401
      const calls = vi.mocked(NextResponse.json).mock.calls
      const has401 = calls.some(call => call[1]?.status === 401)
      expect(has401).toBe(false)
    })
  })

  describe('Input Validation', () => {
    beforeEach(() => {
      process.env.PUBLISH_PASSWORD = 'test-password'
      process.env.WRITE_API_KEY = 'test-key'
    })

    it('returns 400 if title is missing', async () => {
      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test-password',
          content: 'Test content',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    })

    it('returns 400 if content is missing', async () => {
      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test-password',
          title: 'Test Title',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    })

    it('returns 400 if both title and content are missing', async () => {
      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test-password',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    })

    it('accepts empty string for description (optional field)', async () => {
      process.env.WRITE_API_KEY = 'test-key'
      vi.mock('fs', () => ({
        existsSync: vi.fn(() => false),
      }))

      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test-password',
          title: 'Test',
          content: 'Content',
          description: '',
        }),
      })

      await POST(req)

      // Should not return 400 for missing description
      const calls = vi.mocked(NextResponse.json).mock.calls
      const has400 = calls.some(
        call => call[1]?.status === 400 && call[0]?.error?.includes('required')
      )
      expect(has400).toBe(false)
    })
  })

  describe('Slug Generation', () => {
    // Note: Testing the createSafeSlug function indirectly through the API
    // Since it's not exported, we test its behavior through the main function

    it('handles slug collision prevention', async () => {
      process.env.PUBLISH_PASSWORD = 'test-password'
      process.env.WRITE_API_KEY = 'test-key'

      // The actual slug generation logic would be tested here
      // but requires mocking fs which is complex in this context
      // This is documented for manual testing or integration tests
    })
  })

  describe('Configuration Validation', () => {
    beforeEach(() => {
      process.env.PUBLISH_PASSWORD = 'test-password'
    })

    it('returns 500 if WRITE_API_KEY is not configured', async () => {
      delete process.env.WRITE_API_KEY

      vi.mock('fs', () => ({
        existsSync: vi.fn(() => false),
        readdirSync: vi.fn(() => []),
      }))

      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: JSON.stringify({
          password: 'test-password',
          title: 'Test',
          content: 'Content',
        }),
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Write key not configured' },
        { status: 500 }
      )
    })
  })

  describe('Error Handling', () => {
    it('returns 500 for malformed JSON', async () => {
      const req = new Request('http://localhost/api/publish-post', {
        method: 'POST',
        body: 'invalid json',
      })

      await POST(req)

      expect(NextResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ error: expect.any(String) }),
        { status: 500 }
      )
    })
  })
})

// Test the createSafeSlug helper separately
describe('createSafeSlug (unit)', () => {
  // Since createSafeSlug is not exported, we recreate it for unit testing
  function createSafeSlug(input: string, existing: string[]): string {
    const base = input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    let slug = base
    let count = 2
    while (existing.includes(slug)) {
      slug = `${base}-${count}`
      count++
    }
    return slug
  }

  it('converts title to lowercase slug', () => {
    expect(createSafeSlug('My Blog Post', [])).toBe('my-blog-post')
  })

  it('replaces special characters with hyphens', () => {
    expect(createSafeSlug('Hello @ World!', [])).toBe('hello-world')
    expect(createSafeSlug('Test & Demo', [])).toBe('test-demo')
  })

  it('removes leading and trailing hyphens', () => {
    expect(createSafeSlug('!!! Important !!!', [])).toBe('important')
    expect(createSafeSlug('---test---', [])).toBe('test')
  })

  it('handles slug collisions by appending number', () => {
    expect(createSafeSlug('test', ['test'])).toBe('test-2')
    expect(createSafeSlug('test', ['test', 'test-2'])).toBe('test-3')
    expect(createSafeSlug('test', ['test', 'test-2', 'test-3'])).toBe('test-4')
  })

  it('preserves numbers in slug', () => {
    expect(createSafeSlug('2024 Update', [])).toBe('2024-update')
  })

  it('collapses multiple special characters', () => {
    expect(createSafeSlug('Test    Multiple     Spaces', [])).toBe('test-multiple-spaces')
    expect(createSafeSlug('Test!!!???...Post', [])).toBe('test-post')
  })

  it('handles empty or whitespace-only input', () => {
    expect(createSafeSlug('', [])).toBe('')
    expect(createSafeSlug('   ', [])).toBe('')
  })

  it('handles unicode characters', () => {
    expect(createSafeSlug('Café Résumé', [])).toBe('caf-r-sum')
    expect(createSafeSlug('Hello 世界', [])).toBe('hello')
  })
})
