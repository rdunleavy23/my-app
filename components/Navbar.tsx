"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Pattern Growth
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="#process" className="text-muted-foreground hover:text-foreground">Process</Link>
            <Link href="#deliverables" className="text-muted-foreground hover:text-foreground">What You Get</Link>
            <Link href="#investment" className="text-muted-foreground hover:text-foreground">Investment</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Button asChild>
              <Link href="https://cal.com/pattern-growth">Book</Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64 sm:w-72">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-3 pt-6">
                  {[
                    { href: "#process", label: "Process" },
                    { href: "#deliverables", label: "What You Get" },
                    { href: "#investment", label: "Investment" },
                    { href: "/about", label: "About" },
                    { href: "https://cal.com/pattern-growth", label: "Book a Preview", primary: true },
                  ].map(({ href, label, primary }) => (
                    <Button
                      key={href}
                      asChild
                      variant={primary ? "default" : "ghost"}
                      className="justify-between text-base"
                      onClick={() => setOpen(false)}
                    >
                      <Link href={href}>
                        <div className="flex items-center justify-between w-full">
                          {label}
                          <ChevronRight className="ml-2 h-4 w-4 opacity-60" />
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
