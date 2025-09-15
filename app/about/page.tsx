import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    {
      name: "William",
      role: "Partner",
      bio: "William has spent his career helping growth-stage teams find structure in the chaos of growth. He believes strategy should be practical and usable, and he measures success by how confident teams feel once they own the plan. Clients know him for turning ambitious goals into frameworks that actually make sense.",
      photo: "/team/william.png"
    },
    {
      name: "Ryan",
      role: "Partner",
      bio: "Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think. His focus is on translating complex marketing challenges into clear next steps, and he has a reputation for calling out when \"more campaigns\" isn't really the answer. His goal is always the same: clarity that teams can run with.",
      photo: "/team/ryan.png"
    }
  ]

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
        <div className="max-w-5xl mx-auto">
          {/* Team Cards */}
          <div className="grid gap-8 md:gap-12">
            {team.map((member, index) => (
              <div key={member.name}>
                <Card className="p-8 md:p-10">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-[128px,1fr] md:gap-8 md:items-start">
                    {/* Avatar - Fixed size, top-aligned on desktop */}
                    <div className="justify-self-center md:justify-self-start">
                      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring ring-muted/20 bg-muted/20 shrink-0">
                        <Image
                          src={member.photo}
                          alt={`${member.name} headshot`}
                          fill
                          sizes="(min-width: 768px) 128px, 112px"
                          className="object-cover object-center"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Text Content - Top-aligned with avatar on desktop */}
                    <div className="space-y-3 text-center md:text-left">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {member.name}
                        </h2>
                        <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider mt-1">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {/* Divider between cards (not after last) */}
                {index < team.length - 1 && (
                  <div className="relative my-8 md:my-12">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-border"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 md:mt-24 pt-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
                Together, William and Ryan built Pattern Growth as the alternative to the CMO-for-hire model 
                and the agency treadmill: a project-based partner for leaders who want growth strategy their 
                teams can actually run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}