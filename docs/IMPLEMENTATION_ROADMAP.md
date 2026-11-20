# Implementation Roadmap: AbdusSameer Technology Research Platform

**Document Version:** 1.2.0  
**Status:** Approved Implementation Schedule & Homepage Prototype Plan  
**Classification:** Phased Milestones, Deliverables & Quality Gates  

---

## 1. Roadmap Phasing Strategy

The platform roadmap is structured into three distinct phases, strictly separating the **core MVP editorial publication**, **advanced content hub features**, and the **future intelligence platform**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: MINIMUM VIABLE PRODUCT (Editorial Research Publication)       │
│ • Next.js App Router + TypeScript (Static Export: output: 'export')    │
│ • Current stable versions of Next.js, React, Tailwind CSS, TypeScript  │
│ • Motion package for UI transitions (GSAP & Three.js omitted from MVP) │
│ • SVG-first semiconductor coordinate lattice in hero                   │
│ • Deployed to GitHub Pages (retaining Cloudflare Pages portability)    │
│ • Git-backed MDX Content Pipeline with Zod schema validation           │
│ • Foundational SEO: Canonical URLs, JSON-LD, sitemap, robots.txt       │
│ • Pre-generated static Open Graph / Twitter Card social images         │
│ • Accessible mobile drawer (focus trap, Escape key, scroll lock)       │
│ • Research articles: ASML & NVIDIA (clearly marked as Working Drafts)  │
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

## 2. Phase 1: Homepage Visual Prototype Specification

### 2.1 Approved Technical Baseline & Corrections
1. **Framework & Dependencies:** Current stable compatible releases of Next.js App Router, React, TypeScript, and Tailwind CSS.
2. **Animation Layer:** Current `motion` package using its idiomatic React API. GSAP and Three.js are completely excluded from the homepage prototype.
3. **Hero Visual:** An **SVG-first semiconductor/lithography coordinate lattice** (clean vector reticle geometry, scalable, accessible). Subtle progressive-enhancement mouse/cursor parallax may be applied via Motion, but the visual renders completely without JavaScript.
4. **Zero-JS Core Usability:** All editorial headings, body prose, research cards, and primary navigation anchors (`#analysis`, `#about`, `#work`, `#contact`) remain fully rendered and functional in plain HTML when JavaScript is disabled. Client hydration powers only progressive enhancements (e.g., mobile drawer).
5. **Skip-to-Content Anchor:** Standardized accessible link targeting `<main id="main-content">` to enable direct keyboard navigation past the masthead.
6. **Accessible Mobile Navigation Drawer:** Focus trapping (`aria-modal="true"`), Escape key handling, focus restoration to toggle button, and body scroll-locking.
7. **Editorial Status of Research Cards:** In-progress research pieces (ASML and NVIDIA) are explicitly marked as **"Research in Progress" / "Draft Analysis"** to accurately convey editorial status.
8. **Font Licensing & Delivery:** `Playfair Display`, `DM Sans`, and `DM Mono` are released under the SIL Open Font License (OFL). Verified for self-hosting or build-time optimization via `next/font` with metric fallback matching (`size-adjust`).
9. **Core Web Vitals Baselines:** Standard web vitals thresholds: LCP <= 2.5s, INP <= 200ms, and CLS <= 0.1 as the required baseline, targeting internal sub-1.5s LCP where achievable.

---

## 3. Testing, Verification & Quality Gates

| Test Layer | Tooling | Quality Gate Target |
| :--- | :--- | :--- |
| **Type Safety** | TypeScript (`tsc --noEmit`) | Zero type errors in build pipeline. |
| **Code Consistency** | ESLint + Prettier | Automated pre-commit linting. |
| **Accessibility (a11y)** | axe-core / Playwright | 100% WCAG 2.1 AA compliance (text contrast >= 4.5:1, skip link to `#main-content`, focus trap). |
| **Link Integrity** | Build Verification | Zero broken internal links or invalid anchor targets. |
| **Performance (CWV)** | Google Lighthouse CI | LCP <= 2.5s, INP <= 200ms, CLS <= 0.1. |
| **Zero-JS Readability** | Playwright / Headless (No JS) | Verify full homepage content and navigation function with JS disabled. |

---

## 4. Legacy File Governance (ADR-009)

* Existing repository files (`index.html`, `asml.html`, `nvidia.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, `README.md`) remain untouched on the branch.
* Static export outputs to `/out` without overwriting root legacy HTML files during the prototype phase.
