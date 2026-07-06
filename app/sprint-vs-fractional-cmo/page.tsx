// app/sprint-vs-fractional-cmo/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X, Clock, DollarSign, Package, Users, Zap, Target, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { createBreadcrumbListSchema, createComparisonPageSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title: "Strategy Sprint vs Fractional CMO: An Honest Comparison",
  description:
    "8-week sprint vs fractional CMO retainer: cost, timeline, ownership compared. Honest analysis of when each model works—and when it doesn't.",
  keywords: [
    "strategy sprint vs fractional cmo",
    "fractional cmo comparison",
    "strategy sprint cost",
    "fractional cmo alternative",
    "project-based marketing vs retainer",
    "cmo services comparison"
  ],
  alternates: { canonical: "https://www.patterngrowth.com/sprint-vs-fractional-cmo" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/sprint-vs-fractional-cmo",
    title: "Strategy Sprint vs Fractional CMO: An Honest Comparison",
    description:
      "8-week sprint vs fractional CMO retainer: cost, timeline, ownership compared. Honest analysis of when each model works—and when it doesn't.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Sprint vs Fractional CMO: An Honest Comparison",
    description:
      "8-week sprint vs fractional CMO retainer: cost, timeline, ownership compared. Honest analysis of when each model works—and when it doesn't.",
  },
  robots: { index: true, follow: true },
}

export default function SprintVsFractionalCMOPage() {
  const breadcrumbSchema = createBreadcrumbListSchema([
    { label: 'Home', href: '/', position: 1 },
    { label: 'Strategy Sprint vs Fractional CMO', position: 2 }
  ]);

  const comparisonSchema = createComparisonPageSchema(
    "Strategy Sprint vs Fractional CMO Comparison",
    "Comprehensive comparison of 8-week strategy sprints and fractional CMO services for growth-stage companies",
    "https://www.patterngrowth.com/sprint-vs-fractional-cmo"
  );

  const sprintBenefits = [
    {
      icon: Clock,
      title: "8 Weeks to Complete Strategy",
      description: "Not 6 months of discovery. You get a full strategic architecture and long-term plan in 8 weeks."
    },
    {
      icon: Package,
      title: "You Own Everything",
      description: "Strategy docs, playbooks, roadmap—it's all yours to keep, built with you so your team can run it with confidence."
    },
    {
      icon: FileText,
      title: "Senior Partners, Deeply Embedded",
      description: "You work directly with senior strategists who learn your business and treat it like their own—an extension of your leadership, not an outside vendor."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20 bg-tertiary rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'Strategy Sprint vs Fractional CMO' }]} />

            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                Strategy Sprint vs<br />Fractional CMO
              </h1>

              <div className="w-20 h-px bg-primary mx-auto" />

              <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                You want a senior, trusted partner for your marketing—without the overhead of a full-time hire. Here's an honest look at both models, including the limitations, so you can decide what fits.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Sprint Benefits - Primary Focus */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="default" className="mb-2">The Sprint Model</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Strategy You Own Forever
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                A focused 8-week engagement that builds your complete marketing strategy, then hands it over
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {sprintBenefits.map((benefit) => (
                <Card key={benefit.title} className="text-center card-hover-lift border-border/50">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* The Core Difference */}
        <section className="container mx-auto px-4 py-16 sm:py-20 bg-primary/5 rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Core Difference
              </h2>
            </div>

            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A <strong className="text-foreground">strategy sprint</strong> is project-based work that builds complete marketing infrastructure in 8 weeks, then transfers everything to you. A <strong className="text-foreground">fractional CMO</strong> is ongoing advisory on a retainer—they remain your strategic leader long-term.
                </p>
                <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                  <p className="text-lg leading-relaxed text-foreground font-medium">
                    Think of it this way: a sprint is the construction crew that builds the house; a fractional CMO is the property manager who runs it afterward.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Quick Decision - Sprint Focused */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                When Strategy Sprint Fits
              </h2>
              <p className="text-lg text-muted-foreground">
                The sprint model works best when...
              </p>
            </div>

            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Growth stalled and you don't know why</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>You want to own the strategy, not rent it</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Need strategic clarity in weeks, not months</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Can execute once you have direction</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Want fixed cost with complete deliverables</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Don't want ongoing consultant dependency</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                When does a fractional CMO make more sense? When you have marketers who need operational leadership, vendors who need management, or when you need someone in board meetings representing marketing long-term.
              </p>
              <Link href="#when-fractional-fits" className="text-primary hover:underline text-sm font-medium">
                See full comparison below →
              </Link>
            </div>
          </div>
        </section>

        <Separator />

        {/* You Might Not Have a Marketing Team */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary text-secondary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-px bg-primary mx-auto" />

                <h2 className="text-3xl font-bold text-foreground">
                  You Might Not Have a Marketing Department
                </h2>

                <div className="space-y-4 text-secondary-foreground leading-relaxed text-left max-w-2xl mx-auto">
                  <p className="text-base sm:text-lg">
                    Most fractional CMO engagements assume you have marketers to lead. They provide oversight, attend meetings, and guide strategy—but someone else executes.
                  </p>
                  <p className="text-base sm:text-lg">
                    If you're a founder doing marketing yourself, or running with one generalist and some freelancers, the fractional CMO model often doesn't fit.
                  </p>
                  <p className="text-base sm:text-lg font-medium text-foreground">
                    At the end of your strategy sprint, you get a long-term plan—not just strategy documents. This roadmap shows exactly what to execute, whether you're running lean, working with agencies, or eventually building internal capacity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Cost Comparison - Simplified */}
        <section className="container mx-auto px-4 py-16 sm:py-20 bg-primary/5 rounded-3xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How the Investment Compares
              </h2>
              <p className="text-lg text-muted-foreground">
                Two very different models over 12 months
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary">
                <CardHeader className="text-center pb-4">
                  <Badge variant="default" className="w-fit mx-auto mb-2">Strategy Sprint</Badge>
                  <div className="text-4xl font-bold text-foreground">Custom-scoped</div>
                  <CardDescription>Priced to exactly what you need</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Complete strategic framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Campaign playbooks and templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Long-term execution roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>100% ownership of all deliverables</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">After handoff:</strong> the systems are yours, with optional partnership when you want it
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50">
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-2">Fractional CMO</Badge>
                  <div className="text-5xl font-bold text-foreground">$60K-180K</div>
                  <CardDescription>12-month total ($5K-15K/month)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Strategic guidance and advisory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Attendance in meetings and calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Oversight of marketing execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>Knowledge leaves when they do</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Minimum:</strong> 6-month commitment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              The right choice depends on what you actually need, not which costs less. If you genuinely need ongoing executive oversight, the fractional CMO may be worth the investment.
            </p>
          </div>
        </section>

        <Separator />

        {/* Timeline */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                8-Week Sprint Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                How long until you have a working strategic system?
              </p>
            </div>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 font-bold text-primary text-lg">Week 1-2</div>
                    <div>
                      <div className="font-semibold text-foreground">Strategic Foundation</div>
                      <p className="text-sm text-muted-foreground">Positioning, ICP, journey mapping complete</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 font-bold text-primary text-lg">Week 3-4</div>
                    <div>
                      <div className="font-semibold text-foreground">Channel Strategy</div>
                      <p className="text-sm text-muted-foreground">Messaging framework, campaign templates ready</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 font-bold text-primary text-lg">Week 5-6</div>
                    <div>
                      <div className="font-semibold text-foreground">Playbooks Finalized</div>
                      <p className="text-sm text-muted-foreground">Quick wins implemented, systems documented</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 font-bold text-primary text-lg">Week 7-8</div>
                    <div>
                      <div className="font-semibold text-foreground">Long-Term Plan Delivered</div>
                      <p className="text-sm text-muted-foreground">Full handoff, documentation complete, independence achieved</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-lg font-semibold text-primary">Complete independence from day 57</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fractional CMOs typically take 3-6 months before delivering similar strategic clarity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Honest Limitations */}
        <section id="when-fractional-fits" className="container mx-auto px-4 py-16 sm:py-20 bg-tertiary/50 rounded-3xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Honest Limitations
              </h2>
              <p className="text-lg text-muted-foreground">
                What we don't always tell you about each model
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Zap className="h-5 w-5 text-primary" />
                    Strategy Sprint Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">Project-based, not ongoing.</strong>{" "}
                      <span className="text-muted-foreground">If your market shifts mid-execution, you adjust the plan without real-time advisory.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">Execution falls on you.</strong>{" "}
                      <span className="text-muted-foreground">The model assumes you can follow through independently afterward.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">No daily decision-making.</strong>{" "}
                      <span className="text-muted-foreground">If you need someone embedded making daily calls, that's not the sprint model.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    Fractional CMO Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">They juggle 3-5 companies.</strong>{" "}
                      <span className="text-muted-foreground">You get scheduled time, not immediate access during crises.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">Consultant dependency is real.</strong>{" "}
                      <span className="text-muted-foreground">When they leave, strategic continuity often disappears.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="text-foreground">$60K-180K annually.</strong>{" "}
                      <span className="text-muted-foreground">Worth it for some; expensive learning for others.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border border-border max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground text-center italic">
                "Fractional CMOs work best when revenue exceeds $50M, you have 10+ people, and strategic complexity is high. Before that threshold, a sprint that builds transferable systems often delivers more ROI."
                <span className="block mt-2 text-xs not-italic">
                  — <Link href="https://porterwills.co/thoughts/how-to-choose-fractional-cmo-buyers-guide-2026" className="text-primary hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">2026 Fractional CMO Buyer's Guide<ExternalLink className="h-3 w-3" /></Link>
                </span>
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I hire a fractional CMO after completing a strategy sprint?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes—and this is actually an ideal progression for many companies. The sprint gives you
                  strategic architecture and a long-term plan. If you later need operational oversight
                  as you scale and build a marketing function, a fractional CMO can work from the foundation you own.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How can 8 weeks deliver what takes a fractional CMO 6 months?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Different models, different focus. Fractional CMOs spread 10-20 hours/month over 6+ months
                  providing advisory and attending meetings. Strategy sprints concentrate 100+ hours in 8 weeks
                  focused exclusively on building deliverables you own. It's the difference between advisory and building.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I execute independently without a marketing background?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If you can follow documented processes, yes. The sprint gives you playbooks that tell you exactly 
                  what to do, step by step. Many founders execute the initial plan themselves, then hand it to agencies 
                  or hires as they scale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What happens after the 8 weeks if we have questions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The sprint includes comprehensive documentation designed so your team can run it with confidence. 
                  The engagement includes 30 days of post-sprint support for clarification questions. 
                  After that, the systems are yours—and we stay available as a trusted partner whenever you want us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Why would I choose a fractional CMO over a strategy sprint?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Choose a fractional CMO if: (1) You have marketers who need operational leadership, 
                  (2) Vendor and agency management is the core problem, (3) You need someone in board
                  meetings representing marketing, or (4) You prefer ongoing advisory over project-based delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Separator />

        {/* Further Reading */}
        <section className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Further Reading
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="https://porterwills.co/thoughts/how-to-choose-fractional-cmo-buyers-guide-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      How to Choose a Fractional CMO
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      2026 Buyer's Guide — Porter Wills
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </Link>

              <Link
                href="https://www.louislynnco.com/blog/building-marketing-strategy-with-fractional-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Building Marketing Strategy with Fractional Resources
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      2025 — Louis Lynn Co.
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Separator />

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-primary text-primary-foreground rounded-3xl px-8 py-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary-foreground">
                Ready to Build Your Strategy?
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
                If strategic architecture, complete ownership, and a long-term plan sound right—let's talk about whether an 8-week sprint fits your situation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GetStartedButton
                size="lg"
                className="btn-hover-lift font-semibold bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 shadow-md shadow-accent-golden/20 hover:shadow-lg hover:shadow-accent-golden/30"
              />
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-tertiary bg-tertiary text-accent-deep-navy hover:bg-tertiary/90"
              >
                <Link href="/process">
                  View Sprint Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              <strong className="text-primary-foreground/90">Not sure which model fits?</strong> Read our guide on{" "}
              <Link href="/benefits-of-fractional-cmo" className="text-accent-golden hover:underline">
                benefits of fractional CMO
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
