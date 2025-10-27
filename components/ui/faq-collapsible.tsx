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

export default function FAQCollapsible({ items, className }: FAQCollapsibleProps) {
  return (
    <div className={`w-full space-y-0 rounded-lg border bg-background ${className}`}>
      {items.map((item, index) => (
        <div key={index}>
          <Collapsible className="flex flex-col group">
            <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-5 w-full text-left hover:bg-accent/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-bold text-foreground pr-4 leading-tight">
                {item.question}
              </h3>
              <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180 shrink-0" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <div className="pt-2">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          {index < items.length - 1 && <Separator className="mx-6" />}
        </div>
      ))}
    </div>
  )
}
