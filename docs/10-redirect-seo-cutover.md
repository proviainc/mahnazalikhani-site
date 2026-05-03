# Stage 10: Redirect And SEO Cutover

## Redirects

**Status:** Greenfield launch on a new personal domain. No legacy URL inventory was identified in Stages 01–08.

| Legacy URL | New URL | Redirect type | Verified |
|------------|---------|----------------|----------|
| N/A | | | |

If any prior URLs or printed materials surface after launch, add rows here and implement redirects in Cloudflare (Bulk Redirects, Pages `_redirects`, or equivalent) before marketing reuse.

## SEO Cutover Alignment

- Canonical base must match the final production host (see `site.config.ts` `url` and `10-dns-cutover-checklist.md`).
- After redirects are added, re-run `10-search-readiness-checklist.md` and Search Console coverage for affected paths.

## Search Console Migration (If Applicable)

- N/A unless a prior property or domain migration applies.
