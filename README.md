# Mahnaz Alikhani Site

Code-managed personal credibility website for Mahnaz Alikhani, senior event planner and strategist.

## Launch Scope

- Home
- About
- Experience
- Speaking (first pass for emcee and panel inquiries)
- Event Strategy

Primary CTA: Calendly consultation. Secondary CTA: LinkedIn. Contact: work and personal email in footer.

## Repository

Recommended GitHub remote: **`proviainc/mahnazalikhani-site`** with `main` protected and Cloudflare Pages connected to this repo.

After stakeholder approval, follow **`docs/10-publish-handoff.md`** for GitHub first push, Cloudflare Pages, and DNS (steps 1–3). Social proof queue is optional and not required for that cutover.

## Domain

Canonical: **`https://mahnazalikhani.com`** (apex). Configure **`www` → apex** at DNS or edge if both hostnames exist.

## Analytics

**None** on v1 (stakeholder decision). Revisit in `docs/00-stakeholder-decisions.md` if requirements change.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm cf:sync-dns   # after API token includes Zone DNS Edit for mahnazalikhani.com; see docs/10-publish-handoff.md
```

Cloudflare Pages should use:

- Build command: `pnpm build`
- Output directory: `out`

## Notes

The launch site intentionally does not include a CMS or blog. Project strategy and build notes live in `docs/`.
