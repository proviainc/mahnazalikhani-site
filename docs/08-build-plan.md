# Stage 08 - Build Plan

## Technical Approach

Build `mahnazalikhani-site` as a code-managed, static marketing website using the ProVia Web Platform defaults:

- Website repo path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site`
- Docs path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site/docs`
- Starter/template assumption: `/Users/amintizdast/Documents/ProVia/WebPlatform/provia-web-platform/apps/provia-site-template`
- Hosting assumption: Cloudflare Pages
- Production domain target: `MahnazAlikhani.com`

The launch site should be simple, fast, accessible, and editorial. It should not include a launch CMS, native intake workflow, blog, or Sanity Studio unless requirements change.

## Repo And Deployment Governance

- Intended GitHub owner: ProVia ownership by default.
- No override from ProVia ownership has been approved.
- `main` is the production branch.
- Feature branches and pull requests create preview deployments.
- Cloudflare Pages should connect to the approved GitHub repo.
- Preview review must happen before merge.
- Merge to `main` requires explicit approval.
- Production deployment and DNS cutover are separate gates.
- `MahnazAlikhani.com` must not be connected until explicit launch and DNS approval.

## Assumptions

- There is no existing live MahnazAlikhani.com website requiring migration.
- Cloudflare Pages previews are sufficient before production.
- Marketing pages remain code-managed.
- Calendly handles booking.
- LinkedIn, ProVia Events, and EventAgent are outbound links only.
- No blog/Insights system is launch-critical.
- No native intake form is launch-critical.
- Exact EventAgent public title remains a final-copy dependency.
- Mahnaz will provide one approved portrait/photo.

## Templates And Page Types

Launch pages:

- Home: `/`
- About: `/about/`
- Experience: `/experience/`
- Event Strategy: `/event-strategy/`

Template types:

- Personal brand page template.
- Proof / experience page template.
- Offer / conversion page template.

Deferred page types:

- Speaking & Emcee.
- Hospitality Consulting.
- Insights index/detail.
- Selected work detail.

## Component List

Launch components:

- Site header / mobile menu.
- Footer.
- Hero.
- Proof strip.
- Audience cards.
- Operating philosophy block.
- Selected experience cards.
- Consultation coverage block.
- Context link block for ProVia Events and EventAgent.
- CTA band.
- SEO metadata helpers.
- Analytics event helpers for outbound/CTA clicks.

## CMS Model

No CMS at launch.

Website pages should remain code-managed. Sanity should not be implemented unless an Insights/blog requirement is approved later.

If Insights are added later:

- Use Sanity for blog/Insights content only.
- Keep marketing pages code-managed.
- Prefer `/insights/` and `/insights/[slug]/`.
- Deploy Sanity Studio separately, likely at `admin.MahnazAlikhani.com`.

## Editorial And Publishing Workflow

Launch workflow:

- Content is code-managed by ProVia/Cursor.
- Updates require repository changes and preview review.

Phase two:

- If Mahnaz publishes articles regularly, use Sanity for regular editor publishing and Cursor-assisted publishing for strategic content.

## Blog Management Architecture

Not included at launch.

Do not create placeholder blog routes or empty Insights navigation. Add blog architecture only when:

- Content ownership is clear.
- Publishing cadence is real.
- Sanity setup is approved.
- Admin subdomain and rebuild workflow are planned.

## Implementation Phases

### Phase 1 - Repo And Foundation

- Create or initialize the website repo from the approved ProVia starter.
- Confirm package manager and private package access if needed.
- Configure global styles, tokens, fonts, metadata defaults, and base layout.
- Add routes for launch pages.

### Phase 2 - Core UI System

- Build header, footer, buttons, cards, proof strip, CTA band, and layout primitives.
- Implement design tokens from `07-design-tokens.json`.
- Add minimal motion system and reduced-motion behavior.

### Phase 3 - Page Assembly

- Build Home, About, Experience, and Event Strategy.
- Implement all outbound CTAs.
- Use approved portrait if available; otherwise use a reserved layout placeholder.

### Phase 4 - SEO, Analytics, Accessibility

- Add metadata, canonicals, sitemap, robots, structured data, OG image handling, and analytics events.
- Verify keyboard navigation, focus states, color contrast, and mobile layout.

### Phase 5 - Preview Review And Launch Prep

- Deploy Cloudflare preview.
- Review visual fidelity, copy authenticity, CTA tracking, metadata, performance, and responsiveness.
- Do not merge to `main` until preview is approved.

## Preview And Branch Workflow

- Create a feature branch for implementation.
- Open a pull request when ready for review.
- Use Cloudflare Pages preview for the PR/branch.
- Review the preview before merge.
- Merge to `main` only after explicit approval.
- Treat production deployment and DNS cutover as separate approval gates.

## Redirect And Migration Plan

- No known existing URLs need preservation.
- If any prior MahnazAlikhani.com pages or public links are discovered, document and redirect them before launch.
- Do not create root-level routes that may conflict with future `/insights/` or page routes.

## Structured Data And Indexing Plan

Launch indexable pages:

- `/`
- `/about/`
- `/experience/`
- `/event-strategy/`

Required:

- Unique titles and descriptions.
- Canonicals matching production URLs.
- Sitemap.
- Robots file.
- Person schema for Mahnaz.
- WebSite schema.
- BreadcrumbList schema for supporting pages.
- Service schema for Event Strategy Consultation if implemented accurately.

Do not add:

- Review/rating schema.
- Event schema for historical or private events.
- Organization schema that confuses the personal site with ProVia Events.

## Visual Fidelity Checkpoints

Implementation must preserve:

- Editorial Event Strategist direction.
- Warm ivory/sand/espresso/copper/teal palette.
- Header height and logo/name size discipline.
- One dominant Calendly CTA.
- Early proof visibility.
- Four-card audience section maximum.
- No flashy counters or generic event imagery.
- Mobile first viewport clarity.
- Reduced-motion support.

## Dependencies

Required before final visual lock:

- Approved portrait/photo.
- Exact EventAgent public title.
- Decision on public phone/email.

Required before launch:

- DNS ownership and cutover owner.
- GitHub repo ownership confirmation.
- Cloudflare Pages connection.
- Preview review approval.
- Production/DNS approval.

## Asset And Content Readiness

Available:

- Resume-derived proof.
- LinkedIn profile.
- Calendly URL.
- ProVia Events URL.
- EventAgent URL.
- Strategy/content/design docs.

Missing:

- Portrait/photo.
- Approved testimonials.
- Approved logos.
- Approved event photos.
- Exact EventAgent title wording.

## QA Requirements

Check:

- Responsive layouts at mobile/tablet/desktop.
- No horizontal overflow.
- Header/nav/CTA sizing.
- Calendly, LinkedIn, ProVia Events, and EventAgent links.
- Analytics events for CTA/outbound clicks.
- Metadata and canonicals.
- Sitemap and robots.
- Structured data validity.
- Accessibility: contrast, focus states, keyboard navigation, reduced motion.
- Performance: image sizes, font loading, minimal JavaScript.

## Launch Gating And Approvals

Required gates:

1. Strategy/design docs approved through Stage 08.
2. Implementation preview generated.
3. Preview reviewed visually and functionally.
4. Explicit approval to merge to `main`.
5. Production deployment confirmed.
6. Explicit approval for DNS/domain connection.

## Risks And Mitigation

See `08-risk-register.md`.

High-level risks:

- Missing portrait weakens first impression.
- Exact EventAgent title unresolved.
- Visual direction could drift into template styling during implementation.
- Calendly-only booking may not qualify leads if volume grows.
- DNS ownership is not yet confirmed.

## Stage 08 Exit Check

- Launch scope is defined.
- Templates and components are identified.
- CMS/blog decisions are explicit.
- Deployment workflow and gates are defined.
- Redirect, indexing, and structured data plan exists.
- Visual fidelity checkpoints are concrete.
- Dependencies and risks are documented.

Stage 08 is complete enough to move to Stage 09 after approval to begin implementation planning/prompting.

