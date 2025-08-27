"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { href: "#process", label: "Process" },
    { href: "#deliverables", label: "What You Get" },
    { href: "#investment", label: "Investment" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Pattern Growth
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-foreground ${pathname === href ? "text-foreground" : "text-muted-foreground"}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://cal.com/pattern-growth"
            className="text-sm font-medium text-primary hover:underline"
          >
            Book a Preview
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <span className="sr-only">Toggle Menu</span>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-4 py-6">
                {navItems.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-left">
                      {label}
                    </Button>
                  </Link>
                ))}
                <Link href="https://cal.com/pattern-growth" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-left text-primary">
                    Book a Preview
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
