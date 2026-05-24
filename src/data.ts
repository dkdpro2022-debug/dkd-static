import type { ContentDetail, HomepageSection, HomepageSectionLayout } from "./types";
import { sourceSections } from "./sectionsData";

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
  "tu-luyen-phap-luan-cong": "/wp-content/uploads/2022/10/1-300x133.jpg",
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
  "cac-hoc-vien-o-phan-lan-phoi-bay-cuoc-buc-hai-cua-dang-cong-san-trung-quoc-trong-ngay-nhan-quyen": "/wp-content/uploads/2020/12/c93406393f988b4cb489b6e549fded5d-300x225.jpg",
  "nhat-ban-cac-hoc-vien-khang-nghi-on-hoa-phan-doi-cuoc-buc-hai-cua-chinh-quyen-cong-san-trung-quoc-nhan-ngay-nhan-quyen-the-gioi": "/wp-content/uploads/2020/12/ca46a2ab732330597f5e53adf2dcb43d-300x212.jpg",
  "cac-hoc-vien-o-berlin-phoi-bay-cuoc-buc-hai-cua-dcstq": "/wp-content/uploads/2020/12/103821bd9244a0131a7939d8a9f83cda-300x225.jpg",
  "de-tu-dai-phap-viet-nam-chuc-tet-su-phu": "/wp-content/uploads/2022/04/maxresdefault-300x169.jpg",
  "ta-on-su-phu": "/wp-content/uploads/2022/04/Tạ-ơn-Sư-Phụ-300x169.jpg",
  "ngao-tuyet-xuan-mai": "/wp-content/uploads/2020/05/thumbnail-ngao-tuyet-xuan-mai-300x169.jpg",
  "hien-tuong-moi-trong-dai-dich-gan-2-000-nguoi-hoc-phap-luan-cong-qua-internet": "/wp-content/uploads/2021/06/maxresdefault.jpg",
  "phap-luan-cong-va-nhung-dieu-it-biet-ve-ngay-phap-luan-dai-phap-the-gioi": "/wp-content/uploads/2021/05/0-02-06-2866dd5c0f37bb3f4b2b1c220f504dd18716d10e22481029be67ac185031166c_7ccc588c6a4ecb29.jpg",
  "cac-nghi-sy-hoa-ky-ton-vinh-ngay-phap-luan-dai-phap-the-gioi-13-5-2020": "/wp-content/uploads/2020/06/Sequence-03.00_00_33_16.Still001-1.jpg",
  "doan-dieu-hanh-gan-10-000-hoc-vien-phap-luan-cong-lam-xuc-dong-nguoi-dan-new-york-vao-ngay-16-5-2019": "/wp-content/uploads/2020/03/maxresdefault-1.jpg",
  "the-gioi-noi-gi-ve-phap-luan-cong": "/wp-content/uploads/2020/02/0.jpg",
  "phap-luan-cong-tren-the-gioi-falun-dafa-in-the-world": "/wp-content/uploads/2020/02/BkqUCuaGBpMhq.jpg",
  "sydney-uc-chao-mung-ngay-phap-luan-dai-phap-the-gioi-13-05-2018": "/wp-content/uploads/2020/02/2U0lNBZYoHUhd.jpg",
  "phap-luan-cong-tai-ben-tre-ki-niem-30-nam-dai-phap-hong-truyen": "/wp-content/uploads/2022/05/THUMB-GOC.jpg",
  "phap-luan-cong-tai-da-lat": "/wp-content/uploads/2022/02/vlcsnap-2022-02-18-17h01m15s662.png",
  "phap-luan-cong-tai-kien-giang": "/wp-content/uploads/2020/04/kiên-giang-thumbnail.jpg",
  "phong-su-phap-luan-cong-tai-can-tho": "/wp-content/uploads/2020/03/maxresdefault-6.jpg",
  "chuong-trinh-ky-niem-ngay-phap-luan-dai-phap-tai-ha-noi-13-5-2018": "/wp-content/uploads/2020/02/QbZ74Mjhy9ghd.jpg",
  "hoc-vien-hai-phong-ky-niem-ngay-phap-luan-dai-phap-the-gioi-13-05-2018": "/wp-content/uploads/2020/02/suZwBtYYuYQsd.jpg",
  "luyen-cong-tap-the-tai-thanh-pho-vinh-nghe-an": "/wp-content/uploads/2020/02/T2Mvalq6csQhd.jpg",
  "da-nang-phap-luan-dai-phap-hong-truyen": "/wp-content/uploads/2020/02/sXedtIj9Kqshd.jpg",
  "phap-luan-cong-tai-dong-xoai-binh-phuoc": "/wp-content/uploads/2020/02/MZWUHHZeBdohd.jpg",
  "an-giang-mien-tay-que-toi": "/wp-content/uploads/2020/02/Bb97RWNhsvUhd.jpg",
  "dieu-ky-dieu-tai-thanh-pho-bien-vung-tau": "/wp-content/uploads/2020/02/4IgzR-tJ6Vghq.jpg",
  "贝贝之愿": "/wp-content/uploads/2022/07/Thumbnail-1_1920x1080.jpg",
  "dieu-uoc-cua-boi-boi": "/wp-content/uploads/2022/07/Thumbnail-1_1920x1080.jpg",
  "mv-tro-ve-co-huong": "/wp-content/uploads/2022/04/maxresdefault-1.jpg",
  "mv-tan-nien-nho-su-ton": "/wp-content/uploads/2022/04/maxresdefault.jpg",
  "chao-mung-ngay-phap-luan-dai-phap-the-gioi-13-5-2021": "/wp-content/uploads/2021/05/Làm-việc.00_10_18_05.Still002.jpg",
  "mau-tinh-lai": "/wp-content/uploads/2020/06/maxresdefault-7.jpg",
  "ve-kinh-than": "/wp-content/uploads/2020/05/lời-sấm.00_09_50_22.Still002.jpg",
  "ve-loi-sam": "/wp-content/uploads/2020/05/lời-sấm.00_09_45_22.Still003.jpg",
  "de-tu-viet-nam-mung-ngay-phap-luan-dai-phap-the-gioi-13-5-2020": "/wp-content/uploads/2020/05/THUMB.jpg",
  "de-sinh-menh-duoc-cam-thu": "/wp-content/uploads/2020/05/2.jpg",
  "khuc-hat-nho-con": "/wp-content/uploads/2020/04/maxresdefault-2.jpg",
  "bai-hat-tro-ve-co-huong-mien-dat-tinh-tho": "/wp-content/uploads/2020/02/VBuOMc8Z7B8hd.jpg",
  "ca-khuc-mong-tinh-loi-viet": "/wp-content/uploads/2020/02/n20kwiVeZUYhd-1.jpg",
  "ca-khuc-thien-su-huy-hoang": "/wp-content/uploads/2020/02/UQNovEXFt6chd.jpg",
  "su-that-bi-dcstq-che-day-va-loi-giai-dap-sang-to-khap-the-gioi": "/wp-content/uploads/2020/02/kozy9snoNlQhd.jpg",
  "vo-kich-lon-cua-trung-quoc-khien-bao-nguoi-chiu-hoa": "/wp-content/uploads/2020/02/0-CiDM330SIhd.jpg",
  "bay-nua-vong-trai-dat-chi-de-gap-su-phu": "/wp-content/uploads/2020/03/hqdefault-e1586352280810.jpg",
  "cau-chuyen-than-thoai-cho-con-nguoi-tuong-lai-phan-1-thuyet-minh": "/wp-content/uploads/2021/06/maxresdefault-2.jpg",
  "cau-chuyen-than-thoai-cho-con-nguoi-tuong-lai-phan-2-thuyet-minh": "/wp-content/uploads/2021/06/maxresdefault-1.jpg",
  "videos/ca-si-nsnd-trung-duc-trai-nghiem-ve-phap-luan-cong/index.html": "/wp-content/uploads/2020/02/nghe-si-trung-duc-150x150.jpg",
  "videos/nghe-si-mua-le-vi-toi-may-man-khi-tim-thay-anh-sang-chan-ly-cua-cuoc-doi/index.html": "/wp-content/uploads/2020/02/nghe-sy-mua-le-vy-150x150.jpg",
};

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
    const url = new URL(href, "https://dieukydieu.tv");
    return decodeURIComponent(url.pathname).replace(/^\/|\/$/g, "");
  } catch {
    return href.replace(/^\/|\/$/g, "");
  }
};

export const homepageSections: HomepageSection[] = sourceSections.map((section) => ({
  id: slugify(section.title),
  title: section.title,
  sourceUrl: section.sourceUrl,
  layout: layoutByIndex[section.index] ?? "grid",
  items: section.items.map((item) => ({
    ...item,
    image: knownImages[getPathKey(item.href)],
  })),
}));

export const sourceItemCount = homepageSections.reduce((total, section) => total + section.items.length, 0);

export const navItems = homepageSections
  .filter((section) => section.id in priorityLabels)
  .map((section) => ({ label: priorityLabels[section.id], id: section.id }));

export const allNavItems = homepageSections.map((section) => ({ label: section.title, id: section.id }));

export const contentDetails: Record<string, ContentDetail> = {
  "/tu-luyen-phap-luan-cong/": {
    description:
      "Bài viết giới thiệu Pháp Luân Công như một môn tu luyện phổ biến, nhìn từ các câu chuyện sức khỏe, quá trình truyền rộng trên thế giới, cuộc bức hại tại Trung Quốc và cách người mới có thể tìm hiểu.",
    body: [
      "Nội dung mở đầu bằng các trường hợp được nêu như lý do khiến nhiều nhà khoa học và chuyên gia quan tâm đến Pháp Luân Công, đặc biệt là các trải nghiệm cải thiện sức khỏe sau khi tu luyện.",
      "Bài viết trình bày Pháp Luân Công dựa trên nguyên lý Chân - Thiện - Nhẫn, kết hợp việc rèn luyện tâm tính với năm bài công pháp nhẹ nhàng, đồng thời nhắc đến quá trình phổ truyền tại nhiều quốc gia.",
      "Phần sau đặt bối cảnh cuộc đàn áp tại Trung Quốc từ năm 1999, giải thích vì sao các học viên ở nhiều nơi tiếp tục lên tiếng về tự do tín ngưỡng và nhân quyền.",
      "Bài cũng trả lời câu hỏi về việc tập Pháp Luân Công tại Việt Nam và gợi ý người mới có thể tự đọc sách, học bài công pháp qua các nguồn chính thức, miễn phí.",
    ],
  },
  "/phap-luan-cong-tai-hue-net-dep-van-hoa-truyen-thong/": {
    description:
      "Một video ghi lại nét đẹp văn hóa truyền thống tại Huế qua hình ảnh học viên Pháp Luân Công, nhịp sinh hoạt ôn hòa và tinh thần Chân - Thiện - Nhẫn trong đời sống thường ngày.",
    videoUrl:
      "https://media.dieukydieu.tv/videos/original/Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-t%E1%BA%A1i-Hu%E1%BA%BF-N%C3%A9t-%C4%91%E1%BA%B9p-v%C4%83n-h%C3%B3a-truy%E1%BB%81n-th%E1%BB%91ng.mp4",
    body: [
      "Video đặt người xem vào một không gian chậm rãi, nơi hình ảnh vùng đất cố đô và hoạt động tu luyện được trình bày như một lát cắt văn hóa.",
      "Nội dung phù hợp với người muốn tìm hiểu Pháp Luân Công qua câu chuyện thực tế tại Việt Nam, thay vì chỉ đọc khái niệm hoặc thông tin giới thiệu.",
      "Sau khi xem video, bạn có thể tiếp tục đọc các bài viết liên quan ở cuối trang để có thêm bối cảnh về các địa phương khác và các trải nghiệm cá nhân.",
    ],
  },
  "/phap-luan-cong-tai-quang-ngai-nhung-doa-sen-tren-dong-song-tra/": {
    description:
      "Một video ghi lại hình ảnh học viên Pháp Luân Công tại Quảng Ngãi, với nhịp kể nhẹ nhàng về đời sống tu luyện, cảnh sắc địa phương và những giá trị thiện lành trong cộng đồng.",
    videoUrl:
      "https://media.dieukydieu.tv/videos/original/Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-t%E1%BA%A1i-Qu%E1%BA%A3ng-Ng%C3%A3i-Nh%E1%BB%AFng-%C4%91%C3%B3a-sen-tr%C3%AAn-d%C3%B2ng-s%C3%B4ng-Tr%C3%A0..mp4",
    body: [
      "Video đưa người xem đến Quảng Ngãi qua hình ảnh sinh hoạt của các học viên Pháp Luân Công bên dòng sông Trà.",
      "Nội dung phù hợp với người muốn tìm hiểu cách Pháp Luân Công được thực hành trong đời sống địa phương, qua hình ảnh chân thực và dễ tiếp cận.",
      "Bạn có thể xem thêm các video cùng chuyên mục để đối chiếu trải nghiệm tại nhiều vùng đất khác nhau, hoặc đọc thêm blog để có thêm bối cảnh nền.",
    ],
  },
  "/videos/ca-si-nsnd-trung-duc-trai-nghiem-ve-phap-luan-cong/index.html": {
    description:
      "NSND Trung Đức chia sẻ trải nghiệm cá nhân sau khi thực hành Pháp Luân Công, nhấn mạnh những thay đổi tích cực mà ông cảm nhận được trong sức khỏe và đời sống tinh thần.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/NSND-trung-duc.mp4",
    body: [
      "Video tập trung vào lời kể trực tiếp của NSND Trung Đức, giúp người xem tiếp cận câu chuyện theo góc nhìn trải nghiệm cá nhân.",
      "Nội dung phù hợp với người muốn nghe chia sẻ từ một nghệ sĩ từng thực hành Pháp Luân Công và tự đánh giá tác động của môn tu luyện trong đời sống.",
      "Sau khi xem, bạn có thể tiếp tục khám phá các video cùng chuyên mục hoặc đọc thêm các bài viết liên quan để có thêm bối cảnh.",
    ],
  },
  "/videos/nghe-si-mua-le-vi-toi-may-man-khi-tim-thay-anh-sang-chan-ly-cua-cuoc-doi/index.html": {
    description:
      "Nghệ sĩ múa Lê Vi kể về hành trình rời ánh đèn sân khấu, sống tại Pháp và tìm thấy điều cô gọi là ánh sáng chân lý của cuộc đời.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/le-vy.mp4",
    body: [
      "Video ghi lại chia sẻ của nghệ sĩ múa Lê Vi về những thay đổi trong cuộc sống và nội tâm sau khi biết đến Pháp Luân Công.",
      "Câu chuyện được kể từ trải nghiệm cá nhân, phù hợp với người muốn tìm hiểu vì sao một nghệ sĩ lại chọn một hướng đi mới trong đời sống tinh thần.",
      "Bạn có thể xem thêm các video cùng chuyên mục để so sánh nhiều góc nhìn khác nhau, hoặc đọc thêm blog để có thêm bối cảnh về Pháp Luân Công.",
    ],
  },
  "/tong-thong-trump-noi-chuyen-voi-hoc-vien-phap-luan-cong-ve-cuoc-dan-ap-o-trung-quoc/": {
    description:
      "Bài viết thuật lại cuộc gặp tại Nhà Trắng giữa Tổng thống Donald Trump và các nạn nhân bị đàn áp tín ngưỡng, trong đó có học viên Pháp Luân Công Trương Ngọc Hoa.",
    body: [
      "Theo bài nguồn, cuộc gặp diễn ra ngày 17/7/2019 tại Phòng Bầu dục, với 27 người sống sót sau các cuộc đàn áp tín ngưỡng đến từ nhiều quốc gia.",
      "Trương Ngọc Hoa, một học viên Pháp Luân Công từng bị giam giữ và tra tấn ở Trung Quốc, đã nêu tình trạng bức hại và vấn đề cưỡng bức thu hoạch nội tạng.",
      "Bài viết nhắc lại hoàn cảnh của chồng bà, ông Mã Chấn Vũ, người cũng bị bắt giữ nhiều lần vì đức tin, đồng thời ghi nhận sự quan tâm của các quan chức Hoa Kỳ về tự do tín ngưỡng.",
      "Phần cuối đề cập khả năng áp dụng các biện pháp trừng phạt nhân quyền như Đạo luật Magnitsky với những quan chức liên quan đến cuộc bức hại Pháp Luân Công.",
    ],
  },
  "/videos/phap-luan-cong/": {
    description:
      "Bài viết đặt vấn đề phân biệt tin thật và tin giả về Pháp Luân Công, khuyến khích người đọc đối chiếu thông tin từ truyền thông, lịch sử, khoa học và các trường hợp thực tế.",
    body: [
      "Nội dung cho rằng Pháp Luân Công thường bị đặt trong một vùng thông tin thiếu rõ ràng, vì vậy người đọc cần kiểm chứng nguồn tin và tự so sánh thay vì chỉ tiếp nhận một chiều.",
      "Bài viết nhắc đến bối cảnh Pháp Luân Công được truyền ra tại Trung Quốc năm 1992, sự phổ biến trước năm 1999 và cuộc đàn áp sau đó của chính quyền Trung Quốc.",
      "Một phần bài bàn về các câu hỏi thường gặp như việc tập luyện có cải thiện sức khỏe không, có liên quan đến các vụ án hình sự bị truyền thông gán ghép không, và có phải mê tín hay không.",
      "Kết luận chính của bài là nên đánh giá Pháp Luân Công qua nguyên lý Chân - Thiện - Nhẫn, trải nghiệm thực tế và nguồn thông tin có thể đối chiếu.",
    ],
  },
  "/cac-hoc-vien-o-phan-lan-phoi-bay-cuoc-buc-hai-cua-dang-cong-san-trung-quoc-trong-ngay-nhan-quyen/": {
    description:
      "Bài viết ghi lại hoạt động của các học viên Pháp Luân Công tại Phần Lan trong Ngày Nhân quyền, gồm kháng nghị trước Đại sứ quán Trung Quốc và thắp nến tưởng niệm tại Helsinki.",
    body: [
      "Ngày 10/12/2020, các học viên tại Phần Lan tổ chức hoạt động trước Đại sứ quán Trung Quốc, sử dụng biểu ngữ để kêu gọi chấm dứt cuộc bức hại và nạn thu hoạch nội tạng.",
      "Buổi chiều, họ thắp nến tưởng niệm bên ngoài Trung tâm mua sắm Kampi để tưởng nhớ những học viên Pháp Luân Công thiệt mạng trong cuộc bức hại.",
      "Một đại diện phát biểu về các cáo buộc liên quan đến cưỡng bức thu hoạch nội tạng và nhắc đến cơ chế trừng phạt nhân quyền Magnitsky toàn cầu của Liên minh châu Âu.",
      "Bất chấp thời tiết lạnh, người qua đường dừng lại tìm hiểu thông tin và ký kiến nghị; bài viết ghi lại một số phản hồi ủng hộ việc chấm dứt cuộc bức hại.",
    ],
  },
  "/nhat-ban-cac-hoc-vien-khang-nghi-on-hoa-phan-doi-cuoc-buc-hai-cua-chinh-quyen-cong-san-trung-quoc-nhan-ngay-nhan-quyen-the-gioi/": {
    description:
      "Bài viết thuật lại hoạt động kháng nghị ôn hòa của các học viên Pháp Luân Đại Pháp tại Nagoya, Nhật Bản, nhân Ngày Nhân quyền Thế giới năm 2020.",
    body: [
      "Sáng 10/12/2020, các học viên Pháp Luân Đại Pháp ở Nhật Bản tập trung trước Tổng Lãnh sự quán Trung Quốc tại Nagoya để kêu gọi chấm dứt cuộc bức hại.",
      "Họ trưng biểu ngữ bằng tiếng Nhật với thông điệp về Pháp Luân Đại Pháp và phản đối bức hại Pháp Luân Công.",
      "Bài viết ghi lại việc các học viên nói chuyện với một nhân viên lãnh sự quán và giải thích rằng Pháp Luân Đại Pháp dạy con người sống theo Chân - Thiện - Nhẫn.",
      "Các học viên cũng trao đổi với cảnh sát gần đó về cuộc bức hại và nạn cưỡng bức thu hoạch nội tạng, đồng thời tặng tài liệu thông tin về môn tu luyện.",
    ],
  },
  "/cac-hoc-vien-o-berlin-phoi-bay-cuoc-buc-hai-cua-dcstq/": {
    description:
      "Bài viết ghi lại chuỗi hoạt động tại Berlin, nơi các học viên Pháp Luân Công giới thiệu môn tu luyện và kêu gọi người dân ký kiến nghị phản đối cuộc bức hại.",
    body: [
      "Trong hai ngày 5 và 6/12/2020, các học viên ở Đức tổ chức hoạt động tại khu chợ Giáng sinh ở Steglitz và quảng trường Alexanderplatz.",
      "Hoạt động gồm trình diễn bài công pháp, biểu diễn trống lưng, phát tài liệu và thu thập chữ ký lên án cuộc bức hại của Đảng Cộng sản Trung Quốc.",
      "Bài viết ghi lại phản hồi của nhiều người qua đường, trong đó có người nhập cư từ Hồng Kông, cư dân địa phương, một nhà khoa học chính trị và khách từ các nước châu Âu.",
      "Điểm chung trong các phản hồi được trích dẫn là sự quan tâm đến nhân quyền, tự do tín ngưỡng và lời kêu gọi các nước phương Tây có lập trường rõ ràng hơn trước tội ác bức hại.",
    ],
  },
  "/5-bai-tap-phap-luan-cong/": {
    description:
      "Bài hướng dẫn dành cho người mới muốn học năm bài công pháp Pháp Luân Công, tập trung vào nguồn học chính thức, cách luyện tập và những lỗi thường gặp.",
    body: [
      "Bài viết nhấn mạnh người mới nên học từ nguồn chính thức như trang Pháp Luân Đại Pháp, thay vì tập theo các video không rõ nguồn hoặc bị cắt ghép.",
      "Tác giả khuyến nghị nếu có thể, người mới nên ra công viên hoặc điểm luyện công để được học viên cũ hướng dẫn và chỉnh động tác miễn phí.",
      "Với người tự học ở nhà, bài viết nhắc cần xem kỹ video hướng dẫn, nghe nhạc tập chính thức, học khẩu quyết và luyện từng bài theo đúng thứ tự.",
      "Phần cuối đi qua các lưu ý riêng cho từng bài công pháp, từ yêu cầu căng - trùng ở bài một đến cách ngồi tĩnh công và giữ tỉnh táo ở bài năm.",
    ],
  },
  "/phap-luan-cong-tai-da-nang-y-nghia-nhan-sinh-cua-doi-nguoi/": {
    description: "Pháp Luân Công tại Đà Nẵng – Ý Nghĩa nhân sinh của đời người là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-t%E1%BA%A1i-%C4%90%C3%A0-N%E1%BA%B5ng-%C3%9D-Ngh%C4%A9a-nh%C3%A2n-sinh-c%E1%BB%A7a-%C4%91%E1%BB%9Di-ng%C6%B0%E1%BB%9Di..mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/hoc-vien-phap-luan-cong-tai-sai-gon/": {
    description: "Học viên Pháp Luân Công tại Sài Gòn là nội dung được lấy từ nguồn dieukydieu.tv và trình bày lại trong giao diện đọc rõ ràng hơn.",
    body: [
      "Nội dung nguồn không có tệp video trực tiếp để nhúng, nên trang này hiển thị dạng bài đọc với phần tóm lược chính.",
      "Người xem vẫn có thể mở bài gốc từ liên kết trong trang để đối chiếu toàn bộ nội dung nguồn.",
    ],
  },
  "/hich-troi-diet-trung-cong/": {
    description: "10 Tội ác của ĐCS Trung Quốc là nội dung được lấy từ nguồn dieukydieu.tv và trình bày lại trong giao diện đọc rõ ràng hơn.",
    body: [
      "Nội dung nguồn không có tệp video trực tiếp để nhúng, nên trang này hiển thị dạng bài đọc với phần tóm lược chính.",
      "Người xem vẫn có thể mở bài gốc từ liên kết trong trang để đối chiếu toàn bộ nội dung nguồn.",
    ],
  },
  "/phap-luan-cong-nhung-buc-anh-lich-su/": {
    description: "Pháp Luân Công- Những bức ảnh lịch sử là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Nhung-hinh-anh-lich-su.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/thay-thuoc-nhan-dan-tran-dinh-chien-ly-giai-nguyen-nhan-vi-sao-tap-khi-cong-co-the-chua-khoi-benh/": {
    description: "Thầy thuốc nhân dân Trần Đình Chiến lý giải nguyên nhân vì sao tập khí công có thể chữa khỏi bệnh là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/thay-thuoc-tran-dinh-chien.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/hanh-trinh-tim-kiem-thien-co-ky-thu/": {
    description: "Hé mở cho người đọc các bí ẩn thiên cổ từ xưa tới nay, các tự vấn \"vì sao con người sinh ra?\", \"còn người từ đâu đến?\", “nguồn gốc của bệnh tật, khổ đau?”, \"ý nghĩa thực sự của sinh mệnh là gì?\" ... Nhân thể, Khoa học và Vũ trụ, đều được giải thích một cách thấu đáo, dễ hiểu trong cuốn sách “Chuyển Pháp Luân” - một cuốn “Thiên cổ kỳ thư”.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/thien-co-ky-thu.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/giao-su-tien-sy-y-hoc-chia-se-cach-bao-ve-suc-khoe-truoc-dich-benh/": {
    description: "Giáo sư Tiến sỹ Dịch tễ học, Nguyên Giám đốc Công ty vaccine và Sinh phẩm số 1, Bộ Y tế, chia sẻ về sản xuất vaccine và bí quyết nâng cao sức khoẻ trước dịch bệnh.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/vacsin.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/covid-19-chia-se-cua-bac-si-vien-phoi/": {
    description: "Tình hình Coronavirus thể mới Covid-19 diễn biến phức tạp và nguy cơ phát tán, lây nhiễm rất cao, chúng ta nên chủ động phòng bệnh hơn chữa bệnh. Chia sẻ của bác sĩ Nguyễn Xuân Lợi - phó trưởng khoa hồi sức tích cực bệnh viện phổi trung ương.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/covid.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/gioi-thieu-phap-luan-cong/": {
    description: "Pháp Luân Đại Pháp, hay còn gọi là Pháp Luân Công, là một pháp môn tu luyện thượng thừa giúp nâng cao tâm tính và thể chất thông qua luyện tập các bài công pháp và tu dưỡng đạo đức con người. Vào năm 1992, Pháp Luân Đại Pháp đã được ông Lý Hồng Chí giới thiệu ra công chúng. Môn tập luyện này đã được truyền bá nhanh chóng nhờ những nguyên lý uyên thâm và lợi ích sức khỏe mà nó mang lại.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/gioi-thieu-phap-luan-cong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/tap-phap-luan-cong-co-hop-phap-tai-viet-nam-phan-ii/": {
    description: "Việc tập luyện Pháp Luân Đại Pháp không những giúp không ít người có được những cải thiện đáng kể về sức khỏe mà còn mang lại một nội tâm an hòa và tĩnh tại. Vậy nếu tôi muốn chia sẻ, giới thiệu môn tu luyện này đến tất cả mọi người thì có được phép không? Pháp Luật nhà nước Việt Nam có những quy định cụ thể nào về vấn đề này? Mời các bạn xem clip để nắm vững một số quy định và Luật pháp của Nhà nước Việt Nam.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/tap-phap-luan-cong-co-hop-phap-2.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/tap-phap-luan-cong-co-hop-phap-tai-viet-nam-phan-1/": {
    description: "Pháp Luân Công được phổ truyền trên hơn 114 quốc gia trên thế giới. Nhưng tại Trung Quốc thì môn tu luyện này bị nhà nước cấm người dân tập luyện. Vậy tại Việt Nam, tập Pháp Luân Công có vi phạm Luật Pháp hay Hiến Pháp nào không? Chúng ta cùng lắng nghe các Luật Sư và chuyên gia Luật nói gì về Pháp Luân Công nhé!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/tap-phap-luan-cong-co-hop-phap.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-dai-phap-loi-giai-cho-cuoc-song/": {
    description: "Các nghệ sỹ, nhà báo, nghiên cứu sinh, kỹ sư, chuyên viên đầu tư tài chính,… họ đã rất ngạc nhiên về lợi ích thần kỳ mà môn Pháp Luân Đại Pháp mang lại. Họ thật sự chấn động khi đọc cuốn sách ” Chuyển Pháp Luân” và tìm ra lời giải cho cuộc sống mà họ đã tìm kiếm bấy lâu. Vậy các bạn đã tìm ra lời giải cho mình chưa?",
    videoUrl: "https://media.dieukydieu.tv/videos/original/loi-giai-cuoc-song.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/dai-phap-hong-truyen-gioi-thieu-phap-luan-cong/": {
    description: "Pháp Luân Đại Pháp, cũng gọi là Pháp Luân Công, một môn tín ngưỡng tinh thần xuất xứ từ Trung Quốc,chỉ trong mười mấy năm ngắn ngủi đã truyền khắp toàn thế giới,thu hút các dân tộc, các sắc tộc khác nhau tu luyện Pháp Luân Đại Pháp.Không thể không nói đó là một “thần tích” Riêng tại Mỹ và Canada ở Bắc Mỹ châu, đã có hàng chục nghìn người tham gia tu luyện Pháp Luân Công.Trong 50 bang ở Mỹ, có 47 bang có điểm luyện công của Pháp Luân Đại Pháp.Những người tu luyện Đại Pháp ở Mỹ quốc phần nhiều là các nhà khoa học có học vị tiến sỹ, thạc sỹ, hoặc kỹ sư, giáo sư, hoặc là nghiên cứu sinh. Người tu luyện Đại Pháp ở các nước khác cũng có nhiều người xuất chúng trong các ngành nghề khác nhau. Cuốn Chuyển Pháp Luân đã nhanh chóng khai mở thế giới quan vốn rất hạn hẹp của tôi, mở ra trước mắt tôi một thế giới rộng lớn. Từ 1997 đến nay tôi học Pháp và tu luyện Pháp Luân Công mười mấy năm.Sư phụ Lý Hồng Chí đã chỉ ra cho tôi chân lý và thiên cơ rộng lớn và sâu sắc về vũ trụ, thời-không, vật chất, nhân thể, sinh mệnh. Khiến giá trị quan, nhân sinh quan và vũ trụ quan của tôi được thăng hoa rất nhiều. …………. (xem toàn văn tại www.minhhue.net)",
    videoUrl: "https://media.dieukydieu.tv/videos/original/dai-phap-hong-truyen.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-duoi-goc-nhin-cua-nhung-nguoi-lam-trong-nganh-an-ninh-va-quoc-phong/": {
    description: "Pháp Luân Công dưới góc nhìn của những người làm trong ngành an ninh và quốc phòng Có lẽ, đối với nhiều người thì môn tu luyện Pháp Luân Công đã không còn gì xa lạ khi trên thế giới đã có hàng trăm triệu người theo tập. Pháp Luân Công đã đem đến cho nhiều người một cuộc sống mới- vui vẻ, khỏe mạnh và an lạc. Tại Việt Nam, hình ảnh những học viên Pháp Luân Công luyện công sáng sớm đã không còn gì xa lạ đối với những người dân xung quanh. Già có, trẻ có, trung niên cũng có. Họ xếp hàng ngay ngắn và thực hiện các bài động tác nhẹ nhàng, an hòa tại các công viên. Rồi họ nhẹ nhàng rời đi, bắt đầu một ngày mới tràn đầy năng lượng và hạnh phúc. Tuy nhiên, vẫn còn đâu đó một số nơi nhiều người chưa tìm hiểu rõ môn tập mà lại đi nghe những lời tuyên truyền vu khống để rồi xảy ra những hiểu lầm, những hành động đáng tiếc. Qua những lời chia sẻ chân thành của Đại Tá công an và quân đội, chúng ta sẽ hiểu rõ hơn về quan điểm của nhà nước ta về môn tu luyện Pháp Luân Công. Mong rằng clip sẽ giúp bạn có được những thông tin hữu ích về môn tu luyện này.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/anninh-1.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cau-chuyen-cam-dong-bat-ngo-cua-mot-tre-tu-ky-hoa-nhap-voi-ban-be/": {
    description: "Câu chuyện của anh Trần Xuân Trường ở Đắk lăk về hành trình tìm cách chữa chạy bệnh tự kỷ cho con. Rồi một ngày, anh chị vỡ oà khi con: Xin phép bố mẹ ra ngoài chơi và chủ động chơi với các bạn, chào mọi người. Bạn có thể gọi cho anh Trường số 0942 632 575, để biết thêm về câu chuyện kỳ diệu và cảm động của người cha khi cứu được con mình.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Cau-chuyen-cam-dong-bat-ngo-cua-mot-tre-tu-ky-hoa-nhap-voi-ban-be.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/nguoi-phu-nu-can-ke-cai-chet-danh-bai-virus-viem-phoi-vu-han/": {
    description: "Người phụ nữ cận kề cái chết đánh bại virus viêm phổi Vũ Hán là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-c%E1%BA%ADn-k%E1%BB%81-c%C3%A1i-ch%E1%BA%BFt-%C4%91%C3%A1nh-b%E1%BA%A1i-virut-vi%C3%AAm-ph%E1%BB%95i-V%C5%A9-H%C3%A1n.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/dieu-gi-khien-mot-bac-si-tay-y-tin-vao-phap-luan-cong/": {
    description: "Chuyện kể về một Bác sĩ Y khoa giỏi, 59 tuổi ở Đồng Tháp. Trong cuộc đời làm nghề y của mình, ông đã chữa bệnh cho rất nhiều bệnh nhân hiểm nghèo, nhưng lại bất lực trước căn bệnh ung thư máu xảy ra với người vợ mà ông rất mực thương yêu. Khi mà mọi chuyện dường như bế tắc, thì một phép màu đã thực sự xảy ra. Duyên phận đã đưa vợ chồng ông đến với Pháp Luân Đại Pháp (hay còn gọi là Pháp Luân Công – một pháp môn tu luyện Phật Gia) và sau đó cuộc đời họ đã bước sang một trang mới. Mời các bạn cùng theo dõi câu chuyện “thần kỳ” của vợ chồng Bác sĩ Hiêm ở Đồng Tháp!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Dieu-gi-khien-mot-bac-si-Tay-y-tin-vao-Phap-Luan-Cong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cam-dong-hanh-trinh-nguoi-cha-tim-cach-chua-benh-cho-con-gai/": {
    description: "Xuất phát từ lòng thương con vô bờ bến, nhìn con đau mà lòng đau như cắt. Anh Phùng Anh Việt không khỏi nghẹn ngào xúc động kể lại hành trình gian nan vất vả đi tìm phương thuốc chữa bệnh nan y cho con mà nhiều bác sĩ cả trong lẫn ngoài nước đều ” bó tay”. Khi đã hết niềm tin vào bệnh viện, khoa học thì đi theo con đường tu luyện là con đường cuối cùng anh lựa chọn. Và thần tích đã thật sự triển hiện!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/cha-chua-benh-cho-con.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cau-chuyen-9-doi-giay-cua-ong-vuong/": {
    description: "Vượt qua từng ngọn núi, băng qua từng con suối… Đôi chân đầy thương tích, chịu đói chịu khát trong cái lạnh thấu xương…”. Có một ông lão nghèo, quyết tâm đi bộ ròng rã suốt 2 tháng trời, đi mòn hết 9 đôi giày lên Bắc Kinh để nói lên tâm nguyện của mình.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Cau-chuyen-9-doi-giay-cua-ong-Vuong-Phap-Luan-Cong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/su-hoi-sinh-ky-dieu-cua-nguoi-me-tre/": {
    description: "“Ông trời hãy cho tôi sống thêm một tháng rưỡi, nhìn con biết lật rồi tôi sẽ chấp nhận ra đi”. Lời khẩn cầu của chị Nguyễn Thị Mai đã làm cho không ít người nghe phải xúc động khi chị phát hiện mình bị ung thư phổi sau khi sinh đứa con đầu lòng được một tháng. Chạy chữa ròng rã suốt 4 năm trời, cả Đông Y và Tây Y, nhưng chị chỉ biết tuyệt vọng chờ chết. Và rồi ” trời xanh như có mắt”, may mắn đã mỉm cười với chị và cuộc sống của chị đã thay đổi hoàn toàn.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/nguoi-me-tre.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/me-toi-tap-phap-luan-cong-nhung-loi-ich-tuyet-voi/": {
    description: "Cô Hà – Mẹ anh Nam ở Thủ Đức đã tập luyện Pháp Luân Công và có được những lợi ích tuyệt vời về sức khỏe và tâm tính.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/me-toi-tap-phap-luan-cong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cac-thanh-pho-o-canada-cung-treo-co-mung-ngay-phap-luan-dai-phap-the-gioi/": {
    description: "Các thành phố ở Canada cùng treo cờ mừng ”Ngày Pháp Luân Đại Pháp Thế giới’ là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/C%C3%A1c-th%C3%A0nh-ph%E1%BB%91-%E1%BB%9F-Canada-c%C3%B9ng-treo-c%E1%BB%9D-m%E1%BB%ABng-Ng%C3%A0y-Ph%C3%A1p-Lu%C3%A2n-%C4%90%E1%BA%A1i-Ph%C3%A1p-Th%E1%BA%BF-gi%E1%BB%9Bi.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/hien-tuong-moi-trong-dai-dich-gan-2-000-nguoi-hoc-phap-luan-cong-qua-internet/": {
    description: "Hiện tượng mới trong đại dịch Gần 2 000 người học Pháp Luân Công qua internet là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Hi%E1%BB%87n-t%C6%B0%E1%BB%A3ng-m%E1%BB%9Bi-trong-%C4%91%E1%BA%A1i-d%E1%BB%8Bch-G%E1%BA%A7n-2-000-ng%C6%B0%E1%BB%9Di-h%E1%BB%8Dc-Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-qua-internet.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-va-nhung-dieu-it-biet-ve-ngay-phap-luan-dai-phap-the-gioi/": {
    description: "Pháp Luân Đại Pháp, còn được gọi là Pháp Luân Công, là một pháp môn tu luyện thiền định bao gồm 5 bài công pháp và các bài giảng tu luyện tâm tính dựa trên nguyên lý “Chân - Thiện - Nhẫn”. Pháp môn này lần đầu tiên được giới thiệu ra công chúng vào năm 1992 (đến nay đã được 29 năm). Hàng năm, ngày 13-5 được nhiều quốc gia trên toàn thế giới tôn vinh là ngày Pháp Luân Đại Pháp thế giới.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/PH%C3%81P-LU%C3%82N-C%C3%94NG-V%C3%80-NH%E1%BB%AENG-%C4%90I%E1%BB%80U-%C3%8DT-BI%E1%BA%BET-V%E1%BB%80-NG%C3%80Y-PH%C3%81P-LU%C3%82N-%C4%90%E1%BA%A0I-PH%C3%81P-TH%E1%BA%BE-GI%E1%BB%9AI.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cac-nghi-sy-hoa-ky-ton-vinh-ngay-phap-luan-dai-phap-the-gioi-13-5-2020/": {
    description: "Các nghị sỹ Hoa Kỳ tôn vinh ngày Pháp Luân Đại Pháp thế giới 13/5/2020 là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/nghi-sy-hoa-ky.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/doan-dieu-hanh-gan-10-000-hoc-vien-phap-luan-cong-lam-xuc-dong-nguoi-dan-new-york-vao-ngay-16-5-2019/": {
    description: "Ngày 16 tháng 5 năm 2019, gần 10.000 học viên Pháp Luân Công từ khắp nơi trên thế giới đã tập trung tại Công viên Liên Hợp Quốc ở Manhattan, New York cử hành một cuộc mít tinh lớn. Sau đó các học viên diễu hành khắp Manhattan để kỷ niệm 27 năm Pháp Luân Đại Pháp hồng truyền và kỷ niệm lần thứ 20 Ngày Pháp Luân Đại Pháp thế giới",
    videoUrl: "https://media.dieukydieu.tv/videos/original/doan-dieu-hanh-1000-nguoi.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/the-gioi-noi-gi-ve-phap-luan-cong/": {
    description: "Chính quyền Trung Quốc từ lâu đã nổi tiếng về những hành xử gây quan ngại cộng đồng quốc tế, không chỉ trong các vấn đề như Biển Đông hay thương mại, mà còn về lĩnh vực nhân quyền và tự do tín ngưỡng. Một trong những vấn đề mà Trung Quốc bị lên án mạnh mẽ trong những năm gần đây là cuộc đàn áp đối với Pháp Luân Công hay Pháp Luân Đại Pháp, môn khí công theo nguyên lý Chân – Thiện – Nhẫn mà nhiều người cho biết đã đem lại cho họ những lợi ích về sức khỏe và tinh thần.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/the-gioi-noi-gi-ve-phap-luan-cong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-tren-the-gioi-falun-dafa-in-the-world/": {
    description: "Pháp Luân Đại Pháp được thực hành rộng rãi ở hầu hết các nước trên thế giới. Vậy chúng ta xem thử hoạt động của các học viên Pháp Luân Đại Pháp tại Việt Nam và trên thế giới như thế nào nhé!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/falun-dafa-in-the-word.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/sydney-uc-chao-mung-ngay-phap-luan-dai-phap-the-gioi-13-05-2018/": {
    description: "Ngày 20/07/1999, Tổng bí thư nguyên chủ tịch nước Giang Trạch Dân đã ra lệnh xóa sổ Pháp Luân Công trong vòng 3 tháng. Tuy nhiên cho đến nay, đã hơn 18 năm trôi qua, Pháp Luân Công không chỉ bị xóa sổ mà còn phát triển mạnh mẽ trên khắp thế giới. Đến hẹn lại lên, ngày 13-05-2018 chào mừng ngày Pháp Luân Đại Pháp thế giới, các học viên Pháp Luân Đại Pháp lại tổ chức diễu hành, mang vẻ đẹp Chân- Thiện- Nhẫn đến với tất cả mọi người.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Sydney.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-tai-ben-tre-ki-niem-30-nam-dai-phap-hong-truyen/": {
    description: "Pháp Luân Công tại Bến Tre – Kỉ niệm 30 năm Đại Pháp Hồng Truyền là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-t%E1%BA%A1i-B%E1%BA%BFn-Tre-K%E1%BB%89-ni%E1%BB%87m-30-n%C4%83m-%C4%90%E1%BA%A1i-Ph%C3%A1p-H%E1%BB%93ng-Truy%E1%BB%81n.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-tai-da-lat/": {
    description: "Pháp Luân Công tại Đà Lạt là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Ph%C3%A1p-Lu%C3%A2n-C%C3%B4ng-t%E1%BA%A1i-%C4%90%C3%A0-L%E1%BA%A1t-M%C3%B9a-Xu%C3%A2n-tr%C3%AAn-Cao-Nguy%C3%AAn.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-tai-kien-giang/": {
    description: "Pháp Luân Công hay còn gọi là Pháp Luân Đại Pháp là một môn khí công tu luyện của Phật gia giúp nâng cao sức khỏe và đề cao đạo đức tâm tính con người thông qua việc đồng hóa với các giá trị Chân – Thiện – Nhẫn. Ngày nay Pháp Luân Công đang được phổ truyền trên hơn 114 quốc gia trên khắp thế giới với hơn 100 triệu người tu luyện. Ở Việt Nam hiện cũng có rất nhiều người tu luyện pháp môn này.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/Clip-PLC-ta%CC%A3i-Kie%CC%82n-Giang-2.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phong-su-phap-luan-cong-tai-can-tho/": {
    description: "Cần Thơ gạo trắng nước trong. Ai đi đến đó lòng không muốn về. Cần Thơ, miền đất Tây Đô thơ mộng, với bến Ninh Kiều nổi tiếng, chợ nổi Cái Răng, ghé thăm vườn cây ăn trái, cùng nghe khúc đờn cai tài tử nam bộ. Người dân miền Tây tuy vất vả với nghề sông nước, từng trải qua bao khó khăn, thăng trầm của lịch sử, nhưng trong họ luôn giữ cho mình sự vui vẻ, yêu đời. Hôm nay cuộc sống đã được đổi thay từng ngày. Và nhiều người dân nơi đây đã biết đến một môn khí công tu luyện giữa đời thường:Pháp Luân Đại Pháp. Pháp Luân Đại Pháp hay còn gọi là Pháp Luân Công, là một môn rèn luyện tinh thần cổ xưa của Trung Hoa, được Ông Lý Hồng Chí truyền ra từ năm 1992, gồm các bài giảng đạo đức và năm bài tập nhẹ nhàng, giúp con người nâng cao sức khỏe và đề cao giá trị đạo đức tinh thần. Ngày nay Pháp Luân Đại Pháp đã được phố biến trên 140 quốc gia và vùng lãnh thổ, có hơn 100 triệu người theo tập mỗi ngày. Là môn khí công được ưa chuộng nhiều nhất trên thế giới. Khác với các môn tập khác chỉ chú trọng động tác, Pháp Luân Đại Pháp chú trọng vào tu dưỡng đạo đức con người theo các giá trị Chân – Thiện – Nhẫn và lấy đó làm chỉ đạo trong cuộc sống hằng ngày. Chính vì những điều đó mà người dân Miền Tây nói chung và người dân Cần Thơ nói riêng đã được hưởng rất nhiều lợi ích từ Pháp môn Pháp Luân Đại Pháp, giúp họ có được cuộc sống hạnh phúc và ý nghĩa hơn.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/can-tho.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/chuong-trinh-ky-niem-ngay-phap-luan-dai-phap-tai-ha-noi-13-5-2018/": {
    description: "“Phong Vũ Đồng Thuyền” là chủ đề chương trình kỷ niệm đặc biệt nhân ngày Pháp Luân Đại Pháp thế giới 13/05/2018 được tổ chức tại Hà Nội. Hàng triệu người trên thế giới đã thoát khỏi cửa tử và bệnh tật, được tìm thấy bình yên trong tâm hồn sau những tháng ngày khổ đau… nhờ vào một môn tu luyện Phật gia mang tên Pháp Luân Đại Pháp. Vậy nên, sẽ không ngạc nhiên khi vào một ngày đặc biệt của tháng Năm, hàng triệu học viên Pháp Luân Đại Pháp ở khắp nơi dành những giọt lệ cảm ân, cờ hoa mừng đón, tỏ lòng tôn kính tới người đã sáng lập ra pháp môn – Đại sư Lý Hồng Chí. Đó là ngày 13/5 – ngày Đại Pháp được phổ truyền ra thế giới, đồng thời là ngày sinh nhật của người sáng lập pháp môn, và cũng là ngày biết bao con người được thọ ích. Năm nay, các học viên Pháp Luân Đại Pháp tại Hà Nội tổ chức một chương trình kỷ niệm 13/5 đặc biệt, mang lại nhiều bất ngờ cho khán giả. Các nghệ sĩ, cũng chính là các học viên, đã dàn dựng một buổi biểu diễn nghệ thuật quy mô được đầu tư công phu với màn hình LED lớn và dàn ánh sáng chuyên nghiệp,…",
    videoUrl: "https://media.dieukydieu.tv/videos/original/ki-niem-13-5.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/hoc-vien-hai-phong-ky-niem-ngay-phap-luan-dai-phap-the-gioi-13-05-2018/": {
    description: "Buổi sáng ngày 13/5/2018 học viên Pháp Luân Đại Pháp Hải Phòng tổ chức sự kiện kỷ niệm ngày Pháp Luân Đại Pháp Thế Giới (13/5/1992-13/5/2018). Hơn 200 học viên Pháp Luân Công tại Hải Phòng cùng nhau tập luyện 5 bài công pháp của Pháp Luân Đại Pháp và gửi lời cảm ân đến nhà sáng lập Pháp môn- Đại sư Lý Hồng Chí vì những cống hiến to lớn mà Pháp Luân Đại Pháp mang đến cho xã hội. Nhiều học viên chia sẻ rằng họ đã tìm thấy ý nghĩa chân thực của cuộc sống kể từ khi tu luyện Pháp Luân Đại Pháp.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/hai-phong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/luyen-cong-tap-the-tai-thanh-pho-vinh-nghe-an/": {
    description: "Buổi sáng tại thành phố Vinh- Nghệ An, trong đám đông tập luyện, hình ảnh một cô gái đang ngồi trên xe lăn kiên trì thực hành các bài tập đã khiến không ít người thật sự xúc động. Tuy họ không lành lặng về thể xác nhưng họ luôn luôn mang theo một niềm tin tròn đầy, niềm tin vào Chân- Thiện- Nhẫn!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/nghe-an.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/da-nang-phap-luan-dai-phap-hong-truyen/": {
    description: "Thành phố biển Đà Nẵng hiền hoà, nơi đây Pháp môn Phật gia Pháp Luân Đại Pháp được người dân mừng vui tiếp nhận. Đơn giản bởi vì Pháp Luân Đại Pháp dạy con người tu tâm dưỡng tính làm người tốt theo nguyên lý Chân-Thiện-Nhẫn. Hàng ngày đọc sách và luyện 5 bài công Pháp nhẹ nhàng giúp học viên đạt được thanh tâm nhẹ nhàng, cuộc sống an hoà, sức khoẻ được cải biến rất tích cực.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/da-nang.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/phap-luan-cong-tai-dong-xoai-binh-phuoc/": {
    description: "Một số người cho rằng Pháp Luân Công là không tốt, là tham gia chính trị? Tuy nhiên, tại Đồng Xoài- Bình Phước thì càng ngày càng có nhiều người theo tập môn này? Tại sao lại mâu thuẫn như vậy? Các bạn hãy xem những chia sẻ chân thật của người dân nơi đây sau một thời gian tu luyện môn pháp này để có cái nhìn khách quan hơn nhé!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/binh-phuoc.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/an-giang-mien-tay-que-toi/": {
    description: "Đến với An Giang, một tỉnh đồng bằng Sông Cửu Long, nơi những cánh đồng thẳng cánh cò bay, miền sông nước mênh mông, và những người dân quê chân chất Miền Tây. Nơi đây, Pháp Luân Đại Pháp đã được phổ truyền và đem đến rất nhiều lợi ích cả vể Sức khỏe và tinh thần cho những người dân quê hương An Giang. Pháp Luân Đại Pháp hay còn gọi là Pháp Luân Công là một pháp môn tu luyện cả thân lẫn tâm. Hiện đã được phổ truyền trên 114 quốc gia và có hơn 100 triệu người theo tập. Một Họa sĩ đã có được sức khỏe tốt hơn và tìm được chân lý của cuộc sống. Một người đàn ông đã bỏ được những thói hư tật xấu, tìm được lời giải đáp cho một gia đình hòa thuận. Một phụ nữ đã có được cuộc sống hạnh phúc hơn, luôn biết nghĩ cho người khác. Một Thanh Niên trẻ đã tìm được câu trả lời về đạo lý làm người, làm con. Tất cả họ đều đã thay đổi và có một cuộc sống mới, khỏe mạnh và hạnh phúc nhờ những lợi ích từ việc tu luyện Pháp Luân Đại Pháp. Mời các bạn đón xem.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/an-giang.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/dieu-ky-dieu-tai-thanh-pho-bien-vung-tau/": {
    description: "Người dân Vũng Tàu chia sẻ những lợi ích tốt đẹp mà họ thu được cả về thân và tâm khi tu luyện Pháp Luân Đại Pháp (hay còn gọi là Pháp Luân Công – một môn tu luyện Phật Gia thượng thừa). Họ ở các ngành nghề khác nhau, lứa tuổi khác nhau nhưng có cùng một niềm vui từ khi tu luyện: tâm tính tốt hơn, sức khỏe cải thiện… Họ chú trọng nâng cao tiêu chuẩn đạo đức của mình theo nguyên lý Chân – Thiện – Nhẫn, sửa đổi những nhược điểm còn tồn tại của bản thân, quay trở về với bản tính thiện lương và phẩm chất tốt đẹp vốn có của con người.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/vung-tau.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/de-tu-dai-phap-viet-nam-chuc-tet-su-phu/": {
    description: "Đệ tử Đại Pháp Việt Nam chúc tết Sư Phụ là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/%C4%90%E1%BB%87-t%E1%BB%AD-%C4%90%E1%BA%A1i-Ph%C3%A1p-Vi%E1%BB%87t-Nam-ch%C3%BAc-t%E1%BA%BFt-S%C6%B0-Ph%E1%BB%A5.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/%E8%B4%9D%E8%B4%9D%E4%B9%8B%E6%84%BF/": {
    description: "贝贝之愿 là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/y2meta.com-%E8%B4%9D%E8%B4%9D%E4%B9%8B%E6%84%BF.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/dieu-uoc-cua-boi-boi/": {
    description: "Điều ước của Bối Bối là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/y2meta.com-%C4%90i%E1%BB%81u-%C6%B0%E1%BB%9Bc-c%E1%BB%A7a-B%E1%BB%91i-B%E1%BB%91i1.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/mv-tro-ve-co-huong/": {
    description: "MV: TRỞ VỀ CỐ HƯƠNG là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/MV-TR%E1%BB%9E-V%E1%BB%80-C%E1%BB%90-H%C6%AF%C6%A0NG-Li%C3%AAn-T%E1%BB%8Bnh.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/mv-tan-nien-nho-su-ton/": {
    description: "MV: Tân niên nhớ Sư Tôn là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/MV-T%C3%A2n-ni%C3%AAn-nh%E1%BB%9B-S%C6%B0-T%C3%B4n-%E6%96%B0%E5%B9%B4%E6%83%B3%E5%BF%B5%E5%B8%88%E5%B0%8A.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ta-on-su-phu/": {
    description: "Tạ ơn Sư Phụ là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/T%E1%BA%A1-%C6%A1n-S%C6%B0-Ph%E1%BB%A5.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/chao-mung-ngay-phap-luan-dai-phap-the-gioi-13-5-2021/": {
    description: "Nhân ngày 13/5/2021, nhiều nhóm học viên nhỏ tại Việt Nam đã trân quý tổ chức ngày lễ Pháp Luân Đại Pháp thế giới tại rất nhiều các địa phương. Nhiều học viên đã viết các bài giao lưu tâm đắc thể hội để chia sẻ trong ngày lễ trọng đại này. Nhiều tiết mục như trống lưng, múa hoa sen được biểu diễn trang trọng. Ca khúc “Tạ n Sư được các học viên khắp thế giới hát vang để bày tỏ lòng biết ơn của mình với Người sáng lập Pháp Luân Đại Pháp – Đại Sư Lý Hồng Chí.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/pldp2.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/mau-tinh-lai/": {
    description: "Mau tỉnh lại là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/mau-tinh-lai.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ve-kinh-than/": {
    description: "Vè kính thần là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/ki%CC%81nh-Tha%CC%82%CC%80n-2.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ve-loi-sam/": {
    description: "Nghe vẻ nghe ve, nghe vè Trung cộng Dân tộc Trung Hoa, 5000 năm tuổi",
    videoUrl: "https://media.dieukydieu.tv/videos/original/loi-sam.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ngao-tuyet-xuan-mai/": {
    description: "Ngạo tuyết xuân mai là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/ngao-tuyet-xuan-mai.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/de-tu-viet-nam-mung-ngay-phap-luan-dai-phap-the-gioi-13-5-2020/": {
    description: "Học viên Việt Nam mừng ngày Pháp Luân Đại Pháp thế giới 13-5-2020 là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/15-05-2.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/de-sinh-menh-duoc-cam-thu/": {
    description: "Để sinh mệnh được cảm thụ là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/de-sinh-menh-dc-cam-thu.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/khuc-hat-nho-con/": {
    description: "Khúc hát nhớ con như tiếng lòng da diết thổn thức, khắc họa lại một câu chuyện có thật trong số hàng triệu gia đình bỗng nhiên rơi vào cảnh đổ vỡ, ly tán dưới cuộc bức hại Pháp Luân Công tại Trung Quốc. Hàng ngàn trẻ em vô tội bị đuổi học, thậm chí trở thành mồ côi, không nơi nương tựa khi cha mẹ các em đã bị bức hại đến chết chỉ vì niềm tin vào Chân - Thiện - Nhẫn. Đảng Cộng Sản Trung Quốc đã bí mật thực hiện mổ cướp tạng các học viên Pháp Luân Công trong suốt 20 năm qua.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/khc-hat-nho-con.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/bai-hat-tro-ve-co-huong-mien-dat-tinh-tho/": {
    description: "Một tiếng đàn bầu, một lời mẹ ru, Một dòng sông nhỏ đưa tôi trở về. Đường làng gập ghềnh quanh co. Mẹ tôi nón lá tiễn tôi một chiều. Tôi gọi đò ơi. Xuôi mái chèo trở về thơ dại. Bắt cá chăn trâu bát cơm vội vã. Mưa trắng đồng một vạt áo tơi. Quê mẹ là đây. Giữa biển đời nơi trong nơi đục. Vẫn kiếm tìm giữa muôn vàn nỗi nhớ. Thác xuống rồi, tôi trở về đâu. Duyên lành đến một sớm mai. Chân Thiện Nhẫn đưa ta trở về. Pháp đã ban truyền thế gian tỉnh giấc. Kết Nhịp cầu thiên về với chân mệnh. Ta tỉnh giấc thu về với quê nhà.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/tro-ve-co-huong.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ca-khuc-mong-tinh-loi-viet/": {
    description: "Nhạc Hoa Lời Việt: Văn Cường Trình bày: T.H Trải muôn vạn kiếp, nơi thế gian đến lại đi Đời người vì điều chi mà lao tứ? Quyền, danh, lợi, sắc nơi thế gian không bền lâu Hồng trần thịnh hay suy định bởi trời. Quê hương thật ta vốn trên trời cao Bao tranh đua thắng thua như phù vân Nhiều thị phi là ân oán từ bao kiếp Hãy mau tỉnh mộng đắc Pháp, ta hồi hương!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/mong-tinh.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/ca-khuc-thien-su-huy-hoang/": {
    description: "Cảm hứng khi nghe bản nhạc Phổ Độ, ca sĩ không rành đến 1 nốt nhạc đã viết lên ca khúc này bằng chính tiếng nói nơi tâm mình. Mời bạn cùng lắng nghe! Sáng tác và hát: Liên Tịnh Phối khí: Tương Nhuệ Video: Bách Thông Nghe như tiếng bước chân từ thuở hồng hoang. Mở đất, mở nước, sinh vạn vật. Người viết lên thiên sử huy hoàng của đại khung. Nghe tiếng sóng Trường Giang vọng về từ khơi xa. Ngàn năm, kết duyên, vượt giông bão. Người nắm tay cứu độ nhân loại khỏi diệt vong. Truyện cổ vạn xưa lưu truyền trần thế. Khi hoa Ưu đàm nở Phật Chủ độ nhân. 5 ngàn năm như nước chảy trôi. Khuất lấp tâm lành. Thế gian mê lạc kiếp người mong manh. Người truyền tâm Pháp Chân Thiện Nhẫn. Hồng truyền Đại Pháp phá cơn mê. Người như vầng dương sáng giữa trời, gọi thiện lương cùng dẫn lối. Ánh sáng Pháp Luân Đại Pháp, trải muôn nơi, bừng sức sống. Ai ơi hãy trân quý, ân cứu độ từ bi, dậy đi thôi cổng trời đã mở, không còn xa. Người truyền tâm Pháp Chân Thiện Nhẫn. Hồng truyền Đại Pháp phá cơn mê. Người như vầng dương sáng giữa trời, gọi thiện lương về muôn nơi. Ánh sáng Pháp Luân Đại Pháp, tạ ân Sư, còn vang mãi. Ai ơi hãy trân quý, ân cứu độ từ bi, dậy đi thôi cổng trời đã mở, ta hồi hương!",
    videoUrl: "https://media.dieukydieu.tv/videos/original/thien-su-huy-hoang.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cuoc-diet-chung-dam-mau/": {
    description: "Cuộc diệt chủng đẫm máu là nội dung được lấy từ nguồn dieukydieu.tv và trình bày lại trong giao diện đọc rõ ràng hơn.",
    body: [
      "Nội dung nguồn không có tệp video trực tiếp để nhúng, nên trang này hiển thị dạng bài đọc với phần tóm lược chính.",
      "Người xem vẫn có thể mở bài gốc từ liên kết trong trang để đối chiếu toàn bộ nội dung nguồn.",
    ],
  },
  "/su-that-bi-dcstq-che-day-va-loi-giai-dap-sang-to-khap-the-gioi/": {
    description: "Tương tự như ‘Quái vật thành Rome’ đàn áp Cơ Đốc nhân khi xưa, Đảng Cộng sản Trung Quốc với chỉ lệnh của cựu lãnh đạo Giang Trạch Dân đã bức hại thảm khốc Pháp Luân Công, môn khí công ôn hòa thuộc trường phái Phật gia. Chiến dịch xóa sổ Pháp Luân Công đang đi đến thất bại hoàn toàn khi thế giới ngày càng biết đến sự thật đằng sau những lời tuyên truyền vu khống của ĐCSTQ. Đế chế La Mã đã lụi bại sau khi đàn áp Cơ Đốc giáo, Chủ tịch Trung Quốc Tập Cận Bình sẽ lựa chọn điều gì: Tiếp tục di họa của Giang Trạch Dân hay hòa mình cùng thế giới tự do?",
    body: [
      "Nội dung nguồn không có tệp video trực tiếp để nhúng, nên trang này hiển thị dạng bài đọc với phần tóm lược chính.",
      "Người xem vẫn có thể mở bài gốc từ liên kết trong trang để đối chiếu toàn bộ nội dung nguồn.",
    ],
  },
  "/vo-kich-lon-cua-trung-quoc-khien-bao-nguoi-chiu-hoa/": {
    description: "Sống trong tuyên truyền của Đức Quốc Xã, nhiều người đã không nhận ra cuộc tàn sát người Do Thái là một tội ác. Lịch sử đang tái diễn mà nhiều người không biết đến. Bi kịch bắt đầu khi Trung Quốc không thừa nhận môn khí công đem lại sức khỏe và tinh thần cho hàng triệu người trên thế giới: Pháp Luân Công, hay Pháp Luân Đại Pháp, môn khí công tu luyện theo nguyên lý Chân-Thiện-Nhẫn. “Pháp Luân Đại Pháp là một môn tập đem lại sức khỏe tốt hơn và nội tâm an hòa cho hàng triệu người trên khắp thế giới”, Nghị quyết 1432 của Thượng viện New York khẳng định nhân ngày Pháp Luân Đại Pháp Thế giới 2017.",
    body: [
      "Nội dung nguồn không có tệp video trực tiếp để nhúng, nên trang này hiển thị dạng bài đọc với phần tóm lược chính.",
      "Người xem vẫn có thể mở bài gốc từ liên kết trong trang để đối chiếu toàn bộ nội dung nguồn.",
    ],
  },
  "/bay-nua-vong-trai-dat-chi-de-gap-su-phu/": {
    description: "Năm 1994, sau thất vọng vì chuyến đi đến Anh quốc làm học giả thỉnh giảng do chính cơ quan đề xuất lại thất bại vào phút cuối, người phụ nữ này đã từ bỏ hy vọng được ra nước ngoài. Tuy nhiên đến năm 1996, chuyến đi của cô đến Mỹ quốc lại được sắp đặt một cách bất ngờ và diễn ra suôn sẻ. Trong thâm tâm, cô cảm thấy đây là một chuyến đi ẩn chứa điều gì đó rất đặc biệt. Cô đến Mỹ và ở nhà của một người bạn quốc tịch nước sở tại trong 10 ngày đầu tiên. Vào ngày thứ mười, một người bạn gọi cho cô và nói rằng có chỗ tốt đang cho thuê và bảo cô đến xem. Cô bèn tìm tới, đó là một ngôi nhà cho thuê rất sạch sẽ và ngăn nắp. Một bức ảnh vẽ chân dung một vị Phật treo trên tường của phòng khách, trước ảnh là bát hương được đặt ngay ngắn. Người bạn nói rằng: “Gia đình này theo Phật. Chỗ này thật đẹp và an toàn. Bạn có thể sống ở đây”. Ngày 02/10, những ngày đầu tiên sau khi chuyển đến, chủ nhà đã cho cô một cuốn Chuyển Pháp Luân. Dưới sự giáo dục vô thần tại trường học, cô chưa bao giờ tin vào bất cứ vị Thần nào, thậm chí không tin khí công. Tuy nhiên, cô đã quyết định thử đọc cuốn sách. Thế là trong 9 ngày, cô hoàn thành việc đọc hết các bài giảng và xem toàn bộ video thuyết giảng. Đoạn thời gian 9 ngày đó đã tạo ra bước ngoặt rất lớn trong cuộc đời cô, cô chợt nhận ra tất cả ý nghĩa nhân sinh trong cuộc đời này đều nằm trọn vẹn trong cuốn sách, và nó đã được diễn giải tuần tự trước mắt cô suốt 9 ngày đó. Với tất cả sự thành kính và ngưỡng vọng, cô quyết tham gia một buổi họp mặt để gặp tác giả cuốn sách Chuyển Pháp Luân: ông Lý Hồng Chí, người mà cô kính cẩn gọi là Sư phụ. Chiều ngày 17/10/1996, khi mọi người tiễn ông Lý ra sân bay để đi tới New York, cô đã tìm được cơ hội được bắt tay với ông. Khoảnh khắc đó đã trở thành khoảnh khắc trân quý nhất cuộc đời, bởi cô đã bỏ qua 1 lần cơ hội với rất nhiều hối tiếc, và còn bởi cô biết rằng người trước mặt cô đây chính là người sẽ giúp cô thoát khỏi trầm luân. Kết thúc chuyến công tác, cô trở về nước, một thời gian sau thì người bạn ở Mỹ gọi điện báo cho cô hay Sư phụ Lý đã đến thăm nhà họ và khi trông thấy ảnh của cô, ông đã nói: “Cô ấy đến Mỹ để được đắc Pháp”. Nguồn: tinhhoa.net",
    videoUrl: "https://media.dieukydieu.tv/videos/original/bay-nua-vong-trai-dat.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cau-chuyen-than-thoai-cho-con-nguoi-tuong-lai-phan-1-thuyet-minh/": {
    description: "Câu chuyện thần thoại cho con người tương lai – Phần 1 [Thuyết Minh] là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/C%C3%A2u-chuy%E1%BB%87n-th%E1%BA%A7n-tho%E1%BA%A1i-cho-con-ng%C6%B0%E1%BB%9Di-t%C6%B0%C6%A1ng-lai-Ph%E1%BA%A7n-1-Thuy%E1%BA%BFt-Minh.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
  "/cau-chuyen-than-thoai-cho-con-nguoi-tuong-lai-phan-2-thuyet-minh/": {
    description: "Câu chuyện thần thoại cho con người tương lai – Phần 2 [Thuyết Minh] là video được lấy từ nguồn dieukydieu.tv và hiển thị trực tiếp trong giao diện để người xem có thể theo dõi đầy đủ nội dung.",
    videoUrl: "https://media.dieukydieu.tv/videos/original/C%C3%A2u-chuy%E1%BB%87n-th%E1%BA%A7n-tho%E1%BA%A1i-cho-con-ng%C6%B0%E1%BB%9Di-t%C6%B0%C6%A1ng-lai-Ph%E1%BA%A7n-2-Thuy%E1%BA%BFt-Minh.mp4",
    body: [
      "Video này được nhúng từ nguồn media.dieukydieu.tv để người xem có thể theo dõi ngay trên trang chi tiết.",
      "Phần mô tả giữ lại bối cảnh chính của nội dung nguồn, đồng thời các liên kết bên cạnh giúp tiếp tục khám phá cùng chuyên mục.",
    ],
  },
};

export const defaultContentDetail = (title: string, sectionTitle: string): ContentDetail => ({
  description: `${title} thuộc chuyên mục ${sectionTitle}. Nội dung được giữ theo đường dẫn nguồn và trình bày lại trong giao diện dễ xem, dễ đọc hơn.`,
  body: [
    "Trang này tóm lược nội dung nguồn thành một trải nghiệm đọc rõ ràng hơn, đồng thời giữ đường dẫn gốc để người xem có thể mở bài đầy đủ khi cần.",
    "Các nội dung liên quan ở cuối trang giúp tiếp tục khám phá cùng chủ đề mà không phải quay lại danh sách chuyên mục.",
  ],
});
