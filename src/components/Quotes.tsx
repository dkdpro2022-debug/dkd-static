import React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { quotes } from "../data";
import { motion } from "motion/react";

export default function Quotes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="testimonials" className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex justify-center items-center mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              CẢM NHẬN & CHIA SẺ
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl font-normal tracking-normal text-slate-950"
          >
            Tiếng nói chân thực về Pháp Luân Công
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-sm text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Chia sẻ chân thành từ những nghệ sĩ, chuyên gia uy tín và những người mong muốn truyền tải giá trị đạo đức cao đẹp đến đời sống.
          </motion.p>
        </div>

        {/* Quotes Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {quotes.map((quote) => (
            <motion.div
              key={quote.name}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full border-slate-200 bg-white shadow-none relative overflow-hidden group hover:border-slate-400 transition-all duration-300 rounded-none flex flex-col justify-between">
                <CardContent className="p-8 sm:p-10 flex flex-col justify-between h-full">
                  {/* Quote Body text */}
                  <blockquote className="text-[15px] sm:text-base font-normal leading-8 text-slate-700 relative mb-10">
                    “{quote.text}”
                  </blockquote>
                  
                  {/* Profile section with top separator */}
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <div className="relative">
                      <img 
                        className="h-12 w-12 rounded-full object-cover border border-slate-200 transition-colors duration-300" 
                        src={quote.avatar} 
                        alt={quote.name} 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div>
                      <cite className="font-display text-sm font-semibold text-slate-950 not-italic block">{quote.name}</cite>
                      <span className="text-xs text-slate-500 block mt-0.5">{quote.role}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
