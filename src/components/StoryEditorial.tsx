import React from "react";
import { Card, CardContent } from "./ui/card";
import { storyCards } from "../data";
import { motion } from "motion/react";

export default function StoryEditorial() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="bg-white py-24 sm:py-32 text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              NHỮNG CÂU CHUYỆN THẦN KỲ
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-normal leading-[1.15] text-slate-950">
              Thư viện truyền cảm hứng, <br />
              khơi mở nhân tâm.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-500 max-w-lg">
              Mỗi nội dung được đặt trong bố cục có nhịp nghỉ, hình ảnh lớn và văn bản rõ ràng để độc giả có thể đi sâu, chiêm nghiệm và tìm thấy sự bình lặng thực sự thay vì chỉ lướt qua một cách vội vã.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {storyCards.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group h-full"
              >
                <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-none rounded-none group transition-all duration-300 hover:border-slate-400 flex flex-col justify-between">
                  <div>
                    {/* Image card wrapper */}
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                      <img 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102" 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-40" />
                    </div>

                    <CardContent className="p-5">
                      <h3 className="font-display text-sm font-semibold leading-relaxed text-slate-900 group-hover:text-slate-950 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {item.text}
                      </p>
                    </CardContent>
                  </div>

                  <div className="mx-5 py-4 border-t border-slate-100 text-[11px] font-bold text-slate-400 group-hover:text-slate-950 transition-colors uppercase tracking-widest flex items-center gap-1.5 matches-footer">
                    <span>Đọc câu chuyện</span>
                    <span>→</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
