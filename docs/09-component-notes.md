# Stage 09 - Component Notes

## Core Components To Build

### `SiteHeader`

- Includes name/wordmark, primary nav, Book Consultation CTA, and mobile menu trigger.
- Primary nav: About, Experience, Event Strategy.
- Mobile menu must expose primary nav, Book Consultation, and LinkedIn.
- Do not add ProVia Events or EventAgent to primary nav.

### `Hero`

- Supports editorial H1, support copy, primary CTA, secondary CTA, portrait/proof area.
- Home hero must use: "Structured event strategy for high-stakes gatherings."
- Do not add more than two CTA actions.

### `ProofStrip`

- Shows verified metrics only.
- No animated counters.
- Must stack cleanly on mobile.

### `AudienceCardGrid`

- Four cards maximum:
  - Corporate and business events.
  - Luxury private gatherings.
  - Hospitality consulting.
  - Business event organizers.

### `SelectedExperienceGrid`

- Text-first selected experience cards.
- Each card should include event name/type, scale if verified, and responsibility.
- No images unless approved.

### `ConsultationCoverage`

- Explains what the Event Strategy Consultation can cover.
- Should appear on Home and Event Strategy.

### `BrandContextBlock`

- Explains ProVia Events and EventAgent context.
- Links must be subordinate to Calendly.

### `CtaBand`

- One primary Calendly action.
- Optional LinkedIn secondary action.
- Compact and restrained.

## Utility Components

- Metadata helper.
- Canonical helper.
- Structured data component/helper.
- Analytics link wrapper for outbound and CTA events.
- Motion wrapper/variants if motion is implemented.

## Deferred Components

Do not build at launch:

- Blog cards.
- Article renderer.
- Sanity image renderer.
- Native intake form.
- Testimonial carousel.
- Logo strip.
- Case study detail layout.

