# Stage 08 - Blog Management Architecture

## Launch Decision

No blog management architecture at launch.

## Rationale

The approved launch sitemap does not include:

- `/insights/`
- `/insights/[slug]/`
- `/blog/`
- Blog index/detail templates.
- Sanity Studio.

The first version should focus on credibility, proof, and Calendly conversion.

## If Blog / Insights Is Added Later

Default architecture:

- Public website remains code-managed.
- Insights content is managed in Sanity.
- Sanity Studio is deployed separately.
- Recommended admin URL: `admin.MahnazAlikhani.com`.
- Public routes: `/insights/` and `/insights/[slug]/`.
- Optional routes: `/insights/category/[slug]/`, `/insights/tag/[slug]/`.

## Minimum Future Sanity Schema

Required:

- `post`
- `category`

Optional:

- `tag`

Suggested post fields:

- title
- slug
- excerpt
- cover image
- publishedAt
- updatedAt
- category
- tags
- seoTitle
- seoDescription
- ogImage
- body

## Rebuild Workflow If Static

If the public site is statically generated:

1. Editor publishes in Sanity.
2. Sanity webhook triggers a Cloudflare Pages build hook.
3. Public site rebuilds.
4. New post appears on the live site.

## Launch Non-Goals

- No Sanity dependency.
- No Studio deployment.
- No article schema implementation.
- No blog sitemap entries.
- No empty blog/Insights navigation.

