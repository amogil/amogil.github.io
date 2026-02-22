# Agent Guide — amogil.github.io

## Context
This repository hosts a personal website published via GitHub Pages:
- https://amogil.github.io/

The site is built with Astro. The intended direction is to replace the current starter with the Astro Nano template:
- https://github.com/markhorn-dev/astro-nano

The desired end result is a clean, minimal personal site with:
- a homepage (short intro + links)
- a projects page/section
- an optional blog
- strong performance (Lighthouse)

## Verified Repo Facts
- Default branch: `master`
- Pages deploy workflow: `./.github/workflows/deploy.yml`
  - triggers on pushes to `master`
  - uses Node 20 + npm (`npm ci`)
  - builds with `npm run build`
  - uploads `dist/` and deploys to Pages
- `astro.config.mjs` sets `site: 'https://amogil.github.io/'`

## Non-Negotiables (Guardrails)
- Keep deployment via GitHub Actions -> GitHub Pages.
- Keep build output as `dist/` (workflow expects it).
- Do not set `base` for a GitHub user-site (only needed for project sites deployed under a subpath).
- Keep npm as the package manager unless the workflow is updated accordingly.
- No server-side features (Pages is static).
- Avoid heavy client-side frameworks unless there is a clear need.
- Prioritize accessibility and performance.

## Goal
Bring Astro Nano into this repo (as source code, not a dependency), then customize content, metadata, and styling while keeping the existing Pages deployment intact.

## Suggested Execution Order
1. Integrate Astro Nano into the repository.
2. Ensure local dev/build/preview work:
   - `npm install` (or `npm ci`)
   - `npm run dev`
   - `npm run build`
   - `npm run preview`
3. Verify Pages workflow is still valid and still deploys `dist/`.
4. Customize site metadata (title/description/OG, favicon) and canonical URLs.
5. Replace template content with the user’s information and projects; keep blog as requested.

## Questions to Ask the User (If Missing)
- Preferred display name and a 1-line tagline.
- Links to show (GitHub, email, Telegram/LinkedIn, etc.).
- 3–6 projects (name, 1–2 lines, link).
- Blog: keep empty vs seed with 1–3 posts; preferred topics/tone.
- Any design constraints (light/dark mode, accent color, typography).