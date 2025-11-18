import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {
  validateEventName,
  validateParameterName,
  sanitizeString,
  getCurrentPageInfo,
  GA4_EVENTS,
} from './analytics-events'

describe('analytics-events', () => {
  describe('validateEventName', () => {
    it('accepts valid event names', () => {
      expect(validateEventName('cta_click')).toBe(true)
      expect(validateEventName('form_submit')).toBe(true)
      expect(validateEventName('scroll_depth')).toBe(true)
      expect(validateEventName('a')).toBe(true)
      expect(validateEventName('a1')).toBe(true)
    })

    it('rejects event names starting with numbers', () => {
      expect(validateEventName('1_invalid')).toBe(false)
      expect(validateEventName('9event')).toBe(false)
    })

    it('rejects event names with uppercase letters', () => {
      expect(validateEventName('InvalidEvent')).toBe(false)
      expect(validateEventName('CTA_Click')).toBe(false)
    })

    it('rejects event names with special characters', () => {
      expect(validateEventName('event-name')).toBe(false)
      expect(validateEventName('event.name')).toBe(false)
      expect(validateEventName('event name')).toBe(false)
      expect(validateEventName('event@name')).toBe(false)
    })

    it('accepts underscores in event names', () => {
      expect(validateEventName('valid_event_name')).toBe(true)
      expect(validateEventName('event_123')).toBe(true)
    })

    it('rejects event names longer than 40 characters', () => {
      const longName = 'a'.repeat(41)
      expect(validateEventName(longName)).toBe(false)
    })

    it('accepts event names exactly 40 characters', () => {
      const exactName = 'a'.repeat(40)
      expect(validateEventName(exactName)).toBe(true)
    })

    it('rejects empty strings', () => {
      expect(validateEventName('')).toBe(false)
    })
  })

  describe('validateParameterName', () => {
    it('accepts valid parameter names', () => {
      expect(validateParameterName('cta_location')).toBe(true)
      expect(validateParameterName('form_name')).toBe(true)
      expect(validateParameterName('page_location')).toBe(true)
      expect(validateParameterName('a')).toBe(true)
    })

    it('rejects parameter names starting with numbers', () => {
      expect(validateParameterName('1_param')).toBe(false)
      expect(validateParameterName('99bottles')).toBe(false)
    })

    it('rejects parameter names with uppercase letters', () => {
      expect(validateParameterName('InvalidParam')).toBe(false)
      expect(validateParameterName('pageLocation')).toBe(false)
    })

    it('rejects parameter names with special characters', () => {
      expect(validateParameterName('param-name')).toBe(false)
      expect(validateParameterName('param.name')).toBe(false)
      expect(validateParameterName('param name')).toBe(false)
    })

    it('accepts underscores in parameter names', () => {
      expect(validateParameterName('valid_param_name')).toBe(true)
      expect(validateParameterName('param_123')).toBe(true)
    })

    it('rejects parameter names longer than 40 characters', () => {
      const longName = 'a'.repeat(41)
      expect(validateParameterName(longName)).toBe(false)
    })

    it('accepts parameter names exactly 40 characters', () => {
      const exactName = 'a'.repeat(40)
      expect(validateParameterName(exactName)).toBe(true)
    })

    it('rejects empty strings', () => {
      expect(validateParameterName('')).toBe(false)
    })
  })

  describe('sanitizeString', () => {
    it('removes special characters', () => {
      expect(sanitizeString('Hello@World!')).toBe('HelloWorld')
      expect(sanitizeString('Test#String%')).toBe('TestString')
      expect(sanitizeString('Email@example.com')).toBe('Emailexamplecom')
    })

    it('preserves alphanumeric characters', () => {
      expect(sanitizeString('Test123')).toBe('Test123')
      expect(sanitizeString('abc123XYZ')).toBe('abc123XYZ')
    })

    it('preserves spaces', () => {
      expect(sanitizeString('Hello World')).toBe('Hello World')
      expect(sanitizeString('Multiple   Spaces')).toBe('Multiple   Spaces')
    })

    it('preserves hyphens', () => {
      expect(sanitizeString('kebab-case')).toBe('kebab-case')
      expect(sanitizeString('test-string-123')).toBe('test-string-123')
    })

    it('preserves underscores', () => {
      expect(sanitizeString('snake_case')).toBe('snake_case')
      expect(sanitizeString('test_string_123')).toBe('test_string_123')
    })

    it('truncates to default max length (100)', () => {
      const longString = 'a'.repeat(150)
      const result = sanitizeString(longString)
      expect(result).toHaveLength(100)
    })

    it('truncates to custom max length', () => {
      const longString = 'a'.repeat(100)
      const result = sanitizeString(longString, 50)
      expect(result).toHaveLength(50)
    })

    it('handles strings shorter than max length', () => {
      expect(sanitizeString('short', 100)).toBe('short')
      expect(sanitizeString('test', 10)).toBe('test')
    })

    it('handles empty strings', () => {
      expect(sanitizeString('')).toBe('')
      expect(sanitizeString('', 50)).toBe('')
    })

    it('removes multiple types of special characters', () => {
      expect(sanitizeString('!@#$%^&*()+=[]{};:\'"<>,.?/|\\`~')).toBe('')
    })

    it('handles mixed content', () => {
      expect(sanitizeString('Contact: user@example.com (555) 123-4567'))
        .toBe('Contact userexamplecom 555 123-4567')
    })
  })

  describe('getCurrentPageInfo', () => {
    const originalWindow = global.window
    const originalDocument = global.document

    afterEach(() => {
      global.window = originalWindow
      global.document = originalDocument
    })

    it('returns empty strings on server-side (no window)', () => {
      // @ts-expect-error - intentionally setting window to undefined
      global.window = undefined
      const result = getCurrentPageInfo()
      expect(result).toEqual({
        page_location: '',
        page_title: '',
      })
    })

    it('returns current page info on client-side', () => {
      const mockWindow = {
        location: {
          pathname: '/blog/test-post',
        },
      }
      const mockDocument = {
        title: 'Test Blog Post',
      }

      // @ts-expect-error - mocking window
      global.window = mockWindow
      // @ts-expect-error - mocking document
      global.document = mockDocument

      const result = getCurrentPageInfo()
      expect(result).toEqual({
        page_location: '/blog/test-post',
        page_title: 'Test Blog Post',
      })
    })

    it('handles root path', () => {
      const mockWindow = {
        location: {
          pathname: '/',
        },
      }
      const mockDocument = {
        title: 'Home Page',
      }

      // @ts-expect-error - mocking window
      global.window = mockWindow
      // @ts-expect-error - mocking document
      global.document = mockDocument

      const result = getCurrentPageInfo()
      expect(result).toEqual({
        page_location: '/',
        page_title: 'Home Page',
      })
    })
  })

  describe('GA4_EVENTS constants', () => {
    it('has all expected event names', () => {
      expect(GA4_EVENTS.CTA_CLICK).toBe('cta_click')
      expect(GA4_EVENTS.FORM_START).toBe('form_start')
      expect(GA4_EVENTS.FORM_SUBMIT).toBe('form_submit')
      expect(GA4_EVENTS.FORM_ERROR).toBe('form_error')
      expect(GA4_EVENTS.SCROLL_DEPTH).toBe('scroll_depth')
      expect(GA4_EVENTS.SECTION_VIEW).toBe('section_view')
      expect(GA4_EVENTS.OUTBOUND_CLICK).toBe('outbound_click')
      expect(GA4_EVENTS.NAVIGATION_CLICK).toBe('navigation_click')
      expect(GA4_EVENTS.BLOG_POST_VIEW).toBe('blog_post_view')
      expect(GA4_EVENTS.FAQ_EXPAND).toBe('faq_expand')
    })

    it('all event names follow GA4 naming conventions', () => {
      Object.values(GA4_EVENTS).forEach(eventName => {
        expect(validateEventName(eventName)).toBe(true)
      })
    })
  })
})
