#!/usr/bin/env python3
import csv
import os
import subprocess
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse


ROOT_DIR = Path(__file__).resolve().parents[1]
SOURCE_CSV = ROOT_DIR / "maintenance" / "video-youtube-search-list.csv"
DOWNLOAD_DIR = ROOT_DIR / "downloads" / "original-videos"


def safe_filename(url: str) -> str:
    parsed = urlparse(url)
    filename = unquote(Path(parsed.path).name)
    return filename.replace("/", "-").replace("\x00", "")


def main() -> int:
    DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)

    with SOURCE_CSV.open(newline="", encoding="utf-8") as source:
        rows = list(csv.DictReader(source))

    urls = []
    seen = set()
    for row in rows:
        url = (row.get("original_mp4_url") or "").strip()
        if url and url not in seen:
            seen.add(url)
            urls.append(url)

    print(f"Downloading {len(urls)} unique videos into {DOWNLOAD_DIR}")

    for index, url in enumerate(urls, start=1):
        output_path = DOWNLOAD_DIR / safe_filename(url)
        if output_path.exists() and output_path.stat().st_size > 0:
            print(f"[{index}/{len(urls)}] exists: {output_path.name}")
            continue

        print(f"[{index}/{len(urls)}] download: {output_path.name}")
        tmp_path = output_path.with_suffix(output_path.suffix + ".part")
        command = [
            "curl",
            "--fail",
            "--location",
            "--retry",
            "3",
            "--retry-delay",
            "2",
            "--connect-timeout",
            "20",
            "--output",
            str(tmp_path),
            url,
        ]
        result = subprocess.run(command, cwd=ROOT_DIR)
        if result.returncode != 0:
            print(f"Failed: {url}", file=sys.stderr)
            return result.returncode

        os.replace(tmp_path, output_path)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
