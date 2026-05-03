# Stage 09 - Known Gaps

## Implementation Status

Launch site code exists under `mahnazalikhani-site`. This file tracks **residual** gaps, not “build not started.”

## Content Gaps

### Approved Portrait

Status:

- **Met:** approved studio portrait in `public/uploads/mahnaz-alikhani-portrait.png`, used in hero and default social preview.

Impact:

- None for launch portrait.

Mitigation:

- Replace file in place if Mahnaz supplies a higher-resolution or updated crop; re-run visual QA.

### Exact EventAgent Title

Status:

- Unconfirmed.

Impact:

- Final public title and schema jobTitle should not use "Head of Strategy" until approved.

Mitigation:

- Use softer wording such as "strategy contributor connected to EventAgent" until confirmed.

### Public Phone / Email

Status:

- Unconfirmed.

Impact:

- Footer/contact details may be limited to Calendly and LinkedIn.

Mitigation:

- Use Calendly and LinkedIn only unless public contact details are approved.

## Proof Gaps

Missing or unapproved:

- Testimonials.
- Client logos.
- Event photography.
- Speaking/emcee media.
- **Partially met (selected work):** LinkedIn project chapters are reflected in `docs/01-proof-inventory.md`, `docs/06-authenticity-audit.md`, and `lib/site-data.ts` (Feb 2026). Deep case write-ups still optional.

Mitigation:

- Use verified metrics and privacy-safe event details.

## Technical Gaps

To confirm before implementation:

- Starter template access.
- GitHub repo creation/remote ownership.
- Cloudflare Pages connection.
- Private package auth requirements.
- DNS owner for `MahnazAlikhani.com`.

