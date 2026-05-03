# Stage 08 - Structured Data And Indexing Plan

## Indexing Rules

Index at launch:

- `/`
- `/about/`
- `/experience/`
- `/event-strategy/`

Do not index:

- Draft pages.
- Placeholder future pages.
- Any unapproved selected work detail drafts.
- Any future Insights routes until populated.

## Metadata Requirements

Every launch page needs:

- Unique title.
- Unique meta description.
- H1.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.

Use Stage 06 metadata brief as source of truth.

## Canonical Rules

Production canonical base:

- `https://MahnazAlikhani.com`

Canonical routes:

- `https://MahnazAlikhani.com/`
- `https://MahnazAlikhani.com/about/`
- `https://MahnazAlikhani.com/experience/`
- `https://MahnazAlikhani.com/event-strategy/`

## Sitemap

Sitemap should include only indexable launch pages.

Do not include:

- Empty Insights pages.
- Draft pages.
- External URLs.

## Robots

Robots should:

- Allow public crawling of launch pages.
- Point to sitemap.
- Avoid accidental noindex on production.

## Structured Data

### Person Schema

Use for:

- Mahnaz Alikhani.

Include only accurate fields:

- name
- url
- sameAs LinkedIn
- jobTitle with approved wording
- knowsAbout / expertise areas if implemented carefully
- affiliation references only if accurate

### WebSite Schema

Use for:

- `MahnazAlikhani.com`

### BreadcrumbList Schema

Use for:

- About.
- Experience.
- Event Strategy.

### Service Schema

Use for:

- Event Strategy Consultation, only if implementation can keep it accurate and not overclaim.

## Do Not Add

- Review schema.
- AggregateRating schema.
- Event schema for past/private events.
- Organization schema that implies the personal site is ProVia Events.
- FAQ schema unless visible FAQ content exists.

## Search Console / Bing

Post-launch tasks:

- Add and verify domain in Google Search Console if not already present.
- Submit sitemap.
- Add to Bing Webmaster Tools if appropriate.
- Monitor indexing after launch.

## AI Answer-Surface Readiness

Implementation should preserve clear headings:

- Who Mahnaz Helps.
- Selected Event Experience.
- What An Event Strategy Consultation Covers.
- How ProVia Events And EventAgent Connect.

Avoid vague headings that hide the page purpose.

