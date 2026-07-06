import { Metadata } from 'next'
import Link from 'next/link'
import { GetStartedButton } from '@/components/ui/get-started-button'
import { createServiceSchema, createBreadcrumbListSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Fractional Marketing Services: Retainers vs Complete Sprints',
  description: 'Fractional marketing services: part-time expertise on retainer. Compare with 8-week sprints delivering complete systems with full ownership transfer.',
  openGraph: {
    type: 'website',
    url: 'https://www.patterngrowth.com/fractional-marketing-services',
    title: 'Fractional Marketing Services: Retainers vs Complete Sprints',
    description: 'Fractional marketing services: part-time expertise on retainer. Compare with 8-week sprints delivering complete systems with full ownership transfer.',
    siteName: 'Pattern Growth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Marketing Services: Retainers vs Complete Sprints',
    description: 'Fractional marketing services: part-time expertise on retainer. Compare with 8-week sprints delivering complete systems with full ownership transfer.'
  },
  alternates: {
    canonical: 'https://www.patterngrowth.com/fractional-marketing-services'
  },
  robots: {
    index: true,
    follow: true
  }
}

const serviceSchema = createServiceSchema({
  name: "Fractional Marketing Services Analysis",
  description: "A clear analysis of fractional marketing services and pricing, and how a senior-led, embedded growth strategy partnership compares for companies needing strategic marketing support.",
  url: "https://www.patterngrowth.com/fractional-marketing-services",
  provider: "Pattern Growth"
});

const breadcrumbSchema = createBreadcrumbListSchema([
  { label: 'Home', href: '/', position: 1 },
  { label: 'Fractional Marketing Services', position: 2 }
]);

export default function FractionalMarketingServicesPage() {
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
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fractional Marketing Services: Strategy + Execution Combined
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fractional marketing services blend strategic leadership with tactical execution at $8K-25K/month. Learn scope differences from fractional CMOs and alternatives that deliver faster.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Are Fractional Marketing Services?</h2>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Fractional marketing services combine strategic marketing leadership with hands-on tactical execution. Unlike <Link href="/fractional-cmo-services" className="text-primary hover:underline">pure fractional CMO services</Link> that focus on strategy and oversight, fractional marketing teams handle both planning and implementation.
          </p>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Characteristics</h3>
            <ul className="space-y-3 text-foreground">
              <li>• Strategic direction plus campaign execution</li>
              <li>• Team of specialists rather than single executive</li>
              <li>• $8K-25K/month depending on service scope</li>
              <li>• 6-12 month minimum engagements typical</li>
              <li>• Replaces both fractional CMO and agency</li>
            </ul>
          </div>

          <p className="text-lg text-foreground leading-relaxed">
            Fractional marketing services appeal to companies needing both strategic guidance and execution bandwidth but lacking internal resources for full marketing teams.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Fractional Marketing Services vs. Fractional CMO</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Factor</th>
                  <th className="border border-border p-3 text-left">Fractional CMO</th>
                  <th className="border border-border p-3 text-left">Fractional Marketing Services</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-semibold">Primary Role</td>
                  <td className="border border-border p-3">Strategic leadership</td>
                  <td className="border border-border p-3">Strategy + execution</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Deliverables</td>
                  <td className="border border-border p-3">Frameworks, guidance, oversight</td>
                  <td className="border border-border p-3">Plans + implemented campaigns</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Team Structure</td>
                  <td className="border border-border p-3">Single executive</td>
                  <td className="border border-border p-3">Multi-specialist team</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">You Need</td>
                  <td className="border border-border p-3">Execution resources required</td>
                  <td className="border border-border p-3">Minimal internal requirements</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Monthly Investment</td>
                  <td className="border border-border p-3">$5K-15K</td>
                  <td className="border border-border p-3">$8K-25K</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Best For</td>
                  <td className="border border-border p-3">Companies with execution teams</td>
                  <td className="border border-border p-3">Companies needing full service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-foreground leading-relaxed">
            The higher cost of fractional marketing services reflects broader scope. You're buying a full marketing function, not just executive guidance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Fractional Marketing Services Include</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Planning and Direction</h3>
              <p className="text-foreground mb-3 leading-relaxed">
                Like fractional CMOs, these services begin with strategy development—positioning, ICP definition, channel prioritization, messaging frameworks. The strategic foundation guides all tactical work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Campaign Development and Execution</h3>
              <p className="text-foreground mb-3 leading-relaxed">
                Unlike pure advisory, fractional marketing teams build and launch campaigns. This includes content creation, ad development, landing page design, email sequences, and campaign management.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Typical execution work:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Content writing and design</li>
                  <li>• Ad creation and management</li>
                  <li>• Landing page development</li>
                  <li>• Email marketing campaigns</li>
                  <li>• Social media management</li>
                  <li>• SEO and content marketing</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Marketing Technology Management</h3>
              <p className="text-foreground mb-3 leading-relaxed">
                Fractional teams often handle martech stack management—selecting tools, implementing systems, integrating data sources, and ensuring technical infrastructure supports marketing goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Performance Tracking and Optimization</h3>
              <p className="text-foreground mb-3 leading-relaxed">
                Ongoing measurement, reporting, and optimization come standard. Teams monitor performance, run experiments, optimize campaigns based on data, and report results to leadership.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Team Coordination and Vendor Management</h3>
              <p className="text-foreground leading-relaxed">
                When specialized needs arise, fractional marketing services coordinate with external vendors—designers, developers, PR firms—ensuring integrated execution across all marketing functions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Fractional Marketing Services Pricing Models</h2>
          
          <div className="space-y-6 mb-8">
            <div className="border border-border p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-foreground">Basic Package</h3>
                <span className="text-xl font-bold text-foreground">$8K-12K/month</span>
              </div>
              <p className="text-foreground text-sm mb-3">
                Strategic direction plus limited execution support. Typically includes strategy development, 1-2 campaign launches monthly, basic reporting, and vendor coordination.
              </p>
              <p className="text-xs text-muted-foreground">
                Best for: Companies needing strategic guidance with some execution help
              </p>
            </div>

            <div className="border border-border p-6 rounded-lg bg-accent/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-foreground">Standard Package</h3>
                <span className="text-xl font-bold text-foreground">$12K-18K/month</span>
              </div>
              <p className="text-foreground text-sm mb-3">
                Full-service marketing including strategy, multi-channel campaigns, content creation, paid media management, marketing automation, and comprehensive reporting.
              </p>
              <p className="text-xs text-muted-foreground">
                Best for: Most growth-stage companies replacing full marketing function
              </p>
            </div>

            <div className="border border-border p-6 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-foreground">Premium Package</h3>
                <span className="text-xl font-bold text-foreground">$18K-25K+/month</span>
              </div>
              <p className="text-foreground text-sm mb-3">
                Comprehensive marketing leadership with dedicated team, advanced analytics, complex campaign execution, multiple channel management, and C-level strategic support.
              </p>
              <p className="text-xs text-muted-foreground">
                Best for: Companies needing extensive marketing operations with minimal internal resources
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">What Drives Pricing Variation</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li>• Number of channels managed simultaneously</li>
              <li>• Complexity and frequency of campaign launches</li>
              <li>• Content creation volume and type</li>
              <li>• Technical implementation requirements</li>
              <li>• Reporting sophistication and frequency</li>
              <li>• Level of strategic support included</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">When Fractional Marketing Services Make Sense</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-accent/30 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Choose fractional marketing services if:</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• You lack internal marketing resources entirely</li>
                <li>• You need both strategy AND execution</li>
                <li>• Building internal team isn't feasible near-term</li>
                <li>• You want single point of accountability</li>
                <li>• Budget supports $10K-20K monthly ongoing</li>
                <li>• You're comfortable with 12+ month commitment</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg border-l-4 border-border">
              <h3 className="font-semibold text-foreground mb-4">Consider a senior partnership if:</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>• You have a strong execution team and need strategy</li>
                <li>• You want a custom strategy your team owns</li>
                <li>• You want a senior, embedded partner—not a vendor</li>
                <li>• You need a working foundation in 6-8 weeks</li>
                <li>• Deep understanding of your business matters</li>
                <li>• You want an engagement scoped to your needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-primary/10 border-2 border-primary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Pattern Growth Partnership</h2>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Fractional marketing services solve the resource problem, but they often work at a distance. Pattern Growth takes a different approach: senior partners embed in your business, learn it deeply, and build a custom strategy your team owns—so the value stays with you.
          </p>

          <div className="bg-background p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Fractional Marketing Services</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li>• $12K-20K/month × 12 months</li>
                  <li>• $144K-240K annual investment</li>
                  <li>• Strategy + execution combined</li>
                  <li>• Ongoing relationship required</li>
                  <li>• Vendor-dependent operations</li>
                  <li>• Stops when contract ends</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-4 rounded">
                <h3 className="font-semibold text-foreground mb-3">Pattern Growth Partnership</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li>• Custom-scoped to your needs</li>
                  <li>• 8 weeks to complete</li>
                  <li>• Senior partners, deeply embedded</li>
                  <li>• A custom strategy your team owns</li>
                  <li>• Systems that stay with you</li>
                  <li>• A partner you can call on</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground">
              Senior expertise. Deep understanding. A custom strategy your team owns—and a partner you can call on.
            </p>
            <GetStartedButton />
            <Link 
              href="/#contact" 
              className="inline-block text-primary hover:underline font-medium"
            >
              Schedule Fit Call →
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Evaluating Fractional Marketing Service Providers</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground mb-2">What deliverables do I actually own?</h3>
              <p className="text-foreground text-sm">
                Most fractional marketing services provide execution but limited documentation. When contracts end, processes and knowledge leave with the team. Demand frameworks, playbooks, and systems you can run independently.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground mb-2">Who's actually doing the work?</h3>
              <p className="text-foreground text-sm">
                Some providers use senior strategists for sales but junior execution teams for delivery. Understand exactly who handles strategy vs. implementation and their experience levels.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground mb-2">What's the transition plan if this ends?</h3>
              <p className="text-foreground text-sm">
                Ask how knowledge transfers, what documentation you receive, and whether you can continue execution independently. Poor handoff processes create expensive dependencies.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground mb-2">How do you measure success?</h3>
              <p className="text-foreground text-sm">
                Demand specific KPIs, reporting cadence, and accountability structures. Vague success criteria enable mediocre performance without consequences.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What's the difference between fractional marketing services and agencies?</h3>
              <p className="text-foreground leading-relaxed">
                Fractional marketing services act as your marketing department, providing strategy plus execution. Agencies execute campaigns you direct. Fractional services offer strategic leadership agencies don't, but cost more than pure execution vendors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How much do fractional marketing services typically cost?</h3>
              <p className="text-foreground leading-relaxed">
                Typical pricing ranges from $8K-25K monthly depending on scope, channels managed, and service complexity. Basic packages start around $8K-12K, standard full-service runs $12K-18K, and premium comprehensive services reach $18K-25K+. Most require 6-12 month minimum commitments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Can fractional marketing services replace a full marketing team?</h3>
              <p className="text-foreground leading-relaxed">
                Fractional services can replace or supplement internal marketing teams for companies lacking resources to hire full departments. They provide strategy, execution, and reporting that would typically require multiple full-time employees, but you remain dependent on the vendor relationship.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">What happens when fractional marketing contracts end?</h3>
              <p className="text-foreground leading-relaxed">
                When contracts end, execution stops unless you've built internal capabilities or hired replacements. The transition quality depends on documentation and knowledge transfer provided. Many companies find themselves needing to re-engage vendors or start from scratch, creating expensive cycles.
              </p>
            </div>
          </div>
        </section>

      </article>
      </div>
    </>
  )
}
