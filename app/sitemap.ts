import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://patterngrowth.com',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://patterngrowth.com/about',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://patterngrowth.com/blog',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://patterngrowth.com/privacy',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://patterngrowth.com/styleguide',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]
}
