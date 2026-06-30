import { useEffect } from "react";

// Height-map water physics — two float buffers, propagate every frame
// Canvas injected into document.body to avoid React stacking context issues

const SCALE = 3;         // screen pixels per sim cell
const DAMPING = 0.988;   // energy retained per frame — higher = waves travel further
const DROP_FORCE = 9;    // amplitude of each disturbance

export default function WaterRipple() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;inset:0;z-index:1;pointer-events:none;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    let W = 0, H = 0;
    let curr: Float32Array, prev: Float32Array;
    let offCanvas: HTMLCanvasElement, offCtx: CanvasRenderingContext2D;
    let imgData: ImageData;

    const clamp = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : v) | 0;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      W = Math.ceil(window.innerWidth / SCALE);
      H = Math.ceil(window.innerHeight / SCALE);
      curr = new Float32Array(W * H);
      prev = new Float32Array(W * H);
      offCanvas = document.createElement("canvas");
      offCanvas.width = W;
      offCanvas.height = H;
      offCtx = offCanvas.getContext("2d")!;
      imgData = offCtx.createImageData(W, H);
    };
    init();

    const drop = (screenX: number, screenY: number, force: number) => {
      const gx = Math.floor(screenX / SCALE);
      const gy = Math.floor(screenY / SCALE);
      if (gx > 0 && gx < W - 1 && gy > 0 && gy < H - 1) {
        // 3×3 splat for more natural drop shape
        prev[gy * W + gx] += force;
        prev[(gy - 1) * W + gx] += force * 0.5;
        prev[(gy + 1) * W + gx] += force * 0.5;
        prev[gy * W + (gx - 1)] += force * 0.5;
        prev[gy * W + (gx + 1)] += force * 0.5;
      }
    };

    // 5 autonomous emitters — always active, fire at random intervals
    const timers: ReturnType<typeof setTimeout>[] = [];
    const scheduleEmitter = (initialDelay: number) => {
      const fire = () => {
        drop(
          30 + Math.random() * (window.innerWidth - 60),
          30 + Math.random() * (window.innerHeight - 60),
          DROP_FORCE * (0.5 + Math.random() * 0.7)
        );
        const t = setTimeout(fire, 500 + Math.random() * 1800);
        timers.push(t);
      };
      const t = setTimeout(fire, initialDelay);
      timers.push(t);
    };
    for (let i = 0; i < 5; i++) scheduleEmitter(i * 300 + Math.random() * 400);

    // Mouse interaction
    let lastMouse = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouse < 50) return;
      lastMouse = now;
      drop(e.clientX, e.clientY, DROP_FORCE * 1.6);
    };
    window.addEventListener("mousemove", onMove);

    // Resize — reinit grid
    const onResize = () => init();
    window.addEventListener("resize", onResize);

    const step = () => {
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x;
          curr[i] = (
            prev[i - 1] + prev[i + 1] +
            prev[i - W] + prev[i + W]
          ) / 2 - curr[i];
          curr[i] *= DAMPING;
        }
      }
      // swap buffers
      const tmp = curr; curr = prev; prev = tmp;
    };

    const render = () => {
      const data = imgData.data;
      for (let i = 0; i < W * H; i++) {
        const h = prev[i];
        const shift = h * 20;
        const pi = i * 4;
        // Beige base #FAF9F6 = (250, 249, 246)
        // Crest → lighter, trough → darker slate tint
        data[pi]     = clamp(250 + shift);
        data[pi + 1] = clamp(249 + shift * 0.95);
        data[pi + 2] = clamp(246 + shift * 0.8);
        data[pi + 3] = Math.min(115, Math.abs(h) * 38) | 0;
      }
      offCtx.putImageData(imgData, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offCanvas, 0, 0, canvas.width, canvas.height);
    };

    let raf: number;
    const loop = () => {
      step();
      render();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return null;
}
