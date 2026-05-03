# Stage 08 - Template Inventory

## Launch Templates

### Personal Brand Page Template

Used by:

- Home
- About

Core modules:

- Header.
- Editorial hero.
- Proof strip or credentials block.
- Narrative content sections.
- Context links.
- CTA band.
- Footer.

Implementation notes:

- Must support portrait-led layout.
- Must work without approved event photography.
- Must keep Calendly CTA visible.

### Proof / Experience Template

Used by:

- Experience

Core modules:

- Page hero.
- Proof metrics.
- Event cluster cards.
- Selected experience cards.
- CTA band.

Implementation notes:

- Must support privacy-safe event details.
- Must not require images.
- Should support future case-study detail links if approved later.

### Offer / Conversion Template

Used by:

- Event Strategy

Core modules:

- Offer hero.
- Problem framing.
- Consultation coverage list.
- Best-fit scenarios.
- Preparation guidance.
- Proof/trust block.
- CTA band.

Implementation notes:

- Must keep Calendly CTA prominent.
- Should not include a form at launch.

## Deferred Templates

### Insights Index Template

Status:

- Deferred.

Reason:

- No launch blog or Sanity system approved.

### Article Detail Template

Status:

- Deferred.

Reason:

- No article publishing model at launch.

### Selected Work Detail Template

Status:

- Deferred.

Reason:

- Requires approved event photos and deeper case notes.

## Route Inventory

| Route | Template | Launch |
|---|---|---|
| `/` | Personal Brand Page | Yes |
| `/about/` | Personal Brand Page | Yes |
| `/experience/` | Proof / Experience | Yes |
| `/event-strategy/` | Offer / Conversion | Yes |
| `/insights/` | Insights Index | No |
| `/insights/[slug]/` | Article Detail | No |
| `/experience/[slug]/` | Selected Work Detail | No |

