# Stage 08 - CMS Model

## Launch Decision

No CMS at launch.

## Rationale

The launch scope contains four code-managed pages:

- Home.
- About.
- Experience.
- Event Strategy.

There is no approved launch blog, Insights section, native intake workflow, or non-technical editing requirement. Adding a CMS now would increase implementation and QA scope without improving the primary conversion path.

## Code-Managed Content

Keep these in code:

- Navigation.
- Homepage.
- About page.
- Experience page.
- Event Strategy page.
- Metadata.
- Structured data.
- CTA and outbound links.
- Design tokens and components.

## Sanity Decision

Sanity is deferred.

Use Sanity later only if:

- Mahnaz needs an Insights/blog system.
- Non-technical editors need publishing access.
- A publishing cadence and owner are defined.

If approved later:

- Sanity manages blog/Insights content only.
- Marketing pages remain code-managed.
- Studio lives at `admin.MahnazAlikhani.com` or approved equivalent.
- Public routes should be `/insights/` and `/insights/[slug]/`.
- Static deployments require a rebuild webhook after publish.

## Explicit Non-Goals At Launch

- Full-site CMS.
- Sanity Studio.
- Blog post schema.
- Category/tag system.
- Native intake form.
- Admin portal.

