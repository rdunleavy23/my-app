"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  maxWidth?: string
  veilOpacity?: string
  fontFamily?: string
  fontWeight?: number
}

export function HeroSection({
  title = "Your Marketing Strategy, Built From Scratch in",
  highlightText = "8 Weeks",
  description = "Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you. A project-based alternative to fractional CMO retainers.",
  buttonText = "Schedule a Call",
  onButtonClick,
  colors = ["#3E5661", "#8597A1", "#95B0BA", "#02273A", "#B9A287", "#F8ECD1"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-background/20 dark:bg-background/25",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 500,
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      // Default action - open calendar link
      window.open("https://cal.com/pattern-growth/30min", "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}>
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        <div className="text-center">
          <h1
            className={`font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title} <span className="text-primary">{highlightText}</span>
          </h1>
          <p className={`text-lg sm:text-xl text-foreground text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={handleButtonClick}
              className={`px-6 py-4 sm:px-8 sm:py-6 rounded-full border-4 bg-accent-deep-navy border-card text-sm sm:text-base text-accent-deep-navy-foreground hover:bg-accent-deep-navy/90 transition-colors ${buttonClassName}`}
            >
              {buttonText}
            </button>
            <p className="text-sm text-foreground/80">
              30-minute call · No pitch, no pressure
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
