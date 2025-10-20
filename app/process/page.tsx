// app/process/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Search, Users, Wrench, Megaphone, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { createServiceSchema, createWebPageSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title: "Growth Strategy Sprint Process | 8-Week Delivery",
  description:
    "Our 8-week project-based marketing consulting sprint: Strategic foundation, tactical framework, dashboard creation, and team handoff with complete documentation.",
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
      <main id="main" className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
      {/* Hero */}
      <header className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Our Process
        </h1>
        <div className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Most growth-stage companies have tactics but not the framework connecting them. Data lives in six places. Teams execute without knowing what's working. Budget decisions happen on intuition because no one can see the full picture.
          </p>
          <p>
            We fix that in eight weeks. Seven stages, each building on the last. When we're done, you own everything—the strategy, the systems, the playbooks. No ongoing dependency.
          </p>
        </div>
      </header>

      <Separator className="my-8 sm:my-10" />

      {/* The Momentum System */}
      <section className="space-y-6 sm:space-y-10">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">The Momentum System</h2>

        <div className="space-y-6 sm:space-y-10">
          {/* Stage 1: Aim */}
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 1: Aim</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Define what growth actually means for your business</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">01</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We start with the math. What's your revenue target? How long can an acquisition dollar take to pay back? At what cost does your model break?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have these numbers, we validate them. If they're fuzzy, we build them from your data. You get a one-page doc that defines what you're optimizing for—and what you're not chasing. This becomes the filter for every decision after.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 2: Assess */}
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
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
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
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
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
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
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Megaphone className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 5: Reach</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Figure out where buyers are and how to reach them profitably</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">05</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With everything else locked, we build the channel plan. Which two or three plays have the best shot at hitting your targets? Where should budget go—and where shouldn't it?
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you're running campaigns, we assess what's worth scaling and what's wasting money. If you're starting fresh, we prioritize the highest-probability bets. You get a roadmap with specific campaigns, realistic timelines, and clear success criteria. No testing ten things at once. Just focused plays with gates for when to scale and when to stop.
              </p>
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <div className="h-4 sm:h-6 w-0.5 mx-auto bg-border"></div>

          {/* Stage 6: Measure */}
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
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
          <Card className="group transition-all duration-300 hover:shadow-md sm:hover:-translate-y-1 sm:hover:shadow-lg">
            <CardHeader className="relative p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Settings className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <CardTitle className="text-xl sm:text-2xl font-semibold">Stage 7: Enable</CardTitle>
                  <p className="text-base sm:text-lg text-muted-foreground font-medium">Transfer everything so your team runs it independently</p>
                </div>
                <div className="hidden sm:block absolute top-6 right-8 text-6xl font-black text-primary/[0.07] select-none">07</div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We don't hand off docs and disappear. We document who owns what, set up the weekly rhythm your team will follow, and call out where you need outside help.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you're running lean, working with an agency, or building internal—we shape the handoff for your situation. You get the full operating system: how to run campaigns, who makes what decisions, when reviews happen. We don't complete handoff until you've run through it once and can operate without us. Then 30 days of support while you find your rhythm.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
    </>
  )
}