import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Quote } from "lucide-react";
import { motion } from "motion/react";
import { homepageSections } from "../data";
import type { HomepageItem, HomepageSection } from "../types";

type SectionCardProps = {
  item: HomepageItem;
  index: number;
};

const SectionCard: React.FC<SectionCardProps> = ({ item, index }) => {
  const rowLayout = item.image
    ? "grid-cols-[6rem_minmax(0,1fr)_auto] sm:grid-cols-[2.75rem_auto_minmax(0,1fr)_auto]"
    : "grid-cols-[2.35rem_minmax(0,1fr)_auto] sm:grid-cols-[2.75rem_auto_minmax(0,1fr)_auto]";

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.018, 0.12) }}
      className={`group grid ${rowLayout} items-start gap-3 border-b border-slate-200 bg-white py-4 transition-colors hover:border-slate-400 sm:gap-4`}
    >
      <span className={`pt-0.5 font-display text-xs font-bold text-slate-400 ${item.image ? "hidden sm:block" : ""}`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {item.image ? (
        <div className="h-16 w-24 shrink-0 overflow-hidden bg-slate-100 sm:h-14 sm:w-20">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
            src={item.image}
            alt=""
            loading="lazy"
          />
        </div>
      ) : null}

      <h3 className={`min-w-0 text-[15px] font-semibold leading-7 text-slate-900 transition-colors group-hover:text-slate-600 ${item.image ? "" : "sm:col-start-3"}`}>
        {item.title}
      </h3>

      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-900" />
    </motion.a>
  );
};

const famousQuotes: Record<string, { name: string; role: string; text: string }> = {
  "/videos/ca-si-nsnd-trung-duc-trai-nghiem-ve-phap-luan-cong/index.html": {
    name: "Trung Đức",
    role: "Nghệ sỹ nhân dân",
    text: "Tôi là người sống rất thật và tôi đã tập môn này rồi. Tôi đã thấy hiệu quả rất tốt rồi. Đó là điều tuyệt vời. Trên cả tuyệt vời.",
  },
  "/videos/nghe-si-mua-le-vi-toi-may-man-khi-tim-thay-anh-sang-chan-ly-cua-cuoc-doi/index.html": {
    name: "Lê Vi",
    role: "Nghệ sỹ múa",
    text: "Từ bỏ ánh hào quang sân khấu, cô bắt đầu một hành trình mới và tìm thấy một thay đổi lớn trong cuộc đời.",
  },
};

function FamousSection({ section }: { section: HomepageSection }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {section.items.map((item, index) => {
        const quote = famousQuotes[item.href];

        return (
          <motion.a
            key={`${section.id}-${item.href}-${index}`}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="group border border-slate-200 bg-white p-5 transition-all hover:border-slate-400 hover:bg-slate-50 sm:p-6"
          >
            <Quote className="mb-4 h-5 w-5 text-slate-300" />
            <blockquote className="text-sm leading-7 text-slate-700">
              “{quote?.text ?? item.title}”
            </blockquote>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img className="h-10 w-10 rounded-full border border-slate-200 object-cover" src={item.image} alt="" loading="lazy" />
                ) : null}
                <div>
                  <div className="font-display text-sm font-semibold text-slate-950">{quote?.name ?? item.title}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{quote?.role ?? "Chia sẻ"}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-950" />
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}

const getInitialVisibleCount = (section: HomepageSection) => {
  if (section.layout === "compact") return Math.min(section.items.length, 6);
  return Math.min(section.items.length, 8);
};

function RevealButton({
  hiddenCount,
  expanded,
  onClick,
}: {
  hiddenCount: number;
  expanded: boolean;
  onClick: () => void;
}) {
  if (hiddenCount <= 0) return null;

  return (
    <div className="mt-6 flex justify-start">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex h-10 items-center gap-2 border border-slate-200 bg-white px-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-950 hover:text-white"
      >
        {expanded ? "Thu gọn" : `Xem thêm ${hiddenCount} mục`}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}

function SectionBody({ section }: { section: HomepageSection }) {
  const [expanded, setExpanded] = useState(false);
  const initialVisibleCount = getInitialVisibleCount(section);
  const visibleItems = expanded ? section.items : section.items.slice(0, initialVisibleCount);
  const hiddenCount = section.items.length - initialVisibleCount;

  if (section.id === "nguoi-noi-tieng-noi-gi-ve-phap-luan-cong") {
    return <FamousSection section={section} />;
  }

  return (
    <div>
      <div className="grid gap-x-10 lg:grid-cols-2">
        {visibleItems.map((item, index) => (
          <SectionCard key={`${section.id}-${item.href}-${index}`} item={item} index={index} />
        ))}
      </div>
      <RevealButton hiddenCount={hiddenCount} expanded={expanded} onClick={() => setExpanded((value) => !value)} />
    </div>
  );
}

export default function HomepageSections() {
  return (
    <main id="sections" className="bg-white">
      {homepageSections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-slate-100 bg-white py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="max-w-3xl font-display text-2xl font-black leading-tight tracking-normal text-[#102A43] sm:text-3xl lg:text-4xl">
                {section.title}
              </h2>
            </motion.div>

            <SectionBody section={section} />
          </div>
        </section>
      ))}
    </main>
  );
}
