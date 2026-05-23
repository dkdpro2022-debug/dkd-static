import React from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

export default function VideoFeature() {
  return (
    <section id="watch" className="bg-white py-24 sm:py-32 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              VIDEO TIÊU BIỂU
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-medium tracking-normal text-slate-950 leading-[1.15] max-w-xl">
              Nội dung kể bằng hình ảnh, nhịp thở và sự tĩnh tại.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base leading-relaxed text-slate-500 max-w-xl md:pb-2"
          >
            Giao diện trực quan đặt nội dung hình ảnh lên trước, giảm bớt chi tiết gây xao nhãng thị giác, giúp độc giả trải nghiệm một dòng chảy tư tưởng thanh bình, sâu sắc nhất.
          </motion.p>
        </div>

        {/* Premium Media Framing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group rounded-none overflow-hidden border border-slate-200 bg-slate-950 shadow-xs md:aspect-video w-full"
        >
          {/* Inner ambient video overlay */}
          <video
            className="w-full h-full object-cover sm:object-contain min-h-[240px] md:min-h-[480px] bg-slate-950 block"
            controls
            preload="metadata"
            poster="/wp-content/uploads/2020/04/gioi-thieu-phap-luan-cong-2-1.jpg"
            src="https://media.dieukydieu.tv/videos/original/gioi-thieu-phap-luan-cong.mp4"
          />
        </motion.div>
      </div>
    </section>
  );
}
