# Stage 10 — Publish Handoff (GitHub, Cloudflare Pages, DNS)

Stakeholder approval for the **current build** is recorded in `docs/00-operational-status.md`. Execute **1 → 2 → 3** in order. **Social proof queue** (`docs/approval-queue-social-proof.md`) is **out of scope** for this launch unless requirements change.

## 1 — GitHub repository and first push

1. Create an **empty** repository on the ProVia GitHub org (recommended name: `mahnazalikhani-site`). Do **not** add a README, `.gitignore`, or license from the GitHub UI (avoids merge noise).
2. From this folder on your machine:

```bash
cd /Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site
git status   # expect clean tree on main
git remote add origin git@github.com:proviainc/mahnazalikhani-site.git
git push -u origin main
```

3. In GitHub: set **`main`** as default branch, enable **branch protection** on `main` (require PR or restrict pushes as per org policy).

If the remote already exists with history, use the org’s normal flow (PR from branch) instead of an empty push.

## 2 — Cloudflare Pages

1. **Create project:** Pages → Create a project → Connect to Git → select `proviainc/mahnazalikhani-site`, production branch **`main`**.
2. **Build settings:**
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (repository root)
3. **Environment variables (build):** set versions to match a successful local build, for example:
   - `NODE_VERSION` = `22` (or whatever `node -v` was when `pnpm build` last passed)
   - `PNPM_VERSION` = `9` (or match `pnpm -v` major)
4. Trigger a deploy; open the **Pages preview URL** and run `docs/10-qa-checklist.md` (and device matrix) once.
5. After approval: confirm **production** deployment for `main` and note the production `*.pages.dev` hostname.

## 3 — DNS (apex + optional www)

Canonical site URL is **`https://mahnazalikhani.com`** (apex). See `docs/10-dns-cutover-checklist.md` for the full gate.

**Typical Cloudflare Pages custom domain:**

1. In Pages → project → **Custom domains**: add `mahnazalikhani.com` and, if desired, `www.mahnazalikhani.com`.
2. Follow Cloudflare’s DNS prompts (often it creates the right **CNAME** to `*.pages.dev` automatically).
3. If **www** exists: add a **redirect rule** (or Bulk Redirect) **www → apex** so only one hostname serves the site, matching `site.config.ts` and stakeholder decisions.

4. Wait for **SSL active** on the custom host, then re-run link and OG checks from `docs/10-search-readiness-checklist.md`.

## After cutover

- Update any ticket or runbook with production URL and deploy ID.
- Optional: enable **Cloudflare Web Analytics** only if product later approves analytics (v1 decision remains **no** third-party app analytics in the repo; see `docs/00-stakeholder-decisions.md`).
