import React from "react";
import { motion } from "motion/react";
import { FileText, ShieldCheck, UserCheck } from "lucide-react";
import backgroundVideo from "@/assets/video/background.mp4";

export default function WhatIsRyos() {
  return (
    <section id="what-is-ryos" className="relative overflow-hidden">
      {/* Video header zone */}
      <div className="relative py-40 px-6 md:px-12 flex items-center justify-center min-h-[70vh]">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-brand-slate/60" />

        {/* Header content over video */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm uppercase tracking-wider text-brand-beige/70 font-semibold inline-block mb-5"
          >
            What Ryos Is
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-2xl mx-auto"
          >
            Not an app. Not a chatbot.<br />
            <span className="text-brand-beige/70">A text file that teaches AI how you work.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-beige/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Ryos is a single text file. You paste it into ChatGPT, Claude, Gemini, or any AI tool. It gives the AI clear instructions about how you think, how you communicate, and what you need. That's it.
          </motion.p>
        </div>
      </div>

      {/* Cards section — white background continues */}
      <div className="bg-[#FAF9F6] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center p-8 rounded-2xl border border-brand-slate/5 bg-[#FAF9F6]"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-slate/5 border border-brand-slate/8 flex items-center justify-center mx-auto mb-5 text-brand-slate/45">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-brand-slate text-base mb-2.5">One file. Any AI.</h3>
            <p className="text-brand-slate/45 text-sm leading-relaxed font-sans">
              Works with ChatGPT, Claude, Gemini, and any AI tool that accepts custom instructions. You own the file. No lock-in.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-center p-8 rounded-2xl border border-brand-slate/5 bg-[#FAF9F6]"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-slate/5 border border-brand-slate/8 flex items-center justify-center mx-auto mb-5 text-brand-slate/45">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-brand-slate text-base mb-2.5">Free. Open. Forever.</h3>
            <p className="text-brand-slate/45 text-sm leading-relaxed font-sans">
              No subscriptions. No accounts. No payments. Ryos is an open research project — built transparently, available to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.29 }}
            className="text-center p-8 rounded-2xl border border-brand-slate/5 bg-[#FAF9F6]"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-slate/5 border border-brand-slate/8 flex items-center justify-center mx-auto mb-5 text-brand-slate/45">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-brand-slate text-base mb-2.5">You stay in control.</h3>
            <p className="text-brand-slate/45 text-sm leading-relaxed font-sans">
              The AI adapts to your communication style, your priorities, and your way of thinking. Not the other way around.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center px-6 py-3 rounded-full border border-brand-slate/6 bg-brand-slate/2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/35">Not an AI model, not a startup, not a chatbot wrapper — open research.</span>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
