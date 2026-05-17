#!/usr/bin/env bash
set -euo pipefail

R2_PREFIX="${R2_PREFIX:-videos/original}"

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

ENDPOINT_URL="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"

aws s3 ls "s3://${R2_BUCKET}/${R2_PREFIX#/}/" \
  --endpoint-url "$ENDPOINT_URL" \
  --recursive \
  --human-readable \
  --summarize
