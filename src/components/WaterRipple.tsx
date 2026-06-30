import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  born: number;
}

const MAX_RADIUS = 80;
const LIFE = 900;

export default function WaterRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const ripples: Ripple[] = [];
    let raf: number;
    let lastSpawn = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn < 60) return;
      lastSpawn = now;
      ripples.push({ x: e.clientX, y: e.clientY, born: now });
    };

    window.addEventListener("mousemove", onMove);

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        const age = now - rp.born;
        if (age > LIFE) { ripples.splice(i, 1); continue; }
        const t = age / LIFE;
        const r = MAX_RADIUS * t;
        const opacity = (1 - t) * 0.10;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(24, 24, 27, ${opacity.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}
    />
  );
}
