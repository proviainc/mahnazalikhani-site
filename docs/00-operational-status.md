# Operational Status

## Current Run State

Initial website implementation is complete and local verification has passed. Stage 10 QA, launch, and cutover **documentation** is in place under `docs/10-*`.

**Stakeholder approval:** The **current build** is approved to move through the launch pipeline (GitHub → Cloudflare Pages preview/production → DNS). Detailed operator steps are in **`docs/10-publish-handoff.md`**. Social proof / approval-queue work is **explicitly deferred** for this launch.

Browser QA on the **Cloudflare preview URL**, Pages project wiring, and DNS cutover still require execution in your accounts (see handoff doc).

## Confirmed

- Website repo/folder name: `mahnazalikhani-site`
- Website repo path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site`
- Docs path: `/Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site/docs`
- Folder creation approved: yes
- Docs folder exists: yes
- Domain target: `mahnazalikhani.com` (apex canonical; redirect `www` → apex at DNS or edge)
- Language: English
- Primary CTA: Calendly consultation booking
- Secondary CTA: LinkedIn connection
- Public trust sources: resume, LinkedIn, ProVia Events, EventAgent
- Website purpose: personal credibility for Mahnaz, not a replacement for ProVia Events
- Stakeholder decisions: `docs/00-stakeholder-decisions.md`
- Approved studio portrait in `public/uploads/mahnaz-alikhani-portrait.png`
- Public email: work `mahnaz@proviaevents.com`, personal `mahnaz.alikhani53@gmail.com` (footer + Speaking); Person JSON-LD `email` is work only
- Analytics: **none** on v1 personal site
- Speaking: first-pass page at `/speaking/`
- Favicon: `app/icon.svg` MA monogram
- ProVia copy: **founded and scaled** approved on personal site
- Banic: **qualitative** outcomes on marketing site
- EventAgent: **strategy contributor** wording until exact title approved

## Not Yet Confirmed

- DNS ownership and production cutover path
- GitHub remote as `proviainc/mahnazalikhani-site` with branch protection (recommended)
- Cloudflare Pages project wiring to that repo
- Public use rights for **additional** photos, testimonials, event names, and logos (track approvals in `docs/approval-queue-social-proof.md`)

## Can Proceed Now

- Run checklists in `docs/10-qa-checklist.md`, `docs/10-device-qa-matrix.md`, and `docs/10-search-readiness-checklist.md` against the approved preview URL
- Preview deployment setup
- Browser/visual QA against the Stage 09 UI audit
- Portrait swap if Mahnaz supplies a higher-resolution or alternate crop

## Blocked

- Production launch until preview review is approved
- Production domain connection
- Precise **corporate** EventAgent job title in external systems, on-site remains neutral until approved
- Use of unapproved testimonials, client logos, or private-event media

## Latest Verification

- `tsc --noEmit` passed
- `next build` passed and exported the static site
- `vitest run --passWithNoTests` passed with no test files
- `next lint` passed with no warnings or errors

