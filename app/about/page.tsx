"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          We exist to turn growth vision into systems that last.
        </h1>
      </section>

      <section className="space-y-4 text-muted-foreground text-base leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">Why Pattern Growth Exists</h2>
        <p>
          Every growth-stage company reaches a point where ambition outpaces systems.
          Leaders set bold goals. Teams hustle to execute. Somewhere in between, momentum breaks.
        </p>
        <p>
          Pattern Growth was created to close that gap. We don’t just design strategy.
          We build frameworks, dashboards, and processes your team can own long after we’ve stepped out.
        </p>
      </section>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Our Philosophy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Strategy should be usable. If it doesn’t fit into your team’s daily work, it won’t matter.</p>
          <p>Growth should outlive consultants. Success means your team can keep moving without us.</p>
          <p>Clarity beats noise. The right decisions come from seeing the whole picture, not chasing every signal.</p>
        </CardContent>
      </Card>

      <Separator />

      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-foreground">The Partners</h2>

        <Card>
          <CardContent className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <img
              src="/team/william.png"
              alt="William"
              className="aspect-square w-24 sm:w-28 rounded-full border"
            />
            <div className="space-y-2 text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">William — Partner</h3>
              <p>
                William has spent his career helping growth-stage teams find structure in the chaos of growth.
                He believes strategy should be practical and usable, and he measures success by how confident
                teams feel once they own the plan. Clients know him for turning ambitious goals into frameworks
                that actually make sense.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <img
              src="/team/ryan.png"
              alt="Ryan"
              className="aspect-square w-24 sm:w-28 rounded-full border"
            />
            <div className="space-y-2 text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">Ryan — Partner</h3>
              <p>
                Ryan is driven by curiosity. He is usually the one asking the question that makes everyone pause and think.
                His focus is on translating complex marketing challenges into clear next steps, and he has a reputation
                for calling out when “more campaigns” isn’t really the answer. His goal is always the same:
                clarity that teams can run with.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-muted-foreground mt-4">
          Together, William and Ryan built Pattern Growth as the alternative to the CMO-for-hire model
          and the agency treadmill: a project-based partner for leaders who want growth strategy their teams can actually run.
        </p>
      </section>
    </main>
  )
}
