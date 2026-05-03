# Stage 09 - Sanity Blog Implementation Notes

## Launch Decision

Sanity is not part of Stage 09 implementation for launch.

## Do Not Implement

- `studio/`
- Sanity config.
- Sanity schemas.
- Sanity client/query layer.
- `/insights/`
- `/insights/[slug]/`
- Category/tag routes.
- Sanity rebuild webhooks.

## Future Architecture If Approved Later

If Mahnaz needs Insights/blog publishing:

- Public site remains code-managed.
- Sanity manages Insights content only.
- Studio deploys separately, preferably at `admin.MahnazAlikhani.com`.
- Static publishing should trigger Cloudflare rebuild.
- Cursor can create/update strategic articles through the Sanity API.

## Guardrail

Do not add Sanity just because a starter template supports it. It must be intentional and approved.

