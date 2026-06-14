import React, { useState } from "react";
import { motion } from "motion/react";
import { UNSEEN_VARIABLES_SCENARIO } from "../data/ryosData";
import { Compass, Sparkles, HelpCircle, AlertCircle, RefreshCw } from "lucide-react";

export default function InteractiveDemo() {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const selectedOption = UNSEEN_VARIABLES_SCENARIO.options.find(
    (opt) => opt.id === selectedOptionId
  );

  return (
    <section 
      id="interactive-demo" 
      className="py-24 px-6 md:px-12 bg-white relative border-b border-brand-slate/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold inline-block mb-3">
            Interaction Experiment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate mb-4">
            Test Your Calibration Speed
          </h2>
          <p className="text-brand-slate/75 text-base sm:text-lg">
            Let's examine how quickly the human mind closes a feedback loop with speculative assumptions—and how RyOS trains the LLM to resist them.
          </p>
        </div>

        {/* Scenic Simulation Card */}
        <div className="bg-[#FAF9F6] border border-brand-slate/10 rounded-2xl p-6 sm:p-10 premium-shadow relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-slate/6">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin-slow" />
            <span className="font-display font-medium text-xs sm:text-sm uppercase tracking-wider text-brand-slate/60">
              Active Thought Experiment
            </span>
          </div>

          {/* Scenario prompt */}
          <div className="mb-8">
            <span className="font-mono text-xs text-brand-slate/40 uppercase tracking-widest block mb-2">
              The Scenario
            </span>
            <p className="font-display text-lg sm:text-xl font-medium text-brand-slate leading-relaxed">
              {UNSEEN_VARIABLES_SCENARIO.scenarioDescription}
            </p>
          </div>

          {/* Choice selector */}
          {!selectedOptionId ? (
            <div className="space-y-4">
              <span className="font-mono text-[11px] text-brand-slate/40 uppercase tracking-wider block">
                Select your instinctive primary answer pattern:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {UNSEEN_VARIABLES_SCENARIO.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOptionId(option.id)}
                    className="w-full text-left p-4 rounded-xl border border-brand-slate/8 bg-white hover:bg-brand-slate hover:text-brand-beige group transition-all duration-150 cursor-pointer shadow-sm text-sm sm:text-base font-medium flex items-center justify-between"
                  >
                    <span>{option.label}</span>
                    <span className="text-xs font-mono text-indigo-600 group-hover:text-amber-200 transition-colors shrink-0 pl-3">
                      Select
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 sm:p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-800 block mb-1">
                    Your Selection:
                  </span>
                  <span className="text-brand-slate text-sm sm:text-base font-sans">
                    "{selectedOption?.label}"
                  </span>
                </div>
              </div>

              {/* Reveal Section */}
              <div className="pt-2">
                <span className="font-mono text-[11px] text-brand-slate/40 uppercase tracking-widest block mb-4">
                  The Core Reality: Unseen Variables
                </span>
                
                <div className="space-y-4">
                  {selectedOption?.unseenVariables.map((variable, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15, duration: 0.4 }}
                      className="p-4 rounded-xl bg-white border border-brand-slate/5 text-brand-slate/85 text-xs sm:text-sm font-sans flex items-start gap-3 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-slate text-brand-beige font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <p>{variable}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Paradigm Reveal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8 border-t border-brand-slate/10 pt-8"
              >
                <div className="bg-brand-slate text-brand-beige p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-beige/55">The Cognitive Principle</span>
                  </div>

                  <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                    Reality may contain unseen variables.
                  </p>
                  
                  <p className="text-brand-beige/70 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                    When we attach immediately to our first hypothesis, we generate defensive responses and unnecessary operational drift. RyOS programs the LLM to systematically list and weight unseen variables before closing its logical conclusions. This keeps your collaboration clean, objective, and stable.
                  </p>
                </div>
              </motion.div>

              {/* Reset Trigger */}
              <div className="text-center pt-2">
                <button
                  onClick={() => setSelectedOptionId(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-slate/10 hover:border-brand-slate/30 text-brand-slate font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Choose Another Answer</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
