import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 367.97 367.97"
          className="dark:invert"
          aria-label="Pattern Growth logo"
          role="img"
          style={{
            width: '32px',
            height: '32px',
          }}
        >
          <rect x="111.49" y=".62" width="36.62" height="72.7" rx="4.06" ry="4.06" transform="translate(11.88 102.61) rotate(-45)"/>
          <rect x="18.66" y="93.45" width="36.62" height="72.7" rx="4.06" ry="4.06" transform="translate(-80.96 64.16) rotate(-45)"/>
          <path d="M273.95,21.34L253.8,1.19c-1.58-1.58-4.15-1.58-5.74,0l-39.14,39.14-6.53,6.53c-1.58,1.58-1.58,4.15,0,5.74l20.15,20.15c1.58,1.58,4.15,1.58,5.74,0l45.67-45.67c1.58-1.58,1.58-4.15,0-5.74Z"/>
          <rect x="294.65" y="111.49" width="72.7" height="36.62" rx="4.06" ry="4.06" transform="translate(5.17 272.07) rotate(-45)"/>
          <rect x="219.86" y="294.65" width="36.62" height="72.7" rx="4.06" ry="4.06" transform="translate(-164.3 265.36) rotate(-45)"/>
          <path d="M346.63,273.95l20.15-20.15c1.58-1.58,1.58-4.15,0-5.74l-35.86-35.86-7.92-7.92c-1.58-1.58-4.15-1.58-5.74,0l-20.15,20.15c-1.58,1.58-1.58,4.15,0,5.74l43.78,43.78c1.58,1.58,4.15,1.58,5.74,0Z"/>
          <path d="M276.82,209.88l23.02-23.02c1.58-1.58,1.58-4.15,0-5.74l-23.02-23.02-66.94-66.94-23.02-23.02c-1.58-1.58-4.15-1.58-5.74,0l-23.02,23.02-66.94,66.94-25.89,25.89-29.04,29.04L1.19,248.06c-1.58,1.58-1.58,4.15,0,5.74l20.15,20.15c1.58,1.58,4.15,1.58,5.74,0l61.2-61.2c1.58-1.58,4.15-1.58,5.74,0l48.28,48.28,15.8,15.8,23.02,23.02c1.58,1.58,4.15,1.58,5.74,0l23.02-23.02,66.94-66.94Zm-95.7,38.18l-61.2-61.2c-1.58-1.58-1.58-4.15,0-5.74l61.2-61.2c1.58-1.58,4.15-1.58,5.74,0l61.2,61.2c1.58,1.58,1.58,4.15,0,5.74l-61.2,61.2c-1.58,1.58-4.15,1.58-5.74,0Z"/>
          <path d="M94.02,346.63l20.15,20.15c1.58,1.58,4.15,1.58,5.74,0l37.75-37.75,7.91-7.91c1.58-1.58,1.58-4.15,0-5.74l-20.15-20.15c-1.58-1.58-4.15-1.58-5.74,0l-45.67,45.67c-1.58,1.58-1.58,4.15,0,5.74Z"/>
        </svg>
      </div>
      {showText && (
        <span className="text-lg font-bold">Pattern Growth</span>
      )}
    </Link>
  )
}
