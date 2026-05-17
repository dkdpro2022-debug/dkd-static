#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
SITE_URL="${SITE_URL:-}"

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

if [ -n "$SITE_URL" ]; then
  export SITE_URL
  find "$DIST_DIR" -type f \( -name "*.html" -o -name "*.txt" -o -name "*.xml" \) \
    -exec perl -0pi -e 's#https://dieukydieu\.tv#$ENV{SITE_URL}#g' {} +
  echo "Rewrote site URLs to $SITE_URL"
fi

echo "Built static site in $DIST_DIR"
