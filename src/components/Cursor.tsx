import { useEffect } from "react";

// Cursor elements injected directly into document.body so they sit above
// the water canvas (z-index:2) regardless of #root stacking context.

export default function Cursor() {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "rc-dot";
    const ring = document.createElement("div");
    ring.className = "rc-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let ringX = -100, ringY = -100;
    let dotX = -100, dotY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const tick = () => {
      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => ring.classList.add("rc-hover");
    const onLeave = () => ring.classList.remove("rc-hover");

    const attachHover = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    setTimeout(attachHover, 500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      if (dot.parentNode) dot.parentNode.removeChild(dot);
      if (ring.parentNode) ring.parentNode.removeChild(ring);
    };
  }, []);

  return null;
}
