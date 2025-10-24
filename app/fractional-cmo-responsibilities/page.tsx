import { Metadata } from 'next'
import Link from 'next/link'
import { GetStartedButton } from '@/components/ui/get-started-button'
import { createServiceSchema, createBreadcrumbListSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Fractional CMO Responsibilities & Deliverables',
  description: 'What does a fractional CMO do? Compare traditional fractional CMO responsibilities with Pattern Growth\'s focused sprint deliverables and complete system ownership.',
  openGraph: {
    type: 'website',
    url: 'https://www.patterngrowth.com/fractional-cmo-responsibilities',
    title: 'Fractional CMO Responsibilities & Deliverables',
    description: 'What does a fractional CMO do? Compare traditional fractional CMO responsibilities with Pattern Growth\'s focused sprint deliverables and complete system ownership.',
    siteName: 'Pattern Growth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO Responsibilities & Deliverables',
    description: 'What does a fractional CMO do? Compare traditional fractional CMO responsibilities with Pattern Growth\'s focused sprint deliverables and complete system ownership.'
  },
  alternates: {
    canonical: 'https://www.patterngrowth.com/fractional-cmo-responsibilities'
  },
  robots: {
    index: true,
    follow: true
  }
}

const serviceSchema = createServiceSchema({
  name: "Fractional CMO Responsibilities Analysis",
  description: "Comprehensive analysis of fractional CMO responsibilities, deliverables, and comparison with project-based alternatives for strategic marketing leadership.",
  url: "https://www.patterngrowth.com/fractional-cmo-responsibilities",
  provider: "Pattern Growth"
});

const breadcrumbSchema = createBreadcrumbListSchema([
  { label: 'Home', href: '/', position: 1 },
  { label: 'Fractional CMO Responsibilities', position: 2 }
]);

export default function FractionalCMOResponsibilitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-background">
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fractional CMO Responsibilities: What They Do (And Don't Do)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fractional CMOs handle strategic marketing leadership—positioning, team oversight, measurement systems. They don't execute campaigns. Understanding scope prevents costly mismatches.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Core Fractional CMO Responsibilities</h2>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Fractional CMOs operate at the strategic and oversight level. They set direction, guide decisions, and ensure marketing aligns with business goals—but they don't build campaigns or manage daily operations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-accent/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">✓ Fractional CMOs DO:</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• Develop marketing strategy and positioning</li>
                <li>• Design measurement frameworks and KPIs</li>
                <li>• Guide team structure and hiring decisions</li>
                <li>• Oversee agency and vendor relationships</li>
                <li>• Present to board and executive team</li>
                <li>• Advise on budget allocation and priorities</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg border-l-4 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">✗ Fractional CMOs DON'T:</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• Build campaigns or create content</li>
                <li>• Manage daily team operations</li>
                <li>• Handle tactical marketing execution</li>
                <li>• Provide 24/7 availability</li>
                <li>• Replace entire marketing function</li>
                <li>• Guarantee specific growth outcomes</li>
              </ul>
            </div>
          </div>

          <p className="text-foreground italic">
            Critical distinction: Fractional CMOs guide what and why. Your internal team or agencies handle how and when.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Strategy Development Responsibilities</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Market Positioning and Competitive Analysis</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Fractional CMOs define how your company positions against competitors. They analyze market dynamics, identify differentiation opportunities, and articulate value propositions that resonate with target buyers.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Typical deliverables:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Competitive positioning maps and analysis</li>
                  <li>• Value proposition frameworks</li>
                  <li>• Messaging hierarchy documents</li>
                  <li>• Market segmentation strategies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Customer Segmentation and ICP Definition</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Defining ideal customer profiles drives efficient marketing. Fractional CMOs analyze customer data, identify high-value segments, and create targeting frameworks that guide channel selection and campaign development.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Typical deliverables:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• ICP documentation with firmographics and psychographics</li>
                  <li>• Buyer persona profiles</li>
                  <li>• Customer journey maps</li>
                  <li>• Disqualification criteria for sales efficiency</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Channel Strategy and Budget Allocation</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Determining which channels deserve investment requires strategic judgment. Fractional CMOs evaluate channel performance, allocate budgets across paid, owned, and earned media, and prioritize based on expected ROI.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Typical deliverables:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Channel strategy documents with prioritization</li>
                  <li>• Budget allocation models and recommendations</li>
                  <li>• Test-and-learn frameworks for new channels</li>
                  <li>• Expected ROI projections by channel</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Campaign Architecture and Messaging</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                While fractional CMOs don't execute campaigns, they design campaign architecture—the strategic framework your team executes against. This includes messaging pillars, campaign themes, and creative direction.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Typical deliverables:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Campaign templates and frameworks</li>
                  <li>• Messaging guides and brand voice documentation</li>
                  <li>• Creative briefs and strategic direction</li>
                  <li>• Campaign calendar and sequencing strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Team Leadership Responsibilities</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Team Structure and Hiring</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Fractional CMOs advise on team composition, when to hire, and what roles to prioritize. They provide hiring criteria, interview guidance, and recommendations on internal vs. agency resource allocation.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-foreground">
                  Note: They guide hiring decisions but don't manage daily team operations. Your internal leadership handles people management, performance reviews, and day-to-day coordination.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Agency Selection and Vendor Management</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Choosing the right agencies requires evaluation of capabilities, cultural fit, and pricing models. Fractional CMOs lead RFP processes, evaluate vendors, negotiate contracts, and provide oversight to ensure agency performance meets expectations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Process Documentation and Optimization</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Efficient marketing requires documented processes. Fractional CMOs establish workflows for campaign development, approval chains, budget management, and reporting cadences that scale as teams grow.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Process areas they typically address:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Campaign planning and approval workflows</li>
                  <li>• Content creation and review processes</li>
                  <li>• Budget request and allocation procedures</li>
                  <li>• Performance review and reporting cadences</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Skill Development and Coaching</h3>
              <p className="text-foreground leading-relaxed">
                While not providing daily management, fractional CMOs offer strategic coaching to marketing leaders. They provide frameworks for decision-making, challenge thinking, and develop internal strategic capabilities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Measurement and Analytics Responsibilities</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">KPI Framework and Reporting Cadence</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Defining what to measure and how to report it drives accountability. Fractional CMOs establish KPI hierarchies, set targets, determine reporting frequency, and ensure metrics align with business objectives.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Framework components:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• North star metrics tied to revenue</li>
                  <li>• Leading and lagging indicator identification</li>
                  <li>• Dashboard specifications and data sources</li>
                  <li>• Weekly, monthly, quarterly reporting templates</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Dashboard Implementation and Data Integration</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Marketing data scattered across platforms prevents good decisions. Fractional CMOs specify dashboard requirements, identify data sources to connect, and design views that surface insights executives need.
              </p>
              <p className="text-foreground text-sm italic">
                Important distinction: They specify what dashboards should show, but typically don't build them. Implementation falls to marketing ops, agencies, or consultants with technical skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Attribution Modeling and ROI Analysis</h3>
              <p className="text-foreground mb-4 leading-relaxed">
                Understanding which marketing activities drive pipeline requires attribution frameworks. Fractional CMOs design attribution approaches, interpret data, and guide investment decisions based on performance analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Board Reporting and Stakeholder Communication</h3>
              <p className="text-foreground leading-relaxed">
                Translating marketing performance into business language boards understand is a critical responsibility. Fractional CMOs prepare executive presentations, explain marketing investments, and connect activities to revenue outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Fractional CMOs Don't Handle</h2>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Understanding what fractional CMOs don't do is as important as knowing their responsibilities. Mismatched expectations create expensive disappointments.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold text-foreground mb-2">Tactical Campaign Execution</h3>
              <p className="text-foreground text-sm">
                Fractional CMOs don't write copy, design graphics, build landing pages, or manage ad accounts. They provide strategic direction; your team or agencies execute.
              </p>
            </div>

            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold text-foreground mb-2">Daily Team Management</h3>
              <p className="text-foreground text-sm">
                They don't handle day-to-day people management, resolve interpersonal conflicts, conduct 1:1s, or manage performance improvement plans. Internal leadership handles operational management.
              </p>
            </div>

            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-foreground text-sm">
                Part-time consultants work with 3-5 companies. You get scheduled time and structured check-ins, not immediate access during crises or urgent situations.
              </p>
            </div>

            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold text-foreground mb-2">Technical Implementation</h3>
              <p className="text-foreground text-sm">
                They specify what systems need but don't configure marketing automation, integrate data sources, or build technical infrastructure. Marketing ops or technical resources handle implementation.
              </p>
            </div>

            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold text-foreground mb-2">Guaranteed Outcomes</h3>
              <p className="text-foreground text-sm">
                Fractional CMOs provide strategic guidance, not performance guarantees. Marketing results depend on execution quality, product-market fit, pricing, sales effectiveness, and market conditions beyond their control.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-primary/10 border-2 border-primary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">Alternative: Getting Deliverables You Own</h2>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Fractional CMO responsibilities produce valuable strategic guidance—but that guidance often remains consultant-dependent. What if you could get the same deliverables as documented architecture you own?
          </p>

          <div className="bg-background p-6 rounded-lg mb-6">
            <p className="font-semibold text-foreground mb-4">Growth Strategy Sprints deliver all core CMO responsibilities as permanent deliverables:</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-foreground">
                <li>• Strategy docs (not meeting notes)</li>
                <li>• Competitive positioning frameworks</li>
                <li>• ICP documentation and journey maps</li>
                <li>• Channel strategy and budget models</li>
                <li>• Campaign templates and playbooks</li>
              </ul>
              <ul className="space-y-2 text-foreground">
                <li>• Working dashboard with data integration</li>
                <li>• KPI frameworks and reporting templates</li>
                <li>• Process documentation for scale</li>
                <li>• Team training for independent execution</li>
                <li>• Complete knowledge transfer, no dependency</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground">
              8 weeks. Fixed fee. You own everything.
            </p>
            <GetStartedButton />
            <Link href="/fractional-cmo-services" className="inline-block text-primary hover:underline font-medium">
              Compare models →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What does a fractional CMO actually do?</h3>
              <p className="text-foreground leading-relaxed">
                Fractional CMOs develop marketing strategy, design measurement systems, guide team structure, oversee vendors, and present to boards. They operate at strategic and oversight levels but don't execute campaigns or manage daily operations. Think strategic direction, not tactical execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Do fractional CMOs execute marketing campaigns?</h3>
              <p className="text-foreground leading-relaxed">
                No. Fractional CMOs provide strategic direction and campaign architecture, but your internal team or agencies handle execution. They design what campaigns should accomplish and how to structure them—not build landing pages, write copy, or manage ad accounts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How much time do fractional CMOs spend with clients?</h3>
              <p className="text-foreground leading-relaxed">
                Typical fractional CMO engagements involve 10-20 hours weekly, structured as strategic meetings, planning sessions, vendor oversight, and board preparation. They work with 3-5 companies simultaneously, so availability is scheduled rather than immediate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Do fractional CMOs manage marketing teams?</h3>
              <p className="text-foreground leading-relaxed">
                Fractional CMOs provide strategic guidance and coaching but don't handle daily team management, performance reviews, or operational oversight. They advise on team structure and hiring but leave people management to internal leadership.
              </p>
            </div>
          </div>
        </section>

      </article>
      </div>
    </>
  )
}
