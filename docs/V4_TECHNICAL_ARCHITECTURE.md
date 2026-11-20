# AbdusSameer — V4 Technical Architecture & Component Specification

**Document Version:** 4.1.0  
**Status:** Approved Technical Architecture  
**Target Milestone:** Release V4  
**Framework Baseline:** Next.js 15.5.x App Router · React 19 · TypeScript 5.7 · Tailwind CSS 3.4 · Three.js 0.187.x

---

## 1. System Architecture Overview

The V4 platform architecture is engineered for **ultra-high performance, zero runtime server dependencies, and uncompromised accessibility**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ NEXT.JS 15 APP ROUTER STATIC EXPORT ARCHITECTURE                      │
├────────────────────────────────────────────────────────────────────────┤
│ Build Output: Pre-rendered Static HTML/CSS/JS Assets in `/out`         │
│ Hosting Target: GitHub Pages / Cloudflare Pages (Zero Server Runtime)  │
│ Content Source: Git-backed TypeScript Models & Validated Datasets      │
│ Font Delivery: Self-hosted WOFF2 files with local `@font-face` rules   │
│ Client Hydration: Selective progressive enhancement on interactive UI  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Static Export Boundaries & Future Dynamic Migration Path

### 2.1 Current Static Export Boundaries (`output: 'export'`)
* Next.js outputs a purely static distribution to `/out` deployable to any static host (GitHub Pages).
* Does not support Node.js server middleware, dynamic server-side rendering (SSR), on-demand revalidation (ISR), or runtime API routes.
* All dynamic URLs (`/companies/[slug]`, `/research/[slug]`, `/projects/[slug]`) must be statically enumerated at build time via `generateStaticParams()`.

### 2.2 Future Dynamic Migration Path
Should the platform expand to require live stock quotes, reader marginalia notes, subscriber authentication, or dynamic server search:
* **Zero Refactoring Guarantee:** The application is architected so that removing `output: 'export'` in `next.config.mjs` immediately unlocks standard Next.js Server Components.
* **Hosting Flexibility:** The codebase retains 100% portability to Cloudflare Pages (via `@cloudflare/next-on-pages`) or Vercel, allowing edge functions and database adapters without rewriting page layouts or data schemas.

---

## 3. Directory & Component Hierarchy

```
src/
├── app/                                # App Router Routes & Static Page Assemblies
│   ├── layout.tsx                      # Root Layout (Fonts, Global Schema, Header, Footer)
│   ├── page.tsx                        # Experience A: Cinematic Studio Homepage
│   ├── globals.css                     # Design tokens, keyframes, base utilities
│   ├── not-found.tsx                   # Accessible 404 handler
│   ├── sitemap.ts                      # Static XML Sitemap route
│   ├── robots.ts                       # Static Robots.txt route
│   ├── about/page.tsx                  # Dedicated Narrative Biography (5 Chapters)
│   ├── contact/page.tsx                # Direct Communication & Collaboration Hub
│   ├── research/
│   │   ├── page.tsx                    # Research Index & Category Filter
│   │   └── [slug]/page.tsx             # Long-Form Thematic Research Article Template
│   ├── companies/
│   │   ├── page.tsx                    # Corporate Teardown Index Matrix
│   │   └── [slug]/page.tsx             # Adaptable Company Intelligence Dossier Template
│   ├── industries/
│   │   └── [slug]/page.tsx             # Structural Industry Value-Chain Map Template
│   └── projects/
│       ├── page.tsx                    # Projects Showcase Index
│       └── [slug]/page.tsx             # 4-Part Project Architectural Case Study Template
│
├── components/
│   ├── ui/                             # Primitive Atoms & Accessible Design Primitives
│   │   ├── Container.tsx               # Max-width layout bounds (sm, md, lg, xl)
│   │   ├── Button.tsx                  # Polymorphic accessible button / anchor
│   │   ├── Badge.tsx                   # Telemetry & status indicator pill
│   │   ├── SkipLink.tsx                # Keyboard bypass anchor to #main-content
│   │   └── Breadcrumb.tsx              # Semantic breadcrumb navigation trail
│   │
│   ├── layout/                         # Structural Chrome Components
│   │   ├── Header.tsx                  # Sticky masthead with cross-page route resolution
│   │   ├── Footer.tsx                  # Colophon, legal notices & verified links
│   │   └── MobileDrawer.tsx            # Portalled modal drawer with focus trap
│   │
│   ├── home/                           # Experience A Components (Cinematic Studio)
│   │   ├── Hero.tsx                    # Studio Hero wrapper with Motion entrance
│   │   ├── WaferScene3D.tsx            # Vanilla Three.js 3D Semiconductor Artwork
│   │   ├── SemiconductorLattice.tsx    # Lightweight Vector SVG Fallback Reticle
│   │   ├── KnowledgeNetwork.tsx        # 10-Field Interactive Synthesis Diagram
│   │   ├── SelectedProjects.tsx        # Curated 3-4 Project Previews
│   │   ├── CompanyIntelPreview.tsx     # Teaser cards for ASML, NVIDIA, TSMC
│   │   └── ResearchPreview.tsx         # Thematic Dossier Teasers & Value-Chain Map
│   │
│   └── research/                       # Experience B Components (Research Platform)
│       ├── ArticleHeader.tsx           # Masthead with metadata, author & citations
│       ├── TableOfContents.tsx         # Sticky reading rail with active section spy
│       ├── SummaryBox.tsx              # High-density executive takeaway callout
│       ├── FinancialTable.tsx          # Audited balance sheet & income statement grid
│       ├── ValueChainDiagram.tsx       # Interactive supply chain tier inspector
│       ├── MoatMatrix.tsx              # Competitive moat scoring & durability breakdown
│       └── CitationList.tsx            # Verifiable primary sources & SEC filing links
│
└── lib/
    ├── constants.ts                    # Global editorial copy, nav links, company telemetry
    ├── fonts.ts                        # Typography variables for Playfair, DM Sans, DM Mono
    ├── types.ts                        # Strict TypeScript interfaces for articles & dossiers
    └── data/                           # Validated static content datasets
        ├── companies.ts                # ASML, NVIDIA, TSMC structured datasets
        ├── articles.ts                 # Full research investigations
        └── projects.ts                 # Detailed 4-part project specifications
```

---

## 4. Animation & Asset Loading Architecture

To prevent bundle bloat and ensure sub-100ms INP, animation responsibilities are strictly segmented:

```
┌────────────────────────────────────────────────────────────────────────┐
│ ANIMATION ENGINE SEPARATION                                            │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ Three.js           │ Homepage Only      │ Isolated to `WaferScene3D`   │
│ Motion             │ UI Micro-States    │ Portals, drawers, tab swaps  │
│ CSS Animations     │ Marquee & Pips     │ Zero CPU script overhead     │
│ SVG Vector Paths   │ Visual Schematics  │ Infinitely scalable, 0 bundle│
└────────────────────┴────────────────────┴──────────────────────────────┘
```

### 4.1 Three.js Bundle Isolation Guarantee
* Three.js (`three` + `@types/three`) is imported **only** within `src/components/home/WaferScene3D.tsx`.
* Subpages (`/research/*`, `/companies/*`, `/projects/*`, `/about/`) import zero Three.js code. Their initial JavaScript bundle remains strictly under **110 kB**.
* Memory Management: `WaferScene3D` hooks into `IntersectionObserver` to halt render loops when off-screen and disposes of all geometries, materials, and WebGL contexts during unmount.

---

## 5. Performance Governance & Measured Acceptance Gates

Core Web Vitals are treated as **empirical acceptance criteria to be verified via measurement**, not theoretical claims:

| Metric | Target Threshold | Measurement Tool | Acceptance Requirement |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | ≤ 2.2s (Desktop), ≤ 2.5s (Mobile) | Lighthouse CI / DevTools | Must pass on 4G throttling |
| **INP (Interaction to Next Paint)** | ≤ 100ms | Chrome Performance Profiler | Zero input delay on UI clicks |
| **CLS (Cumulative Layout Shift)** | 0.00 | Lighthouse CI | Bounded aspect ratios on all media |
| **Initial JS Shared Bundle** | ≤ 110 kB | Next.js Build Output | Monitored on every production build |
