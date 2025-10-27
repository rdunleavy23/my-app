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
  Handshake
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { FAQSchema } from "@/components/faq-schema"
import { ApproachSkeleton } from "@/components/skeletons/approach-skeleton"
import { createServiceSchema } from "@/lib/schemas"

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

// Server-side approach content for SEO
function ApproachContent() {
  const approachItems = [
    {
      title: "Shaped by Your Reality",
      body: ["We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today, not some idealized version that ignores reality."]
    },
    {
      title: "Built for Your Future",
      body: ["We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize, what success looks like, and when to scale or adjust based on what's actually working."]
    },
    {
      title: "Owned by Your Team",
      body: ["Your team gets trained to execute independently, so you're not stuck in a consulting relationship. No retainer, no ongoing fees, just capability that stays with you."]
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-muted/30" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="approach-heading" className="mb-6 text-2xl font-semibold">
          Our Approach
        </h2>

        <div className="space-y-8">
          {approachItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 pt-2 pb-4">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <div className="space-y-3">
                    {item.body.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: "8-Week Growth Strategy Sprint | Project-Based Marketing Consultant",
  description: "Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you. A project-based alternative to fractional CMO retainers.",
  keywords: "growth strategy, marketing consultant, fractional CMO alternative, 8-week sprint, B2B marketing, strategy consulting",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="bg-background">
                {/* Hero Section */}
                <section className="py-16 sm:py-20">
                  <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-foreground mb-6 text-balance">
                      Your Marketing Strategy, Built From Scratch in 8 Weeks
                    </h1>

                    <div className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl space-y-4">
                      <p>
                      Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you. A project-based alternative to <Link href="/what-is-fractional-cmo" className="text-primary hover:underline">fractional CMO retainers</Link>.
                    </p>
                      <p>
                        We don't just design strategy. We operationalize it into systems your team can actually run. 8-week sprints for $1-5M B2B companies ready to scale without the overhead of traditional consulting.
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
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="card-hover-lift group">
                <CardHeader>
                  <div className="mb-4">
                    <Zap className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">Quick Wins Start Week One</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends. We work fast because you need results now.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover-lift group">
                <CardHeader>
                  <div className="mb-4">
                    <Building2 className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">Growth Infrastructure You Own</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    We build custom systems for how your business actually operates—then transfer everything to you. Everything we create becomes yours: frameworks, documentation, tools, insights. When we're done, your team runs independently with no ongoing dependency on us.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover-lift group">
                <CardHeader>
                  <div className="mb-3">
                    <TrendingUp className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Strategy Connected to Revenue</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure. You'll know exactly what to scale and what to stop, based on your actual data.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Carousel for mobile */}
            <HomeCarousel />
          </div>
        </section>

        {/* How We Work Differently */}
        <section className="py-16 sm:py-20 bg-muted/30 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              How We Work Differently
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              CMO-level strategy through focused sprints, not ongoing retainers.
            </p>

            {/* Server-side content for SEO */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="mb-4">
                    <UserCog className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">We Take 2-3 Clients Per Quarter</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    This ensures you get direct founder involvement, not a junior team executing a playbook. When strategy needs deep understanding, scale kills quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="mb-4">
                    <Gift className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">Built to Transfer, Not Keep You Dependent</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Our success metric isn't keeping you on retainer—it's your team running this without us. We train as we build so knowledge transfers naturally. When we're done, you don't need us. Period.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional differentiators */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-3">
                    <Puzzle className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Strategy Built for Your Reality</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Templated frameworks fail because they ignore what makes you different. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics. Then we design a strategy that fits your reality—not someone else's playbook.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3">
                    <Database className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Data Before Assumptions</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3">
                    <Handshake className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Handoff That Fits How You Work</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, ongoing dashboard access—built so your team (or agency) can actually use it.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Mobile: Cards for key points, list for supporting */}
            <div className="md:hidden space-y-6">
              {/* Featured: Key Differentiators as Cards */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="mb-3">
                    <UserCog className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg font-semibold">We Take 2-3 Clients Per Quarter</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  <p>
                    This ensures you get direct founder involvement, not a junior team executing a playbook. When strategy needs deep understanding, scale kills quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="mb-3">
                    <Gift className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Built to Transfer, Not Keep You Dependent</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Our success metric isn't keeping you on retainer—it's your team running this without us. We train as we build so knowledge transfers naturally. When we're done, you don't need us. Period.
                  </p>
                </CardContent>
              </Card>

              {/* Supporting Points: Simpler List Items */}
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Puzzle className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Strategy Built for Your Reality</h3>
                  <p className="text-muted-foreground text-sm">
                    Templated frameworks fail because they ignore what makes you different. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics. Then we design a strategy that fits your reality—not someone else's playbook.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Data Before Assumptions</h3>
                  <p className="text-muted-foreground text-sm">
                    If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Handoff That Fits How You Work</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, ongoing dashboard access—built so your team (or agency) can actually use it.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: 2-Tier Layout */}
            <div className="hidden md:block space-y-8">
              {/* Tier 1: Two Featured Differentiators */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-primary card-hover-lift">
                  <CardHeader>
                    <div className="mb-4">
                      <UserCog className="h-12 w-12 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">We Take 2-3 Clients Per Quarter</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      This ensures you get direct founder involvement, not a junior team executing a playbook. When strategy needs deep understanding, scale kills quality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary card-hover-lift">
                  <CardHeader>
                    <div className="mb-4">
                      <Gift className="h-12 w-12 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">Built to Transfer, Not Keep You Dependent</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Our success metric isn't keeping you on retainer—it's your team running this without us. We train as we build so knowledge transfers naturally. When we're done, you don't need us. Period.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Tier 2: Three Supporting Points */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="card-hover-lift group">
                  <CardHeader>
                    <div className="mb-3">
                      <Puzzle className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Strategy Built for Your Reality</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Templated frameworks fail because they ignore what makes you different. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics. Then we design a strategy that fits your reality—not someone else's playbook.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover-lift group">
                  <CardHeader>
                    <div className="mb-3">
                      <Database className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Data Before Assumptions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      If your data is fragmented or missing, we fix that first. We don't create strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover-lift group">
                  <CardHeader>
                    <div className="mb-3">
                      <Handshake className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Handoff That Fits How You Work</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Whether you're running lean, working with an agency, or building internal, we design the handoff for your specific situation. Complete documentation, clear processes, ongoing dashboard access—built so your team (or agency) can actually use it.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-20 border-t bg-muted/30">
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

            <FAQSchema faqs={[
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
                answer: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us. <Link href='/blog/fractional-cmo-alternative' className='text-primary hover:underline'>Read our detailed comparison</Link> or learn <Link href='/what-is-fractional-cmo' className='text-primary hover:underline'>what fractional CMOs are</Link> and <Link href='/fractional-cmo-hourly-rate' className='text-primary hover:underline'>how much they cost</Link>."
              },
              {
                question: "Can we start right away?",
                answer: "If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots."
              }
            ]} />

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
                  answer: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us. <a href='/blog/fractional-cmo-alternative' class='text-primary hover:underline'>Read our detailed comparison</a>."
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
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
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
