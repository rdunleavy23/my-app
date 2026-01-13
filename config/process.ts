// config/process.ts
// Process page content configuration
// Separates copy from component presentation logic

import {
  Users,
  Building2,
  Handshake,
  Target,
  TrendingUp,
  Package,
  Megaphone,
  MapPin,
  DollarSign,
  FileText,
  Settings,
  Rocket,
  LucideIcon
} from "lucide-react"

// ============================================================================
// TYPES
// ============================================================================

export interface ProcessSection {
  id: string
  number: number
  title: string
  timeline: string
  intro: string
  subsections: Subsection[]
  framework?: Framework
  deliverables: string[]
}

export interface Subsection {
  heading: string
  paragraphs: string[]
}

export interface Framework {
  id: "5cs" | "stp" | "4ps"
  title: string
  description: string
  items: FrameworkItem[]
}

export interface FrameworkItem {
  title: string
  icon: LucideIcon
  description: string
  subItems?: string[]
}

export interface FAQ {
  question: string
  answer: string[]
}

export interface OwnershipCategory {
  title: string
  icon: LucideIcon
  items: string[]
}

// ============================================================================
// HERO CONTENT
// ============================================================================

export const heroContent = {
  title: "How We Work",
  paragraphs: [
    "Most companies have scattered data, ambitious goals, and no clear path between them. We solve that in eight weeks.",
    "We don't create new strategies out of thin air. We map what's already working, identify what's blocking growth, and build the system that bridges the gap."
  ],
  tagline: "We build the system. You choose how much we stay involved.",
  clarifier: "Some teams run it fully in-house. Others ask us to help vet agencies, sit in on key hires, or train their team. The sprint sets you up for all three."
}

// ============================================================================
// PROCESS SECTIONS
// ============================================================================

export const processSections: ProcessSection[] = [
  // SECTION 1: Map Your Reality
  {
    id: "map-your-reality",
    number: 1,
    title: "Map Your Reality",
    timeline: "Weeks 1-2",
    intro: "Before we can chart a path forward, we need to understand exactly where you are. Not where you think you are—where the data says you are.",
    subsections: [
      {
        heading: "Start with the economics",
        paragraphs: [
          "What revenue target are you working toward? How long can you wait for an acquisition dollar to pay back? At what customer acquisition cost does your model break?",
          "If these numbers exist, we stress-test them. If they're assumptions, we build them from your actual data. You get a one-page framework that defines what you're optimizing for—and what you can ignore."
        ]
      },
      {
        heading: "Map the competitive landscape",
        paragraphs: [
          "Who are customers choosing between when they consider you? Where does your pricing power come from versus where is it wishful thinking? What category forces work in your favor, and which ones work against you?",
          "We're specific about what matters: this gap is costing you deals, this friction is slowing conversions, this concern doesn't move the needle yet."
        ]
      },
      {
        heading: "Examine your complete market position",
        paragraphs: [
          "We use familiar frameworks like 5Cs to structure the analysis, but the outputs are bespoke to your situation. We examine five dimensions of your market position:"
        ]
      }
    ],
    framework: {
      id: "5cs",
      title: "Five Dimensions We Analyze",
      description: "We structure market analysis across these areas to build your bespoke positioning",
      items: [
        {
          title: "Customer",
          icon: Users,
          description: "How do buyers actually make decisions? Who's involved? What criteria drive the choice? What outcomes do they need?"
        },
        {
          title: "Company",
          icon: Building2,
          description: "What are your genuine strengths? Which capabilities create measurable customer value? Where are you realistically constrained?"
        },
        {
          title: "Collaborators",
          icon: Handshake,
          description: "Who supplies your product? Who helps you reach customers? Where do partnerships unlock scale?"
        },
        {
          title: "Competition",
          icon: Target,
          description: "Who competes for these same customers? What's their approach? Where do you have advantage? Where are you vulnerable?"
        },
        {
          title: "Context",
          icon: TrendingUp,
          description: "What trends help you? What regulatory, technological, or market forces create headwinds? What's changing in your customer's world?"
        }
      ]
    },
    deliverables: [
      "Current state audit (market + funnel analysis)",
      "Revenue model validation",
      "Competitive positioning baseline",
      "Market position analysis",
      "Measurement gap analysis"
    ]
  },

  // SECTION 2: Define Where You're Headed
  {
    id: "define-where-youre-headed",
    number: 2,
    title: "Define Where You're Headed",
    timeline: "Weeks 3-4",
    intro: "Strategy is choosing what not to do. Based on your actual position, we identify the most defensible aspiration.",
    subsections: [
      {
        heading: "Clarify who you serve",
        paragraphs: [
          "Which segment can you realistically win? What specific problem do you solve that they'll pay for? Why would they choose you over what they're using today?",
          "You get a framework that explicitly defines who you're for—and who you're not. Resource allocation becomes impossible when you're trying to serve everyone. Saying no is strategic."
        ]
      },
      {
        heading: "Crystallize your positioning",
        paragraphs: [
          "We use familiar frameworks like STP (Segmentation, Targeting, Positioning) to structure the work, but the positioning we develop is unique to your situation. This clarifies your strategic focus."
        ]
      }
    ],
    framework: {
      id: "stp",
      title: "How We Structure Positioning Work",
      description: "We use this three-step approach to build your unique positioning",
      items: [
        {
          title: "Segmentation",
          icon: Users,
          description: "Which customer groups exist? How do you divide them—by company size, industry, use case, buying behavior? Which segments can you actually reach?"
        },
        {
          title: "Targeting",
          icon: Target,
          description: "Of those segments, which can you win? Which delivers the highest lifetime value? Which faces the lowest competitive intensity?"
        },
        {
          title: "Positioning",
          icon: Building2,
          description: "In your target customer's mind, what should you own? Not every positive attribute—the specific claim you want them to believe about you.",
          subItems: [
            "For [target customer], [Company] is the [category] that [key benefit], unlike [alternative], because [proof point].",
            "This isn't marketing copy. It's strategic clarity that guides every resource decision you make."
          ]
        }
      ]
    },
    deliverables: [
      "Positioning strategy",
      "Competitive differentiation strategy",
      "Brand positioning guidelines",
      "Aspirational customer journey map",
      "Year 1 success metrics",
      "Messaging guidelines"
    ]
  },

  // SECTION 3: Build the Bridge
  {
    id: "build-the-bridge",
    number: 3,
    title: "Build the Bridge",
    timeline: "Weeks 5-8",
    intro: "The specific, sequenced initiatives that take you from current state to target state.",
    subsections: [
      {
        heading: "Connect current and aspirational states",
        paragraphs: [
          "We deliver a 90-day roadmap with clear gates, dependencies, and decision points.",
          "What's working now that you scale? What's creating friction that you fix? What's missing entirely that you build?"
        ]
      },
      {
        heading: "Optimize your complete marketing mix",
        paragraphs: [
          "We use familiar frameworks like 4Ps to structure the optimization, but the strategy we build is tailored to your business. We optimize across four dimensions:"
        ]
      }
    ],
    framework: {
      id: "4ps",
      title: "Four Areas We Optimize",
      description: "We structure marketing mix work across these dimensions to build your custom strategy",
      items: [
        {
          title: "Product",
          icon: Package,
          description: "Beyond features—what's the complete customer experience? How is it packaged? What objections does it create? You get messaging guidelines and a list of what to stop saying."
        },
        {
          title: "Promotion",
          icon: Megaphone,
          description: "How do you communicate your positioning? Through which channels? With what message? We build the channel plan with specific campaigns, realistic timelines, and clear success criteria."
        },
        {
          title: "Place",
          icon: MapPin,
          description: "Where do your customers expect to find you? Direct sales? Self-serve? Marketplace? What's your distribution strategy?"
        },
        {
          title: "Price",
          icon: DollarSign,
          description: "Does your pricing reflect what buyers value? Are you capturing the right share of value created? How does pricing reinforce positioning?"
        }
      ]
    },
    deliverables: [
      "90-day strategic action plan",
      "Marketing mix strategy",
      "Campaign playbooks and execution roadmaps",
      "Measurement systems and operational framework",
      "Scaling gates for each channel",
      "Team enablement documentation",
      "Weekly operating rhythm",
      "30-day post-launch support"
    ]
  }
]

// ============================================================================
// ADDITIONAL SUBSECTIONS (for Section 3)
// ============================================================================

export const additionalSubsections = {
  infrastructure: {
    heading: "Solve the infrastructure problem",
    paragraphs: [
      "Your data is scattered across tools, making it impossible to see the complete picture. We connect your systems into one view that shows what actually matters.",
      "You get a measurement system that tracks the five numbers you need to check weekly. Decisions get made on data, not opinions."
    ]
  },
  transfer: {
    heading: "Transfer complete ownership",
    paragraphs: [
      "We document who owns what, establish the weekly rhythm you'll follow, and identify where you need outside help.",
      "Handoff isn't complete until you've run through the system once and can operate independently. Then 30 days of support while you find your rhythm."
    ]
  }
}

// ============================================================================
// WHAT YOU OWN
// ============================================================================

export const ownershipCategories: OwnershipCategory[] = [
  {
    title: "Strategic Foundation",
    icon: FileText,
    items: [
      "Revenue architecture and growth model",
      "Market positioning and competitive strategy",
      "Brand positioning guidelines and messaging framework"
    ]
  },
  {
    title: "Operational Systems",
    icon: Settings,
    items: [
      "Measurement systems connecting all your data sources",
      "Campaign playbooks and channel execution briefs",
      "Team enablement documentation",
      "Weekly decision framework"
    ]
  },
  {
    title: "Execution Readiness",
    icon: Rocket,
    items: [
      "90-day roadmap with prioritized initiatives",
      "Success metrics and scaling gates",
      "Role clarity and accountability structure",
      "30 days of implementation support"
    ]
  }
]

// ============================================================================
// FAQ
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
      "The core structure—Reality, Aspiration, Action Plan—stays consistent. We adjust how much time we spend in each phase based on what clarity already exists.",
      "If you have strong positioning, we move faster. If you're starting from scratch, we go deeper."
    ]
  },
  {
    question: "Do you work with my industry?",
    answer: [
      "We work with $1-5M revenue companies across industries that have traction and are ready to systematize growth. Whether B2B, B2C, SaaS, or services—the diagnostic process is the same.",
      "We map reality, define aspiration, build the bridge."
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
// CTA CONTENT
// ============================================================================

export const ctaContent = {
  heading: "Ready to Start?",
  body: "Let's discuss whether this eight-week process makes sense for your situation. We'll review where you are, what clarity already exists, and what would shift if we worked together.",
  subtext: "30-minute call. No pitch, no pressure."
}

// ============================================================================
// METADATA
// ============================================================================

export const processMetadata = {
  title: "How We Work | Pattern Growth",
  description: "Our three-section process: Map your reality (weeks 1-2), define where you're headed (weeks 3-4), and build the bridge (weeks 5-8). Full ownership transfer, no dependency.",
  keywords: [
    "growth strategy process",
    "marketing consulting methodology",
    "8-week sprint",
    "strategic planning",
    "marketing operations"
  ]
}
