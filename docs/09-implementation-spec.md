# Stage 09 - Implementation Spec

## Stage Status

This document is the implementation prompt/specification for the approved launch site. It does not mean implementation has started.

Implementation should begin only after explicit approval to create/copy the site code into `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site`.

## Build Target

- Website repo name: `mahnazalikhani-site`
- Website repo path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site`
- Docs path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site/docs`
- Production domain target: `MahnazAlikhani.com`
- Starter/template assumption: `/Users/amintizdast/Documents/ProVia/WebPlatform/provia-web-platform/apps/provia-site-template`
- Deployment target: Cloudflare Pages

## Implementation Objective

Build a code-managed personal credibility website for Mahnaz Alikhani that launches with four pages:

- `/`
- `/about/`
- `/experience/`
- `/event-strategy/`

The site must preserve the approved strategy:

- Personal credibility site, not a ProVia Events replacement.
- One primary conversion path: Calendly consultation booking.
- LinkedIn as secondary trust path.
- ProVia Events and EventAgent as contextual trust links.
- No launch CMS, blog, native intake form, or Sanity Studio.

## Source Of Truth Docs

Before implementation, read:

- `03-positioning-messaging-strategy.md`
- `04-offer-funnel-strategy.md`
- `05-sitemap-information-architecture.md`
- `06-copywriting-content-architecture.md`
- `06-homepage-brief.md`
- `06-page-briefs.md`
- `06-search-snippet-and-metadata-brief.md`
- `07-visual-direction-design-system.md`
- `07-design-tokens.json`
- `07-component-direction.md`
- `07-responsive-rules.md`
- `08-build-plan.md`
- `08-component-inventory.md`
- `08-visual-fidelity-checkpoints.md`
- `08-structured-data-and-indexing-plan.md`

## Implementation Sequence

### Phase 1 - Repo And Foundation

1. Confirm implementation approval.
2. Confirm whether the starter template should be copied into the repo.
3. Initialize the site from the approved starter.
4. Confirm package manager and private package access.
5. Configure base layout, tokens, font loading, metadata defaults, and global styles.

Stop if:

- Private package auth is required and `NODE_AUTH_TOKEN` is missing.
- `.npmrc` is required and absent.
- The starter template is inaccessible.

### Phase 2 - Design System Components

Build reusable components:

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `Button`
- `Section`
- `Container`
- `Hero`
- `ProofStrip`
- `AudienceCardGrid`
- `SelectedExperienceGrid`
- `ConsultationCoverage`
- `BrandContextBlock`
- `CtaBand`

Apply:

- `07-design-tokens.json`
- Minimal-to-moderate motion only.
- Reduced-motion fallback.
- Component benchmarks from Stage 07 and Stage 08.

### Phase 3 - Page Implementation

Build:

- Home.
- About.
- Experience.
- Event Strategy.

Preserve:

- Homepage narrative order.
- Calendly-first CTA hierarchy.
- Proof-led credibility.
- Contextual ProVia Events and EventAgent placement.
- No testimonial/logo/media sections unless assets are approved.

### Phase 4 - SEO, Analytics, Accessibility

Implement:

- Unique metadata.
- Canonicals.
- Sitemap.
- Robots.
- Person schema.
- WebSite schema.
- BreadcrumbList schema.
- Accurate Service schema for Event Strategy Consultation, if supported cleanly.
- Analytics hooks for Calendly, LinkedIn, ProVia Events, and EventAgent outbound clicks.

### Phase 5 - Verification And Finish

Run:

- `pnpm install`
- `pnpm dev`
- `pnpm typecheck`
- `pnpm test`
- `pnpm lint`
- `pnpm build`

Then perform:

- Visual inspection at `1440`, `1280`, `1024`, `768`, `430`, `390`, `375`.
- Premium finish pass.
- Page pruning pass.
- Visual scorecard.
- Search implementation check.

## Content Rules

Use verified proof only:

- 10+ years event planning and hospitality.
- 18 years total professional experience.
- 100+ events managed independently.
- SilkRoad Canvas: 800+ attendees and 20+ vendors/sponsors.
- NetPro Networking Event: 150+ attendees.
- Innovate Tech Event: 200+ attendees.
- Multiple galas with 750+ guests.
- Banic Software served 2,000+ hospitality-sector businesses.

Do not publish:

- Exact EventAgent title until approved.
- Testimonials until approved.
- Client logos until approved.
- Event photos until approved.
- Private event owner names or unapproved details.

## CTA Rules

Primary CTA:

- Label: `Book an Event Strategy Consultation`
- Destination: `https://calendly.com/mahnazalikhani/event-strategy`

Secondary CTA:

- Label: `Connect on LinkedIn`
- Destination: `https://www.linkedin.com/in/mahnazalikhani/`

Context links:

- ProVia Events: `https://proviaevents.com/`
- EventAgent: `https://eventagent.io/`

Do not let contextual links compete with Calendly.

## Visual Rules

The site must feel:

- Senior.
- Calm.
- Editorial.
- Warm.
- Structured.
- Premium through restraint.

Reject:

- Wedding-template styling.
- Generic agency template.
- SaaS/product landing-page feel.
- Flashy counters.
- Generic stock event photography.
- Oversized logo/name.
- Oversized nav CTA.
- Horizontal overflow.

## Motion Rules

Approved:

- `fadeUp`
- `staggerGroup`
- `hoverLift`
- `navCompress`

Banned:

- Parallax.
- Looping decorative motion.
- Flashy counters.
- Large slide-ins.
- Random per-section animations.

Reduced motion:

- Disable scroll reveals and stagger.
- Keep only subtle state changes.

## Launch Gate Reminder

Stage 09 implementation does not authorize:

- Merge to `main`.
- Production deployment.
- DNS cutover.

Those remain separate approval gates.

