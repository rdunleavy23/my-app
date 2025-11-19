# Process Page Redesign Specifications
## Desktop + Mobile Component Design

**Project:** Pattern Growth Process Page Redesign
**Date:** November 19, 2025
**Based on:** User-provided copy + CLAUDE.md brand guidelines + current /process page

---

## Table of Contents

1. [Copy Structure Analysis](#copy-structure-analysis)
2. [Design Principles (From CLAUDE.md)](#design-principles)
3. [Desktop Component Specifications](#desktop-component-specifications)
4. [Mobile Component Specifications](#mobile-component-specifications)
5. [Component Code Examples](#component-code-examples)
6. [Implementation Roadmap](#implementation-roadmap)

---

## Copy Structure Analysis

### Current Structure (User-Provided Copy)

```
Hero Section
├─ Title: "How We Work"
├─ Subtitle: Problem statement (scattered data, no clear path)
└─ Overview: 3 sections, full ownership, no dependency

Section 1: Map Your Reality (Weeks 1-2)
├─ Economics validation
├─ Competitive landscape
├─ 5Cs Framework
│  ├─ Customer
│  ├─ Company
│  ├─ Collaborators
│  ├─ Competition
│  └─ Context
└─ Deliverables (5 items)

Section 2: Define Where You're Headed (Weeks 3-4)
├─ Segment clarification
├─ STP Framework
│  ├─ Segmentation
│  ├─ Targeting
│  └─ Positioning
├─ Positioning statement template
├─ Measurable goals
└─ Deliverables (6 items)

Section 3: Build the Bridge (Weeks 5-8)
├─ 90-day roadmap
├─ 4Ps Framework
│  ├─ Product
│  ├─ Promotion
│  ├─ Place
│  └─ Price
├─ Infrastructure solution
├─ Team ownership transfer
└─ Deliverables (8 items)

What You Own After Eight Weeks
├─ Strategic Foundation
├─ Operational Systems
└─ Execution Readiness

FAQ Section
├─ Sprint vs. Retainer
├─ Post-week-eight
├─ Customization
└─ Industry fit

CTA Section
```

### Key Observations

**Pattern Growth Brand Voice (from CLAUDE.md):**
- **Calm** - Unhurried clarity, no drama
- **Observant** - Notices patterns, names them plainly
- **Precise** - Every word earns its place
- **Strategic** - Explains choices and tradeoffs
- **Wry (subtle)** - Light asides, no snark

**Copy Characteristics:**
- Direct questions as headings
- Plain language (no jargon without definition)
- Specific examples over abstractions
- Short paragraphs (2-3 sentences)
- Clear progression (Reality → Aspiration → Action)

---

## Design Principles

### From CLAUDE.md (Sacred Rules)

**Color System:**
```tsx
// ALWAYS use semantic tokens (NEVER raw hex)
bg-primary          // #3E5661 - Main brand
bg-secondary        // #95B0BA - Backgrounds only, never text
bg-tertiary         // #F8ECD1 - Warm backgrounds
bg-accent-deep-navy // #02273A - Critical CTAs

// Pair with foreground tokens
text-primary-foreground
text-tertiary-foreground
text-accent-deep-navy-foreground
```

**Typography Scale:**
```tsx
// Mobile-first, responsive
h1: "text-4xl md:text-5xl lg:text-6xl font-bold"
h2: "text-3xl md:text-4xl lg:text-5xl font-semibold"
h3: "text-2xl md:text-3xl font-semibold"
p:  "text-base md:text-lg leading-relaxed"
```

**Spacing Pattern:**
```tsx
// Section padding
"py-16 md:py-24 lg:py-32"

// Container
"container mx-auto px-4 md:px-6"

// Multiples of 4
gap-4, gap-6, space-y-8, space-y-12
```

**Accessibility Requirements:**
- WCAG 2.1 AA minimum (target AAA)
- Never use secondary (#95B0BA) for text
- Never use golden (#FFBF5E) for small text
- Always pair colors with -foreground tokens

---

## Desktop Component Specifications

### 1. Hero Section

**Layout:** Center-aligned, max-width container

**Structure:**
```tsx
<section className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">

    {/* Title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      How We Work
    </h1>

    {/* Problem statement - 2 paragraphs */}
    <div className="text-base md:text-lg text-muted-foreground space-y-4 mb-8">
      <p>Most companies have scattered data, ambitious goals, and no clear path between them. We solve that in eight weeks.</p>
      <p>We don't create new strategies out of thin air. We map what's already working, identify what's blocking growth, and build the system that bridges the gap.</p>
    </div>

    {/* Key differentiator */}
    <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
      Three sections. Full ownership transfer. No dependency.
    </p>

    {/* CTA */}
    <GetStartedButton size="lg" />
  </div>
</section>
```

**Visual Treatment:**
- Clean, minimal
- No background color change (maintains flow)
- Emphasis on "Three sections" line (larger font)

---

### 2. Section Overview Timeline

**Layout:** Horizontal 3-column grid (desktop), vertical stack (mobile)

**Purpose:** Show high-level structure before diving into details

**Desktop Structure:**
```tsx
<section className="py-12 md:py-16 bg-tertiary/30">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">

    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
      Our Three-Section Process
    </h2>

    {/* Desktop: Horizontal flow with arrows */}
    <div className="hidden md:flex items-start gap-4">

      {/* Section 1 */}
      <Card className="flex-1 bg-background border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">1</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Weeks 1-2</p>
              <h3 className="text-lg font-semibold">Map Your Reality</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Economics, competitive landscape, 5Cs framework
          </p>
        </CardContent>
      </Card>

      {/* Arrow */}
      <ArrowRight className="flex-shrink-0 mt-12 text-primary" />

      {/* Section 2 */}
      <Card className="flex-1 bg-background border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">2</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Weeks 3-4</p>
              <h3 className="text-lg font-semibold">Define Where You're Headed</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            STP framework, positioning, measurable goals
          </p>
        </CardContent>
      </Card>

      {/* Arrow */}
      <ArrowRight className="flex-shrink-0 mt-12 text-primary" />

      {/* Section 3 */}
      <Card className="flex-1 bg-background border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">3</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Weeks 5-8</p>
              <h3 className="text-lg font-semibold">Build the Bridge</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            90-day roadmap, 4Ps framework, team transfer
          </p>
        </CardContent>
      </Card>

    </div>

    {/* Mobile: Vertical stack (see mobile specs) */}

  </div>
</section>
```

---

### 3. Section Detail Card Pattern

**Layout:** Full-width cards with internal structure

**Pattern for each section:**

```tsx
<section className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-6 max-w-5xl">

    {/* Section Header */}
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">1</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Section 1 · Weeks 1-2</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Map Your Reality</h2>
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground">
        Before we can chart a path forward, we need to understand exactly where you are.
        Not where you think you are—where the data says you are.
      </p>
    </div>

    {/* Subsections */}
    <div className="space-y-12">

      {/* Start with the economics */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Start with the economics
        </h3>
        <div className="space-y-4 text-muted-foreground">
          <p>What revenue target are you working toward? How long can you wait for an acquisition dollar to pay back? At what customer acquisition cost does your model break?</p>
          <p>If these numbers exist, we stress-test them. If they're assumptions, we build them from your actual data. You get a one-page framework that defines what you're optimizing for—and what you can ignore.</p>
        </div>
      </div>

      {/* Map the competitive landscape */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Map the competitive landscape
        </h3>
        <div className="space-y-4 text-muted-foreground">
          <p>Who are customers choosing between when they consider you? Where does your pricing power come from versus where is it wishful thinking? What category forces work in your favor, and which ones work against you?</p>
          <p>We're specific about what matters: this gap is costing you deals, this friction is slowing conversions, this concern doesn't move the needle yet.</p>
        </div>
      </div>

      {/* 5Cs Framework Visualization */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Apply the 5Cs framework
        </h3>
        <p className="text-muted-foreground mb-8">
          We examine five dimensions of your market position:
        </p>

        {/* Framework component - see Framework Specs below */}
        <Framework5Cs />
      </div>

      {/* Deliverables */}
      <div className="mt-16 pt-12 border-t border-border">
        <h3 className="text-2xl font-semibold mb-6">Deliverables</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Current state audit (market + funnel analysis)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Revenue model validation</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Competitive positioning baseline</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>5Cs market framework</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>Measurement gap analysis</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

**Repeat this pattern for Section 2 and Section 3**, adjusting:
- Number (1 → 2 → 3)
- Timeline (Weeks 1-2 → 3-4 → 5-8)
- Framework component (5Cs → STP → 4Ps)
- Deliverables count

---

### 4. Framework Visualizations

#### A. 5Cs Framework (Section 1)

**Desktop Layout:** Vertical list with clear categories

```tsx
export function Framework5Cs() {
  const dimensions = [
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

  return (
    <div className="space-y-4">
      {dimensions.map((dim, idx) => (
        <Card key={idx} className="bg-tertiary/30 border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <dim.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2">{dim.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dim.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

**Why this approach:**
- Clean, scannable list
- No complicated diagrams (aligns with "calm" brand voice)
- Each dimension gets equal visual weight
- Icon provides visual anchor
- Hover state shows interactivity

---

#### B. STP Framework (Section 2)

**Desktop Layout:** 3-step vertical progression with visual flow

```tsx
export function STPFramework() {
  return (
    <div className="space-y-8">

      {/* Step 1: Segmentation */}
      <div className="relative">
        <Card className="bg-tertiary/30 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold">1</span>
              </div>
              <h4 className="text-2xl font-semibold">Segmentation</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Which customer groups exist? How do you divide them—by company size, industry, use case, buying behavior? Which segments can you actually reach?
            </p>
          </CardContent>
        </Card>

        {/* Arrow connector */}
        <div className="flex justify-center -my-4 relative z-10">
          <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Step 2: Targeting */}
      <div className="relative">
        <Card className="bg-tertiary/50 border-primary/30">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold">2</span>
              </div>
              <h4 className="text-2xl font-semibold">Targeting</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Of those segments, which can you win? Which delivers the highest lifetime value? Which faces the lowest competitive intensity?
            </p>
          </CardContent>
        </Card>

        {/* Arrow connector */}
        <div className="flex justify-center -my-4 relative z-10">
          <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Step 3: Positioning */}
      <div className="relative">
        <Card className="bg-primary/10 border-primary">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-bold">3</span>
              </div>
              <h4 className="text-2xl font-semibold">Positioning</h4>
            </div>
            <p className="text-muted-foreground mb-6">
              In your target customer's mind, what should you own? Not every positive attribute—the specific claim you want them to believe about you.
            </p>

            {/* Positioning statement template */}
            <Card className="bg-background border-border p-4">
              <p className="text-sm italic text-muted-foreground">
                For <strong>[target customer]</strong>, <strong>[Company]</strong> is the <strong>[category]</strong> that <strong>[key benefit]</strong>, unlike <strong>[alternative]</strong>, because <strong>[proof point]</strong>.
              </p>
            </Card>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
```

**Visual progression:**
- Each step gets progressively stronger emphasis (background opacity)
- Arrow connectors show flow
- Final positioning emphasized with primary border
- Template provides concrete example

---

#### C. 4Ps Framework (Section 3)

**Desktop Layout:** 2x2 grid

```tsx
export function FourPsGrid() {
  const ps = [
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

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {ps.map((p, idx) => (
        <Card key={idx} className="bg-tertiary/30 border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">{p.title}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

**Grid rationale:**
- Equal visual weight for all 4Ps
- 2x2 creates balanced layout
- Hover states show they're distinct elements
- No forced hierarchy (all are important)

---

### 5. "What You Own" Section

**Layout:** 3-column grid with icon cards

```tsx
<section className="py-16 md:py-24 bg-tertiary/30">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">

    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
      What You Own After Eight Weeks
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Strategic Foundation */}
      <Card className="bg-background border-border">
        <CardHeader>
          <FileText className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-xl">Strategic Foundation</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Revenue architecture and growth model</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Market positioning and competitive strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Brand positioning guidelines and messaging framework</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Operational Systems */}
      <Card className="bg-background border-border">
        <CardHeader>
          <Settings className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-xl">Operational Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Dashboards connecting all your data sources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Campaign playbooks and channel execution briefs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Team enablement documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Weekly decision framework</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Execution Readiness */}
      <Card className="bg-background border-border">
        <CardHeader>
          <Rocket className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-xl">Execution Readiness</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>90-day roadmap with prioritized initiatives</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Success metrics and scaling gates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Role clarity and accountability structure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>30 days of implementation support</span>
            </li>
          </ul>
        </CardContent>
      </Card>

    </div>
  </div>
</section>
```

---

### 6. FAQ Section

**Layout:** Accordion pattern (existing pattern from current page)

```tsx
<section className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-6 max-w-4xl">

    <h2 className="text-3xl font-semibold mb-8">Common Questions</h2>

    <Accordion type="single" collapsible className="space-y-4">

      <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          Is this the same as a fractional CMO retainer?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p className="mb-3">No. Retainers keep an executive embedded in your org indefinitely. Our sprint installs the strategy and systems your team operates independently.</p>
          <p>After eight weeks, you own the complete system. Your team knows how to execute it.</p>
        </AccordionContent>
      </AccordionItem>

      {/* Repeat for other questions */}

    </Accordion>
  </div>
</section>
```

---

### 7. Final CTA Section

**Layout:** Center-aligned, simple

```tsx
<section className="py-16 md:py-24 bg-tertiary/30">
  <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Start?
    </h2>

    <p className="text-lg text-muted-foreground mb-8">
      Let's discuss whether this eight-week process makes sense for your situation. We'll review where you are, what clarity already exists, and what would shift if we worked together.
    </p>

    <GetStartedButton size="lg" />

    <p className="text-sm text-muted-foreground mt-6">
      30-minute call. No pitch, no pressure.
    </p>

  </div>
</section>
```

---

## Mobile Component Specifications

### Key Differences from Desktop

1. **Section Overview Timeline** → Vertical stack (no horizontal arrows)
2. **Framework cards** → Full width, maintain vertical list
3. **2x2 grids** → Single column
4. **Reduced padding** → `py-12` instead of `py-16`
5. **Smaller typography** → `text-3xl` instead of `text-4xl`

### 1. Hero Section (Mobile)

```tsx
<section className="py-12 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">

    {/* Title - smaller on mobile */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
      How We Work
    </h1>

    {/* Smaller text, same paragraphs */}
    <div className="text-base md:text-lg text-muted-foreground space-y-3 mb-6">
      <p>Most companies have scattered data, ambitious goals, and no clear path between them. We solve that in eight weeks.</p>
      <p>We don't create new strategies out of thin air. We map what's already working, identify what's blocking growth, and build the system that bridges the gap.</p>
    </div>

    {/* Key line - responsive sizing */}
    <p className="text-lg md:text-2xl font-semibold text-foreground mb-6">
      Three sections. Full ownership transfer. No dependency.
    </p>

    {/* CTA - default size on mobile */}
    <GetStartedButton />
  </div>
</section>
```

---

### 2. Section Overview (Mobile)

**Vertical stack with connecting lines**

```tsx
{/* Mobile only */}
<div className="md:hidden space-y-6">

  {/* Section 1 */}
  <Card className="bg-background border-primary/20">
    <CardContent className="p-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-primary">1</span>
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Weeks 1-2</p>
          <h3 className="text-lg font-semibold mb-2">Map Your Reality</h3>
          <p className="text-sm text-muted-foreground">
            Economics, competitive landscape, 5Cs framework
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Connecting line */}
  <div className="flex justify-center">
    <ArrowDown className="h-6 w-6 text-primary" />
  </div>

  {/* Section 2 */}
  <Card className="bg-background border-primary/20">
    {/* Same structure */}
  </Card>

  {/* Connecting line */}
  <div className="flex justify-center">
    <ArrowDown className="h-6 w-6 text-primary" />
  </div>

  {/* Section 3 */}
  <Card className="bg-background border-primary/20">
    {/* Same structure */}
  </Card>

</div>
```

---

### 3. Framework Adaptations (Mobile)

**5Cs Framework** - No changes needed, already vertical list

**STP Framework** - No changes needed, already vertical progression

**4Ps Grid** - Changes to single column:

```tsx
{/* Mobile: Single column */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Cards render vertically on mobile */}
</div>
```

---

### 4. "What You Own" Section (Mobile)

**Single column instead of 3-column grid**

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cards stack vertically on mobile */}
</div>
```

---

## Component Code Examples

### File Structure

```
components/
  process/
    section-overview.tsx         // 3-section timeline
    framework-5cs.tsx            // 5Cs visualization
    framework-stp.tsx            // STP funnel
    framework-4ps.tsx            // 4Ps grid
    deliverables-list.tsx        // Reusable deliverables component
    what-you-own-grid.tsx        // "What You Own" cards
```

---

### Example: Deliverables Component

```tsx
// components/process/deliverables-list.tsx
import { CheckCircle2 } from "lucide-react"

interface DeliverablesListProps {
  items: string[]
}

export function DeliverablesList({ items }: DeliverablesListProps) {
  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h3 className="text-2xl font-semibold mb-6">Deliverables</h3>
      <ul className="grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Usage:
<DeliverablesList items={[
  "Current state audit (market + funnel analysis)",
  "Revenue model validation",
  "Competitive positioning baseline",
  "5Cs market framework",
  "Measurement gap analysis"
]} />
```

---

## Implementation Roadmap

### Phase 1: Structure & Layout (Week 1)

**Priority:** Foundation work

- [ ] Create new page structure in `/app/process/page.tsx`
- [ ] Implement hero section
- [ ] Implement section overview timeline
- [ ] Set up basic section structure (3 main sections)
- [ ] Add FAQ section
- [ ] Add final CTA

**Deliverable:** Basic page structure with all sections, no frameworks yet

---

### Phase 2: Framework Components (Week 1-2)

**Priority:** Visual differentiation

- [ ] Create `components/process/` directory
- [ ] Build 5Cs framework component
- [ ] Build STP framework component
- [ ] Build 4Ps framework component
- [ ] Integrate frameworks into section details
- [ ] Test responsive behavior

**Deliverable:** All framework visualizations working on desktop + mobile

---

### Phase 3: Polish & Details (Week 2)

**Priority:** Refinement

- [ ] Create "What You Own" grid component
- [ ] Create deliverables list component
- [ ] Refine spacing and typography
- [ ] Add hover states and transitions
- [ ] Test dark mode
- [ ] Verify accessibility (WCAG AA)

**Deliverable:** Polished, production-ready page

---

### Phase 4: SEO & Metadata (Week 2)

**Priority:** SEO optimization

- [ ] Update metadata (title, description)
- [ ] Add structured data (ServiceSchema)
- [ ] Update sitemap
- [ ] Test OpenGraph preview
- [ ] Run SEO validation scripts

**Deliverable:** SEO-optimized page

---

### Phase 5: Testing & Launch (Week 3)

**Priority:** Quality assurance

- [ ] Desktop testing (Chrome, Safari, Firefox)
- [ ] Mobile testing (iOS Safari, Chrome Mobile)
- [ ] Tablet testing (iPad)
- [ ] Performance testing (Lighthouse)
- [ ] Accessibility testing (screen reader)
- [ ] Dark mode verification

**Deliverable:** Shipped redesign

---

## Summary

### What This Design Delivers

✅ **Aligns with Pattern Growth brand voice:**
- Calm: Clean layouts, generous whitespace, no performance
- Observant: Frameworks visualized clearly
- Precise: Every element has purpose
- Strategic: Clear progression (Reality → Aspiration → Action)
- Subtle: No over-designed elements

✅ **Based on real, verified sources:**
- User's actual copy
- CLAUDE.md brand guidelines
- Current /process page structure
- Tailwind CSS + shadcn/ui components
- WCAG 2.1 accessibility standards

✅ **Mobile-responsive:**
- All components adapt gracefully
- Vertical stacking on mobile
- Maintained readability at all sizes

✅ **Technically sound:**
- Uses semantic color tokens (never raw hex)
- Follows established spacing patterns
- Maintains accessibility requirements
- Integrates with existing components

---

**Next Steps:**

1. Review this specification
2. Confirm approach aligns with vision
3. Begin implementation in phases
4. Test as you build

**Questions or modifications needed?** This is a living document—update as requirements evolve.

---

**Document Owner:** Pattern Growth
**Last Updated:** November 19, 2025
**Status:** Ready for implementation
