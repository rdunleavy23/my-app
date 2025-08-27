"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="font-semibold">Pattern Growth</div>
            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#process" className="text-muted-foreground hover:text-foreground">Process</a>
              <a href="#deliverables" className="text-muted-foreground hover:text-foreground">What You Get</a>
              <a href="#investment" className="text-muted-foreground hover:text-foreground">Investment</a>
              <Button asChild>
                <Link href="https://cal.com/pattern-growth">Book a Preview</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-[46rem] text-center">
          <Badge variant="secondary" className="mb-4 inline-block">Growth Strategy Sprints</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Growth Vision Needs a Dashboard, Not Just a Strategy Doc
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            For $1–5MM companies who need expert marketing strategy that actually gets implemented—
            without the $200K CMO commitment.
          </p>

          <div className="mt-6 grid gap-3 sm:flex sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="https://cal.com/pattern-growth">Schedule Your Growth Planning Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#process">See Sprint Overview</Link>
            </Button>
          </div>
        </div>

        <Separator className="mt-12 sm:mt-16" />
      </section>

      {/* Philosophy */}
      <section className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <Card className="mx-auto max-w-3xl">
          <CardHeader className="text-center">
            <Badge variant="secondary" className="mx-auto w-fit">Our Philosophy</Badge>
            <CardTitle className="text-2xl">Clarity your team can actually run</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-center">
            <p>You have vision. Your team has horsepower. What’s missing is the mechanism that turns ambition into repeatable outcomes.</p>
            <p>We translate executive goals into measurable strategy, then operationalize it into dashboards and playbooks your team can use. The result? A growth system that outlives us — not another dependency.</p>
          </CardContent>
        </Card>
      </section>

      {/* Process */}
      <section id="process" className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            From scattered signals to a single source of truth — in 4–8 weeks.
          </h2>
          <p className="text-muted-foreground">
            We don’t just design strategy. We operationalize it into systems your team can actually run.
          </p>
        </div>

        <Tabs defaultValue="wk1-2" className="mt-6">
          <TabsList className="w-full overflow-x-auto whitespace-nowrap sm:grid sm:grid-cols-3 gap-2 sm:gap-0 border rounded-lg">
            <TabsTrigger value="wk1-2" className="flex-1">Weeks 1–2</TabsTrigger>
            <TabsTrigger value="wk3-4" className="flex-1">Weeks 3–4</TabsTrigger>
            <TabsTrigger value="wk5-8" className="flex-1">Weeks 5–8</TabsTrigger>
          </TabsList>

          <TabsContent value="wk1-2" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 space-y-2 text-muted-foreground">
                <p>• Extract vision and translate it into measurable objectives</p>
                <p>• Map customer journeys to surface the highest-impact opportunities</p>
                <p>• Benchmark competitors to position your advantage</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wk3-4" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 space-y-2 text-muted-foreground">
                <p>• Channel priorities tied to business outcomes</p>
                <p>• Decision frameworks to keep teams moving fast without chaos</p>
                <p>• Campaign templates and process docs for repeatable execution</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wk5-8" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 space-y-2 text-muted-foreground">
                <p>• Consolidate scattered data into a single, decision-ready dashboard</p>
                <p>• Train your team for confident, independent execution</p>
                <p>• Deliver a complete playbook for sustainable growth</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Why not the usual options */}
      <section className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">Why the usual options don’t work</h2>
        </div>
        <Tabs defaultValue="cmo" className="mt-4">
          <TabsList className="w-full overflow-x-auto whitespace-nowrap sm:grid sm:grid-cols-3 gap-2 sm:gap-0 border rounded-lg">
            <TabsTrigger value="cmo" className="flex-1">Full-time CMO</TabsTrigger>
            <TabsTrigger value="agency" className="flex-1">Agency</TabsTrigger>
            <TabsTrigger value="internal" className="flex-1">Internal Promotion</TabsTrigger>
          </TabsList>
          <TabsContent value="cmo" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 text-muted-foreground">Too slow, too expensive, too abstract.</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="agency" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 text-muted-foreground">Campaigns without context. Data trapped in their reports.</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="internal" className="mt-6">
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-6 text-muted-foreground">Unfair expectations without proven frameworks.</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            You don’t just get a plan. You get a system your team can run.
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Strategy &amp; Positioning</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Strategy docs &amp; competitive frameworks</p>
              <p>• Customer journey optimization roadmap</p>
              <p>• Messaging &amp; positioning guidelines</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Playbooks &amp; Processes</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Channel priorities tied to outcomes</p>
              <p>• Campaign playbooks you can actually use</p>
              <p>• Repeatable process docs</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Dashboard &amp; Training</CardTitle>
              <Badge variant="secondary">1-year access</Badge>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Custom dashboard across data sources</p>
              <p>• Executive reporting for board/investors</p>
              <p>• Team trained for independent execution</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment & Guarantee */}
      <section id="investment" className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl text-center">Investment &amp; Delivery Guarantee</h2>
          <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
            <AccordionItem value="investment">
              <AccordionTrigger>Investment</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                $25K–50K based on complexity and scope • 50/50 payment • Includes one-year dashboard access
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guarantee">
              <AccordionTrigger>Delivery Guarantee</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p>• Start within one week of agreement</p>
                <p>• Dashboard live within 6 weeks or we adjust the sprint</p>
                <p>• Full team handoff with documentation</p>
                <p>• 30-day post-sprint support</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4 text-center">
            <Badge variant="secondary">We take on 2–3 sprints per quarter</Badge>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-16">
        <Card className="mx-auto max-w-4xl border-primary/20">
          <CardContent className="py-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Ready to see where your growth is getting stuck?</h3>
                <p className="mt-2 text-muted-foreground">Walk through the framework before you commit.</p>
              </div>
              <div className="grid w-full gap-3 sm:auto-cols-max sm:grid-flow-col md:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="https://cal.com/pattern-growth">Schedule Your Sprint Preview</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="#process">Review the Sprint Plan</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Pattern Growth</div>
          <div className="flex flex-wrap gap-4">
            <a href="#process">Process</a>
            <a href="#deliverables">What You Get</a>
            <a href="#investment">Investment</a>
            <a href="https://cal.com/pattern-growth">Book</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
