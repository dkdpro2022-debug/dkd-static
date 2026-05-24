import { ArrowUpRight, Layers3 } from "lucide-react";
import { motion } from "motion/react";
import type { HomepageSection } from "../types";

type CategoryPageProps = {
  section: HomepageSection;
};

export default function CategoryPage({ section }: CategoryPageProps) {
  const [lead, ...items] = section.items;

  return (
    <main className="bg-white pt-20">
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                <Layers3 className="h-4 w-4" />
                <span>Chuyên mục</span>
              </div>
              <h1 className="font-display text-3xl font-black leading-tight tracking-normal text-[#102A43] sm:text-5xl">
                {section.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Danh sách đầy đủ các video và bài viết trong chuyên mục, trình bày theo dạng thư viện để dễ quét, mở nhanh và đối chiếu nội dung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="border border-slate-200 bg-white p-5"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Tổng số</div>
              <div className="mt-2 font-display text-4xl font-black text-slate-950">{section.items.length}</div>
              <div className="mt-1 text-sm font-semibold text-slate-500">mục nội dung</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        {lead ? (
          <motion.a
            href={lead.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="group mb-8 grid overflow-hidden border border-slate-200 bg-white transition-colors hover:border-slate-400 lg:grid-cols-[28rem_1fr]"
          >
            <div className="aspect-video bg-slate-100 lg:aspect-auto">
              {lead.image ? (
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" src={lead.image} alt="" />
              ) : null}
            </div>
            <div className="flex min-h-[18rem] flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Nội dung đầu mục</div>
                <h2 className="mt-4 max-w-3xl font-display text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
                  {lead.title}
                </h2>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-950">
                <span>Xem chi tiết</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        ) : null}

        <div className="grid gap-x-8 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.a
              key={`${item.href}-${index}`}
              href={item.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.28, delay: Math.min(index * 0.018, 0.12) }}
              className="group grid grid-cols-[2.35rem_minmax(0,1fr)_auto] items-start gap-3 border-b border-slate-200 py-4 transition-colors hover:border-slate-400 sm:grid-cols-[2.75rem_auto_minmax(0,1fr)_auto] sm:gap-4"
            >
              <span className="pt-0.5 font-display text-xs font-bold text-slate-400">
                {String(index + 2).padStart(2, "0")}
              </span>
              {item.image ? (
                <div className="hidden h-14 w-20 shrink-0 overflow-hidden bg-slate-100 sm:block">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" src={item.image} alt="" loading="lazy" />
                </div>
              ) : null}
              <h3 className={`min-w-0 text-[15px] font-semibold leading-7 text-slate-900 transition-colors group-hover:text-slate-600 ${item.image ? "" : "sm:col-start-3"}`}>
                {item.title}
              </h3>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-900" />
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
