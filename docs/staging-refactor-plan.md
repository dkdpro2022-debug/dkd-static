# Staging Refactor Plan

Goal: refactor `dieukydieu.tv` into a world-class, simple, elegant website while protecting the current production site.

Production is currently treated as GitHub Pages release/tag based. Do not change the production tag or production GitHub Pages deployment until staging has been reviewed and approved.

## Guardrails

- [x] Keep production source untouched while redesign work is in progress.
- [x] Do redesign work in a separate git worktree.
- [x] Preview locally on port `8080` before any public staging change.
- [ ] Test through Tailscale before any public staging change.
- [ ] Do not publish a new production tag until the staging version has been reviewed.
- [ ] Keep commits small enough to revert cleanly.
- [ ] Preserve existing URLs, redirects, videos, and media paths unless a checklist item explicitly changes them.
- [ ] Compare representative pages before and after every major visual change.

## Phase 1: Baseline And Staging Workspace

- [x] Confirm the production reference tag, currently `v1.0.4`.
- [x] Confirm the current production branch/reference used by GitHub Pages.
- [x] Create a staging worktree from the production reference:

  ```bash
  git worktree add ../github-pages-staging -b staging-refactor v1.0.4
  ```

- [x] Build the unmodified staging worktree:

  ```bash
  cd ../github-pages-staging
  SITE_URL=http://127.0.0.1:8080 bash tools/build_static_site.sh
  ```

- [x] Start local preview on port `8080`:

  ```bash
  python3 -m http.server 8080 --directory dist
  ```

- [x] Test locally at `http://127.0.0.1:8080/`.
- [x] Smoke test over Tailscale IP at `http://TAILSCALE_IP:8080/`.
- [x] Manually review over Tailscale in a browser from another device.
- [ ] Capture baseline screenshots for homepage, article page, category/blog page, and video page.

## Phase 2: Design Direction

- [x] Define the visual principles: simple, quiet, elegant, readable, trustworthy.
- [x] Use US government website qualities as inspiration: clear hierarchy, restrained color, high accessibility, strong navigation, no decoration without purpose.
- [x] Choose a conservative typography scale for Vietnamese content.
- [x] Define color tokens for background, text, links, borders, alerts, and accents.
- [x] Define spacing tokens for page width, sections, cards, article content, and mobile layouts.
- [x] Document the design decisions in the staging worktree before broad implementation.

## Phase 3: First Implementation Slice

- [x] Add a focused global CSS layer without deleting the existing site structure.
- [x] Improve homepage hierarchy and first viewport.
- [x] Simplify header/navigation while keeping existing links.
- [x] Improve article readability: content width, headings, paragraphs, images, video embeds, and related links.
- [x] Improve footer clarity and trust signals.
- [ ] Verify mobile layout at common widths.
- [ ] Check that text does not overlap or overflow on mobile.

## Phase 4: Content And URL Safety

- [x] Verify all existing slug URLs still resolve.
- [x] Verify legacy WordPress ID redirects still work.
- [x] Verify video pages still load media from `https://media.dieukydieu.tv`.
- [x] Verify images and fonts load from the built `dist/` output.
- [ ] Run a link check or scripted crawl against local staging.
- [ ] Fix only regressions introduced by the refactor.

## Phase 5: Optional Public Staging

Use this phase only after local and Tailscale testing are good.

- [ ] Decide whether public staging is needed. If Tailscale preview is enough, skip this phase.
- [ ] Prefer a separate GitHub Pages or Cloudflare Pages staging target instead of changing production settings.
- [ ] If using a custom domain, configure `staging.dieukydieu.tv`.
- [ ] Set staging build URL to:

  ```text
  https://staging.dieukydieu.tv
  ```

- [ ] Deploy only the `staging-refactor` branch/reference to staging.
- [ ] Confirm production `https://dieukydieu.tv/` is unchanged after staging deploy.

## Phase 6: Review And Release

- [ ] Review homepage, article, category/blog, video, mobile, and search/social preview behavior.
- [ ] Compare screenshots against baseline.
- [ ] Confirm accessibility basics: contrast, focus states, semantic headings, keyboard navigation.
- [ ] Confirm performance basics: page weight, image dimensions, render stability.
- [ ] Merge staging work only after approval.
- [ ] Create a new production release tag only after approval:

  ```bash
  git tag vNEXT
  git push origin vNEXT
  ```

- [ ] Confirm GitHub Pages production deploy completed from the new tag.
- [ ] Smoke test `https://dieukydieu.tv/`.
- [ ] Keep the previous production tag available for rollback.

## Rollback

- [ ] If production has a problem, repoint GitHub Pages or redeploy the previous known-good tag, currently `v1.0.4`.
- [ ] Do not delete the staging worktree until the production release has been stable.
- [ ] Record any rollback reason before continuing the refactor.
