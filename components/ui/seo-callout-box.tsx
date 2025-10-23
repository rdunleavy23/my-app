import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SEOCalloutBoxProps {
  title: string
  description: string
  href: string
  className?: string
}

export function SEOCalloutBox({ title, description, href, className }: SEOCalloutBoxProps) {
  return (
    <div className={cn(
      "my-8 p-6 bg-muted/50 border-l-4 border-l-primary rounded-r-lg",
      className
    )}>
      <p className="text-sm font-semibold text-primary mb-2">Related insight</p>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        <Link href={href} className="hover:text-primary transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground mb-3">
        {description}
      </p>
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        Read more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

