export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: number
  content: string
  author: {
    name: string
    title: string
    image: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface NavItem {
  title: string
  href: string
  description?: string
}
