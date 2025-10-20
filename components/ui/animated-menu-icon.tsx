"use client"

import { cn } from "@/lib/utils"

interface AnimatedMenuIconProps {
  isOpen: boolean
  className?: string
}

export function AnimatedMenuIcon({ isOpen, className }: AnimatedMenuIconProps) {
  return (
    <div className={cn("w-5 h-5 relative", className)}>
      {/* Top line */}
      <span 
        className={cn(
          "absolute top-1 left-0 w-5 h-0.5 bg-current transition-all duration-250 ease-out",
          isOpen && "top-2.5 rotate-45"
        )}
      />
      {/* Middle line */}
      <span 
        className={cn(
          "absolute top-2.5 left-0 w-5 h-0.5 bg-current transition-all duration-250 ease-out",
          isOpen && "opacity-0"
        )}
      />
      {/* Bottom line */}
      <span 
        className={cn(
          "absolute top-4 left-0 w-5 h-0.5 bg-current transition-all duration-250 ease-out",
          isOpen && "top-2.5 -rotate-45"
        )}
      />
    </div>
  )
}
