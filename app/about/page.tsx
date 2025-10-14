import type { Metadata } from 'next'
'use client'

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {

export const metadata: Metadata = {
  title: 'Our Team: Two Growth Strategists | Pattern Growth',
  description: 'Meet Ryan & William: two experienced growth strategists who've built their careers scaling companies. We translate C-suite vision into executable strategy.',
  openGraph: {
    type: 'website',
    url: 'https://www.patterngrowth.com/about',
    title: 'Our Team: Two Growth Strategists | Pattern Growth',
    description: 'Meet Ryan & William: two experienced growth strategists who've built their careers scaling companies. We translate C-suite vision into executable strategy.',
    siteName: 'Pattern Growth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team: Two Growth Strategists | Pattern Growth',
    description: 'Meet Ryan & William: two experienced growth strategists who've built their careers scaling companies. We translate C-suite vision into executable strategy.'
  },
  alternates: {
    canonical: 'https://www.patterngrowth.com/about'
  },
  robots: {
    index: true,
    follow: true
  }
}
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function AboutPage() {
  const team = [
    {
      name: "William",
      role: "Partner",
      bio: "William has spent his career helping growth-stage teams find structure in the chaos of growth. He believes strategy should be practical and usable, and he measures success by how confident teams feel once they own the plan. Clients know him for turning ambitious goals into frameworks that actually make sense.",
      photo: "/team/william.png",
    },
    {
      name: "Ryan",
      role: "Partner",
      bio: "Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think. His focus is on translating complex marketing challenges into clear next steps, and he has a reputation for calling out when \"more campaigns\" isn't really the answer. His goal is always the same: clarity that teams can run with.",
      photo: "/team/ryan.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Team
          </h1>
          <div className="w-16 h-px bg-foreground mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the partners behind Pattern Growth
          </p>
        </div>
      </section>

      {/* Bento Grid Team Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* William's Card - Takes 2 columns on lg+ */}
            <Card className="md:col-span-1 lg:col-span-2 p-6 md:p-8 border border-border/50 hover:border-border transition-all duration-300 bg-background">
              <CardHeader className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="size-24 md:size-28 bg-muted/20 overflow-hidden transition duration-300">
                  <AvatarImage src={team[0].photo} alt={`${team[0].name} headshot`} />
                  <AvatarFallback>{team[0].name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                    {team[0].name}
                  </CardTitle>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {team[0].role}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
                  {team[0].bio}
                </p>
              </CardContent>
            </Card>

            {/* Ryan's Card - Takes 2 columns on lg+ */}
            <Card className="md:col-span-1 lg:col-span-2 p-6 md:p-8 border border-border/50 hover:border-border transition-all duration-300 bg-background">
              <CardHeader className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="size-24 md:size-28 bg-muted/20 overflow-hidden transition duration-300">
                  <AvatarImage src={team[1].photo} alt={`${team[1].name} headshot`} />
                  <AvatarFallback>{team[1].name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                    {team[1].name}
                  </CardTitle>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {team[1].role}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-center">
                  {team[1].bio}
                </p>
              </CardContent>
            </Card>

            {/* Bottom Section - Full width */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8">
              <Card className="p-8 md:p-12 border border-border/50 bg-background">
                <div className="text-center">
                  <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                    Together, William and Ryan built Pattern Growth as the alternative to the
                    CMO-for-hire model and the agency treadmill: a project-based partner for
                    leaders who want growth strategy their teams can actually run.
                  </p>
                </div>
              </Card>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}