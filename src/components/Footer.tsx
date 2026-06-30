import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-white text-brand-slate/60 border-t border-brand-slate/5 text-sm font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded bg-brand-slate flex items-center justify-center text-brand-beige font-mono text-[10px] font-extrabold leading-none">
            R
          </div>
          <span className="font-display font-semibold text-brand-slate tracking-tight">
            Ryos Collaboration Framework
          </span>
        </div>

        {/* Philosophy reminders */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-brand-slate/40">
          <span>Recognize → Don't Attach → Act Clean</span>
          <span className="hidden sm:inline">•</span>
          <span>Reality Gets the Final Say</span>
          <span className="hidden sm:inline">•</span>
          <span>End State: Clarity</span>
        </div>

        {/* Simple year tag */}
        <div className="text-xs text-brand-slate/35 text-center">
          &copy; {new Date().getFullYear()} Ryos Specification team. Open source.
        </div>

      </div>
    </footer>
  );
}
