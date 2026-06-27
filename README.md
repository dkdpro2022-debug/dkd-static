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

## Structure & Layout Compilation

The site uses a lightweight template compiler (`tools/compile_pages.py`) to build dynamic/deduplicated layout pages into static assets for GitHub Pages. 

### Directory Layout

```text
├── assets/                  # WordPress static assets (themes, plugins, uploads)
├── public/                  # Public metadata (robots.txt, .nojekyll)
├── src/
│   ├── layouts/
│   │   └── default.html     # Master site layout wrapper (headers, footers, menus)
│   └── pages/               # Page source files (frontmatter + unique content)
├── tools/
│   ├── compile_pages.py     # Compiles src/pages/ -> dist/ using default.html layout
│   └── build_static_site.sh # Main build pipeline (compiles pages, post-processes videos/redirects)
└── dist/                    # Compiled and post-processed site (gitignored)
```

### Adding a New Page

Adding a new page is a simple and repeatable process:

1. Create a folder in `src/pages/` corresponding to your route path. E.g., `src/pages/my-new-page/`.
2. Add an `index.html` file inside this folder.
3. At the very top of `index.html`, add the frontmatter metadata header enclosed by `---`:
   ```html
   ---
   title: "My New Page Title - Điều Kỳ Diệu"
   body_class: "page-template-default page page-id-XXXX full-width bg-fill lightbox nav-dropdown-has-arrow"
   ---
   <!-- Page-specific head tags (Yoast SEO tags, meta description, schema JSON-LD, etc.) -->
   <meta name="description" content="A description of my new page" />
   ---
   <!-- Page-specific content (everything inside <main id="main">) -->
   <div id="content" class="page-wrapper">
     <div class="row">
       <div class="col large-12">
         <h1>Welcome to my new page</h1>
         <p>Page content goes here...</p>
       </div>
     </div>
   </div>
   ```
4. Run the build script locally:
   ```bash
   bash tools/build_static_site.sh
   ```
5. Preview your page locally by starting a local server:
   ```bash
   python3 -m http.server 8084 --directory dist
   ```
   Open `http://localhost:8084/my-new-page/` in your browser.

