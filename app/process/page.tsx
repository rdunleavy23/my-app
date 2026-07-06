import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { ErrorBoundary } from "@/components/error-boundary"
import { createServiceSchema, createWebPageSchema, createFAQSchema, createBreadcrumbListSchema } from "@/lib/schemas"
import { MarketingSection } from "@/components/marketing/MarketingSection"
import { testimonials } from "@/components/Testimonials"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  heroContent,
  ctaContent,
  faqs,
  processMetadata
} from "@/config/process"

export const metadata: Metadata = {
  title: processMetadata.title,
  description: processMetadata.description,
  keywords: processMetadata.keywords,
  alternates: { canonical: "https://www.patterngrowth.com/process" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/process",
    title: processMetadata.title,
    description: processMetadata.description,
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: processMetadata.title,
    description: processMetadata.description,
  },
  robots: { index: true, follow: true },
}

function splitOnce(text: string, highlight: string) {
  if (!highlight) return null
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = new RegExp(escaped, "i").exec(text)
  if (!match) return null
  return {
    before: text.slice(0, match.index),
    matched: match[0],
    after: text.slice(match.index + match[0].length),
  }
}

export default function ProcessPage() {
  const serviceSchema = createServiceSchema({
    name: "Embedded Marketing Partnership",
    description: processMetadata.description,
    url: "https://www.patterngrowth.com/process",
    provider: "Pattern Growth"
  })

  const webPageSchema = createWebPageSchema(
    processMetadata.title,
    processMetadata.description,
    "https://www.patterngrowth.com/process"
  )

  const faqSchema = createFAQSchema(
    faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" ")
      }
    }))
  )

  const breadcrumbSchema = createBreadcrumbListSchema([
    { label: 'Home', href: '/', position: 1 },
    { label: 'How We Work', position: 2 }
  ])

  const lainey = testimonials.find(t => t.name === "Lainey Buchanan")
  const kelsee = testimonials.find(t => t.name === "Kelsee McGee")
  const featuredTestimonials = [lainey, kelsee].filter(Boolean)

  return (
    <ErrorBoundary>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-16 sm:py-20 lg:py-24 bg-tertiary">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumbs items={[{ label: 'How We Work' }]} />

            <div className="mt-6 space-y-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                {heroContent.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {heroContent.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {heroContent.subheadline}
              </p>
              <div className="pt-2">
                <GetStartedButton />
              </div>
            </div>
          </div>
        </section>

        {/* The Shift */}
        <MarketingSection variant="default" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              You&rsquo;ve had two options. Neither felt right.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Keep doing marketing yourself&nbsp;&mdash; nights, weekends, wherever it fits around the work only you can do. Or hire an agency, and get a layer of account managers between you and whoever&rsquo;s actually thinking about your business.
              </p>
              <p>
                There&rsquo;s a third way: a partner who embeds. We sit inside your business&nbsp;&mdash; your numbers, your customers, your goals&nbsp;&mdash; until we understand it the way you do. Then we build the strategy together, and help you run it.
              </p>
            </div>
          </div>
        </MarketingSection>

        {/* How the Partnership Works */}
        <MarketingSection variant="chapter" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              How the partnership works
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
              Every engagement is shaped around your business, but the arc is always the same: we learn, we build with you, we hand you the keys.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  We learn your business.
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Before we recommend anything, we listen. We go through your numbers&nbsp;&mdash; what you&rsquo;ve spent, what came back, which customers stuck around. We talk with you and anyone who touches your marketing. You&rsquo;ll see every finding, including the uncomfortable ones.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  We build the strategy with you.
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Not for you&nbsp;&mdash; with you. Together we decide where to focus, what to say, and what to stop doing. When someone asks about your marketing plan, you won&rsquo;t be repeating ours. You&rsquo;ll be explaining yours.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  We help you run it, and hand you the keys.
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  The first campaigns, the messaging, the systems that keep it moving. Everything documented in plain language, in tools you already use. When the work wraps, the strategy, playbooks, and dashboards are yours&nbsp;&mdash; and so is our number.
                </p>
              </div>
            </div>
          </div>
        </MarketingSection>

        {/* What You Can Expect / What We'll Ask */}
        <MarketingSection variant="default" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              What you can expect&nbsp;&mdash; and what we&rsquo;ll ask of you
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-5">From us</h3>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">A senior partner start to finish</span>&nbsp;&mdash; the person you meet is the person doing the work.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">Everything in plain language</span>&nbsp;&mdash; if you can&rsquo;t explain the strategy back to us, we haven&rsquo;t finished the job.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">Work shaped to what you need</span>&nbsp;&mdash; you&rsquo;ll never pay for things your business doesn&rsquo;t.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">Nothing held hostage</span>&nbsp;&mdash; everything lives in your tools, under your logins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">And the truth, kindly</span>&nbsp;&mdash; if a favorite channel isn&rsquo;t working, we&rsquo;ll show you why, with your numbers.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-5">From you</h3>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">Openness with your numbers</span>&nbsp;&mdash; analytics, ad platforms, CRM, even the tools you&rsquo;re a little embarrassed about.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span><span className="text-foreground font-medium">Real time early on</span>, with whoever makes decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>And a <span className="text-foreground font-medium">willingness to hear</span> that a favorite channel might be the problem.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MarketingSection>

        {/* What It Feels Like */}
        <MarketingSection variant="chapter" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              What it feels like
            </h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-2xl">
              Clients say it better than we can&nbsp;&mdash;{" "}
              <Link href="/" className="text-primary hover:underline font-medium">
                more of what clients say about Pattern Growth
              </Link>{" "}
              is on our homepage.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTestimonials.map((t) => {
                if (!t) return null
                const parts = splitOnce(t.quote, t.highlight)
                return (
                  <Card key={t.name} className="h-full p-6 border-l-4 border-l-primary flex flex-col text-left">
                    <blockquote className="text-base text-foreground leading-relaxed mb-6">
                      {parts ? (
                        <>
                          &ldquo;{parts.before}
                          <mark className={cn("rounded px-1 font-medium", t.highlightClass)}>
                            {parts.matched}
                          </mark>
                          {parts.after}&rdquo;
                        </>
                      ) : (
                        <>&ldquo;{t.quote}&rdquo;</>
                      )}
                    </blockquote>
                    <footer className="mt-auto border-t border-border/50 pt-5">
                      <p className="text-base font-semibold text-foreground leading-tight">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.title}, {t.company}
                      </p>
                    </footer>
                  </Card>
                )
              })}
            </div>
          </div>
        </MarketingSection>

        {/* Common Questions */}
        <section className="py-16 sm:py-20 bg-tertiary">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">Common Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="rounded-lg border border-border/30 bg-card p-6 group hover:border-primary/30 transition-colors shadow-sm"
                >
                  <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between gap-4 min-h-[44px]">
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed max-w-prose">
                    {faq.answer.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* The Ask */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-tertiary">
              {ctaContent.heading}
            </h2>
            <p className="text-base sm:text-lg text-tertiary leading-relaxed max-w-2xl mx-auto">
              {ctaContent.body}
            </p>

            <GetStartedButton
              size="lg"
              className="font-semibold btn-hover-lift bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 shadow-md shadow-accent-golden/20 hover:shadow-lg hover:shadow-accent-golden/30"
            >
              {ctaContent.ctaText}
            </GetStartedButton>

            <p className="text-sm text-tertiary/80">
              {ctaContent.subtext}
            </p>

            <p className="text-sm text-tertiary/70 italic pt-2">
              P.S. {ctaContent.postscript}
            </p>
          </div>
        </section>

      </div>
    </ErrorBoundary>
  )
}
