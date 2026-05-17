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

## Cloudflare Pages

This repo deploys to Cloudflare Pages through GitHub Actions using Direct Upload.

Create a Cloudflare Pages project named:

```text
dkd-static
```

Use Direct Upload, not the Cloudflare Git integration.

Add these GitHub repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

Add this GitHub repository variable:

```text
SITE_URL=https://dieukydieu.tv
```

The deployment workflow is:

```text
.github/workflows/deploy-cloudflare-pages.yml
```

After the workflow runs, attach the custom domain in Cloudflare Pages:

```text
dieukydieu.tv
```

Then visit:

```text
https://dieukydieu.tv/
```

For video URLs, the build uses this media host by default:

```text
https://media.dieukydieu.tv
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
