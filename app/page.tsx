import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pattern Growth — Your Growth Vision Needs a Dashboard",
  description:
    "For $1–5MM companies: expert marketing strategy that actually gets implemented—without the $200K CMO commitment.",
};

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="mb-4 flex justify-center">
          <Badge className="text-sm">Growth Strategy Sprints</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Growth Vision Needs a Dashboard, Not Just a Strategy Doc
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-700">
          For $1–5MM companies who need expert marketing strategy that actually gets implemented—without the $200K CMO commitment.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base text-gray-600">
          You have the vision. Your team has the hustle. What’s missing? The bridge between executive goals and execution. We translate vision into measurable strategy, then build dashboards so you can see—and scale—what’s working.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="https://cal.com/pattern-growth" target="_blank" rel="noreferrer">
              Schedule Your Growth Planning Call
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#process">How the Sprint Works</Link>
          </Button>
        </div>
      </section>

      {/* THE PATTERN SPRINT */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">How We Turn Vision Into Visible Growth</h2>
        <p className="mt-1 text-sm text-gray-500">4–8 weeks from scattered metrics to strategic clarity.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Week 1–2: Strategic Alignment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>Extract vision and translate into measurable objectives.</p>
              <p>Competitive analysis to position for advantage.</p>
              <p>Customer journey map to find highest-impact opportunities.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 3–4: Tactical Framework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>Channel priority roadmap with KPIs tied to outcomes.</p>
              <p>Campaign templates and process docs your team can run.</p>
              <p>Decision frameworks to move fast without chaos.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week 5–8: Dashboard & Handoff</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>Unify data into one executive-friendly dashboard.</p>
              <p>Team training for optimization and ongoing execution.</p>
              <p>Complete growth playbook handoff.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="py-5 text-sm text-gray-800">
            <strong>What You Own:</strong> Strategy doc, tactical playbooks, a live dashboard with one-year access, and a team equipped to execute—without ongoing consulting fees.
          </CardContent>
        </Card>
      </section>

      {/* WHEN SPRINTS WORK BEST */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Ideal Timing for Growth-Stage Leadership</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>$1–5MM Revenue Companies</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Past startup chaos, not ready for C-suite overhead. You need strategy that translates into team execution—fast.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post-Funding Growth Pressure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Investors expect measurable progress. The board wants visibility beyond vanity metrics.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Scattered Across Platforms</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              CRM, ads, analytics, email—conflicting stories. We create one source of truth that informs decisions.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHY SPRINTS BEAT OTHER OPTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">The Right Choice for Right-Sized Strategy</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>When You Don’t Need a Full CMO</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Strategic expertise without daily management. You keep ownership—no dependency.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>When Agencies Miss the Mark</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              You need C-suite strategy, not just campaigns. You own the dashboard and the training.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>When Internal Promotion Isn’t Enough</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Proven frameworks and executive-level thinking—without learning on your growth budget.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* INVESTMENT & GUARANTEE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Investment & Delivery Guarantee</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sprint Investment</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p><strong>$25K–50K</strong> based on data complexity and scope</p>
              <p>50/50 payment structure</p>
              <p>Includes one year of dashboard access</p>
              <p>All strategy docs and frameworks included</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delivery Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p><strong>Start within 1 week</strong> of agreement</p>
              <p><strong>Dashboard live within 6 weeks</strong> or we adjust the sprint</p>
              <p>Complete team handoff with documentation</p>
              <p>30-day post-sprint support for implementation questions</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Common Questions</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="q1">
            <AccordionTrigger>How do you understand our specific market quickly?</AccordionTrigger>
            <AccordionContent>
              We start with deep-dive discovery into customers, competitors, and constraints. Our frameworks extract strategic insights efficiently—no generic templates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What if our data is messy or incomplete?</AccordionTrigger>
            <AccordionContent>
              We specialize in connecting fragmented data sources and building clean, executive-friendly dashboards across complex stacks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Who actually works on our account?</AccordionTrigger>
            <AccordionContent>
              Two senior growth strategists with limited concurrent engagements. You work with us directly—no juniors on strategy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>What happens after the 6 weeks?</AccordionTrigger>
            <AccordionContent>
              You own everything: strategy docs, dashboard access, trained team, optimization playbooks—built for independent execution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>How do we know this will actually get implemented?</AccordionTrigger>
            <AccordionContent>
              We build working systems—live dashboards, trained teams, executable templates. Implementation is part of the deliverable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* DELIVERABLES */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What You Walk Away With</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Foundation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p>Growth strategy document tailored to your market</p>
              <p>Competitive positioning framework</p>
              <p>Customer journey optimization roadmap</p>
              <p>Messaging guidelines for consistent execution</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Implementation Tools</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p>Channel priority framework with resource allocation</p>
              <p>Campaign briefs and creative templates</p>
              <p>KPI tracking system tied to business outcomes</p>
              <p>Process docs for repeatable execution</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dashboard & Training</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p>Custom dashboard across all marketing data sources</p>
              <p>Executive reporting for board and investor updates</p>
              <p>Team training on optimization and interpretation</p>
              <p>One-year dashboard access and updates</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to See Your Growth Strategy in Action?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          We take on 2–3 sprints per quarter to ensure quality execution. Next sprint can start within one week.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="https://cal.com/pattern-growth" target="_blank" rel="noreferrer">
              Schedule Your Growth Planning Call This Week
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#process">Review the Sprint Plan</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
