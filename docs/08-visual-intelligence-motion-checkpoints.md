# Visual Intelligence, Motion, and System Frame Checkpoints

## Source

This checkpoint file is derived from:

- `docs/07-visual-intelligence-pass.md`
- `docs/07-visual-direction-design-system.md`
- `docs/08-visual-fidelity-checkpoints.md`
- current `mahnazalikhani-site` implementation

## Approved Visual Direction

- selected territory: Warm Editorial Event Authority
- UI UX Pro Max product match: B2B Service with Personal Portfolio support
- UI UX Pro Max landing match: Trust & Authority + Conversion personal consultation site
- UI UX Pro Max style match: Trust & Authority with Minimal & Direct structure and editorial hospitality warmth
- implementation stance: visual polish must clarify senior event judgment, proof, guest-experience credibility, operational control, and Calendly-first conversion

## Build Constraints

- Do not copy UI UX Pro Max demo aesthetics.
- Do not add UI UX Pro Max as a runtime frontend dependency.
- Do not add HeyGen HyperFrames to the live website frontend.
- Do not add System Frames to ordinary personal-brand, proof, contact, card, or audience sections.
- Do not add unapproved testimonials, logos, event photography, private-event names, or EventAgent claims.
- Do not make the site look like a wedding planner template, luxury glamor showcase, corporate event agency homepage, or SaaS product page.

## Motion Checkpoints

- Use motion only for hierarchy, calm progression, hover feedback, or CTA clarity.
- Avoid parallax, scroll-jacking, animated counters, looping decoration, confetti, and carousel-like forced narratives.
- Keep transitions short and non-blocking.
- Reduced-motion users must get static content immediately.
- Smooth scroll must be disabled under `prefers-reduced-motion`.

## Current Motion Evidence

- Current implementation uses CSS transitions and smooth scroll, not a JS motion framework.
- `app/globals.css` includes `transition` utilities through button/card styles.
- `app/globals.css` now includes a global `prefers-reduced-motion: reduce` rule that disables smooth scroll, transitions, and animations.

## System Frame Checkpoints

- Current decision: no System Frames are required for the existing site.
- Approved future use: only for a real event operating model, guest-flow map, vendor/stakeholder coordination model, or EventAgent-supported event workflow with approved source material.
- Rejected use: hero, proof strip, audience cards, selected-experience summaries, CTA bands, `/card`, and `/c`.
- If a future System Frame is added, it must collapse cleanly on mobile and avoid implying unsupported scale, automation, partnerships, client logos, or EventAgent capabilities.

## Responsive QA Checkpoints

Review these priority surfaces when making future visual changes:

1. `/` homepage
2. `/about`
3. `/experience`
4. `/event-strategy`
5. `/speaking`
6. `/card`
7. `/c`

Required widths:

- `1440`
- `1280`
- `1024`
- `820`
- `768`
- `430`
- `412`
- `390`
- `375`

Required checks:

- No horizontal overflow.
- Mobile menu opens and closes correctly.
- Calendly CTA remains primary and clear.
- LinkedIn remains secondary.
- Portrait/proof area does not crowd the first mobile viewport.
- QR/digital-card content remains scannable and does not overflow.
- Reduced-motion mode keeps content static and readable.

## Current Acceptance Decision

The current implementation is approved for Website OS acceptance with notes. A small reduced-motion CSS guardrail has been added. The remaining follow-up is operational and evidence-based: save preview/browser screenshots or notes before raising launch confidence beyond conditional.
