"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold hover:underline">
            Pattern Growth
          </Link>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#process" className="text-muted-foreground hover:text-foreground">Process</a>
            <a href="#deliverables" className="text-muted-foreground hover:text-foreground">What You Get</a>
            <a href="#investment" className="text-muted-foreground hover:text-foreground">Investment</a>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link
              href="https://cal.com/pattern-growth"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              Book a Preview
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 py-6 text-sm">
                <a onClick={() => setOpen(false)} href="#process">Process</a>
                <a onClick={() => setOpen(false)} href="#deliverables">What You Get</a>
                <a onClick={() => setOpen(false)} href="#investment">Investment</a>
                <Link onClick={() => setOpen(false)} href="/about">About</Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="https://cal.com/pattern-growth"
                  className="text-primary"
                >
                  Book a Preview
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
