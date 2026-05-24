# Homepage Restructure Plan

## Requirement

- [x] Restructure the home page so its content format matches `dieukydieu_sections.md`.
- [x] Use the 10 sections from `dieukydieu_sections.md` as the primary homepage structure.
- [x] Preserve all 88 source entries from `dieukydieu_sections.md`.
- [x] Preserve duplicate entries when the same article appears in multiple source sections.
- [x] Preserve the current visual style unless a layout change is needed to support the new section structure.
- [x] Keep all article/video cards pointing to the original markdown source `dieukydieu.tv` detail URLs, not direct `media.dieukydieu.tv` MP4 URLs.
- [x] Make the homepage easy to scan on desktop and mobile.
- [x] Keep the app deployable as a static Vite build on Cloudflare Pages.

## Source Sections

- [x] Video tiêu biểu
- [x] Người nổi tiếng nói gì về Pháp Luân Công
- [x] Những câu chuyện thần kỳ
- [x] Nhà khoa học và giới tri thức nói về Pháp Luân Công
- [x] Pháp Luân Công trên thế giới
- [x] Vùng đất và con người
- [x] Âm nhạc và nghệ thuật do học viên sáng tác
- [x] Sự thật cuộc bức hại Pháp Luân Công tại Trung Quốc
- [x] Hướng dẫn cho người mới học
- [x] Blog

## Implementation Plan

- [x] Convert the content from `dieukydieu_sections.md` into structured app data in `src/data.ts`.
- [x] Define each section with `id`, `title`, optional icon/category metadata, optional `sourceUrl`, `layout`, and item list.
- [x] Use a data shape like:
  ```ts
  type HomepageSection = {
    id: string;
    title: string;
    sourceUrl?: string;
    layout: "featured" | "grid" | "compact";
    items: {
      title: string;
      href: string;
      image?: string;
    }[];
  };
  ```
- [x] Support cards without thumbnails, because `dieukydieu_sections.md` only provides titles and links.
- [x] Reuse known local thumbnails only where they already exist and clearly match the article.
- [x] Do not deduplicate items globally; keep each section faithful to the markdown source.
- [x] Create a reusable section component for rendering section headings and link cards.
- [x] Replace the current scattered homepage modules with the 10-section structure.
- [x] Keep the hero section, but update its buttons and summary to point into the new section layout.
- [x] Update header navigation so desktop shows only priority anchors plus a compact category/menu control.
- [x] Ensure the mobile menu can reach all 10 sections.
- [x] Render large sections as responsive grids.
- [x] Render short sections as denser list/card groups where appropriate.
- [x] Reuse or remove old components such as `VideoGrid`, `StoryEditorial`, and `Quotes` based on whether they fit the new structure.
- [x] Keep `VideoFeature` only if it supports the first section cleanly.
- [x] Ensure all cards link externally with safe attributes.
- [x] Check mobile spacing, long Vietnamese titles, and card wrapping.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Start `npm run dev` and verify the running page at `http://localhost:3000/`.
- [ ] Verify desktop and mobile viewport behavior, especially header navigation and long card titles.

## Cloudflare Pages Deployment Plan

- [x] Confirm the app builds as a static Vite site with no server-only runtime dependency.
- [x] Use Cloudflare Pages build command: `npm run build`.
- [x] Use Cloudflare Pages build output directory: `dist`.
- [x] Keep Vite asset paths relative to the site root and avoid hardcoded localhost URLs.
- [x] Verify production build locally with `npm run build` before deployment.
- [x] If using Cloudflare Pages preview, confirm all local `/wp-content/...` assets are present in `public/wp-content/...` and included in `dist`.
- [ ] Confirm external `dieukydieu.tv` links open correctly from the deployed preview.

## Acceptance Checklist

- [x] Homepage section order matches `dieukydieu_sections.md`.
- [x] Every section from `dieukydieu_sections.md` appears on the homepage.
- [x] Homepage data includes 10 sections and 88 total source items.
- [x] Each section's item order matches `dieukydieu_sections.md`.
- [x] Duplicate source items remain visible in every section where they appear.
- [x] All homepage links match the markdown source links.
- [x] No homepage card links to direct `media.dieukydieu.tv` MP4 URLs unless that URL appears in the markdown source.
- [x] Header navigation can reach the main sections.
- [x] Mobile navigation can reach all 10 sections.
- [ ] Layout works on desktop and mobile.
- [x] No TypeScript errors from `npm run lint`.
- [x] `npm run build` completes successfully.
- [x] Cloudflare Pages settings are compatible: build command `npm run build`, output directory `dist`.
