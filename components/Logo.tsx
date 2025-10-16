import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8">
        <Image
          src="/patterngrowth-logo-32.png"
          alt="Pattern Growth - stylized P logo with star elements"
          width={32}
          height={32}
          className="h-8 w-8 dark:invert"
          priority
        />
      </div>
      {showText && (
        <span className="text-lg font-bold">Pattern Growth</span>
      )}
    </Link>
  )
}
