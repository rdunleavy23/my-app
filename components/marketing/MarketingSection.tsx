import { cn } from "@/lib/utils"

interface MarketingSectionProps {
  variant?: "default" | "chapter" | "decision"
  className?: string
  children: React.ReactNode
}

export function MarketingSection({
  variant = "default",
  className,
  children
}: MarketingSectionProps) {
  const variantClasses = {
    default: "bg-background text-foreground",
    chapter: "bg-secondary/25 text-foreground",
    decision: "bg-primary text-primary-foreground"
  }

  return (
    <section className={cn("py-16 sm:py-20", variantClasses[variant], className)}>
      {children}
    </section>
  )
}
