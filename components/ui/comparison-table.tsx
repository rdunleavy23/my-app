"use client"

import { Check, X, HelpCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"

type CellValue = "check" | "x" | "question"

interface ComparisonRow {
  label: string
  isHighlighted?: boolean
  values: Record<string, CellValue>
}

interface ComparisonTableProps {
  columns: string[]
  rows: ComparisonRow[]
  className?: string
}

function CellIcon({ value }: { value: CellValue }) {
  switch (value) {
    case "check":
      return <Check className="h-5 w-5 text-green-600 dark:text-green-500" aria-label="Yes" />
    case "x":
      return <X className="h-5 w-5 text-red-600 dark:text-red-500" aria-label="No" />
    case "question":
      return <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" aria-label="Maybe" />
  }
}

export function ComparisonTable({ columns, rows, className }: ComparisonTableProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Check if content is scrollable
    const checkScrollable = () => {
      setIsScrollable(container.scrollWidth > container.clientWidth)
    }

    checkScrollable()
    window.addEventListener('resize', checkScrollable)

    // Handle scroll events
    const handleScroll = () => {
      // Hide gradient once user starts scrolling - keep it hidden permanently
      if (container.scrollLeft > 0) {
        setHasScrolled(true)
      }
    }

    container.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkScrollable)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={cn("w-full", className)}>
      <div 
        ref={scrollContainerRef}
        className={cn(
          "overflow-x-auto scrollbar-hide",
          // Show gradient fade hint when user hasn't scrolled yet (mobile only via CSS)
          !hasScrolled && "scroll-fade-right"
        )}
      >
        <table className="w-full border-collapse bg-card">
          <thead>
            <tr>
              <th
                className="border border-border bg-muted/50 p-4 text-left font-semibold"
                scope="col"
              >
                <span className="sr-only">Criteria</span>
              </th>
              {columns.map((column) => (
                <th
                  key={column}
                  className="border border-border bg-muted/50 p-4 text-center font-semibold"
                  scope="col"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={cn(
                  "bg-card",
                  row.isHighlighted && "bg-primary/10 dark:bg-primary/20"
                )}
              >
                <td
                  className={cn(
                    "border border-border p-4 text-left",
                    row.isHighlighted && "font-bold border-primary/30"
                  )}
                >
                  {row.label}
                </td>
                {columns.map((column) => (
                  <td
                    key={column}
                    className={cn(
                      "border border-border p-4 text-center",
                      row.isHighlighted && "border-primary/30"
                    )}
                  >
                    <div className="flex items-center justify-center">
                      <CellIcon value={row.values[column]} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Scroll hint - only show if scrollable and hasn't scrolled yet */}
      {isScrollable && !hasScrolled && (
        <div className="flex items-center justify-center gap-1 mt-2 text-sm text-muted-foreground">
          <span>Scroll to see all</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}

