import React from "react";
import { motion } from "motion/react";
import { Download, Monitor, ClipboardPaste, MessageCircle, ArrowRight } from "lucide-react";

interface HowToUseProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HowToUse({ onScrollToSection }: HowToUseProps) {
  const steps = [
    {
      number: "1",
      icon: <Download className="w-5 h-5" />,
      title: "Download Ryos",
      description: "Get the text file. It contains the instructions your AI will follow.",
      action: "Get the file",
      target: "downloads"
    },
    {
      number: "2",
      icon: <Monitor className="w-5 h-5" />,
      title: "Open your AI",
      description: "Open ChatGPT, Claude, Gemini, or any AI tool you use. Find where it accepts custom instructions or a system prompt.",
      action: null,
      target: null
    },
    {
      number: "3",
      icon: <ClipboardPaste className="w-5 h-5" />,
      title: "Paste Ryos",
      description: "Copy the text and paste it in. The AI will ask you a few friendly questions to learn how you work best. Answer them — or skip and do it later.",
      action: null,
      target: null
    },
    {
      number: "4",
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Start chatting",
      description: "That's it. Every conversation now starts with your preferences loaded. No re-explaining. Just the work.",
      action: "See it in action",
      target: "demo"
    }
  ];

  return (
    <section id="how-to-use" className="py-32 px-6 md:px-12 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold inline-block mb-4"
          >
            How to Use Ryos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-5 leading-[1.1]"
          >
            Four simple steps.<br />
            <span className="text-brand-slate/50">No technical skill needed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-slate/50 text-base leading-relaxed max-w-lg mx-auto"
          >
            If you know how to copy and paste, you know how to use Ryos.
          </motion.p>
        </div>

        {/* Vertical steps */}
        <div className="relative max-w-2xl mx-auto">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-brand-slate/6" />

          <div className="space-y-1">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="relative flex gap-6 items-start py-6"
              >
                <div className="hidden md:flex relative z-10 w-16 shrink-0 justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-slate/10 flex items-center justify-center font-mono text-sm font-bold text-brand-slate/35">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl p-6 border border-brand-slate/6">
                  <span className="md:hidden font-mono text-xs text-brand-slate/30 font-semibold uppercase tracking-widest block mb-2">
                    Step {step.number}
                  </span>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-slate/4 border border-brand-slate/8 flex items-center justify-center text-brand-slate/45">
                      {step.icon}
                    </div>
                    <h3 className="font-display font-bold text-brand-slate text-base">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-brand-slate/45 text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>

                  {step.action && step.target && (
                    <button
                      onClick={() => onScrollToSection(step.target)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-slate/40 hover:text-brand-slate/70 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      <span>{step.action}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
