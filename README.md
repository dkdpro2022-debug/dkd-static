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
