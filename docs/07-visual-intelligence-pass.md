# Visual Intelligence Pass

## 1. Context

- website repo: `mahnazalikhani-site`
- website type: personal credibility and consultation website for a senior event strategist
- primary audience: corporate and business event clients, luxury private event clients, hospitality consulting clients, business event organizers, and secondary ProVia Events / EventAgent validation visitors
- primary conversion: book an event strategy consultation through Calendly, with LinkedIn as the secondary trust path
- source docs reviewed: `00-project-brief.md`, `03-positioning-messaging-strategy.md`, `04-offer-funnel-strategy.md`, `07-visual-direction-design-system.md`, `08-visual-fidelity-checkpoints.md`, Stage 10 docs, current implementation, and Website OS v4 Framework 29

## 2. Category Classification

- product or service category: senior personal brand for event strategy and hospitality-minded event operations
- UI UX Pro Max product match: `B2B Service`, with secondary overlap from `Personal Portfolio` because the site sells Mahnaz's senior judgment rather than an agency roster
- UI UX Pro Max landing pattern match: `Trust & Authority + Conversion`, expressed as a warm personal consultation site rather than a broad agency homepage
- UI UX Pro Max style match: `Trust & Authority`, supported by `Minimal & Direct` and an editorial hospitality layer
- UI UX Pro Max color and typography match: warm ivory, soft sand, deep espresso, muted copper, restrained teal, editorial display type, and readable sans body. Avoid bright gold luxury styling, confetti/event-template visuals, SaaS gradients, and cold product UI
- audience trust threshold: high. Visitors need to believe Mahnaz can control high-stakes rooms, vendors, timelines, VIP expectations, and guest experience without overpromising
- content density: medium. The site must communicate role, proof, audiences, operating philosophy, selected experience, ProVia/EventAgent context, and consultation CTA without feeling like a full agency site
- decision risk: high. Generic wedding-planner, corporate-event-agency, luxury-template, or SaaS-product styling would weaken the approved position

## 3. Recommended Visual Territory

- selected territory: Warm Editorial Event Authority
- why it fits: it combines senior personal credibility, hospitality warmth, operational structure, and premium restraint without making the site feel like a template or agency catalog
- component implications: use editorial hero, early proof strip, audience cards, operating philosophy cards, selected experience blocks, contextual ProVia/EventAgent references, compact CTA bands, digital card, and short-card routing
- layout implications: preserve composed spacing, warm neutral surfaces, clear CTA rhythm, limited card sets, privacy-safe proof, and mobile-first hierarchy

## 4. Rejected Territories

- rejected territory 1: wedding-planner template
- why rejected: it would over-index on romance and decoration rather than senior strategy, business events, hospitality operations, and high-stakes event control
- rejected territory 2: corporate event agency homepage
- why rejected: this site should sell Mahnaz's judgment and consultation path, not replace ProVia Events or pretend to be a multi-person agency site
- rejected territory 3: luxury glamor showcase
- why rejected: gold-heavy or ornate luxury language could feel inflated and less credible than calm operational proof
- rejected territory 4: SaaS or event-tech product page
- why rejected: EventAgent is a contextual credibility signal, not the primary product of this website
- rejected territory 5: copied UI UX Pro Max demo aesthetic
- why rejected: the method is useful for classification, but Mahnaz's site needs category-specific warmth, restraint, and hospitality credibility

## 5. Landing Or Page Pattern

- recommended pattern: Trust & Authority + Conversion personal consultation site
- hero behavior: name, senior event strategist role, calm promise, consultation CTA, LinkedIn support, and early proof
- proof behavior: use approved scale and operating proof carefully: 10+ years, 18 years professional experience, 100+ events, SilkRoad Canvas 800+ attendees and 20+ vendors/sponsors, NetPro, Innovate Tech Event, galas, Banic Software, ProVia Events, and EventAgent context when source-supported
- CTA behavior: Calendly is primary; LinkedIn is secondary. Avoid generic "Get Started" labels, aggressive funnel language, or too many hero actions

## 6. Color And Typography Implications

- color direction: keep warm ivory and soft sand as base surfaces, deep espresso for authority, muted copper for CTA and labels, and teal only for secondary trust or systems context
- typography direction: keep editorial display type for headlines and readable sans for body. Use proof labels and small metadata with restraint
- semantic token notes: copper should signal primary action and refined emphasis; teal should not turn the site into an event-tech product
- accessibility notes: check copper contrast, preserve visible focus states, keep mobile type readable, and maintain touch-safe CTA sizing

## 7. Motion Decision

- motion intensity: minimal to restrained moderate
- approved motion patterns: subtle hero/section reveal if implemented, fade-up entry, small card hover lift, gentle nav state change, and CTA hover feedback
- banned motion patterns: parallax, looping decorative motion, animated counters, confetti, scroll-jacking, carousel-like forced narratives, and motion that makes the site feel like an event template
- reduced-motion behavior: remove smooth scroll and long transitions; keep all content visible and usable without animation
- implementation evidence: current implementation does not use a JS motion framework. `app/globals.css` now includes a `prefers-reduced-motion` guard for smooth scroll, transitions, and animations

## 8. System Frame Decision

- System Frames approved: not needed for the current site
- why: the site is a personal event-strategy credibility platform. Standard editorial sections, proof strips, audience cards, experience cards, CTA bands, and digital-card surfaces are clearer than a systems diagram
- where a future System Frame could be considered: only for a real event operating model, guest-flow map, vendor/stakeholder coordination model, or EventAgent-supported event workflow with enough approved source material
- where not to use: homepage hero, proof strip, basic audience cards, contact/card surfaces, or ordinary selected-experience summaries

## 9. Anti-Patterns To Avoid

- making the site look like a wedding planner template
- making ProVia Events or EventAgent visually dominate Mahnaz's personal brand
- adding unapproved testimonials, logos, photos, or private-event details
- using animated counters or flashy event graphics
- using generic luxury claims such as flawless, unforgettable, or best
- adding System Frames without a real event operations model
- making LinkedIn compete with the Calendly consultation CTA
- treating HyperFrames as a live frontend dependency

## 10. Source-Of-Truth Updates

- Stage 07 remains directionally correct. The selected territory can be sharpened from `Editorial Event Strategist` to `Warm Editorial Event Authority` in future docs
- Stage 08 and Stage 10 should continue treating mobile hero hierarchy, Calendly CTA prominence, and contextual ProVia/EventAgent placement as quality gates
- Stage 10 production confidence should stay honest until preview/browser evidence and launch gate approvals are filled in
- No frontend dependency should be added for UI UX Pro Max or HeyGen HyperFrames

## 11. Implementation Checklist

- build checkpoint: preserve Calendly as primary and LinkedIn as secondary
- build checkpoint: keep ProVia Events and EventAgent contextual, not hero-level brands
- build checkpoint: keep proof specific, source-supported, privacy-safe, and free of inflated luxury language
- build checkpoint: do not add System Frames unless a future page has a real event operations model to explain
- QA checkpoint: verify `/`, `/about`, `/experience`, `/event-strategy`, `/speaking`, `/card`, and `/c`
- QA checkpoint: verify compact widths, mobile menu, Calendly links, LinkedIn links, and QR/digital-card surfaces
- QA checkpoint: save real-browser screenshots or notes before raising production confidence above conditional

## Recommendation

The current site is compatible with the revised Website OS visual intelligence framework. The right next move is documentation alignment, a reduced-motion guardrail, and acceptance with notes. Do not redesign the site unless future proof, photography, testimonials, or selected event case studies create a real content model that deserves stronger visual treatment.
