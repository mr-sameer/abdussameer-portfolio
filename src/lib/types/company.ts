/**
 * AbdusSameer V4 — Company Intelligence Domain Types
 * Sourced from docs/V4_RESEARCH_PLATFORM_DESIGN.md
 *
 * Adaptable 15-Point Corporate Framework:
 * Sections are tailored to the economic reality of each business model.
 */

import { EvidenceTier, PublicationStatus, SEOMetadata, SourceReference } from './common';

export interface CorporateIdentity {
  id: string;
  slug: string;
  name: string;
  ticker?: string;
  exchange?: string;
  sector: string;
  industry: string;
  headquarters: string;
  foundedYear?: number;
  monogram: {
    letter: string;
    bg: string;
    text: string;
  };
}

export interface BusinessProduct {
  name: string;
  category: string;
  description: string;
  isCore?: boolean;
}

export interface BusinessSegment {
  name: string;
  revenueSharePercent?: number;
  description: string;
  marginProfile?: string;
}

export interface RevenueModel {
  description: string;
  pricingStrategy?: string;
  recurringRevenuePercentage?: string;
  customerConcentrationRisk?: string;
}

export interface IndustryPosition {
  marketShareDescription: string;
  globalSharePercent?: number;
  ranking?: string;
  primaryPricingPowerDriver?: string;
}

export interface CompetitiveMoat {
  peers: string[];
  substitutes?: string[];
  moatSummary: string;
  switchingCosts?: string;
  networkEffects?: string;
  costAdvantages?: string;
  intangiblesAndPatents?: string;
}

export interface TechnologyAndIP {
  coreTechnologies: string[];
  patentOverview?: string;
  physicalMoatDescription?: string;
  rdIntensityPercentage?: string;
}

export interface SupplyChainNode {
  keySuppliers: string[];
  keyCustomers?: string[];
  singlePointOfFailureRisks?: string[];
  geographicChokePoints?: string[];
}

export interface FinancialMetric {
  metric: string;
  value: string;
  period: string;
  sourceTier: EvidenceTier;
  sourceFiling?: string;
}

export interface FinancialPerformance {
  auditedPeriod?: string;
  metrics?: FinancialMetric[];
  grossMarginTrend?: string;
  operatingCashFlowTrend?: string;
  capitalExpenditureTrend?: string;
  commentary?: string;
}

export interface StrategicAnalysis {
  moatDurability: string;
  capitalAllocationDiscipline: string;
  pricingPowerAssessment: string;
  secularHeadwinds?: string;
}

export interface CompanyIntelligence {
  identity: CorporateIdentity;
  status: PublicationStatus;
  overview: string;
  businessDescription?: string;
  productsAndServices?: BusinessProduct[];
  businessSegments?: BusinessSegment[];
  revenueModel?: RevenueModel;
  industryPosition?: IndustryPosition;
  competitiveLandscape?: CompetitiveMoat;
  technologyAndIP?: TechnologyAndIP;
  supplyChain?: SupplyChainNode;
  financialPerformance?: FinancialPerformance;
  growthDrivers?: string[];
  risksAndChallenges?: string[];
  strategicAnalysis?: StrategicAnalysis;
  sources: SourceReference[];
  relatedResearchSlugs?: string[];
  relatedIndustrySlugs?: string[];
  seo: SEOMetadata;
}
