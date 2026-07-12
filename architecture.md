# Architecture

---

## Part 1 — Human Overview

### What is this?

This is the website for **Ryos** — a human-AI collaboration framework. Ryos is a text file (a system prompt) that you paste into any AI chat interface (ChatGPT, Claude, Gemini, etc.) and it teaches the AI how you think, how you work, and how you want answers. No plugins, no subscriptions, no API keys. Just paste text.

The website explains what Ryos is, shows why standard AI chat is frustrating, demonstrates the framework through an interactive experiment, and lets you download the spec files.

### How it's built

It's a single-page app built with **React** and **TypeScript**. Styling is done with **Tailwind CSS** (v4, the newest version). Animations use **Motion** (the library that used to be called Framer Motion). Icons are from **Lucide**. It's deployed to **GitHub Pages** via a GitHub Action.

No database. No backend. No API calls. Everything is static files — the entire Ryos spec text is stored as a TypeScript string constant in the codebase.

### How the site is organized

Only two pages exist: the **home page** and a **privacy policy**. There's no router library — the app checks the URL and shows the right page manually.

The home page is one long scrolling page with these sections, in order:

1. **Hero** — big headline, tagline, download buttons, a terminal-style preview
2. **Marquee** — scrolling keyword ticker ("recognize · verify · don't attach · act clean")
3. **Problem** — expandable cards showing 4 common AI friction points and Ryos solutions
4. **Pipeline Visualizer** — a 5-step diagram: Human → Config → Ryos Core → LLM → Output
5. **Marquee** (again, reversed) 
6. **Interactive Demo** — a choose-your-own-answer thought experiment about unseen variables
7. **How It Works** — 4-step guide to using Ryos
8. **Downloads** — tabbed code viewer with the full Ryos spec, copy and download buttons
9. **Philosophy & Roadmap** — principles and what's coming next

Plus a **fixed navbar** at the top, a **footer**, and two subtle background effects — water ripples and a custom cursor.

### Where to change things

| You want to... | Edit this file |
|---|---|
| Change text on the page | `src/data/ryosData.ts` |
| Change the Ryos spec itself | `src/data/ryosData.ts` (`RYOS_CORE_PROMPT`) |
| Change how a section looks | `src/components/[Component].tsx` |
| Change colors/fonts/theme | `src/index.css` |
| Add a new page section | New file in `src/components/`, then add to `src/App.tsx` |
| Change the privacy policy | `src/components/Privacy.tsx` |
| Change deployment settings | `vite.config.ts` or `.github/workflows/deploy.yml` |

### Running it locally

```bash
npm install
npm run dev      # starts at localhost:3000
npm run build    # production build
```

---

## Part 2 — Machine Reference

```yaml
project:
  name: ryos-website
  type: static-spa
  description: Marketing/landing page for Ryos human-AI collaboration framework
  base_url: /Ryos/
  deployment: github-pages

stack:
  language: typescript (~5.8)
  framework: react (19.x)
  build: vite (6.x)
  css: tailwind (4.x, @tailwindcss/vite plugin)
  animation: motion/react (12.x)
  icons: lucide-react (0.546.x)
  routing: manual-state (no library)
  state: local-useState (no global store)

entry:
  html: index.html → <div#root>
  js: src/main.tsx → createsRoot, renders <App/> in StrictMode
  css: src/index.css → google-fonts, @theme, global utilities

app:
  file: src/App.tsx
  role: root-component, manual-router
  routes:
    - path: /Ryos/ or /Ryos/#*
      state: home
      renders: [Hero, Marquee, Problem, PipelineVisualizer, Marquee(reverse), InteractiveDemo, HowItWorks, Downloads, PhilosophyFuture, Footer]
    - path: /Ryos/privacy
      state: privacy
      renders: [Privacy, Footer]
  scroll: hash-based (#problem, #how-it-works, etc.), 70px navbar offset
  nav: pushState, popstate listener

types:
  file: src/types.ts
  exports:
    - PainPoint: {id, title, symptom, failureMode, solution}
    - VariableScenarioOption: {id, label, unseenVariables[]}

data:
  file: src/data/ryosData.ts
  lines: ~1126
  role: website content source (presentational). Contains the same Ryos spec as Ryos.md but packaged for display/download on the site. Ryos.md is the runtime engine; ryosData.ts is the brochure. Same spec, different function.
  exports:
    - PAIN_POINTS: PainPoint[4]
    - UNSEEN_VARIABLES_SCENARIO: {scenarioTitle, scenarioDescription, options: VariableScenarioOption[3]}
    - RYOS_CORE_PROMPT: string (~620 lines, raw spec text)
    - RYOS_CONFIG_TEMPLATE: string (~420 lines, config template)

components:
  - name: Navbar
    file: src/components/Navbar.tsx
    dom: nav.fixed.top.z-50
    props: [onScrollToSection, onNavigateToPath]
    anchors: [logo→/, #problem, #how-it-works, #interactive-demo, #downloads, /privacy]
    cta: "Get Core" → #downloads

  - name: Hero
    file: src/components/Hero.tsx
    dom: section#hero.min-h-85vh
    props: [onScrollToSection]
    content: [version-pill, headline, subheadline, 2x-cta-buttons, terminal-mockup]
    animations: motion (opacity+y, staggered)

  - name: Marquee
    file: src/components/Marquee.tsx
    dom: div.overflow-hidden (scrolling ticker)
    props: [items[], speed, reverse]
    defaults: items=ryos-keywords, speed=30, reverse=false

  - name: Problem
    file: src/components/Problem.tsx
    dom: section#problem
    data: PAIN_POINTS
    state: activeCardId (string|null)
    layout: md:grid-cols-12 (sidebar+detail), mobile: accordion

  - name: PipelineVisualizer
    file: src/components/PipelineVisualizer.tsx
    dom: section#pipeline
    steps: 5 [Human, UniversalConfig, RyosCore, TargetLLM, GroundedFlow]
    layout: lg:grid-cols-5, mobile: stacked+connectors

  - name: InteractiveDemo
    file: src/components/InteractiveDemo.tsx
    dom: section#interactive-demo
    data: UNSEEN_VARIABLES_SCENARIO
    state: selectedOptionId (string|null)
    flow: select-answer → reveal-unseen-variables → cognitive-principle-box → reset

  - name: HowItWorks
    file: src/components/HowItWorks.tsx
    dom: section#how-it-works
    props: [onScrollToSection]
    steps: 4 [Obtain, Load, Stack, Request]
    layout: grid-cols-4

  - name: Downloads
    file: src/components/Downloads.tsx
    dom: section#downloads
    data: [RYOS_CORE_PROMPT, RYOS_CONFIG_TEMPLATE]
    state: [activeTab: core|template, copied: boolean]
    features: [tab-switcher, line-numbered-code-viewer, clipboard-copy, blob-download]

  - name: PhilosophyFuture
    file: src/components/PhilosophyFuture.tsx
    dom: section#philosophy
    layout: lg:grid-cols-12 (5+7)
    left: 3 core-principles
    right: 3 roadmap-steps [Active, InDevelopment, Planned]

  - name: Footer
    file: src/components/Footer.tsx
    dom: footer (logo, tagline, copyright, privacy-link)
    props: [onNavigateToPath]

  - name: Privacy
    file: src/components/Privacy.tsx
    dom: main#top (full-page, 323 lines)
    sections: 12 [introduction, information, usage, third-party, ai-processing, retention, security, responsibilities, rights, children, changes, contact]

  - name: Cursor
    file: src/components/Cursor.tsx
    renders: null (effect-only)
    injects: [div.rc-dot, div.rc-ring] → document.body
    z-index: 9999, 9998
    behavior: dot-follows-mouse, ring-lags+spring, hover-expands on interactive elements

  - name: WaterRipple
    file: src/components/WaterRipple.tsx
    renders: null (effect-only)
    injects: canvas → document.body (z-index:1)
    physics: 2D wave sim, float buffers, 3px scale, 0.988 damping, 5 auto-emitters
    input: mouse-move creates disturbances, resize reinitializes grid

design_tokens:
  colors:
    brand-beige: "#FAF9F6" (bg)
    brand-slate: "#18181b" (text)
    brand-muted: "#71717a" (muted)
  fonts:
    sans: Inter (body)
    display: Space Grotesk (headings)
    mono: JetBrains Mono (code)
  borders: brand-slate/5 through /15 (opacity modifiers)
  shadows: .premium-shadow (cards)

css_utilities:
  defined_in: src/index.css
  classes:
    - .premium-shadow: card shadow
    - .premium-border: subtle border
    - .card-lift: hover translateY(-3px)
    - .btn-magnetic: radial glow on hover
    - .rc-dot, .rc-ring: custom cursor elements

ci_cd:
  trigger: push to main
  file: .github/workflows/deploy.yml
  steps: [checkout, setup-node(20), npm-ci, npm-run-build, upload-pages-artifact, deploy-pages]
  build_script: vite build && node scripts/create-404.cjs
  output: dist/ (static, deployed to GitHub Pages /Ryos/)

scripts:
  dev: vite --port=3000 --host=0.0.0.0
  build: vite build && node scripts/create-404.cjs
  preview: vite preview
  lint: tsc --noEmit

workflow_kit:
  description: transferable context pack. install in any project. these files are gitignored here (this workspace is a test/design site, not the kit's permanent home).
  files:
    - AGENTS.md: bootloader, init order
    - Ryos.md: runtime engine, behavioral spec
    - architecture.md: project map, dual-layer human+machine
    - AI Live Sessions.md: master session log, dual-file system. Extracted verbatim from ~/.codewhale/sessions/*.json
    - Session-*.md: per-session standalone dialogue files, same JSON source
    - Build Notes.md: roadmap, future plans, kit structure notes. Reference file, not read during init.
  planned_folder: "Ryos Kit/" (single installable directory — future)

gitignore:
  - node_modules/
  - dist/
  - .env*
  - Ryos */ (local spec files)
  - DRyos.txt
  - *.ryos
  # workflow kit — transferable, not part of this repo's source
  - AGENTS.md
  - Ryos.md
  - architecture.md
  - AI Live Sessions.md
  - Session-*.md

key_decisions:
  - no-router-library: two routes trivial for manual popstate
  - content-as-code: all spec text in TS constants, no CMS
  - null-components: Cursor+WaterRipple inject DOM via useEffect, return null
  - tailwind-v4-vite: @tailwindcss/vite plugin, no postcss config
  - motion-over-framer: newer motion package, same API
```
