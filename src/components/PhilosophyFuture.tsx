import React from "react";
import { motion } from "motion/react";
import { FlaskConical, BookOpen } from "lucide-react";

export default function PhilosophyFuture() {
  const principles = [
    {
      number: "01",
      title: "Observe before concluding",
      description: "Every rule in Ryos was first observed as a real failure in human-AI interaction. Theory followed evidence — never the other way around."
    },
    {
      number: "02",
      title: "Reality gets the final say",
      description: "If an idea sounds good but fails under real use, it doesn't ship. Every addition must survive contact with actual conversations."
    },
    {
      number: "03",
      title: "Open to audit. Open to challenge.",
      description: "The Ryos specification is developed in the open. Every version is documented. Every decision is traceable. Anyone can inspect it."
    }
  ];

  const roadmap = [
    {
      phase: "Today",
      title: "Stable and in use",
      description: "v8.2 is production-ready. The core instructions are stable, tested, and actively maintained.",
      statusStyle: "bg-brand-slate/8 text-brand-slate/60"
    },
    {
      phase: "Next",
      title: "Settings builder",
      description: "A simple browser tool to help you set up and preview your personal preferences before pasting them into your AI.",
      statusStyle: "bg-brand-slate/4 text-brand-slate/40"
    },
    {
      phase: "Later",
      title: "Sync and community",
      description: "Keep your settings consistent across tools. Share templates for common roles and workflows.",
      statusStyle: "bg-brand-slate/3 text-brand-slate/30"
    }
  ];

  return (
    <>
      {/* Research Foundations */}
      <section id="research" className="py-32 px-6 md:px-12 bg-[#FAF9F6] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold inline-flex items-center gap-2 mb-5"
            >
              <FlaskConical className="w-3 h-3" />
              Research Foundations
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-6 leading-[1.1]"
            >
              Built on evidence,<br />
              <span className="text-brand-slate/45">not speculation.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-brand-slate/45 text-base leading-relaxed max-w-lg mx-auto"
            >
              Ryos didn't start as a theory about AI alignment. It started by watching real conversations fail — then building rules that prevent those failures.
            </motion.p>
          </div>

          {/* Principles — large, airy, scannable */}
          <div className="space-y-16">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10"
              >
                <span className="font-mono text-5xl sm:text-6xl font-bold text-brand-slate/8 leading-none shrink-0">
                  {principle.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-slate mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-brand-slate/45 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section id="roadmap" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-slate/8 to-transparent" />

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-wider text-brand-slate/40 font-semibold inline-flex items-center gap-2 mb-5"
            >
              <BookOpen className="w-3 h-3" />
              Where We're Going
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-slate mb-6 leading-[1.1]"
            >
              Realistic, grounded,<br />
              <span className="text-brand-slate/45">no hype.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-brand-slate/45 text-base leading-relaxed max-w-lg mx-auto"
            >
              No speculative features. No rushed deadlines. Every step is driven by what people actually need.
            </motion.p>
          </div>

          {/* Roadmap — simple progression */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-brand-slate/6" />

            <div className="space-y-12">
              {roadmap.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="relative flex gap-6"
                >
                  {/* Dot on the line */}
                  <div className={`hidden md:block relative z-10 w-[38px] h-[38px] shrink-0 mt-0.5`}>
                    <div className={`w-[10px] h-[10px] rounded-full mt-[14px] mx-auto ${idx === 0 ? "bg-brand-slate/30 ring-4 ring-brand-slate/5" : "bg-brand-slate/15"}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-brand-slate/30 font-semibold">
                        {step.phase}
                      </span>
                      {idx === 0 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-brand-slate/6 text-brand-slate/55">
                          Live
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-slate mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-brand-slate/40 text-sm leading-relaxed font-sans max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
