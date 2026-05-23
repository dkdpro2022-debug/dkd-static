import { VideoItem, StoryItem, QuoteItem } from "./types";

export const heroText =
  "Điều Kỳ Diệu lưu giữ các câu chuyện, video và góc nhìn chân thực về Pháp Luân Công, đời sống tinh thần, và những giá trị Chân - Thiện - Nhẫn trong cuộc sống hôm nay.";

export const featuredVideos: VideoItem[] = [
  {
    title: "Giới thiệu Pháp Luân Công",
    category: "Video tiêu biểu",
    image: "/wp-content/uploads/2020/04/gioi-thieu-phap-luan-cong-2-1-300x169.jpg",
    href: "https://media.dieukydieu.tv/videos/original/gioi-thieu-phap-luan-cong.mp4",
  },
  {
    title: "Hướng dẫn tập 5 bài tập Pháp Luân Công chuẩn",
    category: "Hướng dẫn",
    image: "/wp-content/uploads/2020/04/5-bai-tap-phap-luan-cong-7-300x151.jpg",
    href: "https://media.dieukydieu.tv/videos/original/huong-dan-tap-phap-luan-cong.mp4",
  },
  {
    title: "Pháp Luân Công dưới góc nhìn của những người làm trong ngành an ninh và quốc phòng",
    category: "Góc nhìn",
    image: "/wp-content/uploads/2020/03/maxresdefault-3-300x169.jpg",
    href: "https://media.dieukydieu.tv/videos/original/tran-van-de.mp4",
  },
  {
    title: "Pháp Luân Công tại Quảng Ngãi - Những đóa sen trên dòng sông Trà",
    category: "Vùng đất và con người",
    image: "/wp-content/uploads/2023/07/quangngai-300x169.jpg",
    href: "https://media.dieukydieu.tv/videos/original/quang-ngai.mp4",
  },
];

export const storyCards: StoryItem[] = [
  {
    title: "Câu chuyện 9 đôi giày của ông Vương",
    text: "Một lát cắt bình dị về nhân tâm, lựa chọn và sự thay đổi thầm lặng trong đời sống.",
    image: "/wp-content/uploads/2020/02/Câu-chuyện-9-đôi-giày-của-ông-Vương-Pháp-Luân-Công-300x169.jpg",
  },
  {
    title: "Cảm động: hành trình người cha tìm cách chữa bệnh cho con gái",
    text: "Một câu chuyện gia đình được kể bằng nhịp điệu chậm, rõ và giàu sức nâng đỡ.",
    image: "/wp-content/uploads/2020/02/Câu-chuyện-cảm-động-bất-ngờ-của-một-trẻ-tự-kỷ-hoà-nhập-với-bạn-bè-300x169.jpg",
  },
  {
    title: "Để sinh mệnh được cảm thụ",
    text: "Những trải nghiệm cá nhân được đặt trong một ngôn ngữ hình ảnh tĩnh tại và sâu lắng.",
    image: "/wp-content/uploads/2020/02/n20kwiVeZUYhd-1-300x169.jpg",
  },
];

export const quotes: QuoteItem[] = [
  {
    name: "Trung Đức",
    role: "Nghệ sỹ nhân dân",
    avatar: "/wp-content/uploads/2020/02/nghe-si-trung-duc-150x150.jpg",
    text: "Tôi là người sống rất thật và tôi đã tập môn này rồi. Tôi đã thấy hiệu quả rất tốt rồi. Đó là điều tuyệt vời. Trên cả tuyệt vời.",
  },
  {
    name: "Lê Vi",
    role: "Nghệ sỹ múa",
    avatar: "/wp-content/uploads/2020/02/nghe-sy-mua-le-vy-150x150.jpg",
    text: "Từ bỏ ánh hào quang sân khấu, cô bắt đầu một hành trình mới và tìm thấy một thay đổi lớn trong cuộc đời.",
  },
];

export const navItems = [
  { label: "Những câu chuyện thần kỳ", id: "stories" },
  { label: "Video chọn lọc", id: "watch" },
  { label: "Ý kiến chuyên gia", id: "testimonials" },
];
