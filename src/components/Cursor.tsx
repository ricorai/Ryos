import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("rc-dot");
    const ring = document.getElementById("rc-ring");
    if (!dot || !ring) return;

    let ringX = -100, ringY = -100;
    let dotX = -100, dotY = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const tick = () => {
      // dot follows immediately
      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      // ring lags slightly
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => ring.classList.add("rc-hover");
    const onLeave = () => ring.classList.remove("rc-hover");

    const attachHover = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    // attach once mounted, re-attach after a tick so dynamic elements are ready
    setTimeout(attachHover, 500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="rc-dot" className="rc-dot" />
      <div id="rc-ring" className="rc-ring" />
    </>
  );
}
