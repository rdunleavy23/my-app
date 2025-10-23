import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground mb-6", className)}
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Helper function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)

  // Map of path segments to readable labels
  const labelMap: Record<string, string> = {
    'blog': 'Blog',
    'fractional-cmo-services': 'Fractional CMO Services',
    'fractional-cmo-hourly-rate': 'Fractional CMO Cost',
    'fractional-cmo-responsibilities': 'Fractional CMO Responsibilities',
    'fractional-marketing-services': 'Fractional Marketing Services',
    'what-is-fractional-cmo': 'What is a Fractional CMO?',
    'benefits-of-fractional-cmo': 'Benefits of Fractional CMO',
  }

  const breadcrumbs: BreadcrumbItem[] = []

  // Build breadcrumb trail
  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Skip blog slug segments (they're not readable)
    if (segments[index - 1] === 'blog' && index > 0) {
      return
    }

    const label = labelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

    breadcrumbs.push({
      label,
      href: index < segments.length - 1 ? currentPath : undefined,
    })
  })

  return breadcrumbs
}
