# Stage 10: DNS Cutover Checklist

**Target domain:** `mahnazalikhani.com`  
**Hosting default:** Cloudflare Pages (confirm actual project name in Pages dashboard)

## Preconditions

- [ ] Production deploy verified on Pages (custom domain or `*.pages.dev` working)
- [ ] **Written approval** recorded for pointing production DNS to this project (`10-launch-checklist.md` Gate D)
- [ ] Registrar or DNS zone access confirmed (who holds login)

## DNS Records (Typical Cloudflare Pages)

Exact values depend on Cloudflare’s assigned targets for the project. Use the **Pages custom domains** UI as source of truth and paste the assigned targets below when known.

| Host | Type | Value | Status |
|------|------|-------|--------|
| `@` (apex) | CNAME or A/AAAA per Pages instructions | | |
| `www` | CNAME to Pages | | (optional if www policy decided) |

## SSL And Redirect Policy

- [ ] Universal SSL active on the zone
- [ ] Decide **apex vs www** canonical; align `site.config.ts` `url` and metadata canonicals
- [ ] If both apex and www exist, set redirect rule so only one is canonical (avoid duplicate content)

## Post-Cutover Verification

Run within 15 minutes of DNS change (allow TTL propagation):

- [ ] `https://mahnazalikhani.com/` loads
- [ ] `https://mahnazalikhani.com/about/` (or chosen canonical pattern)
- [ ] `https://mahnazalikhani.com/experience/`
- [ ] `https://mahnazalikhani.com/event-strategy/`
- [ ] `https://mahnazalikhani.com/sitemap.xml`
- [ ] `https://mahnazalikhani.com/robots.txt`
- [ ] OG image URL returns 200 when pasted in a messenger preview debugger

## Rollback

If DNS must revert: document previous DNS values **before** change; restore from registrar history or saved runbook.
