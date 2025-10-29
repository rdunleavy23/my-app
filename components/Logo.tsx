import Link from "next/link"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center ${className}`}
      aria-label="Pattern Growth homepage"
    >
      {/* Logo in dark blue (#02273A) for light mode, inverted to light color for dark mode via CSS */}
      <img
        src="/patterngrowth-full-logo.png"
        alt="Pattern Growth"
        className="h-7 w-auto sm:h-8 md:h-9 transition-all duration-200"
      />
    </Link>
  )
}
