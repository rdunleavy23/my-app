import Link from "next/link"
import { ArrowRight, BookOpen, Users, DollarSign, Clock, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface RelatedLink {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  priority?: 'high' | 'medium' | 'low'
  keywords?: string[]
  category?: string
}

interface RelatedContentProps {
  currentPage: string
  className?: string
  variant?: 'cards' | 'inline' | 'sidebar'
  maxLinks?: number
}

// Page metadata for automatic relationship detection
interface PageMetadata {
  path: string
  title: string
  description: string
  keywords: string[]
  category: 'service' | 'blog' | 'process' | 'about'
  priority: number
}

// Automatic content discovery - reads from your file system
function getAllPageMetadata(): PageMetadata[] {
  const pages: PageMetadata[] = [
    // Service pages
    {
      path: '/what-is-fractional-cmo',
      title: 'What is a Fractional CMO?',
      description: 'Complete guide to fractional CMO services, costs, and alternatives',
      keywords: ['what is fractional cmo', 'fractional cmo', 'fractional cmo definition', 'fractional cmo meaning', 'fractional chief marketing officer', 'fractional cmo services', 'fractional cmo cost', 'fractional cmo alternative', 'part-time cmo', 'fractional cmo vs full-time', 'fractional marketing leadership'],
      category: 'service',
      priority: 10
    },
    {
      path: '/fractional-cmo-hourly-rate',
      title: 'Fractional CMO Cost & Pricing',
      description: 'Understand fractional CMO pricing and compare alternatives',
      keywords: ['fractional cmo cost', 'fractional cmo pricing', 'fractional cmo rates', 'fractional cmo hourly rate', 'how much does fractional cmo cost', 'cmo consulting rates', 'marketing consulting pricing', 'fractional cmo retainer cost', 'project-based marketing pricing', 'marketing consulting fees'],
      category: 'service',
      priority: 9
    },
    {
      path: '/fractional-cmo-services',
      title: 'Fractional CMO Services',
      description: 'Explore fractional CMO service models and engagement types',
      keywords: ['fractional cmo services', 'fractional cmo', 'marketing consulting services', 'cmo services', 'fractional marketing leadership', 'outsourced cmo services', 'part-time cmo services'],
      category: 'service',
      priority: 8
    },
    {
      path: '/fractional-cmo-responsibilities',
      title: 'Fractional CMO Responsibilities',
      description: 'What fractional CMOs do and how they work with companies',
      keywords: ['fractional cmo responsibilities', 'fractional cmo', 'cmo duties', 'marketing leadership', 'what does fractional cmo do', 'cmo role', 'fractional cmo job description'],
      category: 'service',
      priority: 7
    },
    {
      path: '/benefits-of-fractional-cmo',
      title: 'Benefits of Fractional CMO',
      description: 'Advantages and considerations for fractional CMO engagements',
      keywords: ['fractional cmo benefits', 'fractional cmo', 'marketing consulting benefits', 'outsourced cmo', 'benefits of hiring fractional cmo', 'fractional cmo advantages', 'part-time cmo benefits'],
      category: 'service',
      priority: 7
    },
    {
      path: '/fractional-marketing-services',
      title: 'Fractional Marketing Services',
      description: 'Full-service marketing support beyond CMO strategy',
      keywords: ['fractional marketing services', 'fractional marketing', 'marketing services', 'outsourced marketing', 'part-time marketing', 'marketing consulting', 'fractional marketing team'],
      category: 'service',
      priority: 6
    },
    {
      path: '/process',
      title: 'Growth Strategy Sprint Process',
      description: 'Our 8-week project-based marketing consulting methodology',
      keywords: ['growth strategy', 'marketing strategy process', 'project-based consulting', 'strategy sprint', 'growth strategy consulting', 'marketing strategy development', '8-week strategy sprint', 'marketing consulting process'],
      category: 'process',
      priority: 9
    },
    {
      path: '/about',
      title: 'About Pattern Growth',
      description: 'Meet the team behind Pattern Growth',
      keywords: ['about', 'team', 'company'],
      category: 'about',
      priority: 5
    }
  ]

  // Automatically add blog posts from content directory
  try {
    const postsDirectory = path.join(process.cwd(), 'content/posts')
    if (fs.existsSync(postsDirectory)) {
      const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
      
      files.forEach(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        // Skip test posts
        if (/^(test|debug|sha-|hello-from-api)/i.test(slug)) return
        
        try {
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data } = matter(fileContents)
          
          if (data.published === false) return
          
          pages.push({
            path: `/blog/${slug}`,
            title: data.title || slug.replace(/-/g, ' '),
            description: data.description || '',
            keywords: data.seo?.keywords || [],
            category: 'blog',
            priority: data.priority === 'blog-pillar' ? 8 : 6
          })
        } catch (err) {
          // Skip files that can't be parsed
        }
      })
    }
  } catch (err) {
    // If content directory doesn't exist, just use hardcoded pages
  }

  return pages
}

// Calculate relevance score between two pages
function calculateRelevance(currentPath: string, targetPage: PageMetadata): number {
  let score = 0
  
  // Get current page metadata
  const allPages = getAllPageMetadata()
  const currentPage = allPages.find(p => p.path === currentPath)
  if (!currentPage) return 0
  
  // Don't suggest the current page
  if (currentPath === targetPage.path) return 0
  
  // Category matching (same category = more relevant)
  if (currentPage.category === targetPage.category) {
    score += 3
  }
  
  // Keyword overlap
  const currentKeywords = new Set(currentPage.keywords.map(k => k.toLowerCase()))
  const targetKeywords = targetPage.keywords.map(k => k.toLowerCase())
  
  targetKeywords.forEach(keyword => {
    if (currentKeywords.has(keyword)) {
      score += 5 // Exact keyword match
    } else {
      // Partial match (e.g., "fractional cmo" matches "fractional cmo cost")
      Array.from(currentKeywords).forEach(currentKeyword => {
        if (keyword.includes(currentKeyword) || currentKeyword.includes(keyword)) {
          score += 2
        }
      })
    }
  })
  
  // Priority boost (higher priority pages are more valuable to suggest)
  score += targetPage.priority * 0.5
  
  // Prefer service pages over blog posts when on service pages
  if (currentPage.category === 'service' && targetPage.category === 'service') {
    score += 2
  }
  
  // Prefer blog posts when on blog pages
  if (currentPage.category === 'blog' && targetPage.category === 'blog') {
    score += 2
  }
  
  return score
}

// Automatically generate related content
function getRelatedContent(currentPath: string, maxLinks: number = 3): RelatedLink[] {
  const allPages = getAllPageMetadata()
  
  // Calculate relevance scores for all pages
  const scored = allPages
    .map(page => ({
      ...page,
      relevanceScore: calculateRelevance(currentPath, page)
    }))
    .filter(page => page.relevanceScore > 0) // Only show pages with some relevance
    .sort((a, b) => b.relevanceScore - a.relevanceScore) // Sort by relevance
    .slice(0, maxLinks) // Take top N
  
  // Convert to RelatedLink format
  return scored.map(page => ({
    title: page.title,
    description: page.description,
    href: page.path,
    icon: getIconForCategory(page.category),
    priority: page.relevanceScore > 10 ? 'high' : page.relevanceScore > 5 ? 'medium' : 'low'
  }))
}

// Get appropriate icon for content category
function getIconForCategory(category: string): React.ReactNode {
  switch (category) {
    case 'service':
      return <Users className="h-5 w-5" />
    case 'blog':
      return <BookOpen className="h-5 w-5" />
    case 'process':
      return <Target className="h-5 w-5" />
    case 'about':
      return <CheckCircle className="h-5 w-5" />
    default:
      return <BookOpen className="h-5 w-5" />
  }
}

// Manual overrides for special cases (e.g., external links)
const MANUAL_OVERRIDES: Record<string, RelatedLink[]> = {
  // Example: You can manually add special links for specific pages
  // '/process': [
  //   {
  //     title: "Schedule a Strategy Call",
  //     description: "Book a 30-minute consultation",
  //     href: "https://cal.com/pattern-growth/30min",
  //     icon: <Users className="h-5 w-5" />,
  //     priority: 'high'
  //   }
  // ]
}

export default function RelatedContent({
  currentPage,
  className,
  variant = 'cards',
  maxLinks = 3
}: RelatedContentProps) {
  // Check for manual overrides first
  let displayLinks: RelatedLink[] = []
  
  if (MANUAL_OVERRIDES[currentPage]) {
    // Use manual overrides if specified
    displayLinks = MANUAL_OVERRIDES[currentPage].slice(0, maxLinks)
  } else {
    // Use automatic content discovery
    displayLinks = getRelatedContent(currentPage, maxLinks)
  }

  if (displayLinks.length === 0) return null

  if (variant === 'inline') {
    return (
      <div className={cn("mt-8 pt-6 border-t border-border", className)}>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Continue reading:</strong>
        </p>
        <div className="flex flex-wrap gap-2">
          {displayLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="inline-flex items-center gap-2 text-sm bg-muted/50 hover:bg-muted px-3 py-2 rounded-lg transition-colors"
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={cn("space-y-4", className)}>
        <h3 className="text-sm font-semibold text-foreground">Related Content</h3>
        <div className="space-y-3">
          {displayLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block group"
            >
              <div className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 mt-0.5 text-primary">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {link.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Default cards variant
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Continue Learning</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayLinks.map((link, index) => (
          <Card key={index} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                    {link.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {link.description}
              </p>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-3 group-hover:gap-2"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
