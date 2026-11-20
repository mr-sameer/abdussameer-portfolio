# AbdusSameer — V4 Research Platform & Editorial Design System
## Experience B: Professional Research & Company Intelligence Platform

**Document Version:** 4.1.0  
**Status:** Approved Research Platform Blueprint  
**Target Milestone:** Release V4  
**Design Identity:** High-Legibility Scholarly Editorial · Deep Ink on Warm Paper

---

## 1. Editorial Design System & Typography Hierarchy

The Research Platform prioritizes sustained readability, information density, scholarly credibility, and search engine optimization. It deliberately eliminates heavy WebGL 3D scenes in favor of fast-loading, accessible static layouts.

```
┌────────────────────────────────────────────────────────────────────────┐
│ RESEARCH EDITORIAL PALETTE                                             │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ Canvas Surface    │ #F5F1E9 (Paper)   │ Warm, glare-free background    │
│ Card Surface      │ #EBE7DF (Card)    │ Subtle structural elevation    │
│ Primary Text      │ #0A1120 (Deep Ink)│ Maximum optical contrast (16:1)│
│ Secondary Text    │ #445064 (Slate)   │ Controlled reading hierarchy   │
│ Monospace Data    │ #596575 (Muted)   │ WCAG AA compliant (5.26:1)     │
│ Accent Highlight  │ #FF5D37 (Vermilion│ Restrained analytical callouts │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

### Typography Hierarchy
* **Article Title (H1):** `Playfair Display`, `font-bold`, `tracking-[-1.5px]`, `leading-[1.1]`, font size `clamp(36px, 4.5vw, 56px)`.
* **Section Headings (H2):** `Playfair Display`, `font-semibold`, `tracking-[-0.5px]`, font size `clamp(24px, 3vw, 36px)`.
* **Sub-Headings (H3):** `DM Sans`, `font-bold`, `tracking-tight`, font size `1.25rem` (`20px`).
* **Body Prose:** `DM Sans`, `font-normal`, `text-ink-secondary`, `leading-[1.75]`, font size `1.0625rem` (`17px`), max reading line-length `68ch`.
* **Telemetry & Metadata:** `DM Mono`, `text-xs`, uppercase, `tracking-wider`.

---

## 2. Epistemological Governance: The 5-Tier Evidence Hierarchy

To guarantee institutional credibility, all statements and figures in Experience B must be explicitly distinguished:

1. **Tier 1 — Audited Primary Facts:** Verifiable corporate data extracted directly from audited regulatory disclosures (SEC Form 10-K, 20-F, statutory filings).
2. **Tier 2 — Technical Specifications:** Verifiable physical engineering metrics extracted from peer-reviewed publications (IEEE, SPIE) or official foundry documentation.
3. **Tier 3 — Analytical Deductions:** Logical economic and competitive moat deductions formulated by synthesizing Tier 1 and Tier 2 evidence.
4. **Tier 4 — Empirical Estimates:** Valuation models, DCF scenarios, and addressable market projections with explicit stated input parameters and sensitivity ranges.
5. **Tier 5 — Research Hypotheses:** Forward-looking strategic questions and scenario analyses explicitly tagged as working theories.

---

## 3. Adaptable Company Intelligence Template

Rather than forcing formulaic adherence to an inflexible schema, the **15-Point Company Intelligence Framework** serves as an **adaptable reference guide**. Sections may be combined, expanded, or omitted depending on the company's business model (e.g. pure-play equipment monopoly vs. fabless semiconductor designer vs. foundry service):

```
┌────────────────────────────────────────────────────────────────────────┐
│ 15-POINT ADAPTABLE COMPANY INTELLIGENCE STRUCTURE                      │
├───────────────────────────────────┬────────────────────────────────────┤
│ 01. Company Overview              │ High-level corporate profile & ID │
│ 02. Business Description          │ Core operations & market charter   │
│ 03. Products & Services           │ Technical hardware/software lineup │
│ 04. Business Segments             │ Reporting divisions & mix breakdown│
│ 05. Revenue Model                 │ Pricing models & cash conversion   │
│ 06. Industry Position             │ Global market share & rankings     │
│ 07. Competitive Landscape         │ Peer group matrix & substitutes    │
│ 08. Technology & Intellectual Prop│ Patents, optical physics, tooling  │
│ 09. Supply Chain & Ecosystem      │ Single-source suppliers & foundries│
│ 10. Financial Performance         │ Audited margins, ROIC, Free Cash   │
│ 11. Growth Drivers                │ Secular adoption catalysts         │
│ 12. Risks & Challenges            │ Geopolitical, technical & customer │
│ 13. Strategic Analysis            │ Moat durability & pricing power    │
│ 14. Sources & Primary References  │ SEC Form 10-K, 20-F & IEEE citations│
│ 15. Related Research              │ Cross-links to platform dossiers   │
└───────────────────────────────────┴────────────────────────────────────┘
```

### Adaptability Guidelines
- **Pure-Play Equipment Makers (e.g. ASML):** Sections 08 (*Technology & Intellectual Property*) and 09 (*Supply Chain*) expand significantly to account for optical mirrors (Zeiss) and laser sources (Cymer).
- **Fabless Chip Designers (e.g. NVIDIA):** Sections 07 (*Competitive Moats*) and 03 (*Products/Software*) emphasize the CUDA developer ecosystem and NVLink interconnect networking.
- **Pure-Play Foundries (e.g. TSMC):** Section 05 (*Revenue Model*) focuses on wafer pricing per process node (N3, N5) and CoWoS advanced packaging capacity allocation.

---

## 4. Reusable Research Article Template

Every thematic industry deep dive in `/research/[slug]/` follows an authoritative scholarly publication layout:

```
┌────────────────────────────────────────────────────────────────────────┐
│ RESEARCH ARTICLE ANATOMY                                               │
├────────────────────────────────────────────────────────────────────────┤
│ • Canonical Breadcrumb: Home > Research > [Article Title]              │
│ • Sector Monogram & Category Badge                                     │
│ • Full Headline (H1) & Sub-Headline (Thesis Statement)                 │
│ • Author Byline: Abdus Sameer · Publication Date · Reading Time        │
│ • Explicit Version & Last Updated Timestamp                            │
│ • Sticky Table of Contents (Desktop Left Rail)                         │
│ • Executive Summary Callout Box (<SummaryBox />)                       │
│ • Analytical Methodology & Epistemological Boundaries                  │
│ • Deep Empirical Analysis (Prose, Data Tables, Schematics)             │
│ • Primary Citations & Verifiable Filing References                     │
│ • Related Company Dossiers & Thematic Investigations                   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Reusable Project Case Study Template

Every engineering and analytical prototype in `/projects/[slug]/` provides complete architectural transparency:

1. **Project Header:** Title, repository link (GitHub), live deployment URL, project category, and current status (`Active Development` or `Experimental Prototype`).
2. **01 / The Problem Addressed:** The empirical bottleneck or analytical friction that motivated the project.
3. **02 / Why It Matters:** The systemic, industrial, or financial implications of solving the problem.
4. **03 / How It Operates (Architecture):** Technical architecture diagram, data ingestion flow, vector embedding models, or mathematical formulas.
5. **04 / What Was Explored & Built:** Complete breakdown of the code, data structures, and outcomes.
6. **05 / Full Technology Stack:** Explicit listing of libraries, languages, and frameworks.
7. **06 / Open Questions & Roadmap:** What remains unfinished or is currently in active development.

---

## 6. Reusable Industry Structural Map Template

Every vertical overview in `/industries/[slug]/` (e.g. `/industries/semiconductors/`) maps the complete economic and physical stack:

1. **Stack Overview Diagram:** Interactive or accessible visual mapping tiers (Tooling → Chemicals → Foundries → Packaging → System Integration → Hyperscalers).
2. **Choke Point Analysis:** Single-point-of-failure bottlenecks across the global supply chain.
3. **Capital Intensity Matrix:** Comparative capital expenditure cycles across market participants.
4. **Cross-Linked Company Index:** Direct links to every company dossier operating within that industry.
