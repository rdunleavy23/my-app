// app/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, 
  Zap, 
  Building2, 
  TrendingUp, 
  Target, 
  Link as LinkIcon,
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

// Lazy load non-critical components for better performance
const Approach = dynamic(() => import("./(marketing)/_sections/approach").then(mod => mod.default), {
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
  title: "8-Week Growth Strategy Sprint | Project-Based Marketing Consultant",
  description: "Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you. A project-based alternative to fractional CMO retainers.",
  keywords: "growth strategy, marketing consultant, fractional CMO alternative, 8-week sprint, B2B marketing, strategy consulting",
  alternates: { canonical: "https://www.patterngrowth.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "8-Week Growth Strategy Sprint | Pattern Growth",
    description: "Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you.",
    type: "website",
  },
}

export default function HomePage() {
  const serviceSchema = createServiceSchema({
    name: "8-Week Growth Strategy Sprint",
    description: "Complete marketing strategy and infrastructure delivered in 8 weeks. Project-based alternative to fractional CMO retainers with full ownership transfer.",
    url: "https://www.patterngrowth.com/",
    provider: "Pattern Growth"
  });

  const faqSchema = createFAQSchema([
    {
      "@type": "Question",
      name: "What happens if my team can't execute what you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design for your actual team capability, not an ideal scenario. During handoff, if we identify skill gaps, we document them clearly and suggest solutions—whether that's training, hiring, or outsourcing specific pieces. You won't be handed a plan you can't run."
      }
    },
    {
      "@type": "Question",
      name: "Do you need to work in our industry to help us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. We've found that growth mechanics are more similar across industries than different. What matters more is stage—if you're between $1-5M revenue with investor pressure and scattered data, we've likely solved your exact problem before, regardless of vertical."
      }
    },
    {
      "@type": "Question",
      name: "What if the strategy doesn't work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strategy isn't a light switch. We build measurement into the plan so you'll know within 60-90 days if initiatives are on track. If something isn't working, the system we built lets you diagnose why and adjust. That's the point of owning the infrastructure—you can iterate without us."
      }
    },
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
        text: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us."
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
                <section className="py-16 sm:py-20 bg-background">
                  <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6 text-balance text-foreground">
                      Your Marketing Strategy,<br />
                      Built From Scratch<br className="lg:hidden" />
                      <span className="hidden lg:inline">&nbsp;</span>
                      <span className="text-foreground font-bold">in 8 Weeks</span>
                    </h1>

                    <div className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl space-y-4">
                      <p>
                        Most B2B companies can't justify a $250K CMO hire. But they need more than a fractional consultant who stays on retainer indefinitely.
                      </p>
                      <p>
                        We build complete growth strategies in focused 8-week sprints, then transfer everything to your team. Custom systems, clear documentation, measurable results—designed so you can run it without us.
                      </p>
                    </div>

                    {/* Hero CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <GetStartedButton />
                      <p className="text-sm text-muted-foreground">
                        30-minute call · No pitch, no pressure
                      </p>
                    </div>

                  </div>
                </section>

        {/* Interactive version loads client-side */}
        <Suspense fallback={<div className="py-12"></div>}>
          <Approach />
        </Suspense>

                {/* What Our Growth Strategy Sprint Includes */}
        <section className="py-16 sm:py-20 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
              What Our Growth Strategy Sprint Includes
            </h2>

            {/* Server-side content for SEO */}
            <div className="hidden md:grid md:grid-cols-3 gap-5 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Quick Wins Start Week One</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends. We work fast because you need results now.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Growth Infrastructure You Own</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build custom systems for how your business actually operates—then transfer everything to you. Everything we create becomes yours: frameworks, documentation, tools, insights. When we're done, your team runs independently with no ongoing dependency on us.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Strategy Connected to Revenue</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure. You'll know exactly what to scale and what to stop, based on your actual data.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Brand Positioning That Sells</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We clarify who you serve, why they'd choose you, and how to say it everywhere. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <LinkIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Marketing That Drives Revenue</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you have a sales team or growth happens product-led, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or vanity metrics.
                </p>
              </Card>
            </div>

            {/* Mobile: Vertical card stack - all content visible, no carousel friction */}
            <div className="md:hidden space-y-3">
              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-start gap-2.5 mb-2">
                  <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug">Quick Wins Start Week One</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends. We work fast because you need results now.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-start gap-2.5 mb-2">
                  <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug">Growth Infrastructure You Own</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build custom systems for how your business actually operates—then transfer everything to you. Everything we create becomes yours: frameworks, documentation, tools, insights. When we're done, your team runs independently with no ongoing dependency on us.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-start gap-2.5 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug">Strategy Connected to Revenue</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure. You'll know exactly what to scale and what to stop, based on your actual data.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-start gap-2.5 mb-2">
                  <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug">Brand Positioning That Sells</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We clarify who you serve, why they'd choose you, and how to say it everywhere. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <div className="flex items-start gap-2.5 mb-2">
                  <LinkIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-base font-semibold leading-snug">Marketing That Drives Revenue</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you have a sales team or growth happens product-led, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or vanity metrics.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Work Differently */}
        <section className="py-16 sm:py-20 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              How We Work Differently
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              CMO-level strategy through focused sprints, not ongoing retainers.
            </p>

            {/* Desktop: Grid of Cards */}
            <div className="hidden md:grid md:grid-cols-2 gap-5">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <UserCog className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">We Take 2-3 Clients Per Quarter</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This ensures you get direct founder involvement, not a junior team executing a playbook. When strategy needs deep understanding, scale kills quality.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Gift className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Built to Transfer, Not Keep You Dependent</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our success metric isn't keeping you on retainer—it's your team running this without us. We train as we build so knowledge transfers naturally. When we're done, your team runs independently. We're optional support after that, not a permanent fixture.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Puzzle className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Strategy Built for Your Reality</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Templated frameworks fail because they ignore what makes you different. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics. Then we design a strategy that fits your reality—not someone else's playbook.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Database className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Data Before Assumptions</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <Handshake className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Handoff That Fits How You Work</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, unified measurement systems—built so your team (or agency) can actually use it.
                </p>
              </Card>
            </div>

            {/* Mobile: Optimized accordion - tighter spacing, smaller icons, multiple items open */}
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
                        <UserCog className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          We Take 2-3 Clients Per Quarter
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This ensures you get direct founder involvement, not a junior team executing a playbook. When strategy needs deep understanding, scale kills quality.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Gift className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          Built to Transfer, Not Keep You Dependent
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our success metric isn't keeping you on retainer—it's your team running this without us. We train as we build so knowledge transfers naturally. When we're done, your team runs independently. We're optional support after that, not a permanent fixture.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Puzzle className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          Strategy Built for Your Reality
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Templated frameworks fail because they ignore what makes you different. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics. Then we design a strategy that fits your reality—not someone else's playbook.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Database className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          Data Before Assumptions
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-l-4 border-l-primary rounded-lg border bg-card">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline [&>svg:last-child]:shrink-0 [&>svg:last-child]:ml-2">
                    <div className="flex items-start gap-3 flex-1 min-h-[44px]">
                      <div className="mt-0.5 shrink-0">
                        <Handshake className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-base font-semibold text-foreground leading-snug">
                          Handoff That Fits How You Work
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, unified measurement systems—built so your team (or agency) can actually use it.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-20 border-t">
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
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Questions You Probably Have
              </h2>
              <p className="text-muted-foreground">
                The things prospects actually ask us
              </p>
            </div>


            <FAQCollapsible 
              items={[
                {
                  question: "What happens if my team can't execute what you build?",
                  answer: "We design for your actual team capability, not an ideal scenario. During handoff, if we identify skill gaps, we document them clearly and suggest solutions—whether that's training, hiring, or outsourcing specific pieces. You won't be handed a plan you can't run."
                },
                {
                  question: "Do you need to work in our industry to help us?",
                  answer: "Not necessarily. We've found that growth mechanics are more similar across industries than different. What matters more is stage—if you're between $1-5M revenue with investor pressure and scattered data, we've likely solved your exact problem before, regardless of vertical."
                },
                {
                  question: "What if the strategy doesn't work?",
                  answer: "Strategy isn't a light switch. We build measurement into the plan so you'll know within 60-90 days if initiatives are on track. If something isn't working, the system we built lets you diagnose why and adjust. That's the point of owning the infrastructure—you can iterate without us."
                },
                {
                  question: "How involved do we need to be during the sprint?",
                  answer: "Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers."
                },
                {
                  question: "What makes you different from a fractional CMO?",
                  answer: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever—with optional support if you want it—that's us. <a href='/blog/fractional-cmo-alternative' class='text-primary hover:underline'>Read our detailed comparison</a>."
                },
                {
                  question: "Can we start right away?",
                  answer: "If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots."
                }
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Book a 30-minute call. We'll talk about where you are, where you need to be, and whether this makes sense for you—no pitch, no pressure.
            </p>
            <Button asChild size="lg" className="font-semibold btn-hover-lift">
              <a
                href="https://cal.com/pattern-growth/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mx-auto w-fit"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

      </div>
    </>
  )
}
