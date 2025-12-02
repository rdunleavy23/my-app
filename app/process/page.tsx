// app/process/page.tsx
import type { Metadata } from "next"
import { FileText, Settings, Rocket, Search, Compass, MessageSquare, BarChart3, BookOpen, Route } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createServiceSchema, createWebPageSchema, createFAQSchema } from "@/lib/schemas"
import { ProcessPhasesMobile } from "@/components/process/process-phases-mobile"
import { ProcessPhasesDesktop } from "@/components/process/process-phases-desktop"
import {
  heroContent,
  processSections,
  additionalSubsections,
  ownershipCategories,
  faqs,
  afterSprintContent,
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

// Create serializable version of sections for client components
const serializableSections = processSections.map(section => ({
  id: section.id,
  number: section.number,
  title: section.title,
  timeline: section.timeline,
  intro: section.intro,
  subsections: section.subsections,
  deliverables: section.deliverables
}))

const serializableAdditionalSubsections = {
  infrastructure: additionalSubsections.infrastructure,
  transfer: additionalSubsections.transfer
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

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            {heroContent.tagline}
          </p>

          {heroContent.clarifier && (
            <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              {heroContent.clarifier}
            </p>
          )}

          <GetStartedButton size="lg" />
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-12 md:py-16 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            What We Deliver
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every engagement is custom, but these are the core elements we build together.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Funnel Analysis",
                description: "We analyze your existing data to understand what's working, what's not, and where the real opportunities are."
              },
              {
                icon: Compass,
                title: "Custom Growth Strategy",
                description: "A data-driven plan tailored to your business, capacity, and long-term goals. No borrowed templates."
              },
              {
                icon: MessageSquare,
                title: "Positioning & Messaging",
                description: "Clarity on who you serve, why they choose you, and how to communicate it everywhere."
              },
              {
                icon: BarChart3,
                title: "Measurement Framework",
                description: "The metrics that matter and a system for tracking what's driving revenue."
              },
              {
                icon: BookOpen,
                title: "Playbooks & Documentation",
                description: "Everything gets documented so you can execute independently after the sprint."
              },
              {
                icon: Route,
                title: "Implementation Plan",
                description: "A realistic plan for putting strategy into action, based on your capacity."
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Details Section */}
      <section className="bg-tertiary/30">
        <div className="py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Our Three-Phase Process
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-xl mx-auto px-4">
            Eight weeks from kickoff to ownership transfer
          </p>
        </div>

        {/* Mobile: Swipeable stepper experience */}
        <ProcessPhasesMobile 
          sections={serializableSections}
          additionalSubsections={serializableAdditionalSubsections}
        />

        {/* Desktop: Scroll-linked sidebar with full content */}
        <div className="pb-16">
          <ProcessPhasesDesktop 
            sections={serializableSections}
            additionalSubsections={serializableAdditionalSubsections}
          />
        </div>
      </section>

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

      {/* After the Sprint Section */}
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {afterSprintContent.heading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            {afterSprintContent.intro}
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            After eight weeks, most clients choose one of three paths:
          </p>

          <div className="space-y-4">
            {afterSprintContent.paths.map((path, idx) => (
              <Card key={idx} className="bg-tertiary/30 border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {path.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {path.description}
                  </p>
                </CardContent>
              </Card>
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
