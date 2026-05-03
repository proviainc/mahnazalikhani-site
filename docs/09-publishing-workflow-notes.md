# Stage 09 - Publishing Workflow Notes

## Launch Publishing Mode

Code-managed pages only.

## What This Means

- Marketing pages are edited in code.
- Content changes go through branch, preview, review, and merge.
- No non-technical admin editor exists at launch.
- No Insights or Blog publishing path exists at launch.

## Approved Launch Pages

- Home.
- About.
- Experience.
- Event Strategy.

## Deferred Publishing Path

If Insights is approved later:

- Use Sanity for regular non-technical publishing.
- Use Cursor-assisted publishing for strategic article creation.
- Keep marketing pages code-managed.
- Use `/insights/` and `/insights/[slug]/`.

## Stage 09 Implementation Rule

Do not implement:

- Blog routes.
- Sanity Studio.
- Article schemas.
- Blog cards.
- Empty Insights navigation.

unless a new approval explicitly changes launch scope.

