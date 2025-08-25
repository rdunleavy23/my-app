"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-semibold tracking-tight">
            Pattern <span className="text-slate-500">Growth</span>
          </Link>
          <div className="hidden gap-3 sm:flex">
            <Link href="#sprint" className="text-sm text-slate-600 hover:text-slate-900">Sprint</Link>
            <Link href="#who" className="text-sm text-slate-600 hover:text-slate-900">Who</Link>
            <Link href="#compare" className="text-sm text-slate-600 hover:text-slate-900">Why Us</Link>
            <Link href="#proof" className="text-sm text-slate-600 hover:text-slate-900">Proof</Link>
            <Link href="#faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</Link>
          </div>
          <Button asChild size="sm">
            <Link href="#cta">Book a Call</Link>
          </Button>
        </div>
      </header>

      <section className="relative border-b">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit">Alternative to Fractional CMO</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Skip the Fractional CMO. <span className="text-slate-500">Get Strategy That Ships.</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Turn executive vision into measurable growth—in weeks, not months.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#cta">Book Your Strategy Call</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#proof">See Live Dashboard Examples</Link>
              </Button>
            </div>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>The Pattern Growth Sprint</CardTitle>
              <p className="text-sm text-slate-500">4–8 weeks from vision to visibility</p>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="rounded-lg border p-4">
                <div className="text-xs font-medium text-slate-500">Week 1–2</div>
                <div className="mt-1 font-medium">Strategic Foundation</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>Executive alignment sessions</li>
                  <li>Market positioning and messaging framework</li>
                  <li>Customer journey mapping and funnel optimization</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-xs font-medium text-slate-500">Week 3–4</div>
                <div className="mt-1 font-medium">Execution Design</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>Channel strategy and campaign architecture</li>
                  <li>KPI framework and measurement plan</li>
                  <li>Team playbooks and decision frameworks</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-xs font-medium text-slate-500">Week 5–8</div>
                <div className="mt-1 font-medium">Live Instrumentation</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  <li>Custom dashboard deployment</li>
                  <li>Real-time tracking across all channels</li>
                  <li>Performance optimization and team enablement</li>
                </ul>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <div className="font-medium">Result</div>
                <p className="mt-1 text-sm text-emerald-800">
                  A complete growth engine you can see, measure, and scale.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="sprint" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">One Focus. Maximum Impact.</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            The Pattern Growth Sprint compresses strategy and execution into a tight 4–8 week engagement.
          </p>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="w12">
                <AccordionTrigger className="text-left">Week 1–2: Strategic Foundation</AccordionTrigger>
                <AccordionContent className="pt-2">
                  <ul className="list-disc space-y-1 pl-5 text-slate-700">
                    <li>Executive alignment sessions</li>
                    <li>Market positioning and messaging framework</li>
                    <li>Customer journey mapping and funnel optimization</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="w34">
                <AccordionTrigger className="text-left">Week 3–4: Execution Design</AccordionTrigger>
                <AccordionContent className="pt-2">
                  <ul className="list-disc space-y-1 pl-5 text-slate-700">
                    <li>Channel strategy and campaign architecture</li>
                    <li>KPI framework and measurement plan</li>
                    <li>Team playbooks and decision frameworks</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="w58">
                <AccordionTrigger className="text-left">Week 5–8: Live Instrumentation</AccordionTrigger>
                <AccordionContent className="pt-2">
                  <ul className="list-disc space-y-1 pl-5 text-slate-700">
                    <li>Custom dashboard deployment</li>
                    <li>Real-time tracking across all channels</li>
                    <li>Performance optimization and team enablement</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="who" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Who This Is For</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Series A–B Companies</CardTitle>
                <p className="text-sm text-slate-500">$1M–$20M ARR</p>
              </CardHeader>
              <CardContent className="text-slate-600">
                Need strategy fast but can’t justify a full-time CMO.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Venture-Backed Startups</CardTitle>
                <p className="text-sm text-slate-500">Board pressure to show ROI</p>
              </CardHeader>
              <CardContent className="text-slate-600">
                Senior strategy without adding permanent headcount.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growing Companies</CardTitle>
                <p className="text-sm text-slate-500">Ads/content without clarity</p>
              </CardHeader>
              <CardContent className="text-slate-600">
                Align teams and measurement around business outcomes.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="compare" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Why This Beats Your Other Options
          </h2>

          <Tabs defaultValue="fractional" className="mt-8">
            <div className="relative -mx-4 px-4">
              <TabsList className="flex w-full justify-start overflow-x-auto whitespace-nowrap rounded-xl bg-slate-100 p-1 snap-x snap-mandatory">
                <TabsTrigger value="fractional" className="shrink-0 snap-start">vs. Fractional CMO</TabsTrigger>
                <TabsTrigger value="agencies" className="shrink-0 snap-start">vs. Marketing Agencies</TabsTrigger>
                <TabsTrigger value="fulltime" className="shrink-0 snap-start">vs. Full-Time CMO Hire</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="fractional" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Feature title="Timeline">4–8 weeks vs. 3–6 months</Feature>
                <Feature title="Engagement">Fixed sprint vs. $8K–$15K/mo retainer</Feature>
                <Feature title="Deliverables">Specific artifacts vs. ongoing mgmt</Feature>
                <Feature title="Output">Working dashboards vs. strategy docs</Feature>
              </div>
            </TabsContent>

            <TabsContent value="agencies" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Feature title="Focus">C-suite vision translation vs. campaign execution</Feature>
                <Feature title="Metrics">Business metrics vs. vanity metrics</Feature>
                <Feature title="Scope">Defined sprint vs. open-ended</Feature>
                <Feature title="Ownership">You own systems vs. agency dependency</Feature>
              </div>
            </TabsContent>

            <TabsContent value="fulltime" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Feature title="Speed">Weeks vs. 3–6 month search</Feature>
                <Feature title="Cost">$25K–$50K sprint vs. $200K+ salary + equity</Feature>
                <Feature title="Risk">Try-before-hire vs. permanent commitment</Feature>
                <Feature title="Method">Sprint methodology vs. general hire</Feature>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Investment &amp; Timeline</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Sprint Investment</CardTitle>
                <p className="text-sm text-slate-500">$25K–$50K</p>
              </CardHeader>
              <CardContent className="text-slate-600">
                50% start, 50% at delivery. Includes 30 days post-sprint support.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Timeline Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Discovery starts within 1 week. Dashboards live in 6 weeks max. Full handoff with playbooks.
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Satisfaction Clause</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                If clarity/dashboards aren’t met at week 6, we continue at no cost until specs are delivered.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="proof" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proof Points</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Real results, real systems. Dashboards your team actually uses.
          </p>

          <div className="mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CaseCard
                    title="SaaS company"
                    result="+40% conversion in 90 days"
                    detail="Positioning + funnel optimization"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CaseCard
                    title="B2B startup"
                    result="-25% CAC"
                    detail="Channel mix + measurement discipline"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <CaseCard
                    title="FinTech"
                    result="Unified 5 systems → 1 dashboard"
                    detail="RevOps + data integration"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            Clients: VC-backed startups (a16z, Sequoia, First Round) • SaaS $2M–$15M ARR • FinTech • HealthTech • Enterprise software
          </div>
        </div>
      </section>

      <section id="faq" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Questions</h2>
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>How do I know you understand our business?</AccordionTrigger>
                <AccordionContent>
                  First week includes interviews, competitive analysis, and data audit. All custom.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>What if our data is messy?</AccordionTrigger>
                <AccordionContent>
                  We clean and integrate data across HubSpot, Salesforce, GA, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Who actually does the work?</AccordionTrigger>
                <AccordionContent>
                  Strategic lead plus specialists. No junior staff on strategy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>What happens after the sprint?</AccordionTrigger>
                <AccordionContent>
                  You own dashboards, frameworks, and docs. We hand off fully.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>How is this different from consulting?</AccordionTrigger>
                <AccordionContent>
                  Consulting = PowerPoints. Sprints = working systems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to See Your Growth Patterns?
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              In your call: current challenges and gaps, dashboard walkthrough, sprint scope and timeline, clear next steps.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Button asChild className="w-full lg:w-auto">
              <Link href="https://cal.com" target="_blank" rel="noreferrer">
                Book Your Strategy Call — This Week
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full lg:w-auto">
              <Link href="#proof">Request Sample Dashboard Access</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Pattern Growth</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-600">{children}</CardContent>
    </Card>
  );
}

function CaseCard({
  title,
  result,
  detail,
}: {
  title: string;
  result: string;
  detail: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-emerald-600">{result}</p>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{detail}</CardContent>
    </Card>
  );
}
