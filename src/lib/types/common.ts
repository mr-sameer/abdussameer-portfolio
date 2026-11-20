/**
 * AbdusSameer V4 — Common Domain Types & Evidence Classifications
 * Sourced from docs/V4_PRODUCT_BLUEPRINT.md and docs/V4_RESEARCH_PLATFORM_DESIGN.md
 */

/**
 * The 5-Tier Epistemological Evidence Taxonomy.
 * Enforces rigorous attribution and separates facts from hypotheses.
 */
export type EvidenceTier = 1 | 2 | 3 | 4 | 5;

export interface EvidenceClassification {
  tier: EvidenceTier;
  name: string;
  shortLabel: string;
  description: string;
  citationRequirement: string;
}

export const EVIDENCE_TIERS: Record<EvidenceTier, EvidenceClassification> = {
  1: {
    tier: 1,
    name: 'Audited Primary Facts',
    shortLabel: 'Audited Fact',
    description: 'Sourced directly from audited regulatory disclosures, SEC 10-K/20-F filings, or statutory accounts.',
    citationRequirement: 'Must cite regulatory filing name, reporting period, and page/section number.',
  },
  2: {
    tier: 2,
    name: 'Primary Technical Documentation',
    shortLabel: 'Technical Spec',
    description: 'Extracted from peer-reviewed scientific publications (IEEE, SPIE, ACM), patent grants, or official foundry PDKs.',
    citationRequirement: 'Must cite publication DOI, patent number, or manufacturer technical specification sheet.',
  },
  3: {
    tier: 3,
    name: 'Analytical Deductions',
    shortLabel: 'Analysis',
    description: 'Logical economic deductions, competitive moat assessments, and unit margin breakdowns formulated from Tier 1 and 2 evidence.',
    citationRequirement: 'Must trace premises back to verified Tier 1 or Tier 2 source data.',
  },
  4: {
    tier: 4,
    name: 'Financial & Operational Estimates',
    shortLabel: 'Estimate',
    description: 'Discounted cash flow scenarios, cohort retention models, and market sizing projections with explicit input assumptions.',
    citationRequirement: 'Must state all modeling parameters, discount rates, and sensitivity assumptions.',
  },
  5: {
    tier: 5,
    name: 'Research Hypotheses & Working Theories',
    shortLabel: 'Hypothesis',
    description: 'Forward-looking strategic questions, emerging technology trajectories, and unproven market inflection scenarios.',
    citationRequirement: 'Must be explicitly labeled as exploratory working hypotheses subject to verification.',
  },
};

export interface SourceReference {
  id: string;
  title: string;
  author?: string;
  publisher: string;
  url?: string;
  date: string;
  tier: EvidenceTier;
  notes?: string;
}

export interface AuthorInfo {
  name: string;
  role: string;
  url?: string;
  avatar?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
}

export type PublicationStatus =
  | 'Draft Analysis'
  | 'Research in Progress'
  | 'Upcoming'
  | 'Published';

export type ProjectStatus =
  | 'Active Development'
  | 'Experimental Prototype'
  | 'Ongoing Research'
  | 'Concept Exploration';
