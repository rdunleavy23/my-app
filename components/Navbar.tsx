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
                className="w-screen sm:w-96 h-screen rounded-none border-0 p-0"
                id="mobile-menu"
              >
                <div className="flex flex-col h-full">
                  {/* Header with close button */}
                  <div 
                    className="flex items-center justify-between px-4 sm:px-5 py-4 border-b"
                    style={{ paddingTop: `max(1rem, env(safe-area-inset-top))` }}
                  >
                    <span className="text-lg font-semibold">Menu</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeMenu}
                      className="h-11 w-11"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Navigation items */}
                  <div className="flex-1 px-4 sm:px-5 py-4">
                    <nav className="space-y-1">
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className={`flex items-center h-14 px-4 rounded-lg transition-colors ${
                          pathname === '/about'
                            ? 'bg-primary text-primary-foreground font-semibold'
                            : 'hover:bg-muted'
                        }`}
                      >
                        About
                      </Link>
                      <Link
                        href="/process"
                        onClick={closeMenu}
                        className={`flex items-center h-14 px-4 rounded-lg transition-colors ${
                          pathname === '/process'
                            ? 'bg-primary text-primary-foreground font-semibold'
                            : 'hover:bg-muted'
                        }`}
                      >
                        Our Process
                      </Link>
                    </nav>
                  </div>

                  {/* Bottom CTA */}
                  <div 
                    className="px-4 sm:px-5 py-4 border-t"
                    style={{ paddingBottom: `max(1rem, env(safe-area-inset-bottom))` }}
                  >
                    <Button
                      asChild
                      className="w-full h-14 text-base font-semibold"
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