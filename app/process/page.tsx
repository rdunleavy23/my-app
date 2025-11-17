// app/process/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Search, Users, Wrench, Megaphone, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TableOfContents } from "@/components/ui/table-of-contents"
import { createServiceSchema, createWebPageSchema, createFAQSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title: "Growth Strategy Sprint Process | 8-Week Delivery",
  description:
    "Our 8-week project-based marketing consulting sprint: Strategic foundation, tactical framework, dashboard creation, and team handoff with complete documentation.",
  alternates: { canonical: "https://www.patterngrowth.com/process" },
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
  const serviceSchema = createServiceSchema({
    name: "Growth Strategy Sprint",
    description: "8-week focused engagement delivering growth strategy, marketing infrastructure, and team training with complete ownership transfer",
    url: "https://www.patterngrowth.com/process",
    provider: "Pattern Growth"
  });

  const webPageSchema = createWebPageSchema(
    "Growth Strategy Sprint Process | 8-Week Delivery",
    "Our 8-week growth strategy sprint: Week 1–2 strategic foundation, Week 3–4 tactical framework, Week 5–8 dashboard creation and team handoff with full docs.",
    "https://www.patterngrowth.com/process"
  );

  const faqSchema = createFAQSchema([
    {
      "@type": "Question",
      name: "Is this the same as a fractional CMO retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Retainers keep the executive in your org indefinitely. The sprint installs the strategy and systems your team runs independently."
      }
    },
    {
      "@type": "Question",
      name: "What happens after week eight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver all assets, conduct enablement sessions, and remain on standby for 30 days to answer implementation questions."
      }
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="main" className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
      {/* Hero */}
      <header className="text-center space-y-4 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground">
          Last refreshed: October 2025
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Growth Strategy Consulting Process (8-Week Sprint)
        </h1>
        <div className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Most growth-stage companies have tactics but no framework connecting them. Data lives in six different places. Teams execute without knowing what's working. Budget decisions happen on gut feeling because nobody can see the full picture.
          </p>
          <p>
            We fix that in eight weeks. Seven stages, each building on the last. When we're done, you own everything—the strategy, the systems, the playbooks. No ongoing dependency.
          </p>
        </div>
      </header>

      <Separator className="my-8 sm:my-10" />

      <TableOfContents
        items={[
          { href: '#overview', label: 'Why an 8-week growth strategy sprint' },
          { href: '#timeline', label: 'Timeline & outputs' },
          { href: '#momentum-system', label: 'Stage-by-stage playbook' },
          { href: '#handoff', label: 'Handoff and enablement' },
          { href: '#faq', label: 'Frequently asked questions' }
        ]}
        className="mb-12 text-left"
      />

      <section id="overview" className="space-y-4 sm:space-y-6 mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
          Why companies choose our growth strategy consulting process
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          We install the strategic foundation and measurement systems your team needs—without binding retainers. Every deliverable is designed for independence: revenue architecture, dashboards, campaign playbooks, and enablement assets you own.
        </p>
      </section>

      <section id="timeline" className="mb-14 text-left">
        <div className="rounded-lg border border-border bg-background p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">8-Week Timeline at a Glance</h2>
          <p className="text-muted-foreground mb-6">
            Each stage ends with tangible deliverables—strategy documents, models, and operational tools—that roll into the next sprint activity.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-primary/5 p-6">
              <p className="text-sm font-semibold uppercase text-primary mb-2">Weeks 1-2</p>
              <p className="text-base font-medium text-foreground">Strategic foundation & revenue model</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6">
              <p className="text-sm font-semibold uppercase text-primary mb-2">Weeks 3-4</p>
              <p className="text-base font-medium text-foreground">Positioning, offer packaging, channel strategy</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6">
              <p className="text-sm font-semibold uppercase text-primary mb-2">Weeks 5-6</p>
              <p className="text-base font-medium text-foreground">Measurement infrastructure & dashboard build</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6">
              <p className="text-sm font-semibold uppercase text-primary mb-2">Weeks 7-8</p>
              <p className="text-base font-medium text-foreground">Enablement, playbooks, leadership handoff</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Momentum System */}
      <section className="space-y-6 sm:space-y-10" id="momentum-system">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">The Momentum System</h2>

        <div className="space-y-6 sm:space-y-10">
          {/* Stage 1: Aim */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 1: Aim</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Define what growth actually means</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">01</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We start with the math. What's your revenue target? How long can an acquisition dollar take to pay back? At what cost does your model break?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have these numbers, we validate them. If they're fuzzy, we build them from your data. You get a one-page doc that defines what you're optimizing for—and what you're ignoring. This becomes the filter for every decision after.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 2: Assess */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 2: Assess</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Map the reality you're working with</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">02</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Before we recommend anything, we map the landscape. Who are customers choosing between—you, a competitor, or doing nothing? Where's your pricing power real versus hopeful? What category forces help you and which ones work against you?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                You'll see what supports your plan and what creates drag. We rank risks by what could actually kill growth—not every possible worry. If you've done research, we build on it. If not, we fill the gaps fast.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 3: Target */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 3: Target</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Clarify who you serve and why they'd choose you</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">03</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Now we can define focus. Which segment can you actually win? What specific problem do you solve for them? Why would they pick you over what they're using today?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If your positioning exists, we test if it holds. If it doesn't, we rebuild it. You'll get a framework that explicitly says who you're for—and who you're not. You can't allocate resources when you're trying to be everything. Saying no is strategic. This forces clarity.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 4: Build */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 4: Build</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Turn positioning into an offer that converts</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">04</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Positioning becomes an offer. How should your product be packaged? Does pricing reflect what buyers actually value? What objections kill deals?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If your offer works, we document why. If it creates friction, we fix how it's structured and presented. You get messaging guidelines and a list of what to stop saying. This is where vague descriptions become language that converts.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 5: Reach */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Megaphone className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 5: Reach</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Find where buyers are and how to reach them profitably</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">05</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With everything else locked, we build the channel plan. Which two or three plays have the best shot at hitting your targets? Where should budget go—and where shouldn't it?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you're running campaigns, we assess what's worth scaling and what's wasting money. If you're starting fresh, we prioritize the highest-probability bets. You get a roadmap with specific campaigns, realistic timelines, and clear success criteria. No testing ten things at once. Just focused plays with clear gates for when to scale and when to kill it.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 6: Measure */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 6: Measure</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Connect the data so you can see what's working</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">06</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This is where we solve the infrastructure problem. Your data is scattered, making it impossible to see the full picture. We connect your tools—whatever you're using—into one view that shows what actually matters.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                You get a system that tracks the five numbers you need to check weekly. We set clear gates for every campaign: this number means keep going, this number means stop. Decisions get made on data, not opinions.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 7: Enable */}
          <Card className="group card-hover-lift">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Settings className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 7: Enable</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Transfer everything so your team runs this independently</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">07</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We don't hand off docs and disappear. We document who owns what, set up the weekly rhythm your team will follow, and call out where you need outside help.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you're running lean, working with an agency, or building internal—we shape the handoff for your situation. You get the full operating system: how to run campaigns, who makes what decisions, when reviews happen. We don't finish handoff until you've run through it once and can operate without us. Then 30 days of support while you find your rhythm.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="handoff" className="mt-16 space-y-4 text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
          What you leave with after 8 weeks
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Revenue architecture and prioritized growth roadmap</li>
          <li>• Operational dashboards and measurement framework</li>
          <li>• Campaign playbooks and channel briefs ready for execution</li>
          <li>• Team enablement sessions and documentation</li>
          <li>• Executive summary with next-quarter recommendations</li>
        </ul>
      </section>

      <section id="faq" className="mt-16 text-left">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Growth Strategy Sprint FAQs</h2>
        <div className="space-y-4 text-muted-foreground">
          <details className="rounded border border-border p-4">
            <summary className="text-base font-medium text-foreground">Is this the same as a fractional CMO retainer?</summary>
            <p className="mt-2 text-sm">
              No. Retainers keep the executive in your org indefinitely. The sprint installs the strategy and systems your team runs independently.
            </p>
          </details>
          <details className="rounded border border-border p-4">
            <summary className="text-base font-medium text-foreground">What happens after week eight?</summary>
            <p className="mt-2 text-sm">
              We deliver all assets, conduct enablement sessions, and remain on standby for 30 days to answer implementation questions.
            </p>
          </details>
        </div>
      </section>

      <Separator className="my-8 sm:my-10" />

      {/* CTA Section */}
      <section className="text-center space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's talk about whether an 8-week sprint makes sense for your team. No pitch, no pressure—just clarity on what you need.
          </p>
        </div>
        
        <GetStartedButton className="btn-hover-lift" />
        
        <p className="text-sm text-muted-foreground">
          30-minute call · No pitch, no pressure
        </p>
      </section>

    </main>
    </>
  )
}