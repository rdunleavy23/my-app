# CLAUDE.md - AI Assistant Guide for Pattern Growth

**Last Updated:** 2025-11-17
**Repository:** rdunleavy23/my-app
**Production URL:** https://www.patterngrowth.com
**Current Branch:** `claude/claude-md-mi2owj6fn7ddnnqr-016dNcMQpjUfKYJKjCBnnLxj`

This document provides comprehensive guidance for AI assistants working on the Pattern Growth codebase. It covers architecture, conventions, brand guidelines, and critical constraints.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Architecture & Structure](#architecture--structure)
4. [Technology Stack](#technology-stack)
5. [Brand Voice & Copywriting](#brand-voice--copywriting)
6. [Design System](#design-system)
7. [Development Conventions](#development-conventions)
8. [Component Patterns](#component-patterns)
9. [SEO & Performance](#seo--performance)
10. [Git & Deployment](#git--deployment)
11. [Critical Constraints](#critical-constraints)
12. [Common Tasks](#common-tasks)

---

## Quick Start

### Local Development
```bash
npm run dev          # Start dev server on :3000
npm run build        # Production build
npm run lint         # Run ESLint
npm run analyze      # Bundle analysis
npm run performance  # Build + Lighthouse CI audit
```

### Pre-Deployment Checklist
```bash
node scripts/verify-all-10-checks.js  # SEO validation
npm run build                         # Verify build succeeds
npm run lhci                          # Performance check
```

### Key Files
- `app/globals.css` - Design system foundation (666 lines)
- `app/layout.tsx` - Root layout with fonts & SEO (172 lines)
- `next.config.js` - Next.js configuration
- `middleware.ts` - Security headers & redirects
- `.cursorrules` - Complete development guide (262 lines)

---

## Project Overview

**Pattern Growth** is a growth strategy consultancy that operationalizes marketing for B2B companies. The site is built with Next.js 15 using the App Router, emphasizing performance, accessibility, and SEO.

### Core Principles
- **Performance First:** Lighthouse scores ≥85 (perf), ≥95 (a11y), ≥90 (SEO)
- **Accessibility:** WCAG 2.1 AA compliance minimum
- **Type Safety:** Strict TypeScript, no `any` types
- **Server-First:** React Server Components by default
- **SEO-Driven:** Every page optimized for search

### Site Identity
- **Company:** Pattern Growth
- **Domain:** https://www.patterngrowth.com
- **GitHub:** rdunleavy23/my-app
- **Deployment:** Vercel (auto-deploy on push to main)
- **Analytics:** GA4 + Vercel Analytics + Speed Insights

---

## Architecture & Structure

### Directory Layout

```
/home/user/my-app/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, analytics, SEO)
│   ├── page.tsx                  # Homepage (800+ lines)
│   ├── globals.css               # Design system foundation (666 lines)
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # robots.txt configuration
│   ├── not-found.tsx             # 404 page
│   ├── (marketing)/              # Marketing route group
│   ├── about/                    # About page
│   ├── blog/                     # Blog system
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/               # Dynamic blog posts
│   │       ├── page.tsx          # Post rendering
│   │       └── blog-post-tracking.tsx  # Analytics
│   ├── process/                  # How It Works page
│   ├── privacy/                  # Privacy policy
│   ├── styleguide/               # Design system docs
│   ├── fractional-cmo-*/         # SEO-optimized service pages
│   └── api/                      # API routes
│       ├── health/route.ts       # Health check
│       ├── git-content/route.ts  # File access/update
│       └── publish-post/route.ts # Blog publishing
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui (New York style)
│   │   ├── button.tsx            # Pre-configured buttons
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── [30+ UI components]
│   ├── layout/                   # Layout components
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── blocks/                   # Composite components
│   ├── skeletons/                # Loading states
│   ├── Navbar.tsx                # Main navigation
│   ├── theme-provider.tsx        # Dark mode provider
│   └── error-boundary.tsx        # Error handling
│
├── lib/                          # Utilities & business logic
│   ├── utils.ts                  # cn() helper, formatDate()
│   ├── blog.ts                   # Blog post management (85 lines)
│   ├── markdown.ts               # Markdown to HTML processing
│   ├── analytics.ts              # GA4 tracking functions (236 lines)
│   ├── analytics-events.ts       # Event definitions
│   ├── schemas.ts                # JSON-LD structured data
│   └── types.ts                  # TypeScript definitions
│
├── config/                       # Configuration
│   └── site.ts                   # Site metadata & navigation
│
├── content/                      # Content management
│   └── posts/                    # Markdown blog posts (1298 lines total)
│       └── *.md                  # Individual posts with frontmatter
│
├── scripts/                      # Build & validation scripts
│   ├── verify-all-10-checks.js   # Complete SEO validation
│   ├── audit-h1-tags.js
│   ├── audit-title-tags.js
│   ├── audit-images.js
│   ├── audit-internal-linking.js
│   └── [other SEO/validation scripts]
│
├── public/                       # Static assets
│   ├── team/                     # Team photos
│   ├── blog/                     # Blog images
│   ├── logos/                    # Company logos
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt                # Static robots.txt
│
├── hooks/                        # Custom React hooks
│
├── docs/                         # Project documentation
│
└── tmp/                          # Temporary files & backups
```

### App Router Structure

**Route Organization:**
- **(marketing)/** - Route group (doesn't affect URL structure)
- **[slug]/** - Dynamic route segments for blog posts
- **api/** - Server-side API endpoints

**File Conventions:**
- `page.tsx` - Page component (creates route)
- `layout.tsx` - Shared layout wrapper
- `route.ts` - API route handler
- `loading.tsx` - Loading UI (Suspense fallback)
- `error.tsx` - Error boundary

---

## Technology Stack

### Core Framework
- **Next.js 15.5.0** - App Router with React Server Components
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Strict mode enabled
- **Node.js** - Runtime environment

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS with `@theme inline`
- **shadcn/ui** - Component library (New York style)
- **Radix UI** - 38 accessible component primitives
- **class-variance-authority** - Component variant management
- **Framer Motion 12** - Animation library
- **Lucide React** - Icon library (400+ icons)
- **Tabler Icons** - Additional icon set

### Typography
Loaded via `next/font/google` with `display: swap`:
- **DM Sans** - Primary sans-serif (variable font)
- **DM Mono** - Monospace font
- **Platypi** - Serif font (accent use)

### Content & Markdown
- **gray-matter** - Frontmatter parsing
- **unified** - Markdown processing pipeline
- **remark-parse** - Parse markdown to AST
- **remark-gfm** - GitHub Flavored Markdown support
- **remark-rehype** - Transform markdown to HTML
- **rehype-slug** - Auto-generate heading IDs
- **rehype-autolink-headings** - Auto-link headings
- **rehype-stringify** - Serialize HTML

### Analytics & Monitoring
- **Google Analytics 4** - Custom event tracking (see `lib/analytics.ts`)
- **@vercel/analytics** - Vercel Analytics integration
- **@vercel/speed-insights** - Core Web Vitals monitoring
- **@sentry/nextjs** - Error tracking & performance monitoring
- **Lighthouse CI** - Automated performance testing

### Forms & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolver
- **zod 4.0** - Schema validation

### Development Tools
- **ESLint 9** - Linting with Next.js config
- **@next/bundle-analyzer** - Bundle size analysis
- **webpack-bundle-analyzer** - Visual bundle analysis
- **Vercel CLI** - Deployment & preview management

### Special Integrations
- **@calcom/embed-react** - Calendar booking widget
- **@paper-design/shaders-react** - Visual effects & animations
- **@octokit/rest** - GitHub API integration
- **next-themes** - Dark mode support with system detection
- **next-seo** - SEO component library

---

## Brand Voice & Copywriting

### Voice Personality
Write as **the calm strategist at the whiteboard** who walked in mid-meeting, listened, organized the discussion in real time. Direct questions. Plain language plan. People nod because it reflects reality. Subtle wit. No performance. Empathy shows in reducing effort for the team.

### Voice Descriptors

#### 1. Calm
**Definition:** Unhurried clarity. No drama. Answers before adjectives.

**Use:** clear, measured, steady, consistent, considered

**Avoid:** excited, thrilled, game-changing, revolutionary

**Examples:**
- "Here's the plan for the next eight weeks."
- "We'll keep the team focused on the few decisions that matter."

#### 2. Observant
**Definition:** Notices patterns in behavior and operations, then names them plainly.

**Use:** pattern, signal, duplication, bottleneck, handoff, constraint

**Avoid:** vibe, feel, buzz, hype

**Examples:**
- "Most leads stall at the pricing step. We'll address that first."
- "Two teams write similar content with different goals. We'll combine them."

#### 3. Precise
**Definition:** Every word earns its place. Specific over vague.

**Use:** define, scope, criteria, source, sample, baseline, threshold

**Avoid:** kind of, sort of, somewhat, many, often

**Examples:**
- "Publish two use-case pages by week three."
- "Shift 20% of ad spend to the top three converting terms."

#### 4. Strategic
**Definition:** Explains choices, tradeoffs, and order. Ties actions to outcomes.

**Use:** priority, sequence, options, decision, rationale, impact

**Avoid:** tactics-first lists, trend chasing, tools as strategy

**Examples:**
- "We'll fix positioning before we add channels."
- "This decision reduces CAC and shortens the cycle."

#### 5. Wry (subtle)
**Definition:** A light, human aside that builds connection. Never snark.

**Use:** Short asides in parentheses; one per section at most

**Avoid:** Sarcasm, jokes for laughs, punchlines

**Examples:**
- "We'll skip the 47-slide deck. Two pages will do."
- "Yes, we'll name the metrics before we chase them."

### Brand Personality

Focus on clarity, empathy, and synthesis over noise. Trusted thinking partner who earns authority through precision and insight.

### Copywriting Guidelines

**DO:**
- Lead with the outcome or insight
- Use concrete examples over abstractions
- Name specific numbers, timelines, metrics
- Explain the "why" behind recommendations
- Use short paragraphs (2-3 sentences max)
- Include one subtle aside per section for connection

**DON'T:**
- Use marketing superlatives (revolutionary, groundbreaking, etc.)
- Start with filler phrases ("kind of", "sort of")
- Make vague claims ("many companies", "often")
- Use buzzwords without definition
- Add unnecessary adjectives
- Use sarcasm or jokes that could alienate

---

## Design System

### Color System (SACRED - NEVER BREAK)

**Critical Rule:** Always use semantic tokens. Raw hex/rgb values are FORBIDDEN.

#### Token Hierarchy
```
Brand tokens (--primary, --accent-golden)
  ↓ mapped to
shadcn tokens (--background, --foreground)
  ↓ exposed via
Tailwind utilities (@theme inline → --color-primary)
```

#### Brand Color Tokens

```css
/* Primary Colors */
--primary: oklch(0.383 0.028 229.8)           /* #3E5661 - Main brand color */
--primary-foreground: oklch(0.984 0.002 247.8) /* White text on primary */

--secondary: oklch(0.713 0.031 228.5)         /* #95B0BA - Supporting */
--secondary-foreground: oklch(0.174 0.041 241.3) /* Dark text on secondary */

--tertiary: oklch(0.936 0.041 89.4)           /* #F8ECD1 - Warm backgrounds */
--tertiary-foreground: oklch(0.174 0.041 241.3) /* Dark text on tertiary */

/* Accent Colors */
--accent-deep-navy: oklch(0.174 0.041 241.3)  /* #02273A - Critical CTAs */
--accent-deep-navy-foreground: oklch(0.984 0.002 247.8) /* White text */

--accent-golden: oklch(0.814 0.135 79.8)      /* #FFBF5E - Premium (large text only) */
--accent-golden-foreground: oklch(0.174 0.041 241.3) /* Dark text */

--accent-warm-taupe: oklch(0.697 0.039 68.2)  /* #B9A287 - Subtle accents */
--accent-warm-taupe-foreground: oklch(0.984 0.002 247.8)

--accent-mid-blue: oklch(0.634 0.021 234.6)   /* #8597A1 - Decorative */
--accent-mid-blue-foreground: oklch(0.984 0.002 247.8)
```

#### Accessibility Requirements

| Color | Use Case | Contrast Ratio | WCAG Level |
|-------|----------|----------------|------------|
| Primary (#3E5661) | All text sizes on white | 9.3:1 | AAA |
| Deep Navy (#02273A) | All text sizes on white | 15:1 | AAA |
| Secondary (#95B0BA) | **Backgrounds only** | 2.4:1 | FAIL for text |
| Golden (#FFBF5E) | Large text (24px+) on dark | 1.8:1 | FAIL on white |
| Tertiary (#F8ECD1) | Backgrounds with dark text | 12.8:1 | AAA |

**Rules:**
- Always pair colors with their `-foreground` token
- Secondary: backgrounds only, never for text
- Golden: large text (24px+) on dark backgrounds only
- Test all color combinations with WebAIM Contrast Checker

#### Usage Examples

```tsx
// ✅ CORRECT - Use semantic tokens
<div className="bg-primary text-primary-foreground">
<button className="bg-accent-deep-navy text-accent-deep-navy-foreground">
<section className="bg-tertiary text-tertiary-foreground">
<p className="text-foreground">  {/* Primary text */}
<p className="text-muted-foreground">  {/* Secondary text */}

// ❌ WRONG - Raw colors FORBIDDEN
<div className="bg-[#3E5661]">  {/* NEVER */}
<button style={{backgroundColor: '#02273A'}}>  {/* NEVER */}
<section className="text-[rgb(62,86,97)]">  {/* NEVER */}
```

### Dark Mode Colors

In dark mode, colors are adjusted for better readability:
- Lighter values (increased lightness in OKLCH)
- Slightly desaturated (reduced chroma)
- Maintains contrast ratios
- Logo color transformation via CSS filters

```css
.dark {
  --primary: oklch(0.713 0.031 228.5);  /* Lighter than light mode */
  --background: oklch(0.174 0.041 241.3);  /* Deep navy */
  /* ... other dark mode values ... */
}

/* Logo dark mode transformation */
.dark img[alt="Pattern Growth"] {
  filter: invert(1) brightness(1.3) saturate(1.8) hue-rotate(25deg);
}
```

### Typography Scale

```css
/* Font Families */
--font-sans: DM Sans, ui-sans-serif, sans-serif, system-ui;
--font-mono: DM Mono, ui-monospace, monospace;
--font-serif: Platypi, ui-serif, serif;

/* Responsive Typography Pattern */
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
<h3 className="text-2xl md:text-3xl font-semibold">
<p className="text-base md:text-lg leading-relaxed">
```

### Spacing System

Use multiples of 4 (Tailwind's default spacing scale):
- `p-4` = 1rem (16px)
- `py-8` = 2rem (32px)
- `gap-6` = 1.5rem (24px)
- `space-y-12` = 3rem (48px)

**Section Padding Pattern:**
```tsx
<section className="py-16 md:py-24 lg:py-32">  {/* Vertical padding */}
  <div className="container mx-auto px-4 md:px-6">  {/* Horizontal container */}
```

### Border Radius

```css
--radius: 0.5rem;  /* Base radius (8px) */
--radius-sm: calc(var(--radius) - 4px);  /* 4px */
--radius-md: calc(var(--radius) - 2px);  /* 6px */
--radius-lg: var(--radius);  /* 8px */
--radius-xl: calc(var(--radius) + 4px);  /* 12px */
```

### Shadows

```css
/* Button Hover Shadow */
--shadow-hover-button: 0 4px 6px color-mix(in srgb, var(--primary) 25%, transparent);

/* Card Hover Shadow */
--shadow-hover-card: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

---

## Development Conventions

### File Naming

- **Directories:** `lowercase-with-dashes` (e.g., `auth-wizard`, `site-footer`)
- **Components:** `PascalCase.tsx` (e.g., `HeroSection.tsx`, `Navbar.tsx`)
- **Routes:** `lowercase/page.tsx` (e.g., `about/page.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `utils.ts`, `blog.ts`)
- **API Routes:** `lowercase/route.ts` (e.g., `health/route.ts`)

### TypeScript Conventions

**DO:**
- Use `interface` over `type` for object shapes
- Use `function` keyword for components (not `const`)
- Use named exports for components
- Enable strict mode (already configured)
- Use path alias `@/` for imports
- Define prop interfaces above components

**DON'T:**
- Use `any` type (use `unknown` if necessary)
- Use enums (use maps/objects instead)
- Use default exports for components
- Ignore TypeScript errors

**Example Component Structure:**
```typescript
// 1. Imports
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

// 2. Type definitions
interface ComponentProps {
  title: string
  children: ReactNode
  variant?: "default" | "primary"
}

// 3. Main component (named function)
export function ComponentName({ title, children, variant = "default" }: ComponentProps) {
  return (
    <div className={cn("base-classes", variant === "primary" && "primary-classes")}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

// 4. Subcomponents (if needed)
function SubComponent() {
  return <div>...</div>
}

// 5. Helper functions
function helperFunction(value: string): string {
  return value.toUpperCase()
}
```

### React/Next.js Conventions

**Component Patterns:**
- Server Components by default (no `"use client"`)
- Use `"use client"` only when necessary (hooks, interactivity)
- Functional components with named exports
- Destructure props in function signature
- Use Suspense with fallback for async components

**Server Component Example:**
```typescript
// app/page.tsx (Server Component - default)
import { getData } from "@/lib/api"

export default async function Page() {
  const data = await getData()  // Can fetch directly
  return <div>{data.title}</div>
}
```

**Client Component Example:**
```typescript
// components/InteractiveButton.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
}
```

**Dynamic Import Pattern:**
```typescript
import dynamic from "next/dynamic"

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <HeavyComponentSkeleton />,
  ssr: false  // Disable SSR if needed
})
```

### CSS/Tailwind Conventions

**DO:**
- Use Tailwind utilities exclusively
- Use semantic tokens: `bg-primary`, `text-foreground`
- Mobile-first responsive design: `md:`, `lg:`, `xl:`
- Use opacity modifiers: `bg-primary/90`, `text-white/80`
- Use `cn()` from `@/lib/utils` to merge classes
- Consistent spacing: multiples of 4

**DON'T:**
- Use inline styles (`style={{}}`)
- Use raw colors (`bg-[#3E5661]`)
- Use arbitrary values unless absolutely necessary
- Mix Tailwind with CSS modules

**Responsive Pattern:**
```tsx
<div className="
  flex flex-col          {/* Mobile: vertical stack */}
  md:flex-row            {/* Tablet+: horizontal */}
  gap-4 md:gap-6         {/* Responsive gap */}
  p-4 md:p-6 lg:p-8      {/* Responsive padding */}
">
```

**Class Merging with cn():**
```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className  // Allow prop override
)}>
```

### Git Conventions

**Commit Message Format:**
```
type(scope): description

feat(colors): implement new brand palette
fix(seo): correct canonical URL conflicts
refactor(blog): simplify post retrieval logic
style(button): update hover states
docs(readme): add deployment instructions
test(analytics): add event tracking tests
```

**Commit Types:**
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code restructure (no behavior change)
- `style` - Formatting, whitespace (no code change)
- `docs` - Documentation only
- `test` - Adding/updating tests
- `chore` - Build process, dependencies

---

## Component Patterns

### Button Variants

From `components/ui/button.tsx`:

```tsx
import { Button } from "@/components/ui/button"

// Primary action (brand color)
<Button variant="default">
  Click Me
</Button>

// Secondary action (outlined)
<Button variant="secondary">
  Secondary
</Button>

// Critical CTA (deep navy)
<Button variant="accent">
  Get Started
</Button>

// Premium feature (golden accent)
<Button variant="premium" size="lg">
  Premium Action
</Button>

// Ghost/subtle
<Button variant="ghost">
  Ghost
</Button>

// Destructive action
<Button variant="destructive">
  Delete
</Button>

// Link styled as button
<Button variant="link">
  Learn More
</Button>
```

**Size Options:**
- `size="sm"` - Small button
- `size="default"` - Standard size
- `size="lg"` - Large button
- `size="icon"` - Icon-only (square)

### Card Patterns

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Section Patterns

**Standard Section:**
```tsx
<section className="py-16 md:py-24 bg-background text-foreground">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

**Warm Background Section:**
```tsx
<section className="py-16 md:py-24 bg-tertiary text-tertiary-foreground">
  <div className="container mx-auto px-4 md:px-6">
    {/* Content */}
  </div>
</section>
```

**Accent Section:**
```tsx
<section className="py-16 md:py-24 bg-accent-deep-navy text-accent-deep-navy-foreground">
  <div className="container mx-auto px-4 md:px-6">
    {/* Content */}
  </div>
</section>
```

### Form Patterns

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Define schema
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Loading States

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

// Usage with Suspense
import { Suspense } from "react"

<Suspense fallback={<CardSkeleton />}>
  <AsyncComponent />
</Suspense>
```

### Error Boundary Pattern

```tsx
// app/error.tsx
"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
```

---

## SEO & Performance

### SEO Configuration

**Metadata Pattern (App Router):**
```typescript
// app/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pattern Growth - Growth Strategy Consultancy",
  description: "We operationalize marketing strategy into systems your team can run.",
  keywords: ["growth strategy", "marketing operations", "B2B marketing"],
  authors: [{ name: "Pattern Growth" }],
  openGraph: {
    title: "Pattern Growth",
    description: "Growth strategy consultancy",
    url: "https://www.patterngrowth.com",
    siteName: "Pattern Growth",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pattern Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Growth",
    description: "Growth strategy consultancy",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.patterngrowth.com",
  },
}
```

**Dynamic Sitemap (`app/sitemap.ts`):**
```typescript
import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.patterngrowth.com"
  const posts = await getAllPosts()

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogUrls,
  ]
}
```

**Structured Data (JSON-LD):**
```typescript
// lib/schemas.ts
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pattern Growth",
    "url": "https://www.patterngrowth.com",
    "logo": "https://www.patterngrowth.com/logos/pattern-growth-logo.png",
    "description": "Growth strategy consultancy",
    "sameAs": [
      "https://twitter.com/patterngrowth"
    ]
  }
}

// Usage in layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
/>
```

### Performance Optimization

**Lighthouse CI Targets (`lighthouserc.json`):**
```json
{
  "assertions": {
    "categories:performance": ["error", {"minScore": 0.85}],
    "categories:accessibility": ["error", {"minScore": 0.95}],
    "categories:best-practices": ["error", {"minScore": 0.90}],
    "categories:seo": ["error", {"minScore": 0.90}],
    "largest-contentful-paint": ["error", {"maxNumericValue": 2500}],
    "first-contentful-paint": ["error", {"maxNumericValue": 1800}],
    "cumulative-layout-shift": ["error", {"maxNumericValue": 0.1}]
  }
}
```

**Image Optimization:**
```tsx
import Image from "next/image"

// Always use Next.js Image component
<Image
  src="/team/person.jpg"
  alt="Descriptive alt text"
  width={400}
  height={400}
  className="rounded-lg"
  loading="lazy"  // Default
  placeholder="blur"  // Optional blur-up
  blurDataURL="..."  // Base64 placeholder
/>
```

**Font Loading (already configured in `app/layout.tsx`):**
```typescript
import { DM_Sans, DM_Mono, Platypi } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})
```

**Code Splitting:**
```typescript
import dynamic from "next/dynamic"

// Heavy component loaded on-demand
const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <ApproachSkeleton />,
})
```

**Bundle Analysis:**
```bash
npm run analyze  # Generates bundle size report
```

### Analytics Implementation

**Event Tracking (`lib/analytics.ts`):**
```typescript
import { trackCTAClick, trackFormStart, trackScrollDepth } from "@/lib/analytics"

// CTA Click
trackCTAClick({
  cta_location: "hero",
  cta_text: "Schedule a Call",
  cta_url: "https://cal.com/pattern-growth"
})

// Form Interaction
trackFormStart({
  form_name: "contact_form",
  form_location: "footer"
})

// Scroll Depth
trackScrollDepth({
  depth_percentage: 75
})
```

**Available Events:**
- `trackCTAClick` - CTA interactions
- `trackFormStart` - Form begins
- `trackFormSubmit` - Form completes
- `trackScrollDepth` - Page scroll depth
- `trackBlogPostView` - Blog post views
- `trackNavigationClick` - Nav clicks
- `trackSectionView` - Section visibility

---

## Git & Deployment

### Branch Strategy

**Current Branch:**
```
claude/claude-md-mi2owj6fn7ddnnqr-016dNcMQpjUfKYJKjCBnnLxj
```

**Branch Naming:**
- `main` - Production branch (auto-deploys to Vercel)
- `claude/*` - AI assistant feature branches
- Feature branches should be merged to main via PR

### Git Workflow

**Standard Workflow:**
```bash
# 1. Check current status
git status

# 2. Stage changes
git add .

# 3. Commit with conventional message
git commit -m "feat(seo): add comprehensive CLAUDE.md documentation"

# 4. Push to remote
git push -u origin claude/claude-md-mi2owj6fn7ddnnqr-016dNcMQpjUfKYJKjCBnnLxj
```

**Pre-Push Checklist:**
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No ESLint errors (`npm run lint`)
- [ ] SEO validation passes (`node scripts/verify-all-10-checks.js`)
- [ ] Tested in browser (light + dark mode)
- [ ] No console errors

### Deployment Process

**Automatic Deployment:**
1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Preview deployments for all branches
4. Production URL: https://www.patterngrowth.com

**Manual Deployment:**
```bash
npm run deploy  # Vercel CLI production deployment
```

**Environment Variables:**
- Set via Vercel dashboard
- Never commit `.env*` files
- Required vars:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
  - `SENTRY_DSN` - Sentry error tracking
  - `GITHUB_TOKEN` - API access (if needed)

### Security Headers

**Middleware (`middleware.ts`):**
```typescript
// Security headers applied to all responses
{
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' ...",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}
```

**URL Canonicalization:**
- Trailing slash redirects: `/about/` → `/about`
- Force www subdomain: `patterngrowth.com` → `www.patterngrowth.com`
- HTTP → HTTPS (automatic via Vercel)

---

## Critical Constraints

### DO NOT

❌ **Break the color token system**
- Never use raw hex, rgb, or hsl values
- Never modify `app/globals.css` token mappings without understanding the full system
- Never remove `@theme inline` mappings

❌ **Violate accessibility standards**
- Never use color combinations that fail WCAG 2.1 AA
- Never use Secondary (#95B0BA) for text
- Never use Golden (#FFBF5E) for small text or on light backgrounds

❌ **Introduce performance regressions**
- Never add unoptimized images
- Never import large libraries without code splitting
- Never use `'use client'` unnecessarily
- Never skip Lighthouse CI checks before deploying

❌ **Compromise type safety**
- Never use `any` type
- Never ignore TypeScript errors
- Never disable strict mode

❌ **Deploy without verification**
- Never push to main without running `npm run build` locally
- Never skip SEO validation scripts
- Never deploy with console errors

❌ **Use inline styles**
- Never use `style={{}}` (use Tailwind instead)
- Never add CSS modules (Tailwind only)

### ALWAYS DO

✅ **Use semantic tokens**
- Always use `bg-primary` instead of raw colors
- Always pair colors with `-foreground` variants
- Always test in light and dark mode

✅ **Maintain accessibility**
- Always verify contrast ratios (WebAIM Contrast Checker)
- Always provide alt text for images
- Always ensure keyboard navigation works
- Always include focus states

✅ **Optimize performance**
- Always use `next/image` for images
- Always lazy load heavy components
- Always implement loading states
- Always run `npm run analyze` for large changes

✅ **Follow conventions**
- Always use functional components with `function` keyword
- Always use named exports
- Always use TypeScript interfaces
- Always follow file naming conventions

✅ **Test before deploying**
- Always run `npm run build` locally
- Always test responsive design (mobile, tablet, desktop)
- Always check console for errors
- Always verify SEO metadata

✅ **Write clear commits**
- Always use conventional commit format
- Always write descriptive messages
- Always explain "why" for complex changes

---

## Common Tasks

### Adding a New Page

```typescript
// 1. Create page file: app/new-page/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title - Pattern Growth",
  description: "Page description",
  alternates: {
    canonical: "https://www.patterngrowth.com/new-page",
  },
}

export default function NewPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Page Title</h1>
    </div>
  )
}

// 2. Add to navigation in config/site.ts
export const siteConfig = {
  mainNav: [
    // ... existing items
    {
      title: "New Page",
      href: "/new-page",
      description: "Description for dropdown"
    }
  ]
}

// 3. Add to sitemap.ts
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}
```

### Creating a New Component

```typescript
// 1. Create component file: components/MyComponent.tsx
import { cn } from "@/lib/utils"

interface MyComponentProps {
  title: string
  className?: string
}

export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={cn("p-4 bg-card text-card-foreground", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

// 2. Use in page
import { MyComponent } from "@/components/MyComponent"

<MyComponent title="Hello" className="mb-4" />
```

### Adding a Blog Post

```markdown
<!-- 1. Create markdown file: content/posts/my-post.md -->
---
title: "Post Title"
description: "Post description for preview cards"
publishedAt: "2025-01-15"
author:
  name: "Author Name"
  title: "Author Title"
  image: "/team/author.jpg"
seo:
  title: "SEO-optimized Title"
  description: "SEO description (155 chars)"
  keywords: ["keyword1", "keyword2", "keyword3"]
---

## Introduction

Your blog post content in markdown...

### Subheading

More content with **bold** and *italic*.

- List item 1
- List item 2

```

### Tracking a New Analytics Event

```typescript
// 1. Define event in lib/analytics-events.ts
export const GA4_EVENTS = {
  // ... existing events
  MY_NEW_EVENT: "my_new_event"
}

export interface MyNewEventParams {
  param1: string
  param2: number
}

// 2. Create tracking function in lib/analytics.ts
export function trackMyNewEvent(params: MyNewEventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", GA4_EVENTS.MY_NEW_EVENT, params)
  }
}

// 3. Use in component
import { trackMyNewEvent } from "@/lib/analytics"

function handleClick() {
  trackMyNewEvent({
    param1: "value",
    param2: 42
  })
}
```

### Running SEO Validation

```bash
# Run all 10 SEO checks
node scripts/verify-all-10-checks.js

# Run individual checks
node scripts/audit-h1-tags.js
node scripts/audit-title-tags.js
node scripts/audit-images.js
node scripts/audit-internal-linking.js
node scripts/validate-json-ld.js
node scripts/validate-robots-sitemap.js
```

### Debugging Build Issues

```bash
# 1. Check for TypeScript errors
npx tsc --noEmit

# 2. Check for ESLint errors
npm run lint

# 3. Clean build and retry
rm -rf .next
npm run build

# 4. Check bundle size
npm run analyze

# 5. Verbose build output
npm run build -- --debug
```

### Testing Dark Mode

```tsx
// Components should use semantic tokens (auto dark mode support)
<div className="bg-background text-foreground">
  {/* This automatically works in dark mode */}
</div>

// Testing in browser
// 1. Click moon icon in navbar
// 2. Or use system preference (respects OS setting)
// 3. Or set manually in localStorage: "theme" = "dark"
```

---

## Additional Resources

### Key Documentation Files

- `.cursorrules` - Complete development guide (262 lines)
- `README.md` - Project overview
- `DESIGN_SYSTEM_IMPLEMENTATION.md` - Design system details
- `B2B_DESIGN_IMPLEMENTATION_PLAN.md` - B2B design strategy
- `GA4_IMPLEMENTATION_SUMMARY.md` - Analytics setup
- `SITE_SYNC_ANALYSIS.md` - Site structure analysis

### External Documentation

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)
- [React 19 Docs](https://react.dev)

### Design Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [OKLCH Color Picker](https://oklch.com)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse)

---

## Summary

This codebase represents a production-ready, enterprise-grade Next.js application with:

- **Performance:** Lighthouse scores ≥85, optimized images, code splitting
- **Accessibility:** WCAG 2.1 AA compliance, tested contrast ratios
- **SEO:** Complete metadata, sitemaps, structured data, analytics
- **Type Safety:** Strict TypeScript, no compromises
- **Design System:** OKLCH color tokens, semantic naming, dark mode
- **Brand Voice:** Calm, observant, precise, strategic, subtly wry

**Key Principle:** Every change must preserve functionality, maintain accessibility, and improve the user experience. When in doubt, ask before breaking existing patterns.

---

**Last Updated:** 2025-11-17
**Maintained By:** AI assistants working on Pattern Growth codebase
**Questions?** Refer to `.cursorrules` or existing code patterns.
