/**
 * AbdusSameer V4 — Project Case Study Domain Types
 * Sourced from docs/V4_RESEARCH_PLATFORM_DESIGN.md
 */

import { ProjectStatus, SEOMetadata, SourceReference } from './common';

export type ProjectCategory =
  | 'Market & Industry Intelligence'
  | 'Financial & Valuation Modeling'
  | 'AI & Knowledge Systems'
  | 'Software Architecture';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  headline: string;
  shortDescription: string;
  problem: string;
  whyItMatters: string;
  howItWorks: string;
  whatWasBuilt: string;
  technologies: string[];
  keyDecisions?: string[];
  metricsOrOutcome?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  relatedResearchSlugs?: string[];
  relatedCompanySlugs?: string[];
  sources?: SourceReference[];
  seo: SEOMetadata;
}
