"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  /**
   * Size variant: 
   * - 'sm' = 32px (compact)
   * - 'md' = 44px (adjusted for 4.79:1 wide wordmark - Pattern Growth is 4.8x wider than Superside)
   * - 'lg' = 44px mobile (~211px wide), 56px desktop (~268px wide) - optimized for wide wordmark
   * - 'xl' = 56px (large desktop)
   * If no variant provided, defaults to responsive: 44px mobile, 56px desktop
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ className = "", size }: LogoProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const { theme, resolvedTheme } = useTheme()
  // Size mappings following best practices:
  // - Logo should be 70-85% of navbar height for optimal visibility
  // - Navbar is typically 56px (h-14), so optimal logo is 40-48px
  // - Mobile: 32-40px for optimal touch targets
  // - Desktop: 44-52px for prominence
  // Sizing aligned with Superside.com (prioritized) and competitor analysis
  // Logo aspect ratio: 4.79:1 (wide wordmark) - Pattern Growth logo is 4.8x WIDER than Superside
  // At 48px height: Pattern Growth = 230px wide vs Superside = 48px wide (182px difference!)
  // Solution: Slightly reduce mobile height to 44px (~211px wide) to maintain proportions
  // Superside: 48px mobile (square 1:1) | Pattern Growth: 44px mobile (wide 4.79:1)
  const sizeClasses = size === 'sm' 
    ? 'h-8' // 32px - compact mobile
    : size === 'md'
    ? 'h-11' // 44px - reduced from 48px to account for 4.79:1 wide wordmark
    : size === 'lg'
    ? 'h-11 sm:h-14' // 44px mobile (adjusted for wide logo), 56px desktop (prominent)
    : size === 'xl'
    ? 'h-14' // 56px - large desktop
    : 'h-11 sm:h-14' // Responsive: 44px mobile (accounts for width), 56px desktop

  // Diagnostic logging for logo color debugging
  useEffect(() => {
    if (typeof window === 'undefined' || !imgRef.current) return

    const img = imgRef.current
    const html = document.documentElement
    
    // Log 1: Image properties
    console.log('[Logo Debug] Image Properties:', {
      src: img.src,
      alt: img.alt,
      altExact: `"${img.alt}"`,
      width: img.width,
      height: img.height,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    })

    // Log 2: Theme state
    const hasDarkClass = html.classList.contains('dark')
    console.log('[Logo Debug] Theme State:', {
      theme,
      resolvedTheme,
      htmlHasDarkClass: hasDarkClass,
      htmlClasses: Array.from(html.classList),
    })

    // Log 3: CSS Selector matching
    const selector1 = html.querySelector('.dark img[alt="Pattern Growth"]')
    const selector2 = html.querySelector('html.dark img[alt="Pattern Growth"]')
    const selector3 = document.querySelector('.dark img[alt="Pattern Growth"]')
    console.log('[Logo Debug] Selector Matching:', {
      'html.querySelector(.dark img[alt="Pattern Growth"])': selector1 !== null,
      'html.querySelector(html.dark img[alt="Pattern Growth"])': selector2 !== null,
      'document.querySelector(.dark img[alt="Pattern Growth"])': selector3 !== null,
      'img matches selector': selector1 === img || selector2 === img || selector3 === img,
    })

    // Log 4: Computed filter value
    const computedStyle = window.getComputedStyle(img)
    const filterValue = computedStyle.filter
    const filterApplied = filterValue !== 'none' && filterValue !== ''
    console.log('[Logo Debug] CSS Filter:', {
      filterValue,
      filterApplied,
      allComputedStyles: {
        filter: computedStyle.filter,
        brightness: computedStyle.filter.includes('brightness'),
        saturate: computedStyle.filter.includes('saturate'),
        hueRotate: computedStyle.filter.includes('hue-rotate'),
      },
    })

    // Log 5: Check if image is loaded
    if (img.complete) {
      console.log('[Logo Debug] Image Status: Loaded')
    } else {
      img.onload = () => console.log('[Logo Debug] Image Status: Loaded (after delay)')
    }
  }, [theme, resolvedTheme])

  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm transition-all",
        // Ensure adequate clickable/touch target area (minimum 44x44px)
        "min-h-[44px] min-w-[44px] justify-center",
        // Prevent flex shrinking and constrain width
        "shrink-0 max-w-[280px] sm:max-w-[320px]",
        className
      )}
      aria-label="Pattern Growth homepage"
    >
      {/* Logo is dark teal (#3E5661 - Primary). Dark mode uses CSS filter to invert and adjust to golden (#FFBF5E) for visibility. */}
      <img
        ref={imgRef}
        src="/patterngrowth-full-logo.png"
        alt="Pattern Growth"
        className={cn(
          sizeClasses,
          "w-auto transition-all duration-200",
          // Ensure logo respects height constraints and doesn't overflow container
          "max-w-full",
          "object-contain"
        )}
      />
    </Link>
  )
}
