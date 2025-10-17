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
  heading: "How we build strategy that ships",
  how: "How we do it",
  deliverables: "Deliverables",
  snapshot: "Snapshot",
  timebox: "Timebox",
  ownership: "Ownership",
  kpi: "KPI",
  artifacts: "Artifacts",
} as const

function renderParagraph(p: string, i: number) {
  // If the string contains HTML, render it as HTML to preserve your markup exactly.
  return /<\/?[a-z][\s\S]*>/i.test(p)
    ? <p key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
    : <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
}

export function Approach() {
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
    <section className="py-12 sm:py-16 bg-muted/30" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{LABELS.eyebrow}</p>
        <h2 id="approach-heading" className="mb-6 text-2xl font-semibold">
          {LABELS.heading}
        </h2>

        <Tabs value={value} onValueChange={onChange} className="grid gap-6">
        {/* Mobile: Vertical Stepper; Desktop: Horizontal tabs */}
        <div className="md:hidden">
          {/* Mobile Stepper */}
          <div className="space-y-8">
            {APPROACH_ITEMS.map((it, index) => (
              <div key={it.key} className="relative">
                {/* Step indicator and connecting line */}
                <div className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    {/* Step circle */}
                    <button
                      onClick={() => onChange(it.key)}
                      className={clsx(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                        value === it.key
                          ? "bg-background border-primary"
                          : "bg-muted border-muted-foreground"
                      )}
                    >
                      <div className={clsx(
                        "w-3 h-3 rounded-full",
                        value === it.key ? "bg-primary" : "bg-muted-foreground"
                      )} />
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
        </div>

        {/* Desktop: Horizontal tabs */}
        <TabsList
          aria-label="Approach pillars"
          className="hidden md:grid md:grid-cols-3 md:gap-2"
        >
          {APPROACH_ITEMS.map((it) => (
            <TabsTrigger
              key={it.key}
              value={it.key}
              id={`tab-${it.key}`}
              aria-controls={`panel-${it.key}`}
              className={clsx(
                "text-left whitespace-nowrap",
                "data-[state=active]:bg-muted data-[state=active]:border data-[state=active]:shadow-sm"
              )}
            >
              {it.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Desktop: Tab content */}
        <div className="hidden md:block">
          {APPROACH_ITEMS.map((it) => (
            <TabsContent
              key={it.key}
              value={it.key}
              id={`panel-${it.key}`}
              aria-labelledby={`tab-${it.key}`}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{it.title}</h3>

                {/* Render every paragraph exactly as provided */}
                {it.body.map((paragraph, i) => renderParagraph(paragraph, i))}

                {/* Optional detail buckets — render only if you provided them */}
                <div className="flex flex-wrap items-center gap-3">
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
            </TabsContent>
          ))}
        </div>
      </Tabs>
      </div>
    </section>
  )
}
