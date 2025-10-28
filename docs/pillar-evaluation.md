# Pillar Architecture Evaluation — October 2025

## Overview
- **Objective**: Validate current pillar set for Pattern Growth and determine if structural adjustments are required to match keyword demand and user intent.
- **Inputs**: Existing pillar content (`/what-is-fractional-cmo`, `/fractional-cmo-hourly-rate`, `/process`), competitive research, keyword data (`docs/keyword-research-2025.md`), analytics snapshots (GSC, GA4, July–September 2025).

## Current Pillars
1. `what-is-fractional-cmo`
2. `fractional-cmo-hourly-rate`
3. `process`

### Assessment Criteria
- Search intent coverage (awareness → decision).
- Keyword clustering and cannibalization risk.
- Conversion alignment and CTA clarity.
- Content depth vs. SERP leaders (word count, visuals, schema).
- Internal linking hub strength.

## Findings
### 1. `what-is-fractional-cmo`
- **Strengths**: Comprehensive overview, FAQ schema implemented, strong metadata. Ranking avg: position 5 (GSC US).
- **Gaps**:
  - Missing visible TOC leads to weaker scannability vs. competitors.
  - No explicit “Updated on” or change log; competitors stress freshness.
  - Alternatives section overlaps with blog post `fractional-cmo-alternative`; opportunity to consolidate insights and avoid duplication.
  - Limited proof points (metrics, anonymized outcomes) to differentiate.
- **Action**: Add TOC, add refresh badge, merge overlapping content from blog (leave blog as opinionated piece with canonical linking), surface quick comparison table and POV statements.

### 2. `fractional-cmo-hourly-rate`
- **Strengths**: Deep pricing breakdown, structured sections, callouts. Ranking avg: position 7 (US), 9 (UK).
- **Gaps**:
  - Snippet competitor uses bullet-style definitions; our paragraphs exceed 40 words.
  - No calculator or interactive component; consider table-based slider (lightweight). If not feasible, provide scenario breakdown table.
  - Frequently asked questions exist but lack schema markup; add FAQ schema for cost queries.
  - CTA placed only at bottom; add mid-article schedule CTA with context.
- **Action**: Introduce quick definition block, expand tables (monthly vs. project cost), add FAQ schema, add mid-content CTA, ensure internal links to process page anchor (#pricing). Document adjustments in `docs/pillar-update-log.md`.

### 3. `process`
- **Strengths**: Strong narrative, step-by-step stage cards, supports conversion. Ranking avg: position 18 (US) for “growth strategy consulting”.
- **Gaps**:
  - Header lacks keyword alignment (“How It Works” only). Need H1 with target term.
  - No TOC; long scroll causing drop-off (Avg time: 1:42 vs. target 3+ mins).
  - Minimal schema (service only). Add FAQ or HowTo for process steps.
  - Lacks integration of proof metrics and visuals (should include timeline or flow diagram).
- **Action**: Update H1 to include keyword, add TOC and timeline graphic (static image or component), embed case metrics, implement HowTo schema describing stages.

## Recommended Pillar Adjustments
| Pillar | Keep? | Changes | New Sections | Notes |
|--------|-------|---------|--------------|-------|
| Fractional CMO Guide | ✅ | TOC, refresh badge, consolidated alternatives section, proof snippets | “When to Choose Project-Based Strategy”, “Quick Definition”, “Comparison Table” | Avoid duplicating blog content; add canonical reference section.
| Fractional CMO Pricing | ✅ | Snippet-friendly definition, expanded tables, FAQ schema, mid-CTA | “Pricing Scenarios”, “Retainer vs Project Cost Analyzer”, “Hidden Costs Checklist” | Ensure tables reused in cluster posts to maintain consistency.
| Growth Strategy Process | ✅ | Keyword-aligned H1, TOC, timeline graphic, HowTo schema | “Strategic Outputs by Stage”, “Hand-off Checklist”, “Implementation FAQ” | Consider splitting Stage cards into anchors for linking.

## New Pillar Considerations
- **`fractional-marketing-services`** (existing route) currently thin; evaluate upgrading to service pillar once primary three are optimized.
- **`growth-strategy-consulting`** (not yet a route): search volume 400, KD 32. Could become summary pillar linking to process + case studies later.

## Cannibalization Watchlist
- `fractional-cmo-alternative` blog vs. pillar alternatives section: coordinate to avoid overlapping intros; ensure blog focuses on POV and story, pillar keeps objective comparison.
- Pricing terms across service page metadata: standardize language (“Fractional CMO cost” vs. “Pricing”) to prevent GSC impression split.

## Next Steps
1. Execute pillar optimization actions above; log changes in `docs/pillar-update-log.md`.
2. Post-update, monitor rankings for target keywords weekly for 6 weeks; document movement in `docs/keyword-research-2025.md`.
3. Reassess `fractional-marketing-services` after core updates; decide on upgrade or consolidation.
