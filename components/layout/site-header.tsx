"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/process"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/process" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Our Process
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="flex items-center">
            <Link
              href="/book"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4 py-1.5"
              )}
            >
              Schedule a Call
            </Link>
          </nav>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
