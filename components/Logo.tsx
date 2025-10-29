import Link from "next/link"
import { cn } from "@/lib/utils"

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

  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm transition-all",
        // Ensure adequate clickable/touch target area (minimum 44x44px)
        "min-h-[44px] min-w-[44px] justify-center",
        className
      )}
      aria-label="Pattern Growth homepage"
    >
      {/* Logo in dark blue (#02273A) for light mode, golden (#FFBF5E) for dark mode via CSS filter */}
      <img
        src="/patterngrowth-full-logo.png"
        alt="Pattern Growth"
        className={cn(
          sizeClasses,
          "w-auto transition-all duration-200",
          "object-contain"
        )}
        style={{ maxHeight: '100%' }}
      />
    </Link>
  )
}
