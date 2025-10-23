# Related Content - Real Example Walkthrough

## 📖 **Scenario: You Write a New Blog Post**

Let me show you exactly what happens when you add new content:

---

## **Step 1: You Create a New Blog Post**

You create: `content/posts/b2b-saas-marketing-strategy.md`

```markdown
---
title: "B2B SaaS Marketing Strategy: Complete Guide"
description: "Build a complete marketing strategy for your B2B SaaS company without expensive agencies or fractional CMOs"
publishedAt: "2025-10-25"
author:
  name: "Ryan"
  title: "Founder"
seo:
  keywords: ["b2b saas marketing", "saas marketing strategy", "growth strategy", "marketing consulting"]
priority: "blog-pillar"
---

Your blog post content here...
```

---

## **Step 2: System Automatically Discovers It**

When you run `npm run build`:

```
✓ Reading content/posts/b2b-saas-marketing-strategy.md
✓ Extracting metadata:
  - Title: "B2B SaaS Marketing Strategy: Complete Guide"
  - Keywords: ["b2b saas marketing", "saas marketing strategy", "growth strategy", "marketing consulting"]
  - Priority: blog-pillar (8 points)
  - Category: blog
```

---

## **Step 3: Relevance Scores are Calculated**

The system compares your new post to every existing page:

### **Comparison with `/process` page**
```
Page keywords: ["growth strategy", "marketing strategy process", "project-based consulting"]
Your post keywords: ["b2b saas marketing", "saas marketing strategy", "growth strategy", "marketing consulting"]

Scoring:
- Exact match "growth strategy": +5 points
- Partial match "marketing" (in "marketing strategy"): +2 points
- Same category bonus: +2 points (both are high-value content)
- Priority bonus: +4 points (both are important pages)

Total score: 13 points (HIGH relevance)
```

### **Comparison with `/what-is-fractional-cmo`**
```
Page keywords: ["fractional cmo", "fractional cmo definition", "fractional cmo alternative"]
Your post keywords: ["b2b saas marketing", "saas marketing strategy", "growth strategy", "marketing consulting"]

Scoring:
- Partial match "marketing": +2 points
- Priority bonus: +4 points

Total score: 6 points (MEDIUM relevance)
```

### **Comparison with `/about`**
```
Page keywords: ["about", "team", "company"]
Your post keywords: ["b2b saas marketing", "saas marketing strategy", "growth strategy"]

Scoring:
- No keyword matches: 0 points

Total score: 0 points (NOT RELEVANT - won't show)
```

---

## **Step 4: Suggestions Appear Automatically**

### **On `/process` page:**
```
Continue Learning
┌───────────────────────────────────────┐
│ 📘 B2B SaaS Marketing Strategy        │
│ Build a complete marketing strategy   │
│ for your B2B SaaS company without     │
│ expensive agencies                    │
│ Read more →                           │
└───────────────────────────────────────┘
```

### **On `/what-is-fractional-cmo` page:**
```
Continue Learning
┌───────────────────────────────────────┐
│ 📘 Fractional CMO Alternative         │  ← Highest score
│ Why project-based strategy sprints... │
└───────────────────────────────────────┘
┌───────────────────────────────────────┐
│ 📘 B2B SaaS Marketing Strategy        │  ← Your new post
│ Build a complete marketing strategy   │
└───────────────────────────────────────┘
```

---

## **Real Current Example**

Right now, on your `/what-is-fractional-cmo` page, the system automatically suggests:

### **What Shows Up**:
```
1. /fractional-cmo-hourly-rate
   Score: 15 points
   Why: "fractional cmo" exact match (5) + same category (3) + priority (4.5) + service bonus (2)

2. /blog/fractional-cmo-alternative
   Score: 13 points
   Why: "fractional cmo alternative" exact match (5) + "fractional cmo" (5) + priority (3)

3. /fractional-cmo-services
   Score: 11 points
   Why: "fractional cmo" exact match (5) + same category (3) + priority (3)
```

---

## **Another Example: Adding a Cost Analysis Post**

You create: `content/posts/fractional-cmo-cost-breakdown.md`

```markdown
---
title: "Fractional CMO Cost Breakdown: Hidden Fees & True ROI"
description: "Detailed analysis of fractional CMO costs including hidden fees, commitment costs, and alternatives"
seo:
  keywords: ["fractional cmo cost", "fractional cmo pricing", "cmo rates", "marketing consulting cost"]
---
```

### **This Automatically Appears On**:
- `/fractional-cmo-hourly-rate` (exact keyword matches)
- `/what-is-fractional-cmo` (related topic)
- `/fractional-cmo-services` (related services)

### **It Won't Appear On**:
- `/about` (no keyword overlap)
- Blog posts about completely different topics

---

## **Testing It Yourself**

### **1. Check Current Suggestions**
```bash
npm run build
npm run start

# Visit: http://localhost:3000/what-is-fractional-cmo
# Scroll to bottom - see what's suggested
```

### **2. Add a New Post**
```bash
# Create content/posts/test-automatic-suggestions.md
# Add proper keywords in frontmatter
# Run: npm run build
# Visit the page - your post appears automatically!
```

---

## **How to Optimize Suggestions**

### **Use Overlapping Keywords**
```markdown
Good (creates connections):
Page 1: ["fractional cmo", "marketing strategy", "consulting"]
Page 2: ["marketing strategy", "growth consulting", "strategy sprint"]
Connection: "marketing strategy" creates a link

Bad (no connections):
Page 1: ["fractional cmo", "executive leadership"]
Page 2: ["saas growth", "revenue optimization"]
Connection: None - pages won't suggest each other
```

### **Group Related Content**
```markdown
Pillar Post: "What is a Fractional CMO?"
Keywords: ["fractional cmo", "cmo definition", "marketing leadership"]

Cluster Post 1: "Fractional CMO Cost Guide"
Keywords: ["fractional cmo", "fractional cmo cost", "pricing"]

Cluster Post 2: "Fractional CMO Alternatives"
Keywords: ["fractional cmo alternative", "project-based consulting", "fractional cmo"]

Result: All three automatically link to each other!
```

---

## **Visual Diagram**

```
Your Content Network (Automatic):

┌─────────────────────────────┐
│ What is Fractional CMO?     │ ← Pillar
│ keywords: [fractional cmo,  │
│  cmo definition, alternative]│
└────────┬───────────┬────────┘
         │           │
         ↓           ↓
    ┌────────┐  ┌────────────┐
    │  Cost  │  │Alternative │ ← Clusters
    │ Guide  │  │   Blog     │
    └────────┘  └────────────┘
         ↓           ↓
    [Automatically suggests each other
     based on "fractional cmo" keyword]
```

---

## **Pro Tips**

### **1. Keyword Strategy**
```markdown
Main keyword: "fractional cmo"
Use in: 
- Main pillar page
- Cost guide
- Services page
- Alternative blog post
- Benefits page

Result: All pages automatically interconnect
```

### **2. Priority Levels**
```markdown
Priority 10: Main fractional CMO guide (pillar)
Priority 9: Process page, pricing guide
Priority 8: Blog pillar posts
Priority 6-7: Supporting service pages
Priority 5-6: Cluster blog posts

Result: High-priority content gets suggested more often
```

### **3. Descriptive Titles & Descriptions**
```markdown
Good:
title: "Fractional CMO Cost: Complete Pricing Breakdown 2025"
description: "Understand fractional CMO pricing models, hidden costs, and alternatives"

Result: Clear, compelling suggestion cards

Bad:
title: "CMO Pricing"
description: "Learn more"

Result: Vague, uninviting suggestion
```

---

## **Summary**

### **What You Do**:
1. Create blog post
2. Add keywords to frontmatter
3. Build site

### **What Happens Automatically**:
1. System reads your post
2. Extracts metadata
3. Calculates relevance to all pages
4. Shows suggestions on related pages
5. Updates every time you build

**Zero manual link management required!** 🎉
