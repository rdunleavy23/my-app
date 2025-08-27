"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="font-semibold">Pattern Growth</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="#process" className="text-muted-foreground hover:text-foreground">Process</Link>
            <Link href="#deliverables" className="text-muted-foreground hover:text-foreground">What You Get</Link>
            <Link href="#investment" className="text-muted-foreground hover:text-foreground">Investment</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Button asChild>
              <Link href="https://cal.com/pattern-growth">Book a Preview</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-4 text-sm pt-6">
                  <Link href="#process">Process</Link>
                  <Link href="#deliverables">What You Get</Link>
                  <Link href="#investment">Investment</Link>
                  <Link href="/about">About</Link>
                  <Link href="https://cal.com/pattern-growth" className="text-primary font-medium">Book a Preview</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
