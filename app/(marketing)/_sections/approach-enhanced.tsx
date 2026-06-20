"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const APPROACH_ITEMS = [
  {
    key: "reality",
    number: 1,
    title: "Shaped by Your Reality",
    subtitle: "Weeks 1-2",
    body: "We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today, not some idealized version that ignores reality.",
    highlights: [
      "Deep-dive into your actual data",
      "Map team capacity & constraints", 
      "Identify quick wins to start immediately"
    ]
  },
  {
    key: "future",
    number: 2,
    title: "Built for Your Future",
    subtitle: "Weeks 3-6",
    body: "We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize, what success looks like, and when to scale or adjust based on what's actually working.",
    highlights: [
      "Custom strategy tied to revenue",
      "Clear measurement framework",
      "Prioritized action roadmap"
    ]
  },
  {
    key: "owned",
    number: 3,
    title: "Owned by You",
    subtitle: "Weeks 7-8",
    body: "We train your team to run the strategy with confidence. The custom systems we build together are yours to keep, so your momentum continues long after our work is done.",
    highlights: [
      "Complete documentation & playbooks",
      "Hands-on training included",
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
            Our Approach
          </h2>
          <p className="text-muted-foreground text-lg">
            Eight weeks from kickoff to complete ownership
          </p>
        </div>

        {/* Mobile: Swipeable cards with sticky stepper */}
        <div className="md:hidden">
          {/* Progress stepper */}
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-6 border-b border-border">
            <div className="relative">
              {/* Progress line background */}
              <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border -translate-y-1/2" />
              
              {/* Animated progress fill */}
              <motion.div 
                className="absolute top-1/2 left-6 h-0.5 bg-primary -translate-y-1/2 origin-left"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep / (APPROACH_ITEMS.length - 1)) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ maxWidth: "calc(100% - 48px)" }}
              />
              
              {/* Step indicators */}
              <div className="relative flex justify-between">
                {APPROACH_ITEMS.map((item, idx) => (
                  <button
                    key={item.key}
                    onClick={() => handleStepChange(idx)}
                    className="flex flex-col items-center"
                    aria-label={`Go to ${item.title}`}
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
                    <span className={cn(
                      "text-[10px] mt-1 font-medium transition-colors",
                      idx === activeStep ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {item.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Swipeable content */}
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

                  {/* Highlights */}
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

          {/* Swipe hint */}
          <p className="text-center text-xs text-muted-foreground mt-4 mb-2">
            Swipe or tap steps to navigate
          </p>

          {/* Nav buttons */}
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
          {/* Horizontal progress connector */}
          <div className="relative mb-10">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {APPROACH_ITEMS.map((item, idx) => (
                <React.Fragment key={item.key}>
                  {/* Step circle */}
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {item.number}
                  </div>
                  
                  {/* Connector line (except after last) */}
                  {idx < APPROACH_ITEMS.length - 1 && (
                    <div className="flex-1 h-0.5 bg-primary/30 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 3-column card grid */}
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

                  {/* Highlights */}
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

          {/* CTA link to process page */}
          <div className="mt-12 text-center">
            <Link 
              href="/process" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors group"
            >
              See our detailed 8-week process
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
