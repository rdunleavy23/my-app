import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">Pattern Growth</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#process" className="text-muted-foreground hover:text-foreground">Process</a>
            <a href="#deliverables" className="text-muted-foreground hover:text-foreground">Deliverables</a>
            <a href="#investment" className="text-muted-foreground hover:text-foreground">Investment</a>
            <Button asChild>
              <a href="https://cal.com/pattern-growth">Book Your Sprint Preview</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4">Growth Strategy Sprints</Badge>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl">
            Your Growth Vision Needs a Dashboard, Not Just a Strategy Doc
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            For $1–5MM companies who need expert marketing strategy that actually gets implemented —
            without the $200K CMO commitment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="https://cal.com/pattern-growth">Schedule Your Growth Planning Call</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#process">See Sprint Overview</a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Philosophy */}
      <section className="container py-14">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit">Our Philosophy</Badge>
            <CardTitle className="text-2xl">Clarity Your Team Can Run With</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>You have the vision. Your team has the hustle. What’s missing is the strategic bridge that connects ambition to execution.</p>
            <p>We translate executive goals into measurable strategy, then operationalize it into dashboards and playbooks your team can actually use. The result? A growth system that outlives us — not another dependency.</p>
          </CardContent>
        </Card>
      </section>

      {/* Process */}
      <section id="process" className="container py-14">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">From scattered metrics to strategic clarity — in 4–8 weeks</h2>
        <p className="text-muted-foreground mb-6">We don’t just deliver slides. We build systems your team can run.</p>

        <Tabs defaultValue="wk1-2" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="wk1-2">Weeks 1–2</TabsTrigger>
            <TabsTrigger value="wk3-4">Weeks 3–4</TabsTrigger>
            <TabsTrigger value="wk5-8">Weeks 5–8</TabsTrigger>
          </TabsList>

          <TabsContent value="wk1-2" className="mt-6">
            <Card><CardContent className="pt-6 space-y-2 text-muted-foreground">
              <p>• Extract your growth vision and translate it into measurable objectives</p>
              <p>• Map customer journeys to surface high-impact opportunities</p>
              <p>• Benchmark competitors to sharpen positioning</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="wk3-4" className="mt-6">
            <Card><CardContent className="pt-6 space-y-2 text-muted-foreground">
              <p>• Channel roadmap tied directly to business outcomes</p>
              <p>• Decision frameworks that enable speed without chaos</p>
              <p>• Campaign templates and process docs for repeatable execution</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="wk5-8" className="mt-6">
            <Card><CardContent className="pt-6 space-y-2 text-muted-foreground">
              <p>• Consolidate data into a single executive dashboard</p>
              <p>• Train your team for confident, independent execution</p>
              <p>• Deliver a complete growth playbook for sustainable scale</p>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* When to Engage */}
      <section className="container py-14">
        <Alert>
          <AlertTitle>When strategy is the bottleneck</AlertTitle>
          <AlertDescription className="mt-2">You don’t need a CMO on payroll — you need clarity, fast.</AlertDescription>
        </Alert>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card><CardContent className="pt-6">• Revenue is climbing, but systems lag</CardContent></Card>
          <Card><CardContent className="pt-6">• The board demands clarity your dashboards can’t provide</CardContent></Card>
          <Card><CardContent className="pt-6">• Team is hustling without a repeatable framework</CardContent></Card>
          <Card><CardContent className="pt-6">• Investors want traction, not vanity metrics</CardContent></Card>
        </div>
      </section>

      {/* Alternatives */}
      <section className="container py-14">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">Why the usual options fall short</h2>
        <Tabs defaultValue="cmo" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cmo">Full-time CMO</TabsTrigger>
            <TabsTrigger value="agency">Agency</TabsTrigger>
            <TabsTrigger value="internal">Internal Promotion</TabsTrigger>
          </TabsList>
          <TabsContent value="cmo" className="mt-6">
            <Card><CardContent className="pt-6 text-muted-foreground">Too slow. Too expensive. Too abstract.</CardContent></Card>
          </TabsContent>
          <TabsContent value="agency" className="mt-6">
            <Card><CardContent className="pt-6 text-muted-foreground">Campaigns without context. Data locked in reports.</CardContent></Card>
          </TabsContent>
          <TabsContent value="internal" className="mt-6">
            <Card><CardContent className="pt-6 text-muted-foreground">Unfair expectations without proven frameworks.</CardContent></Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="container py-14">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">What You Walk Away With</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Strategy & Positioning</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Growth strategy doc</p>
              <p>• Competitive frameworks</p>
              <p>• Customer journey optimization roadmap</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Playbooks & Processes</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Channel priorities tied to outcomes</p>
              <p>• Campaign playbooks your team can actually use</p>
              <p>• Repeatable process documentation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Dashboard & Training</CardTitle>
                <Badge variant="secondary">1-year access</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Custom dashboard across all data sources</p>
              <p>• Executive reporting for board/investors</p>
              <p>• Team trained for independent execution</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment */}
      <section id="investment" className="container py-14">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight">Investment & Guarantee</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="investment">
            <AccordionTrigger>Investment</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              $25K–50K depending on complexity • 50/50 payment • Includes one-year dashboard access
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="guarantee">
            <AccordionTrigger>Guarantee</AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <p>• Start within one week of agreement</p>
              <p>• Dashboard live within 6 weeks or we adjust</p>
              <p>• Full handoff with docs & playbooks</p>
              <p>• 30-day post-sprint support</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Badge variant="secondary" className="mt-4">Only 2–3 sprints per quarter</Badge>
      </section>

      {/* Closing CTA */}
      <section className="container py-20">
        <Card className="border-primary/20">
          <CardContent className="py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Ready to see your growth patterns?</h3>
                <p className="mt-2 text-muted-foreground">Book a sprint preview and get clarity before you commit.</p>
              </div>
              <div className="flex gap-3">
                <Button asChild size="lg">
                  <a href="https://cal.com/pattern-growth">Schedule Your Sprint Preview</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#process">Review Sprint Plan</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Pattern Growth</div>
          <div className="flex gap-4">
            <a href="#process">Process</a>
            <a href="#deliverables">Deliverables</a>
            <a href="#investment">Investment</a>
            <a href="https://cal.com/pattern-growth">Book</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
