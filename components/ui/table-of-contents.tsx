import Link from "next/link"

interface TocItem {
  href: string
  label: string
}

interface TableOfContentsProps {
  title?: string
  items: TocItem[]
  className?: string
}

export function TableOfContents({ title = "Table of Contents", items, className }: TableOfContentsProps) {
  return (
    <nav
      className={`rounded-lg border border-border bg-muted/30 p-6 ${className ?? ""}`}
      aria-label="Table of contents"
    >
      <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
      <div className="grid gap-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-primary">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
