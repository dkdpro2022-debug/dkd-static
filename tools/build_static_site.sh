#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

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

echo "Built static site in $DIST_DIR"
