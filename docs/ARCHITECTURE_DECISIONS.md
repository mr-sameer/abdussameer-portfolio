# Architecture Decisions Record (ADR): AbdusSameer

**Document Version:** 1.0.0  
**Status:** Approved & Adopted  
**Date:** November 20, 2026  
**Classification:** Canonical Architecture Decisions  

---

## Executive Summary

This document formalizes the canonical architectural decisions, technical trade-offs, and boundary definitions approved by the founder for the **AbdusSameer Technology Research Platform**. These decisions supersede all preliminary proposals and govern all subsequent design, content, and development phases.

---

## Approved Architectural Decisions

### ADR-001: Core Application Framework
* **Decision:** Adopt **Next.js (App Router) with TypeScript**.
* **Rationale:** Next.js provides industry-standard static site generation (SSG) with React Server Components, strong TypeScript integration, robust static routing, and a clean forward-migration path if dynamic server capabilities are required in future phases.
* **Trade-offs:** Introduces a Node.js build pipeline compared to raw static HTML or vanilla tools, but provides superior component modularity, type-safe content integration, and long-term ecosystem stability.
* **Rejected Alternatives:** 
  * *Vanilla HTML/CSS:* Rejected due to severe authoring friction, lack of template inheritance, and manual maintenance overhead across multiple deep-dive articles.
  * *Astro:* Evaluated as an excellent content-first alternative, but Next.js was selected for long-term consistency with potential dynamic React application modules in later phases.

---

### ADR-002: Rendering Strategy
* **Decision:** Adopt a **Static-First Architecture via Next.js Static Export (`output: 'export'`)** for the public MVP.
* **Rationale:** All public research essays, company profiles, and metadata must be pre-rendered into pristine HTML and CSS at build time. 
* **Zero-JS Editorial Accessibility:** Public research content, headers, and footnotes must be 100% accessible and readable without requiring client-side JavaScript execution. Client-side hydration is restricted to progressive enhancements (e.g., accessible mobile navigation drawer).
* **Trade-offs:** Static export disables dynamic runtime Node.js features (such as runtime serverless API routes and dynamic on-demand image optimization). All assets and social cards must be pre-generated at compile time.

---

### ADR-003: Hosting Infrastructure
* **Decision:** Deploy initially to **GitHub Pages**, while strictly retaining full portability to **Cloudflare Pages**.
* **Rationale:** GitHub Pages provides zero-cost hosting directly integrated with the existing Git repository (`git@github.com:mr-sameer/abdussameer-portfolio.git`), supporting custom domains and automated HTTPS via Let's Encrypt.
* **Portability Guarantee:** The build artifact is pure standard static HTML, CSS, and JS (output to `/out`), allowing immediate zero-friction deployment to Cloudflare Pages if global edge performance or custom edge redirects become necessary.

---

### ADR-004: Editorial Content Pipeline & Single Source of Truth
* **Decision:** Adopt **Git-backed MDX with strict Zod frontmatter schema validation**. Git remains the sole and final source of truth for all research content.
* **Implementation:** Content is authored as `.mdx` files in `/content/analysis/`. Tooling candidates include **Velite**, **Next-MDX-Remote**, or **Fumadocs MDX**. `Contentlayer` is explicitly disqualified due to abandonment.
* **Rationale:** Treats high-value technology research as version-controlled code artifacts, allowing pull request reviews, diff tracking, and embedded custom editorial React components (such as executive summary boxes, risk callouts, and citation anchors).
* **Trade-offs:** Requires technical familiarity with Markdown and Git; non-technical CMS authoring is deferred.

---

### ADR-005: Database Architecture & Data Boundaries
* **Decision:** **Database implementation is DEFERRED.** When introduced in Phase 3, the database **must not store competing copies of MDX article bodies**.
* **Data Boundary:** Git remains the authoritative repository of research articles. A relational database (e.g., PostgreSQL / Supabase) will only be introduced when structured relational queries are required for:
  1. Historical financial KPIs and valuation metrics.
  2. Company value-chain dependency graphs.
  3. Authenticated reader workspace state (bookmarks, personal marginalia).
* **Conceptual Distinction:** Company relationships within the database model **technological dependencies and economic rent distribution** (e.g., ASML lithography equipment sold to TSMC, or Carl Zeiss supplying EUV optics to ASML). It **never** represents industrial procurement, RFQ generation, or supplier bidding functionality.

---

### ADR-006: MVP Scope Boundary & Deferred Capabilities
* **Decision:** Establish a strict, disciplined MVP scope.
* **Included in Phase 1 (MVP):**
  * Fully responsive editorial website with accessible navigation.
  * *Warm Paper / Deep Ink* editorial design system.
  * Accessible mobile navigation drawer (focus trap, Escape key closing, scroll lock).
  * Git-backed MDX content pipeline with Zod validation.
  * Pre-generated static Open Graph and Twitter Card social preview images.
  * Complete foundational SEO suite (JSON-LD schemas for `Person` and `TechArticle`, XML sitemap, canonical links, robots.txt).
  * Two fully-authored, high-fidelity research deep dives: **ASML** and **NVIDIA**.
* **Explicitly Deferred (Phases 2 & 3):**
  * Client-side search and category filtering (Deferred to Phase 2).
  * Newsletter subscription capture widgets (Deferred to Phase 2).
  * Interactive charting engines (ECharts) (Deferred to Phase 2).
  * Relational database and user accounts (Deferred to Phase 3).
  * 3D WebGL / Three.js / React Three Fiber interactive scenes (Deferred to Phase 3).

---

### ADR-007: Font Delivery & Performance Strategy
* **Decision:** Prefer **self-hosted WOFF2 fonts** (`Playfair Display`, `DM Sans`, `DM Mono`), subject to licensing verification and build-time performance testing.
* **Performance Realism:** Self-hosting eliminates third-party DNS lookups, TLS handshakes, and external tracking latency associated with Google Fonts. However, eliminating Cumulative Layout Shift (CLS) requires explicit font-fallback metric overrides (`size-adjust`, `ascent-override`, `descent-override`), CSS `font-display: swap`, and preloading primary weights.
* **Trade-offs:** Adds ~60–90 KB of static font assets to the repository build payload, but protects user privacy and improves Time-to-First-Paint on slow connections.

---

### ADR-008: Social Image Generation
* **Decision:** Use **pre-generated static social images** for the MVP.
* **Rationale:** On-demand Edge-rendered social image generators (such as `@vercel/og` running on serverless endpoints) are incompatible with Next.js static export (`output: 'export'`) hosted on GitHub Pages.
* **Implementation:** Social cards (1200x630px) will either be rendered at build time using a Node-based build script (via Satori and `@resvg/resvg-js`) or maintained as curated, high-resolution static SVG/PNG assets in `/public/og/`.

---

### ADR-009: Legacy Source File Governance
* **Decision:** **Do not modify, rename, or delete existing website files on `main`.**
* **Policy:** Existing files (`index.html`, `asml.html`, `nvidia.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, `README.md`) remain untouched on the `main` branch. 
* **Remediation Plan:** Legacy path discrepancies (the root vs. `analysis/` mismatch) will be addressed either on a dedicated remediation branch or superseded entirely by the Next.js migration during final deployment cutover.

---

### ADR-010: Design Direction, Motion & 3D Performance Governance
* **Decision:** Maintain an editorial identity inspired by high-end financial broadsheets (*Warm Paper* `#F5F1E9` and *Deep Ink* `#0A1120` with a signature vermilion accent `#FF5D37`).
* **Motion Policy:** Motion is reserved for functional UX wayfinding (drawer transitions, tab switches) and editorial narrative pacing. All animations must strictly honor `@media (prefers-reduced-motion: reduce)`.
* **3D Performance Governance (Phase 3):** Three.js and React Three Fiber are deferred to Phase 3 and restricted to physical hardware explainers. Arbitrary polygon/texture caps are replaced by **measurable performance budgets**:
  1. Consistent 60fps render loop on target mid-tier mobile hardware.
  2. Strict GPU memory budget (< 50MB allocation).
  3. Automatic WebGL render-loop suspension when scrolled out of the active viewport.
  4. Immediate fallback to high-resolution 2D SVG/WebP illustrations on mobile or low-power modes.
