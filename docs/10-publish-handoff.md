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

**Status:** Pages project **`mahnazalikhani-site`** exists. Production hostname: **`https://mahnazalikhani-site.pages.dev`** (each deploy also gets a unique `*.mahnazalikhani-site.pages.dev` preview URL in the deploy log).

**Path A — GitHub Actions (recommended here):** Workflow **`.github/workflows/deploy-cloudflare-pages.yml`** builds `pnpm build` and runs **`wrangler pages deploy out`** on every push to `main`. Repository **Actions secrets** `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are configured for this repo.

1. In the GitHub repo → **Settings → Secrets and variables → Actions**, add (or from a shell where the values are available):

   ```bash
   gh secret set CLOUDFLARE_API_TOKEN -R proviainc/mahnazalikhani-site
   gh secret set CLOUDFLARE_ACCOUNT_ID -R proviainc/mahnazalikhani-site
   ```

   (Each command prompts for the value, or pipe from your env as appropriate for your security policy.)

   Manual UI fields:
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

**Done via API:** Both **`mahnazalikhani.com`** and **`www.mahnazalikhani.com`** are attached to the Pages project **`mahnazalikhani-site`** (production target **`mahnazalikhani-site.pages.dev`**). Status may show **pending** until DNS validates.

**CLI / API sync (preferred once token covers the zone):** Wrangler does **not** edit zone DNS. Use the repo script (Cloudflare REST API):

```bash
cd /Users/amintizdast/Documents/ProVia/Websites/mahnazalikhani-site
set -a && source ../proviahub-site/.env.local && set +a   # or any env with CLOUDFLARE_API_TOKEN
# Optional: export MAHNAZ_CF_ZONE_ID="$(curl -sS -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
#   "https://api.cloudflare.com/client/v4/zones?name=mahnazalikhani.com" | python3 -c "import json,sys; print(json.load(sys.stdin)['result'][0]['id'])")"
pnpm cf:sync-dns
```

The token must include **Zone → DNS → Edit** (and **Zone → DNS → Read**) for **`mahnazalikhani.com`** on the account that owns the zone. If `curl .../zones?name=mahnazalikhani.com` returns an empty `result` array, the token is still scoped to other zones only; widen **Zone resources** on that API token in the Cloudflare dashboard, then rerun `pnpm cf:sync-dns`. Default `MAHNAZ_CF_ZONE_ID` matches the zone Cloudflare Pages linked when custom domains were added; override if your zone id differs.

**Finish in Cloudflare Dashboard (if you skip CLI):**

1. **Workers & Pages** → **`mahnazalikhani-site`** → **Custom domains**. Open each hostname and complete the setup flow so Cloudflare can create (or you confirm) the proxied **CNAME** to **`mahnazalikhani-site.pages.dev`**.
2. If you prefer **manual DNS** in the **`mahnazalikhani.com`** zone instead: add **proxied** CNAME records **`@`** and **`www`** → **`mahnazalikhani-site.pages.dev`** (apex CNAME flattening applies on Cloudflare).
3. **www → apex (stakeholder):** After both names resolve, add a **Single redirect** (Rules → Redirect Rules): if hostname equals `www.mahnazalikhani.com`, redirect to `https://mahnazalikhani.com` preserving path (301).

4. Wait for **SSL active** on the custom host, then re-run link and OG checks from `docs/10-search-readiness-checklist.md`.

## After cutover

- Update any ticket or runbook with production URL and deploy ID.
- Optional: enable **Cloudflare Web Analytics** only if product later approves analytics (v1 decision remains **no** third-party app analytics in the repo; see `docs/00-stakeholder-decisions.md`).
