// app/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
// (Optional imports you might use later; safe to keep or remove)
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow
// } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Pattern Growth | Growth Strategy Sprints for $1–5M Companies",
  description:
    "CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.",
  // because metadataBase is set in app/layout.tsx, relative canonicals are ideal
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/",
    title: "Pattern Growth | Growth Strategy Sprints for $1–5M Companies",
    description:
      "CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Growth | Growth Strategy Sprints for $1–5M Companies",
    description:
      "CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.",
  },
  robots: { index: true, follow: true },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pattern Growth",
  description: "Growth strategy sprints and fractional CMO alternative for growth-stage companies. CMO-level thinking delivered through focused 2-month project-based engagements.",
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
    description: "2-month focused engagement delivering growth strategy, marketing dashboards, and team training",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. It's the strategy you'd hire one for—delivered in 8 weeks—with playbooks and training, then a clean handoff.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't have a team yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We design the plan either way. If you need a small bridge to start, we'll outline options and owners.",
      },
    },
    {
      "@type": "Question",
      name: "Do you stick around?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "If you need us, we're available for a few check-ins after handoff. No ongoing retainer.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly do I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Strategy package, campaign playbooks, KPI model, and live training—with all files delivered to you.",
      },
    },
  ],
}

export default function HomePage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 leading-tight">
              An 8-week alternative to a fractional CMO—tailored strategy your team can run
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              We follow a designed week-by-week sequence to ask the right questions, read
              the right data, and make decisions your team can stand behind. No templates.
              No retainers. Just a plan, playbooks, and a clean handoff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto">
                <a
                  href="https://cal.com/pattern-growth/30min?overlayCalendar=true&utm_source=site&utm_medium=hero_cta&utm_campaign=home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Schedule a 30-minute call
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold px-8 py-3 h-auto">
                <Link href="/process" className="flex items-center gap-2">
                  See our 8-week process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Why This Works */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">It's not eight random weeks.</CardTitle>
                <CardDescription>
                  Our 8-week sequence mirrors our 7-stage process—Aim → Assess → Target → Build → Reach → Measure → Enable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We pull out the right insights and turn them into decisions you can run.
                </p>
                <Link
                  href="/process"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  See the 7-stage plan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who This Is For</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're growing and marketing feels busy but unsynchronized, this is for you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground">
                    You want <strong>decisions, not decks</strong>—clear priorities tied to pipeline.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground">
                    You care about <strong>actionable data</strong>, not marketing fluff.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground">
                    You may have a team or need a light execution bridge to start; either way, you want to{" "}
                    <strong>own the strategy</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-foreground">
                    You like partners who <strong>ask sharp questions</strong> and act like they're on your team.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Am I a fit?</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Quick Fit Check</DialogTitle>
                  <DialogDescription>
                    If most of these are true, we should talk.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="fit1" />
                    <label htmlFor="fit1" className="text-sm leading-relaxed">
                      You're past product-market fit and have revenue ($1M+)
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="fit2" />
                    <label htmlFor="fit2" className="text-sm leading-relaxed">
                      You need strategic clarity, not more tactical execution
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="fit3" />
                    <label htmlFor="fit3" className="text-sm leading-relaxed">
                      You want to own the plan, not rent ongoing consulting
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="fit4" />
                    <label htmlFor="fit4" className="text-sm leading-relaxed">
                      You value clear KPIs and board-ready reporting
                    </label>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Link href="https://cal.com/pattern-growth/30min?overlayCalendar=true&utm_source=site&utm_medium=fit_check_cta&utm_campaign=home" className="flex items-center justify-center gap-2">
                    Schedule a fit call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* What Our Growth Strategy Sprint Includes */}
        <section id="includes" className="py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              What Our Growth Strategy Sprint Includes
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Wins in 30 Days</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We start executing in week one, not month three. While we're building your
                    strategic foundation, you'll see immediate improvements—campaign optimizations,
                    conversion fixes, budget reallocations—that impact your pipeline before the sprint
                    ends. We work fast because you need results, not another consultant ramping up.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Infrastructure You Own</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We build custom systems tailored to how your business actually operates—then transfer
                    complete ownership to you. Everything we create becomes yours: the frameworks, the
                    documentation, the tools, the insights. When we're done, your team runs independently
                    with no ongoing dependency on us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue-Connected Strategy</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Most marketing roadmaps prioritize busy work over business impact. We connect every
                    initiative directly to revenue: what generates pipeline, what converts prospects, what
                    drives growth you can measure. You'll know exactly what to scale and what to stop,
                    based on your actual performance data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brand Positioning That Sells</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    We clarify who you serve, why you're different, and how to say it consistently across
                    every channel. Your positioning will work in outreach, on sales calls, in investor
                    conversations, and throughout your customer experience. One clear message that
                    resonates wherever prospects find you.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Marketing &amp; Revenue Alignment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Whether you have a dedicated sales team or growth happens through product-led motion,
                    we align your marketing to how revenue actually happens in your business. No more
                    disconnected campaigns or metrics that don't predict growth. Just marketing that
                    supports the way you win customers and drive results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Learn More About Our Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our methodology and understand how we deliver CMO-level strategy without the ongoing commitment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/what-is-fractional-cmo" className="hover:text-primary transition-colors">
                      What is a Fractional CMO?
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Understand the fractional CMO model and why we built something different for growth-stage companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/fractional-cmo-alternative" className="hover:text-primary transition-colors">
                      Our Alternative Approach
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    See why 2-month strategy sprints outperform traditional fractional CMO relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/benefits-of-fractional-cmo" className="hover:text-primary transition-colors">
                      Benefits of Fractional CMO
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Learn about the advantages and considerations of fractional CMO services.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/fractional-cmo-hourly-rate" className="hover:text-primary transition-colors">
                      Fractional CMO Pricing
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Understand typical fractional CMO rates and how our sprint model compares.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/fractional-cmo-responsibilities" className="hover:text-primary transition-colors">
                      CMO Responsibilities
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Explore what fractional CMOs typically handle and how we approach these areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href="/process" className="hover:text-primary transition-colors">
                      Our 8-Week Process
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    See exactly how we deliver comprehensive growth strategy in just 8 weeks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
