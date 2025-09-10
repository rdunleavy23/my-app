import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-12 md:px-6 lg:px-8">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Strategy, systems, and design—for founders who want momentum
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A two-month sprint to turn your vision into a high-leverage operating system.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild className="text-base px-6 py-3">
            <Link href="/about">Learn more</Link>
          </Button>
          <Button asChild variant="outline" className="text-base px-6 py-3">
            <Link href="/book">Book intro call</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 max-w-2xl w-full text-left">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          What we do in 8 weeks
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We don’t just design strategy. We operationalize it into systems your team can actually run.
        </p>
        <div className="mt-6 w-full bg-muted rounded-lg overflow-hidden text-sm">
          <div className="grid grid-cols-3 text-center font-semibold text-white bg-gray-800">
            <div className="py-2">Weeks 1–2</div>
            <div className="py-2 bg-gray-700">Weeks 3–4</div>
            <div className="py-2">Weeks 5–8</div>
          </div>
          <div className="bg-white p-4 text-left text-sm text-muted-foreground">
            • Extract vision and translate it into measurable objectives<br />
            • Map customer journeys to surface the highest-impact opportunities
          </div>
        </div>
      </section>
    </main>
  )
}
