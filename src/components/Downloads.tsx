import React, { useState } from "react";
import { motion } from "motion/react";
import { RYOS_CORE_PROMPT, RYOS_CONFIG_TEMPLATE } from "../data/ryosData";
import { FileCode, Clipboard, Check, Download, Info, ArrowRight, Sparkles } from "lucide-react";

export default function Downloads() {
  const [activeTab, setActiveTab] = useState<"core" | "config" | "both">("core");
  const [copied, setCopied] = useState(false);

  const activeContent = activeTab === "core" 
    ? RYOS_CORE_PROMPT 
    : activeTab === "config" 
      ? RYOS_CONFIG_TEMPLATE 
      : RYOS_CORE_PROMPT + "\n\n" + RYOS_CONFIG_TEMPLATE;
      
  const activeFileName = activeTab === "core" 
    ? "ryos-core.md" 
    : activeTab === "config" 
      ? "ryos-config.md" 
      : "ryos.md";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  const handleDownloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([activeContent], { type: "text/markdown;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = activeFileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const lines = activeContent.split("\n");

  return (
    <section 
      id="downloads" 
      className="py-32 px-6 md:px-12 bg-[#FAF9F6] relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold inline-block mb-4"
          >
            Download Ryos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-5 leading-[1.1]"
          >
            One file.<br />
            <span className="text-brand-slate/50">Everything starts here.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-slate/45 text-base leading-relaxed max-w-lg mx-auto"
          >
            Ryos is a single text file with two sections. The Core stays constant — it teaches the AI how to collaborate. Your Config is personal — it teaches the AI about you. Config is optional. Ryos works either way.
          </motion.p>
        </div>

        {/* Quick Start — one file, two functions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white border border-brand-slate/10 rounded-2xl p-6 sm:p-8 mb-10"
        >
          <div className="flex items-start gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-brand-slate/5 border border-brand-slate/8 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-brand-slate/50" />
            </div>
            <div>
              <h3 className="font-display font-bold text-brand-slate text-lg mb-1">How it works</h3>
              <p className="text-brand-slate/50 text-sm leading-relaxed">
                Download the file. Paste it into your AI's custom instructions. If your Config section is empty, the AI will offer a short onboarding interview — answer the questions or skip them. Ryos works immediately either way.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setActiveTab("core")}
              className="flex items-center gap-3 p-4 rounded-xl border border-brand-slate/8 bg-[#FAF9F6] hover:bg-white hover:border-brand-slate/15 transition-all text-left group cursor-pointer"
            >
              <FileCode className="w-5 h-5 text-brand-slate/40 group-hover:text-brand-slate/60 shrink-0" />
              <div>
                <span className="font-display font-semibold text-sm text-brand-slate block">Core</span>
                <span className="text-xs text-brand-slate/45">Instructions your AI follows</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-slate/25 group-hover:text-brand-slate/45 ml-auto shrink-0" />
            </button>
            <button
              onClick={() => setActiveTab("config")}
              className="flex items-center gap-3 p-4 rounded-xl border border-brand-slate/8 bg-[#FAF9F6] hover:bg-white hover:border-brand-slate/15 transition-all text-left group cursor-pointer"
            >
              <FileCode className="w-5 h-5 text-brand-slate/40 group-hover:text-brand-slate/60 shrink-0" />
              <div>
                <span className="font-display font-semibold text-sm text-brand-slate block">Config</span>
                <span className="text-xs text-brand-slate/45">Personal preferences (optional)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-slate/25 group-hover:text-brand-slate/45 ml-auto shrink-0" />
            </button>
            <button
              onClick={() => setActiveTab("both")}
              className="flex items-center gap-3 p-4 rounded-xl border border-brand-slate/8 bg-[#FAF9F6] hover:bg-white hover:border-brand-slate/15 transition-all text-left group cursor-pointer"
            >
              <FileCode className="w-5 h-5 text-brand-slate/40 group-hover:text-brand-slate/60 shrink-0" />
              <div>
                <span className="font-display font-semibold text-sm text-brand-slate block">Core + Config</span>
                <span className="text-xs text-brand-slate/45">The complete file</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-slate/25 group-hover:text-brand-slate/45 ml-auto shrink-0" />
            </button>
          </div>
        </motion.div>

        {/* Code Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-brand-slate/10 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 bg-[#FAF9F6] border-b border-brand-slate/6 gap-4">
            <div className="flex bg-brand-slate/4 p-1 rounded-lg self-start">
              <button
                onClick={() => { setActiveTab("core"); setCopied(false); }}
                className={`px-4 py-2 rounded-md font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "core"
                    ? "bg-white text-brand-slate shadow-xs"
                    : "text-brand-slate/50 hover:text-brand-slate/70"
                }`}
              >
                Core
              </button>
              <button
                onClick={() => { setActiveTab("config"); setCopied(false); }}
                className={`px-4 py-2 rounded-md font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "config"
                    ? "bg-white text-brand-slate shadow-xs"
                    : "text-brand-slate/50 hover:text-brand-slate/70"
                }`}
              >
                Config
              </button>
              <button
                onClick={() => { setActiveTab("both"); setCopied(false); }}
                className={`px-4 py-2 rounded-md font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "both"
                    ? "bg-white text-brand-slate shadow-xs"
                    : "text-brand-slate/50 hover:text-brand-slate/70"
                }`}
              >
                Core + Config
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopy}
                id="copy-to-clipboard-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-brand-slate/10 hover:border-brand-slate/30 text-brand-slate text-xs font-semibold shadow-xs cursor-pointer active:scale-[0.98] transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-slate/60" /> : <Clipboard className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
              <button
                onClick={handleDownloadFile}
                id="download-file-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-slate text-brand-beige text-xs font-semibold hover:bg-brand-slate/90 shadow-xs cursor-pointer active:scale-[0.98] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .md</span>
              </button>
            </div>
          </div>

          {/* Code Display */}
          <div className="relative font-mono text-[11px] sm:text-xs">
            <div className="max-h-[480px] overflow-y-auto overflow-x-auto p-4 sm:p-6 bg-brand-slate text-brand-beige/95 leading-relaxed flex">
              <div className="select-none text-brand-beige/25 text-right pr-4 border-r border-brand-beige/8 shrink-0">
                {lines.map((_, i) => (
                  <div key={i} className="h-5">{i + 1}</div>
                ))}
              </div>
              <pre className="pl-4 whitespace-pre select-all text-left">
                {lines.map((line, i) => {
                  const isComment = line.trim().startsWith("#");
                  return (
                    <div 
                      key={i} 
                      className={`h-5 ${isComment ? "text-amber-300/55 italic" : "text-brand-beige/90"}`}
                    >
                      {line}
                    </div>
                  );
                })}
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Usage instructions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex items-start gap-3 p-5 bg-white border border-brand-slate/8 rounded-xl"
        >
          <Info className="w-5 h-5 text-brand-slate/40 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-brand-slate/65 font-sans leading-relaxed">
            <span className="font-bold text-brand-slate/70 block mb-1">How to use this file:</span>
            Download and paste into your AI's custom instructions. That's it. If your Config is empty, the AI will offer to help you fill it in. You can skip that and come back anytime.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
