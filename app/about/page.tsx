// app/about/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Target, Zap } from "lucide-react"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { ErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "Our Team: Two Growth Strategists | Pattern Growth",
  description:
    "Meet Ryan & William: two experienced growth strategists who have built their careers scaling companies. We translate C-suite vision into executable strategy.",
  keywords: ["growth strategists", "fractional CMO alternative", "growth strategy sprint", "Ryan Dunleavy", "William", "Pattern Growth team"],
  authors: [{ name: "Pattern Growth" }],
  creator: "Pattern Growth",
  publisher: "Pattern Growth",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/about",
    title: "Our Team: Two Growth Strategists | Pattern Growth",
    description:
      "Meet Ryan & William: two experienced growth strategists who have built their careers scaling companies. We translate C-suite vision into executable strategy.",
    siteName: "Pattern Growth",
    images: [
      {
        url: "https://www.patterngrowth.com/team/ryan.png",
        width: 400,
        height: 400,
        alt: "Ryan, Partner at Pattern Growth",
      },
      {
        url: "https://www.patterngrowth.com/team/william.png", 
        width: 400,
        height: 400,
        alt: "William, Partner at Pattern Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team: Two Growth Strategists | Pattern Growth",
    description:
      "Meet Ryan & William: two experienced growth strategists who have built their careers scaling companies. We translate C-suite vision into executable strategy.",
    images: ["https://www.patterngrowth.com/team/ryan.png"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
}

export default function AboutPage() {
  const team = [
    {
      name: "William",
      role: "Partner",
      bio: "William has spent his career helping growth-stage teams find structure in the chaos of growth. He believes strategy should be practical and usable, and he measures success by how confident teams feel once they own the plan.",
      highlight: "Turning ambitious goals into frameworks that actually make sense",
      photo: "/team/william.png",
      expertise: ["Strategic Planning", "Team Alignment", "Operational Systems"],
    },
    {
      name: "Ryan",
      role: "Partner", 
      bio: 'Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think. His focus is on translating complex marketing challenges into clear next steps.',
      highlight: 'Calling out when "more campaigns" isn\'t really the answer',
      photo: "/team/ryan.png",
      expertise: ["Marketing Strategy", "Data Analysis", "Growth Systems"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Practical Strategy",
      description: "We build frameworks your team can actually execute, not theoretical plans that gather dust."
    },
    {
      icon: Zap,
      title: "Fast Execution", 
      description: "8 weeks to deliver what others take 6 months to plan. We work fast because you need results."
    },
    {
      icon: Users,
      title: "Team Ownership",
      description: "You own the strategy, dashboards, and playbooks. No ongoing dependency on us."
    }
  ]

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pattern Growth",
    url: "https://www.patterngrowth.com",
    description: "Growth strategy sprints and fractional CMO alternative for growth-stage companies",
    founder: team.map(member => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      image: `https://www.patterngrowth.com${member.photo}`,
      worksFor: {
        "@type": "Organization",
        name: "Pattern Growth"
      }
    })),
    employee: team.map(member => ({
      "@type": "Person", 
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      image: `https://www.patterngrowth.com${member.photo}`
    }))
  }

  return (
    <ErrorBoundary>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'About' }]} />
          
          <div className="text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary" className="text-xs">Two Partners</Badge>
              <Badge variant="secondary" className="text-xs">Growth Strategists</Badge>
              <Badge variant="secondary" className="text-xs">8-Week Sprints</Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Meet the team behind Pattern Growth
            </h1>
            
            <div className="w-20 h-px bg-primary mx-auto" />
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Two experienced growth strategists who translate C-suite vision into executable strategy your team can actually run.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                <CardHeader className="text-center space-y-6 pb-6">
                  <div className="relative">
                    <div className="relative size-32 md:size-36 mx-auto">
                      <Image
                        src={member.photo}
                        alt={`${member.name}, ${member.role} at Pattern Growth`}
                        width={144}
                        height={144}
                        className="rounded-full object-cover ring-4 ring-muted/50 group-hover:ring-primary/20 transition-all duration-300"
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl md:text-3xl text-foreground">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    
                    <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm font-medium text-foreground italic">
                        "{member.highlight}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us different from traditional consulting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-md transition-shadow border-border/50">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/20 border-border/50">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="w-16 h-px bg-primary mx-auto" />
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why We Built Pattern Growth
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Together, William and Ryan built Pattern Growth as the alternative to the CMO-for-hire model and the agency treadmill.
                </p>
                <p className="text-base">
                  We saw too many growth-stage companies stuck between expensive fractional executives and templated agency work. 
                  So we created a project-based partner for leaders who want growth strategy their teams can actually run.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to work with us?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's discuss how our 8-week growth strategy sprint can help your team build the systems and clarity you need to scale.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto">
              <Link 
                href="https://cal.com/pattern-growth/30min?overlayCalendar=true&utm_source=site&utm_medium=about_cta&utm_campaign=about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Schedule a 30-minute call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="font-semibold px-8 py-3 h-auto">
              <Link href="/process" className="flex items-center gap-2">
                See our 8-week process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              No sales pitch. Just a conversation about your growth challenges.
            </p>
          </div>
        </div>
      </section>
      </div>
    </ErrorBoundary>
  )
}
