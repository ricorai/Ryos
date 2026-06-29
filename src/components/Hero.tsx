import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Code, ClipboardCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-brand-beige to-white"
    >
      {/* Soft atmospheric gradient behind */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Subtle Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-slate/10 bg-brand-slate/5 text-brand-slate mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-xs font-mono tracking-tight font-medium uppercase">V8.2 Core Specification</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-slate max-w-3xl leading-[1.08] mb-6"
        >
          Work better with AI.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-brand-slate/70 max-w-2xl leading-relaxed mb-4"
        >
          Ryos is a cognitive calibration layer. It helps models understand your preferences, context, and reasoning style automatically—without custom software or custom codebases.
        </motion.p>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm font-mono tracking-wider uppercase text-brand-slate/55 mb-10 block"
        >
          Less friction. More understanding.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-20 w-full justify-center"
        >
          <button
            onClick={() => onScrollToSection("downloads")}
            id="hero-download-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-slate text-brand-beige font-semibold text-sm hover:opacity-90 active:scale-98 transition-all duration-150 shadow-md cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>Download Core & Config</span>
          </button>
          
          <button
            onClick={() => onScrollToSection("problem")}
            id="hero-learn-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-brand-slate/10 bg-white/50 hover:bg-white hover:border-brand-slate/20 text-brand-slate font-medium text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>See How It Works</span>
            <ArrowDown className="w-4 h-4 text-brand-slate/75" />
          </button>
        </motion.div>

        {/* Minimal High-fidelity Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl rounded-2xl border border-brand-slate/10 bg-white/70 backdrop-blur-sm shadow-xl p-5 sm:p-7 relative select-none md:mb-10 text-left"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-brand-slate/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
            <div className="h-4 w-px bg-brand-slate/10 mx-2" />
            <span className="font-mono text-[10px] sm:text-xs text-brand-slate/40">system_calibration.ryos</span>
          </div>
          
          <div className="space-y-4 font-mono text-[11px] sm:text-sm text-brand-slate/85">
            <div className="flex gap-4">
              <span className="text-brand-slate/30 shrink-0">01</span>
              <span><span className="text-emerald-700"># Loaded:</span> Ryos Core Specification v8.2</span>
            </div>
            <div className="flex gap-4">
              <span className="text-brand-slate/30 shrink-0">02</span>
              <span><span className="text-emerald-700"># Personalized Calibration:</span> config.ryos applied successfully.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-brand-slate/30 shrink-0">03</span>
              <span>&gt; Calibrating response density: <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold">HIGH-CONCISE</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-brand-slate/30 shrink-0">04</span>
              <span>&gt; Core operating rule loaded: <span className="text-indigo-600 font-semibold italic">\"Recognize, verify, don't attach, act clean.\"</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
