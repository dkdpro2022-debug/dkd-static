# dieukydieu.tv static mirror

This repository is a static mirror of the public `dieukydieu.tv` WordPress site for GitHub Pages hosting.

## Public site files

- `index.html` is the homepage.
- Each article/page keeps its WordPress-style URL as a root folder with an `index.html` file, for example:
  - `gioi-thieu-phap-luan-cong/index.html`
  - `me-toi-tap-phap-luan-cong-nhung-loi-ich-tuyet-voi/index.html`
- `wp-content/` and `wp-includes/` contain mirrored theme assets, images, CSS, and JavaScript needed for the static pages.
- `category/`, `blog/`, and `videos/` contain archive/listing pages copied from the public site.

Do not reorganize the public page folders unless you also update every internal link and redirect. Their current locations are the live URLs.

## Maintenance files

Operational notes and video replacement spreadsheets live in `maintenance/`.

- `video-youtube-search-list.csv` is the source list of old videos and suggested YouTube searches.
- `youtube-replacement-candidates.csv` contains YouTube search results, usually up to three candidates per old video.
- `youtube-replacement-best-guess.csv` contains the first result for each search, but should be reviewed before use.
- `original-video-sources.csv` keeps the raw original MP4 source information from the crawl.
- `video-replacement-checklist.csv` maps pages that currently use the demo YouTube placeholder.

## Local preview

From this directory:

```bash
python3 -m http.server 8084
```

Then open:

```text
http://SERVER_IP:8084/
```

## GitHub Pages

Recommended settings:

- Source: deploy from branch
- Branch: `main` or `master`, depending on the pushed branch
- Folder: `/root`

