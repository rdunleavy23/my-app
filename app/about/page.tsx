// app/about/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Target, Zap } from "lucide-react"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { ErrorBoundary } from "@/components/error-boundary"
import { createPersonSchema, createOrganizationSchema, createBreadcrumbListSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title: "Our Team: Two Growth Strategists | Pattern Growth",
  description:
    "Meet Ryan & William: two experienced growth strategists who have built their careers scaling companies. We translate C-suite vision into executable strategy.",
  keywords: ["growth strategists", "fractional CMO alternative", "growth strategy sprint", "Ryan Dunleavy", "William", "Pattern Growth team"],
  authors: [{ name: "Pattern Growth" }],
  creator: "Pattern Growth",
  publisher: "Pattern Growth",
  alternates: { canonical: "https://www.patterngrowth.com/about" },
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
  const ryanSchema = createPersonSchema({
    name: "Ryan Dunleavy",
    jobTitle: "Growth Strategist & Partner",
    description: "Ryan is driven by curiosity. He\'s usually the one asking the question that makes everyone pause. He focuses on turning complex marketing challenges into clear next steps.",
    image: "https://www.patterngrowth.com/team/ryan.png"
  });

  const williamSchema = createPersonSchema({
    name: "William",
    jobTitle: "Growth Strategist & Partner", 
    description: "William has spent his career helping growth-stage teams find structure in the chaos. He thinks strategy should be practical and usable—not theoretical. He measures success by how confident your team feels once they own the plan.",
    image: "https://www.patterngrowth.com/team/william.png"
  });

  const organizationSchema = createOrganizationSchema({
    name: "Pattern Growth",
    description: "Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.",
    url: "https://www.patterngrowth.com",
    sameAs: ["https://www.patterngrowth.com"]
  });

  const breadcrumbSchema = createBreadcrumbListSchema([
    { label: 'Home', href: '/', position: 1 },
    { label: 'About', position: 2 }
  ]);

  const team = [
    {
      name: "William",
      role: "Partner",
      bio: "William has spent his career helping growth-stage teams find structure in the chaos. He thinks strategy should be practical and usable—not theoretical. He measures success by how confident your team feels once they own the plan.",
      photo: "/team/william.png",
    },
    {
      name: "Ryan",
      role: "Partner", 
      bio: 'Ryan is driven by curiosity. He\'s usually the one asking the question that makes everyone pause. He focuses on turning complex marketing challenges into clear next steps.',
      photo: "/team/ryan.png",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Strategy You Can Actually Use",
      description: "We build frameworks your team can execute, not theoretical plans that sit in a drawer."
    },
    {
      icon: Zap,
      title: "We Work Fast", 
      description: "8 weeks to deliver what others take 6 months to plan. We work fast because you need results now, not next quarter."
    },
    {
      icon: Users,
      title: "You Own Everything",
      description: "You own the strategy, dashboards, and playbooks. No dependency on us. Ever."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ryanSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(williamSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'About' }]} />
          
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              Meet the Team
            </h1>
            
            <div className="w-20 h-px bg-primary mx-auto" />
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Two growth strategists who turn C-suite vision into strategy your team can actually execute.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <Card key={member.name} className="group card-hover-lift border-border/50">
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
                        fetchPriority={index === 0 ? "high" : "auto"}
                        loading={index === 0 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us different
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center card-hover-lift border-border/50">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
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
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/20 border-border/50">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="w-16 h-px bg-primary mx-auto" />
              
              <h2 className="text-3xl font-bold text-foreground">
                Why We Built Pattern Growth
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  We built Pattern Growth as the alternative to the CMO-for-hire model and the agency treadmill.
                </p>
                <p className="text-base">
                  We saw too many growth-stage companies stuck between expensive fractional CMOs and cookie-cutter agency work. 
                  So we created something different: a project-based partner for leaders who want strategy their team can actually execute.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Let's talk about whether an 8-week sprint makes sense for your team.
            </p>
          </div>
          
          <GetStartedButton className="btn-hover-lift" />
          
        </div>
      </section>
      </div>
    </ErrorBoundary>
  )
}
