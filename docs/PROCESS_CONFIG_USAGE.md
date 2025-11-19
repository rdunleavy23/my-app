# Process Config Usage Guide

## Overview

The `config/process.ts` file contains all process page content as structured data, separated from presentation logic. This makes the content easy to:

- ✅ Update without touching component code
- ✅ Version control and review
- ✅ Reuse across multiple components
- ✅ Type-check with TypeScript
- ✅ Test independently

---

## File Structure

```
config/process.ts
├─ Types (ProcessSection, Framework, FAQ, etc.)
├─ heroContent
├─ processSections (array of 3 sections)
├─ ownershipCategories
├─ faqs
├─ ctaContent
└─ processMetadata
```

---

## Component Usage Examples

### 1. Hero Section

```tsx
// app/process/page.tsx
import { heroContent } from "@/config/process"
import { GetStartedButton } from "@/components/ui/get-started-button"

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroContent.title}
          </h1>

          <div className="text-base md:text-lg text-muted-foreground space-y-4 mb-8">
            {heroContent.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
            {heroContent.tagline}
          </p>

          <GetStartedButton size="lg" />
        </div>
      </section>

      {/* Rest of page... */}
    </>
  )
}
```

---

### 2. Section Overview Timeline

```tsx
import { processSections } from "@/config/process"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

function SectionOverview() {
  return (
    <section className="py-12 md:py-16 bg-tertiary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Our Three-Section Process
        </h2>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-start gap-4">
          {processSections.map((section, idx) => (
            <React.Fragment key={section.id}>

              <Card className="flex-1 bg-background border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {section.number}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {section.timeline}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {section.framework?.description || section.intro.slice(0, 80) + "..."}
                  </p>
                </CardContent>
              </Card>

              {idx < processSections.length - 1 && (
                <ArrowRight className="flex-shrink-0 mt-12 text-primary" />
              )}

            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="md:hidden space-y-6">
          {processSections.map((section, idx) => (
            <React.Fragment key={section.id}>
              <Card className="bg-background border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">
                        {section.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                        {section.timeline}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {section.framework?.description || section.intro.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {idx < processSections.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className="h-6 w-6 text-primary" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}
```

---

### 3. Section Details (Loop through sections)

```tsx
import { processSections } from "@/config/process"
import { Framework5Cs } from "@/components/process/framework-5cs"
import { STPFramework } from "@/components/process/framework-stp"
import { FourPsGrid } from "@/components/process/framework-4ps"
import { DeliverablesList } from "@/components/process/deliverables-list"

// Map framework IDs to components
const frameworkComponents = {
  "5cs": Framework5Cs,
  "stp": STPFramework,
  "4ps": FourPsGrid
}

function ProcessSections() {
  return (
    <>
      {processSections.map((section) => {
        const FrameworkComponent = section.framework
          ? frameworkComponents[section.framework.id]
          : null

        return (
          <section key={section.id} className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">

              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {section.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      Section {section.number} · {section.timeline}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground">
                  {section.intro}
                </p>
              </div>

              {/* Subsections */}
              <div className="space-y-12">
                {section.subsections.map((subsection, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      {subsection.heading}
                    </h3>
                    <div className="space-y-4 text-muted-foreground">
                      {subsection.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Framework Visualization */}
                {FrameworkComponent && (
                  <div className="mt-12">
                    <FrameworkComponent />
                  </div>
                )}
              </div>

              {/* Deliverables */}
              <DeliverablesList items={section.deliverables} />

            </div>
          </section>
        )
      })}
    </>
  )
}
```

---

### 4. Framework Components (Using Config Data)

```tsx
// components/process/framework-5cs.tsx
import { processSections } from "@/config/process"
import { Card, CardContent } from "@/components/ui/card"

export function Framework5Cs() {
  // Find the 5Cs framework in the config
  const framework = processSections
    .find(s => s.framework?.id === "5cs")
    ?.framework

  if (!framework) return null

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          {framework.title}
        </h3>
        <p className="text-muted-foreground">
          {framework.description}
        </p>
      </div>

      <div className="space-y-4">
        {framework.items.map((item, idx) => (
          <Card key={idx} className="bg-tertiary/30 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
```

---

### 5. What You Own Section

```tsx
import { ownershipCategories } from "@/config/process"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function WhatYouOwnSection() {
  return (
    <section className="py-16 md:py-24 bg-tertiary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          What You Own After Eight Weeks
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {ownershipCategories.map((category, idx) => (
            <Card key={idx} className="bg-background border-border">
              <CardHeader>
                <category.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
```

---

### 6. FAQ Section

```tsx
import { faqs } from "@/config/process"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        <h2 className="text-3xl font-semibold mb-8">Common Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer.map((paragraph, pIdx) => (
                  <p key={pIdx} className={pIdx > 0 ? "mt-3" : ""}>
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
```

---

### 7. CTA Section

```tsx
import { ctaContent } from "@/config/process"
import { GetStartedButton } from "@/components/ui/get-started-button"

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-tertiary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {ctaContent.heading}
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          {ctaContent.body}
        </p>

        <GetStartedButton size="lg" />

        <p className="text-sm text-muted-foreground mt-6">
          {ctaContent.subtext}
        </p>

      </div>
    </section>
  )
}
```

---

### 8. Metadata (for SEO)

```tsx
// app/process/page.tsx
import type { Metadata } from "next"
import { processMetadata } from "@/config/process"

export const metadata: Metadata = {
  title: processMetadata.title,
  description: processMetadata.description,
  keywords: processMetadata.keywords,
  alternates: {
    canonical: "https://www.patterngrowth.com/process"
  },
  openGraph: {
    title: processMetadata.title,
    description: processMetadata.description,
    url: "https://www.patterngrowth.com/process",
    type: "website"
  }
}
```

---

## Benefits of This Approach

### ✅ Content Management
```typescript
// To update copy, edit ONE file:
export const heroContent = {
  title: "Our Process", // Changed!
  // ...
}

// All components using heroContent.title automatically update
```

### ✅ Type Safety
```typescript
// TypeScript catches errors:
const section = processSections[0]
section.deliverables.map(...) // ✅ Type-safe
section.doesNotExist // ❌ Compile error
```

### ✅ Reusability
```typescript
// Use same data in multiple places:
import { processSections } from "@/config/process"

// In main page:
<ProcessSections sections={processSections} />

// In sidebar nav:
<SidebarNav sections={processSections} />

// In sitemap:
processSections.map(s => ({
  url: `/process#${s.id}`,
  title: s.title
}))
```

### ✅ Testing
```typescript
// Test content independently:
import { faqs } from "@/config/process"

test("all FAQs have questions and answers", () => {
  faqs.forEach(faq => {
    expect(faq.question).toBeTruthy()
    expect(faq.answer.length).toBeGreaterThan(0)
  })
})
```

### ✅ Version Control
```bash
# Clear diffs when copy changes:
git diff config/process.ts

# Only shows content changes, not component logic
```

---

## Updating Content Workflow

### 1. Edit Config File
```typescript
// config/process.ts
export const heroContent = {
  title: "How We Work", // Update here
  // ...
}
```

### 2. Components Auto-Update
```tsx
// app/process/page.tsx
// No changes needed - already pulling from config
<h1>{heroContent.title}</h1>
```

### 3. Commit Changes
```bash
git add config/process.ts
git commit -m "content(process): update hero title"
```

---

## Next Steps

1. **Review config structure** - `config/process.ts`
2. **Create framework components** - That consume config data
3. **Build main page** - Loop through `processSections`
4. **Test responsiveness** - Desktop + mobile
5. **Update as needed** - All content in one place

---

**Key Principle:** Content lives in `config/process.ts`, presentation lives in components. Clean separation of concerns.
