# AI Platform Visibility Strategy
## Comprehensive Guide for Pattern Growth

**Last Updated**: 2025-11-15
**Version**: 2.0 (Post-Gap Analysis)

---

## Table of Contents
1. [Overview](#overview)
2. [Crawler Strategy (TIER 1)](#tier-1-crawler-optimization)
3. [Schema & Structured Data (TIER 2)](#tier-2-schema--structured-data)
4. [Source Attribution & Content (TIER 3)](#tier-3-source-attribution--content-optimization)
5. [Monitoring & Analytics (TIER 4)](#tier-4-monitoring--analytics)
6. [Platform-Specific Tactics (TIER 5)](#tier-5-platform-specific-tactics)
7. [Ongoing Maintenance (TIER 6)](#tier-6-ongoing-maintenance)
8. [Implementation Checklist](#implementation-checklist)

---

## Overview

This strategy addresses 10 critical gaps in AI platform visibility identified during implementation review. Pattern Growth's goal: maximize citations and traffic from AI platforms (ChatGPT, Claude, Perplexity, Google AI Overviews) while protecting content from unauthorized training use.

**Business Impact**:
- Appear in AI search results with proper citations (traffic driver)
- Block unauthorized AI training on content (IP protection)
- Monitor which AI platforms cite us (competitive intelligence)
- Ensure schema quality for AI trust signals (credibility)

---

## TIER 1: Crawler Optimization (Foundational)

### Critical Distinction: Training vs. Search Bots

**⚠️ GAP 1 FIX**: OpenAI uses DIFFERENT bots for different purposes:

| Bot Name | Purpose | Decision | Impact |
|----------|---------|----------|--------|
| **GPTBot** | Trains AI models | ❌ BLOCKED | Content feeds AI, no traffic benefit |
| **OAI-SearchBot** | ChatGPT search results | ✅ ALLOWED | Drives traffic with citations |
| **ChatGPT-User** | On-demand browsing | ✅ ALLOWED | User-initiated, cites source |

**Implementation**: See `/app/robots.ts`

```typescript
// BLOCKED: Training bots (IP protection)
GPTBot -> disallow: "/"
Google-Extended -> disallow: "/"
CCBot -> disallow: "/"

// ALLOWED: Search & citation bots (traffic drivers)
OAI-SearchBot -> allow: "/"  // CRITICAL for ChatGPT search
PerplexityBot -> allow: "/"
anthropic-ai -> allow: "/"
Bingbot -> allow: "/"  // Powers ChatGPT search backend
```

### Platform-Specific Crawler Requirements

#### **ChatGPT Search**
- **Bot**: `OAI-SearchBot` (NOT GPTBot)
- **Index**: Uses Bing index + OAI-SearchBot
- **Requirements**:
  - Allow OAI-SearchBot in robots.txt ✅
  - Allow Bingbot for index coverage ✅
  - Fast page load (<2s for crawlers) ⚠️ Monitor
  - Clean HTML structure ✅

#### **Perplexity**
- **Bot**: `PerplexityBot`
- **Strategy**: Prioritizes fresh content
- **Requirements**:
  - Allow PerplexityBot ✅
  - Visible publication dates ⚠️ Needs improvement
  - Update timestamps on service pages ❌ TO DO
  - Answer-oriented content structure ✅

#### **Google AI Overviews**
- **Bot**: Standard `Googlebot` (NOT Google-Extended)
- **Strategy**: Schema quality matters more than presence
- **Requirements**:
  - Block Google-Extended (training) ✅
  - Allow Googlebot (search) ✅
  - High-quality schema markup ⚠️ Validate quarterly
  - Entity clarity (brand mentions) ⚠️ TO DO

#### **Claude**
- **Bot**: `anthropic-ai`, `Claude-Web`
- **Strategy**: Emphasizes HTML clarity
- **Requirements**:
  - Allow anthropic-ai ✅
  - Semantic HTML ✅
  - Clean heading hierarchy ✅
  - Minimal JavaScript rendering ✅

### JavaScript Rendering Check
✅ **Status**: Next.js SSR/SSG - all content server-rendered, fully visible to crawlers

### Page Load Speed for AI Bots
**Target**: <2 seconds
**Current**: ⚠️ Monitor via Vercel logs
**Action**: Check p95 response times for AI crawler requests

---

## TIER 2: Schema & Structured Data

### ⚠️ GAP 3 FIX: Schema Quality > Schema Presence

**Problem**: AI platforms ignore poorly-implemented schema. Quality validation is critical.

**Solution**: Quarterly schema audits

**Run validation**:
```bash
npm run validate:schema
```

**Validation checks**:
- ✅ Required properties for each @type
- ✅ URL consistency (canonical domain)
- ✅ Date format correctness
- ⚠️ Image accessibility (manual check)
- ⚠️ Entity clarity (brand mentions)

### Current Schema Implementation

| Schema Type | Location | Status | Next Action |
|-------------|----------|--------|-------------|
| Organization | `app/layout.tsx` | ✅ Complete | Quarterly validation |
| WebSite | `app/layout.tsx` | ✅ Complete | Quarterly validation |
| Service | Service pages | ✅ Complete | Add FAQ schema |
| BlogPosting | `app/blog/[slug]` | ✅ Complete | Quarterly validation |
| Person | `app/about` | ✅ Complete | Quarterly validation |
| BreadcrumbList | Blog/service pages | ✅ Complete | Quarterly validation |
| FAQPage | ❌ Missing | ❌ **HIGH PRIORITY** | Add to key pages |

### Missing Schema Opportunities

**GAP 6: FAQ Schema** (High Citation Impact)

AI platforms LOVE FAQ format. Add to:
- `/what-is-fractional-cmo` - Service FAQs
- `/process` - Process FAQs
- `/fractional-cmo-hourly-rate` - Pricing FAQs

**Implementation template**:
```typescript
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How is a growth strategy sprint different from a fractional CMO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Pattern Growth provides project-based 8-week sprints..."
    }
  }]
}
```

---

## TIER 3: Source Attribution & Content Optimization

### ⚠️ GAP 4 FIX: Extractable Content Structures

AI platforms cite content that's easy to extract. Optimize for:

#### **Entity Clarity**
- ✅ Brand name consistency: "Pattern Growth" (not variations)
- ⚠️ Expertise signals: Add author credentials prominently
- ❌ **TO DO**: Add "About the Author" sections to blog posts

#### **Extractable Structures**
Priority order for AI citation:
1. **FAQ sections** (direct Q&A format) - ⚠️ **TO DO**
2. **Comparison tables** (structured data) - ✅ Exists on some pages
3. **Bulleted lists** (scannable points) - ✅ Used throughout
4. **Numbered steps** (process flows) - ✅ Used in /process
5. Dense paragraphs (least cited) - ⚠️ Break up on service pages

#### **Provenance Signals**

**⚠️ GAP 8 FIX: Content Freshness**

Add to ALL service pages:
```typescript
// In metadata
metadata: {
  other: {
    'article:published_time': '2024-01-15',
    'article:modified_time': '2025-11-15',  // Update quarterly
    'article:author': 'Ryan & William, Pattern Growth',
  }
}
```

**Visual freshness indicators** (add to service pages):
```tsx
<div className="text-sm text-muted-foreground">
  Last updated: November 15, 2025
</div>
```

#### **Author Credentials** (Gap 4)

Add to blog posts:
```tsx
<div className="author-bio">
  <h4>About the Author</h4>
  <p>Ryan is a growth strategist specializing in B2B companies ($1-5M revenue).
     Based in Dallas, TX, he helps companies build marketing systems they can run independently.</p>
</div>
```

#### **Cited Sources Within Content**

For credibility, cite external sources:
```markdown
## Data Sources
- Industry benchmarks: [Gartner B2B Marketing Report 2024]
- Attribution models: [Google Analytics Documentation]
- ROI calculations: Based on anonymized client results
```

---

## TIER 4: Monitoring & Analytics

### ⚠️ GAP 2 FIX: Server-Side AI Crawler Monitoring

**Implementation**: Middleware tracks all AI crawler visits

**Location**: `/middleware.ts`

**Logs to**: Vercel console logs (accessible via Vercel dashboard)

**Tracked data**:
```json
{
  "type": "ai_crawler_visit",
  "crawler": "ChatGPT Search",
  "bot": "OAI-SearchBot",
  "url": "/blog/fractional-cmo-alternative",
  "timestamp": "2025-11-15T12:00:00Z",
  "blocked": false
}
```

### How to Monitor AI Crawler Activity

#### **Option 1: Vercel Logs (Free)**
1. Go to Vercel Dashboard → Your Project → Logs
2. Filter by: `ai_crawler_visit`
3. Export weekly for analysis

**Queries to track**:
- Which crawlers visit most? (`crawler` field)
- Which pages do AI platforms prioritize? (`url` field)
- Any blocked crawler attempts? (`blocked: true`)
- Response time issues? (check `duration` in Vercel logs)

#### **Option 2: Log Aggregation (Recommended for scale)**

Tools: Splunk, Datadog, Sumo Logic, Logtail

**Setup** (if needed later):
1. Add Vercel log drain integration
2. Create dashboard for AI crawler metrics
3. Set alerts for:
   - Crawler 404 errors
   - Slow response times (>2s)
   - Blocked crawler retry attempts

### Early Warning System

**⚠️ GAP 2 FIX: Error Detection**

Monitor for:
1. **404 errors**: AI crawlers hitting outdated URLs
2. **Timeout issues**: Pages loading >2s for crawlers
3. **Robots.txt blocks**: Legitimate crawlers getting denied
4. **Schema errors**: Validation failures

**Action**: Check Vercel logs weekly for `type: ai_crawler_visit` + errors

### Content Citation Tracking

**⚠️ GAP 10 FIX: Competitive Attribution Benchmarking**

**Manual monitoring** (monthly):
1. Query ChatGPT: "What are alternatives to fractional CMO services?"
2. Query Perplexity: "Best growth strategy consultants for B2B companies"
3. Query Google: "8-week marketing strategy sprint"
4. Check if Pattern Growth appears in results
5. Note: Which competitors are cited more?

**Tools for scale**:
- LLM Pulse (tracks citations across AI platforms)
- BrightEdge (AI-powered competitive analysis)
- Manual search tracking spreadsheet

---

## TIER 5: Platform-Specific Tactics

### ⚠️ GAP 5 FIX: Different Platforms Need Different Approaches

#### **Perplexity Optimization**
**Priority**: Fresh content, answer-oriented structure

**Tactics**:
- ✅ Allow PerplexityBot
- ⚠️ Add visible "Last Updated" dates to ALL service pages
- ⚠️ Add FAQ sections (direct answers to questions)
- ✅ Use descriptive H2/H3 headings
- ⚠️ Update blog posts quarterly (shows freshness)

**Content structure Perplexity loves**:
```markdown
## What is [topic]?
[Direct answer in 2-3 sentences]

## How does it work?
[Step-by-step process]

## Key benefits:
- [Benefit 1]
- [Benefit 2]
```

#### **ChatGPT Search Optimization**
**Priority**: Schema quality + OAI-SearchBot access

**Tactics**:
- ✅ Allow OAI-SearchBot (CRITICAL)
- ✅ Block GPTBot (training protection)
- ✅ Allow Bingbot (index coverage)
- ⚠️ Validate schema quarterly
- ⚠️ Add FAQ schema to service pages
- ✅ Fast page load (<2s)

#### **Google AI Overviews Optimization**
**Priority**: Schema quality + entity clarity

**Tactics**:
- ✅ Block Google-Extended (training)
- ✅ Allow Googlebot (search)
- ⚠️ **CRITICAL**: Validate schema with Google Rich Results Test
- ⚠️ Add FAQ schema (AI Overviews love FAQs)
- ⚠️ Entity markup: Ensure "Pattern Growth" has consistent mentions
- ⚠️ Add structured comparison tables

**Schema quality check**:
1. Go to: https://search.google.com/test/rich-results
2. Test each service page URL
3. Fix any errors/warnings

#### **Claude Optimization**
**Priority**: HTML clarity + semantic structure

**Tactics**:
- ✅ Allow anthropic-ai
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Clean article structure
- ✅ Minimal client-side JavaScript
- ✅ llms.txt + llms-full.txt available

---

## TIER 6: Ongoing Maintenance

### ⚠️ GAP 3 & 8 FIX: Content Freshness & Schema Validation

#### **Monthly Tasks**
- [ ] Check Vercel logs for AI crawler activity
- [ ] Monitor 404 errors from crawler visits
- [ ] Test 1-2 competitive search queries manually
- [ ] Review page load times for crawler requests

#### **Quarterly Tasks** (Every 3 months)
- [ ] Run schema validation: `npm run validate:schema`
- [ ] Validate top 5 pages with Google Rich Results Test
- [ ] Update "Last Modified" dates on service pages
- [ ] Update blog post timestamps (if content refreshed)
- [ ] Review competitive citations (manual searches)
- [ ] Check backlink profile (Ahrefs/SEMrush)

#### **Annual Tasks**
- [ ] Comprehensive schema audit (all pages)
- [ ] Competitive benchmarking (citation share analysis)
- [ ] Review AI crawler landscape (new bots to allow/block?)
- [ ] Update llms.txt and llms-full.txt

### Content Freshness Maintenance

**Service pages**: Update quarterly with:
- New case study metrics
- Updated pricing (if changed)
- Refreshed timestamps
- New FAQ questions

**Blog posts**:
- Update high-traffic posts annually
- Add "Updated: [date]" at top
- Refresh statistics and examples

---

## Implementation Checklist

### ✅ Completed (Implemented)
- [x] Fix robots.ts: GPTBot (block) vs OAI-SearchBot (allow)
- [x] Add AI crawler monitoring middleware
- [x] Create schema validation script
- [x] Enhanced llms.txt with FAQ format
- [x] Created llms-full.txt (extended context)
- [x] Added ai.txt (crawler directives)
- [x] Created humans.txt (team transparency)
- [x] Added JSON feed at /feed.json

### ⚠️ High Priority (To Do)
- [ ] Add FAQ schema to `/what-is-fractional-cmo`
- [ ] Add FAQ schema to `/process`
- [ ] Add FAQ schema to `/fractional-cmo-hourly-rate`
- [ ] Add "Last Updated" timestamps to all service pages
- [ ] Add "About the Author" sections to blog posts
- [ ] Validate schema with Google Rich Results Test

### 📊 Medium Priority (Ongoing)
- [ ] Set up monthly AI crawler log review
- [ ] Create competitive citation tracking spreadsheet
- [ ] Monitor page load times for crawler requests
- [ ] Quarterly schema validation workflow

### 🔄 Future Enhancements
- [ ] Log aggregation platform (Datadog/Splunk)
- [ ] Automated citation tracking (LLM Pulse)
- [ ] Backlink monitoring automation
- [ ] Entity markup improvements

---

## Gaps Addressed

This strategy addresses all 10 identified gaps:

1. ✅ **Gap 1**: GPTBot vs OAI-SearchBot distinction (robots.ts)
2. ✅ **Gap 2**: Server-side analytics monitoring (middleware.ts)
3. ✅ **Gap 3**: Schema validation workflow (validate-schema.mjs)
4. ⚠️ **Gap 4**: Source attribution (TO DO: author bios, timestamps)
5. ✅ **Gap 5**: Platform-specific optimization (documented)
6. ✅ **Gap 6**: Training vs. search bot strategy (robots.ts)
7. ⏸️ **Gap 7**: API documentation (not needed yet)
8. ⚠️ **Gap 8**: Content freshness signals (TO DO: add timestamps)
9. ⏸️ **Gap 9**: Backlinks & authority (ongoing monitoring needed)
10. ⚠️ **Gap 10**: Competitive benchmarking (manual process documented)

---

## Resources

**Validation Tools**:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Local validation: `npm run validate:schema`

**Monitoring**:
- Vercel Logs: Dashboard → Project → Logs → Filter `ai_crawler_visit`
- Vercel Analytics: Check page load times by user agent

**Documentation**:
- OpenAI robots.txt specs: https://platform.openai.com/docs/gptbot
- Perplexity SEO: https://docs.perplexity.ai/
- Google Search Central: https://developers.google.com/search

---

**Document Owner**: Ryan & William, Pattern Growth
**Next Review**: 2026-02-15 (Quarterly)
