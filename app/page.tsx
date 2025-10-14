import type { Metadata } from 'next'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const metadata: Metadata = {
  title: 'Pattern Growth | Growth Strategy Sprints for $1-5M Companies',
  description: 'CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.',
  openGraph: {
    type: 'website',
    url: 'https://www.patterngrowth.com',
    title: 'Pattern Growth | Growth Strategy Sprints for $1-5M Companies',
    description: 'CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.',
    siteName: 'Pattern Growth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pattern Growth | Growth Strategy Sprints for $1-5M Companies',
    description: 'CMO-level growth strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks. Start within 1 week.'
  },
  alternates: {
    canonical: 'https://www.patterngrowth.com'
  },
  robots: {
    index: true,
    follow: true
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this a fractional CMO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It's the strategy you'd hire one for—delivered in 8 weeks—with playbooks and training, then a clean handoff."
      }
    },
    {
      "@type": "Question",
      "name": "What if I don't have a team yet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We design the plan either way. If you need a small bridge to start, we'll outline options and owners."
      }
    },
    {
      "@type": "Question",
      "name": "Do you stick around?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you need us, we're available for a few check-ins after handoff. No ongoing retainer."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly do I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategy package, campaign playbooks, KPI model, and live training—with all files delivered to you."
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="bg-background">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Fixed scope</Badge>
              <Badge variant="secondary">Clear KPIs, not fluff</Badge>
              <Badge variant="secondary">Built by Ryan & William</Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 leading-tight">
              An 8-week alternative to a fractional CMO—tailored strategy your team can run
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              We follow a designed week-by-week sequence to ask the right questions, read the right data, and make decisions your team can stand behind. No templates. No retainers. Just a plan, playbooks, and a clean handoff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a fit call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/process">
                  See the 8-week plan
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
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our 8-week sequence mirrors our 7-stage process—Aim → Assess → Target → Build → Reach → Measure → Enable—so we pull out the right insights and turn them into decisions you can run.
                </p>
                <Link href="/process" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Who This Is For
            </h2>
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
                    You may have a team or need a light execution bridge to start; either way, you want to <strong>own the strategy</strong>.
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
                <Button asChild className="w-full">
                  <Link href="/contact">Book a fit call</Link>
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              What You Get
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Strategy Package</CardTitle>
                  <CardDescription>
                    Positioning, channel priorities, KPI model.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Clear strategic framework tailored to your market position and team capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign Playbooks</CardTitle>
                  <CardDescription>
                    Runbooks, cadences, owners, scorecard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step execution guides your team can follow independently.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training & Handoff</CardTitle>
                  <CardDescription>
                    Live sessions, recordings, reference hub.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete knowledge transfer so your team owns and runs the strategy.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Preview a sample</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get a Sample Deliverable</DialogTitle>
                  <DialogDescription>
                    We'll send you an example strategy document so you can see what you're getting.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company"
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                    />
                  </div>
                </div>
                <Button className="w-full">Send me a sample</Button>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Fractional CMO, full-time CMO, agency—or us?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Most growth-stage companies consider these options. Here's how they compare.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Factor</TableHead>
                    <TableHead>Pattern Growth</TableHead>
                    <TableHead>Fractional CMO</TableHead>
                    <TableHead>Full-Time CMO</TableHead>
                    <TableHead>Agency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Speed to clarity</TableCell>
                    <TableCell className="font-semibold text-primary">8 weeks</TableCell>
                    <TableCell className="text-muted-foreground">6–12+ months</TableCell>
                    <TableCell className="text-muted-foreground">4–8 month search + ramp</TableCell>
                    <TableCell className="text-muted-foreground">Varies</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ownership</TableCell>
                    <TableCell className="font-semibold text-primary">You own the plan & playbooks</TableCell>
                    <TableCell className="text-muted-foreground">Consultant-dependent</TableCell>
                    <TableCell className="text-muted-foreground">Employee deliverables</TableCell>
                    <TableCell className="text-muted-foreground">Limited strategy ownership</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Who runs day-to-day</TableCell>
                    <TableCell className="font-semibold text-primary">Your team (or light bridge if needed)</TableCell>
                    <TableCell className="text-muted-foreground">Consultant guidance</TableCell>
                    <TableCell className="text-muted-foreground">Employee (costly)</TableCell>
                    <TableCell className="text-muted-foreground">Agency execution</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cost structure</TableCell>
                    <TableCell className="font-semibold text-primary">$25–50K one-time</TableCell>
                    <TableCell className="text-muted-foreground">$60–180K/yr</TableCell>
                    <TableCell className="text-muted-foreground">$200K+ salary + time</TableCell>
                    <TableCell className="text-muted-foreground">Retainer/project</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Aftercare</TableCell>
                    <TableCell className="font-semibold text-primary">Available for check-ins. No retainer.</TableCell>
                    <TableCell className="text-muted-foreground">Ongoing retainer</TableCell>
                    <TableCell className="text-muted-foreground">Ongoing employment</TableCell>
                    <TableCell className="text-muted-foreground">Retainer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Risk</TableCell>
                    <TableCell className="font-semibold text-primary">Fixed scope, fast learning</TableCell>
                    <TableCell className="text-muted-foreground">Drift + dependency</TableCell>
                    <TableCell className="text-muted-foreground">High cost, slow hire</TableCell>
                    <TableCell className="text-muted-foreground">Misaligned incentives</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Best when…</TableCell>
                    <TableCell className="font-semibold text-primary">You want senior strategy fast—and to own it</TableCell>
                    <TableCell className="text-muted-foreground">You want ongoing leadership</TableCell>
                    <TableCell className="text-muted-foreground">You need a permanent exec</TableCell>
                    <TableCell className="text-muted-foreground">You need hands-on campaign ops</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">$25–50K one-time</p>
                <p className="text-muted-foreground mb-4">50/50 payment</p>
                
                <Separator className="my-6" />
                
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Includes:</strong> Discovery, Strategy, Playbooks, Training, Handoff, and a detailed SOW with milestones.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fixed scope; we protect the 8-week cadence so it stays focused.
                  </p>
                </div>

                <Alert>
                  <AlertDescription>
                    You'll get a detailed SOW with milestones, deliverables, and example artifacts up front, so you know exactly what's coming and when.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founders' Note */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">From Ryan & William</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We started Pattern Growth because smart teams were working hard without shared priorities. We're operators at heart. We ask the right questions, follow the data, and ship decisions you can run. In eight weeks, you'll have a plan your team (or a light bridge) can execute—and you'll own it.
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground italic">— Ryan & William</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Questions People Usually Ask
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this a fractional CMO?</AccordionTrigger>
                <AccordionContent>
                  No. It's the strategy you'd hire one for—delivered in 8 weeks—with playbooks and training, then a clean handoff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What if I don't have a team yet?</AccordionTrigger>
                <AccordionContent>
                  We design the plan either way. If you need a small bridge to start, we'll outline options and owners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you stick around?</AccordionTrigger>
                <AccordionContent>
                  If you need us, we're available for a few check-ins after handoff. No ongoing retainer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What exactly do I get?</AccordionTrigger>
                <AccordionContent>
                  Strategy package, campaign playbooks, KPI model, and live training—with all files delivered to you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              If we're not your best move right now, we'll say so.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Book a fit call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/process">
                  See the 8-week plan
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
