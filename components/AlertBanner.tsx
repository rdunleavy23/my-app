"use client"

import { X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const STORAGE_KEY = "growth-sprint-banner-dismissed"

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem(STORAGE_KEY)
    setIsVisible(!isDismissed)
  }, [])

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    localStorage.setItem(STORAGE_KEY, "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <a
      href="https://form.typeform.com/to/vBlOOrU4"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-accent-deep-navy text-accent-deep-navy-foreground hover:bg-accent-deep-navy/90 hover:underline transition-colors duration-200"
    >
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-center gap-2 pr-8">
          <span className="text-sm md:text-base font-medium text-center">
            Apply for a Free 8-Week Growth Sprint
          </span>
          <ArrowRight className="h-4 w-4 flex-shrink-0" />
        </div>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-accent-deep-navy-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-deep-navy-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-accent-deep-navy"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </a>
  )
}

