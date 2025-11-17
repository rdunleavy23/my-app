import { describe, it, expect } from 'vitest'
import {
  createPersonSchema,
  createServiceSchema,
  createOrganizationSchema,
  createWebPageSchema,
  createBlogPostingSchema,
  createFAQSchema,
  createBreadcrumbSchema,
  createBreadcrumbListSchema,
  type Person,
  type Service,
  type Organization,
  type BlogPosting,
} from './schemas'

describe('schemas', () => {
  describe('createPersonSchema', () => {
    it('creates valid Person schema with all fields', () => {
      const person: Person = {
        name: 'John Doe',
        jobTitle: 'Software Engineer',
        description: 'Experienced developer',
        image: 'https://example.com/image.jpg',
      }

      const schema = createPersonSchema(person)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'John Doe',
        jobTitle: 'Software Engineer',
        description: 'Experienced developer',
        image: 'https://example.com/image.jpg',
        worksFor: {
          '@type': 'Organization',
          name: 'Pattern Growth',
          url: 'https://www.patterngrowth.com',
        },
      })
    })

    it('creates valid Person schema without optional image', () => {
      const person: Person = {
        name: 'Jane Smith',
        jobTitle: 'Designer',
        description: 'Creative professional',
      }

      const schema = createPersonSchema(person)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jane Smith',
        jobTitle: 'Designer',
        description: 'Creative professional',
        worksFor: {
          '@type': 'Organization',
          name: 'Pattern Growth',
          url: 'https://www.patterngrowth.com',
        },
      })
      expect(schema).not.toHaveProperty('image')
    })
  })

  describe('createServiceSchema', () => {
    it('creates valid Service schema with all fields', () => {
      const service: Service = {
        name: 'Web Development',
        description: 'Professional web development services',
        url: 'https://example.com/services/web-dev',
        provider: 'Pattern Growth',
        serviceType: 'Development',
        areaServed: 'United States',
        offers: {
          price: '1000',
          priceCurrency: 'USD',
          availability: 'InStock',
        },
      }

      const schema = createServiceSchema(service)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Development',
        description: 'Professional web development services',
        url: 'https://example.com/services/web-dev',
        provider: {
          '@type': 'Organization',
          name: 'Pattern Growth',
        },
        serviceType: 'Development',
        areaServed: 'United States',
        offers: {
          price: '1000',
          priceCurrency: 'USD',
          availability: 'InStock',
        },
      })
    })

    it('creates valid Service schema without optional fields', () => {
      const service: Service = {
        name: 'Consulting',
        description: 'Expert consulting',
        url: 'https://example.com/consulting',
        provider: 'Pattern Growth',
      }

      const schema = createServiceSchema(service)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Consulting',
        description: 'Expert consulting',
        url: 'https://example.com/consulting',
        provider: {
          '@type': 'Organization',
          name: 'Pattern Growth',
        },
      })
      expect(schema).not.toHaveProperty('serviceType')
      expect(schema).not.toHaveProperty('areaServed')
      expect(schema).not.toHaveProperty('offers')
    })
  })

  describe('createOrganizationSchema', () => {
    it('creates valid Organization schema with all fields', () => {
      const org: Organization = {
        name: 'Pattern Growth',
        description: 'Digital marketing agency',
        url: 'https://www.patterngrowth.com',
        logo: 'https://www.patterngrowth.com/logo.png',
        sameAs: [
          'https://twitter.com/patterngrowth',
          'https://linkedin.com/company/patterngrowth',
        ],
        address: {
          streetAddress: '123 Main St',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94102',
          addressCountry: 'US',
        },
        contactPoint: {
          contactType: 'customer service',
          email: 'contact@patterngrowth.com',
          telephone: '+1-555-1234',
        },
      }

      const schema = createOrganizationSchema(org)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pattern Growth',
        description: 'Digital marketing agency',
        url: 'https://www.patterngrowth.com',
        logo: 'https://www.patterngrowth.com/logo.png',
        sameAs: [
          'https://twitter.com/patterngrowth',
          'https://linkedin.com/company/patterngrowth',
        ],
        address: {
          streetAddress: '123 Main St',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94102',
          addressCountry: 'US',
        },
        contactPoint: {
          contactType: 'customer service',
          email: 'contact@patterngrowth.com',
          telephone: '+1-555-1234',
        },
      })
    })

    it('creates valid Organization schema without optional fields', () => {
      const org: Organization = {
        name: 'Simple Org',
        description: 'A simple organization',
        url: 'https://example.com',
      }

      const schema = createOrganizationSchema(org)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Simple Org',
        description: 'A simple organization',
        url: 'https://example.com',
      })
      expect(schema).not.toHaveProperty('logo')
      expect(schema).not.toHaveProperty('sameAs')
      expect(schema).not.toHaveProperty('address')
      expect(schema).not.toHaveProperty('contactPoint')
    })
  })

  describe('createWebPageSchema', () => {
    it('creates valid WebPage schema', () => {
      const schema = createWebPageSchema(
        'Test Page',
        'A test page description',
        'https://example.com/test'
      )

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Test Page',
        description: 'A test page description',
        url: 'https://example.com/test',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Pattern Growth',
          url: 'https://www.patterngrowth.com',
        },
      })
    })
  })

  describe('createBlogPostingSchema', () => {
    it('creates valid BlogPosting schema with all fields', () => {
      const post: BlogPosting = {
        headline: 'My Blog Post',
        description: 'An interesting blog post',
        url: 'https://example.com/blog/my-post',
        datePublished: '2024-01-15',
        dateModified: '2024-01-20',
        author: {
          name: 'John Doe',
          url: 'https://example.com/authors/john',
        },
        publisher: {
          name: 'Pattern Growth',
          logo: 'https://example.com/logo.png',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://example.com/blog/my-post',
        },
        keywords: ['web', 'development', 'tutorial'],
      }

      const schema = createBlogPostingSchema(post)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'My Blog Post',
        description: 'An interesting blog post',
        url: 'https://example.com/blog/my-post',
        datePublished: '2024-01-15',
        dateModified: '2024-01-20',
        author: {
          '@type': 'Person',
          name: 'John Doe',
          url: 'https://example.com/authors/john',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Pattern Growth',
          logo: {
            '@type': 'ImageObject',
            url: 'https://example.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://example.com/blog/my-post',
        },
        keywords: 'web, development, tutorial',
      })
    })

    it('creates valid BlogPosting schema without optional fields', () => {
      const post: BlogPosting = {
        headline: 'Simple Post',
        description: 'A simple post',
        url: 'https://example.com/blog/simple',
        datePublished: '2024-01-15',
        author: {
          name: 'Jane Smith',
        },
        publisher: {
          name: 'Pattern Growth',
          logo: 'https://example.com/logo.png',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://example.com/blog/simple',
        },
      }

      const schema = createBlogPostingSchema(post)

      expect(schema).not.toHaveProperty('dateModified')
      expect(schema).not.toHaveProperty('keywords')
      expect(schema.author).not.toHaveProperty('url')
    })
  })

  describe('createFAQSchema', () => {
    it('creates valid FAQPage schema', () => {
      const faqs = [
        {
          '@type': 'Question' as const,
          name: 'What is this?',
          acceptedAnswer: {
            '@type': 'Answer' as const,
            text: 'This is an answer.',
          },
        },
        {
          '@type': 'Question' as const,
          name: 'How does it work?',
          acceptedAnswer: {
            '@type': 'Answer' as const,
            text: 'It works like this.',
          },
        },
      ]

      const schema = createFAQSchema(faqs)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs,
      })
    })

    it('handles empty FAQ array', () => {
      const schema = createFAQSchema([])

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [],
      })
    })
  })

  describe('createBreadcrumbSchema', () => {
    it('creates valid BreadcrumbList schema', () => {
      const breadcrumbs = [
        { '@type': 'ListItem' as const, position: 1, name: 'Home', item: 'https://example.com' },
        { '@type': 'ListItem' as const, position: 2, name: 'Blog', item: 'https://example.com/blog' },
        { '@type': 'ListItem' as const, position: 3, name: 'Post', item: 'https://example.com/blog/post' },
      ]

      const schema = createBreadcrumbSchema(breadcrumbs)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://example.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://example.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Post', item: 'https://example.com/blog/post' },
        ],
      })
    })

    it('maintains position order', () => {
      const breadcrumbs = [
        { '@type': 'ListItem' as const, position: 5, name: 'A', item: 'https://example.com/a' },
        { '@type': 'ListItem' as const, position: 10, name: 'B', item: 'https://example.com/b' },
      ]

      const schema = createBreadcrumbSchema(breadcrumbs)

      expect(schema.itemListElement[0].position).toBe(1) // Re-indexed to 1
      expect(schema.itemListElement[1].position).toBe(2) // Re-indexed to 2
    })
  })

  describe('createBreadcrumbListSchema', () => {
    it('creates valid BreadcrumbList schema with hrefs', () => {
      const items = [
        { label: 'Home', href: '/', position: 1 },
        { label: 'Blog', href: '/blog', position: 2 },
        { label: 'Post', href: '/blog/post', position: 3 },
      ]

      const schema = createBreadcrumbListSchema(items)

      expect(schema).toEqual({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.patterngrowth.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.patterngrowth.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Post', item: 'https://www.patterngrowth.com/blog/post' },
        ],
      })
    })

    it('handles items without hrefs', () => {
      const items = [
        { label: 'Home', href: '/', position: 1 },
        { label: 'Current Page', position: 2 },
      ]

      const schema = createBreadcrumbListSchema(items)

      expect(schema.itemListElement[0].item).toBe('https://www.patterngrowth.com/')
      expect(schema.itemListElement[1].item).toBeUndefined()
    })

    it('auto-increments positions if not provided', () => {
      const items = [
        { label: 'Home', href: '/', position: 0 },
        { label: 'Blog', href: '/blog', position: 0 },
      ]

      const schema = createBreadcrumbListSchema(items)

      // Should use index + 1 when position is 0/falsy
      expect(schema.itemListElement[0].position).toBe(1)
      expect(schema.itemListElement[1].position).toBe(2)
    })
  })
})
