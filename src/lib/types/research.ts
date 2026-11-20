/**
 * AbdusSameer V4 — Research Article Domain Types
 * Sourced from docs/V4_RESEARCH_PLATFORM_DESIGN.md
 */

import { AuthorInfo, PublicationStatus, SEOMetadata, SourceReference } from './common';

export type ResearchCategory =
  | 'Semiconductor Architecture'
  | 'AI Systems & Compute'
  | 'Capital Cycles & Valuation'
  | 'Macro & Market Structure';

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface ResearchSection {
  id: string;
  heading: string;
  content: string;
  keyTakeaways?: string[];
  evidenceNotes?: string[];
}

export interface ResearchArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  abstract: string;
  author: AuthorInfo;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  sector: string;
  category: ResearchCategory;
  status: PublicationStatus;
  isFeatured?: boolean;
  tableOfContents: TableOfContentsItem[];
  methodology?: string;
  executiveSummary?: string[];
  sections: ResearchSection[];
  sources: SourceReference[];
  relatedCompanySlugs?: string[];
  relatedIndustrySlugs?: string[];
  relatedArticleSlugs?: string[];
  seo: SEOMetadata;
}
