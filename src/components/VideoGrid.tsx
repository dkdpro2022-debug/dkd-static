import React from "react";
import { ArrowUpRight, CirclePlay, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { featuredVideos } from "../data";
import { motion } from "motion/react";

export default function VideoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden border-b border-slate-100" id="stories">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              TUYỂN CHỌN TƯ LIỆU
            </span>
            <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-normal tracking-normal text-slate-950">
              Câu chuyện nổi bật
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <Button 
              variant="outline" 
              className="rounded-none bg-white border-slate-200 text-slate-800 font-bold hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-200 gap-2 flex items-center cursor-pointer shadow-none text-xs uppercase tracking-widest px-6 h-11"
            >
              Xem thêm câu chuyện
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* 4-Column Grid System */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {featuredVideos.map((item) => (
            <motion.a 
              key={item.title} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group block h-full cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-none group-hover:border-slate-400 transition-all duration-300 rounded-none group flex flex-col justify-between">
                <div>
                  {/* Thumbnail container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-150">
                    <img 
                      className="h-full w-full object-cover transition-transform duration-555 group-hover:scale-102" 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark inner shadow */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Label */}
                    <div className="absolute left-3 top-3 rounded-none bg-slate-950 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-none">
                      {item.category}
                    </div>

                    {/* Elegant custom play hover trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="bg-slate-950 rounded-none p-3.5 text-white shadow-lg transition-all duration-200">
                        <Play className="h-4 w-4 fill-white text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="font-display text-sm font-semibold leading-relaxed text-slate-900 group-hover:text-slate-950 transition-colors duration-200 line-clamp-3">
                      {item.title}
                    </h3>
                  </CardContent>
                </div>
                
                {/* Micro detail card footer linking */}
                <div className="mx-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-slate-950 transition-colors uppercase tracking-widest">
                  <span>Xem chi tiết</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-950 transition-transform" />
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
