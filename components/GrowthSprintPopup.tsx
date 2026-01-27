"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ArrowRight, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const POPUP_SHOWN_KEY = "growth-sprint-popup-shown"
const PAGE_VIEWED_KEY = "growth-sprint-page-viewed"
const TIMER_DURATION = 15000 // 15 seconds

export function GrowthSprintPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const markAsShown = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(POPUP_SHOWN_KEY, "true")
    }
  }, [])

  const handleTypeformClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      // GA4 event for form open
      window.gtag("event", "generate_lead", {
        currency: "USD",
        value: 100,
        lead_source: "growth_sprint_popup",
      })
      // Google Ads conversion for Typeform click
      window.gtag("event", "conversion", {
        send_to: "AW-17619996764/typeform_click",
        value: 100,
        currency: "USD",
      })
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    markAsShown()
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Check if popup was already shown this session
    const alreadyShown = sessionStorage.getItem(POPUP_SHOWN_KEY)
    if (alreadyShown) return

    // Check if this is the first page view in the session
    const hasViewedPage = sessionStorage.getItem(PAGE_VIEWED_KEY)

    if (!hasViewedPage) {
      // First page view - start 15 second timer
      sessionStorage.setItem(PAGE_VIEWED_KEY, "true")
      
      const timer = setTimeout(() => {
        // Double-check it hasn't been shown while waiting
        const stillNotShown = !sessionStorage.getItem(POPUP_SHOWN_KEY)
        if (stillNotShown) {
          setIsOpen(true)
          markAsShown()
        }
      }, TIMER_DURATION)

      return () => clearTimeout(timer)
    } else {
      // Subsequent page view - show immediately
      setIsOpen(true)
      markAsShown()
    }
  }, [mounted, markAsShown])

  if (!mounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent 
        className="sm:max-w-lg max-w-[calc(100%-2rem)] p-0 overflow-hidden border-0 shadow-2xl"
        showCloseButton={false}
      >
        {/* Desktop Layout */}
        <div className="hidden sm:block">
          <div className="relative bg-gradient-to-br from-accent-deep-navy via-accent-deep-navy to-primary p-8">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <Sparkles className="h-24 w-24 text-accent-golden" />
            </div>
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            <DialogHeader className="text-left space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-golden/20 text-accent-golden text-sm font-medium w-fit">
                <Sparkles className="h-4 w-4" />
                Limited Availability
              </div>
              
              <DialogTitle className="text-3xl font-bold text-white leading-tight">
                Apply for a Free<br />
                8-Week Growth Sprint
              </DialogTitle>
              
              <DialogDescription className="text-white/80 text-base leading-relaxed">
                Pattern Growth typically delivers 8-week strategy sprints at $9,500. 
                We're offering three free to the right companies as case study development.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 flex flex-col gap-3 relative z-10">
              <a
                href="https://form.typeform.com/to/vBlOOrU4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTypeformClick}
                className="inline-flex items-center justify-center gap-2 bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 font-bold text-lg px-6 py-4 rounded-lg transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-golden focus-visible:ring-offset-2 focus-visible:ring-offset-accent-deep-navy"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:ryan@patterngrowth.com?subject=Question%20about%20Growth%20Sprint"
                className="text-white/70 hover:text-white text-sm transition-colors py-2 underline underline-offset-2 text-center"
              >
                Questions? Email us!
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout - More compact, bottom-sheet style */}
        <div className="sm:hidden">
          <div className="relative bg-gradient-to-b from-accent-deep-navy to-primary p-6 pb-8">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            <DialogHeader className="text-center space-y-3">
              <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-golden/20 text-accent-golden text-xs font-medium mx-auto">
                <Sparkles className="h-3 w-3" />
                Limited Availability
              </div>
              
              <DialogTitle className="text-xl font-bold text-white leading-tight">
                Free 8-Week Growth Sprint
              </DialogTitle>
              
              <DialogDescription className="text-white/80 text-sm leading-relaxed">
                $9,500 sprints offered free to the right companies as case studies.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://form.typeform.com/to/vBlOOrU4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTypeformClick}
                className="inline-flex items-center justify-center gap-2 bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 font-bold text-base px-5 py-3.5 rounded-lg transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-golden"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a
                href="mailto:ryan@patterngrowth.com?subject=Question%20about%20Growth%20Sprint"
                className="text-white/70 hover:text-white text-xs transition-colors py-2 underline underline-offset-2 text-center"
              >
                Questions? Email us!
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
