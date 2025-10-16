// app/process/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
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
    <main id="main" className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero */}
      <header className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Process</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Momentum System delivers CMO-level strategy through a focused 8-week
          sprint—without the six-figure salary or long-term dependencies.
        </p>
        <Button asChild size="lg">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule an Explore Call on Cal.com (opens in a new tab)"
          >
            Schedule Explore Call
          </Link>
        </Button>
      </header>

      <Separator className="my-10" />

      {/* Explore Pattern Growth */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Explore Pattern Growth</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Before you commit to a sprint, schedule an Explore Call with our team. We'll
            learn about your business, what you're working toward, and whether we're the
            right fit for each other. If we determine it could work well, we'll match you
            with the team and begin your 8-week sprint. If we're not aligned, we'll point
            you toward someone who is.
          </p>
          <p>
            We limit concurrent engagements to four active sprints at most. This ensures
            focused attention and strategy built specifically for your business—not a
            templated playbook pulled from a drawer.
          </p>
          <p>
            Once you sign on, you'll move through the Momentum System with your Pattern
            Growth team.
          </p>
        </div>
      </section>

      <Separator className="my-10" />

      {/* The Momentum System */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">The Momentum System</h2>

        <Accordion type="single" collapsible defaultValue="aim" className="w-full">
          <AccordionItem value="aim">
            <AccordionTrigger className="text-left">Stage 1: Aim</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Clarify your big-picture goal and who you’re building for…</p>
              <p>We analyze competitors and category dynamics…</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="assess">
            <AccordionTrigger className="text-left">Stage 2: Assess</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Gather facts: customers, strengths, partners, competitors, context…</p>
              <p>Map what’s working vs. money pits; establish a true baseline.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="target">
            <AccordionTrigger className="text-left">Stage 3: Target</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Define segments and positioning; align on who to pursue.</p>
              <p>Choices here shape every dollar that follows.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="build">
            <AccordionTrigger className="text-left">Stage 4: Build</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Outline what you’re creating, specs, pricing, and adjustments.</p>
              <p>Pressure-test ideas and model scenarios before committing.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reach">
            <AccordionTrigger className="text-left">Stage 5: Reach</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Plan distribution and comms with capacity + budget reality in mind.</p>
              <p>Recommendations must be executable with your actual resources.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="measure">
            <AccordionTrigger className="text-left">Stage 6: Measure</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Define success metrics and tracking to learn quickly.</p>
              <p>Spot winners in weeks, not months; avoid vanity metrics.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="enable">
            <AccordionTrigger className="text-left">Stage 7: Enable</AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Put execution systems in place: roles, budget, partners, timeline.</p>
              <p>Who does what by when — so the plan actually ships.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-10" />

      {/* After Your Sprint */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">After Your Sprint</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            We stay engaged: check-ins at Week 4 and Week 8 during execution, plus a
            90-day retrospective. We’re available between check-ins by phone or email.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <footer className="mt-10 flex justify-center">
        <Button asChild size="lg">
          <Link
            href="https://cal.com/pattern-growth/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Explore Call
          </Link>
        </Button>
      </footer>
    </main>
  )
}
