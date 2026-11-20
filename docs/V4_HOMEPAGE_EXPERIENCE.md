# AbdusSameer — V4 Homepage Experience Specification
## Experience A: The Cinematic Technology Studio

**Document Version:** 4.1.0  
**Status:** Approved Homepage Blueprint  
**Target Milestone:** Release V4  
**Design Identity:** Cinematic Studio · Warm Paper · Deep Ink · Restrained Vermilion

---

## 1. Homepage Architectural Blueprint (The 6 Concise Experiences)

The V4 homepage is purposefully kept concise, condensing the previous 10 fragmented sections into **six high-impact, story-driven studio experiences**. Detailed documentation, multi-year financial tables, exhaustive 4-part project descriptions, and extended biographies are moved strictly to dedicated pages (`/about/`, `/companies/*`, `/research/*`, `/projects/*`):

```
┌────────────────────────────────────────────────────────────────────────┐
│ 01. CINEMATIC HERO                                                     │
│ • Interdisciplinary Thinker · Researcher · Builder                      │
│ • "Connecting ideas. Understanding systems. Solving problems."         │
│ • Three.js 3D Semiconductor Architecture & Orbiting Knowledge Nodes     │
│ • Dual Primary CTAs: [ Explore Research ↓ ] [ Discover My Journey → ] │
├────────────────────────────────────────────────────────────────────────┤
│ 02. INTERDISCIPLINARY KNOWLEDGE NETWORK                                │
│ • "Complex problems rarely belong to a single discipline"              │
│ • 10-Field Interactive Convergence Graph (Visual Network Diagram)      │
│ • Dynamic Cross-Disciplinary Pairings & Applied Insights               │
├────────────────────────────────────────────────────────────────────────┤
│ 03. SELECTED PROJECTS                                                  │
│ • Curated 3–4 Engineering & Financial Sandbox Builds                   │
│ • Asymmetric High-Typography Previews (Detailed teardowns on subpages) │
│ • Direct Link to Full Project Dossiers (/projects/[slug]/)             │
├────────────────────────────────────────────────────────────────────────┤
│ 04. COMPANY INTELLIGENCE                                               │
│ • Deep-Dive Corporate Teardowns: ASML · NVIDIA · TSMC                  │
│ • Monograms, Moat Metrics, Strategic Position Indicators               │
│ • Direct Link to Adaptable Company Intelligence (/companies/[slug]/)   │
├────────────────────────────────────────────────────────────────────────┤
│ 05. SELECTED RESEARCH                                                  │
│ • Thematic Macro & Semiconductor Value-Chain Investigations           │
│ • Structured Value-Chain Diagram Preview                               │
│ • Direct Link to Long-Form Research Articles (/research/[slug]/)       │
├────────────────────────────────────────────────────────────────────────┤
│ 06. PERSONAL INTRODUCTION & CONTACT                                    │
│ • Concise Personal Orientation (Non-Résumé Intellectual Profile)        │
│ • Navigation Hub: [ About ] [ Projects ] [ Research ] [ Contact ]      │
│ • Direct Mail & Research Collaboration Channel                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Section-by-Section Engineering & Creative Specification

### Section 01 — Cinematic Hero
* **Objective:** Establish immediate technological craftsmanship, intellectual ambition, and systemic curiosity without cognitive overload.
* **Content:**
  - **Eyebrow:** `Interdisciplinary Thinker · Researcher · Builder` (with glowing vermilion status pip).
  - **Primary Headline:**
    ```
    Connecting ideas.
    Understanding systems.
    Solving problems.
    ```
  - **Concise Philosophy:**
    *"I explore ideas across computer science, artificial intelligence, economics, finance, mathematics, business strategy, and human psychology to understand complex systems and discover new approaches to meaningful problems."*
  - **CTAs:**
    - Primary Button (`dark`): `Explore Research ↓` (smooth scrolls to `#research` or navigates to `/research/`).
    - Secondary Button (`text`): `Discover My Journey →` (links to `/about/`).
* **3D Visual Canvas (`WaferScene3D.tsx`):**
  - **Wafer Geometry:** 300mm silicon substrate cylinder with chamfered bevel ring, dark obsidian silicon roughness (`0.18`), and high metalness (`0.92`).
  - **Layered Architecture:** Raised stepper die grid with micro-dicing channels; central Multi-Chip Module (SoC) featuring an elevated compute logic die flanked by four High-Bandwidth Memory (HBM) stacks.
  - **Photolithography Optics:** Etched copper circuit bus traces running in 45°/90° angles; concentric measurement reticle rings with laser alignment crosshairs.
  - **Orbiting Knowledge Nodes:** 6 colored constellation spheres with pulsing halos, connected to the core die via 3D cubic Bézier splines carrying dynamic traveling data packets.
  - **Lighting:** Ambient fill (`0.55`), grazing directional key light (`2.8`), and signature warm vermilion rim light (`#ff5d37` at intensity `4.2`).
  - **Interaction:** Damped mouse cursor tracking alters pitch and yaw; paused via `IntersectionObserver` when scrolled out of view; full vector SVG fallback (`<SemiconductorLattice />`) on non-WebGL environments.
* **Layout:**
  - *Desktop (`≥ 1024px`):* 12-column grid. Left 7 cols for narrative typography; Right 5 cols for the 560px 3D canvas.
  - *Mobile (`< 768px`):* Single-column vertical stack. 3D canvas scales to 380px with simplified particle density.

---

### Section 02 — Interdisciplinary Knowledge Network
* **Objective:** Visually demonstrate how connecting 10 disparate intellectual domains yields asymmetric insight into complex systems without relying on long static paragraphs.
* **Core Domains (10 Nodes):**
  1. *Computer Science* (Distributed systems, computational limits)
  2. *Artificial Intelligence* (Model architectures, scaling laws)
  3. *Semiconductors / Engineering* (Lithography, physical packaging)
  4. *Applied Mathematics* (Optimization, information theory, discrete geometry)
  5. *Macroeconomics* (Capital cycles, resource allocation)
  6. *Corporate Finance* (Valuation, cash-flow conversion, capital structure)
  7. *Business Strategy* (Moats, switching costs, distribution leverage)
  8. *Cognitive Psychology* (Incentive structures, heuristic decision-making)
  9. *Economic History* (Long-wave technology installations)
  10. *Human Behaviour* (Organizational culture, reflexivity)
* **Interactive Interaction:**
  - Readers interact with an animated node cluster diagram.
  - Selecting a pairing dynamically illuminates the connecting laser pathway and reveals an editorial dossier:
    - *The Thesis* (e.g., *"Hardware physics and distributed systems define the real boundaries of machine intelligence"*).
    - *The Underlying Mechanism* (Memory wall limits, NVLink fabric bandwidth).
    - *Applied Case Study* (LLM training scaling bounds).
    - *Cross-Link:* Direct link to the related company dossier or research investigation.

---

### Section 03 — Selected Projects Showcase
* **Objective:** Showcase empirical builder capability without cluttering the homepage with exhaustive 4-part text blocks.
* **Structure:** Exactly 3–4 curated builds:
  1. **Semiconductor Moat & Value-Chain Map:** Interactive dependency graph tracing economic value from optical tooling to foundries and hyperscalers.
  2. **Enterprise Software Economics Sandbox:** Dynamic DCF and cohort-retention engine isolating cloud infrastructure COGS and sales comp drag.
  3. **Primary Evidence Extraction Toolkit:** Automated vector diffing pipeline isolating quarter-over-quarter disclosure shifts in SEC 10-K filings.
  4. **AbdusSameer Independent Research Platform:** The open-source Next.js 15 static architecture powering this publication.
* **Visual Treatment:**
  - Asymmetric cards featuring large monospace index numbers (`01`, `02`, `03`, `04`), short punchy descriptions, technology tags, and an explicit `Explore Project Case Study ↗` link pointing to `/projects/[slug]/`.

---

### Section 04 — Company Intelligence
* **Objective:** Establish the platform's rigorous corporate analysis credentials through company previews.
* **Featured Companies:**
  - **ASML:** Optical physics monopoly, High-NA EUV transition economics, customer concentration risks.
  - **NVIDIA:** CUDA software moat, NVLink interconnect architecture, hyperscaler CAPEX sensitivity.
  - **TSMC:** Sub-3nm process yields, CoWoS advanced packaging capacity, geopolitical supply chain risk.
* **Card Information Architecture:**
  - Official corporate monogram / brand glyph.
  - Sector & Tier tag (e.g. `Semiconductor Equipment · Tier-1 Tooling`).
  - Primary Analytical Focus (Moat, Capital Allocation, Valuation).
  - Explicit status badge (`Research in Progress` / `Draft Analysis`).
  - Call to Action: `Read Company Intelligence Dossier →` pointing to `/companies/[slug]/`.

---

### Section 05 — Selected Research
* **Objective:** Highlight thematic, cross-company industry investigations and structural value-chain analyses.
* **Featured Dossiers:**
  - *The Semiconductor & AI Compute Value Chain:* Interactive 4-tier industry map (Optics → Foundry → Compute → Hyperscaler).
  - *Hyperscaler Capital Allocation & AI ROI:* Analyzing whether massive data center CAPEX converts into durable software gross margins.
  - *Physical Packaging as the New Moore's Law:* High-NA EUV depth-of-focus and 2.5D/3D interposer yields.
* **CTA:** Concise executive takeaways with direct links to full research articles (`/research/[slug]/`).

---

### Section 06 — Personal Introduction & Contact Hub
* **Objective:** Provide a dignified, non-résumé personal orientation and open direct collaboration channels.
* **Narrative:** Re-iterates Abdus Sameer's interdisciplinary orientation, curiosity about global systems, and commitment to primary evidence.
* **Navigation Matrix:**
  - `[ Read Complete Journey on About Page → ]` (`/about/`)
  - `[ Browse Engineering & Financial Projects → ]` (`/projects/`)
  - `[ Explore All Research Dossiers → ]` (`/research/`)
* **Contact Block:** Warm Vermilion accent section with direct mail address (`hello@abdussameer.com`) and GitHub research links.
