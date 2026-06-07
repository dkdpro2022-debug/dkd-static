#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
SITE_URL="${SITE_URL:-}"
MEDIA_URL="${MEDIA_URL:-https://media.dieukydieu.tv}"

if [ -z "$SITE_URL" ] && [ "${GITHUB_ACTIONS:-}" = "true" ] && [ -n "${GITHUB_REPOSITORY:-}" ]; then
  REPO_OWNER="${GITHUB_REPOSITORY_OWNER:-${GITHUB_REPOSITORY%/*}}"
  REPO_NAME="${GITHUB_REPOSITORY#*/}"

  if [ "$REPO_NAME" = "$REPO_OWNER.github.io" ]; then
    SITE_URL="https://$REPO_OWNER.github.io"
  else
    SITE_URL="https://$REPO_OWNER.github.io/$REPO_NAME"
  fi
fi

SITE_URL="${SITE_URL%/}"
MEDIA_URL="${MEDIA_URL%/}"
export MEDIA_URL

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

cp -a "$ROOT_DIR/pages"/. "$DIST_DIR"/
cp -a "$ROOT_DIR/public"/. "$DIST_DIR"/

if [ -d "$ROOT_DIR/assets/wp-content" ]; then
  cp -a "$ROOT_DIR/assets/wp-content" "$DIST_DIR/wp-content"
fi

if [ -d "$ROOT_DIR/assets/wp-includes" ]; then
  cp -a "$ROOT_DIR/assets/wp-includes" "$DIST_DIR/wp-includes"
fi

python3 - "$DIST_DIR" <<'PY'
import csv
import os
import re
import sys
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote, unquote, urlparse

dist_dir = Path(sys.argv[1]).resolve()
html_files = list(dist_dir.rglob("*.html"))
id_to_dir = {}
media_url = os.environ.get("MEDIA_URL", "").rstrip("/")
video_urls_by_route = defaultdict(list)

maintenance_dir = dist_dir.parent / "maintenance"
inventory_csv = maintenance_dir / "original-video-sources.csv"

id_pattern = re.compile(r'<body[^>]*\b(?:postid|page-id|post)-(\d+)\b', re.I)
old_link_pattern = re.compile(r'((?:\.\./)*)index\.html%3Fp=(\d+)\.html(#[^"\'<\s]*)?')
old_video_pattern = re.compile(r'https?://dieukydieu\.tv/wp-content/uploads/[^"\'<>\s]+?\.mp4(?:\?[^"\'<>\s]*)?')
youtube_placeholder_pattern = re.compile(r'https?://(?:www\.)?youtube\.com/(?:embed|watch\?v=)dQw4w9WgXcQ')
youtube_iframe_pattern = re.compile(r'<iframe src="https://www\.youtube\.com/embed/dQw4w9WgXcQ"[^>]*></iframe>')
video_css_pattern = re.compile(r'\.dkd-youtube-demo iframe\{position:absolute;inset:0;width:100%;height:100%;border:0;\}')
meta_tag_pattern = re.compile(r'<meta\b[^>]*>', re.I)
meta_attr_pattern = re.compile(r'([a-zA-Z_:.-]+)=["\']([^"\']*)["\']')
background_image_pattern = re.compile(r'background-image:\s*url\(([^)]+)\)', re.I)

if inventory_csv.exists():
    with inventory_csv.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            page_path = row.get("page_path", "").strip()
            video_url = row.get("original_mp4_url", "").strip()
            if page_path and video_url:
                video_urls_by_route[page_path].append(video_url)

for html_file in html_files:
    text = html_file.read_text(encoding="utf-8", errors="ignore")
    match = id_pattern.search(text)
    if match:
        id_to_dir[match.group(1)] = html_file.parent

for html_file in html_files:
    text = html_file.read_text(encoding="utf-8", errors="ignore")
    current_dir = html_file.parent
    route = "/" if current_dir == dist_dir else f"/{current_dir.relative_to(dist_dir).as_posix()}/"
    video_urls = video_urls_by_route.get(route, [])

    def replace_old_link(match):
        target_dir = id_to_dir.get(match.group(2))
        if target_dir is None:
            return match.group(0)

        fragment = match.group(3) or ""
        if target_dir == current_dir:
            return fragment or "./"

        relative = os.path.relpath(target_dir, current_dir).replace(os.sep, "/")
        return f"{relative}/{fragment}"

    updated = old_link_pattern.sub(replace_old_link, text)
    if updated != text:
        html_file.write_text(updated, encoding="utf-8")
        text = updated

if media_url:
    for html_file in html_files:
        text = html_file.read_text(encoding="utf-8", errors="ignore")

        def replace_old_video(match):
            raw_url = match.group(0)
            parsed = urlparse(raw_url)
            filename = Path(parsed.path).name
            encoded_name = quote(unquote(filename))
            return f"{media_url}/videos/original/{encoded_name}"

        updated = old_video_pattern.sub(replace_old_video, text)
        if updated != text:
            html_file.write_text(updated, encoding="utf-8")
            text = updated

for html_file in html_files:
    text = html_file.read_text(encoding="utf-8", errors="ignore")
    current_dir = html_file.parent
    route = "/" if current_dir == dist_dir else f"/{current_dir.relative_to(dist_dir).as_posix()}/"
    video_urls = video_urls_by_route.get(route, [])
    if not video_urls:
        continue

    updated = text

    if 'contentUrl' in updated and 'dQw4w9WgXcQ' in updated:
        updated = re.sub(
            r'("contentUrl"\s*:\s*")https?://(?:www\.)?youtube\.com/watch\?v=dQw4w9WgXcQ(")',
            rf'\g<1>{video_urls[0]}\2',
            updated,
        )

    iframe_urls = iter(video_urls)
    poster = None
    poster_candidates = []
    for meta_match in meta_tag_pattern.finditer(updated):
        attrs = {
            name.lower(): value
            for name, value in meta_attr_pattern.findall(meta_match.group(0))
        }
        if attrs.get("property") == "og:image" or attrs.get("name") == "twitter:image":
            content = attrs.get("content")
            if content:
                poster_candidates.append(content)
    for bg_match in background_image_pattern.finditer(updated):
        poster_candidates.append(bg_match.group(1).strip().strip('"\''))

    for poster_url in poster_candidates:
        parsed_poster = urlparse(poster_url)
        if parsed_poster.path.startswith("/wp-content/"):
            poster_path = dist_dir / parsed_poster.path.lstrip("/")
            if poster_path.exists():
                poster = os.path.relpath(poster_path, current_dir).replace(os.sep, "/")
                break
        elif not parsed_poster.scheme:
            poster = poster_url
            break

    def replace_placeholder_iframe(match):
        try:
            url = next(iframe_urls)
        except StopIteration:
            url = video_urls[-1]
        poster_attr = f' poster="{poster}"' if poster else ""
        return (
            '<video controls preload="metadata" playsinline'
            f'{poster_attr} src="{url}"></video>'
        )

    updated = youtube_iframe_pattern.sub(replace_placeholder_iframe, updated)
    updated = youtube_placeholder_pattern.sub(
        lambda _: video_urls[0],
        updated,
    )
    if poster:
        updated = re.sub(
            r'(<div class="dkd-youtube-demo"><video\b(?![^>]*\bposter=)([^>]*))>',
            rf'\1 poster="{poster}">',
            updated,
        )
    updated = video_css_pattern.sub(
        '.dkd-youtube-demo iframe,.dkd-youtube-demo video{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:contain;background:#000;}',
        updated,
    )

    if updated != text:
        html_file.write_text(updated, encoding="utf-8")

redirect_template = """<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url={target}">
  <link rel="canonical" href="{target}">
  <script>location.replace({target_json});</script>
  <title>Redirecting...</title>
</head>
<body>
  <a href="{target}">Redirecting...</a>
</body>
</html>
"""

for post_id, target_dir in id_to_dir.items():
    target = os.path.relpath(target_dir, dist_dir).replace(os.sep, "/") + "/"
    target_json = repr(target)
    redirect_html = redirect_template.format(target=target, target_json=target_json)

    for legacy_name in (
        f"index.html?p={post_id}.html",
        f"index.html%3Fp={post_id}.html",
    ):
        (dist_dir / legacy_name).write_text(redirect_html, encoding="utf-8")

print(f"Rewrote legacy WordPress ID links and redirects for {len(id_to_dir)} pages")
PY

if [ -n "$SITE_URL" ]; then
  export SITE_URL
  find "$DIST_DIR" -type f \( -name "*.html" -o -name "*.txt" -o -name "*.xml" \) \
    -exec perl -0pi -e 's#https://dieukydieu\.tv#$ENV{SITE_URL}#g' {} +
  echo "Rewrote site URLs to $SITE_URL"
fi

echo "Built static site in $DIST_DIR"
