// app/fractional-cmo-services/page.tsx
import type { Metadata } from "next"
import { createServiceSchema, createWebPageSchema, createFAQSchema, createBreadcrumbListSchema } from "@/lib/schemas"
import Breadcrumbs from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "Fractional CMO Services | Pattern Growth",
  description:
    "Project-based fractional CMO services: complete growth strategy, playbooks, and KPI models in 8 weeks. No retainers. Full ownership for $1-5M companies.",
  alternates: { canonical: "https://www.patterngrowth.com/fractional-cmo-services" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    title: "Fractional CMO Services | Pattern Growth",
    description:
      "Project-based fractional CMO services delivering complete growth strategy, marketing playbooks, and KPI models in 8 weeks—without ongoing retainers. Full ownership transfer for $1-5M B2B companies.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CMO Services | Pattern Growth",
    description:
      "Project-based fractional CMO services delivering complete growth strategy, marketing playbooks, and KPI models in 8 weeks—without ongoing retainers. Full ownership transfer for $1-5M B2B companies.",
  },
  robots: { index: true, follow: true },
}

export default function FractionalCMOServicesPage() {
  const serviceSchema = createServiceSchema({
    name: "Fractional CMO Services",
    description: "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    provider: "Pattern Growth"
  });

  const webPageSchema = createWebPageSchema(
    "Fractional CMO Services | Pattern Growth",
    "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
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

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Fractional CMO Services", href: "/fractional-cmo-services" }
        ]}
      />

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Fractional CMO Services</h1>
        <p className="text-muted-foreground">
          This page will be restored with full content after deploy. For now, it compiles cleanly.
        </p>
      </section>
    </>
  )
}
