import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, BookOpen, CirclePlay, Film, Globe2, Menu, Quote, Search, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import "./styles.css";

const heroText =
  "Điều Kỳ Diệu lưu giữ các câu chuyện, video và góc nhìn chân thực về Pháp Luân Công, đời sống tinh thần, và những giá trị Chân - Thiện - Nhẫn trong cuộc sống hôm nay.";

const featuredVideos = [
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

const storyCards = [
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

const quotes = [
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

const navItems = ["Những câu chuyện thần kỳ", "Vùng đất & con người", "Vẻ đẹp Chân Thiện Nhẫn", "Blog"];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071b31]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Điều Kỳ Diệu">
          <img className="h-14 w-14 object-contain" src="/wp-content/uploads/2020/02/logo-140-e1581310697140.png" alt="" />
          <div className="hidden leading-tight text-white sm:block">
            <div className="font-display text-sm font-extrabold uppercase tracking-wide">Pháp Luân Đại Pháp Hảo</div>
            <div className="text-xs font-medium text-white/72">Chân Thiện Nhẫn Hảo</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#stories" className="text-sm font-semibold text-white/78 transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white" aria-label="Tìm kiếm">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white lg:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-shell relative min-h-[100svh] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/wp-content/uploads/2020/04/cover-1-1024x563.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,240,229,0.98)_0%,rgba(246,240,229,0.9)_34%,rgba(246,240,229,0.35)_66%,rgba(35,61,116,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f1e8] to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-end gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1fr_380px] lg:px-8 lg:pb-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9904a]/35 bg-white/50 px-4 py-2 text-sm font-bold text-[#0b3159] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#b9904a]" />
            Điều Kỳ Diệu
          </div>
          <h1 className="font-display text-[clamp(3.1rem,8vw,8rem)] font-black leading-[0.88] tracking-[-0.045em] text-[#111827]">
            Những câu chuyện làm sáng lại niềm tin vào điều thiện.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#27364a] sm:text-xl">{heroText}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-lg bg-[#0b3159] px-7 text-base text-white hover:bg-[#102f4f]">
              <a href="#watch">
                <CirclePlay className="h-5 w-5" />
                Xem video tiêu biểu
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-lg border-[#0b3159]/20 bg-white/72 px-7 text-base backdrop-blur hover:bg-white">
              <a href="#stories">
                Khám phá câu chuyện
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <Card className="hidden border-white/70 bg-white/62 shadow-editorial backdrop-blur-xl lg:block">
          <CardContent className="space-y-6 p-7">
            {[
              ["Chủ đề", "Những câu chuyện thần kỳ và hành trình thay đổi cuộc đời."],
              ["Tinh thần", "Vẻ đẹp Chân - Thiện - Nhẫn trong đời sống hiện đại."],
              ["Tư liệu", "Video, âm nhạc, nghệ thuật và góc nhìn được chọn lọc."],
            ].map(([label, text]) => (
              <div key={label} className="border-b border-slate-900/10 pb-5 last:border-0 last:pb-0">
                <div className="font-display text-sm font-black uppercase tracking-wide text-[#0b3159]">{label}</div>
                <p className="mt-2 text-[15px] leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function VideoFeature() {
  return (
    <section id="watch" className="bg-[#f7f1e8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-[#a7792f]">Video tiêu biểu</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] text-[#0f172a] sm:text-6xl">
              Nội dung được kể bằng hình ảnh, nhịp thở và sự tĩnh tại.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-650">
            Giao diện mới đặt video lên trước, giảm nhiễu thị giác và giữ các chủ đề chính trong một dòng chảy rõ ràng cho người xem.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-lg border border-black/10 bg-black shadow-editorial">
          <video
            className="aspect-video w-full bg-black object-contain"
            controls
            preload="metadata"
            poster="/wp-content/uploads/2020/04/gioi-thieu-phap-luan-cong-2-1.jpg"
            src="https://media.dieukydieu.tv/videos/original/gioi-thieu-phap-luan-cong.mp4"
          />
        </div>
      </div>
    </section>
  );
}

function VideoGrid() {
  return (
    <section className="bg-[#fbf8f2] py-20" id="stories">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-[#a7792f]">Tuyển chọn</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.035em] text-[#0f172a]">Câu chuyện nổi bật</h2>
          </div>
          <Button variant="outline" className="hidden rounded-lg bg-white sm:inline-flex">
            Xem thêm
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredVideos.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <Card className="h-full overflow-hidden border-black/10 bg-white shadow-soft transition duration-300 group-hover:-translate-y-1 group-hover:shadow-editorial">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt="" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0b3159] backdrop-blur">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-[#0b3159] p-3 text-white shadow-lg">
                    <CirclePlay className="h-5 w-5" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-black leading-snug tracking-[-0.02em] text-[#0f172a]">{item.title}</h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryEditorial() {
  return (
    <section className="bg-[#071b31] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-[#d0a85c]">Những câu chuyện thần kỳ</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.04em] sm:text-6xl">Một thư viện cảm hứng, không phải một trang lưu trữ.</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Mỗi nội dung được đặt trong bố cục có nhịp nghỉ, hình ảnh lớn và văn bản rõ ràng để người xem có thể đi sâu thay vì chỉ lướt qua.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {storyCards.map((item) => (
            <Card key={item.title} className="overflow-hidden border-white/10 bg-white/8 text-white shadow-none backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img className="h-full w-full object-cover" src={item.image} alt="" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-display text-lg font-black leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section className="bg-[#f7f1e8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-[#a7792f]" />
          <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.035em] text-[#0f172a]">Người nổi tiếng nói gì về Pháp Luân Công</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {quotes.map((quote) => (
            <Card key={quote.name} className="border-black/10 bg-white shadow-soft">
              <CardContent className="p-7">
                <p className="text-xl leading-9 text-slate-800">“{quote.text}”</p>
                <div className="mt-7 flex items-center gap-4 border-t border-black/10 pt-5">
                  <img className="h-14 w-14 rounded-full object-cover" src={quote.avatar} alt="" />
                  <div>
                    <div className="font-display font-black text-[#0f172a]">{quote.name}</div>
                    <div className="text-sm text-slate-500">{quote.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071b31] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <div className="font-display text-xl font-black">Điều Kỳ Diệu</div>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
            Trang thông tin tổng hợp về những điều kỳ diệu có thật, góc nhìn của các chuyên gia và các hình ảnh hồng truyền Đại Pháp.
          </p>
        </div>
        <div className="flex gap-3 text-sm text-white/70">
          <a href="#watch" className="hover:text-white">
            Video
          </a>
          <a href="#stories" className="hover:text-white">
            Câu chuyện
          </a>
          <a href="mailto:dieukydieu2020@gmail.com" className="hover:text-white">
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-5 sm:grid-cols-3 lg:px-8">
          {[
            [Film, "Video chọn lọc", "Tập trung vào nội dung có giá trị xem lại."],
            [BookOpen, "Câu chuyện thật", "Giữ nguyên tinh thần và văn bản cốt lõi."],
            [Globe2, "Góc nhìn thế giới", "Mở rộng bối cảnh Việt Nam và quốc tế."],
          ].map(([Icon, title, text]) => {
            const TypedIcon = Icon as typeof Film;
            return (
              <div key={title as string} className="flex gap-4 p-4">
                <TypedIcon className="mt-1 h-6 w-6 text-[#a7792f]" />
                <div>
                  <div className="font-display font-black text-[#0f172a]">{title as string}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <VideoFeature />
      <VideoGrid />
      <StoryEditorial />
      <Quotes />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
