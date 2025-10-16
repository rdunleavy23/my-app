// app/process/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Search, Users, Wrench, Megaphone, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Growth Strategy Sprint Process | 8-Week Delivery",
  description:
    "Our 8-week growth strategy sprint: Week 1–2 strategic foundation, Week 3–4 tactical framework, Week 5–8 dashboard creation and team handoff with full docs.",
  alternates: { canonical: "/process" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/process",
    title: "Growth Strategy Sprint Process | 8-Week Delivery",
    description:
      "Our 8-week growth strategy sprint: Week 1–2 strategic foundation, Week 3–4 tactical framework, Week 5–8 dashboard creation and team handoff with full docs.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Strategy Sprint Process | 8-Week Delivery",
    description:
      "Our 8-week growth strategy sprint: Week 1–2 strategic foundation, Week 3–4 tactical framework, Week 5–8 dashboard creation and team handoff with full docs.",
  },
  robots: { index: true, follow: true },
}

export default function ProcessPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
      {/* Hero */}
      <header className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Our Process
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The Momentum System delivers CMO-level strategy through a focused 8-week
          sprint—without the six-figure salary or long-term dependencies.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule an Explore Call on Cal.com (opens in a new tab)"
            className="flex items-center gap-2"
          >
            Schedule Explore Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </header>

      <Separator className="my-8 sm:my-10" />

      {/* Explore Pattern Growth */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Explore Pattern Growth</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-sm sm:text-base">
            Before you commit to a sprint, schedule an Explore Call with our team. We'll
            learn about your business, what you're working toward, and whether we're the
            right fit for each other.
          </p>
          <p className="text-sm sm:text-base">
            If we determine it could work well, we'll match you with the team and begin your 8-week sprint. 
            If we're not aligned, we'll point you toward someone who is.
          </p>
          <p className="text-sm sm:text-base">
            We limit concurrent engagements to four active sprints at most. This ensures
            focused attention and strategy built specifically for your business—not a
            templated playbook pulled from a drawer.
          </p>
        </div>
      </section>

      <Separator className="my-8 sm:my-10" />

      {/* The Momentum System */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">The Momentum System</h2>

        <Accordion type="single" collapsible defaultValue="aim" className="w-full">
          <AccordionItem value="aim">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Target className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 1: Aim</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Clarify your big-picture goal and who you're building for. We analyze competitors and category dynamics to understand your market position.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Define your core value proposition</li>
                <li>• Map competitive landscape</li>
                <li>• Identify target customer segments</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="assess">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Search className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 2: Assess</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Gather facts: customers, strengths, partners, competitors, context. Map what's working vs. money pits; establish a true baseline.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Audit current marketing performance</li>
                <li>• Analyze customer data and feedback</li>
                <li>• Identify strengths and gaps</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="target">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 3: Target</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Define segments and positioning; align on who to pursue. Choices here shape every dollar that follows.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Refine target customer profiles</li>
                <li>• Develop positioning strategy</li>
                <li>• Prioritize market segments</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="build">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 4: Build</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Outline what you're creating, specs, pricing, and adjustments. Pressure-test ideas and model scenarios before committing.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Design marketing campaigns</li>
                <li>• Create content frameworks</li>
                <li>• Test pricing and positioning</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reach">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Megaphone className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 5: Reach</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Plan distribution and comms with capacity + budget reality in mind. Recommendations must be executable with your actual resources.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Choose marketing channels</li>
                <li>• Allocate budget effectively</li>
                <li>• Plan launch sequence</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="measure">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 6: Measure</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Define success metrics and tracking to learn quickly. Spot winners in weeks, not months; avoid vanity metrics.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Set up tracking systems</li>
                <li>• Define key performance indicators</li>
                <li>• Create reporting dashboards</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="enable">
            <AccordionTrigger className="text-left flex items-center gap-3">
              <Settings className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Stage 7: Enable</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground leading-relaxed pl-8">
              <p className="text-sm sm:text-base">
                Put execution systems in place: roles, budget, partners, timeline. Who does what by when — so the plan actually ships.
              </p>
              <ul className="text-sm sm:text-base space-y-1 ml-4">
                <li>• Assign team responsibilities</li>
                <li>• Create execution timeline</li>
                <li>• Establish success metrics</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8 sm:my-10" />

      {/* After Your Sprint */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">After Your Sprint</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-sm sm:text-base">
            We stay engaged: check-ins at Week 4 and Week 8 during execution, plus a
            90-day retrospective. We're available between check-ins by phone or email.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <footer className="mt-8 sm:mt-10 flex justify-center">
        <Button asChild size="lg" className="flex items-center gap-2">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Explore Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </footer>
    </main>
  )
}