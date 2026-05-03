# Stage 10: QA, Launch & Cutover

## Purpose

Validate the built Mahnaz Alikhani personal site end-to-end, document launch gates, and prepare DNS cutover and handoff without skipping preview or production approvals.

## Repo And Paths

| Item | Value |
|------|--------|
| Website folder | `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site` |
| Docs folder | `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site/docs` |
| Production domain (target) | `mahnazalikhani.com` |
| Build | Next.js App Router, `output: 'export'`, static output directory `out` |
| Primary CTA | Calendly, `https://calendly.com/mahnazalikhani/event-strategy` |
| Secondary CTA | LinkedIn, `https://www.linkedin.com/in/mahnazalikhani/` |

## Implementation Baseline (Local)

The following were run successfully in the website folder (local machine verification, not preview URL):

- `tsc --noEmit`
- `next build` (static export to `out/`)
- `vitest run --passWithNoTests`
- `next lint`

## Stage 10 Artifacts (This Folder)

| File | Role |
|------|------|
| `10-qa-checklist.md` | Mandatory and required QA categories with pass/fail fields |
| `10-issue-log.csv` | Central bug and issue tracking |
| `10-launch-checklist.md` | Ordered launch steps including gates |
| `10-day-one-monitoring.md` | First 72 hours monitoring |
| `10-analytics-validation.md` | Plausible or GA validation when configured |
| `10-dns-cutover-checklist.md` | DNS and domain cutover |
| `10-rollback-plan.md` | Rollback and contingency |
| `10-client-handoff-readiness.md` | Mahnaz and ProVia handoff |
| `10-device-qa-matrix.md` | Real device and viewport matrix |
| `10-production-confidence.md` | Explicit confidence score after evidence |
| `10-executive-review.md` | Trust and buyer-quality review |
| `10-search-readiness-checklist.md` | SEO, metadata, indexing, structured data |
| `10-redirect-seo-cutover.md` | Legacy redirects (greenfield N/A unless URLs appear) |

## Operational Gates (Separate Approvals)

Treat each gate as distinct. Do not merge or point production DNS until the prior gate is explicitly approved and recorded.

1. **Preview URL review**, Stakeholder reviews Cloudflare Pages (or equivalent) preview build of `main` or the release branch.
2. **Merge to `main`**, Only after preview approval (if using branch previews).
3. **Production deployment**, Confirm Pages production deploy reflects approved commit.
4. **DNS cutover**, Only after explicit production domain approval.

Current documentation status: gates 1–4 are **not yet recorded as approved** (fill in `10-launch-checklist.md` when complete).

## Scope Notes For This Site

- **No native forms**, Conversion is outbound Calendly and LinkedIn; “form testing” is N/A except any future embedded widget.
- **No launch CMS or blog**, Sanity, blog routes, and related CI were removed from the app; do not reintroduce without a new Stage 08 decision.
- **Analytics**, `site.config.ts` analytics fields are empty until Plausible or GA IDs are approved and wired; see `10-search-readiness-checklist.md` and `10-day-one-monitoring.md`.
- **Git repository**, The website folder may not yet be a git remote-backed repo; treat “init remote, branch protection, Pages project” as part of launch operations if not already done.

## Pass Criteria (Stage 10 Exit)

Stage 10 is complete when `10-qa-checklist.md` and `10-search-readiness-checklist.md` show no unresolved critical or high issues, launch gates are documented, `10-production-confidence.md` records an explicit score with rationale, and `10-executive-review.md` records a launch verdict (or conditional launch with listed accepts).

## Next Stage

Stage 11 (measurement and baseline) begins after production launch and analytics ownership are clear.
