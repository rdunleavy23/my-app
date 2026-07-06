"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const APPROACH_ITEMS = [
  {
    key: "learn",
    number: 1,
    title: "We start by learning your business",
    body: "Before we recommend a thing, we listen: your numbers, your customers, your goals, the things keeping you up at night. Clients tell us we become students of their product. That's the standard.",
    highlights: [
      "Deep-dive into your actual data and market",
      "Understand your customers and what drives them",
      "Surface the real priorities, not just the urgent ones"
    ]
  },
  {
    key: "build",
    number: 2,
    title: "We build the strategy with you",
    body: "Together we decide where to focus, what to say, and what to stop doing. You'll understand every choice, because you helped make it.",
    highlights: [
      "Collaborative decisions, not handed-down directives",
      "Clear rationale behind every recommendation",
      "A plan that fits your reality, not a template"
    ]
  },
  {
    key: "run",
    number: 3,
    title: "We help you run it — and it's all yours",
    body: "The campaigns, the messaging, the systems that keep it moving. Documented in your voice, living in your tools, yours to keep.",
    highlights: [
      "Execution support that builds momentum",
      "Complete documentation and playbooks",
      "A partner you can call on when you need us"
    ]
  }
]

export default function ApproachEnhanced() {
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleStepChange = useCallback((newStep: number) => {
    setDirection(newStep > activeStep ? 1 : -1)
    setActiveStep(newStep)
  }, [activeStep])

  const handleSwipe = useCallback((event: TouchEvent | MouseEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold && activeStep < APPROACH_ITEMS.length - 1) {
      handleStepChange(activeStep + 1)
    } else if (info.offset.x > threshold && activeStep > 0) {
      handleStepChange(activeStep - 1)
    }
  }, [activeStep, handleStepChange])

  const currentItem = APPROACH_ITEMS[activeStep]

  return (
    <section className="py-16 sm:py-20 bg-background" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8">
          <h2 id="approach-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            What working together looks like
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            No packages, no off-the-shelf playbook. A partnership shaped around your business.
          </p>
        </div>

        {/* Mobile: Swipeable cards with sticky stepper */}
        <div className="md:hidden">
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-6 border-b border-border">
            <div className="relative">
              <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border -translate-y-1/2" />

              <motion.div
                className="absolute top-1/2 left-6 h-0.5 bg-primary -translate-y-1/2 origin-left"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep / (APPROACH_ITEMS.length - 1)) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ maxWidth: "calc(100% - 48px)" }}
              />

              <div className="relative flex justify-between">
                {APPROACH_ITEMS.map((item, idx) => (
                  <button
                    key={item.key}
                    onClick={() => handleStepChange(idx)}
                    className="flex flex-col items-center"
                    aria-label={`Go to step ${item.number}: ${item.title}`}
                    aria-current={idx === activeStep ? "step" : undefined}
                  >
                    <motion.div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors shadow-sm",
                        idx === activeStep
                          ? "bg-primary text-primary-foreground"
                          : idx < activeStep
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                      )}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.number}
                    </motion.div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleSwipe}
              className="touch-pan-y"
            >
              <Card className="bg-card border-primary/20 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{currentItem?.title}</h3>
                  <p className="text-primary mb-6 leading-relaxed">
                    {currentItem?.body}
                  </p>

                  <div className="space-y-2">
                    {currentItem?.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-primary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-xs text-muted-foreground mt-4 mb-2">
            Swipe or tap steps to navigate
          </p>

          <div className="flex justify-between items-center py-2">
            <button
              onClick={() => handleStepChange(activeStep - 1)}
              disabled={activeStep === 0}
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all",
                activeStep > 0
                  ? "text-primary hover:bg-primary/10 active:scale-95"
                  : "text-muted-foreground/50 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => handleStepChange(activeStep + 1)}
              disabled={activeStep === APPROACH_ITEMS.length - 1}
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all",
                activeStep < APPROACH_ITEMS.length - 1
                  ? "text-primary hover:bg-primary/10 active:scale-95"
                  : "text-muted-foreground/50 cursor-not-allowed"
              )}
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Horizontal 3-column cards */}
        <div className="hidden md:block">
          <div className="relative mb-10">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {APPROACH_ITEMS.map((item, idx) => (
                <React.Fragment key={item.key}>
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {item.number}
                  </div>

                  {idx < APPROACH_ITEMS.length - 1 && (
                    <div className="flex-1 h-0.5 bg-primary/30 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {APPROACH_ITEMS.map((item) => (
              <Card
                key={item.key}
                className="h-full bg-card border-primary/10 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-primary mb-6 leading-relaxed flex-grow">
                    {item.body}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-primary/20">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-primary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
