# AbdusSameer — V4 Phased Implementation Roadmap

**Document Version:** 4.1.0  
**Status:** Approved Implementation Schedule  
**Target Milestone:** Release V4  
**Branch:** `feat/nextjs-platform`

---

## 1. Staged Execution Plan Overview

To ensure zero downtime, preservation of working code, and continuous testability, V4 will be rolled out across six discrete, verifiable stages:

```
┌────────────────────────────────────────────────────────────────────────┐
│ V4 IMPLEMENTATION STAGES                                               │
├───────────────────────────────────┬────────────────────────────────────┤
│ Stage 1: Data & Type Foundation   │ Structured models & static datasets│
│ Stage 2: Homepage Experience A    │ 6 concise studio sections + 3D polish│
│ Stage 3: Company Intelligence     │ Adaptable corporate dossiers       │
│ Stage 4: Research Articles        │ Long-form scholarly investigations │
│ Stage 5: Project Case Studies     │ 4-part architectural teardowns     │
│ Stage 6: Audit, SEO & Quality     │ Full CWV, Lighthouse & a11y signoff│
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Stage-by-Stage Detailed Breakdown

### Stage 1: Foundation & Data Architecture
* **Objective:** Establish typed data models for companies, research articles, and projects without touching visual presentation.
* **Files Affected:**
  - `src/lib/types.ts` (New: interfaces for `CompanyIntelligence`, `ResearchArticle`, `ProjectCaseStudy`, `KnowledgeNode`, `EvidenceTier`)
  - `src/lib/data/companies.ts` (New: static datasets for ASML, NVIDIA, TSMC with adaptable section coverage)
  - `src/lib/data/articles.ts` (New: static datasets for semiconductor value chains & AI infra)
  - `src/lib/data/projects.ts` (New: static datasets for the 4 projects)
* **Dependencies:** None.
* **Acceptance Criteria:** `npx tsc --noEmit` passes with 0 errors.
* **Rollback Plan:** Delete new files under `src/lib/data/`.

---

### Stage 2: Experience A — Cinematic Studio Homepage
* **Objective:** Consolidate the 10 homepage sections into the 6 approved concise experiences.
* **Files Affected:**
  - `src/components/home/Hero.tsx` (Refine typography & CTA hierarchy)
  - `src/components/home/KnowledgeNetwork.tsx` (New: 10-field interactive network)
  - `src/components/home/SelectedProjects.tsx` (New: 3–4 curated previews)
  - `src/components/home/CompanyIntelPreview.tsx` (New: corporate preview cards)
  - `src/components/home/ResearchPreview.tsx` (New: value-chain teaser & articles)
  - `src/app/page.tsx` (Assemble the 6 sections in order)
* **Dependencies:** Stage 1 data models.
* **Acceptance Criteria:**
  - Homepage renders all 6 sections cleanly.
  - Zero hydration errors or layout shifts.
  - Desktop, tablet, and mobile layouts verified.
* **Rollback Plan:** Revert `page.tsx` to commit `d57bb29` baseline.

---

### Stage 3: Experience B — Company Intelligence Platform
* **Objective:** Build the adaptable corporate intelligence template and initial company dossiers.
* **Files Affected:**
  - `src/app/companies/page.tsx` (Company index grid)
  - `src/app/companies/[slug]/page.tsx` (Adaptable template with `generateStaticParams`)
  - `src/components/research/FinancialTable.tsx`
  - `src/components/research/MoatMatrix.tsx`
  - `src/components/research/CitationList.tsx`
* **Dependencies:** Stage 1 company datasets.
* **Acceptance Criteria:**
  - Pre-renders `/companies/asml/`, `/companies/nvidia/`, `/companies/tsmc/`.
  - Audited financial tables and primary citations render in static HTML.
  - Zero Three.js code loaded in company bundle.
* **Rollback Plan:** Remove `src/app/companies/` directory.

---

### Stage 4: Experience B — Research & Industry Publications
* **Objective:** Build the scholarly research article template and thematic value-chain pages.
* **Files Affected:**
  - `src/app/research/page.tsx` (Research article index)
  - `src/app/research/[slug]/page.tsx` (Scholarly article template with TOC)
  - `src/app/industries/[slug]/page.tsx` (Structural industry map template)
  - `src/components/research/TableOfContents.tsx`
  - `src/components/research/SummaryBox.tsx`
* **Dependencies:** Stage 1 article datasets.
* **Acceptance Criteria:**
  - Pre-renders `/research/semiconductor-value-chains/` and `/industries/semiconductors/`.
  - Sticky table of contents and executive summary callouts function cleanly.
* **Rollback Plan:** Remove `src/app/research/` and `src/app/industries/` routes.

---

### Stage 5: Experience B — Dedicated Project Case Studies
* **Objective:** Move detailed 4-part project teardowns to dedicated project case study pages.
* **Files Affected:**
  - `src/app/projects/page.tsx` (Projects showcase index)
  - `src/app/projects/[slug]/page.tsx` (Dedicated 4-part case study template)
* **Dependencies:** Stage 1 project datasets.
* **Acceptance Criteria:**
  - Pre-renders `/projects/semis-intel/`, `/projects/equity-sandbox/`, `/projects/evidence-diff/`, `/projects/research-platform/`.
  - Full problem/why it matters/approach/stack breakdowns render without truncation.
* **Rollback Plan:** Remove `src/app/projects/` dynamic routes.

---

### Stage 6: Audit, SEO & Quality Assurance
* **Objective:** End-to-end verification across measured performance, SEO, accessibility, and content fidelity.
* **Deliverables:**
  - Full XML sitemap verification (`/sitemap.xml`) enumerating all new routes.
  - Google Lighthouse audit: Performance ≥ 95, Accessibility = 100, SEO = 100.
  - Measured Core Web Vitals targets: LCP ≤ 2.2s, INP ≤ 100ms, CLS 0.00.
  - Zero broken links across internal relational web.
  - Factual credential review: Confirm BCA completed, MCA ongoing, MA Economics ongoing.
* **Dependencies:** Stages 1 through 5.
* **Acceptance Criteria:** `npm run build` succeeds; zero console errors on dev or production export.
