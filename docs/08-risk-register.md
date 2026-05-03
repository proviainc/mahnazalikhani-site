# Stage 08 - Risk Register

| Risk | Severity | Likelihood | Mitigation |
|---|---:|---:|---|
| Approved portrait/photo is not ready before design/build | High | Medium | Build layout with reserved image slot; do not finalize visual QA until photo is supplied. |
| Exact EventAgent public title remains unresolved | Medium | Medium | Use softer wording in implementation until title is approved. |
| Site drifts into generic event-planner visual style | High | Medium | Enforce Stage 07 visual fidelity checkpoints in implementation and QA. |
| ProVia Events or EventAgent links compete with Calendly | Medium | Medium | Keep them contextual and visually subordinate. |
| Calendly-only flow produces low-fit bookings later | Medium | Low | Add native pre-call intake in phase two only if lead quality becomes a problem. |
| No testimonials/logos/photos weakens proof perception | Medium | Medium | Lead with verified metrics and LinkedIn; add approved assets later. |
| DNS ownership or registrar access delays launch | High | Medium | Confirm DNS owner before production cutover planning. |
| Cloudflare/GitHub setup is not approved or available | High | Low | Keep default ProVia ownership/Cloudflare plan documented; resolve before implementation begins. |
| Private event details are exposed accidentally | High | Low | Use privacy-safe event details only; avoid owner names and unapproved media. |
| SEO metadata or schema overstates authority | Medium | Low | Use only Person, WebSite, BreadcrumbList, and accurate Service schema. |
| Mobile first viewport feels compressed | High | Medium | Apply responsive rules and review preview on mobile before merge. |
| Motion feels decorative or distracting | Medium | Low | Use only approved minimal motion patterns and reduced-motion fallback. |

## Highest Priority Mitigations

1. Obtain approved portrait/photo.
2. Confirm EventAgent title wording.
3. Preserve one dominant Calendly CTA.
4. Review mobile preview before merge.
5. Confirm DNS ownership before launch planning.

