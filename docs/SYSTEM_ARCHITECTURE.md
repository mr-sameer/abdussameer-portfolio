# System Architecture: AbdusSameer Technology Research Platform

**Document Version:** 1.1.0  
**Status:** Approved Technical Architecture  
**Classification:** Technical Architecture, Component Matrix & System Boundaries  

---

## 1. Architectural Philosophy & Non-Negotiable Constraints

1. **Zero-JavaScript Editorial Accessibility:**
   * Public research essays, article headings, body prose, citations, and metadata must be fully rendered in static HTML and 100% readable when client-side JavaScript is disabled. Search engine crawlers (Googlebot, Bingbot), web archives, and automated research spiders must receive full server-rendered HTML.
   * *Clarification:* While the entire Next.js client bundle is not zero JavaScript (client hydration enables progressive interactive leaves such as the accessible mobile navigation drawer), all primary research content is fully readable without executing client JS.
2. **Static-First Performance:**
   * Long-form research must load instantaneously. Content must not jump or shift (CLS < 0.05). Largest Contentful Paint (LCP) must target < 1.5 seconds on mobile 4G.
3. **Decoupled Architecture with Progressive Enhancement:**
   * Core editorial publication is statically generated. Interactive charts (ECharts) and selective 3D models (Three.js/R3F) are treated as **progressive enhancements** strictly deferred to later phases.
4. **Git as the Sole Source of Truth:**
   * Editorial research files in Git are the single source of truth for all published analysis. When a relational database is introduced in Phase 3, it **must not store competing copies of MDX article bodies**.
5. **Strict Isolation:**
   * This platform is completely independent. It shares zero infrastructure, codebases, authentication scopes, or deployment pipelines with external projects (such as ForgeX).

---

## 2. Technical Stack Evaluation & Decisions

| Technology Candidate | Purpose | Evaluation & Decision | Status |
| :--- | :--- | :--- | :--- |
| **Next.js (App Router) + TypeScript** | Core Framework | **Pros:** Industry-standard SSG, React Server Components outputting pristine HTML, robust TypeScript integration, unified migration path.<br>**Cons:** Requires Node build step; static export mode disables runtime SSR/Edge APIs. | **APPROVED (ADR-001 & ADR-002)** |
| **Static Export (`output: 'export'`)** | Rendering Mode | **Pros:** Emits pure static HTML/CSS/JS files to `/out`. Deployable for $0 to GitHub Pages or Cloudflare Pages.<br>**Cons:** Requires all assets (including Open Graph social cards) to be pre-generated at build time. | **APPROVED (ADR-002)** |
| **Tailwind CSS + Typography** | Styling Engine | **Pros:** Zero runtime CSS; utility classes ensure design token fidelity; `@tailwindcss/typography` provides battle-tested prose formatting.<br>**Cons:** Requires structured class organization. | **APPROVED** |
| **Git-Backed MDX (Velite / Next-MDX-Remote / Fumadocs)** | Editorial Content Layer | **Pros:** Ergonomic Markdown authoring with embedded React callouts; strictly validated Zod frontmatter; full Git version control.<br>**Cons:** Requires compilation pipeline.<br>*(Note: `Contentlayer` is disqualified due to abandonment).* | **APPROVED (ADR-004)** |
| **Self-Hosted WOFF2 Fonts** | Typography Delivery | **Pros:** Eliminates third-party DNS lookups to Google Fonts; guarantees user privacy; sub-millisecond local font resolution.<br>**Cons:** Requires explicit font-fallback matching (`size-adjust`) to prevent Cumulative Layout Shift. | **APPROVED (ADR-007)** |
| **Pre-Generated Static OG Images** | Social Previews | **Pros:** 100% compatible with static export on GitHub Pages; zero runtime Edge compute costs.<br>**Cons:** Must be generated at build time (via Satori / `@resvg/resvg-js`) or maintained as static assets. | **APPROVED (ADR-008)** |
| **Apache ECharts** | Research & Financial Visualizations | **Pros:** Industry-standard for complex financial time series, margin curves, and supply-chain flow diagrams; canvas/SVG rendering options.<br>**Cons:** Imperative setup; adds client bundle weight. | **DEFERRED TO PHASE 2** |
| **GSAP & ScrollTrigger** | Editorial Narrative Storytelling | **Pros:** Smooth pinning of diagrams alongside narrative text; scrubbed progress ribbons.<br>**Cons:** Requires bundle isolation and `useGSAP()` React Strict Mode cleanup. | **DEFERRED TO PHASE 2** |
| **Three.js / React Three Fiber (R3F)** | Selective 3D Hardware Teardowns | **Pros:** Useful for physical hardware architectures (e.g., EUV lithography optics or advanced chip packaging) where 2D diagrams fail.<br>**Cons:** High GPU memory draw; damages LCP if not lazy-loaded. | **DEFERRED TO PHASE 3** (Governed by strict performance budgets) |

---

## 3. High-Level System Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT / BROWSER RUNTIME                        │
│                                                                        │
│   ┌───────────────────────────┐     ┌──────────────────────────────┐   │
│   │ Pre-Rendered Static HTML  │     │ Progressive Hydration Leaves │   │
│   │ • Full Editorial Text     │     │ • Accessible Mobile Drawer   │   │
│   │ • Self-Hosted WOFF2 Fonts │     │ • Focus Management & Trapping│   │
│   │ • Semantic Footnotes & SEO│     │ • Client-side UI Toggles     │   │
│   └─────────────▲─────────────┘     └──────────────▲───────────────┘   │
└─────────────────┼──────────────────────────────────┼───────────────────┘
                  │                                  │
                  │ HTTPS (Static HTML, CSS, Bundles)│
                  │                                  │
┌─────────────────┴──────────────────────────────────┴───────────────────┐
│              EDGE DELIVERY & HOSTING (GITHUB PAGES / CLOUDFLARE)       │
│                      Zero-Cost Static Hosting ($0/mo)                  │
└─────────────────────────────────▲──────────────────────────────────────┘
                                  │
                                  │ Static Build Artifacts (/out)
                                  │
┌─────────────────────────────────┴──────────────────────────────────────┐
│                    APPLICATION BUILD & CONTENT PIPELINE                │
│                                                                        │
│   ┌────────────────────────┐         ┌─────────────────────────────┐   │
│   │  Local Content Engine  │         │     Next.js Static Export   │   │
│   │  • MDX Research Files  │────────►│  • Static Route Generation  │   │
│   │  • Zod Frontmatter Spec│         │  • Dynamic Sitemap & Robots │   │
│   │  • Primary Citations   │         │  • Pre-built Static OG Cards│   │
│   └────────────────────────┘         └──────────────▲──────────────┘   │
└─────────────────────────────────────────────────────┼──────────────────┘
                                                      │
                                                      │ (Phase 3 Deferred)
                                       ┌──────────────┴──────────────┐
                                       │   FUTURE BACKEND SERVICES   │
                                       │ • PostgreSQL / Supabase     │
                                       │ • Metrics & Relationship DB │
                                       │   (Metadata only - no MDX)  │
                                       │ • Reader Workspace State    │
                                       └─────────────────────────────┘
```

---

## 4. Subsystem Breakdown

### 4.1 Public Website & Editorial Publication (MVP / Phase 1)
* **Hosting Model:** Static site export (`output: 'export'`) deployed to **GitHub Pages** (retaining portability to Cloudflare Pages).
* **Component Classification:** **STATIC**.
* **Engine:** Next.js Server Components pre-rendered to HTML/CSS.
* **Routes:**
  * `/` (Homepage / Hero, Ticker, Latest Analysis Grid, Principles, About, Skills, Contact).
  * `/analysis/:slug` (Individual company deep-dives: ASML and NVIDIA).
  * `/about` (Founder background, research methodology, compliance statement).
  * `/sitemap.xml` & `/robots.txt` (Build-generated discovery files).

### 4.2 Research Publishing System (MVP)
* **Authoring Paradigm:** Git-based, version-controlled markdown files with MDX extensions in `/content/analysis/`.
* **Component Classification:** **STATIC BUILD-TIME**.
* **Schema Validation:** Strict Zod-validated frontmatter:
  ```typescript
  interface ResearchArticleFrontmatter {
    title: string;
    slug: string;
    headline: string;
    summary: string;
    coverCompany: {
      name: string;
      ticker?: string;
      sector: 'semiconductors' | 'ai-infrastructure' | 'product-software' | 'it-services';
      markColor?: string;
    };
    publishedAt: string; // ISO 8601
    lastReviewedAt: string; // ISO 8601
    readingTimeMinutes: number;
    featured: boolean;
    primarySources: Array<{
      title: string;
      url: string;
      publisher: string;
      publishedDate: string;
      tier: 1 | 2 | 3;
    }>;
  }
  ```

### 4.3 Company & Industry Intelligence Engine (Phase 2 -> Phase 3)
* **Component Classification:** **HYBRID / METADATA ONLY**.
* **Scope & Boundaries:** Models **macroeconomic dependencies and economic rent flow** across technology sectors (e.g., Carl Zeiss Optics -> ASML -> TSMC -> NVIDIA -> Hyperscalers).
* **Strict Distinction:** Does **not** include supplier procurement, parts directories, RFQs, or manufacturer bidding.
* **Storage Rule:** Metadata and financial metrics will reside in PostgreSQL in Phase 3; MDX article bodies remain versioned strictly in Git.

### 4.4 Future Reader Workspace (Phase 3)
* **Component Classification:** **BACKEND REQUIRED (Deferred)**.
* **Scope:** Authenticated reader state (magic link login, bookmarks, private marginalia notes).

---

## 5. Static vs. Backend Component Matrix

| Platform Capability | Execution Layer | Runtime Requirement | Server Required? | Phase |
| :--- | :--- | :--- | :--- | :--- |
| **Editorial Article Presentation** | Static Site Generation (SSG) | Client HTML / Minimal CSS | **No** | **Phase 1 (MVP)** |
| **SEO Metadata, Sitemaps & Canonical Tags** | Static Build Time | Zero Client JS | **No** | **Phase 1 (MVP)** |
| **Pre-Generated Social Preview Cards** | Build-time Script / Static Asset | Static Image Storage | **No** | **Phase 1 (MVP)** |
| **Accessible Mobile Navigation Drawer** | Client-Side Hydration (CSR) | Minimal React JS (focus trap) | **No** | **Phase 1 (MVP)** |
| **Client-Side Full-Text Search** | In-Browser Index (MiniSearch) | Client JS | **No** | **Phase 2** |
| **Interactive Financial Charts** | Client-Side Hydration (CSR) | Client JS (ECharts) | **No** (static JSON) | **Phase 2** |
| **Newsletter Subscription Form** | Form POST / Embed | External API (Substack) | **No** | **Phase 2** |
| **Selective 3D Hardware Teardowns** | Dynamic WebGL Canvas | Three.js / R3F (with 2D fallback)| **No** | **Phase 3** |
| **Reader Workspace & Marginalia** | Authenticated Server-Side | Node.js + PostgreSQL | **YES** | **Phase 3** |
| **Company Relationship & Metrics DB** | Relational Database (Metadata) | PostgreSQL / Supabase | **YES** | **Phase 3** |

---

## 6. Data Flows & System Boundaries

### 6.1 Publishing Data Flow (MVP)
```
[ Author writes Research in /content/analysis/:slug.mdx ]
                          │
                          ▼
             [ Git Commit & Push to main ]
                          │
                          ▼
            [ GitHub Actions CI Pipeline ]
    ├─ 1. Validate Zod schemas & frontmatter
    ├─ 2. Run link checker on primary sources (lychee)
    ├─ 3. Compile MDX to React Server Components
    ├─ 4. Pre-render static HTML, CSS & static OG images
    ├─ 5. Rebuild sitemap.xml & robots.txt
    └─ 6. Output static bundle to /out
                          │
                          ▼
[ Deploy to GitHub Pages (or Cloudflare Pages) ] ──► Available globally for $0/mo
```

### 6.2 Reader Request Data Flow
```
[ Reader requests /analysis/asml ]
              │
              ▼
[ Edge CDN Cache ] ──(Instant Return)──► Pre-rendered HTML (Full text readable with JS disabled)
              │
         (In Browser)
              ├─ 1. Instant typography paint via self-hosted WOFF2
              └─ 2. Hydrates lightweight client leaves (Mobile drawer, theme utilities)
```

---

## 7. Open Questions (Unresolved Decisions)

1. **OPEN QUESTION — Search Implementation Strategy (Phase 2):** Should Phase 2 search be built as a zero-dependency in-memory fuzzy index (MiniSearch) scanning static JSON, or will a pre-built static index suffice?
2. **OPEN QUESTION — Newsletter Provider Selection (Phase 2):** Should newsletter capture integrate with Substack, Buttondown, or Beehiiv?
