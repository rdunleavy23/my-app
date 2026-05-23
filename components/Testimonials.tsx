import { Card } from "@/components/ui/card"
import { MarketingSection } from "@/components/marketing/MarketingSection"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  highlight: string
  name: string
  title: string
  company: string
  initials: string
  highlightClass: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Solo marketing is hard when you're juggling strategy, execution, and constantly shifting priorities. Having a marketing partner with the ability to zoom out and also get tactical is hard to find. Pattern Growth helped elevate our strategy, and they provided strong guidance on the efforts that would actually move the needle.",
    highlight: "zoom out and also get tactical",
    name: "Kelsee McGee",
    title: "Director of Marketing",
    company: "Pursuit Sales Solutions",
    initials: "KM",
    highlightClass: "bg-accent-golden/30",
  },
  {
    quote:
      "Working with Pattern is personal in the best way. I feel heard and understood, as if they have genuinely become students of our product. What sets them apart is that they truly learned our organization. They didn't offer generic, untested methods. Although operating as a third party, they felt like an extension of our full-time team.",
    highlight: "extension of our full-time team",
    name: "Lainey Buchanan",
    title: "Director",
    company: "Camp Huawni",
    initials: "LB",
    highlightClass: "bg-accent-golden/30",
  },
  {
    quote:
      "Pattern doesn't just make your site look good, they make it look like you. From first conversation to final product, they do brand elevation like no one I've seen.",
    highlight: "make it look like you",
    name: "Grant Price",
    title: "Owner",
    company: "Magician Grant Price",
    initials: "GP",
    highlightClass: "bg-accent-golden/30",
  },
]

type SplitResult =
  | { matched: true; before: string; after: string }
  | { matched: false; before: ""; after: "" }

function splitOnce(quote: string, highlight: string): SplitResult {
  if (!highlight) return { matched: false, before: "", after: "" }
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = new RegExp(escaped, "i").exec(quote)
  if (!match) return { matched: false, before: "", after: "" }
  return {
    matched: true,
    before: quote.slice(0, match.index),
    after: quote.slice(match.index + match[0].length),
  }
}

function TestimonialCard({
  quote,
  highlight,
  name,
  title,
  company,
  initials,
  highlightClass,
}: Testimonial) {
  const parts = splitOnce(quote, highlight)

  return (
    <Card className="h-full p-6 border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col text-left">
      <blockquote className="text-base text-foreground leading-relaxed mb-6 text-left">
        {parts.matched ? (
          <>
            &ldquo;{parts.before}
            <mark className={cn("rounded px-1 text-foreground", highlightClass)}>
              {highlight}
            </mark>
            {parts.after}&rdquo;
          </>
        ) : (
          <>&ldquo;{quote}&rdquo;</>
        )}
      </blockquote>
      <footer className="flex items-center gap-3 mt-auto not-italic">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/40 text-secondary-foreground text-sm font-medium"
        >
          {initials}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-foreground">
            {name}
          </span>
          <span className="text-xs text-muted-foreground">{title}</span>
          <span className="text-xs text-muted-foreground">{company}</span>
        </div>
      </footer>
    </Card>
  )
}

export function Testimonials() {
  return (
    <MarketingSection variant="default" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-left">
          What clients say
        </h2>
        <p className="text-muted-foreground mb-12 text-lg text-left max-w-2xl">
          Real feedback from the founders and marketing leaders we&rsquo;ve built with.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </MarketingSection>
  )
}
