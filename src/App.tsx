import React from "react";
import { BookOpen, Film, Globe2 } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoFeature from "./components/VideoFeature";
import VideoGrid from "./components/VideoGrid";
import StoryEditorial from "./components/StoryEditorial";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      <Header />
      <Hero />
      
      {/* Dynamic Key Pillars Section: Clean Minimalism Architectural Grid */}
      <section className="bg-slate-50 border-y border-slate-100 py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-8 md:grid-cols-3 md:divide-x md:divide-slate-200">
          {[
            { num: "01", title: "Video chọn lọc", text: "Tập trung vào nội dung chân thực, mang bối cảnh sâu sắc có giá trị lâu dài." },
            { num: "02", title: "Câu chuyện thật", text: "Lưu giữ nguyên bản tinh thần và hành trình chuyển hóa tự thân kỳ diệu." },
            { num: "03", title: "Góc nhìn thế giới", text: "Mở rộng bối cảnh, ghi nhận tiếng nói khách quan từ Việt Nam và quốc tế." },
          ].map((pillar, idx) => {
            return (
              <motion.div 
                key={pillar.title} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col justify-center ${idx > 0 ? 'md:pl-12' : 'md:pr-12'}`}
              >
                <div className="text-2xl font-semibold mb-2 text-slate-800 font-display">{pillar.num}</div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Main Structural Modules */}
      <VideoFeature />
      <VideoGrid />
      <StoryEditorial />
      <Quotes />
      <Footer />
    </div>
  );
}
