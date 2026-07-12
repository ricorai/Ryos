import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-brand-beige via-brand-beige to-white"
    >
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-slate leading-[0.94] mb-8"
        >
          AI that works<br />
          <span className="text-brand-slate/45">the way you do.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-brand-slate/50 max-w-md leading-relaxed mb-14"
        >
          A text file that teaches AI how you work. Paste it into any AI chat — it learns your style and responds the way you want. Instantly. No installation. Always free.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-20 w-full justify-center"
        >
          <button
            onClick={() => onScrollToSection("downloads")}
            id="hero-download-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-slate text-brand-beige font-semibold text-sm hover:bg-brand-slate/90 active:scale-[0.98] transition-all duration-150 shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Ryos</span>
          </button>
          
          <button
            onClick={() => onScrollToSection("what-is-ryos")}
            id="hero-learn-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-brand-slate/10 bg-white/60 hover:bg-white hover:border-brand-slate/20 text-brand-slate font-medium text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>What is Ryos?</span>
            <ArrowDown className="w-4 h-4 text-brand-slate/50" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
