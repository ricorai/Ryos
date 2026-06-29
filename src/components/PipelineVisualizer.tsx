import React from "react";
import { User, Settings, ShieldCheck, Cpu, CheckCircle } from "lucide-react";

export default function PipelineVisualizer() {
  const steps = [
    {
      icon: <User className="w-5 h-5" />,
      title: "Human",
      desc: "Source of raw intent and ultimate authority.",
      color: "bg-orange-500/10 text-orange-700 border-orange-500/20"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Universal Config",
      desc: "Captures your timezone, priorities, and workflow limits.",
      color: "bg-blue-500/10 text-blue-700 border-blue-500/20"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Ryos Core",
      desc: "Enforces reality checks and anti-assumption protocols.",
      color: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Target LLM",
      desc: "Runs clean, un-hedged reasoning aligned with truth.",
      color: "bg-purple-500/10 text-purple-700 border-purple-500/20"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Grounded Flow",
      desc: "Consistent, repeatable, and low-friction output.",
      color: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
    }
  ];

  return (
    <section id="pipeline" className="py-24 px-6 md:px-12 bg-brand-beige/20 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-brand-slate/5" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold inline-block mb-3">
            Structure Over Hype
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate mb-4">
            How Ryos Context-Bridges Your Intent
          </h2>
          <p className="text-brand-slate/75 text-base sm:text-lg">
            Instead of building custom software wrappers that lock you into one provider, Ryos works natively within your tool of choice.
          </p>
        </div>

        {/* Visual Pipeline Layout */}
        <div className="relative">
          {/* Connecting arrow/line background for desktop */}
          <div className="hidden lg:block absolute top-[43px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-orange-400 via-indigo-400 to-emerald-400 opacity-20 -z-10 animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-brand-slate/8 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Visual Connector details for mobile */}
                {idx > 0 && (
                  <div className="lg:hidden h-8 w-px bg-brand-slate/15 my-3 flex items-center justify-center">
                    <span className="text-[10px] text-brand-slate/40 font-mono">↓</span>
                  </div>
                )}

                {/* Step Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${step.color} mb-4 relative`}>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-slate text-brand-beige font-mono text-[10px] font-bold flex items-center justify-center border border-white">
                    {idx + 1}
                  </div>
                  {step.icon}
                </div>

                {/* Step Details */}
                <h3 className="font-display font-semibold text-brand-slate text-base mb-1.5">
                  {step.title}
                </h3>
                <p className="text-brand-slate/65 text-xs xs:text-sm font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
