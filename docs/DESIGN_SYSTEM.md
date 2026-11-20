# Design System: AbdusSameer Technology Research Platform

**Document Version:** 1.1.0  
**Status:** Approved Design Specification  
**Classification:** Visual Direction, Typography, Accessibility & Motion Governance  

---

## 1. Visual Philosophy & Editorial Identity

The visual direction of the **AbdusSameer Technology Research Platform** evokes the physical authority of high-end financial broadsheets and technical publications (such as *The Financial Times*, *MIT Technology Review*, *Stratechery*, and *Monocle*), combined with the precision of modern digital craft.

### Core Visual Principles
1. **The Warm Paper Aesthetic:** The interface relies on warm, tactile organic paper tones (`--cream`: `#F5F1E9`) paired with deep, rich ink (`--ink`: `#0A1120`). This creates an immediate cognitive signal: *this is high-signal long-form reading, not an ephemeral SaaS application or dark-mode developer dashboard.*
2. **Restrained Signature Accent:** The vibrant vermilion accent (`--orange`: `#FF5D37`) is reserved strictly for high-priority wayfinding, critical data callouts, active focus indicators, and key structural separators. It is never used frivolously.
3. **Typographic Hierarchy as Architecture:** Information density is structured through strict font pairing: a commanding editorial serif for headlines, an ultra-legible humanist sans-serif for body analysis, and a technical monospace for financial metrics, ticker items, and primary source citations.
4. **Content-First Motion:** Animation must always clarify comprehension or indicate spatial relationships. It must never act as gratuitous decorative ornamentation.

---

## 2. Color Palette & Design Tokens

### 2.1 Core Palette Tokens

```css
:root {
  /* Surface & Base */
  --bg-primary: #f5f1e9;        /* Warm cream newsprint base */
  --bg-secondary: #ebe7df;      /* Card / Container elevation */
  --bg-tertiary: #e5e0d7;       /* Section contrast background */
  --bg-dark: #0a1120;           /* Deep ink for featured cards & dark sections */

  /* Ink & Typography */
  --text-primary: #0a1120;      /* High-contrast ink for body & titles */
  --text-secondary: #445064;    /* Lead paragraph text */
  --text-muted: #657080;        /* Metadata, labels, secondary information */
  --text-inverse: #f5f1e9;      /* Light text on dark surfaces */
  --text-inverse-muted: #abb2bc;/* Muted light text on dark surfaces */

  /* Signature Brand Accent */
  --accent-orange: #ff5d37;     /* Primary brand accent & wayfinding */
  --accent-orange-hover: #e04b26;

  /* Structural Rules & Borders */
  --border-line: #d9d5cd;       /* Subtle paper borders */
  --border-strong: #0a1120;     /* Solid graphic divider lines */
  --border-dark: #3a4655;       /* Internal borders on dark surfaces */

  /* Sector Brand Marks */
  --badge-semis: #ff5d37;       /* Semiconductor tag */
  --badge-ai: #eae3d8;          /* AI infrastructure mark background */
  --badge-software: #2563eb;    /* Product software accent */
  --badge-services: #059669;    /* IT Services accent */

  /* Status & Risk Callouts */
  --callout-bear-bg: #fdf2f0;   /* Bear case / risk warning container */
  --callout-bear-border: #f87171;
  --callout-bear-text: #991b1b;
  --callout-fact-bg: #f0fdf4;   /* Verified primary fact container */
  --callout-fact-border: #4ade80;
  --callout-fact-text: #166534;
}
```

---

## 3. Typography System & Font Delivery

The platform relies on a tri-font system designed for editorial authority and technical precision:

| Role | Font Family | Fallback Stack | Weights | Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **Editorial Display** | **Playfair Display** | `Georgia, serif` | 600, 700 | Hero headlines, section titles, card headers, pull quotes |
| **Reading Prose** | **DM Sans** | `system-ui, -apple-system, sans-serif` | 400, 500, 700 | Long-form article text, explanatory paragraphs, navigation links |
| **Technical & Metadata** | **DM Mono** | `ui-monospace, SFMono-Regular, monospace` | 400, 500 | Ticker items, dates, reading times, footnotes, metrics, code |

### 3.1 Font Delivery Strategy & CLS Prevention
* **Self-Hosted WOFF2 Preferred:** In accordance with **ADR-007**, fonts should be self-hosted as localized `.woff2` assets inside `/public/fonts/` (or via `next/font/local`). This eliminates third-party DNS overhead, avoids external tracking, and eliminates external network failure points.
* **CLS Mitigation Realism:** Self-hosting significantly mitigates Flash of Unstyled Text (FOUT) and Flash of Invisible Text (FOIT), but does **not automatically guarantee zero Cumulative Layout Shift (CLS)**. To eliminate layout shifts:
  1. Primary weights (Regular 400 and Bold 700) must be preloaded in the document `<head>`.
  2. Fallback fonts (`Georgia`, `system-ui`) must define explicit metric overrides using CSS `@font-face` descriptors:
     ```css
     @font-face {
       font-family: 'DM Sans Fallback';
       src: local('Arial');
       ascent-override: 98%;
       descent-override: 24%;
       line-gap-override: 0%;
       size-adjust: 102%;
     }
     ```
  3. `font-display: swap` must be enforced to ensure immediate text rendering.

### 3.2 Editorial Prose Measure
* **Maximum Line Width:** Article body text must never exceed `68ch` (~720px) to prevent eye fatigue.
* **Line Height:** Body prose line height is set to `1.65` for optimal reading comprehension.

---

## 4. Component Catalog & Guidelines

### 4.1 Accessible Mobile Navigation Drawer (MVP Critical Requirement)
On viewports `< 768px`, the desktop navigation is replaced with a fully accessible slide-out navigation sheet. The component must strictly fulfill the following requirements:
1. **Focus Trapping:** When the drawer is open, keyboard focus (`Tab` / `Shift+Tab`) must be constrained strictly within the drawer modal. Focus cannot escape to background page elements.
2. **ARIA Semantics:**
   * Toggle button: `aria-expanded="true|false"`, `aria-controls="mobile-navigation-drawer"`, `aria-label="Toggle navigation menu"`.
   * Drawer container: `role="dialog"`, `aria-modal="true"`, `aria-label="Site navigation"`.
3. **Escape Key Handling:** Pressing the `Escape` key must immediately close the drawer and restore keyboard focus directly to the toggle button.
4. **Body Scroll-Locking:** Opening the drawer must lock background body scrolling (`overflow: hidden` on `document.body`) to prevent disorienting background scroll behavior on iOS and Android devices.
5. **Close on Route Change:** Selecting any navigation link must close the drawer and unlock the body scroll before navigating to the target anchor.

### 4.2 Research Analysis Cards
* **Featured Card:** Deep ink background (`--bg-dark`), crisp white typography, prominent orange chip badge.
* **Standard Card:** Warm cream elevated surface (`--bg-secondary`), dark typography, company mark, reading time tag.
* **Hover Interaction:** Subtle upward translation (`-3px`) and accentuation of the arrow symbol (`↗`).

### 4.3 Editorial In-Article Components
* **"In One Minute" Executive Summary Box:** High-contrast bordered summary block outlining:
  * *What it does* (The business model in one sentence).
  * *Why it matters* (The durable structural moat).
  * *What to watch* (Near-term catalysts and thesis invalidators).
* **Primary Source Footnote (`<Citation />`):** Accessible footnote showing verified source name, SEC filing type or technical paper, date, and outbound link.
* **Bear Case / Structural Risk Box:** Dedicated callout container styled with subtle vermilion tone highlighting asymmetric risks.

---

## 5. Motion, Animation & 3D Performance Governance

### 5.1 Guiding Motion Principles
* **Strict Respect for `prefers-reduced-motion`:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

### 5.2 Motion (Framer Motion)
* **Scope (MVP):** Restricted to mobile drawer open/close transitions, card micro-elevations, and focus states.

### 5.3 GSAP & ScrollTrigger (Deferred to Phase 2)
* **Implementation Rule:** GSAP must be dynamically imported only on pages requiring narrative pinning. All GSAP animations inside React components must be wrapped in `useGSAP()` or cleaned up using `gsap.context()` to guarantee safe teardown in React Strict Mode.

### 5.4 Selective 3D & WebGL Performance Governance (Deferred to Phase 3)
* **Adoption Criteria:** 3D rendering (Three.js / React Three Fiber) is strictly reserved for physical hardware explainers (e.g., EUV optics or advanced chip packaging) where 2D diagrams fail.
* **Measurable Performance Budgets:**
  1. **Frame Rate:** Must maintain a sustained 60fps on mid-tier mobile hardware (e.g., Snapdragon 778G / A14 Bionic equivalent).
  2. **GPU Memory Allocation:** Total WebGL texture and geometry memory must remain under `50MB`.
  3. **Viewport Suspension:** WebGL render loops (`requestAnimationFrame`) must be paused immediately via `IntersectionObserver` when the canvas scrolls out of view.
  4. **Device Testing & Low-Power Fallback:** The canvas must be dynamically imported with `ssr: false`. Devices reporting `navigator.hardwareConcurrency <= 4`, low battery state, or WebGL context creation failure must immediately fallback to a high-resolution 2D WebP/SVG illustration.
  5. **Touch Scroll Protection:** OrbitControls gesture handling must disable touch-intercept so that vertical page scrolling on mobile is never trapped inside the canvas.

---

## 6. Accessibility & Core Web Vitals Targets

1. **Contrast Compliance:** All text tokens meet WCAG 2.1 AA standards (minimum 4.5:1 for body copy; 3:1 for large display headers).
2. **Focus Management:** Visible 2px solid `--accent-orange` focus rings with 2px offset on all interactive links and buttons.
3. **Skip-to-Content Link:** Native keyboard navigation bypass anchor (`<a href="#main" class="skip-link">Skip to main research</a>`).
4. **Performance Targets:**
   * **Cumulative Layout Shift (CLS):** < 0.02.
   * **Largest Contentful Paint (LCP):** < 1.5 seconds.
   * **Interaction to Next Paint (INP):** < 80 milliseconds.

---

## 7. Open Questions (Unresolved Decisions)

1. **OPEN QUESTION — Dark Mode Support (Phase 2):** Should the platform remain strictly committed to the signature "Warm Paper / Ink" aesthetic as its sole brand identity, or introduce an opt-in dark mode toggle in Phase 2?
2. **OPEN QUESTION — Dynamic Charts Visual Style (Phase 2):** Should financial charts in Phase 2 strictly mimic paper broadsheet print (monochrome ink lines with single orange accents), or utilize categorical sector colors?
