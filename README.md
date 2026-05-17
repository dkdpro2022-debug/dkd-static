# dkd.tv static site

## Build Locally

```bash
bash tools/build_static_site.sh
```

Preview the built site:

```bash
python3 -m http.server 8084 --directory dist
```

Open:

```text
http://SERVER_IP:8084/
```

## GitHub Pages

This repo deploys with GitHub Actions.

In GitHub, use:

```text
Settings -> Pages -> Source: GitHub Actions
```

After the workflow runs, visit:

```text
https://OWNER.github.io/REPO_NAME/
```

For this repo, that should be:

```text
https://dkdpro2022-debug.github.io/dkd-static/
```

For the final domain, set a repository variable named `SITE_URL`, for example:

```text
https://dkd.tv
```

## Upload Videos to Cloudflare R2

Set R2 credentials as environment variables:

```bash
export R2_ACCOUNT_ID="your_cloudflare_account_id"
export R2_BUCKET="your_bucket_name"
export AWS_ACCESS_KEY_ID="your_r2_access_key_id"
export AWS_SECRET_ACCESS_KEY="your_r2_secret_access_key"
export R2_PUBLIC_BASE_URL="https://media.example.com"
```

Preview the upload:

```bash
DRY_RUN=1 bash tools/upload_videos_to_r2.sh
```

Upload videos:

```bash
bash tools/upload_videos_to_r2.sh
```

The script skips files that already exist in the bucket and prints the public URLs when `R2_PUBLIC_BASE_URL` is set.

List uploaded videos:

```bash
bash tools/list_r2_videos.sh
```

By default, videos upload from:

```text
downloads/original-videos
```

to:

```text
s3://$R2_BUCKET/videos/original/
```
