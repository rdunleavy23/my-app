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
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground h-9 flex items-center"
            >
              About
            </Link>
            <Button asChild className="h-9">
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
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-between text-base"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/about">
                      <div className="flex items-center justify-between w-full">
                        About
                        <ChevronRight className="ml-2 h-4 w-4 opacity-60" />
                      </div>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="default"
                    className="justify-between text-base"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="https://cal.com/pattern-growth">
                      <div className="flex items-center justify-between w-full">
                        Book
                        <ChevronRight className="ml-2 h-4 w-4 opacity-60" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
