#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK_SOURCE="$ROOT_DIR/tools/hooks/pre-commit"
HOOK_TARGET="$ROOT_DIR/.git/hooks/pre-commit"

if [ ! -d "$ROOT_DIR/.git" ]; then
  echo "This script must run inside a Git working tree." >&2
  exit 1
fi

mkdir -p "$ROOT_DIR/.git/hooks"
cp "$HOOK_SOURCE" "$HOOK_TARGET"
chmod +x "$HOOK_TARGET"

echo "Installed Gitleaks pre-commit hook at $HOOK_TARGET"
