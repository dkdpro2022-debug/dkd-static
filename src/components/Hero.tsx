import React from "react";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "./ui/button";
import { heroText, homepageSections } from "../data";
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-20 flex items-center bg-white border-b border-slate-100">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/wp-content/uploads/2020/04/cover-1-1024x563.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.48)_54%,rgba(255,255,255,0.06)_74%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-5 py-16 lg:px-8">
        <motion.div 
          className="max-w-4xl flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display text-[clamp(2.35rem,3.6vw,4.5rem)] font-black leading-[1.14] tracking-normal text-[#102A43] mb-6 max-w-4xl"
          >
            Thư viện Điều Kỳ Diệu
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl mb-8"
          >
            {heroText}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button 
              asChild 
              size="lg" 
              className="h-12 rounded-none bg-slate-950 px-8 text-xs font-bold tracking-widest uppercase text-white hover:bg-slate-800 transition-colors duration-200 cursor-pointer shadow-none border-none"
            >
              <a href={`#${homepageSections[0]?.id ?? "sections"}`} onClick={(e) => handleScrollTo(homepageSections[0]?.id ?? "sections", e)}>
                <CirclePlay className="h-4 w-4 mr-2" />
                XEM VIDEO TIÊU BIỂU
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-12 rounded-none border-slate-250 bg-white px-8 text-xs font-bold tracking-widest uppercase text-slate-900 hover:bg-slate-50 transition-colors duration-200 cursor-pointer shadow-none"
            >
              <a href="#sections" onClick={(e) => handleScrollTo("sections", e)}>
                XEM TOÀN BỘ CHUYÊN MỤC
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
