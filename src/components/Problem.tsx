import React, { useState } from "react";
import { motion } from "motion/react";
import { PAIN_POINTS } from "../data/ryosData";
import { HelpCircle, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function Problem() {
  const [activeCardId, setActiveCardId] = useState<string | null>("forgetful");

  return (
    <section id="problem" className="py-28 px-6 md:px-12 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-18">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-wider text-brand-slate/45 font-semibold inline-block mb-4"
          >
            Why Ryos Exists
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-5 leading-[1.1]"
          >
            Powerful models.<br />
            <span className="text-brand-slate/65">Persistent friction.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-slate/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto"
          >
            Modern LLMs are remarkably capable. But standard chat interactions fall into the same failure patterns — regardless of which model you use.
          </motion.p>
        </div>

        {/* Layout: Sidebar list + Detail Viewer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation List */}
          <div className="md:col-span-5 space-y-3">
            {PAIN_POINTS.map((point) => {
              const isActive = activeCardId === point.id;
              return (
                <div key={point.id}>
                  <button
                    onClick={() => setActiveCardId(isActive ? null : point.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-brand-slate border-brand-slate text-brand-beige shadow-md"
                        : "bg-white border-brand-slate/5 hover:bg-brand-beige/80 text-brand-slate"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-4 h-4 shrink-0 ${isActive ? "text-brand-beige/60" : "text-brand-slate/35"}`} />
                        <span className="font-display font-semibold text-sm sm:text-base leading-tight">
                          {point.title}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                        isActive ? "rotate-90 text-brand-beige" : "text-brand-slate/30"
                      }`} />
                    </div>

                    {/* Mobile expanded content */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-white/10 md:hidden text-xs space-y-3 block text-brand-beige/90">
                        <p>{point.symptom}</p>
                        <div className="bg-white/10 p-2.5 rounded-lg text-brand-beige/60">
                          <span className="font-bold">Failure Type:</span> {point.failureMode}
                        </div>
                        <div className="bg-white/8 p-2.5 rounded-lg border border-white/10 text-white font-sans">
                          <span className="font-bold text-brand-beige/80 block mb-1">How Ryos solves this:</span>
                          {point.solution}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Detail View */}
          <div className="hidden md:block md:col-span-7 h-full">
            <div className="border border-brand-slate/10 bg-white rounded-2xl p-8 min-h-[360px] flex flex-col justify-between relative overflow-hidden shadow-sm">
              {activeCardId ? (
                (() => {
                  const currentPoint = PAIN_POINTS.find(p => p.id === activeCardId)!;
                  return (
                    <div className="h-full flex flex-col justify-between space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-slate/5 text-brand-slate/50 text-[11px] font-mono font-semibold uppercase mb-4">
                          <span>{currentPoint.failureMode}</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold tracking-tight text-brand-slate mb-3">
                          {currentPoint.title}
                        </h3>
                        
                        <p className="text-brand-slate/65 text-sm sm:text-base leading-relaxed font-sans mb-6">
                          {currentPoint.symptom}
                        </p>
                      </div>

                      <div className="border-t border-brand-slate/6 pt-6">
                        <div className="flex items-start gap-3 bg-[#FAF9F6] p-5 rounded-xl border border-brand-slate/6">
                          <CheckCircle2 className="w-5 h-5 text-brand-slate/40 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-display font-bold text-brand-slate/65 text-sm block mb-1">
                              How Ryos solves this
                            </span>
                            <span className="text-brand-slate/65 text-sm leading-relaxed block font-sans">
                              {currentPoint.solution}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="h-full flex flex-col justify-center items-center text-center text-brand-slate/35 py-12">
                  <Sparkles className="w-8 h-8 mb-3" />
                  <p className="text-sm">Select a friction point to see how Ryos addresses it.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
