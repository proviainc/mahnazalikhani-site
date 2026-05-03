# Stage 10: Day-One Monitoring (First 72 Hours)

## Goals

Catch broken deploys, DNS issues, 404s on key routes, and CTA failures before they erode trust or lose consultations.

## Baseline Context

- **Primary conversion:** External Calendly booking
- **Secondary:** LinkedIn profile visits
- **Site stack:** Static export (no server-side forms on this site)
- **Analytics:** Not configured in `site.config.ts` at documentation time, until Plausible or GA is added, monitoring is manual plus hosting analytics (Cloudflare Web Analytics or Pages analytics if enabled).

## Hour 0–2 (Launch Window)

| Check | How | Owner | Result |
|-------|-----|-------|--------|
| Home loads 200 | Browser + curl | | |
| Each launch route 200 | `/about/`, `/experience/`, `/event-strategy/` | | |
| `sitemap.xml` and `robots.txt` 200 | Direct URL | | |
| Calendly opens and shows correct host/event | Click all primary CTAs | | |
| SSL valid on production host | Browser padlock | | |

## Hour 2–24

| Check | How | Owner | Result |
|-------|-----|-------|--------|
| Spot-check mobile Safari and Chrome | Real device or BrowserStack | | |
| Search Console “URL inspection” for `/` (if GSC live) | GSC | | |
| Watch for deploy rollback or failed build | Pages dashboard | | |

## Hour 24–72

| Check | How | Owner | Result |
|-------|-----|-------|--------|
| Re-run broken link pass on production | Tool or manual | | |
| Confirm no unexpected 404 spikes | Hosting analytics | | |
| Calendly still reachable (no account or event type changes) | Manual | | |

## Metrics To Watch (When Analytics Exists)

| Event or metric | Tool | Notes |
|-----------------|------|-------|
| Pageviews on `/` and `/event-strategy/` | Plausible or GA | Funnel proxy |
| Outbound clicks to Calendly | Tag or native outbound | Align with `data-event` if instrumented |
| Outbound to LinkedIn | Same | |

## Escalation

- **P0:** Site down, SSL broken, Calendly link broken → fix or rollback per `10-rollback-plan.md`
- **P1:** Wrong copy or wrong CTA URL merged → hotfix PR and redeploy
- **P2:** Visual polish only → schedule post-launch in Stage 11
