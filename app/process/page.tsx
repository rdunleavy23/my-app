// app/process/page.tsx
import type { Metadata } from "next"
import { 
  ChevronDown,
  Search,
  Target,
  FileText,
  BarChart3,
  Users,
  Calendar,
  Mic,
  PieChart,
  Hammer,
  BookOpen,
  Handshake
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GetStartedButton } from "@/components/ui/get-started-button"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { ErrorBoundary } from "@/components/error-boundary"
import { createServiceSchema, createWebPageSchema, createFAQSchema, createBreadcrumbListSchema } from "@/lib/schemas"
import {
  heroContent,
  startHereContent,
  processWeeks,
  capabilities,
  requirements,
  ctaContent,
  valuesContent,
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

// Week icons mapping
const weekIcons = [Mic, PieChart, Hammer, BookOpen, Handshake]

export default function ProcessPage() {
  const serviceSchema = createServiceSchema({
    name: "8-Week Growth Strategy Sprint",
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
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 bg-tertiary rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'How We Work' }]} />
            
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {heroContent.headline}
              </h1>
              
              <div className="w-20 h-px bg-primary mx-auto" />
              
              <p className="text-base sm:text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                {heroContent.subheadline}
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Start Here Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary text-secondary-foreground border-0">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6">
                <div className="w-16 h-px bg-primary mx-auto sm:mx-0" />
                
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center sm:text-left">
                  {startHereContent.heading}
                </h2>
                
                <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed text-center sm:text-left">
                  {startHereContent.body}
                </p>
                
                <div className="flex justify-center sm:justify-start pt-2">
                  <GetStartedButton 
                    className="btn-hover-lift bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 font-semibold min-h-[48px]"
                  >
                    {startHereContent.ctaText}
                  </GetStartedButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* The Process Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 bg-primary/5 rounded-3xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Eight weeks. A foundation for the next eight years.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground italic">
                We sprint so you don't have to guess for years.
              </p>
            </div>
            
            {/* Timeline - Mobile: Vertical, Desktop: Enhanced vertical with better spacing */}
            <div className="relative">
              {/* Vertical line for timeline */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-primary/20" aria-hidden="true" />
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {processWeeks.map((week, index) => {
                  const Icon = weekIcons[index]
                  return (
                    <div key={week.id} className="relative pl-12 sm:pl-16 lg:pl-20">
                      {/* Timeline dot */}
                      <div className="absolute left-0 sm:left-2 top-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base shadow-md">
                        {index + 1}
                      </div>
                      
                      <Card className="card-hover-lift border-border/50">
                        <CardHeader className="pb-2 sm:pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                              </div>
                              <div>
                                <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wide">
                                  {week.week}
                                </p>
                                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-foreground">
                                  {week.title}
                                </CardTitle>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm sm:text-base text-foreground leading-relaxed">
                            {week.content}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* What You'll Have Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What you'll be able to do:
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {capabilities.map((capability, index) => {
                const icons = [Search, Target, FileText, BarChart3, Users]
                const Icon = icons[index % icons.length]
                return (
                  <Card key={capability.id} className="card-hover-lift border-border/50">
                    <CardHeader className="space-y-3 pb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                        {capability.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* What We Need Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary text-secondary-foreground border-0">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6">
                <div className="text-center sm:text-left space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    What we'll need from you:
                  </h2>
                </div>
                
                <ul className="space-y-4 sm:space-y-5">
                  {requirements.map((requirement) => (
                    <li key={requirement.id} className="flex items-start gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm sm:text-base text-secondary-foreground leading-relaxed">
                        {requirement.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Values Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 bg-tertiary rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                  {valuesContent.heading}
                </h2>
                
                <div className="w-16 h-px bg-primary mx-auto" />
                
                <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  {valuesContent.body}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Common Questions</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Everything you need to know about working with us.</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="rounded-lg border border-border/30 bg-card p-4 sm:p-6 group hover:border-primary/30 transition-colors shadow-sm"
                >
                  <summary className="text-base sm:text-lg font-medium text-foreground cursor-pointer list-none flex items-center justify-between gap-4 min-h-[44px]">
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="mt-4 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose">
                    {faq.answer.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 bg-primary text-primary-foreground rounded-3xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
                {ctaContent.heading}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                {ctaContent.body}
              </p>
            </div>
            
            <GetStartedButton 
              size="lg"
              className="btn-hover-lift bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 font-semibold min-h-[48px] sm:min-h-[52px]"
            >
              {ctaContent.ctaText}
            </GetStartedButton>
            
            <p className="text-xs sm:text-sm text-primary-foreground/70">
              {ctaContent.subtext}
            </p>
            
            <p className="text-xs sm:text-sm text-primary-foreground/60 italic pt-2">
              {ctaContent.postscript}
            </p>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  )
}
