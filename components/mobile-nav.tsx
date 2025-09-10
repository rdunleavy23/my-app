"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Menu } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {siteConfig.mainNav?.length ? (
              siteConfig.mainNav.map((item, index) =>
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </a>
                ) : null
              )
            ) : null}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
