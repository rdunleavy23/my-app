import { describe, it, expect } from 'vitest'
import { cn, formatDate } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('merges class names correctly', () => {
      const result = cn('foo', 'bar')
      expect(result).toBe('foo bar')
    })

    it('handles conditional classes', () => {
      const result = cn('foo', false && 'bar', 'baz')
      expect(result).toBe('foo baz')
    })

    it('merges tailwind classes correctly', () => {
      const result = cn('px-2 py-1', 'px-4')
      expect(result).toBe('py-1 px-4')
    })

    it('handles arrays of classes', () => {
      const result = cn(['foo', 'bar'], 'baz')
      expect(result).toBe('foo bar baz')
    })

    it('handles undefined and null values', () => {
      const result = cn('foo', undefined, null, 'bar')
      expect(result).toBe('foo bar')
    })

    it('handles empty input', () => {
      const result = cn()
      expect(result).toBe('')
    })
  })

  describe('formatDate', () => {
    it('formats a valid date string correctly', () => {
      const result = formatDate('2024-01-15')
      expect(result).toBe('January 15, 2024')
    })

    it('formats ISO date strings', () => {
      const result = formatDate('2024-12-25T00:00:00.000Z')
      expect(result).toBe('December 25, 2024')
    })

    it('handles different date formats', () => {
      const result = formatDate('2024/03/21')
      expect(result).toBe('March 21, 2024')
    })

    it('formats single-digit days and months correctly', () => {
      const result = formatDate('2024-05-05')
      expect(result).toBe('May 5, 2024')
    })

    it('handles year boundaries', () => {
      const result = formatDate('1999-12-31')
      expect(result).toBe('December 31, 1999')
    })
  })
})
