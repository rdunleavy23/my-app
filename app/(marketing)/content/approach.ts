// app/(marketing)/content/approach.ts
export type ApproachItem = {
  key: string                 // stable id used in URL e.g. "reality"
  title: string               // e.g. "Shaped by Your Reality" — paste exactly
  body: string[]              // each paragraph as-is (HTML allowed)
  how?: string[]              // optional detail lines, verbatim
  deliverables?: string[]     // optional list items, verbatim
}

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    key: "reality",
    title: "Shaped by Your Reality",
    body: [
      "We start by understanding your specific situation—market position, team capacity, actual constraints. The strategy we build fits your business as it exists today, not some idealized version that ignores reality."
    ],
    how: [],
    deliverables: [],
  },
  {
    key: "future",
    title: "Built for Your Future",
    body: [
      "We design a roadmap for your specific goals, accounting for your timeline and resources. You'll know exactly what to prioritize, what success looks like, and when to scale or adjust based on what's actually working."
    ],
    how: [],
    deliverables: [],
  },
  {
    key: "ownership",
    title: "Owned by You",
    body: [
      "You get trained to execute independently, so you're not stuck in a consulting relationship. No retainer, no ongoing fees, just custom systems that stay with you."
    ],
    how: [],
    deliverables: [],
  },
]
