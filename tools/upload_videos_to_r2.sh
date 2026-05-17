#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="${SOURCE_DIR:-$ROOT_DIR/downloads/original-videos}"
R2_PREFIX="${R2_PREFIX:-videos/original}"
R2_PUBLIC_BASE_URL="${R2_PUBLIC_BASE_URL:-}"
DRY_RUN="${DRY_RUN:-0}"

required_vars=(
  R2_ACCOUNT_ID
  R2_BUCKET
  AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCESS_KEY
)

for var_name in "${required_vars[@]}"; do
  if [ -z "${!var_name:-}" ]; then
    echo "Missing required environment variable: $var_name" >&2
    exit 1
  fi
done

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory does not exist: $SOURCE_DIR" >&2
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "aws CLI is required but was not found." >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required but was not found." >&2
  exit 1
fi

ENDPOINT_URL="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
DESTINATION="s3://${R2_BUCKET}/${R2_PREFIX#/}"
PUBLIC_PREFIX="${R2_PREFIX#/}"

echo "Source:      $SOURCE_DIR"
echo "Destination: $DESTINATION"
echo "Endpoint:    $ENDPOINT_URL"
if [ -n "$R2_PUBLIC_BASE_URL" ]; then
  echo "Public URL:  $R2_PUBLIC_BASE_URL/${PUBLIC_PREFIX}"
else
  echo "Public URL:  (set R2_PUBLIC_BASE_URL to print final public URLs)"
fi

args=(
  s3
  sync
  "$SOURCE_DIR"
  "$DESTINATION"
  --endpoint-url
  "$ENDPOINT_URL"
  --size-only
  --only-show-errors
  --content-type
  "video/mp4"
)

if [ "$DRY_RUN" = "1" ]; then
  args+=(--dryrun)
fi

aws "${args[@]}"

if [ -n "$R2_PUBLIC_BASE_URL" ]; then
  echo
  echo "Public URLs:"
  while IFS= read -r -d '' file_path; do
    relative_path="${file_path#$SOURCE_DIR/}"
    encoded_name="$(python3 - <<'PY' "$relative_path"
import sys
from pathlib import Path
from urllib.parse import quote

print(quote(Path(sys.argv[1]).as_posix(), safe="/"))
PY
)"
    echo "${R2_PUBLIC_BASE_URL%/}/${PUBLIC_PREFIX}/${encoded_name}"
  done < <(find "$SOURCE_DIR" -maxdepth 1 -type f -print0 | sort -z)
fi

echo "Upload complete."
