import React from "react";
import { Compass, Lightbulb, Target, Clock, Calendar } from "lucide-react";

export default function PhilosophyFuture() {
  const corePrinciples = [
    {
      title: "Recognize → Don't Attach → Act Clean",
      desc: "Observe facts objectively. Do not construct mental cages around early guesses. Move with clarity once hypotheses carry weight."
    },
    {
      title: "Reality Gets the Final Say",
      desc: "Systems are calibrated against real measurements, not hypothetical layouts. If observation contradicts the blueprint, rewrite the model."
    },
    {
      title: "End Goal: Peace",
      desc: "Success isn't about maximum volume or frantic code features. It is a stable, quiet, low-entropy collaboration environment."
    }
  ];

  const roadmapSteps = [
    {
      phase: "Current Mode",
      title: "v8.2 Core Prompt + Template",
      description: "Direct markdown configuration designed to anchor any standard language model workspace.",
      status: "Active",
      statusColor: "bg-brand-slate/8 text-brand-slate/70"
    },
    {
      phase: "Next Phase",
      title: "Interactive Config Generator",
      description: "A step-by-step browser sandbox helping you format and debug custom workflows in real-time.",
      status: "In Development",
      statusColor: "bg-brand-slate/5 text-brand-slate/55"
    },
    {
      phase: "Future Outlook",
      title: "Platform Integrations & Extensions",
      description: "Automated community templates and direct desktop sync tools to keep your configs aligned across browser surfaces.",
      status: "Planned",
      statusColor: "bg-brand-slate/4 text-brand-slate/40"
    }
  ];

  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-b border-brand-slate/5 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Core Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold block mb-3">
                Core Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate mb-4">
                Designed for Low Cognitive Entropy
              </h2>
              <p className="text-brand-slate/75 text-sm sm:text-base leading-relaxed">
                Rather than treating AI as a synthetic product to command, Ryos approaches collaboration as an overlapping memory interface.
              </p>
            </div>

            <div className="space-y-6">
              {corePrinciples.map((principle, index) => (
                <div key={index} className="p-5 bg-white border border-brand-slate/5 rounded-xl shadow-2xs">
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-slate mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-brand-slate/70 text-xs sm:text-sm font-sans leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Realistic Roadmap */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold block mb-3">
                The Horizon
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate mb-4">
                Sustainable Evolution
              </h2>
              <p className="text-brand-slate/75 text-sm sm:text-base leading-relaxed">
                We believe in simple tools. No speculative VC hype, no rushed feature roadmaps, and no unrequested lock-ins.
              </p>
            </div>

            <div className="space-y-4">
              {roadmapSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white border border-brand-slate/6 rounded-2xl relative flex flex-col sm:flex-row items-start justify-between gap-4 hover:shadow-xs transition-shadow"
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-brand-slate/40 uppercase tracking-widest block">
                      {step.phase}
                    </span>
                    <h3 className="font-display font-bold text-base text-brand-slate">
                      {step.title}
                    </h3>
                    <p className="text-brand-slate/65 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
                      {step.description}
                    </p>
                  </div>

                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold uppercase shrink-0 ${step.statusColor}`}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
