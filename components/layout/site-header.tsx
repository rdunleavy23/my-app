"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/Logo"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {/* Logo: 44px mobile (~211px wide, accounts for 4.79:1 wordmark), 56px desktop */}
          {/* Spacing handled at container level with gap-6 */}
          <Logo size="lg" />

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              About Us
            </Link>
            <Link
              href="/process"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/process" ? "text-foreground" : "text-foreground/60"
              )}
            >
              How It Works
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="flex items-center">
            <a
              href="https://cal.com/pattern-growth/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4 py-1.5"
              )}
            >
              Schedule a Call →
            </a>
          </nav>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
