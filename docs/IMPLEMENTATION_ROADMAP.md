# Implementation Roadmap: AbdusSameer Technology Research Platform

**Document Version:** 1.1.0  
**Status:** Approved Implementation Schedule  
**Classification:** Phased Milestones, Deliverables & Quality Gates  

---

## 1. Roadmap Phasing Strategy

The platform roadmap is structured into three distinct phases, strictly separating the **core MVP editorial publication**, **advanced content hub features**, and the **future intelligence platform**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: MINIMUM VIABLE PRODUCT (Editorial Research Publication)       │
│ • Next.js App Router + TypeScript (Static Export: output: 'export')    │
│ • Deployed to GitHub Pages (retaining Cloudflare Pages portability)    │
│ • Git-backed MDX Content Pipeline with Zod schema validation           │
│ • Foundational SEO: Canonical URLs, JSON-LD, sitemap, robots.txt       │
│ • Pre-generated static Open Graph / Twitter Card social images         │
│ • Accessible mobile drawer (focus trap, Escape key, scroll lock)       │
│ • Fully-authored flagship deep dives: ASML and NVIDIA                  │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: ADVANCED EDITORIAL & VISUALIZATIONS (Content Hub)             │
│ • Apache ECharts integration for financial & moat metrics              │
│ • In-browser client-side full-text search (MiniSearch)                 │
│ • Category taxonomy & archive views (/archive/:sector)                 │
│ • Newsletter integration & RSS/Atom feed generation                    │
│ • GSAP scroll-driven narrative pinning for flagship teardowns          │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: RESEARCH INTELLIGENCE PLATFORM (Future Vision)                │
│ • Relational database (PostgreSQL / Supabase) — Metadata only          │
│ • Company value-chain & dependency graph (Economic rent analysis)      │
│ • Selective 3D hardware teardowns (Three.js/R3F with strict budgets)   │
│ • Authenticated reader workspace (marginalia, bookmarks, watchlists)   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Phase Breakdown & Deliverables

### Phase 1: Minimum Viable Product (MVP) — Editorial Research Publication
*Objective: Launch a world-class, high-performance editorial research publication on Next.js.*
* **Scope & Deliverables:**
  1. **Core Application Setup:**
     * Next.js (App Router), TypeScript, Tailwind CSS, `@tailwindcss/typography`.
     * Static export configuration (`output: 'export'`) targeting GitHub Pages.
     * Design tokens matching *The Warm Paper / Deep Ink / Vermilion* palette.
     * Self-hosted WOFF2 fonts (`Playfair Display`, `DM Sans`, `DM Mono`) with CSS fallback metric matching.
  2. **MDX Content Pipeline:**
     * Git-backed content layer in `/content/analysis/` (using Velite, Next-MDX-Remote, or Fumadocs).
     * Zod frontmatter schema validation (dates, reading times, sector tags, primary citations).
     * Reusable MDX components: `<SummaryBox />`, `<Citation />`, `<RiskCallout />`.
  3. **Editorial Deliverables:**
     * Complete, fully-authored **ASML Deep Dive** (lithography moat, EUV supply chain, High-NA transition economics, customer concentration).
     * Complete, fully-authored **NVIDIA Breakdown** (data center compute, CUDA ecosystem, NVLink moat, hyperscaler CAPEX sensitivity).
  4. **SEO & Social Graph Engine:**
     * Pre-generated static Open Graph preview images stored in `/public/og/`.
     * Complete Schema.org JSON-LD (`Person` and `TechArticle`).
     * Build-generated XML sitemap, canonical tags, and robots.txt.
     * Experimental `llms.txt` file at root.
  5. **Accessible Mobile Navigation:**
     * Accessible slide-out mobile drawer featuring focus trapping (`aria-modal="true"`), Escape key closure, focus restoration, and body scroll-locking.
* **Legacy Source File Policy (ADR-009):** Existing files (`index.html`, `asml.html`, `nvidia.html`, `styles.css`) remain untouched on `main`. Cutover occurs upon final deployment.
* **Dependencies:** Approved ADRs, validated MDX frontmatter schemas.
* **Acceptance Criteria:**
  * Lighthouse Performance Score >= 95, Accessibility = 100, SEO = 100.
  * Public research articles are 100% readable with client-side JavaScript disabled.
  * Zero 404 links; zero WCAG 2.1 AA accessibility violations.

---

### Phase 2: Advanced Editorial & Data Visualizations (Content Hub)
*Objective: Transform static text into an interactive, data-driven research hub.*
* **Scope & Deliverables:**
  1. **Financial & Technical Charts (ECharts):**
     * Interactive revenue breakdown, gross margin trends, and CAPEX trajectory charts.
     * Responsive touch/desktop tooltip interaction.
  2. **Taxonomy & Discovery:**
     * In-browser client-side fuzzy search (MiniSearch) scanning static JSON.
     * Category archive views (`/archive/semiconductors`, `/archive/ai-infrastructure`).
  3. **Reader Engagement:**
     * Substack / Buttondown newsletter subscription widget.
     * RSS 2.0 and JSON Feed generation (`/rss.xml`, `/feed.json`).
  4. **Editorial Storytelling (GSAP):**
     * Dynamically imported GSAP ScrollTrigger for side-by-side narrative pinning.
* **Dependencies:** Successful production deployment of Phase 1.

---

### Phase 3: Technology Research Intelligence Platform (Future Scope)
*Objective: Introduce relational intelligence, interactive 3D, and personalized workspaces.*
* **Scope & Deliverables:**
  1. **Relational Data Layer (Metadata Only - ADR-005):**
     * PostgreSQL database via Supabase storing company profiles, metrics, and economic relationships.
     * Article text remains strictly versioned in Git MDX.
  2. **Selective 3D Hardware Teardowns (Three.js / R3F):**
     * Subject to strict performance budgets: sustained 60fps on mobile, < 50MB GPU memory, viewport render-loop pausing, and 2D SVG/WebP fallback.
  3. **Reader Workspace:**
     * Magic-link authentication, private marginalia notes, bookmarks, and PDF export.

---

## 3. Testing, Verification & Quality Gates

| Test Layer | Tooling | Quality Gate Target |
| :--- | :--- | :--- |
| **Type Safety** | TypeScript (`tsc --noEmit`) | Zero type errors in CI pipeline. |
| **Code Consistency** | ESLint + Prettier | Automated pre-commit linting. |
| **Accessibility (a11y)** | axe-core / Playwright | 100% WCAG 2.1 AA compliance; focus trap verified. |
| **Primary Link Integrity** | `lychee` in CI | Zero broken internal links or 404 citation URLs. |
| **SEO & Performance** | Google Lighthouse CI | Performance >= 95, Accessibility = 100, SEO = 100. |
| **Zero-JS Readability** | Playwright (JS disabled) | Verify full article text renders without hydration. |

---

## 4. Open Questions & Decision Points

1. **OPEN QUESTION — Development Branching Strategy:** Should Phase 1 development take place on a dedicated branch (e.g., `feat/nextjs-platform`) with GitHub Actions preview deployments, before merging into `main`? *(Architect recommendation: Yes, keep `main` stable while developing on `feat/nextjs-platform`).*
2. **OPEN QUESTION — Research Pipeline Pipeline:** Which technology company will be the subject of Research Teardown #3 following ASML and NVIDIA? (Candidates: TSMC, Broadcom, Microsoft, Hyperscaler CAPEX Comparison).
