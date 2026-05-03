# Stage 08 - Redirect Plan

## Current Redirect Status

No existing MahnazAlikhani.com website or legacy URLs have been provided.

Current assumption:

- New website with no migration requirements.

## Launch URL Set

Indexable routes:

- `/`
- `/about/`
- `/experience/`
- `/event-strategy/`

External destinations:

- Calendly: `https://calendly.com/mahnazalikhani/event-strategy`
- LinkedIn: `https://www.linkedin.com/in/mahnazalikhani/`
- ProVia Events: `https://proviaevents.com/`
- EventAgent: `https://eventagent.io/`

## Redirect Rules If Existing URLs Are Discovered

If prior URLs exist:

1. Inventory all live URLs.
2. Map each URL to the closest new route.
3. Preserve high-value exact URLs where possible.
4. Redirect retired URLs with 301 redirects.
5. Test redirects in preview before DNS cutover.

## Known Redirects

None.

## URL Protection Rules

- Do not create root-level article slugs.
- Reserve `/insights/` for future content.
- Avoid changing launch URLs after approval unless necessary.
- Keep canonical URLs aligned to `https://MahnazAlikhani.com`.

## Launch QA

Before production:

- Verify all internal links.
- Verify all outbound links.
- Verify no placeholder routes are exposed.
- Verify sitemap includes only intended indexable pages.
- Verify robots rules do not block launch pages.

