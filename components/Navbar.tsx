"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import Logo from "@/components/Logo"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    
    if (open) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Logo />

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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground"
                  aria-label="Open menu"
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-screen sm:w-80 h-screen rounded-none border-0 p-0"
                id="mobile-menu"
              >
                <div className="flex flex-col h-full">
                  {/* Navigation items */}
                  <div className="flex-1 px-6 py-8">
                    <nav className="space-y-2">
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          pathname === '/about'
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        About
                      </Link>
                      <Link
                        href="/process"
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          pathname === '/process'
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        Our Process
                      </Link>
                      <Link
                        href="https://cal.com/pattern-growth/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          pathname === '/book'
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        Schedule a Call
                      </Link>
                    </nav>
                  </div>

                  {/* Bottom CTA */}
                  <div className="px-6 py-6 border-t">
                    <Button
                      asChild
                      className="w-full h-12 text-base font-semibold"
                      onClick={closeMenu}
                    >
                      <Link href="https://cal.com/pattern-growth">
                        Schedule a Call
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}