"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-[46rem] text-center mx-auto">
          <span data-slot="badge" className="items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 mb-4 inline-block bg-secondary text-secondary-foreground">
            Growth Strategy Sprints
          </span>
          <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl text-center">
            Build Your Growth System in 8 Weeks — Then Run It Without Us
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            For $1–5MM companies who need expert marketing strategy that actually gets implemented— without the $200K CMO commitment.
          </p>
        </div>
        <div className="bg-border h-px w-full mt-12 sm:mt-16" />
      </section>

      <section className="w-full px-4 sm:px-6 py-10 sm:py-14">
        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm mx-auto max-w-3xl">
          <CardHeader className="text-center">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground mx-auto w-fit">
              Our Philosophy
            </span>
            <CardTitle className="text-2xl">Clarity your team can actually run</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground space-y-4">
            <p>
              You have vision. Your team has horsepower. What’s missing is the mechanism that turns ambition into repeatable outcomes.
            </p>
            <p>
              We translate executive goals into measurable strategy, then operationalize it into dashboards and playbooks your team can use. The result? A growth system that outlives us — not another dependency.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
