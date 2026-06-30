import { useEffect } from "react";

// Height-map water physics rendered ABOVE page content.
// Canvas is injected into document.body at z-index:2 (above #root at z-index:1).
// pointer-events:none so all clicks/hovers pass through.
//
// Physics: two float32 buffers, wave propagation every frame.
// DAMPING close to 1 = "extreme still water" — waves travel far and die very slowly.
// Mostly glass-still; autonomous drops disturb it every few seconds.
//
// Rendering: crests → near-white highlight, troughs → cool grey shadow.
// Both at low alpha so content remains readable.

const SCALE = 3;          // screen pixels per sim cell
const DAMPING = 0.996;    // near-1 = waves travel far and live long (~10-12s per drop)
const DROP_FORCE = 14;    // amplitude — big disturbance from each drop
const MOUSE_FORCE = 18;   // mouse hits harder for instant feedback
const MOUSE_MS = 55;      // ms between mouse-driven drops

// Shadow color (cool grey — how real water shadows look on a lit surface)
const SHADOW_R = 90, SHADOW_G = 105, SHADOW_B = 125;
const SHADOW_ALPHA_SCALE = 28;
const SHADOW_MAX_ALPHA = 58;

// Highlight color (near-white — crest catches light)
const LIGHT_ALPHA_SCALE = 14;
const LIGHT_MAX_ALPHA = 30;

export default function WaterRipple() {
  useEffect(() => {
    // --- canvas setup ---
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:fixed;inset:0;z-index:2;pointer-events:none;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    let W = 0, H = 0;
    let curr: Float32Array, prev: Float32Array;
    let offCanvas: HTMLCanvasElement, offCtx: CanvasRenderingContext2D;
    let imgData: ImageData;

    const clamp255 = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : v) | 0;

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

    // Drop a disturbance — 3×3 splat so it looks like a real drop
    const drop = (screenX: number, screenY: number, force: number) => {
      const gx = Math.round(screenX / SCALE);
      const gy = Math.round(screenY / SCALE);
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = gx + dx, ny = gy + dy;
          if (nx > 0 && nx < W - 1 && ny > 0 && ny < H - 1) {
            const dist = Math.abs(dx) + Math.abs(dy);
            prev[ny * W + nx] += force * (dist === 0 ? 1 : 0.45);
          }
        }
      }
    };

    // --- autonomous emitters (glass-still baseline: 2 drops, every 3-9s each) ---
    const timers: ReturnType<typeof setTimeout>[] = [];
    const startEmitter = (initialDelay: number) => {
      const fire = () => {
        drop(
          40 + Math.random() * (window.innerWidth - 80),
          40 + Math.random() * (window.innerHeight - 80),
          DROP_FORCE * (0.7 + Math.random() * 0.5)
        );
        const t = setTimeout(fire, 3000 + Math.random() * 6000);
        timers.push(t);
      };
      const t = setTimeout(fire, initialDelay);
      timers.push(t);
    };
    // Two independent emitters, staggered starts
    startEmitter(600);
    startEmitter(4000 + Math.random() * 3000);

    // --- mouse ---
    let lastMouse = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouse < MOUSE_MS) return;
      lastMouse = now;
      drop(e.clientX, e.clientY, MOUSE_FORCE);
    };
    window.addEventListener("mousemove", onMove);

    // Click = bigger splash
    const onClick = (e: MouseEvent) => drop(e.clientX, e.clientY, DROP_FORCE * 2);
    window.addEventListener("click", onClick);

    // Resize
    const onResize = () => init();
    window.addEventListener("resize", onResize);

    // --- simulation step ---
    const step = () => {
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x;
          curr[i] =
            (prev[i - 1] + prev[i + 1] + prev[i - W] + prev[i + W]) / 2 -
            curr[i];
          curr[i] *= DAMPING;
        }
      }
      const tmp = curr;
      curr = prev;
      prev = tmp;
    };

    // --- render ---
    const render = () => {
      const data = imgData.data;
      for (let i = 0; i < W * H; i++) {
        const h = prev[i];
        const pi = i * 4;

        if (h > 0.05) {
          // crest — near-white highlight
          const a = Math.min(LIGHT_MAX_ALPHA, h * LIGHT_ALPHA_SCALE) | 0;
          data[pi]     = 255;
          data[pi + 1] = 255;
          data[pi + 2] = 255;
          data[pi + 3] = a;
        } else if (h < -0.05) {
          // trough — cool shadow
          const a = Math.min(SHADOW_MAX_ALPHA, -h * SHADOW_ALPHA_SCALE) | 0;
          data[pi]     = SHADOW_R;
          data[pi + 1] = SHADOW_G;
          data[pi + 2] = SHADOW_B;
          data[pi + 3] = a;
        } else {
          // dead calm — fully transparent
          data[pi + 3] = 0;
        }
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
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return null;
}
