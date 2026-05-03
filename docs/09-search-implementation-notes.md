# Stage 09 - Search Implementation Notes

## Launch Indexable Pages

- `/`
- `/about/`
- `/experience/`
- `/event-strategy/`

## Metadata Source

Use:

- `06-search-snippet-and-metadata-brief.md`
- `08-structured-data-and-indexing-plan.md`

## Required Implementation

- Unique title per page.
- Unique meta description per page.
- H1 per page.
- Canonical per page.
- Open Graph title and description.
- Open Graph image strategy.
- Sitemap with launch pages only.
- Robots file.
- Structured data.

## Structured Data

Implement:

- Person schema for Mahnaz Alikhani.
- WebSite schema.
- BreadcrumbList schema for supporting pages.
- Service schema for Event Strategy Consultation only if accurate.

Do not implement:

- Review schema.
- AggregateRating schema.
- Event schema for historical/private events.
- Organization schema that makes the personal site look like ProVia Events.
- FAQ schema unless visible FAQ content exists.

## Canonical Base

Production target:

- `https://MahnazAlikhani.com`

## Noindex / Exclusion Rules

Exclude:

- Draft routes.
- Placeholder pages.
- Future Insights routes until populated.
- Any implementation-only preview artifacts.

## Search QA

Before launch:

- Check page titles and descriptions.
- Check canonicals.
- Check sitemap.
- Check robots.
- Validate structured data.
- Confirm no empty future pages are indexed.
- Confirm internal headings preserve answer-ready clarity.

