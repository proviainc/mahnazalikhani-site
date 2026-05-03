# Stage 10: QA Checklist

**Site:** Mahnaz Alikhani personal site  
**Instructions:** Run checks in a real browser against the **approved preview URL** first, then repeat spot checks on production after DNS cutover. Mark each row: `Pass` | `Fail` | `N/A` | `Blocked`. Record failures in `10-issue-log.csv`.

## Legend

- **Owner:** Who ran the check (initials or role).
- **Evidence:** Link to screenshot, recording, or PR comment.

---

## 1. Strategy And Messaging Fidelity

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 1.1 | Hero and key sections match Stage 03 pillars (calm strategy, structure, hospitality judgment, systems perspective) | | | | |
| 1.2 | Personal site is clearly distinct from “ProVia Events as the company site” while still credibly linking ProVia and EventAgent | | | | |
| 1.3 | No generic interchangeable luxury-event clichés (re-run authenticity filter on visible copy) | | | | |
| 1.4 | EventAgent role wording matches **approved** title language (no speculative titles) | | | | Block if title not approved |

---

## 2. Content Accuracy And Public Copy Leak Scan

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 2.1 | No internal planning language, TODO markers, or “placeholder” voice in UI copy | | | | |
| 2.2 | No starter template residue (Provia template, blog samples, Lorem, wrong brand) | | | | |
| 2.3 | Calendly URL and labels match agreed primary CTA | | | | |
| 2.4 | LinkedIn and trust URLs correct and open in new tab with `rel="noreferrer"` where used | | | | |
| 2.5 | Portrait: approved image in hero when available; until then placeholder panel is acceptable and not misleading | | | | |

---

## 3. Navigation, Page Flow, And CTAs

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 3.1 | All header nav links resolve: `/`, `/about/`, `/experience/`, `/event-strategy/` | | | | Trailing slash matches `next.config` |
| 3.2 | Footer links match header and trust destinations | | | | |
| 3.3 | Primary CTA visible above the fold on home and repeated appropriately on long pages | | | | |
| 3.4 | Mobile menu opens, closes, and does not trap focus or scroll | | | | |
| 3.5 | Tablet width: nav collapse behavior acceptable; CTAs not orphaned | | | | |

---

## 4. Visual Polish And Responsiveness

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 4.1 | Desktop visual QA (≥1280px): typography, spacing, cards, CTA bands | | | | |
| 4.2 | Mobile visual QA (375–430px): no horizontal overflow, readable type | | | | |
| 4.3 | Sticky header: no content jump overlap; backdrop readable on scroll | | | | |
| 4.4 | Scroll behavior smooth where enabled; no jank on long pages | | | | |
| 4.5 | Visual scorecard minimums (see `docs/09-visual-scorecard.md`) recorded per page | | | | |

---

## 5. Accessibility

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 5.1 | Keyboard: tab order logical through header, main, footer | | | | |
| 5.2 | Focus visible on interactive elements | | | | |
| 5.3 | Landmarks: one main, header/footer sensible | | | | |
| 5.4 | Color contrast acceptable for body and buttons (spot check + tool) | | | | |
| 5.5 | Automated scan (axe or Lighthouse accessibility) on key pages | | | | Attach summary |

---

## 6. Performance

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 6.1 | Lighthouse performance (mobile) on `/`, record score | | | | |
| 6.2 | LCP element reasonable (hero text or portrait when added) | | | | |
| 6.3 | No huge unoptimized images in repo for launch | | | | |

---

## 7. Technical Integrations

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 7.1 | Calendly loads in new tab; booking page is correct event type | | | | |
| 7.2 | Outbound trust links return 200 (LinkedIn, ProVia Events, EventAgent) | | | | |
| 7.3 | `data-event` attributes present for primary analytics hooks (if collector added later) | | | | Optional until analytics wired |

---

## 8. Forms

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 8.1 | Native site forms | N/A | (empty) | (empty) | No launch forms; Calendly only |

---

## 9. SEO And Crawl Readiness

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 9.1 | Unique `<title>` and meta description per launch page | | | | |
| 9.2 | Canonical URLs use production host after cutover | | | | |
| 9.3 | `/sitemap.xml` lists only launch URLs | | | | |
| 9.4 | `/robots.txt` allows crawl | | | | |
| 9.5 | OG image resolves on production URL | | | | Default `/uploads/og-default.svg` |

---

## 10. Structured Data

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 10.1 | Rich Results Test (or equivalent) on `/`, Person, WebSite, Service present as implemented | | | | |
| 10.2 | BreadcrumbList validates on inner pages | | | | |

---

## 11. Broken Links And Assets

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 11.1 | Link crawler or manual pass on all internal links | | | | |
| 11.2 | Favicon and touch icons (if present) load | | | | **Flag if missing** |
| 11.3 | `logo.svg` and OG asset paths 200 on preview and prod | | | | |

---

## 12. Analytics

| # | Check | Result | Owner | Evidence | Notes |
|---|--------|--------|-------|----------|-------|
| 12.1 | If Plausible or GA configured: events or pageviews fire on CTA clicks | | | | N/A until IDs set |
| 12.2 | No duplicate tags across layout and pages | | | | |

---

## Summary

| Metric | Value |
|--------|--------|
| Date completed | |
| Preview URL tested | |
| Production URL tested | |
| Critical open issues | |
| Launch recommendation | `Go` / `No-go` / `Conditional` |
