import React, { useState } from "react";
import * as motion from "motion/react";
import { PAIN_POINTS } from "../data/ryosData";
import { HelpCircle, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function Problem() {
  const [activeCardId, setActiveCardId] = useState<string | null>("forgetful");

  return (
    <section id="problem" className="py-24 px-6 md:px-12 bg-white border-y border-brand-slate/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-slate/50 font-semibold inline-block mb-3">
            The Status Quo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate mb-4">
            Why AI Still Feels Frustrating
          </h2>
          <p className="text-brand-slate/75 text-base sm:text-lg">
            We are working with incredibly powerful models, yet standard chat interactions continually default to the same friction points.
          </p>
        </div>

        {/* Layout: Sidebar list + Detail Viewer on large screens, Stacked Expandable on smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Handheld Expandable Menu / Desktop Navigation List */}
          <div className="md:col-span-5 space-y-3">
            {PAIN_POINTS.map((point) => {
              const isActive = activeCardId === point.id;
              return (
                <div key={point.id}>
                  {/* Standard menu button for desktop and mobile */}
                  <button
                    onClick={() => setActiveCardId(isActive ? null : point.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-brand-slate border-brand-slate text-brand-beige shadow-md"
                        : "bg-brand-beige/50 border-brand-slate/5 hover:bg-brand-beige/80 text-brand-slate"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-4 h-4 shrink-0 ${isActive ? "text-amber-300" : "text-brand-slate/40"}`} />
                        <span className="font-display font-semibold text-sm sm:text-base leading-tight">
                          {point.title}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                        isActive ? "rotate-90 text-brand-beige" : "text-brand-slate/40"
                      }`} />
                    </div>

                    {/* Inline mobile body - heights handled by layout animations */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-white/10 md:hidden text-xs space-y-3 block text-brand-beige/90">
                        <p>{point.symptom}</p>
                        <div className="bg-white/10 p-2.5 rounded-lg text-emerald-300">
                          <span className="font-bold">Failure Type:</span> {point.failureMode}
                        </div>
                        <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/10 text-white font-sans">
                          <span className="font-bold text-emerald-300 block mb-1">✓ The Ryos Solution:</span>
                          {point.solution}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Detail View Card  */}
          <div className="hidden md:block md:col-span-7 h-full">
            <div className="border border-brand-slate/15 bg-brand-beige/25 rounded-2xl p-8 min-h-[360px] flex flex-col justify-between relative overflow-hidden premium-shadow">
              {/* Corner Accent vector */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

              {activeCardId ? (
                (() => {
                  const currentPoint = PAIN_POINTS.find(p => p.id === activeCardId)!;
                  return (
                    <div className="h-full flex flex-col justify-between space-y-6">
                      <div>
                        {/* Status Label */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-100 text-red-800 text-[11px] font-mono font-semibold uppercase mb-4">
                          <span>Diagnostic: {currentPoint.failureMode}</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold tracking-tight text-brand-slate mb-3">
                          {currentPoint.title}
                        </h3>
                        
                        <p className="text-brand-slate/85 text-sm sm:text-base leading-relaxed font-sans mb-6">
                          {currentPoint.symptom}
                        </p>
                      </div>

                      <div className="border-t border-brand-slate/8 pt-6">
                        <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-emerald-500/10 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-display font-bold text-emerald-900 text-sm block mb-1">
                              How Ryos framework solves this
                            </span>
                            <span className="text-brand-slate/85 text-sm leading-relaxed block font-sans">
                              {currentPoint.solution}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="h-full flex flex-col justify-center items-center text-center text-brand-slate/40 py-12">
                  <Sparkles className="w-8 h-8 mb-3" />
                  <p className="text-sm">Select a friction point on the left to see how Ryos restructures the interaction context.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
