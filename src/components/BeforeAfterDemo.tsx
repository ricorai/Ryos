import React, { useState } from "react";
import { motion } from "motion/react";
import { BEFORE_AFTER_EXAMPLES } from "../data/ryosData";
import { ArrowLeftRight, CheckCircle2, XCircle, User, Sparkles } from "lucide-react";

export default function BeforeAfterDemo() {
  const [activeExampleId, setActiveExampleId] = useState<string>(BEFORE_AFTER_EXAMPLES[0].id);

  const activeExample = BEFORE_AFTER_EXAMPLES.find((ex) => ex.id === activeExampleId)!;

  return (
    <section id="demo" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/45 font-semibold inline-block mb-4">
            See Ryos Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-5 leading-[1.1]">
            Same prompt.<br />
            <span className="text-brand-slate/65">Different outcome.</span>
          </h2>
          <p className="text-brand-slate/50 text-base leading-relaxed max-w-xl mx-auto">
            Same prompt. Same AI model. One response with Ryos, one without. Real examples — reproducible on your own machine.
          </p>
        </div>

        {/* Reproducibility context */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10">
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/30">Model: Claude 4</span>
          <span className="text-brand-slate/15 hidden sm:inline">·</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/30">Ryos: v8.2.1</span>
          <span className="text-brand-slate/15 hidden sm:inline">·</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/30">Fresh session</span>
          <span className="text-brand-slate/15 hidden sm:inline">·</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/30">No prior context</span>
        </div>

        {/* Example Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {BEFORE_AFTER_EXAMPLES.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveExampleId(example.id)}
              className={`px-5 py-2.5 rounded-full font-display text-sm font-semibold transition-all duration-150 cursor-pointer ${
                activeExampleId === example.id
                  ? "bg-brand-slate text-brand-beige shadow-md"
                  : "bg-white border border-brand-slate/8 text-brand-slate/55 hover:text-brand-slate hover:border-brand-slate/20"
              }`}
            >
              {example.id === "technical-spec" ? "Engineering" : "Product Strategy"}
            </button>
          ))}
        </div>

        {/* Scenario Context */}
        <motion.div
          key={activeExampleId + "-context"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white border border-brand-slate/8 rounded-2xl p-6 mb-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-3 mb-4">
            <User className="w-4 h-4 text-brand-slate/40 shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/40 block mb-1">User settings (from Ryos)</span>
              <p className="text-brand-slate/70 text-sm">{activeExample.userContext}</p>
            </div>
          </div>
          <div className="bg-brand-slate/4 border border-brand-slate/5 rounded-xl p-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/35 block mb-1.5">Prompt</span>
            <p className="text-brand-slate font-medium text-sm sm:text-base font-sans">
              {activeExample.prompt}
            </p>
          </div>
        </motion.div>

        {/* Side-by-side comparison */}
        <motion.div
          key={activeExampleId + "-comparison"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Without Ryos */}
          <div className="bg-white border border-red-200/40 rounded-2xl overflow-hidden">
            <div className="px-5 py-3.5 border-b border-red-100/60 bg-red-50/30 flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-400/70" />
              <span className="font-mono text-xs font-semibold text-red-500/70 uppercase tracking-wider">
                {activeExample.withoutRyos.label}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-brand-slate/80 text-sm leading-relaxed font-sans mb-5">
                {activeExample.withoutRyos.response}
              </p>
              <div className="border-t border-brand-slate/5 pt-4 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/35 block mb-1">Issues</span>
                {activeExample.withoutRyos.problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-brand-slate/50">
                    <span className="text-red-400/60 mt-0.5 shrink-0">—</span>
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* With Ryos */}
          <div className="bg-white border border-brand-slate/15 rounded-2xl overflow-hidden shadow-md relative">
            {/* Subtle indicator */}
            <div className="absolute top-3 right-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand-slate/30" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-slate/30 font-semibold">Ryos</span>
            </div>
            <div className="px-5 py-3.5 border-b border-brand-slate/6 bg-brand-slate/3 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-slate/50" />
              <span className="font-mono text-xs font-semibold text-brand-slate/60 uppercase tracking-wider">
                {activeExample.withRyos.label}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-brand-slate/85 text-sm leading-relaxed font-sans mb-5 whitespace-pre-line">
                {activeExample.withRyos.response}
              </p>
              <div className="border-t border-brand-slate/5 pt-4 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/35 block mb-1">Improvements</span>
                {activeExample.withRyos.improvements.map((improvement, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-brand-slate/55">
                    <CheckCircle2 className="w-3 h-3 text-brand-slate/40 shrink-0 mt-0.5" />
                    <span>{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verdict */}
        <motion.div
          key={activeExampleId + "-verdict"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-brand-slate/8 bg-white">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold">Verdict</span>
            <span className="text-brand-slate/15">|</span>
            <span className="text-brand-slate/65 text-sm font-sans">
              Same prompt. Same model. Only one thing changed: Ryos.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
