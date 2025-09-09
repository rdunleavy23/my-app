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
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-[46rem] text-center mx-auto">
          <Badge variant="secondary" className="mb-4 inline-block">Growth Strategy Sprints</Badge>
          <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl text-center">
            Build Your Growth System in 8 Weeks <br className="hidden sm:inline" />— Then Run It Without Us
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            For $1–5MM companies who need expert marketing strategy that actually gets implemented—
            without the $200K CMO commitment.
          </p>

          <div className="mt-6 grid gap-3 sm:flex sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="https://cal.com/pattern-growth">Schedule Your Growth Planning Call</Link>
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
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <TabsList className="w-full overflow-x-auto whitespace-nowrap sm:grid sm:grid-cols-3 gap-2 sm:gap-0 border rounded-lg">
              <TabsTrigger value="wk1-2" className="flex-1">Weeks 1–2</TabsTrigger>
              <TabsTrigger value="wk3-4" className="flex-1">Weeks 3–4</TabsTrigger>
              <TabsTrigger value="wk5-8" className="flex-1">Weeks 5–8</TabsTrigger>
            </TabsList>
          </div>

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
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <TabsList className="w-full overflow-x-auto whitespace-nowrap sm:grid sm:grid-cols-3 gap-2 sm:gap-0 border rounded-lg">
              <TabsTrigger value="cmo" className="flex-1">Full-time CMO</TabsTrigger>
              <TabsTrigger value="agency" className="flex-1">Agency</TabsTrigger>
              <TabsTrigger value="internal" className="flex-1">Internal Promotion</TabsTrigger>
            </TabsList>
          </div>
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
