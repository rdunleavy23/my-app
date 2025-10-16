"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

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
            <Link
              href="/process"
              className="text-sm text-muted-foreground hover:text-foreground h-9 flex items-center"
            >
              Our Process
            </Link>
            <Button asChild className="h-9">
              <Link href="https://cal.com/pattern-growth">Schedule a Call</Link>
            </Button>
            <ThemeToggle />
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
              <SheetContent side="left" className="w-80 sm:w-96 p-0">
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between p-6 border-b">
                  <Link href="/" className="text-lg font-bold">
                    Pattern Growth
                  </Link>
                  <SheetTrigger asChild>
                    <button className="p-2 hover:bg-muted rounded-md" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </SheetTrigger>
                </div>

                <div className="flex flex-col px-6 py-4 space-y-3">
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start p-4 h-auto text-left"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/about">
                      <div>
                        <div className="font-semibold text-lg">About</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Meet the team behind Pattern Growth
                        </div>
                      </div>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start p-4 h-auto text-left"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/process">
                      <div>
                        <div className="font-semibold text-lg">Our Process</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          How we build scalable marketing operations
                        </div>
                      </div>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="default"
                    className="justify-start p-4 h-auto text-left"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="https://cal.com/pattern-growth">
                      <div>
                        <div className="font-semibold text-lg">Schedule a Call</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Free strategy consultation
                        </div>
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