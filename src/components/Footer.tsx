import React from "react";
import { allNavItems } from "../data";

export default function Footer() {
  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-16 text-slate-800 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-between items-start pb-12 border-b border-slate-100">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-950 tracking-tight">
              Điều Kỳ Diệu
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              Trang thông tin tổng hợp về câu chuyện chân thực, trải nghiệm kỳ diệu có thật, góc nhìn của các chuyên gia và các hình ảnh hồng truyền Đại Pháp từ khắp nơi trên thế giới.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:pl-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Khám Phá</h4>
            <ul className="space-y-3">
              {allNavItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(item.id, e)}
                    className="text-sm font-semibold text-slate-500 hover:text-slate-950 hover:underline transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Thông Tin</h4>
            <div className="space-y-2">
              <p className="text-sm text-slate-500">
                Ý kiến đóng góp, phản hồi xin gửi về email ban biên tập:
              </p>
              <a 
                href="mailto:dieukydieu2020@gmail.com" 
                className="inline-block text-sm font-bold text-slate-900 hover:text-black transition-colors duration-200 underline"
              >
                dieukydieu2020@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Điều Kỳ Diệu. Bảo lưu mọi quyền.</p>
          <div className="flex gap-4">
            <a href="https://vi.falundafa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Tìm hiểu Pháp Luân Đại Pháp</a>
            <span>•</span>
            <a href="https://trithucvn.co/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-medium">Đối tác tư liệu</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
