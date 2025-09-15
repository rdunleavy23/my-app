'use client'

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const team = [
    {
      name: "William",
      role: "Partner",
      bio: "William has spent his career helping growth-stage teams find structure in the chaos of growth. He believes strategy should be practical and usable, and he measures success by how confident teams feel once they own the plan. Clients know him for turning ambitious goals into frameworks that actually make sense.",
      photo: "/team/william.png",
      skills: ["Clarity", "Strategic Ops", "Executive Alignment"],
    },
    {
      name: "Ryan",
      role: "Partner",
      bio: "Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think. His focus is on translating complex marketing challenges into clear next steps, and he has a reputation for calling out when \"more campaigns\" isn't really the answer. His goal is always the same: clarity that teams can run with.",
      photo: "/team/ryan.png",
      skills: ["Messaging", "CMO Coaching", "Go-To-Market"],
    },
  ]

  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the partners behind Pattern Growth
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between ${
                  index === 0 ? "xl:col-span-2 xl:row-span-2" : ""
                }`}
              >
                <CardHeader className="items-center text-center">
                  <div className="flex justify-center">
                    <Avatar className="size-28 md:size-32 ring ring-muted/20 bg-muted/20 overflow-hidden grayscale group-hover:grayscale-0 transition duration-300">
                      <AvatarImage src={member.photo} alt={`${member.name} headshot`} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </CardHeader>

                <CardContent className="text-center md:text-left space-y-4">
                  <p
                    className={`text-base md:text-lg leading-relaxed text-muted-foreground ${
                      expanded[member.name] ? "" : "line-clamp-3"
                    }`}
                  >
                    {member.bio}
                  </p>
                  <button
                    onClick={() => toggle(member.name)}
                    className="text-sm text-primary underline underline-offset-4 transition hover:text-primary/80"
                  >
                    {expanded[member.name] ? "Show less" : "Read more"}
                  </button>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 md:mt-24 pt-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
                Together, William and Ryan built Pattern Growth as the alternative to the
                CMO-for-hire model and the agency treadmill: a project-based partner for
                leaders who want growth strategy their teams can actually run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
