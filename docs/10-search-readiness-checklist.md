# Stage 10: Search Readiness Checklist

## Launch Pages (Indexable)

| URL | Purpose | Unique title | Unique meta description | H1 present |
|-----|-----------|--------------|-------------------------|------------|
| `/` | Home | | | |
| `/about/` | About | | | |
| `/experience/` | Experience | | | |
| `/speaking/` | Speaking and emcee | | | |
| `/event-strategy/` | Consultation offer | | | |

## Technical SEO

| # | Check | Result | Notes |
|---|--------|--------|-------|
| 1 | `site.config.ts` `url` matches production canonical host | | Lowercase `https://mahnazalikhani.com` recommended |
| 2 | Canonical on each page matches final domain post-cutover | | Implemented via `lib/metadata.ts` |
| 3 | `sitemap.xml` includes only intended indexable routes | | |
| 4 | `robots.txt` allows `User-agent: *` and points sitemap to absolute URL | | |
| 5 | No accidental `noindex` on launch pages | | |

## Structured Data

| # | Check | Result | Notes |
|---|--------|--------|-------|
| 1 | Root layout JSON-LD: Person, WebSite, Service | | Validate after deploy |
| 2 | Breadcrumb JSON-LD on each page | | |
| 3 | No conflicting duplicate Person entities on same page | | |

## Social And Sharing

| # | Check | Result | Notes |
|---|--------|--------|-------|
| 1 | `og-default.svg` (or replacement) resolves at `/uploads/og-default.svg` | | |
| 2 | Slack / iMessage / LinkedIn unfurl test on `/` | | |

## Search Console (Post-Launch When Property Exists)

- [ ] Submit sitemap URL
- [ ] Inspect live URL for `/` and one inner page
- [ ] Monitor coverage for soft 404 or redirect chains

## AI And Answer Surfaces (Lightweight)

- [ ] Key facts on page (name, role framing, CTA) match structured data
- [ ] No contradictory organization name (site is personal brand, not ProVia Events corporate)

## Redirects

| # | Check | Result |
|---|--------|--------|
| 1 | Legacy URL redirects | N/A, new domain greenfield unless old URLs discovered |
