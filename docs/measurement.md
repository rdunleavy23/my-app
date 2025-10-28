# Measurement & Dashboard Specification — October 2025

## Objectives
- Track impact of pillar optimization and cluster expansion on organic visibility and conversions.
- Monitor structured data performance and refresh cadence adherence.
- Centralize reporting requirements for Pattern Growth organic program.

## Primary KPIs
| KPI | Source | Owner | Cadence | Notes |
|-----|--------|-------|---------|-------|
| Organic sessions (all traffic) | GA4 — Organic segment | Growth Lead | Monthly | Break out by pillar vs. cluster landing pages |
| Conversion rate (Schedule a Call) | GA4 event `request_consultation` | Sales Ops | Monthly | Compare organic vs. paid baseline |
| Featured snippets owned | Ahrefs / manual SERP tracking | SEO | Monthly | Track for target keywords in `docs/keyword-research-2025.md` |
| Backlinks to pillars | Ahrefs | SEO | Monthly | Monitor new referring domains |
| Average scroll depth | GA4 (custom metric) | UX | Monthly | Ensure TOCs improve engagement |
| Refresh tasks completed | GitHub issues | SEO | Quarterly | Validate refresh automation compliance |

## Supporting Metrics
- Time on page (pillars vs. clusters).
- Anchor text diversity for internal links (Screaming Frog custom extraction).
- Schema validation status (Rich Results test logs).
- Keyword rankings for cluster long-tail terms (Ahrefs rank tracker).

## Dashboard Requirements
- **Platform**: Looker Studio connected to GA4, Search Console, and CSV exports from Ahrefs.
- **Pages**:
  1. Executive overview — highlights KPIs with quarter-over-quarter trend lines.
  2. Pillar performance — per-page metrics, snippet ownership, backlinks, TOC engagement.
  3. Cluster performance — traffic, ranking improvements, internal link clicks.
  4. Refresh compliance — list of pages refreshed, open issues, upcoming queue.
- **Filters**: Date range, content type (pillar/cluster/blog), geo (US vs. Intl).

## Analytics Implementation Notes
- Add custom events for TOC interactions (`toc_click`) and breadcrumb clicks (`breadcrumb_click`) in `lib/analytics-events.ts`.
- Ensure `GetStartedButton` fires `request_consultation` event with page context property.
- Capture schema validation results (pass/fail) as annotations in Looker dashboard.

## Reporting Cadence & Ownership
- Monthly report: SEO lead compiles summary (traffic, rankings, conversions) with insights and next steps.
- Quarterly review: Joint session (SEO, Content, Exec) to discuss refresh calendar output and adjust roadmap.
- Documentation: Store monthly summaries in `docs/reports/` (to be created); link to plan in `best.plan.md`.
