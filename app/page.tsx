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

import { FAQCollapsible } from "@/components/ui/faq-collapsible"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Approach } from "./(marketing)/_sections/approach"
import { Suspense } from "react"
import { FAQSchema } from "@/components/faq-schema"
import { ApproachSkeleton } from "@/components/skeletons/approach-skeleton"
import { HomeCarousel } from "@/components/home-carousel"
import { useScrollDepth } from "@/hooks/use-scroll-depth"
import { trackCTAClick } from "@/lib/analytics-events"

// Note: Metadata export needs to be in a separate server component or root layout
// For now, we'll handle it via the layout or convert back to server component after client interactivity is confirmed

export default function HomePage() {
  // Enable scroll depth tracking
  useScrollDepth();

  const handleCTAClick = (location: 'hero' | 'cta_section') => {
    trackCTAClick({
      cta_location: location,
      cta_text: 'Schedule a Call',
      cta_destination: 'https://cal.com/pattern-growth/30min',
    });
  };

  return (
    <>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-10 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl leading-tight font-bold tracking-tight text-foreground mb-6 text-balance">
              Your Marketing Strategy, Built From Scratch in 8 Weeks
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Complete growth strategy built from your actual data—not templates. Executive-level work, fixed scope, everything transfers to you. A project-based alternative to fractional CMO retainers.
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button asChild size="lg" className="font-semibold">
                <a
                  href="https://cal.com/pattern-growth/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                30-minute call · No pitch, no pressure
              </p>
            </div>

          </div>
        </section>

        <Suspense fallback={<ApproachSkeleton />}>
          <Approach />
        </Suspense>

        {/* What Our Growth Strategy Sprint Includes */}
        <section className="py-12 sm:py-16 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              What Our Growth Strategy Sprint Includes
            </h2>

            {/* Mobile: Swipeable Carousel */}
            <HomeCarousel />

            {/* Desktop: Bento Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Wins - Spans 2 columns on large screens */}
              <Card className="lg:col-span-2 motion-safe:transition-shadow hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Zap className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Quick Wins Start Week One</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends. We work fast because you need results now.
                  </p>
                </CardContent>
              </Card>

              {/* Growth Infrastructure */}
              <Card className="motion-safe:transition-shadow hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Building2 className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Growth Infrastructure You Own</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We build custom systems for how your business actually operates—then transfer everything to you. Everything we create becomes yours: frameworks, documentation, tools, insights. When we're done, your team runs independently with no ongoing dependency on us.
                  </p>
                </CardContent>
              </Card>

              {/* Revenue-Connected Strategy */}
              <Card className="motion-safe:transition-shadow hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <TrendingUp className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Strategy Connected to Revenue</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure. You'll know exactly what to scale and what to stop, based on your actual data.
                  </p>
                </CardContent>
              </Card>

              {/* Brand Positioning */}
              <Card className="motion-safe:transition-shadow hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Target className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Brand Positioning That Sells</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We clarify who you serve, why they'd choose you, and how to say it everywhere. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience. One clear message that resonates wherever prospects find you.
                  </p>
                </CardContent>
              </Card>

              {/* Marketing & Revenue Alignment */}
              <Card className="motion-safe:transition-shadow hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <LinkIcon className="h-10 w-10 text-primary motion-safe:transition-transform motion-reduce:transition-none group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Marketing That Drives Revenue</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Whether you have a sales team or growth happens product-led, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or vanity metrics. Just marketing that drives the results that matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Work Differently */}
        <section className="py-12 sm:py-16 bg-muted/30 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Project-Based Marketing Consulting vs. Traditional Models
            </h2>
            <p className="text-muted-foreground mb-8">
              We deliver CMO-level strategy through focused sprints, not ongoing retainers.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-6">How We Work Differently</h3>
            
            {/* Mobile: Simplified List */}
            <div className="md:hidden space-y-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <UserCog className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Limited Capacity by Design</h3>
                  <p className="text-muted-foreground text-sm">
                    We take 2-3 clients per quarter, not 10. This ensures you get direct founder involvement instead of a junior team executing a playbook. <Link href="/what-is-fractional-cmo" className="text-primary hover:underline">Unlike traditional fractional CMO models</Link>, when strategy requires deep understanding, scale works against quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Puzzle className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Strategy Built From Your Context</h3>
                  <p className="text-muted-foreground text-sm">
                    We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics—then design a strategy that fits your reality.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Data Before Assumptions</h3>
                  <p className="text-muted-foreground text-sm">
                    If your data infrastructure is fragmented or missing, we build it first. We can't create reliable strategy from guesswork.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Gift className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Built to Transfer, Not Retain</h3>
                  <p className="text-muted-foreground text-sm">
                    Our success metric isn't a long-term consulting relationship—it's your team executing independently. We train as we build so knowledge transfers naturally.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Handoff Shaped for Your Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether you're running lean, working with an agency, or building an internal team, we design the handoff for your specific situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Card Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <Card className="motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">
                    <UserCog className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Limited Capacity by Design</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We take 2-3 clients per quarter, not 10. This ensures you get direct founder involvement instead of a junior team executing a playbook. When strategy requires deep understanding, scale works against quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">
                    <Puzzle className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Strategy Built From Your Context</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We've found that templated frameworks fail because they ignore what makes your situation unique. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics—then design a strategy that fits your reality, not someone else's.
                  </p>
                </CardContent>
              </Card>

              <Card className="motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">
                    <Database className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Data Before Assumptions</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    If your data infrastructure is fragmented or missing, we build it first. We can't create reliable strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                  </p>
                </CardContent>
              </Card>

              <Card className="motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">
                    <Gift className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Built to Transfer, Not Retain</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Our success metric isn't a long-term consulting relationship—it's your team executing independently. We train as we build so knowledge transfers naturally. When we're done, you don't need us anymore.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">
                    <Handshake className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">Handoff Shaped for Your Team</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Whether you're running lean, working with an agency, or building an internal team, we design the handoff for your specific situation. Complete documentation, clear processes, ongoing dashboard access—structured so whoever takes it forward can actually use it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
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
                answer: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us. <a href='/blog/fractional-cmo-alternative' class='text-primary hover:underline'>Read our detailed comparison</a>."
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
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Your Growth Strategy?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Book a 30-minute call. We'll discuss where you are, where you want to be, and if this approach is right for you—no pitch, just conversation.
            </p>
            <Button asChild size="lg" className="font-semibold">
              <a
                href="https://cal.com/pattern-growth/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mx-auto w-fit"
                onClick={() => handleCTAClick('cta_section')}
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
