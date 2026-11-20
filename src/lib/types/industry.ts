/**
 * AbdusSameer V4 — Industry Structural Map Domain Types
 * Sourced from docs/V4_RESEARCH_PLATFORM_DESIGN.md
 */

import { SEOMetadata, SourceReference } from './common';

export interface ValueChainStage {
  level: string;
  title: string;
  description: string;
  keyParticipants: string[];
  economicDynamic: string;
  capitalIntensity?: 'Extreme' | 'High' | 'Moderate' | 'Low';
  grossMarginProfile?: string;
  linkedArticleSlug?: string;
  linkedCompanySlug?: string;
}

export interface IndustryIntelligence {
  id: string;
  slug: string;
  name: string;
  sector: string;
  overview: string;
  valueChainStages: ValueChainStage[];
  economicDrivers: string[];
  chokePoints: string[];
  competitiveDynamics: string;
  relatedCompanySlugs: string[];
  relatedArticleSlugs: string[];
  sources: SourceReference[];
  status: 'Active Research' | 'Framework Planned' | 'Published';
  seo: SEOMetadata;
}
