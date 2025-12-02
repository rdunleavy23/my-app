"use client"

import * as React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { CheckCircle2 } from "lucide-react"
import { DesktopSidebar } from "./process-stepper"
import { FrameworkRenderer } from "./framework-renderer"
import { cn } from "@/lib/utils"

interface Subsection {
  heading: string
  paragraphs: string[]
}

interface ProcessSection {
  id: string
  number: number
  title: string
  timeline: string
  intro: string
  subsections: Subsection[]
  deliverables: string[]
}

interface ProcessPhasesDesktopProps {
  sections: ProcessSection[]
  additionalSubsections?: {
    infrastructure: Subsection
    transfer: Subsection
  }
  className?: string
}

export function ProcessPhasesDesktop({ 
  sections, 
  additionalSubsections,
  className 
}: ProcessPhasesDesktopProps) {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // Scroll-linked progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY

      // Find which section is most visible
      let bestIdx = 0
      let bestScore = -Infinity

      sectionRefs.current.forEach((ref, idx) => {
        if (!ref) return
        
        const rect = ref.getBoundingClientRect()
        
        // Score based on how close the top of section is to top third of viewport
        // Sections whose top is in the top 40% of viewport get highest scores
        const targetY = viewportHeight * 0.3
        const distanceFromTarget = Math.abs(rect.top - targetY)
        
        // Also factor in if section is visible at all
        const isVisible = rect.bottom > 0 && rect.top < viewportHeight
        
        if (isVisible) {
          // Lower distance = better score
          const score = 1000 - distanceFromTarget
          
          // Bonus if the section top has passed the target point
          const bonus = rect.top < targetY ? 500 : 0
          
          if (score + bonus > bestScore) {
            bestScore = score + bonus
            bestIdx = idx
          }
        }
      })

      setActiveStep(bestIdx)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check after a brief delay to ensure refs are populated
    const timer = setTimeout(handleScroll, 100)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [sections.length]) // Only re-run if sections change

  // Click to scroll to section
  const handleStepClick = useCallback((idx: number) => {
    const section = sectionRefs.current[idx]
    if (section) {
      const yOffset = -120 // Account for sticky headers
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }, [])

  const steps = sections.map(s => ({
    id: s.id,
    number: s.number,
    title: s.title,
    timeline: s.timeline
  }))

  return (
    <div className={cn("hidden md:block", className)}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex gap-12">
          {/* Sticky sidebar */}
          <aside className="w-64 flex-shrink-0">
            <DesktopSidebar
              steps={steps}
              activeStep={activeStep}
              onStepChange={handleStepClick}
            />
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {sections.map((section, sectionIdx) => {
              return (
                <section
                  key={section.id}
                  id={`phase-${section.number}`}
                  ref={(el) => { sectionRefs.current[sectionIdx] = el }}
                  className={cn(
                    "py-12 first:pt-0",
                    sectionIdx < sections.length - 1 && "border-b border-border"
                  )}
                >
                  {/* Section Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {section.number}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wide text-muted-foreground">
                          Phase {section.number} · {section.timeline}
                        </p>
                        <h2 className="text-2xl font-semibold">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {section.intro}
                    </p>
                  </div>

                  {/* Subsections */}
                  <div className="space-y-8">
                    {section.subsections.map((subsection, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {subsection.heading}
                        </h3>
                        <div className="space-y-3 text-muted-foreground">
                          {subsection.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Framework Visualization */}
                    <div className="pt-4">
                      <FrameworkRenderer sectionId={section.id} />
                    </div>

                    {/* Additional subsections for Section 3 */}
                    {section.id === "build-the-bridge" && additionalSubsections && (
                      <>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">
                            {additionalSubsections.infrastructure.heading}
                          </h3>
                          <div className="space-y-3 text-muted-foreground">
                            {additionalSubsections.infrastructure.paragraphs.map((p, idx) => (
                              <p key={idx} className="leading-relaxed">{p}</p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">
                            {additionalSubsections.transfer.heading}
                          </h3>
                          <div className="space-y-3 text-muted-foreground">
                            {additionalSubsections.transfer.paragraphs.map((p, idx) => (
                              <p key={idx} className="leading-relaxed">{p}</p>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Deliverables */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="text-base font-semibold mb-4 text-foreground">Deliverables</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {section.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )
            })}
          </main>
        </div>
      </div>
    </div>
  )
}
