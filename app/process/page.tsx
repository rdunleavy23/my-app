import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2, XCircle, Clock, Target, Search, Users, Wrench, TrendingUp, FileCheck } from "lucide-react"

export const metadata = {
  title: "Growth Strategy Process — Pattern Growth",
  description: "The Momentum System: Our 7-stage framework for building executable marketing strategy. From strategic foundation to implementation in 8 weeks.",
  openGraph: {
    title: "Our Growth Strategy Process — Pattern Growth",
    description: "CMO-level strategy delivered through a systematic 8-week sprint. No retainers, no dependencies.",
    type: "website",
  },
  keywords: [
    "growth strategy",
    "marketing strategy framework",
    "CMO alternative",
    "business growth process",
    "momentum system",
    "executable marketing strategy"
  ],
}

const stages = [
  {
    id: "aim",
    number: 1,
    title: "Aim",
    icon: Target,
    goal: "Define your big-picture goal and target market",
    whatWeDo: "Clarify success criteria and identify ideal customers",
    whatYouGet: "Strategic brief, ICP definition",
    owner: "Strategy Lead",
    duration: "Week 1",
    description: "Your sprint begins by clarifying your big-picture goal and identifying who you're building for. We establish what success looks like for the market and which customers matter most. Behind the scenes, we analyze your competitive landscape and category dynamics."
  },
  {
    id: "assess",
    number: 2,
    title: "Assess",
    icon: Search,
    goal: "Understand your current position",
    whatWeDo: "Audit customers, strengths, competitors, context",
    whatYouGet: "Situation analysis, gap assessment",
    owner: "Strategy Lead",
    duration: "Weeks 1-2",
    description: "We gather facts about your current position: customers, company strengths, partners, competitors, and market context. This establishes visibility into where real growth levers exist. Most teams optimize tactics while the strategy stays broken—we fix that by establishing your actual baseline first."
  },
  {
    id: "target",
    number: 3,
    title: "Target",
    icon: Users,
    goal: "Pick specific segments and positioning",
    whatWeDo: "Define audience segments and competitive positioning",
    whatYouGet: "Targeting strategy, positioning map",
    owner: "Strategy Lead",
    duration: "Week 3",
    description: "With your situation and goals understood, we define specific audience segments and determine how to reach them. We clarify who to pursue and how to position against competitors. This choice shapes every dollar that follows."
  },
  {
    id: "build",
    number: 4,
    title: "Build",
    icon: Wrench,
    goal: "Design offering and pricing",
    whatWeDo: "Outline specifications, pricing, product adjustments",
    whatYouGet: "Offering blueprint, pricing scenarios",
    owner: "Strategy Lead",
    duration: "Weeks 3-4",
    description: "With your target defined, we outline what you're creating and its specifications. We work with you to establish pricing and recommend product or service adjustments that strengthen your market position. We model scenarios to show expected impact across different pricing strategies."
  },
  {
    id: "reach",
    number: 5,
    title: "Reach",
    icon: TrendingUp,
    goal: "Plan distribution and promotion",
    whatWeDo: "Map channels and communication strategy",
    whatYouGet: "Channel plan, campaign templates",
    owner: "Marketing Team",
    duration: "Weeks 5-6",
    description: "Now we plan how to deliver and promote your offering: distribution channels and communication with target customers. Our plans account for team capacity and budget reality. What we recommend must be executable with your actual resources."
  },
  {
    id: "measure",
    number: 6,
    title: "Measure",
    icon: FileCheck,
    goal: "Define metrics and tracking",
    whatWeDo: "Set KPIs and build tracking infrastructure",
    whatYouGet: "KPI framework, dashboard",
    owner: "Analytics Lead",
    duration: "Weeks 6-7",
    description: "We define success metrics and tracking infrastructure: how to monitor progress and learn from results. The measurement framework shows exactly what matters and why. Our goal is detection—spotting what's working within weeks, not months."
  },
  {
    id: "enable",
    number: 7,
    title: "Enable",
    icon: CheckCircle2,
    goal: "Ensure execution readiness",
    whatWeDo: "Confirm resources, roles, budget, partners",
    whatYouGet: "Implementation roadmap, team training",
    owner: "Your Team",
    duration: "Week 8",
    description: "Strong strategies fail without execution systems. We ensure everything necessary is in place: resources, team roles, budget, and any partners required. The implementation roadmap shows who does what by when."
  }
]

const deliverables = [
  { stage: "Aim", item: "Strategic Brief", desc: "Big-picture goals & success criteria" },
  { stage: "Assess", item: "Situation Analysis", desc: "Current state audit & gap map" },
  { stage: "Target", item: "ICP & Positioning", desc: "Segment definitions & competitive map" },
  { stage: "Build", item: "Offering Blueprint", desc: "Product specs & pricing scenarios" },
  { stage: "Reach", item: "Channel Plan", desc: "Distribution strategy & campaign templates" },
  { stage: "Measure", item: "KPI Dashboard", desc: "Metrics framework & tracking system" },
  { stage: "Enable", item: "Implementation Roadmap", desc: "90-day plan with owners & timelines" },
  { stage: "Enable", item: "Team Training", desc: "Playbooks & handoff documentation" }
]

const timeline = [
  { week: 1, milestone: "Aim & Assess kickoff" },
  { week: 2, milestone: "Situation baseline complete" },
  { week: 3, milestone: "Target segments defined" },
  { week: 4, milestone: "Offering finalized" },
  { week: 5, milestone: "Channel priorities set" },
  { week: 6, milestone: "Dashboard goes live" },
  { week: 7, milestone: "Implementation plan ready" },
  { week: 8, milestone: "Team handoff & training" }
]

const faqs = [
  {
    q: "What does a sprint cost?",
    a: "Fixed fee ranges from $25K-50K depending on complexity and company size. 50/50 payment structure: half upfront, half at completion. Includes full year of dashboard access and 30-day post-sprint support."
  },
  {
    q: "How involved does our team need to be?",
    a: "Expect 4-6 hours per week for workshops, reviews, and data access. We need a primary contact (usually CEO or VP Marketing) and access to analytics platforms. Most heavy lifting is on our side."
  },
  {
    q: "What tools do you work with?",
    a: "We're platform-agnostic but commonly integrate: Google Analytics, HubSpot, Salesforce, Stripe, Meta/Google Ads, Mixpanel, Segment. If you use something else, we adapt."
  },
  {
    q: "What happens after the 90-day mark?",
    a: "You own everything: strategy docs, dashboards, playbooks. We check in at W4, W8, and 90 days. After that, you execute independently—or optionally engage us for specific campaigns."
  },
  {
    q: "Do we own the IP and deliverables?",
    a: "Yes. Complete ownership. All strategy documents, frameworks, dashboards, and campaign templates belong to you."
  },
  {
    q: "Can we cancel mid-sprint?",
    a: "If you're unsatisfied after Week 2, we'll refund 50% of the second payment. After Week 4, all fees are non-refundable as major deliverables are complete."
  }
]

export default function ProcessPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero */}
      <header className="text-center space-y-6 max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Our Process
        </h1>
        <p className="text-lg text-muted-foreground">
          The Momentum System delivers CMO-level strategy through a focused 8-week sprint—without the six-figure salary or long-term dependencies.
        </p>
        <Button asChild size="lg">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 20-Min Explore Call
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          We take max 4 sprints at a time · Start within 1 week
        </p>
      </header>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          8-Week Sprint Timeline
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {timeline.map((item) => (
            <Card key={item.week} className="text-center">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-sm">W{item.week}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground">{item.milestone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* The Momentum System */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          The 7-Stage Momentum System
        </h2>

        <div className="space-y-4">
          {stages.map((stage) => {
            const Icon = stage.icon
            return (
              <Card key={stage.id} id={stage.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 mt-1">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">Stage {stage.number}</Badge>
                        <CardTitle className="text-xl">{stage.title}</CardTitle>
                        <span className="ml-auto text-sm text-muted-foreground">{stage.duration}</span>
                      </div>
                      <CardDescription className="text-base">{stage.goal}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm font-medium mb-1">What we do</p>
                      <p className="text-sm text-muted-foreground">{stage.whatWeDo}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">What you get</p>
                      <p className="text-sm text-muted-foreground">{stage.whatYouGet}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Owner</p>
                      <p className="text-sm text-muted-foreground">{stage.owner}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Deliverables Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          What You'll Get
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{item.stage}</Badge>
                <CardTitle className="text-base">{item.item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Who It's For */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          Is This Right For You?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Great fit if you...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm">Have $1-5M revenue and proven product-market fit</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm">Need strategic direction, not just tactical execution</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm">Have scattered data across multiple platforms</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm">Want to own your growth infrastructure, not rent it</p>
              </div>
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm">Can commit 4-6 hours/week for 8 weeks</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Not right if you...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm">Need ongoing campaign execution (we build systems, not run ads)</p>
              </div>
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm">Want a full-time CMO managing your team</p>
              </div>
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm">Are pre-revenue or still finding product-market fit</p>
              </div>
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm">Need results in under 4 weeks</p>
              </div>
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm">Can't dedicate leadership time to strategy workshops</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom CTA */}
      <footer className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Ready to build your growth system?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Schedule a 20-minute Explore Call to see if Pattern Growth is right for your business.
        </p>
        <Button asChild size="lg">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 20-Min Explore Call
          </Link>
        </Button>
      </footer>
    </main>
  )
}