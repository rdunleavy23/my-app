"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { MobileStepper, SwipeNav } from "./process-stepper"
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

interface ProcessPhasesMobileProps {
  sections: ProcessSection[]
  additionalSubsections?: {
    infrastructure: Subsection
    transfer: Subsection
  }
  className?: string
}

export function ProcessPhasesMobile({ 
  sections, 
  additionalSubsections,
  className 
}: ProcessPhasesMobileProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleStepChange = useCallback((newStep: number) => {
    setDirection(newStep > activeStep ? 1 : -1)
    setActiveStep(newStep)
  }, [activeStep])

  const handleSwipe = useCallback((event: TouchEvent | MouseEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold && activeStep < sections.length - 1) {
      handleStepChange(activeStep + 1)
    } else if (info.offset.x > threshold && activeStep > 0) {
      handleStepChange(activeStep - 1)
    }
  }, [activeStep, sections.length, handleStepChange])

  const steps = sections.map(s => ({
    id: s.id,
    number: s.number,
    title: s.title,
    timeline: s.timeline
  }))

  const currentSection = sections[activeStep]

  return (
    <div className={cn("md:hidden", className)}>
      <MobileStepper 
        steps={steps} 
        activeStep={activeStep} 
        onStepChange={handleStepChange} 
      />

      <div className="px-4 py-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleSwipe}
            className="touch-pan-y"
          >
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-5">
                {/* Phase intro */}
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {currentSection?.intro}
                </p>

                {/* Subsections */}
                <div className="space-y-6">
                  {currentSection?.subsections.map((subsection, idx) => (
                    <div key={idx}>
                      <h3 className="text-base font-semibold mb-2 text-foreground">
                        {subsection.heading}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {subsection.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                        {/* Framework Visualization */}
                        <div className="pt-2">
                          <FrameworkRenderer sectionId={currentSection?.id || ""} />
                        </div>

                  {/* Additional subsections for Section 3 */}
                  {currentSection?.id === "build-the-bridge" && additionalSubsections && (
                    <>
                      <div>
                        <h3 className="text-base font-semibold mb-2 text-foreground">
                          {additionalSubsections.infrastructure.heading}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          {additionalSubsections.infrastructure.paragraphs.map((p, idx) => (
                            <p key={idx} className="leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold mb-2 text-foreground">
                          {additionalSubsections.transfer.heading}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          {additionalSubsections.transfer.paragraphs.map((p, idx) => (
                            <p key={idx} className="leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Deliverables */}
                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Deliverables</h4>
                  <ul className="space-y-1.5">
                    {currentSection?.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Swipe hint on first load */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Swipe or tap steps above to navigate
        </p>

        {/* Nav buttons */}
        <SwipeNav
          onPrev={() => handleStepChange(activeStep - 1)}
          onNext={() => handleStepChange(activeStep + 1)}
          hasPrev={activeStep > 0}
          hasNext={activeStep < sections.length - 1}
        />
      </div>
    </div>
  )
}
