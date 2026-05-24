import sectionsMarkdown from "../dieukydieu_sections.md?raw";
import type { HomepageSection, HomepageSectionLayout } from "./types";

export const heroText =
  "Điều Kỳ Diệu lưu giữ các video, bài viết và góc nhìn chân thực theo đúng các chuyên mục nguồn: câu chuyện kỳ diệu, tiếng nói chuyên gia, hành trình hồng truyền và hướng dẫn cho người mới tìm hiểu.";

const layoutByIndex: Record<number, HomepageSectionLayout> = {
  1: "featured",
  2: "compact",
  3: "grid",
  4: "compact",
  5: "grid",
  6: "grid",
  7: "grid",
  8: "compact",
  9: "compact",
  10: "compact",
};

const priorityLabels: Record<string, string> = {
  "video-tieu-bieu": "Video",
  "nhung-cau-chuyen-than-ky": "Câu chuyện",
  "vung-dat-va-con-nguoi": "Vùng đất",
  "huong-dan-cho-nguoi-moi-hoc": "Hướng dẫn",
};

const knownImages: Record<string, string> = {
  "phap-luan-cong-tai-hue-net-dep-van-hoa-truyen-thong": "/wp-content/uploads/2024/05/vi-sao-có-nhân-loại-300x169.jpg",
  "phap-luan-cong-tai-quang-ngai-nhung-doa-sen-tren-dong-song-tra": "/wp-content/uploads/2023/07/quangngai-300x169.jpg",
  "phap-luan-cong-tai-da-nang-y-nghia-nhan-sinh-cua-doi-nguoi": "/wp-content/uploads/2023/05/maxresdefault-1-300x169.jpg",
  "hoc-vien-phap-luan-cong-tai-sai-gon": "/wp-content/uploads/2023/03/plcsg-300x155.jpg",
  "nguoi-phu-nu-can-ke-cai-chet-danh-bai-virus-viem-phoi-vu-han": "/wp-content/uploads/2021/05/danhbaivirus-300x169.jpg",
  "thay-thuoc-nhan-dan-tran-dinh-chien-ly-giai-nguyen-nhan-vi-sao-tap-khi-cong-co-the-chua-khoi-benh": "/wp-content/uploads/2020/06/tran-dinh-chien-300x169.jpg",
  "hanh-trinh-tim-kiem-thien-co-ky-thu": "/wp-content/uploads/2020/04/thien-co-ky-thu-300x169.jpg",
  "giao-su-tien-sy-y-hoc-chia-se-cach-bao-ve-suc-khoe-truoc-dich-benh": "/wp-content/uploads/2020/03/maxresdefault-5-300x169.jpg",
  "covid-19-chia-se-cua-bac-si-vien-phoi": "/wp-content/uploads/2020/03/maxresdefault-4-300x169.jpg",
  "dieu-gi-khien-mot-bac-si-tay-y-tin-vao-phap-luan-cong": "/wp-content/uploads/2020/02/bac-sy-tay-y-tin-vao-phap-luan-cong-300x169.jpg",
  "cam-dong-hanh-trinh-nguoi-cha-tim-cach-chua-benh-cho-con-gai": "/wp-content/uploads/2020/02/Cảm-động-hành-trình-người-cha-tìm-cách-chữa-bệnh-cho-con-gái--300x169.jpg",
  "cau-chuyen-cam-dong-bat-ngo-cua-mot-tre-tu-ky-hoa-nhap-voi-ban-be": "/wp-content/uploads/2020/02/Câu-chuyện-cảm-động-bất-ngờ-của-một-trẻ-tự-kỷ-hoà-nhập-với-bạn-bè-300x169.jpg",
  "cau-chuyen-9-doi-giay-cua-ong-vuong": "/wp-content/uploads/2020/02/Câu-chuyện-9-đôi-giày-của-ông-Vương-Pháp-Luân-Công-300x169.jpg",
  "su-hoi-sinh-ky-dieu-cua-nguoi-me-tre": "/wp-content/uploads/2020/02/Sự-Hồi-Sinh-Kỳ-Diệu-Của-Người-Mẹ-Trẻ-300x169.jpg",
  "me-toi-tap-phap-luan-cong-nhung-loi-ich-tuyet-voi": "/wp-content/uploads/2020/02/Mẹ-tôi-tập-Pháp-Luân-Công-Những-lợi-ích-tuyệt-vời-300x169.jpg",
  "phap-luan-cong-nhung-buc-anh-lich-su": "/wp-content/uploads/2021/01/vu-han-1996-300x197.jpg",
  "cac-thanh-pho-o-canada-cung-treo-co-mung-ngay-phap-luan-dai-phap-the-gioi": "/wp-content/uploads/2021/06/canada-300x169.jpg",
  "gioi-thieu-phap-luan-cong": "/wp-content/uploads/2020/04/gioi-thieu-phap-luan-cong-2-1-300x169.jpg",
  "5-bai-tap-phap-luan-cong": "/wp-content/uploads/2020/04/5-bai-tap-phap-luan-cong-7-300x151.jpg",
  "videos/phap-luan-cong": "/wp-content/uploads/2021/01/vu-han-1996-300x197.jpg",
  "tap-phap-luan-cong-co-hop-phap-tai-viet-nam-phan-ii": "/wp-content/uploads/2020/03/LsDr4bw4M60hd-300x169.jpg",
  "tap-phap-luan-cong-co-hop-phap-tai-viet-nam-phan-1": "/wp-content/uploads/2020/03/xNH973rEgf0hd-300x169.jpg",
  "phap-luan-dai-phap-loi-giai-cho-cuoc-song": "/wp-content/uploads/2020/03/T_biE4BBQaAhd-300x169.jpg",
  "dai-phap-hong-truyen-gioi-thieu-phap-luan-cong": "/wp-content/uploads/2020/03/kNtElryh0Ucsd-300x225.jpg",
  "phap-luan-cong-duoi-goc-nhin-cua-nhung-nguoi-lam-trong-nganh-an-ninh-va-quoc-phong": "/wp-content/uploads/2020/03/maxresdefault-3-300x169.jpg",
  "hich-troi-diet-trung-cong": "/wp-content/uploads/2020/06/maxresdefault-8-300x169.jpg",
  "cuoc-diet-chung-dam-mau": "/wp-content/uploads/2020/06/Diệt-chủng-đẫm-máu.00_03_50_11.Still001-1-300x169.jpg",
  "tong-thong-trump-noi-chuyen-voi-hoc-vien-phap-luan-cong-ve-cuoc-dan-ap-o-trung-quoc": "/wp-content/uploads/2021/07/7749-300x158.png",
  "de-tu-dai-phap-viet-nam-chuc-tet-su-phu": "/wp-content/uploads/2022/04/maxresdefault-300x169.jpg",
  "ta-on-su-phu": "/wp-content/uploads/2022/04/Tạ-ơn-Sư-Phụ-300x169.jpg",
  "ngao-tuyet-xuan-mai": "/wp-content/uploads/2020/05/thumbnail-ngao-tuyet-xuan-mai-300x169.jpg",
  "videos/ca-si-nsnd-trung-duc-trai-nghiem-ve-phap-luan-cong/index.html": "/wp-content/uploads/2020/02/nghe-si-trung-duc-150x150.jpg",
  "videos/nghe-si-mua-le-vi-toi-may-man-khi-tim-thay-anh-sang-chan-ly-cua-cuoc-doi/index.html": "/wp-content/uploads/2020/02/nghe-sy-mua-le-vy-150x150.jpg",
};

const stripEmojiNumber = (heading: string) => heading.replace(/^\d+\.\s+\S+\s+/, "").trim();

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getPathKey = (href: string) => {
  try {
    const url = new URL(href);
    return decodeURIComponent(url.pathname).replace(/^\/|\/$/g, "");
  } catch {
    return href;
  }
};

const toRelativeHref = (href: string) => {
  try {
    const url = new URL(href);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return href;
  }
};

const decodeEntities = (value: string) =>
  value
    .replace(/&#124;/g, "|")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

function parseSections(markdown: string): HomepageSection[] {
  const sectionBlocks = markdown.split(/\n(?=## \d+\.)/g).filter((block) => /^## \d+\./.test(block.trim()));

  return sectionBlocks.map((block) => {
    const heading = block.match(/^##\s+(.+)$/m)?.[1] ?? "";
    const index = Number(heading.match(/^(\d+)\./)?.[1] ?? "0");
    const title = stripEmojiNumber(heading);
    const rawSourceUrl = block.match(/\*.+?\[(https:\/\/dieukydieu\.tv\/[^\]]+)\]\(\1\)\*/)?.[1];
    const sourceUrl = rawSourceUrl ? toRelativeHref(rawSourceUrl) : undefined;

    const items = [...block.matchAll(/^\|\s+\d+\s+\|\s+(.+?)\s+\|\s+\[Xem chi tiết\]\((https:\/\/dieukydieu\.tv\/[^)]+)\)\s+\|$/gm)].map((match) => {
      const href = match[2];
      const key = getPathKey(href);
      return {
        title: decodeEntities(match[1].trim()),
        href: toRelativeHref(href),
        image: knownImages[key],
      };
    });

    return {
      id: slugify(title),
      title,
      sourceUrl,
      layout: layoutByIndex[index] ?? "grid",
      items,
    };
  });
}

export const homepageSections = parseSections(sectionsMarkdown);

export const sourceItemCount = homepageSections.reduce((total, section) => total + section.items.length, 0);

export const navItems = homepageSections
  .filter((section) => section.id in priorityLabels)
  .map((section) => ({ label: priorityLabels[section.id], id: section.id }));

export const allNavItems = homepageSections.map((section) => ({ label: section.title, id: section.id }));
