// app/process/page.tsx
import type { Metadata } from "next"
import { ArrowRight, ArrowDown, FileText, Settings, Rocket } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createServiceSchema, createWebPageSchema, createFAQSchema } from "@/lib/schemas"
import { Framework5Cs } from "@/components/process/framework-5cs"
import { STPFramework } from "@/components/process/framework-stp"
import { FourPsGrid } from "@/components/process/framework-4ps"
import { DeliverablesList } from "@/components/process/deliverables-list"
import {
  heroContent,
  processSections,
  additionalSubsections,
  ownershipCategories,
  faqs,
  ctaContent,
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

const frameworkComponents = {
  "5cs": Framework5Cs,
  "stp": STPFramework,
  "4ps": FourPsGrid
}

export default function ProcessPage() {
  const serviceSchema = createServiceSchema({
    name: "8-Week Growth Strategy Process",
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroContent.title}
          </h1>

          <div className="text-base md:text-lg text-muted-foreground space-y-4 mb-8">
            {heroContent.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
            {heroContent.tagline}
          </p>

          <GetStartedButton size="lg" />
        </div>
      </section>

      {/* Section Overview */}
      <section className="py-12 md:py-16 bg-tertiary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Our Three-Section Process
          </h2>

          {/* Desktop: Horizontal flow */}
          <div className="hidden md:flex items-start gap-4">
            {processSections.map((section, idx) => (
              <div key={`desktop-${section.id}`} className="flex items-start gap-4 flex-1">
                {idx > 0 && <ArrowRight className="flex-shrink-0 mt-12 text-primary" />}
                <Card className="flex-1 bg-background border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {section.number}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          {section.timeline}
                        </p>
                        <h3 className="text-lg font-semibold">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {section.framework?.description || section.intro.slice(0, 100) + "..."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-6">
            {processSections.map((section, idx) => (
              <div key={`mobile-${section.id}`}>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {section.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                          {section.timeline}
                        </p>
                        <h3 className="text-lg font-semibold mb-2">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {section.framework?.description || section.intro.slice(0, 100) + "..."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {idx < processSections.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Details */}
      {processSections.map((section) => {
        const FrameworkComponent = section.framework
          ? frameworkComponents[section.framework.id]
          : null

        return (
          <section key={section.id} className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {section.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      Section {section.number} · {section.timeline}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground">
                  {section.intro}
                </p>
              </div>

              {/* Subsections */}
              <div className="space-y-12">
                {section.subsections.map((subsection, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      {subsection.heading}
                    </h3>
                    <div className="space-y-4 text-muted-foreground">
                      {subsection.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Framework Visualization */}
                {FrameworkComponent && (
                  <div className="mt-12">
                    <FrameworkComponent />
                  </div>
                )}

                {/* Additional subsections for Section 3 */}
                {section.id === "build-the-bridge" && (
                  <>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        {additionalSubsections.infrastructure.heading}
                      </h3>
                      <div className="space-y-4 text-muted-foreground">
                        {additionalSubsections.infrastructure.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        {additionalSubsections.transfer.heading}
                      </h3>
                      <div className="space-y-4 text-muted-foreground">
                        {additionalSubsections.transfer.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Deliverables */}
              <DeliverablesList items={section.deliverables} />
            </div>
          </section>
        )
      })}

      {/* What You Own Section */}
      <section className="py-16 md:py-24 bg-tertiary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            What You Own After Eight Weeks
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {ownershipCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <Card key={idx} className="bg-background border-border">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-semibold mb-8">Common Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="rounded border border-border p-6 group">
                <summary className="text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-muted-foreground">
                  {faq.answer.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-tertiary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {ctaContent.heading}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {ctaContent.body}
          </p>

          <GetStartedButton size="lg" />

          <p className="text-sm text-muted-foreground mt-6">
            {ctaContent.subtext}
          </p>
        </div>
      </section>
    </>
  )
}
