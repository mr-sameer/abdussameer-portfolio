# Current State Audit & Technical Debt Inventory

**Document Version:** 1.1.0  
**Audit Date:** November 20, 2026  
**Status:** Baseline Repository Inspection Report & Governance Record  
**Target Repository:** `abdussameer-portfolio` (`git@github.com:mr-sameer/abdussameer-portfolio.git`)  

---

## 1. Executive Summary

This document preserves the baseline architectural inspection of the `abdussameer-portfolio` repository conducted prior to the creation of the documentation suite. 

The repository currently contains a lightweight, static single-page website with draft article templates. While the visual aesthetic is well-conceived (warm newsprint palette, strong typography), the codebase exhibits critical path mismatches, broken inbound and outbound links, unimported fonts on subpages, incomplete SEO metadata, and lack of a structured content authoring workflow.

In accordance with **ADR-009 (Approved Founder Decision #9)**, existing website files on `main` will remain untouched. Legacy remediation will occur through a separate reviewed branch or will be superseded upon deployment of the Next.js migration.

---

## 2. File-by-File Repository Inventory

The repository root currently consists of 8 files:

```text
/Users/abdussameer/Desktop/abdussameer-portfolio/
├── .git/               # Git version control directory (main branch, clean working tree)
├── README.md           # Basic instructions for GitHub Pages deployment
├── asml.html           # Draft analysis template for ASML (located in root)
├── index.html          # Main single-page portfolio & research landing page
├── nvidia.html         # Draft analysis template for NVIDIA (located in root)
├── robots.txt          # Standard robots indexing instructions
├── script.js           # 1-line script for dynamic copyright year
├── sitemap.xml         # XML sitemap declaring 3 URLs
└── styles.css          # Monolithic minified stylesheet (2 lines)
```

### Detailed File Analysis

| File Name | Size (Bytes) | Role & Implementation | Key Observations & Deficiencies |
| :--- | :--- | :--- | :--- |
| `index.html` | 6,881 | Homepage layout, hero, latest research grid, about, skills, and contact sections. | Links to `analysis/asml.html` and `analysis/nvidia.html` which do not exist at that path (produces 404). Lacks full Open Graph and Twitter Card tags. |
| `asml.html` | 1,849 | Draft template for ASML company analysis. | Located in root directory, but references `../styles.css` and `../index.html`. Lacks Google Fonts `<link>` tags. Body contains placeholder instructions. |
| `nvidia.html` | 1,422 | Draft template for NVIDIA company analysis. | Located in root directory, but references `../styles.css` and `../index.html`. Lacks Google Fonts `<link>` tags. Body contains placeholder instructions. |
| `styles.css` | 6,121 | Monolithic CSS file defining CSS custom properties, grid layouts, and responsive breakpoints. | Minified into 2 long lines. On viewports `< 760px`, `nav { display: none }` hides navigation completely without providing a mobile menu alternative. |
| `script.js` | 72 | Single DOM manipulation statement: `document.getElementById('year').textContent = new Date().getFullYear();` | Only included on `index.html`. Subpages omit footer and script. |
| `robots.txt` | 69 | Grants universal access (`User-agent: *`, `Allow: /`) and declares sitemap location. | Valid, but points to `https://abdussameer.com/sitemap.xml`. |
| `sitemap.xml` | 295 | Lists `https://abdussameer.com/`, `.../analysis/asml.html`, and `.../analysis/nvidia.html`. | Valid XML syntax, but entries lack `<lastmod>`, `<changefreq>`, and `<priority>`. Paths point to nonexistent `/analysis/` folder. |
| `README.md` | 1,020 | High-level instructions for GitHub Pages deployment and content guidelines. | Instructs author to *"Add a new analysis by copying an existing file in `analysis/`"*, even though the `analysis/` directory was never created. |

---

## 3. Critical Path Mismatches & Broken Links

### 3.1 The Directory Discrepancy
```
Expected Directory Hierarchy (by index.html, sitemap.xml & README.md):
├── index.html
├── styles.css
└── analysis/
    ├── asml.html
    └── nvidia.html

Actual Directory Hierarchy on Disk:
├── index.html
├── styles.css
├── asml.html   <-- Located in root
└── nvidia.html <-- Located in root
```

### 3.2 Impact of the Discrepancy
1. **Broken Links from Homepage:**
   * Clicking "Read analysis ↗" for ASML (`index.html:42`) triggers a request to `analysis/asml.html` -> **HTTP 404 Not Found**.
   * Clicking "Read analysis ↗" for NVIDIA (`index.html:43`) triggers a request to `analysis/nvidia.html` -> **HTTP 404 Not Found**.
2. **Broken Styling & Back-Navigation on Subpages:**
   * If a user visits `/asml.html` directly:
     * `<link rel="stylesheet" href="../styles.css">` looks for `styles.css` in the parent directory (`..`), which fails. The page renders with unstyled default browser HTML.
     * `<a href="../index.html">` navigates to the parent directory, failing to resolve the root homepage.
3. **Broken Sitemap Declarations:**
   * `sitemap.xml` submits `https://abdussameer.com/analysis/asml.html` to search engines, causing search crawlers to index 404 error responses.

---

## 4. Typography & Subpage Visual Gaps

* **Missing Web Font Imports:**
  * `index.html` connects to Google Fonts for `Playfair Display`, `DM Sans`, and `DM Mono`.
  * `asml.html` and `nvidia.html` inline `font-family:'Playfair Display',serif` and rely on `styles.css` for `DM Sans`, but **neither subpage imports the Google Fonts stylesheet**.
  * Consequence: Headlines and body copy on subpages fall back to system serif (Times New Roman) and sans-serif (Arial).

---

## 5. SEO & Social Graph Deficiencies

1. **Incomplete Open Graph Metadata:**
   * `index.html` defines only `og:title` and `og:description`.
   * Missing: `og:url`, `og:type`, `og:image`, `og:image:width`, `og:image:height`, and `og:site_name`.
   * `asml.html` and `nvidia.html` have **zero** Open Graph tags.
2. **Missing Twitter Card Metadata:**
   * No `twitter:card`, `twitter:title`, `twitter:description`, or `twitter:image` tags exist across any page.
3. **Missing Canonical Tags:**
   * No self-referencing `<link rel="canonical">` exists on any page.
4. **Missing Favicon & Mobile Icons:**
   * No `<link rel="icon">`, `<link rel="apple-touch-icon">`, or webmanifest is declared.
5. **Missing Article Structured Data:**
   * While `index.html` contains a `Person` schema, neither analysis article includes `TechArticle`, `Article`, or `BreadcrumbList` JSON-LD schemas.

---

## 6. Responsive Design & Usability Defects

* **Mobile Navigation Disappearance:**
  * In `styles.css` (Line 2):
    ```css
    @media (max-width: 760px) {
      nav { display: none; }
    }
    ```
  * On mobile devices (< 760px), all primary navigation links (`Analysis`, `About`, `Work`) are removed from the layout.
  * No hamburger toggle, modal sheet, or accessible drawer exists to restore navigation.
* **Lack of Skip Link:**
  * Keyboard-only and screen-reader users cannot bypass header navigation to reach main content directly.

---

## 7. Technical Debt Inventory Summary

| ID | Issue Description | Severity | Remediation Policy |
| :--- | :--- | :--- | :--- |
| **TD-01** | Root path mismatch for `asml.html` and `nvidia.html` causing 404s. | **Critical** | Superseded by Next.js migration (ADR-009). `main` remains untouched. |
| **TD-02** | Broken relative paths (`../styles.css`, `../index.html`) on subpages. | **High** | Superseded by Next.js migration. |
| **TD-03** | Missing Google Fonts imports on subpages. | **Medium** | Replaced with self-hosted WOFF2 fonts in Next.js (ADR-007). |
| **TD-04** | Complete absence of Open Graph and Twitter cards on subpages. | **High** | Resolved via pre-generated static OG images in MVP (ADR-008). |
| **TD-05** | Mobile navigation completely hidden below 760px viewport. | **Medium** | Resolved via accessible mobile navigation drawer (ADR-006). |
| **TD-06** | Manual HTML duplication required to publish new research. | **High** | Resolved via Git-backed MDX pipeline with Zod validation (ADR-004). |
| **TD-07** | Minified monolithic CSS without source maps or token extraction. | **Low** | Resolved via Tailwind CSS and design tokens. |

---

## 8. Legacy File Governance Decision

* In accordance with **ADR-009**, no files on `main` will be modified, deleted, or renamed during the documentation phase.
* Legacy files will be safely archived or superseded during final deployment of the Phase 1 Next.js application.
