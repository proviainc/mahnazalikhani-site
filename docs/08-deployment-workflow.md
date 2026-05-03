# Stage 08 - Deployment Workflow

## Repository Governance

Default owner:

- ProVia GitHub ownership.

Override status:

- No override approved.

Production branch:

- `main`

Preview branches:

- Feature branches and pull requests.

## Cloudflare Pages

Default hosting:

- Cloudflare Pages under ProVia account.

Preview model:

- Branch and pull request previews.

Production model:

- `main` branch deploys production.

## Build Flow

1. Create implementation branch.
2. Build pages and components.
3. Run local checks.
4. Push branch.
5. Generate Cloudflare Pages preview.
6. Review preview.
7. Fix issues.
8. Obtain approval to merge.
9. Merge to `main`.
10. Verify production deployment.
11. Connect DNS only after explicit DNS/cutover approval.

## Approval Gates

Required gates:

1. Implementation branch ready.
2. Preview deployment review.
3. Explicit merge approval.
4. Production deployment verification.
5. Explicit DNS cutover approval.

## Production Protection

- Do not connect `MahnazAlikhani.com` during development.
- Do not treat merge to `main` as DNS cutover approval.
- Keep DNS cutover separate from production deployment.

## Environment Requirements

Launch integrations:

- Calendly outbound link.
- LinkedIn outbound link.
- ProVia Events outbound link.
- EventAgent outbound link.
- Analytics, if available.

No launch environment needed for:

- Sanity.
- Native forms.
- CRM.
- Email automation.

## Local Verification Before Preview

Required:

- Install dependencies.
- Run local development server.
- Run build.
- Check links.
- Check responsive layouts.
- Check accessibility basics.

If private packages are required:

- Confirm `.npmrc`.
- Confirm `NODE_AUTH_TOKEN`.
- Stop if private package auth fails; do not remove private dependencies to bypass auth.

