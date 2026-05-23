import React, { useState } from "react";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { navItems } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a className="flex items-center gap-3 group" href="#top" aria-label="Điều Kỳ Diệu" onClick={() => scrollToSection("top")}>
            <div className="relative overflow-hidden rounded-full p-0.5 transition duration-300 group-hover:scale-105">
              <img className="h-11 w-11 object-contain" src="/wp-content/uploads/2020/02/logo-140-e1581310697140.png" alt="Điều Kỳ Diệu" />
            </div>
            <div className="leading-tight text-slate-900 block">
              <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:text-slate-600 transition-colors duration-200">
                Pháp Luân Đại Pháp Hảo
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-slate-400">
                Chân Thiện Nhẫn Hảo
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950 relative cursor-pointer py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-slate-950 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:bg-slate-50 hover:text-slate-950 cursor-pointer h-10 w-10 p-0 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            {/* Hamburger Button for Mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:bg-slate-50 hover:text-slate-950 lg:hidden cursor-pointer h-10 w-10 p-0 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-xs lg:hidden"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-40 w-full max-w-[320px] bg-white p-6 border-l border-slate-100 shadow-2xl lg:hidden flex flex-col justify-between"
            >
              <div className="pt-20">
                <div className="flex items-center gap-2 mb-8 px-3 py-1.5 rounded-none bg-slate-50 border border-slate-100">
                  <Sparkles className="h-3.5 w-3.5 text-slate-800" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800">MENU</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-slate-950 py-2.5 px-2 rounded-none hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <div className="font-display text-xs font-bold uppercase tracking-wider text-slate-950 mb-1">Điều Kỳ Diệu</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Lưu giữ các câu chuyện, video và góc nhìn chân thực về Pháp Luân Công.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
