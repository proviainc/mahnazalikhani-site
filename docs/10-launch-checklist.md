# Stage 10: Launch Checklist

Use this as the ordered runbook. Check boxes only when the step is **done** and **evidence** is noted (PR link, deploy URL, screenshot, or ticket).

## Pre-Launch: Repository And CI

- [ ] Git repository initialized (or confirmed) with `main` as production branch
- [ ] Remote on ProVia GitHub (or agreed owner) created and default branch protected
- [ ] `.gitignore` includes `node_modules/`, `.next/`, `out/`, local env files
- [ ] Cloudflare Pages project created; build `pnpm build`, output `out`
- [ ] `NODE_VERSION` / `PNPM_VERSION` set in Pages to match local successful build
- [ ] Preview deployments enabled for PRs

## Pre-Launch: Configuration

- [ ] In `site.config.ts`, the `url` value is the final production canonical (`https://mahnazalikhani.com`) before DNS cutover
- [ ] Analytics IDs added to deploy env when approved (`10-day-one-monitoring.md`)
- [ ] Calendly link verified as correct event type and active

## Gate A: Preview Review

- [ ] Preview URL generated for the release candidate commit
- [ ] `10-qa-checklist.md` executed against preview
- [ ] `10-device-qa-matrix.md` completed for minimum devices
- [ ] `10-visual-scorecard` thresholds reviewed (see `docs/09-visual-scorecard.md`)
- [ ] **Preview review verdict recorded** (name, date, approve / changes requested)

## Gate B: Merge Approval

- [ ] PR approved by designated reviewer
- [ ] **Merge to `main` approved** (name, date)
- [ ] Merge completed

## Gate C: Production Deploy

- [ ] Pages production deploy succeeded for merged `main` commit
- [ ] Production URL (Pages default or custom domain) loads all launch routes
- [ ] **Production deploy verified** (name, date, deploy id or URL)

## Gate D: DNS Cutover (Production Domain)

- [ ] **Explicit approval** to connect `mahnazalikhani.com` to production (name, date)
- [ ] DNS records per `10-dns-cutover-checklist.md`
- [ ] SSL certificate active on apex and `www` (if used)
- [ ] Post-cutover spot check: `/`, `/about/`, `/experience/`, `/event-strategy/`, `/sitemap.xml`, `/robots.txt`

## Post-Launch: Search And Monitoring

- [ ] Google Search Console property verified (if used)
- [ ] Bing Webmaster Tools (optional)
- [ ] `10-day-one-monitoring.md` active for 72 hours
- [ ] `10-issue-log.csv` triaged for any launch-night defects

## Sign-Off

| Role | Name | Sign-off date |
|------|------|---------------|
| Technical owner | | |
| Content / brand (Mahnaz or delegate) | | |
| Executive / final (if required) | | |
