import React, { useState } from "react";
import { RYOS_CORE_PROMPT, RYOS_CONFIG_TEMPLATE } from "../data/ryosData";
import { FileCode, Clipboard, Check, Download, Info } from "lucide-react";

export default function Downloads() {
  const [activeTab, setActiveTab] = useState<"core" | "template">("core");
  const [copied, setCopied] = useState(false);

  const activeContent = activeTab === "core" ? RYOS_CORE_PROMPT : RYOS_CONFIG_TEMPLATE;
  const activeFileName = activeTab === "core" ? "ryos-core.md" : "ryos-config-template.md";
  const activeTitle = activeTab === "core" ? "RyOS Core Prompt" : "Universal Config Template";

  // Function to copy text to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  // Function to offer file download directly to machine
  const handleDownloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([activeContent], { type: "text/markdown;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = activeFileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Generate line numbers for prettier rendering
  const lines = activeContent.split("\n");

  return (
    <section 
      id="downloads" 
      className="py-24 px-6 md:px-12 bg-white relative border-b border-brand-slate/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold inline-block mb-3">
            Source Code & Templates
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate mb-4">
            Download Core Specifications
          </h2>
          <p className="text-brand-slate/75 text-base sm:text-lg">
            No registration. Simply select the asset tab below to inspect, copy, or download directly to your local workspace.
          </p>
        </div>

        {/* Dual Tab Controller */}
        <div className="bg-[#FAF9F6] border border-brand-slate/10 rounded-2xl overflow-hidden premium-shadow">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 bg-brand-beige border-b border-brand-slate/8 gap-4">
            
            {/* Tabs Trigger list */}
            <div className="flex bg-brand-slate/5 p-1 rounded-lg self-start">
              <button
                onClick={() => {
                  setActiveTab("core");
                  setCopied(false);
                }}
                className={`px-4 py-2 rounded-md font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "core"
                    ? "bg-white text-brand-slate shadow-xs"
                    : "text-brand-slate/60 hover:text-brand-slate"
                }`}
              >
                1. RyOS Core Prompts ({lines.length} lines)
              </button>
              <button
                onClick={() => {
                  setActiveTab("template");
                  setCopied(false);
                }}
                className={`px-4 py-2 rounded-md font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "template"
                    ? "bg-white text-brand-slate shadow-xs"
                    : "text-brand-slate/60 hover:text-brand-slate"
                }`}
              >
                2. Config Template
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopy}
                id="copy-to-clipboard-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-brand-slate/10 hover:border-brand-slate/30 text-brand-slate text-xs font-semibold shadow-xs cursor-pointer active:scale-98 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 animate-scale-up" /> : <Clipboard className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Raw Text"}</span>
              </button>

              <button
                onClick={handleDownloadFile}
                id="download-file-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-slate text-brand-beige text-xs font-semibold hover:bg-brand-slate/90 shadow-xs cursor-pointer active:scale-98 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .MD</span>
              </button>
            </div>

          </div>

          {/* Interactive Code Viewer layout */}
          <div className="relative font-mono text-[11px] sm:text-xs">
            <div className="max-h-[480px] overflow-y-auto overflow-x-auto p-4 sm:p-6 bg-brand-slate text-brand-beige/95 leading-relaxed flex">
              
              {/* Line numbers column */}
              <div className="select-none text-brand-beige/25 text-right pr-4 border-r border-[#FAF9F6]/10 shrink-0 select-none">
                {lines.map((_, i) => (
                  <div key={i} className="h-5">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code text lines block */}
              <pre className="pl-4 whitespace-pre select-all text-left">
                {lines.map((line, i) => {
                  // Basic regex highlighting representation for markdown UI polish
                  const isComment = line.trim().startsWith("#");
                  return (
                    <div 
                      key={i} 
                      className={`h-5 ${isComment ? "text-amber-300/60 italic" : "text-brand-beige"}`}
                    >
                      {line}
                    </div>
                  );
                })}
              </pre>

            </div>
          </div>
        </div>

        {/* Informative instructions block */}
        <div className="mt-8 flex items-start gap-3 p-4 sm:p-5 bg-indigo-50/50 border border-indigo-100 rounded-xl">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-brand-slate/85 font-sans leading-relaxed">
            <span className="font-bold text-indigo-900 block mb-1">Applying the stack:</span>
            Pasting both items together into Claude's "Custom Instructions", ChatGPT's "Custom Instructions", or as a permanent system prompt in the Gemini API platform immediately activates the RyOS schema context.
          </div>
        </div>

      </div>
    </section>
  );
}
