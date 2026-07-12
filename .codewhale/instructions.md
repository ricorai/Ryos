# Project Instructions

## Initialization

1. **Find and read `AGENTS.md`.** Check the project root first. If not there, check `Ryos Kit/AGENTS.md`. This file is the bootloader — it defines the initialization pipeline. Follow its instructions.
2. If `AGENTS.md` is not found anywhere, fall back to this pipeline:
   - Read `Architecture.md` first (project map).
   - Classify the user's task as **Simple** (single-file edit, typo fix, read-only) or **Complex** (multi-file refactor, architectural change, high stakes).
   - Skip `Ryos.md` for simple tasks; load it for complex ones.
3. Continue with the user's request.

## Project Context

This is the website for **Ryos** — a human-AI collaboration framework. It's a single-page React + TypeScript app with Tailwind CSS v4, deployed to GitHub Pages. No database, no backend, no API calls. Everything is static.

### Key files
- `src/data/ryosData.ts` — all text content and the Ryos spec itself
- `src/components/*.tsx` — one component per page section
- `src/App.tsx` — root component and manual router
- `src/index.css` — colors, fonts, theme
- `vite.config.ts` — build config (base: `/Ryos/`)

### Running locally
```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
```

## Authority

1. User instructions — always highest priority.
2. These project instructions — apply within this repository.
