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
import os
import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote, urlparse

dist_dir = Path(sys.argv[1]).resolve()
html_files = list(dist_dir.rglob("*.html"))
id_to_dir = {}
media_url = os.environ.get("MEDIA_URL", "").rstrip("/")

id_pattern = re.compile(r'<body[^>]*\b(?:postid|page-id|post)-(\d+)\b', re.I)
old_link_pattern = re.compile(r'((?:\.\./)*)index\.html%3Fp=(\d+)\.html(#[^"\'<\s]*)?')
old_video_pattern = re.compile(r'https?://dieukydieu\.tv/wp-content/uploads/[^"\'<>\s]+?\.mp4(?:\?[^"\'<>\s]*)?')

for html_file in html_files:
    text = html_file.read_text(encoding="utf-8", errors="ignore")
    match = id_pattern.search(text)
    if match:
        id_to_dir[match.group(1)] = html_file.parent

for html_file in html_files:
    text = html_file.read_text(encoding="utf-8", errors="ignore")
    current_dir = html_file.parent

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
