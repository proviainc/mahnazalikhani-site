# Stage 10 — Publish Handoff (GitHub, Cloudflare Pages, DNS)

Stakeholder approval for the **current build** is recorded in `docs/00-operational-status.md`. Execute **1 → 2 → 3** in order. **Social proof queue** (`docs/approval-queue-social-proof.md`) is **out of scope** for this launch unless requirements change.

## 1 — GitHub repository and first push

**Done:** Repository **`https://github.com/proviainc/mahnazalikhani-site`** exists with `main` pushed (initial import).

**Commit email / push protection:** If GitHub rejects pushes with `GH007` (private email), configure this repo to use a GitHub **noreply** address, then amend or recommit:

```bash
git config user.email "YOUR_GITHUB_NUMERIC_ID+YOUR_LOGIN@users.noreply.github.com"
git commit --amend --reset-author --no-edit
git push
```

(Find numeric id: `gh api user --jq .id`.)

**Branch protection:** In GitHub → Settings → Branches, add a rule for `main` as per org policy.

## 2 — Cloudflare Pages

**Path A — GitHub Actions (recommended here):** Workflow **`.github/workflows/deploy-cloudflare-pages.yml`** builds `pnpm build` and runs **`wrangler pages deploy out`** on every push to `main`.

1. In the GitHub repo → **Settings → Secrets and variables → Actions**, add:
   - **`CLOUDFLARE_API_TOKEN`** — API Token with at least:
     - **Account** → Cloudflare Pages → **Edit**
     - **Account** → **Read** (or membership access so Wrangler can resolve account; if `wrangler pages project list` fails with code `10000`, broaden token per [API token permissions](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/))
     - Optional: **User** → **Memberships** → **Read** (helps some Wrangler calls)
   - **`CLOUDFLARE_ACCOUNT_ID`** — Cloudflare dashboard (any zone URL) or run `wrangler whoami` locally.

2. Push to `main` (or **Actions → Deploy Cloudflare Pages → Run workflow**). First successful deploy creates or updates the **`mahnazalikhani-site`** Pages project and returns a **`*.pages.dev`** URL in the job log.

3. Run **`docs/10-qa-checklist.md`** (and device matrix) against that URL.

**Path B — Cloudflare “Connect to Git”:** Pages → Create project → Connect to Git → `proviainc/mahnazalikhani-site`, branch **`main`**, build **`pnpm build`**, output **`out`**, set **`NODE_VERSION`** / **`PNPM_VERSION`** to match local successful builds. Use this if you prefer Cloudflare-hosted builds instead of GitHub Actions.

**CLI note:** If local `wrangler pages project create` fails with **Authentication error [code: 10000]**, the token in `CLOUDFLARE_API_TOKEN` needs the scopes above; do not rely on a zone-only DNS token.

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
