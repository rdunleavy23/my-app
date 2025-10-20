'use client'

import { ChevronDownIcon } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCollapsibleProps {
  items: FAQItem[]
  className?: string
}

export function FAQCollapsible({ items, className }: FAQCollapsibleProps) {
  return (
    <div className={`w-full space-y-0 rounded-lg border bg-background ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          <Collapsible className="flex flex-col group">
            <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 w-full text-left hover:bg-accent/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground pr-4">
                {item.question}
              </h3>
              <ChevronDownIcon className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180 shrink-0" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </CollapsibleContent>
          </Collapsible>
          {index < items.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
}
