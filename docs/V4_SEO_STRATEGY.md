# AbdusSameer — V4 Comprehensive SEO & Structured Content Strategy

**Document Version:** 4.1.0  
**Status:** Approved SEO Architecture  
**Target Milestone:** Release V4  
**Canonical Domain:** `https://abdussameer.com`

---

## 1. Core SEO Architecture & Philosophy

The AbdusSameer platform treats search engine optimization as an organic byproduct of **rigorous information architecture, high-density original content, and zero-JS accessible semantic HTML**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ FOUR PILLARS OF V4 SEARCH VISIBILITY                                  │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ 1. Zero-JS Read   │ Static Pre-render │ Full text in initial HTML      │
│ 2. Semantic Graph │ Schema.org JSON-LD│ Person, Article, Breadcrumb    │
│ 3. Internal Links │ Relational Web    │ Contextual topical clustering  │
│ 4. Measured CWV   │ Zero Layout Shift │ LCP ≤ 2.2s, CLS 0.00, INP ≤ 100│
└───────────────────┴───────────────────┴────────────────────────────────┘
```

Core Web Vitals are treated as **empirical acceptance targets**, verified through Lighthouse CI and real-device testing, rather than assumed metrics.

---

## 2. Technical SEO & Next.js Implementation

### 2.1 Metadata API Configuration
Every page in the Next.js App Router defines a type-safe `Metadata` object:

```typescript
export const metadata: Metadata = {
  title: 'ASML Corporate Intelligence: The High-NA Lithography Monopoly | Abdus Sameer',
  description: 'In-depth adaptable corporate and technological intelligence dossier analyzing ASML’s optical physics monopoly, High-NA EUV economics, and supply chain choke points.',
  alternates: {
    canonical: 'https://abdussameer.com/companies/asml/',
  },
  openGraph: {
    title: 'ASML Corporate Intelligence Dossier — Abdus Sameer',
    description: 'Deconstructing ASML’s lithography monopoly, EUV optical physics, and geopolitical supply chain bottlenecks.',
    url: 'https://abdussameer.com/companies/asml/',
    siteName: 'Abdus Sameer | Technology Research Platform',
    images: [{ url: '/og/og-asml.svg', width: 1200, height: 630 }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASML Corporate Intelligence Dossier — Abdus Sameer',
    description: 'Deconstructing ASML’s lithography monopoly, EUV optical physics, and geopolitical supply chain bottlenecks.',
    images: ['/og/og-asml.svg'],
  },
};
```

### 2.2 Heading & Semantic Hierarchy
* Exactly **one `<h1>`** per page, containing the primary topical entity and keyword intent.
* Strict nested descending hierarchy: `<h1>` → `<h2>` → `<h3>`. No skipped heading levels.
* Sectional semantics: `<header>`, `<main id="main-content">`, `<nav aria-label="...">`, `<article>`, `<aside>`, `<footer>`.

---

## 3. Structured Data (Schema.org JSON-LD)

### 3.1 Global Entity Schema: `Person` & `WebSite`
Embedded in the root layout (`src/app/layout.tsx`):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abdussameer.com/#person",
      "name": "Abdus Sameer",
      "url": "https://abdussameer.com",
      "jobTitle": "Interdisciplinary Thinker, Researcher & Builder",
      "sameAs": ["https://github.com/mr-sameer"],
      "description": "Curious about how the world works. Connecting computer science, artificial intelligence, semiconductors, economics, finance, business strategy, and human behavior to understand complex systems.",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Bachelor of Computer Applications (BCA)"
        }
      ],
      "knowsAbout": [
        "Computer Science & Distributed Systems",
        "Semiconductor Manufacturing & EUV Lithography",
        "Artificial Intelligence & Machine Learning",
        "Macroeconomics & Financial Valuation",
        "Business Strategy & Competitive Moats",
        "Cognitive Psychology & Behavioral Decision-Making"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://abdussameer.com/#website",
      "url": "https://abdussameer.com",
      "name": "Abdus Sameer | Technology Studio & Research Platform",
      "publisher": { "@id": "https://abdussameer.com/#person" }
    }
  ]
}
```

### 3.2 Research Article Schema: `TechArticle`
Embedded in `/research/[slug]/page.tsx` with explicit classification reflecting the platform's **5-Tier Evidence Taxonomy**:

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Why ASML Sits at the Centre of the AI Compute Race",
  "description": "The physics of EUV lithography, optical monopolies, and High-NA transition economics.",
  "author": { "@id": "https://abdussameer.com/#person" },
  "datePublished": "2026-03-15T00:00:00Z",
  "dateModified": "2026-11-20T00:00:00Z",
  "mainEntityOfPage": "https://abdussameer.com/research/semiconductor-value-chains/",
  "publisher": { "@id": "https://abdussameer.com/#person" },
  "inLanguage": "en-US",
  "keywords": ["ASML", "Semiconductors", "Lithography", "EUV", "AI Hardware"]
}
```

### 3.3 Breadcrumb Schema: `BreadcrumbList`
Embedded on all subpages to generate Google SERP breadcrumbs:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abdussameer.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Companies",
      "item": "https://abdussameer.com/companies/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ASML",
      "item": "https://abdussameer.com/companies/asml/"
    }
  ]
}
```

---

## 4. Crawl Optimization: Sitemap, Robots & LLMs.txt

### 4.1 XML Sitemap Generation (`src/app/sitemap.ts`)
* Configured with `export const dynamic = 'force-static'`.
* Automatically outputs a comprehensive `<urlset>` at `/sitemap.xml` enumerating all company dossiers, research articles, project teardowns, and static landing pages.

### 4.2 Robots.txt (`src/app/robots.ts`)
* Grants full access to all ethical web crawlers:
  ```txt
  User-Agent: *
  Allow: /
  Sitemap: https://abdussameer.com/sitemap.xml
  ```

### 4.3 LLM Crawler Compatibility (`/public/llms.txt`)
* Provides AI search engines and LLM crawlers (Perplexity, ChatGPT, Claude) with structured plain-text markdown context summarizing Abdus Sameer's identity, core research papers, and epistemological framework.
