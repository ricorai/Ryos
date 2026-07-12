import React from "react";

interface FooterProps {
  onNavigateToPath: (path: "/" | "/privacy") => void;
}

export default function Footer({ onNavigateToPath }: FooterProps) {
  return (
    <footer className="py-12 px-6 md:px-12 bg-white text-brand-slate/50 border-t border-brand-slate/5 text-sm font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and identity */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded bg-brand-slate flex items-center justify-center text-brand-beige font-mono text-[10px] font-extrabold leading-none">
            R
          </div>
          <span className="font-display font-semibold text-brand-slate/60 tracking-tight">
            Ryos
          </span>
          <span className="text-brand-slate/30 hidden sm:inline">— A text file that teaches AI how you work</span>
        </div>

        {/* Principles */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-brand-slate/35">
          <span>Free. Open. Forever.</span>
          <span className="hidden sm:inline text-brand-slate/20">·</span>
          <span>You stay in control</span>
        </div>

        {/* Legal */}
        <div className="text-xs text-brand-slate/30 text-center">
          &copy; {new Date().getFullYear()} Ryos. Open research.
          <a
            href={`${import.meta.env.BASE_URL}privacy`}
            onClick={(event) => {
              event.preventDefault();
              onNavigateToPath("/privacy");
            }}
            className="ml-3 text-brand-slate/40 hover:text-brand-slate/60 transition-colors"
          >
            Privacy
          </a>
        </div>

      </div>
    </footer>
  );
}
