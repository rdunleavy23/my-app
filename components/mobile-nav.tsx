"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/Logo"
import { Menu, X, ChevronRight } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="md:hidden" aria-label="Main menu">
        <Menu className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="left" className="w-80 sm:w-96 p-0">
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-6 border-b gap-4">
          {/* Logo: 44px height (accounts for 4.79:1 wide wordmark - Pattern Growth is 4.8x wider than Superside) */}
          <Logo size="lg" />
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-muted rounded-md">
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </SheetTrigger>
        </div>

        <ScrollArea className="flex-1 px-6 py-4">
          <div className="space-y-3">
            {siteConfig.mainNav?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "block p-4 rounded-lg transition-colors hover:bg-muted",
                  pathname === item.href
                    ? "bg-muted text-foreground"
                    : "text-foreground"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{item.title}</div>
                    {item.description && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 opacity-60" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
