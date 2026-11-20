# SEO Strategy & AI Discoverability: AbdusSameer Technology Research Platform

**Document Version:** 1.1.0  
**Status:** Approved Technical SEO Specification  
**Classification:** Technical SEO, Schema Architecture, Social Graph & LLM Discoverability  

---

## 1. Strategic Objective

The SEO strategy for the **AbdusSameer Technology Research Platform** is engineered to establish organic search authority for high-intent, long-tail technical research queries (e.g., *"ASML EUV lithography moat analysis"*, *"NVIDIA Blackwell packaging interconnect bottlenecks"*, *"enterprise AI stack value capture"*).

The platform rejects keyword stuffing and clickbait tactics in favor of **deep topical authority**, **flawless technical crawlability**, **rich structured data**, and **discoverability in AI search engines** (Perplexity, SearchGPT, Google Gemini, Claude).

---

## 2. Technical SEO Architecture

### 2.1 Server-Side Indexability (Zero-JS Editorial Accessibility)
* Search engine bots (Googlebot, Bingbot) and AI web crawlers must receive **complete, pre-rendered semantic HTML** without relying on client-side JavaScript execution.
* Next.js Static Site Generation (`output: 'export'`) pre-renders all research articles into pristine HTML files containing all headings, paragraphs, tables, and citations directly in the response payload.

### 2.2 Canonical URL Structure
* Every URL on the platform must specify an explicit, self-referencing canonical tag to prevent duplicate content indexing:
  ```html
  <link rel="canonical" href="https://abdussameer.com/analysis/asml" />
  ```
* Standard URL Hierarchy:
  * Homepage: `https://abdussameer.com/`
  * Article Detail: `https://abdussameer.com/analysis/:slug`
  * About & Methodology: `https://abdussameer.com/about`

### 2.3 Robots.txt Configuration
The `robots.txt` file permits unrestricted indexing and points search engines directly to the XML sitemap:

```text
User-agent: *
Allow: /

# Direct sitemap declaration
Sitemap: https://abdussameer.com/sitemap.xml
```

### 2.4 XML Sitemap Engine
The platform dynamically generates an XML sitemap during the build process, adhering strictly to the Sitemaps.org 0.9 schema:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://abdussameer.com/</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://abdussameer.com/analysis/asml</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://abdussameer.com/analysis/nvidia</loc>
    <lastmod>2026-11-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 3. Structured Data (Schema.org / JSON-LD)

Structured data translates editorial articles into machine-readable knowledge graph entities.

### 3.1 Homepage Schema (`Person` + `WebSite`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abdussameer.com/#person",
      "name": "Abdus Sameer",
      "jobTitle": "Technology Investment Analyst",
      "url": "https://abdussameer.com",
      "sameAs": [
        "https://github.com/mr-sameer",
        "https://linkedin.com/in/abdussameer"
      ],
      "knowsAbout": [
        "Semiconductor Manufacturing",
        "Artificial Intelligence Infrastructure",
        "Enterprise Software Economics",
        "Financial Valuation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://abdussameer.com/#website",
      "url": "https://abdussameer.com",
      "name": "Abdus Sameer | Technology Research",
      "publisher": { "@id": "https://abdussameer.com/#person" }
    }
  ]
}
```

### 3.2 Research Article Schema (`TechArticle` + `BreadcrumbList`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://abdussameer.com/analysis/asml#article",
      "isPartOf": { "@id": "https://abdussameer.com/#website" },
      "headline": "Why ASML Sits at the Centre of the AI Compute Race",
      "description": "An evidence-led analysis of ASML's lithography moat, EUV supply chain power, and risks in the AI compute cycle.",
      "inLanguage": "en-US",
      "mainEntityOfPage": "https://abdussameer.com/analysis/asml",
      "datePublished": "2026-07-15T08:00:00+00:00",
      "dateModified": "2026-11-20T10:00:00+00:00",
      "author": { "@id": "https://abdussameer.com/#person" },
      "publisher": { "@id": "https://abdussameer.com/#person" },
      "image": "https://abdussameer.com/og/asml.png",
      "about": [
        { "@type": "Thing", "name": "Semiconductors" },
        { "@type": "Thing", "name": "EUV Lithography" },
        { "@type": "Corporation", "name": "ASML", "tickerSymbol": "ASML" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://abdussameer.com/analysis/asml#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://abdussameer.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Analysis",
          "item": "https://abdussameer.com/#analysis"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ASML Deep Dive",
          "item": "https://abdussameer.com/analysis/asml"
        }
      ]
    }
  ]
}
```

---

## 4. Social Sharing & Metadata Specification

Every page must serve a complete Open Graph and Twitter Card metadata package to ensure high-engagement visual rendering when shared on X (Twitter), LinkedIn, Slack, and Substack.

```html
<!-- Primary Metadata -->
<title>Why ASML Sits at the Centre of the AI Compute Race | Abdus Sameer</title>
<meta name="description" content="An evidence-led analysis of ASML's lithography moat, EUV supply chain power, and risks in the AI compute cycle." />

<!-- Open Graph (Facebook / LinkedIn / Slack) -->
<meta property="og:site_name" content="Abdus Sameer — Technology Research" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Why ASML Sits at the Centre of the AI Compute Race" />
<meta property="og:description" content="An evidence-led analysis of ASML's lithography moat, EUV supply chain power, and risks in the AI compute cycle." />
<meta property="og:url" content="https://abdussameer.com/analysis/asml" />
<meta property="og:image" content="https://abdussameer.com/og/asml.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="ASML Research Analysis by Abdus Sameer" />
<meta property="article:published_time" content="2026-07-15T08:00:00+00:00" />
<meta property="article:modified_time" content="2026-11-20T10:00:00+00:00" />
<meta property="article:author" content="Abdus Sameer" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Why ASML Sits at the Centre of the AI Compute Race" />
<meta name="twitter:description" content="An evidence-led analysis of ASML's lithography moat, EUV supply chain power, and risks in the AI compute cycle." />
<meta name="twitter:image" content="https://abdussameer.com/og/asml.png" />
```

### Pre-Generated Static Social Images (ADR-008)
* In accordance with **ADR-008**, dynamic runtime Edge generation is replaced with **pre-generated static social preview images**.
* Build-time generation (via Satori / `@resvg/resvg-js` in a Node pre-build script) or curated high-resolution PNGs stored in `/public/og/` will output 1200x630px cards containing:
  * Brand Mark: `AS.`
  * Sector Chip: `SEMICONDUCTORS` / `AI INFRASTRUCTURE`
  * Article Headline: Styled in Playfair Display
  * Metadata: Reading time & author attribution

---

## 5. Discoverability in AI Search Engines (LLM Optimization)

1. **Clear Fact Extraction Blocks ("In One Minute"):**
   * LLMs rely on structured executive summaries at the beginning of documents to extract facts for citation synthesis. The "In One Minute" block provides direct question-answer pairings (*What it does*, *Why it matters*, *What to watch*).
2. **Explicit Semantic Headings:**
   * Headings are framed as definitive topics rather than clever wordplay (e.g., `## The Physics and Economics of EUV Lithography` rather than `## Magic in the Machine`).
3. **Machine-Readable Sources Block:**
   * Standardized footnote anchor tags enable AI retrieval systems to ground citations in original SEC filings and transcripts.
4. **Experimental `llms.txt` Support:**
   * Providing an `/llms.txt` file at the root domain detailing the platform's core research theses, author bio, and full URL index.
   * *Status Note:* `llms.txt` is an **experimental community proposal**, not an established W3C standard. It is treated as an opportunistic enhancement rather than a guaranteed indexing mechanism.

---

## 6. Core Web Vitals & Performance Targets

Performance is a confirmed Google ranking factor and vital for user retention:

| Metric | Target | Rationale & Defense Strategy |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | **< 1.5s** | Pre-rendered HTML, inline critical CSS, preloaded self-hosted WOFF2 fonts, and optimized WebP images. |
| **Cumulative Layout Shift (CLS)** | **< 0.02** | Explicit font fallback metric matching (`size-adjust`), explicit aspect ratios on all cards, zero dynamic ads. |
| **Interaction to Next Paint (INP)** | **< 80ms** | Minimal client-side JavaScript execution; interactive leaves isolated to mobile drawer. |
| **First Contentful Paint (FCP)** | **< 1.0s** | Edge CDN static distribution eliminating external third-party font DNS overhead. |

---

## 7. Open Questions (Unresolved Decisions)

1. **OPEN QUESTION — Syndication Canonical Strategy:** If research essays are cross-published on external platforms (such as Substack, LinkedIn, or Medium), will those platforms support cross-domain canonical tags pointing back to `abdussameer.com`?
2. **OPEN QUESTION — Build-Time Automated OG Pipeline:** Should build-time social image generation use Satori in a custom GitHub Actions script, or should social cards be curated manually as static SVG/PNG assets in `/public/og/` during the MVP? *(Architect recommendation: Curate static assets for the 2 MVP articles; automate via Satori when article volume exceeds 5).*
