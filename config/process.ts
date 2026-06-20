// config/process.ts
// Process page content configuration
// Separates copy from component presentation logic

import { LucideIcon } from "lucide-react"

// ============================================================================
// TYPES
// ============================================================================

export interface ProcessWeek {
  id: string
  week: string
  title: string
  content: string
}

export interface Capability {
  id: string
  title: string
  description: string
}

export interface Requirement {
  id: string
  text: string
}

export interface FAQ {
  question: string
  answer: string[]
}

// ============================================================================
// HERO CONTENT
// ============================================================================

export const heroContent = {
  headline: "Clarity you can build on for years.",
  subheadline: "Most marketing advice treats symptoms. As senior partners, we embed in your business to find the root issue—so you have a strategy that still works three years from now, not just three months. A partnership built on trust, and a foundation your team owns."
}

// ============================================================================
// START HERE SECTION
// ============================================================================

export const startHereContent = {
  heading: "Start with a conversation, not a pitch.",
  body: "Before we talk channels or budgets, we listen. You'll tell us what's actually happening in your business—the wins, the waste, the worries. We'll share how we think about sustainable growth, and we'll both decide if we're aligned.",
  ctaText: "Schedule an intro call"
}

// ============================================================================
// PROCESS WEEKS
// ============================================================================

export const processWeeks: ProcessWeek[] = [
  {
    id: "week-1",
    week: "Week 1",
    title: "Listen.",
    content: "We review your last 12 months of data—ad spend, site analytics, CRM, every channel you've tried. We interview you and anyone on your team. We ask questions that might feel uncomfortable because we're looking for the gap between what you think is working and what the numbers actually say. You'll see every finding, even the ugly ones."
  },
  {
    id: "weeks-2-3",
    week: "Weeks 2–3",
    title: "Diagnose.",
    content: "We build you a private dashboard showing exactly where your time and money are going vs. where your customers are actually coming from. We'll show you the $18K you spent on that channel that generated $2K in real revenue. We'll map the customer journey and find the drop-off points. You'll get the raw data, not just our conclusions."
  },
  {
    id: "weeks-4-5",
    week: "Weeks 4–5",
    title: "Build.",
    content: "We create a strategy with specific channels, budget allocation, and a 12-month timeline. But here's the key: we build it with you, not for you. You'll understand why we're recommending SEO over paid ads, or email over social. You'll be able to explain the strategy clearly because you helped build the logic."
  },
  {
    id: "weeks-6-7",
    week: "Weeks 6–7",
    title: "Document.",
    content: "We document everything in SOPs and templates you can run without us. Prioritization frameworks, creative briefs in your brand voice, and a measurement system focused on the metrics that actually matter. Everything lives in tools you already use—no proprietary software you'll lose access to."
  },
  {
    id: "week-8",
    week: "Week 8",
    title: "Hand off—and stay connected.",
    content: "We spend a full day walking through everything, answering every question. Then we schedule a 30-day check-in (free) and a 90-day review (free). You'll have our emails. We don't disappear because your success is how we measure ours."
  }
]

// ============================================================================
// CAPABILITIES (What You'll Have)
// ============================================================================

export const capabilities: Capability[] = [
  {
    id: "audit",
    title: "Audit your own marketing",
    description: "You'll know how to spot waste and opportunity without us"
  },
  {
    id: "prioritize",
    title: "Prioritize channels confidently",
    description: "You'll have a framework for saying \"not now\" to shiny objects"
  },
  {
    id: "execute",
    title: "Execute from documented SOPs",
    description: "Run campaigns without starting from scratch"
  },
  {
    id: "measure",
    title: "Measure what matters",
    description: "You'll ignore vanity metrics and focus on the 3 numbers that drive growth"
  },
  {
    id: "vendors",
    title: "Make smart vendor decisions",
    description: "You'll know which tools are worth paying for and which are hype"
  }
]

// ============================================================================
// REQUIREMENTS (What We Need)
// ============================================================================

export const requirements: Requirement[] = [
  {
    id: "access",
    text: "Access to everything: analytics, ad accounts, CRM, even the tools you're embarrassed about"
  },
  {
    id: "time",
    text: "3 hours per week, minimum"
  },
  {
    id: "openness",
    text: "Willingness to hear that your favorite channel might be the problem"
  }
]

// ============================================================================
// CTA CONTENT
// ============================================================================

export const ctaContent = {
  heading: "Ready to build your foundation?",
  body: "The first step is a conversation where we'll both decide if we're aligned for the long haul. We'll talk about your business, your goals, and whether an 8-week sprint makes sense for your next decade of growth.",
  ctaText: "Schedule your intro call",
  subtext: "Free. No obligation. No pitch.",
  postscript: "P.S. If we're not the right fit, we'll recommend someone who is. Because the wrong fit wastes everyone's time."
}

// ============================================================================
// VALUES FOOTER
// ============================================================================

export const valuesContent = {
  heading: "How we think about this work:",
  body: "We believe companies grow best with a trusted partner who treats the business like their own. We believe transparency builds better relationships than persuasive sales. We believe in teaching, not telling. And we believe that when you succeed, our community of independent businesses gets stronger."
}

// ============================================================================
// FAQ (keeping existing)
// ============================================================================

export const faqs: FAQ[] = [
  {
    question: "How is working with you different from a fractional CMO?",
    answer: [
      "You work directly with senior partners who embed in your business and treat it like their own—learning your market and goals until we think like you do.",
      "Together we build a custom strategy and systems your team owns. After our eight weeks, you have the complete system and know how to run it—and we stay available as a trusted partner whenever you want us."
    ]
  },
  {
    question: "What does the relationship look like after the engagement?",
    answer: [
      "Your team owns the strategy, operating rhythm, and custom systems we build together, so you can keep moving with confidence.",
      "Many clients keep us close as a trusted partner—pressure-testing big decisions, sitting in on key interviews, or helping brief and select partners. We scope that to exactly what you need.",
      "It's a lasting partnership, not a transaction. We're here when you want us."
    ]
  },
  {
    question: "Can you customize the timeline?",
    answer: [
      "We adjust how much time we spend in each phase based on what clarity already exists.",
      "If you have strong positioning, we move faster. If you're starting from scratch, we go deeper."
    ]
  },
  {
    question: "Do you work with my industry?",
    answer: [
      "We work with growth companies across industries that have traction and are ready to systematize growth. Whether B2B, B2C, SaaS, or services—the diagnostic process is the same."
    ]
  },
  {
    question: "What are my options after the 8-week sprint?",
    answer: [
      "After our eight weeks together, most clients choose one of three paths:",
      "Run it in-house: You own the strategy, operating rhythm, and measurement systems.",
      "Run it with partners: We help you brief or select an agency to execute.",
      "Run it with support: We stay involved for a defined period to sit in on interviews, provide additional training, or pressure-test big decisions."
    ]
  }
]

// ============================================================================
// METADATA
// ============================================================================

export const processMetadata = {
  title: "How We Work: 8-Week Growth Strategy Sprint | Pattern Growth",
  description: "Clarity you can build on for years. Senior partners embed with your team and build a custom marketing strategy that still works three years from now—a true partnership, and a foundation your team owns.",
  keywords: [
    "growth strategy process",
    "senior growth partner",
    "8-week sprint",
    "strategic planning",
    "marketing operations",
    "embedded marketing strategy"
  ]
}
