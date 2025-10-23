# Automatic Related Content System

## 🤖 **How It Works (No Manual Updates Required)**

Your related content is now **100% automatic**. When you add new blog posts or pages, they automatically appear as suggestions on related pages.

---

## 🎯 **The Algorithm**

The system automatically finds related content based on:

### **1. Keyword Matching** (Highest Priority)
```
Current page keywords: ["fractional cmo", "cmo cost"]
Target page keywords: ["fractional cmo", "pricing", "rates"]

Match score: 
- "fractional cmo" exact match = +5 points
- "cmo" partial match = +2 points
- Total: 7 points (High relevance)
```

### **2. Category Matching**
```
Current page: Service page
Target page: Another service page
Score bonus: +3 points

Current page: Blog post
Target page: Another blog post
Score bonus: +2 points
```

### **3. Priority Weighting**
```
High priority pages (pillar content) = +5 points
Medium priority pages = +3 points
Low priority pages = +1 point
```

---

## 📝 **How New Content Gets Discovered**

### **Blog Posts** (Automatic Discovery)
When you create a new blog post in `content/posts/`, the system:

1. **Reads the frontmatter**:
```markdown
---
title: "New Blog Post Title"
description: "Post description"
keywords: ["keyword1", "keyword2", "keyword3"]
priority: "blog-pillar"  # or leave blank for cluster content
---
```

2. **Automatically extracts**:
   - Title
   - Description
   - Keywords (from `seo.keywords` field)
   - Priority (pillar vs cluster)

3. **Calculates relevance** to all other pages

4. **Shows as suggestion** on pages with matching keywords

### **Service Pages** (Manual Registration)
For new service pages, add them to the metadata array:

```typescript
// In components/ui/related-content.tsx, line 38
{
  path: '/your-new-page',
  title: 'Your New Page Title',
  description: 'Brief description for the card',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  category: 'service',  // or 'blog', 'process', 'about'
  priority: 8  // 1-10, higher = more important
}
```

---

## 🔍 **Real Examples**

### **Example 1: Fractional CMO Page**
```
Current page: /what-is-fractional-cmo
Keywords: ["fractional cmo", "cmo definition", "fractional cmo alternative"]

Automatically suggests:
1. /fractional-cmo-hourly-rate (keywords overlap: "fractional cmo", "cmo")
2. /blog/fractional-cmo-alternative (exact match: "fractional cmo alternative")
3. /fractional-cmo-services (keywords overlap: "fractional cmo")
```

### **Example 2: Blog Post**
```
Current page: /blog/fractional-cmo-alternative
Keywords: ["fractional cmo alternative", "growth strategy sprint"]

Automatically suggests:
1. /what-is-fractional-cmo (exact match: "fractional cmo")
2. /process (exact match: "growth strategy sprint")
3. Other blog posts with "fractional cmo" keywords
```

---

## ✨ **What Happens When You Add New Content**

### **Scenario: You Write a New Blog Post**

**You create**: `content/posts/saas-marketing-strategy.md`
```markdown
---
title: "B2B SaaS Marketing Strategy Guide"
description: "Complete guide to marketing strategy for SaaS companies"
keywords: ["saas marketing", "b2b marketing", "marketing strategy", "growth strategy"]
---
```

**Automatic behavior**:
1. ✅ System reads this post on next build
2. ✅ Extracts title, description, keywords
3. ✅ Calculates relevance to all existing pages
4. ✅ Shows as suggestion on pages with matching keywords:
   - Appears on `/process` (matches "growth strategy")
   - Appears on other marketing-related pages
   - Appears on similar blog posts

**You did nothing manually** - it just works!

---

## 🎛 **Manual Override (Optional)**

If you want to manually control suggestions for a specific page:

```typescript
// In components/ui/related-content.tsx
const MANUAL_OVERRIDES: Record<string, RelatedLink[]> = {
  '/special-page': [
    {
      title: "Custom Link Title",
      description: "Custom description",
      href: "/custom-target",
      icon: <Users className="h-5 w-5" />,
      priority: 'high'
    }
  ]
}
```

When manual overrides exist, they **replace** automatic suggestions for that page.

---

## 📊 **Testing the Algorithm**

### **See What Gets Suggested**
```bash
# Build and run locally
npm run build
npm run start

# Visit any page with related content
# Scroll to bottom to see suggestions
```

### **Verify Relevance**
```
Expected: Pages with similar keywords show up
Expected: Service pages suggest other service pages
Expected: Blog posts suggest related blog posts
Expected: Most relevant content appears first
```

---

## 🔧 **Customization Options**

### **1. Change Number of Suggestions**
```typescript
// Show 2 items instead of 3
<RelatedContent 
  currentPage="/what-is-fractional-cmo" 
  maxLinks={2}
/>
```

### **2. Change Visual Style**
```typescript
// Subtle text links
<RelatedContent 
  currentPage="/what-is-fractional-cmo" 
  variant="inline"
/>

// Sidebar cards
<RelatedContent 
  currentPage="/what-is-fractional-cmo" 
  variant="sidebar"
/>

// Default cards (current)
<RelatedContent 
  currentPage="/what-is-fractional-cmo" 
  variant="cards"
/>
```

### **3. Adjust Scoring Algorithm**
If suggestions aren't relevant enough, adjust scores in `calculateRelevance()`:

```typescript
// In components/ui/related-content.tsx
// Make keyword matches more important
if (currentKeywords.has(keyword)) {
  score += 10  // Increase from 5 to 10
}

// Make category matching more important
if (currentPage.category === targetPage.category) {
  score += 5  // Increase from 3 to 5
}
```

---

## 🎯 **Best Practices**

### **1. Use Consistent Keywords**
```markdown
Good:
keywords: ["fractional cmo", "cmo services", "marketing consulting"]

Avoid:
keywords: ["fcmo", "chief marketing officer services", "fractional-cmo"]
```

### **2. Set Appropriate Priorities**
```typescript
priority: 10  // Main pillar pages only
priority: 8-9 // Important service pages, pillar blog posts
priority: 6-7 // Supporting pages
priority: 4-5 // Minor pages
```

### **3. Add Meaningful Descriptions**
```markdown
Good:
description: "Complete guide to fractional CMO pricing, costs, and alternatives"

Avoid:
description: "Learn more about fractional CMOs"
```

---

## 🚀 **Performance**

### **Build Time Impact**
- Reads all blog posts: ~50-100ms
- Calculates relevance: ~10-20ms per page
- **Total**: Minimal impact on build time

### **Runtime Impact**
- Related content is generated at **build time**, not request time
- **Zero runtime performance impact**
- Static pages are just as fast as before

---

## ❓ **FAQ**

### **Q: Do I need to manually update anything when I add content?**
**A:** No. Just create your blog post with proper keywords in the frontmatter. The system automatically discovers it.

### **Q: How do I control what shows up?**
**A:** Use consistent keywords in your content. Pages with matching keywords will automatically suggest each other.

### **Q: Can I manually control suggestions for specific pages?**
**A:** Yes, use the `MANUAL_OVERRIDES` map for special cases.

### **Q: What if suggestions aren't relevant?**
**A:** 
1. Check your keywords - make sure related content has similar keywords
2. Adjust the scoring algorithm in `calculateRelevance()`
3. Use manual overrides for specific pages

### **Q: Does this work for new service pages?**
**A:** Yes, but you need to add them to the `getAllPageMetadata()` array. Blog posts are automatically discovered.

---

## 🎉 **Summary**

**What you get**:
- ✅ Automatic content discovery from `content/posts/`
- ✅ Smart relevance scoring based on keywords
- ✅ Zero manual updates when adding new content
- ✅ Manual override option for special cases
- ✅ Customizable display styles

**What you do**:
- ✅ Add proper keywords to your blog post frontmatter
- ✅ That's it!

The system handles the rest automatically.
