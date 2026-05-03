# Stage 10: Analytics Validation

## Stakeholder Decision (Feb 2026)

**No third-party analytics on v1**, personal site; rely on Calendly (and host-level metrics if enabled outside the app). Do not add Plausible or GA snippets unless this decision is explicitly revised in `docs/00-stakeholder-decisions.md`.

## Current State

`site.config.ts` does not set `analytics.plausibleDomain` or `analytics.gaMeasurementId`, and the app does not inject a third-party snippet. **Outbound CTAs** use `data-event` attributes only for hypothetical future wiring.

## When Analytics Is Approved

| # | Check | Result | Tool |
|---|--------|--------|------|
| 1 | Production env vars set in Cloudflare Pages for chosen provider | | Pages → Settings → Environment variables |
| 2 | Script loads once (no duplicate in layout and page) | | Network tab |
| 3 | Pageview on `/` | | Plausible / GA realtime |
| 4 | Outbound click to Calendly recorded (if event tracking implemented) | | |
| 5 | Outbound click to LinkedIn recorded | | |
| 6 | Ad blockers noted as blind spot; document acceptance | | |

## If Analytics Stays Off At Launch

- Mark rows N/A in `10-qa-checklist.md` section 12
- Rely on Calendly’s own reporting for consultation volume until tags are added
