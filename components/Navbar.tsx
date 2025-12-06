"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedMenuIcon } from "@/components/ui/animated-menu-icon"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import Logo from "@/components/Logo"
import { trackGenerateLead, trackNavigationClick } from "@/lib/analytics"
import { CalBookingModal } from "@/components/cal-booking-modal"
// Lean navigation: keep conversion-focused links only

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const pathname = usePathname()

  // Body scroll lock when mobile menu is open - optimized to prevent reflows
  useEffect(() => {
    if (open) {
      // Use CSS class instead of inline styles to prevent reflows
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open')
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

  const handleCTAClick = (location: 'navbar' | 'mobile_menu') => {
    // Use GA4 recommended event for lead generation
    trackGenerateLead({
      currency: 'USD',
      value: 500, // Estimated B2B consulting lead value
      method: 'schedule_call_button',
      button_location: location,
      button_text: 'Schedule a Call',
      destination_url: 'https://cal.com/pattern-growth/30min',
    });

    // Open booking modal
    setIsBookingModalOpen(true);

    // Close mobile menu if open
    if (open) {
      setOpen(false);
    }
  };

  const handleNavClick = (linkText: string, linkDestination: string) => {
    trackNavigationClick({
      navigation_type: 'desktop',
      link_text: linkText,
      link_destination: linkDestination,
    });
  };

  const handleMobileNavClick = (linkText: string, linkDestination: string) => {
    trackNavigationClick({
      navigation_type: 'mobile',
      link_text: linkText,
      link_destination: linkDestination,
    });
  };

  return (
    <header className="sticky top-0 z-[60] border-b bg-background/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl pl-3 pr-4 sm:pl-8 sm:pr-6">
        <div className="flex h-14 items-center justify-between gap-6">
          {/* Logo: 44px mobile (~211px wide, accounts for 4.79:1 wordmark), 56px desktop - Pattern Growth is 4.8x wider than Superside */}
          {/* Left padding: 12px mobile (closer to corner with breathing room), 32px desktop; increased gap to hamburger menu (24px) */}
          {/* Logo container constrained to prevent overflow */}
          <Logo size="lg" className="shrink-0" />

          {/* Desktop Nav (lean) */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Primary navigation">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground h-12 flex items-center px-3 py-2 rounded-md hover:bg-accent/50 transition-colors"
              onClick={() => handleNavClick('About', '/about')}
            >
              About
            </Link>
            <Link
              href="/process"
              className="text-sm text-muted-foreground hover:text-foreground h-12 flex items-center px-3 py-2 rounded-md hover:bg-accent/50 transition-colors"
              onClick={() => handleNavClick('Process', '/process')}
            >
              Process
            </Link>
            <Button
              className="h-12 btn-hover-lift"
              onClick={() => handleCTAClick('navbar')}
            >
              Schedule a Call →
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
                  <AnimatedMenuIcon isOpen={open} aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="top"
                showClose={false}
                className="w-screen rounded-none border-0 p-0 bg-background max-h-[calc(100vh-56px)] overflow-y-auto"
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
              >
                <div className="flex flex-col h-full">
                  {/* Screen reader title */}
                  <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
                  
                  {/* Navigation items with larger typography and spacing (lean) */}
                  <div className="flex-1 px-6 pt-6">
                    <nav role="navigation" aria-label="Mobile navigation">
                      <Link
                        href="/about"
                        onClick={() => {
                          closeMenu();
                          handleMobileNavClick('About', '/about');
                        }}
                        className="mobile-menu-item mobile-menu-focus block text-[26px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 py-14 border-b border-border text-foreground"
                        aria-current={pathname === '/about' ? 'page' : undefined}
                      >
                        About
                      </Link>
                      <Link
                        href="/process"
                        onClick={() => {
                          closeMenu();
                          handleMobileNavClick('Process', '/process');
                        }}
                        className="mobile-menu-item mobile-menu-focus block text-[26px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 py-14 border-b border-border text-foreground"
                        aria-current={pathname === '/process' ? 'page' : undefined}
                      >
                        Process
                      </Link>
                    </nav>
                    
                    {/* CTA section - part of scrollable content */}
                    <div className="pt-16 pb-8">
                      <Button
                        className="w-full h-14 text-base rounded-full btn-hover-lift"
                        onClick={() => handleCTAClick('mobile_menu')}
                        aria-label="Schedule a call"
                      >
                        Schedule a Call →
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Cal.com booking modal */}
      <CalBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingSuccess={(bookingId) => {
          console.log('Booking successful from navbar:', bookingId);
        }}
      />
    </header>
  )
}