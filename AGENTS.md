# Mahnaz Alikhani site — agent notes

Code-managed credibility site for Mahnaz Alikhani (mahnazalikhani.com). Canonical host is the apex domain.

## Stack

- Next.js static export (`output: 'export'`, `trailingSlash: true`), TypeScript, Tailwind
- Package manager: **pnpm** (`pnpm-lock.yaml`, pnpm 8.15.0). Pages CI uses Node 20.
- No CMS. Launch scope: Home, About, Experience, Speaking, Event Strategy.

## Hard rules

- Do not invent credentials, talks, metrics, or testimonials.
- Do not add a separate services funnel or analytics. Primary CTA is the tracked ProVia Events intake. Stakeholder decisions live in `docs/00-stakeholder-decisions.md`.
- Do not commit `.env` or `.env.local`.
- There is no `dev` branch. Feature branches come from `main`; open PRs against `main`.

## Verify

```bash
pnpm verify
```

`pnpm cf:sync-dns` is an operator DNS script, not part of verify. Strategy notes stay in `docs/`.
