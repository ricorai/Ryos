import React from "react";
import { Download, FileText, ClipboardCopy, MessageSquare } from "lucide-react";

interface HowItWorksProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HowItWorks({ onScrollToSection }: HowItWorksProps) {
  const steps = [
    {
      icon: <Download className="w-5 h-5 text-brand-slate/55" />,
      title: "1. Obtain Ryos Core",
      description: "Grab the core specification holding alignment laws and cognitive governance rules. Select copying or save direct.",
      actionText: "Go to Core",
      targetId: "downloads"
    },
    {
      icon: <FileText className="w-5 h-5 text-brand-slate/55" />,
      title: "2. Load the Template",
      description: "Download the simple YAML/Markdown template mapping out your preferences, context patterns, and boundary parameters.",
      actionText: "Go to Template",
      targetId: "downloads"
    },
    {
      icon: <ClipboardCopy className="w-5 h-5 text-brand-slate/55" />,
      title: "3. Stack with Your Chat",
      description: "Copy both text blocks and paste them directly into the Custom Instructions, System Prompt, or initial prompt of your preferred LLM.",
      actionText: "View Pipeline",
      targetId: "pipeline"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-brand-slate/55" />,
      title: "4. Request \"Help me build...\"",
      description: "Prompt the AI: 'Help me build my Ryos configuration'. The model will interview you to construct your personalized workflow parameters.",
      actionText: "Try Experiment",
      targetId: "interactive-demo"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-b border-brand-slate/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold inline-block mb-3">
            Workflow Integration
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate mb-4">
            Four Steps to Zero Friction
          </h2>
          <p className="text-brand-slate/75 text-base sm:text-lg">
            Ryos acts as a direct, text-based software layer. No extensions to install, no API keys to verify, and absolutely zero subscriptions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-6 border border-brand-slate/6 transition-all duration-250 hover:shadow-lg relative flex flex-col justify-between"
            >
              <div>
                {/* Visual Step Badge */}
                <div className="w-10 h-10 rounded-xl bg-brand-slate/5 border border-brand-slate/8 flex items-center justify-center mb-6 py-0.5 font-semibold">
                  {step.icon}
                </div>

                <h3 className="font-display font-bold text-brand-slate text-base sm:text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-brand-slate/70 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onScrollToSection(step.targetId)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-slate/55 hover:text-brand-slate transition-colors uppercase tracking-wider cursor-pointer mt-auto"
                >
                  <span>{step.actionText}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Callback Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 sm:p-6 bg-white/70 border border-brand-slate/5 rounded-2xl max-w-2xl mx-auto">
            <span className="text-brand-slate italic text-sm font-sans block">
              "The AI conducts a short, highly-focused interview, helping you extract variables about how you work best. No technical skill required."
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
