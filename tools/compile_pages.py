#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path

def get_relative_path(depth):
    if depth == 0:
        return "./"
    return "../" * depth

def main():
    if len(sys.argv) < 2:
        print("Usage: compile_pages.py <dist_dir>")
        sys.exit(1)
        
    dist_dir = Path(sys.argv[1]).resolve()
    root_dir = dist_dir.parent
    src_dir = root_dir / "src"
    src_pages_dir = src_dir / "pages"
    layout_file = src_dir / "layouts" / "default.html"
    
    if not layout_file.exists():
        print(f"Error: Layout file not found at {layout_file}")
        sys.exit(1)
        
    layout_template = layout_file.read_text(encoding="utf-8")
    
    menu_mapping = {
        '2112': 'menu-item-3481', # Home
        '2049': 'menu-item-2052', # Hướng dẫn cho học viên mới
        '1280': 'menu-item-1302', # Những câu chuyện thần kỳ
        '1297': 'menu-item-1300', # Vùng đất và con người
        '1292': 'menu-item-1301', # Vẻ đẹp Chân Thiện Nhẫn
        '4025': 'menu-item-4030', # BLOG
    }
    
    count = 0
    for page_path in src_pages_dir.rglob("*.html"):
        rel_path = page_path.relative_to(src_pages_dir)
        dest_path = dist_dir / rel_path
        os.makedirs(dest_path.parent, exist_ok=True)
        
        # Determine depth relative to dist root
        # E.g., index.html -> parent is Path('.') -> depth 0
        # 5-bai-tap/index.html -> parent is Path('5-bai-tap') -> depth 1
        depth = len(rel_path.parent.parts) if rel_path.parent.parts and rel_path.parent.parts != ('.',) else 0
        relative_path = get_relative_path(depth)
        
        raw_content = page_path.read_text(encoding="utf-8", errors="ignore")
        
        parts = raw_content.split('---', 3)
        if len(parts) < 4:
            print(f"Warning: Page {rel_path} does not have standard frontmatter sections. Skipping compilation.")
            # If it's a raw html file, copy it directly
            dest_path.write_text(raw_content, encoding="utf-8")
            continue
            
        frontmatter = parts[1].strip()
        page_head = parts[2].strip()
        main_content = parts[3].strip()
        
        # Parse frontmatter variables
        meta = {}
        for line in frontmatter.splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip().strip('"').strip("'")
                
        title = meta.get("title", "Điều Kỳ Diệu")
        body_class = meta.get("body_class", "")
        header_class = meta.get("header_class", "header has-sticky sticky-shrink")
        
        # Build layout for this page
        page_html = layout_template
        
        # Highlight active mobile menu item
        post_id_match = re.search(r'\b(?:postid|page-id|post)-(\d+)\b', body_class)
        if post_id_match:
            post_id = post_id_match.group(1)
            active_menu_id = menu_mapping.get(post_id)
            if active_menu_id:
                target_str = f'id="{active_menu_id}" class="menu-item'
                page_html = page_html.replace(target_str, f'{target_str} current-menu-item current_page_item')
                
        # If homepage, add aria-current="page" to home menu item
        if post_id_match and post_id_match.group(1) == '2112':
            page_html = page_html.replace('href="{{relative_path}}index.html"', 'href="{{relative_path}}index.html" aria-current="page"')
            
        # Replace template placeholders
        page_html = page_html.replace("{{title}}", title)
        page_html = page_html.replace("{{body_class}}", body_class)
        page_html = page_html.replace("{{header_class}}", header_class)
        page_html = page_html.replace("{{page_head}}", page_head)
        page_html = page_html.replace("{{content}}", main_content)
        page_html = page_html.replace("{{relative_path}}", relative_path)
        
        dest_path.write_text(page_html, encoding="utf-8")
        count += 1
        
    print(f"Compiled {count} pages successfully to {dist_dir}")

if __name__ == "__main__":
    main()
