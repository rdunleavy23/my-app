import Link from "next/link"
import { BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface LearnMoreLink {
  title: string
  description: string
  href: string
}

interface LearnMoreSectionProps {
  title?: string
  links: LearnMoreLink[]
  className?: string
}

export function LearnMoreSection({ 
  title = "Learn more about growth strategy", 
  links, 
  className 
}: LearnMoreSectionProps) {
  return (
    <section className={cn("mt-16 pt-8 border-t", className)}>
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all"
          >
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

