# Stage 10: Rollback And Contingency

## Principles

- Prefer **forward fix** (small PR + redeploy) for content and asset issues.
- Prefer **DNS revert** only if the site is unusable or SSL cannot be repaired quickly.
- Never delete an old live site until the new site is verified and stakeholders accept cutover (N/A if no prior site).

## Rollback Options

### Option A: Revert DNS (Fastest If Domain Points To Broken Target)

1. Restore previous DNS records from saved snapshot or registrar history.
2. Confirm old destination serves acceptable content (or maintenance page).
3. Record incident in `10-issue-log.csv`.

### Option B: Revert Or Roll Forward Pages Deploy

1. In Cloudflare Pages, identify last **known good** production deployment.
2. Roll back to that deployment or merge a revert PR on `main` and wait for rebuild.
3. Re-verify Calendly and key routes.

### Option C: Disable Custom Domain Temporarily

1. Remove custom domain binding from Pages project (last resort; causes downtime).
2. Use default `*.pages.dev` URL for internal review until fixed.

## Roles

| Role | Name | Contact |
|------|------|---------|
| DNS owner | | |
| Pages / Git owner | | |
| On-call for launch night | | |

## Communication Template

Subject: MahnazAlikhani.com, rollback in progress  
Body: What changed, what visitors see now, ETA for fix, who is owner.

## Post-Incident

- [ ] Root cause noted in `10-issue-log.csv`
- [ ] Update `10-production-confidence.md` if launch deferred
