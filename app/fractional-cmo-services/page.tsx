// app/fractional-cmo-services/page.tsx
import type { Metadata } from "next"
import { createServiceSchema, createWebPageSchema, createFAQSchema, createBreadcrumbListSchema } from "@/lib/schemas"
import Breadcrumbs from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "Which Businesses Should Choose an 8-Week Marketing Sprint",
  description:
    "Not all companies need ongoing CMO services. Learn which businesses benefit most from an 8-week marketing sprint vs traditional fractional CMO retainers.",
  alternates: { canonical: "https://www.patterngrowth.com/fractional-cmo-services" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    title: "Which Businesses Should Choose an 8-Week Marketing Sprint",
    description:
      "Not all companies need ongoing CMO services. Learn which businesses benefit most from an 8-week marketing sprint vs traditional fractional CMO retainers.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Businesses Should Choose an 8-Week Marketing Sprint",
    description:
      "Not all companies need ongoing CMO services. Learn which businesses benefit most from an 8-week marketing sprint vs traditional fractional CMO retainers.",
  },
  robots: { index: true, follow: true },
  other: {
    'article:modified_time': '2025-01-20',
  }
}

export default function FractionalCMOServicesPage() {
  const serviceSchema = createServiceSchema({
    name: "Fractional CMO Services",
    description: "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    provider: "Pattern Growth"
  });

  const webPageSchema = createWebPageSchema(
    "Which Businesses Should Choose an 8-Week Marketing Sprint | Pattern Growth",
    "Not all companies need ongoing CMO services. Learn which businesses benefit most from an 8-week marketing sprint vs traditional fractional CMO retainers.",
    "https://www.patterngrowth.com/fractional-cmo-services"
  );

  const faqSchema = createFAQSchema([
    {
      "@type": "Question",
      name: "What services does a fractional CMO provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fractional CMO provides strategic marketing leadership including: marketing strategy development, team oversight, budget management, channel selection, and performance tracking. Pattern Growth delivers all this infrastructure in an 8-week sprint with full ownership transfer instead of ongoing retainers."
      }
    },
    {
      "@type": "Question",
      name: "How is Pattern Growth's model different from traditional fractional CMO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional fractional CMOs work on ongoing retainers (typically $5K-15K/month) providing strategic oversight. Pattern Growth delivers a complete 8-week project-based sprint that builds your entire marketing infrastructure with full ownership transfer—no ongoing dependency or recurring costs."
      }
    },
    {
      "@type": "Question",
      name: "What do you get from Pattern Growth's fractional CMO service alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You receive complete growth strategy built from your data, marketing playbooks you can execute, custom measurement systems, channel frameworks, positioning documents, and full operational training. Everything transfers to you with complete ownership after 8 weeks."
      }
    }
  ]);

  const breadcrumbSchema = createBreadcrumbListSchema([
    { label: "Home", href: "/", position: 1 },
    { label: "Fractional CMO Services", href: "/fractional-cmo-services", position: 2 }
  ]);

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "name": "Fractional CMO vs 8-Week Sprint Comparison",
    "description": "Detailed comparison of retainer-based fractional CMO services versus project-based 8-week marketing strategy sprints",
    "about": [
      {
        "@type": "Service",
        "name": "Fractional CMO Services",
        "description": "Ongoing retainer-based marketing leadership"
      },
      {
        "@type": "Service",
        "name": "8-Week Growth Strategy Sprint",
        "description": "Project-based marketing infrastructure delivery"
      }
    ]
  };

  const additionalFAQSchema = createFAQSchema([
    {
      "@type": "Question",
      "name": "What size companies should choose an 8-week sprint over fractional CMO retainers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "$1M-$5M B2B companies that need marketing infrastructure built without permanent executive overhead. These businesses have stalled growth, fragmented data, or unclear positioning where traditional retainers create ongoing dependency."
      }
    },
    {
      "@type": "Question",
      "name": "How does the 8-week sprint compare to fractional CMO pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fractional CMOs typically cost $5k-$15k/month on open-ended retainers ($60k-$180k annually). Our sprint starts at $9,500 as a one-time fixed-fee project with complete ownership transfer and 30 days of post-engagement support."
      }
    },
    {
      "@type": "Question",
      "name": "When would a company still need a fractional CMO instead of a sprint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Companies that need ongoing strategic oversight, board-level presence, or have highly complex marketing operations might still benefit from fractional CMO retainers. Our sprint is designed for businesses that want complete ownership and independence after 8 weeks."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalFAQSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fractional CMO Services", href: "/fractional-cmo-services" }
        ]}
      />

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Which Businesses Should Choose an 8-Week Marketing Sprint</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Not every company needs ongoing CMO services. An 8-week marketing sprint works best for businesses ready to build complete marketing infrastructure without permanent executive overhead.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-6">Businesses That Should Choose an 8-Week Sprint</h2>

          <p className="text-lg text-foreground mb-8">
            We focus on $1M-$5M companies that need a "Pattern Breaker" to build marketing infrastructure without the permanent executive overhead. These are businesses where traditional fractional CMO retainers create more problems than they solve.
          </p>

          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Fractional CMO Retainer Model</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                <span>$5k-$15k/month on open-ended retainers with 3-6 months to reach full value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                <span>You remain dependent on the consultant for strategic decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">•</span>
                <span>Includes "hidden coordination tax" of 3-5 hours/week of internal team time</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Pattern Growth Sprint Model</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Fixed-fee project model with dashboard live by week 6</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>You own frameworks, dashboards, and playbooks with complete independence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Complete marketing system delivered in 8 weeks, no ongoing coordination</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-6">The Comparison That Matters</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border bg-card">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-4 text-left font-semibold">What Matters</th>
                  <th className="border border-border p-4 text-left font-semibold">Fractional CMO Retainer</th>
                  <th className="border border-border p-4 text-left font-semibold">8-Week Strategy Sprint</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 font-medium">Speed to Value</td>
                  <td className="border border-border p-4 text-muted-foreground">3-6 months to provide full value</td>
                  <td className="border border-border p-4 text-primary font-medium">Dashboard live by week 6</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border p-4 font-medium">Ownership</td>
                  <td className="border border-border p-4 text-muted-foreground">Dependent on consultant</td>
                  <td className="border border-border p-4 text-primary font-medium">You own frameworks, dashboards, playbooks</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-medium">Cost Predictability</td>
                  <td className="border border-border p-4 text-muted-foreground">$5k-$15k/month, open-ended</td>
                  <td className="border border-border p-4 text-primary font-medium">Fixed-fee project model</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border p-4 font-medium">Documentation Handoff</td>
                  <td className="border border-border p-4 text-muted-foreground">Knowledge leaves with consultant</td>
                  <td className="border border-border p-4 text-primary font-medium">Complete system you execute independently</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-tertiary/50 border border-tertiary rounded-lg">
            <p className="text-foreground font-medium mb-2">
              <strong>The Pattern Breaker Difference:</strong> We deliver a complete marketing system in 8 weeks. You get the keys to run it yourself—no permanent executive overhead, no ongoing coordination tax.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
