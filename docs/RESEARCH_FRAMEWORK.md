# Research Framework & Editorial Standards: AbdusSameer

**Document Version:** 1.1.0  
**Status:** Approved Editorial Policy  
**Classification:** Research Methodology, Evidence Hierarchy & Editorial Review Standards  

---

## 1. Editorial Philosophy: "Evidence Before Narrative"

The AbdusSameer platform exists to produce world-class, independent research on the technology sector. The platform's foundational motto is:

> *"Complex companies. Clear thinking. Built on evidence, not noise."*

Every published piece of research must be rooted in first principles, verify claims through authoritative primary documentation, and rigorously segregate verifiable facts from analytical interpretation.

### Non-Financial Advice Boundary
All research published on the platform is created strictly for educational, analytical, and intellectual purposes. It **never** constitutes investment advice, securities recommendations, or an offer to buy or sell securities. Every article must carry an explicit legal disclaimer.

---

## 2. Core Research Disciplines & Formats

The platform categorizes technology research into four distinct editorial disciplines:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   ABDUSSAMEER RESEARCH DISCIPLINES                     │
├─────────────────────┬───────────────────┬──────────────────────────────┤
│ 1. COMPANY DEEP     │ 2. TECHNOLOGY     │ 3. INDUSTRY VALUE CHAIN      │
│    DIVES            │    EXPLAINERS     │    MAPS                      │
│ Moat analysis, unit │ Physical limits,  │ Choke points, supplier power,│
│ economics, capital  │ software systems, │ economic rent migration      │
│ allocation cycles   │ architecture specs│ across technology stacks     │
├─────────────────────┴───────────────────┴──────────────────────────────┤
│ 4. QUARTERLY EARNINGS TEARDOWNS                                        │
│ Signal vs. noise extraction, guidance changes, CAPEX disclosures       │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Company Deep Dives (e.g., ASML, NVIDIA, TSMC, Microsoft)
* **Goal:** Understand the fundamental business engine before the stock price.
* **Standard Structure:**
  1. *In One Minute:* Business definition, structural moat, and catalysts to monitor.
  2. *The Technological Core:* What the company actually engineers and why it is difficult to duplicate.
  3. *Unit Economics & Financial Engine:* Revenue drivers, gross margins, capital intensity, free cash flow conversion.
  4. *The Counter-Thesis & Structural Risks:* Explicit reasons why the company could underperform or face obsolescence.
  5. *Sources & Revision Log:* Transparent log of all primary documents inspected.

### 2.2 Technology Explainers (e.g., Extreme Ultraviolet Lithography, HBM3e Packaging, Enterprise RAG)
* **Goal:** Demystify foundational engineering breakthroughs for business and market thinkers without losing technical integrity.
* **Standard Structure:**
  1. *The Engineering Bottleneck:* The physical or computational limit being solved.
  2. *How It Works:* Plain-English breakdown with structural diagrams.
  3. *Economic Implications:* Which companies capture the economic rent created by this breakthrough.

### 2.3 Industry Value Chain Maps (e.g., The Global AI Compute Stack)
* **Goal:** Map the flow of capital and dependencies across an entire vertical (from raw silicon wafers and optics to data center power, foundational model training, and application software).
* **Strict Distinction from Procurement:** Value-chain research maps **macroeconomic choke points, capital allocation efficiency, and pricing power**. It is strictly distinct from manufacturing procurement directories, supplier sourcing databases, or vendor bidding systems.

### 2.4 Quarterly Earnings Teardowns
* **Goal:** Filter out PR talking points to evaluate management commentary against historical commitments, inventory trends, customer concentration, and CAPEX yields.

---

## 3. Primary-Source Evidence Hierarchy

All claims, figures, and technical assertions must strictly conform to the following credibility hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 1: AUTHORITATIVE PRIMARY SOURCES (Gold Standard)                  │
│ • SEC Filings (10-K, 10-Q, 8-K, S-1)                                   │
│ • Audited Financial Statements & Earnings Conference Call Transcripts  │
│ • Registered Patent Filings & Official Corporate Whitepapers           │
│ • Formal Press Releases from Company Investor Relations                │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 2: DIRECT ENGINEERING & INDUSTRY EVIDENCE                         │
│ • Peer-reviewed academic research (IEEE, ACM, Nature, Science)         │
│ • Technical developer documentation & SDK architecture guides          │
│ • Industry standards consortiums (SEMI, JEDEC, PCI-SIG)                │
│ • Keynote transcripts from technical conferences (GTC, Hot Chips, etc) │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 3: REPUTABLE SECONDARY TRADE & INVESTIGATIVE JOURNALISM           │
│ • Specialized investigative technology outlets (SemiAnalysis, etc.)    │
│ • Tier-1 financial press (Financial Times, Bloomberg, Reuters)         │
│ • Industry benchmarking data (MLCommons, SPEC)                         │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 4: SPECULATION, NOISE & UNVERIFIED RUMORS (PROHIBITED)            │
│ • Anonymous social media leaks, unverified forum rumors                │
│ • Sponsored affiliate reviews or promotional vendor whitepapers        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Analytical Rules of Engagement

1. **Separation of Fact from Thesis:**
   * *Fact:* "In FY2024, ASML recognized revenue on 44 EUV systems with a 51.3% gross margin." *(Linked to 2024 Annual Report)*.
   * *Thesis:* "ASML's High-NA EUV lithography will maintain an effective monopoly through 2030 because alternative multi-patterning approaches incur prohibitive defect densities and wafer cycle times."
2. **Mandatory Symmetrical Thinking (The Bear Case):**
   * No company analysis is complete without an explicit, prominent counter-thesis detailing:
     * Geopolitical exposure (e.g., export controls, Taiwan Strait risk).
     * Customer concentration (e.g., Top 3 customers representing > 40% of revenue).
     * Technological substitution threats.
3. **Explicit Dates & Revision Integrity:**
   * Every article must prominently display:
     * `Published Date:` (e.g., July 14, 2026).
     * `Last Reviewed Date:` (e.g., November 20, 2026).
   * If an underlying business condition changes (e.g., new 10-Q release), the review date must be updated, and revisions logged in a "Changelog" footnote.

---

## 5. Standard Citation & Attribution Format

Citations must be integrated within the Markdown/MDX content using semantic components:

```mdx
According to ASML's 2024 Annual Report, the company recognized revenue on 44 EUV systems <Citation id="1" source="ASML 2024 Form 20-F, Page 54" url="https://..." />.
```

At the bottom of each article, a dedicated **Sources & Update Log** renders all linked primary materials:

```markdown
## Sources & Update Log
1. **ASML 2024 Form 20-F (Annual Report)** — Filed with the SEC on February 26, 2025. [SEC EDGAR Link](https://sec.gov/...)
2. **ASML Investor Day 2024 Presentation** — "High-NA EUV Roadmap", Dr. Martin van den Brink. [PDF Link](https://asml.com/...)
```

---

## 6. Editorial Review & Quality Checklist

Before any research piece transitions from `draft` to `published`, it must pass this 6-point quality gate:

- [ ] **First-Principles Check:** Does the piece explain the fundamental engineering reality before discussing market sentiment?
- [ ] **Primary Verification:** Is every specific number, revenue claim, and margin percentage linked to a Tier 1 or Tier 2 source?
- [ ] **Bear Case Included:** Is there a substantive, well-argued section examining catalysts for thesis failure?
- [ ] **Clarity of Prose:** Is the text free of unnecessary financial jargon, buzzwords, or passive fluff?
- [ ] **Disclaimer Present:** Does the footer include the mandatory educational and non-investment-advice statement?
- [ ] **Metadata Complete:** Are reading time, last reviewed date, and Open Graph descriptions accurately populated?

---

## 7. Open Questions (Unresolved Decisions)

1. **OPEN QUESTION — Publication Cadence:** Should publication follow a fixed bi-weekly cadence or an event-driven cadence releasing articles only when rigorous deep dives are complete?
2. **OPEN QUESTION — Revision Policy for Historical Calls:** When an analytical thesis proves incorrect, should the original article remain unedited with an appended "Post-Mortem & Retrospective" section, or should the main text be updated in-place? *(Architect recommendation: Append retrospective section for intellectual transparency).*
