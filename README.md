# NAWAT — Marketing Website

Vue 3 + Vite + TypeScript implementation of the **NAWAT Design System** marketing
site (sovereign, AI-ready data-center developer, KSA). Ported from the Claude Design
project `ui_kits/website/index.html` — a React/Babel single-page kit — to a routed,
state-managed Vue application.

## Stack
- **Vue 3** (`<script setup lang="ts">`, Composition API)
- **Vue Router 4** — one route per page, lazy-loaded interior views, animated page transitions
- **vue-i18n** — translation (EN + AR); messages are the shared dictionary
- **Pinia** — locale store: drives vue-i18n, text direction (RTL) and persistence
- **three.js** — animated hero node-network (lazy-loaded as its own chunk)
- **Vite 8**

All templates are inline-style-free; layout lives in CSS classes (`src/styles/site.css`).

## Run
```bash
npm install
npm run dev        # dev server
npm run build      # type-check (vue-tsc) + production build
npm run preview    # preview the production build
```

## Structure
```
src/
  styles/          design tokens (colors, typography, spacing, base) + kit layout
    tokens/        colors.css · fonts.css · typography.css · spacing.css · base.css
    site.css       nav / hero / sections / footer layout (ported from the kit)
  components/
    core/          NwButton · NwBadge · NwEyebrow · NwIcon (+ icons.ts)
    surfaces/      NwCard · NwStat
    forms/         NwInput
    layout/        TheNav · TheFooter
    hero/          HeroScene (CSS sky/grid) · HeroCanvas (three.js)
    sections/      PageHeader · CtaSection (shared bands)
  views/           HomeView · ServicesView · ProjectsView · PartnersView · AboutView · ContactView
  stores/          locale.ts (Pinia — drives vue-i18n + <html dir/lang> + persistence)
  i18n/            index.ts (vue-i18n instance) · dictionary.ts (EN + AR messages; EN is the source-of-truth shape)
  router/          index.ts
  App.vue          shell: nav + <RouterView> + footer
```

## Routes
`/` Home · `/services` · `/projects` (Quantum, the flagship campus) · `/partners` ·
`/about` · `/contact`. Unknown paths redirect to `/`.

## Design system
Colors, spacing, radii, shadows and the type scale are ported **verbatim** as CSS
custom properties (`src/styles/tokens/*`). Components consume the tokens only — no
hard-coded brand values.

### Brand fonts & logo
The licensed brand faces are bundled in `public/fonts/` and declared in
`src/styles/tokens/fonts.css`:
- **thmanyah sans** — the **primary** face for both English and Arabic (body + UI + display).
- **Arslan Wessam B** — the Arabic display face for large headings / the نواة wordmark.

IBM Plex Mono (Google Fonts) is used for technical figures; Plus Jakarta Sans / IBM Plex
Sans Arabic remain as graceful fallbacks. The navbar uses the supplied white brand logo
(`src/assets/nawat-logo.png`); an SVG recreation of the circuit-snowflake mark is used for
the favicon (`public/favicon.svg`) and the home split-feature visual (`src/assets/logo-mark-white.svg`).

## Bilingual + motion
- **Language toggle** (العربية / English) in the nav swaps every string, flips `dir`
  on `<html>`, switches the Arabic display face, and persists the choice to `localStorage`.
- **three.js hero** animates a glowing node-network with parallax; it pauses when the tab
  is hidden and renders a single static frame under `prefers-reduced-motion`.
- **Scroll reveals** use pure-CSS scroll-driven animation (`animation-timeline: view()`),
  with per-index stagger on grids, degrading to fully-visible content where unsupported.
- **Hero entrance** choreographs its content on each page mount; **route changes**
  crossfade + slide. All motion is gated behind `prefers-reduced-motion`.
