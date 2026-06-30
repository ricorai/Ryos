import React from "react";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
}

const DEFAULT_ITEMS = [
  "recognize",
  "verify",
  "don't attach",
  "act clean",
  "v8.2",
  "less overhead",
  "sharper context",
  "reality leads",
  "clarity",
];

export default function Marquee({ items = DEFAULT_ITEMS, speed = 30, reverse = false }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-brand-slate/6 py-3 bg-brand-beige/60 backdrop-blur-sm">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-brand-slate/35 px-4">
            {item}
            <span className="text-brand-slate/20">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
