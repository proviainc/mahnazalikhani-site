# Stage 04 - Conversion Events

## Primary Events

| Event Name | Trigger | Purpose |
|---|---|---|
| `calendly_cta_click` | Any click to `https://calendly.com/mahnazalikhani/event-strategy` | Primary conversion intent |
| `hero_calendly_click` | Hero CTA click to Calendly | Measures above-the-fold conversion |
| `final_cta_calendly_click` | Final CTA section click to Calendly | Measures post-scroll conversion |

## Secondary Events

| Event Name | Trigger | Purpose |
|---|---|---|
| `linkedin_click` | Click to LinkedIn profile | Trust and connection intent |
| `proviaevents_outbound_click` | Click to ProVia Events | Company-service routing |
| `eventagent_outbound_click` | Click to EventAgent | Event-tech credibility routing |

## Engagement Events

| Event Name | Trigger | Purpose |
|---|---|---|
| `selected_experience_view` | Selected experience section enters viewport | Measures proof exposure |
| `consultation_section_view` | Consultation section enters viewport | Measures offer exposure |
| `provia_context_view` | ProVia Events context section enters viewport | Measures brand-context exposure |
| `eventagent_context_view` | EventAgent section enters viewport | Measures event-tech-context exposure |

## Funnel KPIs

Primary KPI:

- Calendly CTA clicks.

Secondary KPIs:

- LinkedIn clicks.
- ProVia Events outbound clicks.
- EventAgent outbound clicks.
- CTA click rate by location.
- Scroll depth to proof and consultation sections.

Quality KPIs:

- Booked-call rate after Calendly click.
- Qualified-call rate.
- Source of booked calls.
- Audience type from call notes or future intake form.

## Implementation Notes

- Track the same Calendly destination across all CTA locations but preserve source context in event names.
- Use simple analytics first; do not add a complex funnel tool unless needed.
- If a future native intake form is added, track form starts, form completions, abandoned step, and audience type.

