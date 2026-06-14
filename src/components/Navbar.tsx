import React from "react";
import { Compass, FileCode2, Info } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-brand-slate/5 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onScrollToSection("hero")}
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-brand-slate hover:opacity-85 transition-opacity"
        >
          <div className="w-6 h-6 rounded-md bg-brand-slate flex items-center justify-center text-brand-beige font-mono text-sm leading-none font-extrabold">
            R
          </div>
          <span>RyOS</span>
        </button>

        {/* Navigation links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <button 
            onClick={() => onScrollToSection("problem")}
            className="text-brand-slate/60 hover:text-brand-slate transition-colors"
          >
            The Failure Modes
          </button>
          
          <button 
            onClick={() => onScrollToSection("how-it-works")}
            className="text-brand-slate/60 hover:text-brand-slate transition-colors hidden sm:inline-block"
          >
            How It Works
          </button>

          <button 
            onClick={() => onScrollToSection("interactive-demo")}
            className="text-brand-slate/60 hover:text-brand-slate transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </button>

          <button 
            onClick={() => onScrollToSection("downloads")}
            className="text-brand-slate/60 hover:text-brand-slate transition-colors flex items-center gap-1.5"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Files</span>
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onScrollToSection("downloads")}
            id="nav-get-started"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-slate hover:bg-brand-slate/90 text-brand-beige text-xs font-semibold tracking-tight transition-all"
          >
            Get Core
          </button>
        </div>
      </div>
    </nav>
  );
}
