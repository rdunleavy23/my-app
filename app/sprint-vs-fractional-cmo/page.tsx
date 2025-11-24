// app/sprint-vs-fractional-cmo/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X, Clock, DollarSign, TrendingUp, Package, Users, Zap } from "lucide-react"
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
  title: "Strategy Sprint vs Fractional CMO: Complete Comparison | Pattern Growth",
  description:
    "Detailed comparison of 8-week strategy sprints vs fractional CMO retainers. Compare cost, timeline, deliverables, and ownership to choose the right model for your company.",
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
    title: "Strategy Sprint vs Fractional CMO: Complete Comparison",
    description:
      "Compare 8-week strategy sprints vs fractional CMO retainers. See cost, timeline, deliverables, and ownership differences to make the right decision.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Sprint vs Fractional CMO: Complete Comparison",
    description:
      "Compare 8-week strategy sprints vs fractional CMO retainers. See cost, timeline, deliverables, and ownership differences.",
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
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: 'Strategy Sprint vs Fractional CMO' }]} />

              <div className="text-center space-y-6 mt-8">
                <Badge variant="outline" className="mb-4">
                  Complete Comparison Guide
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                  Strategy Sprint vs<br />Fractional CMO
                </h1>

                <div className="w-20 h-px bg-primary mx-auto" />

                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  You need strategic marketing help but can't justify a full-time CMO. Should you hire a fractional CMO on retainer or invest in a focused strategy sprint? Here's everything you need to decide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Decision Matrix */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quick Decision Matrix
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose based on what you actually need
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <Badge variant="default">Strategy Sprint</Badge>
                  </div>
                  <CardTitle className="text-2xl">Choose Strategy Sprint If:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Growth stalled and you don't know why</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Data scattered across multiple systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">You want to own the strategy, not rent it</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Need strategic clarity in weeks, not months</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Team can execute once they have direction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Want fixed cost and complete deliverables</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <Badge variant="outline">Fractional CMO</Badge>
                  </div>
                  <CardTitle className="text-2xl">Choose Fractional CMO If:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Strategy is clear, execution needs oversight</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Team needs day-to-day operational leadership</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Managing vendors and agencies is the problem</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Need someone in board meetings representing marketing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Budget supports 6-12 month commitment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Comfortable with ongoing consulting dependency</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Detailed Comparison Table */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Side-by-Side Comparison
              </h2>
              <p className="text-lg text-muted-foreground">
                Every factor that matters when making your decision
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Factor</th>
                    <th className="text-left p-4 font-semibold text-foreground bg-primary/5">Strategy Sprint</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Fractional CMO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Timeline</td>
                    <td className="p-4 bg-primary/5"><strong>8 weeks total</strong></td>
                    <td className="p-4">6-12+ months minimum</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Total Investment</td>
                    <td className="p-4 bg-primary/5"><strong>$9,500 fixed</strong></td>
                    <td className="p-4">$30K-180K+ (6mo-12mo)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Monthly Cost</td>
                    <td className="p-4 bg-primary/5">$0 (project-based)</td>
                    <td className="p-4">$5K-15K/month</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Commitment Length</td>
                    <td className="p-4 bg-primary/5"><strong>8 weeks only</strong></td>
                    <td className="p-4">6-12 month minimum</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">What You Pay For</td>
                    <td className="p-4 bg-primary/5">Complete deliverables</td>
                    <td className="p-4">Ongoing presence & guidance</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Primary Deliverable</td>
                    <td className="p-4 bg-primary/5"><strong>Strategic architecture you own</strong></td>
                    <td className="p-4">Advisory & oversight</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">What You Own</td>
                    <td className="p-4 bg-primary/5">
                      <strong>Everything:</strong> strategy docs, measurement system (yours forever), playbooks, systems
                    </td>
                    <td className="p-4">Strategic direction (knowledge leaves with them)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Ongoing Dependency</td>
                    <td className="p-4 bg-primary/5"><strong>Zero</strong> (designed for independence)</td>
                    <td className="p-4">High (they are your strategy)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Measurement System</td>
                    <td className="p-4 bg-primary/5"><strong>Custom measurement system, live week 6</strong>, yours forever</td>
                    <td className="p-4">Maybe built eventually, leaves with consultant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Start Time</td>
                    <td className="p-4 bg-primary/5">Immediate start available</td>
                    <td className="p-4">2-4 weeks to source and onboard</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">When It Ends</td>
                    <td className="p-4 bg-primary/5"><strong>You have the complete system</strong></td>
                    <td className="p-4">Back to square one (knowledge walks out)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Best For</td>
                    <td className="p-4 bg-primary/5">
                      <strong>Strategic architecture</strong> + measurement + independence
                    </td>
                    <td className="p-4">Day-to-day leadership + vendor management</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Risk Level</td>
                    <td className="p-4 bg-primary/5"><strong>Contained</strong> (8 weeks, fixed cost)</td>
                    <td className="p-4">Higher (long commitment, switching costs)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium">Contract</td>
                    <td className="p-4 bg-primary/5">Single project agreement</td>
                    <td className="p-4">6-12 month retainer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Separator />

        {/* Cost Breakdown */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Real Cost Comparison
              </h2>
              <p className="text-lg text-muted-foreground">
                Total cost of ownership over 12 months
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    Strategy Sprint
                  </CardTitle>
                  <CardDescription>8-week engagement, complete ownership</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-foreground mb-2">$9,500</div>
                  <div className="text-sm text-muted-foreground mb-6">One-time investment</div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">What You Get:</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Complete strategic framework</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Custom measurement system (yours forever)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Campaign playbooks and templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Team training and documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>100% ownership of all deliverables</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <div className="font-semibold mb-2">Months 3-12:</div>
                      <div className="text-sm text-muted-foreground">
                        $0/month — Your team runs it independently
                      </div>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="font-semibold text-sm mb-1">12-Month Total:</div>
                      <div className="text-2xl font-bold text-primary">$9,500</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-muted-foreground" />
                    Fractional CMO
                  </CardTitle>
                  <CardDescription>6-12 month retainer engagement</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-foreground mb-2">$5K-15K</div>
                  <div className="text-sm text-muted-foreground mb-6">Per month</div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">What You Get:</div>
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
                          <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span>Vendor and agency management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span>Knowledge leaves when they do</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <div className="font-semibold mb-2">Minimum Commitment:</div>
                      <div className="text-sm text-muted-foreground">
                        6 months × $10K (average) = $60K minimum
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold text-sm mb-1">12-Month Total:</div>
                      <div className="text-2xl font-bold text-foreground">$60K-180K</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-2">
                      Cost Savings Example
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A company choosing a 6-month fractional CMO engagement at $10K/month pays <strong>$60,000</strong>.
                      The same company choosing a strategy sprint pays <strong>$9,500</strong> and owns all deliverables
                      forever—a savings of <strong>$50,500</strong> while gaining complete independence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Timeline Comparison */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Timeline to Value
              </h2>
              <p className="text-lg text-muted-foreground">
                How long until you have a working strategic system?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="default">Strategy Sprint</Badge>
                  </div>
                  <CardTitle>8-Week Sprint Timeline</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-primary">Week 1-2</div>
                      <div className="text-sm">Strategic foundation complete (positioning, ICP, journey mapping)</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-primary">Week 3-4</div>
                      <div className="text-sm">Channel strategy, messaging framework, campaign templates ready</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-primary">Week 5-6</div>
                      <div className="text-sm">Measurement system live, connecting all marketing data</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-primary">Week 7-8</div>
                      <div className="text-sm">Team trained, playbooks delivered, complete handoff</div>
                    </div>
                    <Separator />
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="font-semibold text-sm text-primary mb-1">Time to Full Value:</div>
                      <div className="text-2xl font-bold">8 weeks</div>
                      <div className="text-sm text-muted-foreground mt-1">Complete independence from day 57</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <Badge variant="outline">Fractional CMO</Badge>
                  </div>
                  <CardTitle>Fractional CMO Timeline</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-muted-foreground">Month 1-2</div>
                      <div className="text-sm">Discovery, learning company, initial recommendations</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-muted-foreground">Month 3-4</div>
                      <div className="text-sm">Strategic planning, attending meetings, providing guidance</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-muted-foreground">Month 5-6</div>
                      <div className="text-sm">Implementation oversight, maybe measurement system starts</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-20 font-semibold text-sm text-muted-foreground">Month 7+</div>
                      <div className="text-sm">Ongoing advisory, monthly retainer continues</div>
                    </div>
                    <Separator />
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-semibold text-sm text-foreground mb-1">Time to Full Value:</div>
                      <div className="text-2xl font-bold">6-12+ months</div>
                      <div className="text-sm text-muted-foreground mt-1">Lose everything when contract ends</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Common Scenarios */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Scenarios
              </h2>
              <p className="text-lg text-muted-foreground">
                Which model fits your situation?
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Scenario: "Growth stalled at $2M and we don't know why"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Badge variant="default" className="mb-2">Best Fit: Strategy Sprint</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why:</strong> You need diagnostic work and strategic architecture, not ongoing
                        management. The sprint builds a measurement system to identify bottlenecks, clarifies
                        positioning, and creates executable playbooks. Your team can execute once they have direction.
                      </p>
                      <p className="text-sm font-semibold text-primary mt-2">
                        Result: Strategic clarity in 8 weeks, complete ownership forever
                      </p>
                    </div>
                    <div className="space-y-2 opacity-60">
                      <Badge variant="outline" className="mb-2">Fractional CMO</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why not:</strong> You'll pay for 6 months of advisory before getting the same
                        diagnostic insights. The strategic architecture might never be fully documented or
                        transferred to your team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Scenario: "Our team is executing but we lack strategic direction"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Badge variant="default" className="mb-2">Best Fit: Strategy Sprint</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why:</strong> Your team doesn't need management—they need frameworks, playbooks,
                        and measurement systems. The sprint delivers the strategic foundation that empowers them
                        to execute confidently and independently.
                      </p>
                      <p className="text-sm font-semibold text-primary mt-2">
                        Result: Team becomes strategically autonomous in 8 weeks
                      </p>
                    </div>
                    <div className="space-y-2 opacity-60">
                      <Badge variant="outline" className="mb-2">Fractional CMO</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why not:</strong> Creates dependency on consultant for strategic decisions.
                        Your team learns to wait for direction rather than building capability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    Scenario: "Our team needs operational leadership and vendor management"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 opacity-60">
                      <Badge variant="outline" className="mb-2">Strategy Sprint</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why not:</strong> Sprint delivers strategic architecture, not operational management.
                        If your team needs someone making daily decisions and managing vendors, that's not the sprint model.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge className="mb-2 bg-foreground text-background">Best Fit: Fractional CMO</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why:</strong> You need ongoing leadership, not just strategic systems. A fractional
                        CMO provides the operational oversight, vendor coordination, and team management you're missing.
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-2">
                        Result: Ongoing operational leadership for 6-12 months
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Scenario: "Board wants to see strategy and metrics in Q1"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Badge variant="default" className="mb-2">Best Fit: Strategy Sprint</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why:</strong> 8 weeks gets you complete strategic documentation, live measurement system,
                        and measurement framework ready for board presentation. Clear deliverables on a fixed timeline.
                      </p>
                      <p className="text-sm font-semibold text-primary mt-2">
                        Result: Board-ready strategy and metrics in 8 weeks
                      </p>
                    </div>
                    <div className="space-y-2 opacity-60">
                      <Badge variant="outline" className="mb-2">Fractional CMO</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>Why not:</strong> Timeline uncertainty. Most fractional CMOs take 3-6 months to
                        deliver complete strategic documentation and measurement systems. May miss your Q1 deadline.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* What You Actually Own */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You Actually Own
              </h2>
              <p className="text-lg text-muted-foreground">
                The most important difference: ownership and independence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    After Strategy Sprint
                  </CardTitle>
                  <CardDescription>Complete ownership of all deliverables</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Strategic Framework Documents</div>
                        <div className="text-sm text-muted-foreground">
                          Positioning, ICP, competitive analysis, journey maps
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Custom Measurement System</div>
                        <div className="text-sm text-muted-foreground">
                          Live metrics, connects all your marketing data
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Campaign Playbooks</div>
                        <div className="text-sm text-muted-foreground">
                          Step-by-step templates your team or agencies can execute
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Measurement Models</div>
                        <div className="text-sm text-muted-foreground">
                          Attribution framework, KPI definitions, reporting templates
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Process Documentation</div>
                        <div className="text-sm text-muted-foreground">
                          How to run campaigns, optimize channels, report to leadership
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Team Training</div>
                        <div className="text-sm text-muted-foreground">
                          Your team knows how to use everything independently
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Result: Complete strategic independence. No ongoing fees. No consultant dependency.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    After Fractional CMO Engagement
                  </CardTitle>
                  <CardDescription>What remains when the contract ends</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Strategic Direction</div>
                        <div className="text-sm text-muted-foreground">
                          General guidance on positioning and priorities
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Some Documentation</div>
                        <div className="text-sm text-muted-foreground">
                          Varies by consultant—not always comprehensive or transferable
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Strategic Knowledge Walks Out</div>
                        <div className="text-sm text-muted-foreground">
                          The CMO's insights and mental models aren't transferred
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">No Systematic Playbooks</div>
                        <div className="text-sm text-muted-foreground">
                          Advisory model doesn't focus on creating executable templates
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Measurement System Access Ends</div>
                        <div className="text-sm text-muted-foreground">
                          If built, measurement system often belongs to consultant or expires
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">Team Still Dependent</div>
                        <div className="text-sm text-muted-foreground">
                          Haven't built independent strategic decision-making capability
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-semibold text-foreground">
                      Result: Back to square one. Often need to hire another consultant or start over.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions when comparing models
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I hire a fractional CMO after completing a strategy sprint?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes—and this is actually an ideal progression for many companies. The sprint gives you
                  strategic architecture and measurement systems. If you later need operational oversight
                  as you scale, a fractional CMO can work from the foundation you own rather than starting
                  from scratch. You'll have clearer requirements and better evaluate candidates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Won't a fractional CMO provide more value over 6-12 months?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depends on what "value" means for you. If you need ongoing operational leadership and vendor
                  management, yes. But if you need strategic architecture and independence, the sprint delivers
                  more concentrated value in less time at lower cost. Most growth-stage companies need the
                  architecture first—leadership can come later if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if we need both strategy and ongoing execution support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Consider the sprint first to build strategic foundation, then hire a marketing agency or
                  contractor to execute the playbooks. You'll have clear direction to give them, reducing
                  wasted spend. This typically costs less than a fractional CMO while delivering both strategy
                  and execution. Alternatively, fractional marketing services (not fractional CMO) provide
                  both strategy and execution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How can 8 weeks deliver what takes a fractional CMO 6 months?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Different models, different focus. Fractional CMOs spread 10-20 hours/month over 6+ months
                  providing advisory and attending meetings. Strategy sprints concentrate 100+ hours in 8 weeks
                  focused exclusively on building deliverables you own. No meetings for the sake of presence—just
                  dedicated work creating strategic architecture. It's the difference between advisory and building.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What happens after the 8 weeks if we have questions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The sprint includes comprehensive documentation designed for independent execution. Most questions
                  are answered by the playbooks and process docs. Many sprint engagements include 30 days of post-sprint
                  support for clarification questions. After that, you run it independently—which is the point. If you
                  need ongoing advisory later, you can always hire a consultant from a position of strategic strength.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is the strategy sprint model too fast for complex B2B companies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No—the sprint model was designed for B2B complexity. Eight weeks is sufficient to map buyer journeys,
                  build account-based frameworks, create multi-touch attribution, and document sales-marketing handoffs.
                  The intensity and focus actually work better for complex B2B than the diluted attention of a
                  part-time fractional CMO splitting time across multiple clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can our team really execute independently after just 8 weeks?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, if they have basic execution capability (which most growth-stage teams do). The sprint doesn't
                  teach them how to run Google Ads or write content—it gives them strategic frameworks, measurement
                  systems, and campaign playbooks so they know <em>what</em> to do and <em>why</em>. Strong executors
                  with clear direction outperform mediocre executors with ongoing advisory.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Why would I choose a fractional CMO over a strategy sprint?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Choose a fractional CMO if: (1) Your team needs operational leadership and can't make decisions
                  independently, (2) Vendor and agency management is the core problem, (3) You need someone in board
                  meetings representing marketing, (4) Strategy is clear but execution needs senior oversight, or
                  (5) You prefer ongoing advisory relationships over project-based delivery. These are all valid
                  reasons—just different needs than what the sprint solves.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Separator />

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Build Your Strategy?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If strategic architecture, complete ownership, and rapid delivery sound right for your
                company, let's talk about whether an 8-week sprint fits your situation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GetStartedButton size="lg" className="btn-hover-lift" />
              <Button variant="outline" size="lg" asChild>
                <Link href="/process">
                  View Sprint Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 text-sm text-muted-foreground">
              <p>
                <strong>Not sure which model fits?</strong> Read our detailed guide on{" "}
                <Link href="/blog/when-to-hire-fractional-cmo" className="text-primary hover:underline">
                  when to hire a fractional CMO vs strategy consultant
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
