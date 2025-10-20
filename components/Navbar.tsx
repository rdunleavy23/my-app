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

  // Handle escape key and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    
    if (open) {
      document.addEventListener('keydown', handleEscape)
      // Focus the first interactive element when menu opens
      const firstButton = document.querySelector('#mobile-menu [href]') as HTMLElement
      if (firstButton) {
        firstButton.focus()
      }
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
              Our Story
            </Link>
            <Link
              href="/process"
              className="text-sm text-muted-foreground hover:text-foreground h-9 flex items-center"
            >
              How It Works
            </Link>
            <Button asChild className="h-9">
              <Link href="https://cal.com/pattern-growth">Schedule a Call →</Link>
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
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-screen sm:w-80 h-screen rounded-none border-0 p-0 mobile-menu-slide"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
              >
                <div className="flex flex-col h-full">
                  {/* Screen reader title */}
                  <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
                  
                  {/* Primary CTA at top - following user instruction */}
                  <div className="px-6 py-6 border-b">
                    <Link
                      href="https://cal.com/pattern-growth"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="mobile-menu-item mobile-menu-focus block px-4 py-4 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
                      aria-label="Schedule a call (opens in new tab)"
                    >
                      Schedule a Call →
                    </Link>
                  </div>
                  
                  {/* Navigation items */}
                  <div className="flex-1 px-6 py-8">
                    <nav className="space-y-4" role="navigation" aria-label="Main navigation">
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className={`mobile-menu-item mobile-menu-focus block px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          pathname === '/about'
                            ? 'bg-muted text-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                        aria-current={pathname === '/about' ? 'page' : undefined}
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/process"
                        onClick={closeMenu}
                        className={`mobile-menu-item mobile-menu-focus block px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          pathname === '/process'
                            ? 'bg-muted text-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                        aria-current={pathname === '/process' ? 'page' : undefined}
                      >
                        How It Works
                      </Link>
                    </nav>
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