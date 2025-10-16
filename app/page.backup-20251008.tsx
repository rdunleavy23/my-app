import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Clock, Target, TrendingUp, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Pattern Growth",
            description:
              "Growth strategy sprints and fractional CMO alternative for growth-stage companies. CMO-level thinking delivered through focused 2-month project-based engagements.",
            url: "https://patterngrowth.com",
            serviceType: [
              "Growth Strategy Consulting",
              "Marketing Strategy Sprint",
              "Fractional CMO Alternative",
              "Marketing Dashboard Development",
            ],
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            offers: {
              "@type": "Offer",
              name: "Growth Strategy Sprint",
              description:
                "2-month focused engagement delivering growth strategy, marketing dashboards, and team training",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a growth strategy sprint?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A growth strategy sprint is a focused 2-month engagement that delivers complete growth strategy systems including custom dashboards, campaign playbooks, and team training. Unlike fractional CMOs or agencies, you own everything we build with no ongoing consulting dependency.",
                },
              },
              {
                "@type": "Question",
                name: "How is this different from hiring a fractional CMO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Growth strategy sprints are project-based (2 months) versus ongoing retainer relationships. You receive complete deliverables including strategy documents, marketing dashboards, and playbooks that you own. Fractional CMOs typically work on monthly retainers with ongoing consulting relationships.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can we start?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We start growth strategy sprints quickly after agreement. Your marketing dashboard goes live within 6 weeks maximum, and the complete sprint finishes in 2 months total.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Fractional CMO Alternative for Growth-Stage Companies
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Get CMO-level growth strategy through 2-month sprints—without hiring overhead or consulting dependency
          </h2>

          <div className="prose prose-lg mx-auto mb-8 text-foreground">
            <p className="text-lg leading-relaxed">
              Instead of months of CMO onboarding or endless fractional CMO engagements, 
              get a complete growth strategy system in 2 months. You own everything: 
              the strategy documents, the marketing dashboards, the campaign playbooks.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Perfect for growth-stage companies ($1-5M revenue) who need strategic marketing 
              leadership but aren't ready for full-time CMO economics or long-term consulting 
              relationships.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Start Your Sprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
              <p className="text-muted-foreground">
                No months of onboarding or ramp-up time. We deliver working systems fast.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">You Own Everything</h3>
              <p className="text-muted-foreground">
                Complete independence from consulting relationships. Your growth infrastructure belongs to you.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Capability Building</h3>
              <p className="text-muted-foreground">
                We don't create dependency—we build your team's capability to execute independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You Get in Your Growth Strategy Sprint
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Strategic Foundation (Week 1-2)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Executive vision extraction and alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitive analysis and market positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Customer journey mapping and persona development</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Tactical Framework (Week 3-4)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Channel prioritization and budget allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>KPI systems and measurement framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Campaign templates and messaging guides</span>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Dashboard & Handoff (Week 5-8)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom marketing dashboard connecting all your data sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complete process documentation and team training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Campaign playbooks for independent execution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-lg font-semibold">
              Included: Full Year of Dashboard Access + 30-Day Post-Sprint Support
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Growth Strategy Sprints Work
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                <p className="text-muted-foreground">
                  No lengthy RFPs or multi-month searches. We begin your growth strategy sprint within 1 week of agreement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2-Month Sprint Delivery</h3>
                <p className="text-muted-foreground">
                  Focused engagement delivering strategic frameworks, tactical playbooks, and custom dashboards. Your marketing dashboard goes live within 6 weeks maximum.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complete Team Handoff</h3>
                <p className="text-muted-foreground">
                  Full documentation and training ensures your marketing team can execute independently. No ongoing consulting dependency required.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You Own Everything</h3>
                <p className="text-muted-foreground">
                  All strategy documents, campaign templates, and dashboards belong to you. Includes full year of dashboard access and 30-day support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perfect for Growth-Stage Companies ($1-5M Revenue)
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Growth strategy sprints work best for companies who are:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Post-Startup, Pre-Enterprise</h3>
              </div>
              <p className="text-muted-foreground">
                You've proven product-market fit but need to systematize your growth marketing approach. You're beyond founder-led chaos but not ready for enterprise infrastructure.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Facing Data Overload</h3>
              </div>
              <p className="text-muted-foreground">
                Your marketing data is scattered across multiple platforms (CRM, ads, analytics, email). You need a unified marketing dashboard to make better decisions.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Need Strategic Leadership</h3>
              </div>
              <p className="text-muted-foreground">
                Your marketing team executes well tactically but lacks strategic direction. You need CMO-level thinking without full-time CMO economics.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Under Investor Pressure</h3>
              </div>
              <p className="text-muted-foreground">
                Board members or investors are asking for measurable growth. You need a proven marketing strategy framework and clear KPI reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Growth Strategy Sprints vs. Traditional Marketing Leadership
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-4 font-semibold border-b border-border">Factor</th>
                  <th className="text-left p-4 font-semibold border-b border-border bg-primary/10">Pattern Growth Sprints</th>
                  <th className="text-left p-4 font-semibold border-b border-border">Fractional CMO</th>
                  <th className="text-left p-4 font-semibold border-b border-border">Full-Time CMO</th>
                  <th className="text-left p-4 font-semibold border-b border-border">Marketing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-medium border-b border-border">Engagement Model</td>
                  <td className="p-4 border-b border-border bg-primary/5">Project-based sprint</td>
                  <td className="p-4 border-b border-border">Ongoing retainer</td>
                  <td className="p-4 border-b border-border">Full-time hire</td>
                  <td className="p-4 border-b border-border">Retainer or project</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium border-b border-border">Timeline</td>
                  <td className="p-4 border-b border-border bg-primary/5">2 months</td>
                  <td className="p-4 border-b border-border">6-12+ months</td>
                  <td className="p-4 border-b border-border">Ongoing (plus 4-8 month search)</td>
                  <td className="p-4 border-b border-border">Varies</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium border-b border-border">Ownership</td>
                  <td className="p-4 border-b border-border bg-primary/5">You own everything</td>
                  <td className="p-4 border-b border-border">Consultant-dependent</td>
                  <td className="p-4 border-b border-border">Employee deliverables</td>
                  <td className="p-4 border-b border-border">Limited ownership</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium border-b border-border">Deliverables</td>
                  <td className="p-4 border-b border-border bg-primary/5">Strategy + dashboard + playbooks</td>
                  <td className="p-4 border-b border-border">Strategic guidance</td>
                  <td className="p-4 border-b border-border">Leadership + execution</td>
                  <td className="p-4 border-b border-border">Campaign execution</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Start Time</td>
                  <td className="p-4 bg-primary/5">Quick start</td>
                  <td className="p-4">2-4 weeks</td>
                  <td className="p-4">4-8 months</td>
                  <td className="p-4">2-6 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Read Complete Fractional CMO Alternative Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Growth Strategy System?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get CMO-level strategy delivered in 2 months.           </p>
          <Button size="lg" className="text-lg">
            Start Your Growth Strategy Sprint
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
