// app/(marketing)/_sections/approach.tsx
"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import clsx from "clsx"

import { APPROACH_ITEMS } from "../content/approach"
import { useMediaQuery } from "../../lib/use-media-query"
import { trackApproachTab, trackApproachHowOpen, trackApproachDeliverablesOpen } from "../../../lib/analytics"

// UI scaffolding (not your marketing copy). You can rename if you already label sections elsewhere.
const LABELS = {
  eyebrow: "Approach",
  heading: "Our Approach",
  how: "How we do it",
  deliverables: "Deliverables",
  snapshot: "Snapshot",
  timebox: "Timebox",
  ownership: "Ownership",
  kpi: "KPI",
  artifacts: "Artifacts",
}

// Simplified for initial load
const APPROACH_SIMPLE = [
  {
    title: "Shaped by Your Reality",
    body: ["We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today."]
  },
  {
    title: "Built for Your Future",
    body: ["We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize and when to scale."]
  },
  {
    title: "Owned by Your Team",
    body: ["Your team gets trained to execute independently, so you're not stuck in a consulting relationship. No retainer, no ongoing fees, just capability that stays with you."]
  }
] as const

function renderParagraph(p: string, i: number) {
  // If the string contains HTML, render it as HTML to preserve your markup exactly.
  return /<\/?[a-z][\s\S]*>/i.test(p)
    ? <p key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
    : <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
}

export default function Approach() {
  const router = useRouter()
  const params = useSearchParams()
  const initial = params.get("approach") || (APPROACH_ITEMS[0]?.key ?? "")
  const [value, setValue] = React.useState<string>(initial)
  const isMobile = useMediaQuery("(max-width: 767px)")

  React.useEffect(() => {
    const p = params.get("approach")
    if (p && p !== value) setValue(p)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  function onChange(next: string) {
    setValue(next)
    const url = new URL(window.location.href)
    url.searchParams.set("approach", next)
    router.replace(url.toString(), { scroll: false })
    trackApproachTab(next)
  }

  return (
    <section className="py-12 sm:py-16 bg-background" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="approach-heading" className="mb-6 text-2xl font-semibold">
          {LABELS.heading}
        </h2>

        <Tabs value={value} onValueChange={onChange} className="grid gap-6">
        {/* Mobile: Vertical Stepper */}
        {isMobile && (
          <div className="space-y-8">
            {APPROACH_ITEMS.map((it, index) => (
              <div key={it.key} className="relative">
                {/* Step indicator and connecting line */}
                <div className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    {/* Step circle with number */}
                    <button
                      onClick={() => onChange(it.key)}
                      className={clsx(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all font-semibold text-sm",
                        value === it.key
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted text-muted-foreground border-muted-foreground"
                      )}
                    >
                      {index + 1}
                    </button>
                    
                    {/* Connecting line (except for last item) */}
                    {index < APPROACH_ITEMS.length - 1 && (
                      <div className="w-0.5 h-8 bg-muted mt-2" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <button
                      onClick={() => onChange(it.key)}
                      className="text-left w-full"
                    >
                      <h3 className={clsx(
                        "text-lg font-medium mb-2 transition-colors",
                        value === it.key ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {it.title}
                      </h3>
                    </button>
                    
                    {/* Show content for active tab */}
                    {value === it.key && (
                      <div className="space-y-4">
                        {it.body.map((paragraph, i) => renderParagraph(paragraph, i))}
                        
                        {/* Optional detail buckets */}
                        <div className="flex flex-wrap items-center gap-3">
                          {it.how && it.how.length > 0 && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => trackApproachHowOpen(it.title)}
                                  aria-label={`${LABELS.how}: ${it.title}`}
                                >
                                  {LABELS.how}
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader><DialogTitle>{LABELS.how}</DialogTitle></DialogHeader>
                                <div className="space-y-2 text-sm leading-relaxed">
                                  {it.how.map((h, i) => renderParagraph(h, i))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}

                          {it.deliverables && it.deliverables.length > 0 && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => trackApproachDeliverablesOpen(it.title)}
                                  aria-label={`${LABELS.deliverables}: ${it.title}`}
                                >
                                  {LABELS.deliverables}
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader><DialogTitle>{LABELS.deliverables}</DialogTitle></DialogHeader>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  {it.deliverables.map((d) => (<li key={d}>{d}</li>))}
                                </ul>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Desktop: Timeline Layout */}
        {!isMobile && (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {APPROACH_ITEMS.map((it, index) => (
                <div key={it.key} className="relative flex gap-8">
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2 pb-4">
                    <h3 className="text-xl font-semibold mb-3">{it.title}</h3>
                    <div className="space-y-3">
                      {it.body.map((paragraph, i) => renderParagraph(paragraph, i))}
                    </div>
                    
                    {/* Optional detail buckets */}
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      {it.how && it.how.length > 0 && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => trackApproachHowOpen(it.title)}
                              aria-haspopup="dialog"
                              aria-label={`${LABELS.how}: ${it.title}`}
                            >
                              {LABELS.how}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="max-w-md text-sm leading-relaxed" align="start">
                            <VisuallyHidden><h4>{LABELS.how} — {it.title}</h4></VisuallyHidden>
                            <div className="space-y-2">
                              {it.how.map((h, i) => renderParagraph(h, i))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}

                      {it.deliverables && it.deliverables.length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => trackApproachDeliverablesOpen(it.title)}
                              aria-label={`${LABELS.deliverables}: ${it.title}`}
                            >
                              {LABELS.deliverables}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader><DialogTitle>{LABELS.deliverables}</DialogTitle></DialogHeader>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {it.deliverables.map((d) => (<li key={d}>{d}</li>))}
                            </ul>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Tabs>
      </div>
    </section>
  )
}
