/**
 * AbdusSameer V4 — Content Access & Relational Query Utilities
 * Strongly-typed accessors with predictable handling of missing records.
 */

import { CompanyIntelligence } from '../types/company';
import { ResearchArticle } from '../types/research';
import { IndustryIntelligence } from '../types/industry';
import { ProjectCaseStudy } from '../types/project';
import { EvidenceTier, EVIDENCE_TIERS } from '../types/common';

import { ALL_COMPANIES } from '../data/companies';
import { ALL_INDUSTRIES } from '../data/industries';
import { ALL_RESEARCH_ARTICLES } from '../data/research';
import { ALL_PROJECTS } from '../data/projects';

/**
 * Normalizes an input string or slug into a sanitized URL-safe key.
 */
export function normalizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Retrieves a company intelligence dossier by its unique slug.
 */
export function getCompanyBySlug(slug: string): CompanyIntelligence | undefined {
  const cleanSlug = normalizeSlug(slug);
  return ALL_COMPANIES.find((c) => c.identity.slug === cleanSlug);
}

/**
 * Retrieves all company intelligence records.
 */
export function getAllCompanies(): CompanyIntelligence[] {
  return ALL_COMPANIES;
}

/**
 * Retrieves a research investigation by its unique slug.
 */
export function getResearchArticleBySlug(slug: string): ResearchArticle | undefined {
  const cleanSlug = normalizeSlug(slug);
  return ALL_RESEARCH_ARTICLES.find((a) => a.slug === cleanSlug);
}

/**
 * Retrieves all research articles.
 */
export function getAllResearchArticles(): ResearchArticle[] {
  return ALL_RESEARCH_ARTICLES;
}

/**
 * Retrieves only research articles marked as published.
 */
export function getPublishedResearchArticles(): ResearchArticle[] {
  return ALL_RESEARCH_ARTICLES.filter((a) => a.status === 'Published');
}

/**
 * Retrieves an industry structural map by its unique slug.
 */
export function getIndustryBySlug(slug: string): IndustryIntelligence | undefined {
  const cleanSlug = normalizeSlug(slug);
  return ALL_INDUSTRIES.find((i) => i.slug === cleanSlug);
}

/**
 * Retrieves all industry intelligence records.
 */
export function getAllIndustries(): IndustryIntelligence[] {
  return ALL_INDUSTRIES;
}

/**
 * Retrieves a project case study by its unique slug.
 */
export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  const cleanSlug = normalizeSlug(slug);
  return ALL_PROJECTS.find((p) => p.slug === cleanSlug);
}

/**
 * Retrieves all project case studies.
 */
export function getAllProjects(): ProjectCaseStudy[] {
  return ALL_PROJECTS;
}

/**
 * Retrieves companies associated with a given research article slug.
 */
export function getRelatedCompaniesForArticle(articleSlug: string): CompanyIntelligence[] {
  const article = getResearchArticleBySlug(articleSlug);
  if (!article || !article.relatedCompanySlugs) return [];

  return article.relatedCompanySlugs
    .map((slug) => getCompanyBySlug(slug))
    .filter((c): c is CompanyIntelligence => c !== undefined);
}

/**
 * Retrieves research articles associated with a given company slug.
 */
export function getRelatedArticlesForCompany(companySlug: string): ResearchArticle[] {
  const company = getCompanyBySlug(companySlug);
  if (!company || !company.relatedResearchSlugs) return [];

  return company.relatedResearchSlugs
    .map((slug) => getResearchArticleBySlug(slug))
    .filter((a): a is ResearchArticle => a !== undefined);
}

/**
 * Formats an evidence tier into a human-readable badge label.
 */
export function getEvidenceTierLabel(tier: EvidenceTier): string {
  const meta = EVIDENCE_TIERS[tier];
  return meta ? meta.shortLabel : 'Unclassified';
}
