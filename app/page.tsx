// app/page.tsx
"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, 
  Compass, 
  Rocket, 
  Users, 
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
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Note: Metadata export needs to be in a separate server component or root layout
// For now, we'll handle it via the layout or convert back to server component after client interactivity is confirmed

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pattern Growth",
  description: "Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.",
  url: "https://www.patterngrowth.com",
  serviceType: [
    "Growth Strategy Consulting",
    "Marketing Strategy Sprint", 
    "Fractional CMO Alternative",
    "Marketing Dashboard Development",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  offers: {
    "@type": "Offer",
    name: "Growth Strategy Sprint",
    description: "8-week focused engagement delivering growth strategy, marketing infrastructure, and team training with complete ownership transfer",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens if my team can't execute what you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design for your actual team capability, not an ideal scenario. During handoff, if we identify skill gaps, we document them clearly and suggest solutions—whether that's training, hiring, or outsourcing specific pieces. You won't be handed a plan you can't run.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to work in our industry to help us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. We've found that growth mechanics are more similar across industries than different. What matters more is stage—if you're between $1-5M revenue with investor pressure and scattered data, we've likely solved your exact problem before, regardless of vertical.",
      },
    },
    {
      "@type": "Question",
      name: "What if the strategy doesn't work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strategy isn't a light switch. We build measurement into the plan so you'll know within 60-90 days if initiatives are on track. If something isn't working, the system we built lets you diagnose why and adjust. That's the point of owning the infrastructure—you can iterate without us.",
      },
    },
    {
      "@type": "Question",
      name: "How involved do we need to be during the sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers.",
      },
    },
    {
      "@type": "Question",
      name: "What makes you different from a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us.",
      },
    },
    {
      "@type": "Question",
      name: "Can we start right away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots.",
      },
    },
  ],
}

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl leading-tight mb-6">
              Your Marketing Strategy,<br className="hidden sm:block" />
              Built From Scratch in 8 Weeks
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              We dive into your business data, build strategy tailored to your specific market position, and deliver a complete roadmap with fixed scope and executive-level direction—all in two months.
            </p>

          </div>
        </section>

        {/* Our Approach - Swipeable Cards */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Approach</h2>
            
            {/* Desktop: 3 cards in row */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">
                    <Compass className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Shaped by Your Reality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today, not some idealized version that ignores what you're working with.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">
                    <Rocket className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Built for Your Future</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize, what success looks like for your business, and when to scale or adjust based on what's actually working.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Owned by Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your team gets trained to execute independently, so you're not stuck in a consulting relationship. No retainer, no ongoing fees, just capability that stays with you long after we're gone.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="mb-4">
                          <Compass className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Shaped by Your Reality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today, not some idealized version that ignores what you're working with.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="mb-4">
                          <Rocket className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Built for Your Future</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize, what success looks like for your business, and when to scale or adjust based on what's actually working.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="mb-4">
                          <Users className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Owned by Your Team</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Your team gets trained to execute independently, so you're not stuck in a consulting relationship. No retainer, no ongoing fees, just capability that stays with you long after we're gone.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === current - 1 ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Swipe to explore our approach
              </p>
            </div>
          </div>
        </section>

        {/* What Our Growth Strategy Sprint Includes */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              What Our Growth Strategy Sprint Includes
            </h2>

            {/* Mobile: Clean List Layout */}
            <div className="md:hidden space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Wins in 30 Days</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We start executing in week one, not month three. While we're building your strategic foundation, you'll see immediate improvements—campaign optimizations, conversion fixes, budget reallocations—that impact your pipeline before the sprint ends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Growth Infrastructure You Own</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We build custom systems tailored to how your business actually operates—then transfer complete ownership to you. Everything we create becomes yours: the frameworks, the documentation, the tools, the insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Revenue-Connected Strategy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Most marketing roadmaps prioritize busy work over business impact. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Brand Positioning That Sells</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We clarify who you serve, why you're different, and how to say it consistently across every channel. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <LinkIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Marketing & Revenue Alignment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Whether you have a dedicated sales team or growth happens through product-led motion, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or metrics that don't predict growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Bento Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Wins - Spans 2 columns on large screens */}
              <Card className="lg:col-span-2 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Zap className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">Quick Wins in 30 Days</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We start executing in week one, not month three. While we're building your strategic foundation, you'll see immediate improvements—campaign optimizations, conversion fixes, budget reallocations—that impact your pipeline before the sprint ends. We work fast because you need results, not another consultant ramping up.
                  </p>
                </CardContent>
              </Card>

              {/* Growth Infrastructure */}
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Building2 className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">Growth Infrastructure You Own</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We build custom systems tailored to how your business actually operates—then transfer complete ownership to you. Everything we create becomes yours: the frameworks, the documentation, the tools, the insights. When we're done, your team runs independently with no ongoing dependency on us.
                  </p>
                </CardContent>
              </Card>

              {/* Revenue-Connected Strategy */}
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <TrendingUp className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">Revenue-Connected Strategy</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Most marketing roadmaps prioritize busy work over business impact. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure. You'll know exactly what to scale and what to stop, based on your actual performance data.
                  </p>
                </CardContent>
              </Card>

              {/* Brand Positioning */}
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <Target className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">Brand Positioning That Sells</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We clarify who you serve, why you're different, and how to say it consistently across every channel. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience. One clear message that resonates wherever prospects find you.
                  </p>
                </CardContent>
              </Card>

              {/* Marketing & Revenue Alignment */}
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-3">
                    <LinkIcon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">Marketing & Revenue Alignment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Whether you have a dedicated sales team or growth happens through product-led motion, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or metrics that don't predict growth. Just marketing that supports the way you win customers and drive results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Work Differently */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Work Differently</h2>
            
            {/* Mobile: Simplified List */}
            <div className="md:hidden space-y-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <UserCog className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Limited Capacity by Design</h3>
                  <p className="text-muted-foreground text-sm">
                    We take 2-3 clients per quarter, not 10. This ensures you get direct founder involvement instead of a junior team executing a playbook.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Strategy Built From Your Context</h3>
                  <p className="text-muted-foreground text-sm">
                    We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics—then design a strategy that fits your reality.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Data Before Assumptions</h3>
                  <p className="text-muted-foreground text-sm">
                    If your data infrastructure is fragmented or missing, we build it first. We can't create reliable strategy from guesswork.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Built to Transfer, Not Retain</h3>
                  <p className="text-muted-foreground text-sm">
                    Our success metric isn't a long-term consulting relationship—it's your team executing independently. We train as we build so knowledge transfers naturally.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Handoff Shaped for Your Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether you're running lean, working with an agency, or building an internal team, we design the handoff for your specific situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Card Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <UserCog className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Limited Capacity by Design</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We take 2-3 clients per quarter, not 10. This ensures you get direct founder involvement instead of a junior team executing a playbook. When strategy requires deep understanding, scale works against quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <Puzzle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Strategy Built From Your Context</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We've found that templated frameworks fail because they ignore what makes your situation unique. We spend the first two weeks mapping your competitive position, team capacity, and stakeholder dynamics—then design a strategy that fits your reality, not someone else's.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Data Before Assumptions</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    If your data infrastructure is fragmented or missing, we build it first. We can't create reliable strategy from guesswork. You'll get clear visibility into what's working before we recommend what to change.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Built to Transfer, Not Retain</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Our success metric isn't a long-term consulting relationship—it's your team executing independently. We train as we build so knowledge transfers naturally. When we're done, you don't need us anymore.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Handoff Shaped for Your Team</CardTitle>
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
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about our process
              </p>
            </div>

            {/* Desktop: 2 cards in row */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What happens if my team can't execute what you build?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We design for your actual team capability, not an ideal scenario. During handoff, if we identify skill gaps, we document them clearly and suggest solutions—whether that's training, hiring, or outsourcing specific pieces. You won't be handed a plan you can't run.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Do you need to work in our industry to help us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not necessarily. We've found that growth mechanics are more similar across industries than different. What matters more is stage—if you're between $1-5M revenue with investor pressure and scattered data, we've likely solved your exact problem before, regardless of vertical.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What if the strategy doesn't work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strategy isn't a light switch. We build measurement into the plan so you'll know within 60-90 days if initiatives are on track. If something isn't working, the system we built lets you diagnose why and adjust. That's the point of owning the infrastructure—you can iterate without us.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How involved do we need to be during the sprint?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What makes you different from a fractional CMO?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Can we start right away?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">What happens if my team can't execute what you build?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We design for your actual team capability, not an ideal scenario. During handoff, if we identify skill gaps, we document them clearly and suggest solutions—whether that's training, hiring, or outsourcing specific pieces. You won't be handed a plan you can't run.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">Do you need to work in our industry to help us?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Not necessarily. We've found that growth mechanics are more similar across industries than different. What matters more is stage—if you're between $1-5M revenue with investor pressure and scattered data, we've likely solved your exact problem before, regardless of vertical.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">What if the strategy doesn't work?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Strategy isn't a light switch. We build measurement into the plan so you'll know within 60-90 days if initiatives are on track. If something isn't working, the system we built lets you diagnose why and adjust. That's the point of owning the infrastructure—you can iterate without us.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">How involved do we need to be during the sprint?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">What makes you different from a fractional CMO?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We're project-based, not retainer-based. You get complete ownership of deliverables in 8 weeks instead of paying monthly for ongoing advisory. If you need strategic guidance long-term, hire a CMO. If you need infrastructure built once and owned forever, that's us.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem>
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">Can we start right away?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots.
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === current - 1 ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to FAQ ${index + 1}`}
                  />
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Swipe to explore more questions
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
