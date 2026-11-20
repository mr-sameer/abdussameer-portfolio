# AbdusSameer — V4 vs V3 Migration & Architecture Audit

**Document Version:** 4.1.0  
**Status:** Approved Migration Audit  
**Target Milestone:** Release V4  
**Baseline Commit:** `d57bb29` ("fix: resolve visual QA issues")

---

## 1. Executive Migration Summary

The V3 implementation successfully resolved all initial build, type-safety, and runtime stability issues, delivering a high-quality 3D semiconductor wafer hero, an accessible mobile drawer, and verified zero-JS readable HTML.

However, the V3 homepage suffered from **excessive vertical fragmentation** (10 separate stacked sections) and forced long-form company teardowns, 4-part project descriptions, and analytical principles to live directly on a single landing page. 

**V4 solves this by cleanly bifurcating the experience**:
1. **Experience A (Homepage):** Refactored from 10 sections into **6 concise, story-driven studio experiences**.
2. **Experience B (Research Platform):** Moves detailed company intelligence, research investigations, and project case studies into dedicated, SEO-optimized RESTful routes (`/companies/[slug]`, `/research/[slug]`, `/projects/[slug]`).

---

## 2. Component Disposition Matrix

| V3 Component | V3 Location | V4 Status | V4 Destination / Disposition |
| :--- | :--- | :--- | :--- |
| `Hero.tsx` | `src/components/home/Hero.tsx` | **Retained & Polished** | Homepage Section 01 (Hero). Spacing tightened; CTAs above fold. |
| `WaferScene3D.tsx` | `src/components/home/WaferScene3D.tsx` | **Retained 100%** | Homepage Section 01. Kept intact with verified GPU cleanup & tilt. |
| `SemiconductorLattice.tsx` | `src/components/home/SemiconductorLattice.tsx` | **Retained 100%** | Universal SVG fallback for 3D wafer. |
| `Ticker.tsx` | `src/components/home/Ticker.tsx` | **Deprecated / Replaced** | Removed from vertical flow to eliminate repetitive marquee noise. |
| `PersonSection.tsx` | `src/components/home/PersonSection.tsx` | **Refactored** | Intellectual identity consolidated into Section 06; full CV stays on `/about`. |
| `DisciplinesSection.tsx`| `src/components/home/DisciplinesSection.tsx` | **Upgraded** | Evolved into `KnowledgeNetwork.tsx` (10 nodes, interactive visual connections). |
| `ProjectsSection.tsx` | `src/components/home/ProjectsSection.tsx` | **Bifurcated** | Short teasers stay on homepage (`SelectedProjects.tsx`); full 4-part teardowns move to `/projects/[slug]/`. |
| `ResearchGrid.tsx` | `src/components/home/ResearchGrid.tsx` | **Bifurcated** | Split into Section 04 (`CompanyIntelPreview.tsx`) and Section 05 (`ResearchPreview.tsx`). Full dossiers move to `/companies/[slug]/`. |
| `ResearchCard.tsx` | `src/components/home/ResearchCard.tsx` | **Retained & Reused** | Used in company and research preview listings. |
| `ApproachSection.tsx` | `src/components/home/ApproachSection.tsx` | **Integrated** | Integrated into `/research/` and `/about/` methodology sections rather than cluttering homepage. |
| `FocusSection.tsx` | `src/components/home/FocusSection.tsx` | **Integrated** | Relocated to `/research/` publication index. |
| `ContactSection.tsx` | `src/components/home/ContactSection.tsx` | **Consolidated** | Streamlined into Section 06 (Personal Intro & Contact). |
| `Header.tsx` | `src/components/layout/Header.tsx` | **Retained & Updated** | Cross-page navigation routing verified; updated links for `/companies/`, `/research/`, `/projects/`. |
| `MobileDrawer.tsx` | `src/components/layout/MobileDrawer.tsx` | **Retained 100%** | Portalled modal with focus trap preserved. |
| `Footer.tsx` | `src/components/layout/Footer.tsx` | **Retained & Updated** | Expanded sitemap links to reflect new route architecture. |
| `SkipLink.tsx` | `src/components/ui/SkipLink.tsx` | **Retained 100%** | Accessible skip link to `#main-content` preserved. |
| `Container.tsx`, `Badge.tsx`, `Button.tsx` | `src/components/ui/*` | **Retained 100%** | Core UI primitives reused across both experiences. |

---

## 3. What Moves to Dedicated Pages

1. **Exhaustive 4-Part Project Teardowns:**
   - In V3, the *Problem*, *Why It Matters*, *How It Works*, and *What Was Built* blocks lived in an accordion-like component on the homepage.
   - In V4, these expand into dedicated architectural case study pages at `/projects/semis-intel/`, `/projects/equity-sandbox/`, `/projects/evidence-diff/`, and `/projects/research-platform/`.
2. **Exhaustive Corporate Intelligence Dossiers:**
   - In V3, ASML and NVIDIA were represented only by preview cards.
   - In V4, they expand into full adaptable corporate intelligence dossiers at `/companies/asml/`, `/companies/nvidia/`, and `/companies/tsmc/`.
3. **Thematic Value-Chain Investigations:**
   - Long-form deep dives move to `/research/semiconductor-value-chains/` and `/research/ai-infrastructure-economics/`.

---

## 4. Architecture Missing in V3 (To Be Added in V4)

1. **Data Model Layer (`src/lib/data/`):**
   - V3 stored unstructured strings directly inside `constants.ts`.
   - V4 introduces strict, typed schemas for corporate dossiers, research articles, and project case studies (`companies.ts`, `articles.ts`, `projects.ts`).
2. **Scholarly Editorial UI Kit (`src/components/research/`):**
   - New components required for Experience B: `TableOfContents.tsx`, `SummaryBox.tsx`, `FinancialTable.tsx`, `MoatMatrix.tsx`, `CitationList.tsx`, `Breadcrumb.tsx`.
3. **Dynamic Static Route Generation:**
   - `generateStaticParams()` across `/companies/[slug]`, `/research/[slug]`, `/industries/[slug]`, and `/projects/[slug]`.
4. **Static Export Boundaries & Future Dynamic Migration:**
   - Documented `output: 'export'` constraints (pure build-time pre-rendering, no Node server runtime) alongside zero-refactor migration to Cloudflare Pages / Vercel if live tickers, marginalia, or user accounts are added in future phases.

---

## 5. Risk Assessment & Safety Controls

| Potential Risk | Severity | Mitigation Strategy |
| :--- | :--- | :--- |
| **Accidental Three.js Bundle Leakage** | Medium | Isolate Three.js strictly inside `WaferScene3D.tsx`. Subpages must never import Three.js. |
| **Broken Static Export (`output: 'export'`)** | High | Every dynamic route must implement `export const dynamic = 'force-static'` and `generateStaticParams()`. |
| **Legacy File Collision** | Critical | Legacy root files (`index.html`, `asml.html`, etc.) remain completely untouched. Output is routed to `/out`. |
| **Credential Representation Inflation** | High | Strict adherence to Section 9 of the Blueprint: BCA completed, MCA/MA ongoing, verified commercial history only. |
| **Assumed Performance Metrics** | Medium | Core Web Vitals must be empirically audited on throttled environments, not assumed. |
