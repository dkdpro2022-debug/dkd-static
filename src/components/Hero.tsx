import React from "react";
import { CirclePlay } from "lucide-react";
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
    <section id="top" className="relative flex min-h-[60svh] items-start overflow-hidden border-b border-slate-100 bg-white pt-16 sm:min-h-[90svh] sm:items-center sm:pt-18 lg:min-h-[100svh] lg:pt-20">
      <img
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
        src="/wp-content/uploads/2020/04/cover-1-1024x563.jpg"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.93)_42%,rgba(255,255,255,0.56)_65%,rgba(255,255,255,0.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.48)_54%,rgba(255,255,255,0.06)_74%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent sm:h-28" />

      <div className="relative mx-5 w-auto max-w-7xl pb-12 pt-28 sm:mx-auto sm:w-full sm:px-5 sm:py-14 lg:px-8 lg:py-16">
        <motion.div 
          className="flex max-w-4xl flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="mb-5 max-w-[11ch] font-display text-[2.45rem] font-black leading-[1.08] tracking-normal text-[#102A43] sm:mb-6 sm:max-w-4xl sm:text-[clamp(2.75rem,3.6vw,4.5rem)] sm:leading-[1.14]"
          >
            Thư viện Điều Kỳ Diệu
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mb-7 max-w-[32rem] text-[0.95rem] leading-7 text-slate-600 sm:mb-8 sm:max-w-2xl sm:text-base sm:leading-relaxed"
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
              className="h-11 w-full rounded-none border-none !bg-[#020617] px-6 text-[0.7rem] font-bold uppercase tracking-[0.14em] !text-white shadow-none transition-colors duration-200 hover:!bg-[#1e293b] sm:h-12 sm:w-auto sm:px-8 sm:text-xs sm:tracking-widest"
            >
              <a href={`#${homepageSections[0]?.id ?? "sections"}`} onClick={(e) => handleScrollTo(homepageSections[0]?.id ?? "sections", e)}>
                <CirclePlay className="h-4 w-4 mr-2" />
                XEM VIDEO TIÊU BIỂU
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
