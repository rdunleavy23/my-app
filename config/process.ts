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
  subheadline: "Most marketing advice treats symptoms. We spend eight weeks finding the root issue—so you have a strategy that still works three years from now, not just three months. No retainers. No ongoing fees. Just a foundation you actually own."
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
  body: "We believe small businesses grow best when they own their strategy, not rent it. We believe transparency builds better relationships than persuasive sales. We believe in teaching, not telling. And we believe that when you succeed, our community of independent businesses gets stronger."
}

// ============================================================================
// FAQ (keeping existing)
// ============================================================================

export const faqs: FAQ[] = [
  {
    question: "Is this the same as a fractional CMO retainer?",
    answer: [
      "No. Retainers keep an executive embedded in your org indefinitely. Our sprint installs custom strategy and systems you operate independently.",
      "After eight weeks, you own the complete system and know how to execute it."
    ]
  },
  {
    question: "Do we have to keep working together after the sprint?",
    answer: [
      "No. The sprint is designed so you're not dependent on us.",
      "If we do our job, you'll outgrow us. You'll leave the sprint with a clear strategy, operating rhythm, and custom plan you can run. Some take it fully in-house. Others ask us to help with a specific phase—vetting an agency, sitting in on key interviews, or additional training.",
      "Our goal is to build a growth system you own. After that, we're optional support, not a permanent fixture."
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
      "The core sprint is designed so you're not locked into a long-term retainer. After eight weeks, most clients choose one of three paths:",
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
  description: "Clarity you can build on for years. Our 8-week process delivers a marketing strategy that still works three years from now. No retainers. No ongoing fees. Just a foundation you own.",
  keywords: [
    "growth strategy process",
    "marketing consulting methodology",
    "8-week sprint",
    "strategic planning",
    "marketing operations",
    "fractional CMO alternative"
  ]
}
