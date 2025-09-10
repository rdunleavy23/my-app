"use client"

import * as React from "react"
import {
  ScrollArea as ScrollAreaPrimitive,
  Scrollbar,
} from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <div className="h-full w-full rounded-[inherit]">{children}</div>
    <Scrollbar orientation="vertical" />
    <Scrollbar orientation="horizontal" />
  </ScrollAreaPrimitive>
))

ScrollArea.displayName = "ScrollArea"

export { ScrollArea }
