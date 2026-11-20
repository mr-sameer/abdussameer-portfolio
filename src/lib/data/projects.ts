/**
 * AbdusSameer V4 — Initial Project Case Study Datasets
 * Subjects:
 * 1. Semiconductor Moat & Value-Chain Map
 * 2. Enterprise Software Economics Sandbox
 * 3. Primary Evidence Extraction Toolkit
 * 4. AbdusSameer Independent Research Platform
 */

import { ProjectCaseStudy } from '../types/project';

export const SEMIS_INTEL_PROJECT: ProjectCaseStudy = {
  id: 'semis-intel',
  slug: 'semis-intel',
  number: '01',
  title: 'Semiconductor Moat & Value-Chain Map',
  category: 'Market & Industry Intelligence',
  status: 'Active Development',
  headline: 'Tracing structural choke points from photolithography optics to hyperscaler data centers.',
  shortDescription:
    'An interactive relational mapping engine synthesizing audited SEC filings, patent records, and foundry disclosures into a multi-tiered dependency graph of the global semiconductor supply chain.',
  problem:
    'Traditional financial research relies on static spreadsheets and superficial sell-side commentary, failing to highlight single-point-of-failure choke points and multi-tier capacity bottlenecks across global silicon supply chains.',
  whyItMatters:
    'Photolithography tooling, specialty chemical substrates, foundry capacity, and advanced packaging yield limits dictate the pace of AI hardware scaling and sovereign geopolitical power.',
  howItWorks:
    'Synthesizes audited annual regulatory filings (Form 10-Ks, 20-Fs), IEEE technical whitepapers, and foundry supplier lists into a graph database structure linking revenue dependencies and capacity constraints.',
  whatWasBuilt:
    'A prototype data model and interactive relational visualization mapping revenue dependency flows and capacity concentration across 15+ Tier-1 semiconductor companies.',
  technologies: ['TypeScript', 'Next.js', 'Relational Graph Modeling', 'SEC EDGAR Data', 'Vector Geometry'],
  keyDecisions: [
    'Model physical tooling dependencies separately from commercial contract relationships.',
    'Anchor every corporate node directly to verified primary SEC regulatory filings.',
  ],
  metricsOrOutcome: 'Covering 15+ Tier-1 semiconductor companies with mapped capital dependencies.',
  repositoryUrl: 'https://github.com/mr-sameer',
  relatedResearchSlugs: ['semiconductor-value-chains'],
  relatedCompanySlugs: ['asml', 'tsmc', 'nvidia'],
  seo: {
    title: 'Semiconductor Moat & Value-Chain Map Project | Abdus Sameer',
    description: 'An interactive relational mapping engine tracing economic value and technological dependencies across the global semiconductor value chain.',
    canonicalUrl: 'https://abdussameer.com/projects/semis-intel/',
    keywords: ['Semiconductor Map', 'Value Chain Intelligence', 'ASML', 'TSMC', 'Supply Chain Moats'],
  },
};

export const EQUITY_SANDBOX_PROJECT: ProjectCaseStudy = {
  id: 'equity-sandbox',
  slug: 'equity-sandbox',
  number: '02',
  title: 'Enterprise Software Economics Sandbox',
  category: 'Financial & Valuation Modeling',
  status: 'Active Development',
  headline: 'Auditing SaaS unit economics, cloud infrastructure drag, and retention decay.',
  shortDescription:
    'A financial modeling sandbox that decomposes enterprise cloud unit economics, isolates cloud hosting COGS, and models long-term customer acquisition payback resilience.',
  problem:
    'GAAP financial accounting obscures real cloud infrastructure hosting drag, customer acquisition payback decay, and the dilutive cost of stock-based compensation in enterprise software.',
  whyItMatters:
    'Without isolating underlying cloud infrastructure COGS and retention dynamics, investors and operators miscalculate sustainable gross margins and true free cash flow conversion.',
  howItWorks:
    'Dynamic cohort-retention decay models and discounted cash flow frameworks that test gross margin sensitivity under decelerating net expansion rates and rising compute costs.',
  whatWasBuilt:
    'A repeatable financial modeling framework tested against 5 public enterprise software balance sheets to stress-test operating leverage and unit margin durability.',
  technologies: ['Financial Modeling', 'Cohort Analysis', 'Python / Pandas', 'Discounted Cash Flow', 'Markdown Teardowns'],
  keyDecisions: [
    'Separate core customer acquisition cash flows from stock-based compensation accounting adjustments.',
    'Model cloud hosting infrastructure costs as a variable component scaling with compute consumption.',
  ],
  metricsOrOutcome: 'Framework tested against 5 public enterprise software balance sheets.',
  repositoryUrl: 'https://github.com/mr-sameer',
  relatedResearchSlugs: [],
  relatedCompanySlugs: [],
  seo: {
    title: 'Enterprise Software Economics Sandbox Project | Abdus Sameer',
    description: 'Deconstructing cloud unit economics, hosting infrastructure gross margin drag, and customer retention decay models.',
    canonicalUrl: 'https://abdussameer.com/projects/equity-sandbox/',
    keywords: ['SaaS Economics', 'Financial Modeling', 'Cohort Analysis', 'Gross Margin Resilience'],
  },
};

export const EVIDENCE_DIFF_PROJECT: ProjectCaseStudy = {
  id: 'evidence-diff',
  slug: 'evidence-diff',
  number: '03',
  title: 'Primary Evidence Extraction Toolkit',
  category: 'AI & Knowledge Systems',
  status: 'Experimental Prototype',
  headline: 'Automating delta analysis across multi-hundred-page regulatory filings.',
  shortDescription:
    'A local vector retrieval and lexical diffing pipeline tailored specifically for SEC Form 10-K risk factors, management commentary, and earnings call disclosures.',
  problem:
    'Research analysts spend dozens of manual hours diffing 200+ page regulatory disclosures and earnings call transcripts between reporting quarters to spot qualitative shifts.',
  whyItMatters:
    'Subtle changes in management language, accounting policy footnotes, and risk factor disclosures frequently foreshadow major corporate inflection points before headline numbers do.',
  howItWorks:
    'Local vector retrieval and lexical diffing pipeline optimized for SEC disclosure tables, accounting footnotes, and multi-period text comparisons while preserving verbatim source links.',
  whatWasBuilt:
    'A prototype tool that surfaces quarter-over-quarter disclosure shifts while strictly maintaining direct links to verbatim primary sources.',
  technologies: ['TypeScript', 'Vector Retrieval', 'Text Diffing Algorithms', 'SEC EDGAR Parsing'],
  keyDecisions: [
    'Maintain zero-hallucination verbatim source links for every highlighted disclosure change.',
    'Execute parsing and lexical diffing locally to preserve analysis confidentiality.',
  ],
  metricsOrOutcome: 'Accelerates qualitative filing review time by >60% while maintaining source links.',
  repositoryUrl: 'https://github.com/mr-sameer',
  relatedResearchSlugs: ['semiconductor-value-chains'],
  relatedCompanySlugs: ['asml', 'nvidia'],
  seo: {
    title: 'Primary Evidence Extraction Toolkit Project | Abdus Sameer',
    description: 'An automated qualitative extraction tool identifying quarter-over-quarter disclosure shifts across SEC regulatory filings.',
    canonicalUrl: 'https://abdussameer.com/projects/evidence-diff/',
    keywords: ['SEC EDGAR Parsing', 'Lexical Diffing', 'Primary Evidence', 'Research Automation'],
  },
};

export const RESEARCH_PLATFORM_PROJECT: ProjectCaseStudy = {
  id: 'research-platform',
  slug: 'research-platform',
  number: '04',
  title: 'AbdusSameer Independent Research Platform',
  category: 'Software Architecture',
  status: 'Active Development',
  headline: 'An ultra-fast, zero-JS readable digital publication platform for rigorous technology research.',
  shortDescription:
    'An open-source, high-performance static publication architecture engineered with Next.js 15, self-hosted typography, and embedded WebGL visualizations.',
  problem:
    'Standard publishing platforms (Medium, Substack) are rigid, lack custom interactive 3D and visual modeling capabilities, and compromise privacy and speed.',
  whyItMatters:
    'Independent research on complex technological and economic systems deserves a presentation medium crafted with equal technical discipline, speed, and typographic dignity.',
  howItWorks:
    'Static-first Next.js App Router architecture with custom design tokens, zero-JS readable semantic HTML, self-hosted OFL typography, and embedded WebGL visualizations.',
  whatWasBuilt:
    'The exact platform you are navigating right now: engineered for sub-1.5s LCP, zero layout shift, and 100% accessible keyboard navigation.',
  technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Self-Hosted WOFF2'],
  keyDecisions: [
    'Enforce zero-JS readable HTML for all long-form research text and financial tables.',
    'Isolate heavy Three.js 3D rendering strictly to the homepage studio, keeping subpages under 110 kB.',
  ],
  metricsOrOutcome: 'Targeting sub-1.5s LCP, zero layout shifts, and 100% WCAG AA accessibility.',
  repositoryUrl: 'https://github.com/mr-sameer',
  relatedResearchSlugs: [],
  relatedCompanySlugs: [],
  seo: {
    title: 'AbdusSameer Independent Research Platform Architecture | Abdus Sameer',
    description: 'Technical architecture and design system of the AbdusSameer digital research and technology publication platform.',
    canonicalUrl: 'https://abdussameer.com/projects/research-platform/',
    keywords: ['Next.js 15 Architecture', 'Static Export', 'Web Performance', 'Design System'],
  },
};

export const ALL_PROJECTS: ProjectCaseStudy[] = [
  SEMIS_INTEL_PROJECT,
  EQUITY_SANDBOX_PROJECT,
  EVIDENCE_DIFF_PROJECT,
  RESEARCH_PLATFORM_PROJECT,
];
