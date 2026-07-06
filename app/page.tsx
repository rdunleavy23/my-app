import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ApproachSkeleton } from "@/components/skeletons/approach-skeleton"
import { createServiceSchema, createFAQSchema, createReviewSchema } from "@/lib/schemas"
import { MarketingSection } from "@/components/marketing/MarketingSection"
import { Testimonials, testimonials } from "@/components/Testimonials"

const Approach = dynamic(() => import("./(marketing)/_sections/approach-enhanced").then(mod => mod.default), {
  loading: () => <ApproachSkeleton />,
})

export const metadata: Metadata = {
  title: "Pattern Growth | A Marketing Partner Who Works Like Part of Your Team",
  description: "Pattern Growth embeds with boutique businesses and solo founders. Senior partners only, no agency layers — we learn your business, build the strategy with you, and take marketing off your plate.",
  keywords: "marketing partner, boutique business marketing, solo founder marketing, embedded marketing strategy, senior marketing strategist",
  alternates: { canonical: "https://www.patterngrowth.com" },
  robots: { index: true, follow: true },
  other: {
    'article:modified_time': '2026-07-06',
  },
  openGraph: {
    title: "Pattern Growth | A Marketing Partner Who Works Like Part of Your Team",
    description: "Senior partners only, no agency layers. We learn your business, build the strategy with you, and take marketing off your plate.",
    type: "website",
    siteName: "Pattern Growth",
  },
}

export default function HomePage() {
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
    name: "Embedded Marketing Partnership",
    description: "A senior-led marketing partnership for boutique businesses and solo founders. We learn your business, build the strategy with you, and take marketing off your plate — senior partners only, no agency layers.",
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
      name: "How involved do we need to be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most at the start, while we're learning your business — that goes best when we can spend real time with you and whoever makes decisions. After that it's lighter: reviews, feedback, key calls. This only works as a real partnership, but we're not asking you to clear your calendar."
      }
    },
    {
      "@type": "Question",
      name: "What makes you different from an agency or a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You work directly with a senior strategist who learns your business and treats it like their own — no account managers, no handoffs, no recycled playbook. Clients tell us it feels like an extension of their team."
      }
    },
    {
      "@type": "Question",
      name: "Can we start right away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If we have capacity, yes — shortly after we shape the work together. If we're at capacity, we'll tell you our next opening rather than rushing your engagement. Quality matters more than filling slots."
      }
    }
  ]);

  return (
    <>
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

        {/* Hero */}
        <MarketingSection variant="default">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6 text-balance text-foreground">
              A marketing partner who works like part of your team.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Pattern Growth embeds with boutique businesses and solo founders. We learn your business like it&rsquo;s our own, build the strategy with you, and take marketing off your plate&nbsp;&mdash; senior partners only, no agency layers.
            </p>

            <GetStartedButton />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-lg border border-border/60 bg-card p-4">
                <p className="text-primary font-semibold">Senior partners only</p>
                <p className="text-primary">The person you meet on the first call is the person doing the work. No handoffs, no junior teams.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-4">
                <p className="text-primary font-semibold">Deeply embedded</p>
                <p className="text-primary">We learn your business&nbsp;&mdash; your product, your customers, your numbers&nbsp;&mdash; until we think like you do.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-4">
                <p className="text-primary font-semibold">Yours, always</p>
                <p className="text-primary">The strategy, playbooks, and systems: built in your voice, living in your tools, yours to keep.</p>
              </div>
            </div>
          </div>
        </MarketingSection>

        {/* Their Situation */}
        <MarketingSection variant="chapter">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              You shouldn&rsquo;t have to carry marketing alone.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                If you run a boutique business, marketing probably lives on your plate by default. You know it matters. Maybe you&rsquo;ve tried handing it off&nbsp;&mdash; and got an account manager instead of a thinker, or a freelancer who needed more managing than the work saved. So it stays with you, wedged between everything only you can do.
              </p>
              <p>
                What you need isn&rsquo;t a vendor. It&rsquo;s a partner you trust enough to hand it to.
              </p>
            </div>
          </div>
        </MarketingSection>

        {/* The Partnership */}
        <Suspense fallback={
          <MarketingSection variant="default">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                What working together looks like
              </h2>
              <p className="text-muted-foreground mb-12 text-lg">
                No packages, no off-the-shelf playbook. A partnership shaped around your business.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">1</div>
                    <h3 className="text-lg font-semibold leading-tight">We start by learning your business</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Before we recommend a thing, we listen: your numbers, your customers, your goals, the things keeping you up at night.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">2</div>
                    <h3 className="text-lg font-semibold leading-tight">We build the strategy with you</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Together we decide where to focus, what to say, and what to stop doing.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-l-primary bg-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-6 w-6 text-primary shrink-0 mt-0.5">3</div>
                    <h3 className="text-lg font-semibold leading-tight">We help you run it — and it&rsquo;s all yours</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The campaigns, the messaging, the systems that keep it moving. Documented in your voice, living in your tools, yours to keep.
                  </p>
                </div>
              </div>
            </div>
          </MarketingSection>
        }>
          <Approach />
        </Suspense>

        {/* Proof */}
        <Testimonials />

        {/* Honest Counsel */}
        <MarketingSection variant="chapter">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A senior partner, not another vendor.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                If marketing at your company is a department, hire a full-time CMO. If you have a team of marketers who need leadership, a fractional CMO is worth every penny. If you know exactly what you need and want volume, an agency can produce it.
              </p>
              <p>
                But if you&rsquo;re the one carrying marketing&nbsp;&mdash; no team to lead, no brief to hand an agency&nbsp;&mdash; what you need is a senior partner who learns your business, thinks alongside you, and takes it off your plate. That&rsquo;s what we&rsquo;re built for.
              </p>
              <p>
                Weighing your options? Here&rsquo;s our{" "}
                <Link href="/sprint-vs-fractional-cmo" className="text-primary hover:underline font-medium">
                  honest take on all of them
                </Link>
                . And if we&rsquo;re not your answer, we&rsquo;ll say so on the first call.
              </p>
            </div>
          </div>
        </MarketingSection>

        {/* Common Questions */}
        <section className="py-16 sm:py-20 bg-tertiary">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">Common Questions</h2>

            <div className="space-y-4">
              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  How involved do we need to be?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>Most at the start, while we&rsquo;re learning your business&nbsp;&mdash; that goes best when we can spend real time with you and whoever makes decisions. After that it&rsquo;s lighter: reviews, feedback, key calls. This only works as a real partnership, but we&rsquo;re not asking you to clear your calendar.</p>
                </div>
              </details>

              <details className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  What makes you different from an agency or a fractional CMO?
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                  <p>You work directly with a senior strategist who learns your business and treats it like their own&nbsp;&mdash; no account managers, no handoffs, no recycled playbook. Clients tell us it feels like an extension of their team.</p>
                  <p>Our <Link href="/sprint-vs-fractional-cmo" className="text-primary hover:underline">honest comparison of your options</Link> is here.</p>
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
                  <p>If we have capacity, yes&nbsp;&mdash; shortly after we shape the work together. If we&rsquo;re at capacity, we&rsquo;ll tell you our next opening rather than rushing your engagement. Quality matters more than filling slots.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* The Ask */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-tertiary mb-4">
              See If We&rsquo;re a Fit
            </h2>
            <p className="text-base sm:text-lg text-tertiary mb-2">
              We&rsquo;ll talk about where you are, where you need to be, and whether this makes sense.
            </p>
            <p className="text-sm sm:text-base text-tertiary/80 italic mb-8">
              If we&rsquo;re not the right fit, we&rsquo;ll point you toward someone who can help.
            </p>
            <GetStartedButton size="lg" className="font-semibold btn-hover-lift bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 shadow-md shadow-accent-golden/20 hover:shadow-lg hover:shadow-accent-golden/30" location="hero">
              Schedule a Call
            </GetStartedButton>
          </div>
        </section>

      </div>
    </>
  )
}
