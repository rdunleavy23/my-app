// app/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { 
  Zap, 
  UserCog,
  Puzzle,
  Database,
  Gift,
  Handshake,
  ChevronDown
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ApproachSkeleton } from "@/components/skeletons/approach-skeleton"
import { createServiceSchema, createFAQSchema } from "@/lib/schemas"
import { MarketingSection } from "@/components/marketing/MarketingSection"

// Lazy load non-critical components for better performance
const Approach = dynamic(() => import("./(marketing)/_sections/approach-enhanced").then(mod => mod.default), {
  loading: () => <ApproachSkeleton />,
})

const HomeCarousel = dynamic(() => import("@/components/home-carousel").then(mod => mod.HomeCarousel), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg mb-8" />
})

const ComparisonTable = dynamic(() => import("@/components/ui/comparison-table").then(mod => mod.ComparisonTable), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg mb-12" />
})

const FAQCollapsible = dynamic(() => import("@/components/ui/faq-collapsible").then(mod => mod.default), {
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg mb-8" />
})


export const metadata: Metadata = {
  title: "Pattern Growth | 8-Week Growth Strategy Sprints",
  description: "Skip the $200k CMO salary. Get a complete growth strategy in 8 weeks. Fixed-scope, zero retainers, 100% ownership transfer.",
  keywords: "growth strategy, marketing consultant, fractional CMO alternative, 8-week sprint, marketing strategy, strategy consulting",
  alternates: { canonical: "https://www.patterngrowth.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Pattern Growth | 8-Week Growth Strategy Sprints",
    description: "Skip the $200k CMO salary. Get a complete growth strategy in 8 weeks. Fixed-scope, zero retainers, 100% ownership transfer.",
    type: "website",
    siteName: "Pattern Growth",
  },
}

export default function HomePage() {
  // WebSite schema - homepage only for site name display in SERPs
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.patterngrowth.com/#website",
    name: "Pattern Growth",
    alternateName: ["Pattern", "PatternGrowth"],
    url: "https://www.patterngrowth.com/",
    publisher: {
      "@id": "https://www.patterngrowth.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.patterngrowth.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = createServiceSchema({
    name: "8-Week Growth Strategy Sprint",
    description: "Complete marketing strategy and infrastructure delivered in 8 weeks. Project-based alternative to fractional CMO retainers with full ownership transfer.",
    url: "https://www.patterngrowth.com/",
    provider: "Pattern Growth"
  });

  const faqSchema = createFAQSchema([
    {
      "@type": "Question",
      name: "How involved do we need to be during the sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers."
      }
    },
    {
      "@type": "Question",
      name: "What makes you different from a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're project-based, not retainer-based. Think of us as the construction crew that builds the house; a fractional CMO is the property manager who runs it afterward. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us."
      }
    },
    {
      "@type": "Question",
      name: "Can we start right away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots."
      }
    }
  ]);

  return (
    <>
      {/* WebSite schema for site name display in SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-background">
                {/* Hero Section */}
                <MarketingSection variant="default" className="py-16 sm:py-20">
                  <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6 text-balance text-foreground">
                      Your Marketing Strategy,<br />
                      Built From Scratch<br className="lg:hidden" />
                      <span className="hidden lg:inline">&nbsp;</span>
                      <span className="text-foreground font-bold">in 8 Weeks</span>
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                      We craft complete growth strategies in focused 8-week sprints, then hand over everything so you can run it without us.
                    </p>

                    {/* Hero CTA */}
                    <GetStartedButton />

                    {/* Credibility row */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">2–3 clients per quarter</p>
                        <p className="text-primary">Hands-on founder involvement for depth and speed.</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">8-week build</p>
                        <p className="text-primary">Strategy, measurement, and enablement done end-to-end.</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">Full transfer</p>
                        <p className="text-primary">You own playbooks, dashboards, and training—no retainer.</p>
                      </div>
                    </div>

                  </div>
                </MarketingSection>

        {/* Interactive version loads client-side */}
        <Suspense fallback={<div className="py-12"></div>}>
          <Approach />
        </Suspense>

        {/* How We Work Differently */}
        <MarketingSection variant="chapter" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              How We Work Differently
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              CMO-level strategy through focused sprints, not ongoing retainers.
            </p>

            {/* Desktop: Grid of Cards - 6 items in 3x2 grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Quick Wins Start Week One</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <UserCog className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">2-3 Clients Per Quarter</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Direct founder involvement on every engagement. When strategy needs deep understanding, scale kills quality.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Gift className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Built to Transfer</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our success metric is you running this without us. Custom systems, clear documentation, training built in. Optional support after, not dependency.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Puzzle className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Strategy for Your Reality</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Templated frameworks fail because they ignore what makes you different. We map your position, capacity, and dynamics—then design strategy that fits.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Database className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Data Before Assumptions</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If your data is fragmented or missing, we fix that first. Clear visibility into what's working before we recommend what to change.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Handshake className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Handoff That Fits You</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Running lean, working with an agency, or building internal—we design handoff for your situation. Complete documentation, clear processes.
                </p>
              </Card>
            </div>

            {/* Mobile: Optimized accordion */}
            <div className="md:hidden">
              <Accordion
                type="multiple"
                defaultValue={["item-0", "item-1"]}
                className="w-full space-y-2"
              >
                <AccordionItem value="item-0" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          Quick Wins Start Week One
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <UserCog className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-primary leading-snug">
                          2-3 Clients Per Quarter
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-primary leading-relaxed">
                      Direct founder involvement on every engagement. When strategy needs deep understanding, scale kills quality.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Gift className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-primary leading-snug">
                          Built to Transfer
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-primary leading-relaxed">
                      Our success metric is you running this without us. Custom systems, clear documentation, training built in. Optional support after, not dependency.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Puzzle className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-primary leading-snug">
                          Strategy for Your Reality
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-primary leading-relaxed">
                      Templated frameworks fail because they ignore what makes you different. We map your position, capacity, and dynamics—then design strategy that fits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Database className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-primary leading-snug">
                          Data Before Assumptions
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-primary leading-relaxed">
                      If your data is fragmented or missing, we fix that first. Clear visibility into what's working before we recommend what to change.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Handshake className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-primary leading-snug">
                          Handoff That Fits You
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-primary leading-relaxed">
                      Running lean, working with an agency, or building internal—we design handoff for your situation. Complete documentation, clear processes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </MarketingSection>

        {/* Comparison Table */}
        <MarketingSection variant="default" className="py-16 sm:py-20 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                Pattern Growth vs. Traditional Alternatives
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Hiring or traditional outsourcing?
                <br />
                <span className="italic">Neither.</span>
              </h2>
            </div>
            
            <ComparisonTable
              columns={["Cost", "Speed", "Strategy", "Customization", "Independence"]}
              rows={[
                {
                  label: "Pattern Growth",
                  isHighlighted: true,
                  values: {
                    Cost: "check",
                    Speed: "check",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "check",
                  },
                },
                {
                  label: "Full-time CMO",
                  values: {
                    Cost: "x",
                    Speed: "x",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "question",
                  },
                },
                {
                  label: "Fractional CMO",
                  values: {
                    Cost: "x",
                    Speed: "check",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "x",
                  },
                },
                {
                  label: "Marketing agency",
                  values: {
                    Cost: "question",
                    Speed: "check",
                    Strategy: "question",
                    Customization: "question",
                    Independence: "x",
                  },
                },
                {
                  label: "DIY tools",
                  values: {
                    Cost: "check",
                    Speed: "check",
                    Strategy: "x",
                    Customization: "x",
                    Independence: "check",
                  },
                },
              ]}
              className="mt-8"
            />
          </div>
        </MarketingSection>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-tertiary">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-semibold mb-2 text-foreground">Common Questions</h2>
            <p className="text-muted-foreground mb-8">Everything you need to know about working with us.</p>

            <div className="space-y-4">
              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  How involved do we need to be during the sprint?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers.</p>
                </div>
              </details>

              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  What makes you different from a fractional CMO?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>We're project-based, not retainer-based. Think of us as the construction crew that builds the house; a fractional CMO is the property manager who runs it afterward.</p>
                  <p>You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever—with optional support if you want it—that's us.</p>
                  <p><Link href="/sprint-vs-fractional-cmo" className="text-primary hover:underline">Read our detailed comparison</Link>.</p>
                </div>
              </details>

              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  Can we start right away?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-[#3E5661]">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#F8ECD1] mb-4">
              See If We're a Fit
            </h2>
            <p className="text-base sm:text-lg text-[#F8ECD1] mb-2">
              We'll talk about where you are, where you need to be, and whether this makes sense.
            </p>
            <p className="text-sm sm:text-base text-[#F8ECD1]/80 italic mb-8">
              If we're not the right fit, we'll point you toward someone who can help.
            </p>
            <GetStartedButton size="lg" className="font-semibold btn-hover-lift bg-[#FFBF5E] text-[#02273A] hover:bg-[#FFBF5E]/90 shadow-md shadow-[#FFBF5E]/20 hover:shadow-lg hover:shadow-[#FFBF5E]/30 [&_i]:bg-[#02273A]/10 [&_i]:text-[#02273A]" location="hero">
              Schedule a Call
            </GetStartedButton>
          </div>
        </section>

      </div>
    </>
  )
}
