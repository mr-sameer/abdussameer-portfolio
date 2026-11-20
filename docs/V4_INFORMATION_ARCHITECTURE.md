# AbdusSameer — V4 Information Architecture & Routing Specification

**Document Version:** 4.1.0  
**Status:** Approved Information Architecture  
**Target Milestone:** Release V4  
**Framework:** Next.js App Router (Static Export Target: `output: 'export'`)

---

## 1. Global Sitemap & URL Hierarchy

The platform uses a clean, predictable RESTful routing structure. Because the application exports as a static site (`trailingSlash: true`), every leaf node resolves to an accessible `index.html` file.

```
/ (Homepage — Cinematic Technology Studio)
├── about/ (Personal Narrative, Academic Convergence, Commercial History)
├── contact/ (Direct Inquiry Channels, Collaboration Guidelines)
│
├── research/ (Research Publication Index)
│   ├── semiconductor-value-chains/ (Flagship Investigation)
│   ├── ai-infrastructure-economics/ (Compute Capital Cycles)
│   └── high-na-lithography-economics/ (Physical Constraints & Moats)
│
├── companies/ (Company Intelligence Dossier Index)
│   ├── asml/ (Adaptable Corporate Intelligence Dossier)
│   ├── nvidia/ (CUDA, NVLink & Hyperscaler Lock-in Dossier)
│   └── tsmc/ (Foundry Economics, Packaging & Geopolitical Risk)
│
├── industries/ (Industry Structural Maps Index)
│   ├── semiconductors/ (Physical Tooling, Chemicals, Foundries, Packaging)
│   ├── artificial-intelligence/ (Model Compute, Hyperscaler Infrastructure)
│   └── cloud-computing/ (Enterprise SaaS Unit Economics, Infrastructure Margins)
│
└── projects/ (Project Teardown Index)
    ├── semis-intel/ (Semiconductor Moat & Value-Chain Map Case Study)
    ├── equity-sandbox/ (Enterprise Software Economics Sandbox Case Study)
    ├── evidence-diff/ (Primary Evidence Extraction Toolkit Case Study)
    └── research-platform/ (AbdusSameer Platform Architecture Case Study)
```

---

## 2. Page Classification & Content Taxonomy

| URL Pattern | Page Type | Rendering Strategy | Primary Template | Target Word Count / Density |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Studio Homepage | Static HTML + WebGL Canvas | `src/app/page.tsx` | High-impact visual + ~1,200 words |
| `/about/` | Narrative Bio | Static HTML (`output: 'export'`) | `src/app/about/page.tsx` | ~2,500 words across 5 chapters |
| `/contact/` | Direct Connect | Static HTML (`output: 'export'`) | `src/app/contact/page.tsx` | ~400 words + direct mail channels |
| `/research/` | Article Directory | Static Directory Grid | `src/app/research/page.tsx` | Directory index + sector filters |
| `/research/[slug]/` | Long-Form Teardown | Static HTML (`generateStaticParams`) | `src/app/research/[slug]/page.tsx`| 3,500 – 6,000 words + citations |
| `/companies/` | Company Index | Comparative Matrix Index | `src/app/companies/page.tsx` | Directory of audited corporate dossiers |
| `/companies/[slug]/` | Corporate Dossier | Static HTML (`generateStaticParams`) | `src/app/companies/[slug]/page.tsx`| 4,000 – 7,500 words (15 sections) |
| `/industries/[slug]/` | Structural Map | Static HTML (`generateStaticParams`) | `src/app/industries/[slug]/page.tsx`| 3,000 – 5,000 words + value-chain charts |
| `/projects/` | Projects Directory | Case Study Showcase | `src/app/projects/page.tsx` | 4 curated engineering/analytical builds |
| `/projects/[slug]/` | Project Teardown | Static HTML (`generateStaticParams`) | `src/app/projects/[slug]/page.tsx` | 1,500 – 2,500 words (4-part teardown) |

---

## 3. Global Navigation Systems

### 3.1 Primary Masthead Navigation (Desktop)
The header masthead serves both Experience A and Experience B with unified state:

```
[ AS. ]                   Research   Companies   Projects   Journey   Contact              [ Let's connect ↗ ]
```

* **Brand Anchor:** `AS.` links to `/` from any page.
* **Top-Level Links:**
  - `Research` → `/research/`
  - `Companies` → `/companies/`
  - `Projects` → `/projects/`
  - `Journey` → `/about/`
  - `Contact` → `/contact/`
* **Direct Action:** `Let's connect ↗` links to `/contact/` (or `#contact` if already on the homepage).

### 3.2 Mobile Navigation Drawer (Portalled)
* Mounted via `createPortal(..., document.body)` to guarantee immunity against `backdrop-filter` containing block bugs.
* Full viewport height (`100vh`) with dark blurred backdrop (`bg-ink/60 backdrop-blur-sm`).
* Fully trapped keyboard navigation (`Tab` / `Shift+Tab`) with initial focus on the close button and dismissal via `Escape`.
* Lists all primary destinations with clear section sub-labels.

---

## 4. Internal Relational Linking Architecture

To maximize SEO crawlability, internal page rank distribution, and reader exploration, pages are connected via explicit relational bindings:

```
                  ┌───────────────────────────────┐
                  │   Company Dossier: /asml/     │
                  └──────────────┬────────────────┘
                                 │
           ┌─────────────────────┼─────────────────────┐
           ▼                     ▼                     ▼
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│ Related Industry:   │ │ Related Article:    │ │ Related Project:    │
│ /semiconductors/    │ │ /semi-value-chains/ │ │ /projects/semis-map/│
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

1. **Company Dossiers to Research Articles:** Every company dossier (`/companies/asml/`) explicitly links to related thematic research investigations (`/research/semiconductor-value-chains/`).
2. **Research Articles to Primary Filings & Tools:** Every research paper cross-references the underlying code or modeling project (`/projects/equity-sandbox/`) and audited regulatory filings.
3. **Projects to Real-World Case Studies:** Every project case study cites the real-world companies and industries where its models or extraction algorithms were deployed.
4. **Breadcrumb Trail:** Every subpage renders an accessible semantic breadcrumb component (`nav[aria-label="Breadcrumb"]`) with microdata schema:
   `Home > Companies > ASML` or `Home > Research > Semiconductor Value Chains`.

---

## 5. Static Site Generation & Route Manifest

Because the site deploys to GitHub Pages via Next.js static export (`output: 'export'`), dynamic routes must specify `generateStaticParams()` at build time:

```typescript
// Example: src/app/companies/[slug]/page.tsx
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { slug: 'asml' },
    { slug: 'nvidia' },
    { slug: 'tsmc' },
  ];
}
```

This guarantees 100% pre-rendered HTML files in the `/out` directory, eliminating client-side runtime hydration waterfalls and enabling lightning-fast TTFB (Time to First Byte).
