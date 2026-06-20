// app/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { 
  UserCog,
  Puzzle,
  Handshake,
  ChevronDown
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ApproachSkeleton } from "@/components/skeletons/approach-skeleton"
import { createServiceSchema, createFAQSchema, createReviewSchema } from "@/lib/schemas"
import { MarketingSection } from "@/components/marketing/MarketingSection"
import { Testimonials, testimonials } from "@/components/Testimonials"

// Lazy load non-critical components for better performance
const Approach = dynamic(() => import("./(marketing)/_sections/approach-enhanced").then(mod => mod.default), {
  loading: () => <ApproachSkeleton />,
})

const HomeCarousel = dynamic(() => import("@/components/home-carousel").then(mod => mod.HomeCarousel), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg mb-8" />
})

const ComparisonTable = dynamic(() => import("@/components/ui/comparison-table").then(mod => mod.ComparisonTable), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg mb-12" />
})

const FAQCollapsible = dynamic(() => import("@/components/ui/faq-collapsible").then(mod => mod.default), {
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg mb-8" />
})


export const metadata: Metadata = {
  title: "Pattern Growth | Senior-Led Growth Strategy Partner",
  description: "Premium marketing strategy without the overhead of a full-time hire. Pattern Growth embeds with your leadership, learns your business deeply, and builds a custom growth strategy your team owns.",
  keywords: "growth strategy, marketing strategy, senior marketing partner, embedded marketing strategy, custom growth strategy, strategy consulting",
  alternates: { canonical: "https://www.patterngrowth.com" },
  robots: { index: true, follow: true },
  other: {
    'article:modified_time': '2025-01-20',
  },
  openGraph: {
    title: "Pattern Growth | Senior-Led Growth Strategy Partner",
    description: "Premium marketing strategy without the overhead of a full-time hire. We embed with your leadership and build a custom growth strategy your team owns.",
    type: "website",
    siteName: "Pattern Growth",
  },
}

export default function HomePage() {
  // WebSite schema - homepage only for site name display in SERPs
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.patterngrowth.com/#website",
    name: "Pattern Growth",
    alternateName: ["Pattern", "PatternGrowth"],
    url: "https://www.patterngrowth.com",
    publisher: {
      "@id": "https://www.patterngrowth.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.patterngrowth.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = createServiceSchema({
    name: "Senior-Led Growth Strategy",
    description: "A senior-led, embedded growth strategy partnership. We learn your business deeply and build a custom marketing strategy your team owns — premium expertise without the overhead of a full-time hire.",
    url: "https://www.patterngrowth.com/",
    provider: "Pattern Growth"
  });

  const reviewSchemas = testimonials.map((t) =>
    createReviewSchema({
      reviewBody: t.quote,
      author: {
        name: t.name,
        jobTitle: t.title,
        worksFor: t.company,
      },
    })
  );

  const faqSchema = createFAQSchema([
    {
      "@type": "Question",
      name: "How involved do we need to be during the sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers."
      }
    },
    {
      "@type": "Question",
      name: "What makes you different from a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You work directly with senior strategists who embed in your business and treat it like their own — no junior teams, no vendor distance. We learn your market and goals deeply, then build a custom growth strategy your team owns. It's a true partnership focused on fit and trust, scoped to exactly what your business needs."
      }
    },
    {
      "@type": "Question",
      name: "Can we start right away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots."
      }
    }
  ]);

  return (
    <>
      {/* WebSite schema for site name display in SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {reviewSchemas.map((schema, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="bg-background">
                {/* Hero Section */}
                <MarketingSection variant="default" className="py-16 sm:py-20">
                  <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6 text-balance text-foreground">
                      Marketing strategy<br />
                      without the overhead
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                      Pattern Growth delivers premium marketing expertise without the overhead of a full-time hire. We build lasting partnerships with clients who demand excellence and understand the value of strategic thinking.
                    </p>

                    {/* Hero CTA */}
                    <GetStartedButton />

                    {/* Credibility row */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">Senior partners only</p>
                        <p className="text-primary">You work directly with senior strategists—never handed off.</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">Deeply embedded</p>
                        <p className="text-primary">We learn your business until we think like you do.</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-white p-4">
                        <p className="text-primary font-semibold">Yours to keep</p>
                        <p className="text-primary">A custom strategy, playbooks, and dashboards your team owns.</p>
                      </div>
                    </div>

                  </div>
                </MarketingSection>

        {/* Interactive version loads client-side */}
        <Suspense fallback={
          <MarketingSection variant="chapter" className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Our 8-Week Process
              </h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Strategy built from your reality, designed for your future, owned by you.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">1</div>
                    <h3 className="text-lg font-semibold leading-tight">Weeks 1-2: Shaped by Your Reality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We understand your specific situation—market position, team capacity, actual constraints. Strategy fits your business as it exists today.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">2</div>
                    <h3 className="text-lg font-semibold leading-tight">Weeks 3-6: Built for Your Future</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Custom roadmap for your goals, accounting for timeline and resources. Clear priorities, success metrics, and scaling plans.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">3</div>
                    <h3 className="text-lg font-semibold leading-tight">Weeks 7-8: Owned by You</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete training and documentation. Your team owns the custom systems we build together and can run them with confidence.
                  </p>
                </div>
              </div>
            </div>
          </MarketingSection>
        }>
          <Approach />
        </Suspense>

        <Testimonials />

        {/* What sets Pattern Growth apart */}
        <MarketingSection variant="chapter" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              What sets Pattern Growth apart
            </h2>
            <p className="text-muted-foreground mb-12 text-lg max-w-3xl">
              We embed ourselves in your business, learning your market and your goals until we think like you do. Pattern Growth becomes an extension of your team, not a vendor checking boxes.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Handshake className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Strategic partnership</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep integration means we understand your business as well as you do. That allows us to provide thoughtful guidance that fits your reality and drives the right priorities.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <UserCog className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Senior leadership only</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You work directly with senior strategists who own your strategy, without the overhead. That keeps the work focused, accountable, and aligned with your leadership team.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Puzzle className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight">Custom growth frameworks</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every business is different, so we build strategies that fit your specific situation. The result is a custom framework designed around your goals, not a one-size-fits-all playbook.
                </p>
              </Card>
            </div>
          </div>
        </MarketingSection>

        {/* Comparison Table */}
        <MarketingSection variant="default" className="py-16 sm:py-20 border-t">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                How Pattern Growth compares
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                A senior partner,
                <br />
                <span className="italic">not another vendor.</span>
              </h2>
            </div>
            
            <ComparisonTable
              columns={["Strategy", "Customization", "Speed", "Independence", "Cost"]}
              rows={[
                {
                  label: "Pattern Growth",
                  isHighlighted: true,
                  values: {
                    Cost: "check",
                    Speed: "check",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "check",
                  },
                },
                {
                  label: "Full-time CMO",
                  values: {
                    Cost: "x",
                    Speed: "x",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "question",
                  },
                },
                {
                  label: "Fractional CMO",
                  values: {
                    Cost: "x",
                    Speed: "check",
                    Strategy: "check",
                    Customization: "check",
                    Independence: "x",
                  },
                },
                {
                  label: "Marketing agency",
                  values: {
                    Cost: "question",
                    Speed: "check",
                    Strategy: "question",
                    Customization: "question",
                    Independence: "x",
                  },
                },
                {
                  label: "DIY tools",
                  values: {
                    Cost: "check",
                    Speed: "check",
                    Strategy: "x",
                    Customization: "x",
                    Independence: "check",
                  },
                },
              ]}
              className="mt-8"
            />
          </div>
        </MarketingSection>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-tertiary">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-semibold mb-2 text-foreground">Common Questions</h2>
            <p className="text-muted-foreground mb-8">Everything you need to know about working with us.</p>

            <div className="space-y-4">
              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  How involved do we need to be during the sprint?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>Weeks 1-2 require significant time (5-10 hours) for context building. Weeks 3-6 are lighter—mostly reviews and feedback. Week 7-8 ramps back up for training and handoff. We're not asking you to clear your calendar, but this doesn't work if we can't access decision-makers.</p>
                </div>
              </details>

              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  What makes you different from a fractional CMO?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>You work directly with senior strategists who embed in your business and treat it like their own—no junior teams, no vendor distance. We learn your market and goals deeply, then build a custom growth strategy your team owns.</p>
                  <p>It's a true partnership built on trust and fit, scoped to exactly what your business needs—so you're never paying for things you don't.</p>
                  <p><Link href="/sprint-vs-fractional-cmo" className="text-primary hover:underline">Read our detailed comparison</Link>.</p>
                </div>
              </details>

              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  Can we start right away?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>If we have capacity, yes—usually within 1-2 weeks of signing. If we're at capacity, we'll tell you our next availability rather than rushing your engagement. Quality matters more than filling slots.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-[#3E5661]">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#F8ECD1] mb-4">
              See If We're a Fit
            </h2>
            <p className="text-base sm:text-lg text-[#F8ECD1] mb-2">
              We'll talk about where you are, where you need to be, and whether this makes sense.
            </p>
            <p className="text-sm sm:text-base text-[#F8ECD1]/80 italic mb-8">
              If we're not the right fit, we'll point you toward someone who can help.
            </p>
            <GetStartedButton size="lg" className="font-semibold btn-hover-lift bg-[#FFBF5E] text-[#02273A] hover:bg-[#FFBF5E]/90 shadow-md shadow-[#FFBF5E]/20 hover:shadow-lg hover:shadow-[#FFBF5E]/30 [&_i]:bg-[#02273A]/10 [&_i]:text-[#02273A]" location="hero">
              Schedule a Call
            </GetStartedButton>
          </div>
        </section>

      </div>
    </>
  )
}
