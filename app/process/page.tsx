import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

export default function ProcessPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero */}
      <header className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Our Process
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The Momentum System delivers CMO-level strategy through a focused 8-week sprint—without the six-figure salary or long-term dependencies.
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
        <h2 className="text-2xl font-semibold tracking-tight">
          Explore Pattern Growth
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Before you commit to a sprint, schedule an Explore Call with our team. We'll learn about your business, what you're working toward, and whether we're the right fit for each other. If we determine it could work well, we'll match you with the team and begin your 8-week sprint. If we're not aligned, we'll point you toward someone who is.
          </p>
          <p>
            We limit concurrent engagements to four active sprints at most. This constraint ensures focused attention and strategy built specifically for your business—not a templated playbook pulled from a drawer.
          </p>
          <p>
            Once you sign on, you'll move through the Momentum System with your Pattern Growth team.
          </p>
        </div>
      </section>

      <Separator className="my-10" />

      {/* The Momentum System (Accordion) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          The Momentum System
        </h2>

        <Accordion type="single" collapsible defaultValue="aim" className="w-full">
          <AccordionItem value="aim">
            <AccordionTrigger className="text-left">
              Stage 1: Aim
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your sprint begins by clarifying your big-picture goal and identifying who you're building for. We establish what success looks like for the market and which customers matter most.
              </p>
              <p>
                Behind the scenes, we analyze your competitive landscape and category dynamics. Over the following weeks, we'll move through each stage to construct your strategy. At each stage, we identify blockers and opportunities—so you don't waste budget on tactics that can't work in your situation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="assess">
            <AccordionTrigger className="text-left">
              Stage 2: Assess
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We gather facts about your current position: customers, company strengths, partners, competitors, and market context.
              </p>
              <p>
                This establishes visibility into where real growth levers exist. We map what's actually working, what's been a money pit, and where the gaps are. Most teams optimize tactics while the strategy stays broken—we fix that by establishing your actual baseline first.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="target">
            <AccordionTrigger className="text-left">
              Stage 3: Target
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With your situation and goals understood, we define specific audience segments and determine how to reach them. We clarify who to pursue and how to position against competitors.
              </p>
              <p>
                We formulate recommendations grounded in the data gathered. The segments we recommend and positioning strategy we outline require your understanding and agreement—this choice shapes every dollar that follows.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="build">
            <AccordionTrigger className="text-left">
              Stage 4: Build
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With your target defined, we outline what you're creating and its specifications. We work with you to establish pricing and recommend product or service adjustments that strengthen your market position.
              </p>
              <p>
                This stage includes pressure-testing ideas and challenging assumptions. We model scenarios to show expected impact across different pricing strategies before you commit.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reach">
            <AccordionTrigger className="text-left">
              Stage 5: Reach
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Now we plan how to deliver and promote your offering: distribution channels and communication with target customers.
              </p>
              <p>
                We've found that channel recommendations fail when they ignore team capacity and budget reality. Our plans account for both. What we recommend must be executable with your actual resources and team—with clear expectations about what each channel can deliver and what it will cost in time and money.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="measure">
            <AccordionTrigger className="text-left">
              Stage 6: Measure
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The fastest way to waste a marketing budget is running campaigns you can't track. We define success metrics and tracking infrastructure: how to monitor progress and learn from results.
              </p>
              <p>
                The measurement framework shows exactly what matters and why. Our goal is detection—spotting what's working within weeks, not months, so you can amplify winners and eliminate what's bleeding budget. No vanity metrics, just numbers that indicate actual growth.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="enable">
            <AccordionTrigger className="text-left">
              Stage 7: Enable
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Strong strategies fail without execution systems. We ensure everything necessary is in place: resources, team roles, budget, and any partners required. Any plan must be funded and someone must own it.
              </p>
              <p>
                The implementation roadmap shows who does what by when. This complete view enables us to deliver CMO-level strategy without the six-figure salary and equity.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-10" />

      {/* After Your Sprint */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          After Your Sprint
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Following implementation, we stay engaged. Check-ins occur at Week 4 and Week 8 during execution, with a final retrospective at the 90-day mark to review actual outcomes. Between scheduled check-ins, we remain available by phone or email. We're invested in your results, not just delivering documents.
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
            aria-label="Schedule an Explore Call on Cal.com (opens in a new tab)"
          >
            Schedule Explore Call
          </Link>
        </Button>
      </footer>
    </main>
  )
}