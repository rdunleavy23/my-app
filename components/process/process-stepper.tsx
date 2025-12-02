"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProcessStep {
  id: string
  number: number
  title: string
  shortTitle?: string
  timeline: string
}

interface ProcessStepperProps {
  steps: ProcessStep[]
  activeStep: number
  onStepChange: (step: number) => void
  className?: string
}

// Mobile horizontal stepper - sticky at top
export function MobileStepper({ steps, activeStep, onStepChange, className }: ProcessStepperProps) {
  return (
    <div className={cn("sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 px-4", className)}>
      {/* Progress bar background */}
      <div className="relative mb-3">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2" />
        <motion.div 
          className="absolute top-1/2 left-4 h-0.5 bg-primary -translate-y-1/2"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeStep) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ maxWidth: "calc(100% - 32px)" }}
        />
        
        {/* Step indicators */}
        <div className="relative flex justify-between">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => onStepChange(idx)}
              className="flex flex-col items-center group"
              aria-label={`Go to ${step.title}`}
              aria-current={idx === activeStep ? "step" : undefined}
            >
              <motion.div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                  idx === activeStep 
                    ? "bg-primary text-primary-foreground" 
                    : idx < activeStep
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                )}
                whileTap={{ scale: 0.95 }}
              >
                {step.number}
              </motion.div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Active step label */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {steps[activeStep]?.timeline}
        </p>
        <p className="text-sm font-semibold text-foreground">
          {steps[activeStep]?.title}
        </p>
      </div>
    </div>
  )
}

// Desktop vertical sidebar stepper - sticky
export function DesktopSidebar({ steps, activeStep, onStepChange, className }: ProcessStepperProps) {
  return (
    <div className={cn("sticky top-24 h-fit", className)}>
      <div className="relative">
        {/* Vertical progress line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border" />
        <motion.div 
          className="absolute left-4 top-4 w-0.5 bg-primary origin-top"
          initial={{ height: "0%" }}
          animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ maxHeight: "calc(100% - 32px)" }}
        />
        
        {/* Steps */}
        <div className="relative space-y-6">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => onStepChange(idx)}
              className={cn(
                "flex items-start gap-4 w-full text-left group transition-all",
                idx === activeStep ? "opacity-100" : "opacity-60 hover:opacity-100"
              )}
              aria-label={`Go to ${step.title}`}
              aria-current={idx === activeStep ? "step" : undefined}
            >
              <motion.div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors",
                  idx === activeStep 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : idx < activeStep
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.number}
              </motion.div>
              
              <div className="pt-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {step.timeline}
                </p>
                <p className={cn(
                  "text-sm font-medium transition-colors",
                  idx === activeStep ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {step.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Swipe navigation controls for mobile
export function SwipeNav({ 
  onPrev, 
  onNext, 
  hasPrev, 
  hasNext,
  className 
}: { 
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
  className?: string
}) {
  return (
    <div className={cn("flex justify-between items-center py-4", className)}>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={cn(
          "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all",
          hasPrev 
            ? "text-primary hover:bg-primary/10 active:scale-95" 
            : "text-muted-foreground/50 cursor-not-allowed"
        )}
        aria-label="Previous phase"
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </button>
      
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={cn(
          "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all",
          hasNext 
            ? "text-primary hover:bg-primary/10 active:scale-95" 
            : "text-muted-foreground/50 cursor-not-allowed"
        )}
        aria-label="Next phase"
      >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

// Animated content wrapper for smooth transitions
export function PhaseContent({ 
  children, 
  direction = 0,
  className 
}: { 
  children: React.ReactNode
  direction?: number // -1 = left, 0 = none, 1 = right
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
