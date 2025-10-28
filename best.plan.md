<!-- ea7aae92-b52d-4540-a3f4-5ae245c90db6 228e24d2-a79a-4d6f-9179-f11e55286762 -->
# Pattern Growth Organic Leadership Plan v4

## Goal

Elevate Pattern Growth’s organic visibility to a best-in-class benchmark by validating pillar architecture, optimizing key pages, expanding topical clusters without duplication, and instituting automated refresh and measurement systems.

## Key Moves

1. **Competitive & SERP Research (docs/)**

- Produce qualitative teardowns of Backlinko, Refine Labs, and Chief Outsiders in `docs/competitive-research.md` capturing content depth, structure, and conversion patterns.
- Compile keyword difficulty, intent, SERP features, and competitor gaps for priority terms in `docs/keyword-research-2025.md` using Ahrefs/GSC exports.

2. **Pillar Architecture Validation (docs/pillar-evaluation.md)**

- Audit current pillars (`/what-is-fractional-cmo`, `/fractional-cmo-hourly-rate`, `/process`) against keyword demand and user intent.
- Recommend adjustments or additions (e.g., `growth-strategy-consulting`, `fractional-marketing-services`) with rationale, search volume, and competitive assessment.

3. **Pillar Optimization (app/what-is-fractional-cmo/page.tsx, app/fractional-cmo-hourly-rate/page.tsx, app/process/page.tsx)**

- Implement TOCs, summary callouts, proprietary data visuals, and decision aids aligned with validated keywords.
- Integrate prioritized keyword clusters into headings, intros, and CTA copy while maintaining Pattern Growth voice.
- Consolidate overlapping sections across existing content to avoid duplication; document mergers in `docs/pillar-update-log.md`.

4. **Cluster Enhancement & Internal Linking (content/posts/*, new app routes)**

- Upgrade or repurpose existing posts before introducing new routes; only create net-new pages when no high-quality asset exists.
- Publish optimized high-intent cluster assets with frontmatter metadata and schema: `fractional-cmo-cost-analysis`, `hiring-fractional-cmo`, `fractional-cmo-vs-full-time`, `growth-strategy-implementation`.
- Ensure reciprocal contextual links between clusters, pillars, and relevant blog posts using descriptive anchors matching target long-tails.

5. **Experience & Schema Enhancements (components/ui/, lib/schemas.ts)**

- Ship reusable `TableOfContents` and enhanced `Breadcrumbs` components, apply to long-form routes.
- Expand FAQ/HowTo schema for pillars and clusters, validating via Rich Results tests and documenting proof in `docs/schema-proof.md`.

6. **Automated Refresh Calendar (scripts/refresh-scheduler.ts, .github/workflows/refresh-calendar.yml)**

- Create a script to derive quarterly refresh queues from page metadata and performance, updating `docs/refresh-calendar.md`.
- Schedule a GitHub Action to run each quarter, commit the refreshed calendar, and open an issue summarizing priorities.

7. **Measurement & Dashboards (lib/analytics.ts, docs/measurement.md)**

- Define KPI tracking (organic sessions, conversions, featured snippets, backlinks, cluster engagement) and wire required analytics events.
- Document dashboard specifications (Looker Studio or GA4) with data sources, owner, and reporting cadence.

## Keyword Priorities

- **Fractional CMO Pillar**: “fractional cmo”, “fractional cmo definition”, “fractional cmo cost”, “fractional cmo alternative”, “fractional cmo vs full-time cmo”
- **Pricing Pillar**: “fractional cmo pricing”, “fractional cmo hourly rate”, “cmo consulting rates”, “marketing consulting fees”, “project-based marketing pricing”
- **Process Pillar**: “growth strategy consulting”, “marketing strategy development”, “go-to-market framework”, “marketing operations assessment”, “marketing handoff process”
- **Cluster Targets**:
  - Cost Analysis: “fractional cmo cost breakdown”, “fractional cmo roi”, “fractional cmo retainers”
  - Hiring Guide: “how to hire a fractional cmo”, “fractional cmo interview questions”, “fractional cmo contract terms”
  - Comparison: “fractional cmo vs full-time cmo”, “fractional cmo vs agency”, “fractional cmo vs marketing consultant”
  - Implementation: “growth strategy implementation”, “marketing strategy execution plan”, “marketing measurement framework”
  - Industry: “fractional cmo for saas”, “b2b saas marketing consultant”, “fractional cmo fintech”

## Deliverables

- Competitive research dossier and keyword research database.
- Pillar evaluation report with recommendations and keyword mapping.
- Updated pillar files with TOCs, proprietary sections, keyword-aligned CTAs, and documented consolidation notes.
- Optimized cluster assets with schema, internal links, and supporting media.
- UX components deployed site-wide with validated structured data documentation.
- Automated refresh scheduler script, workflow, and generated calendar.
- KPI measurement documentation and analytics wiring plan.

## To-dos

- [ ] Complete competitive teardown and keyword research docs.
- [ ] Produce pillar evaluation report with architecture recommendations.
- [ ] Enhance pillar pages with TOCs, new sections, and refreshed CTAs per validated keywords.
- [ ] Create or optimize high-priority cluster pages and interlink with existing pillars.
- [ ] Implement navigation aids, FAQ schema, and verify structured data.
- [ ] Build automated refresh scheduler and GitHub Action workflow.
- [ ] Document KPI dashboard requirements and quarterly refresh workflow.
