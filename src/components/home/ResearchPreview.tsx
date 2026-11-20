'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Server, 
  Database, 
  ChevronRight,
  BookOpen,
  Clock,
  Sparkles,
  FileText
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SEMI_VALUE_CHAIN_ARTICLE, ALL_RESEARCH_ARTICLES } from '@/lib/data/research';

export interface ValueChainLayer {
  id: string;
  level: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  keyPlayers: string;
  economicDynamic: string;
  linkedSlug: string;
  isCompanyLink?: boolean;
}

export const VALUE_CHAIN_LAYERS: ValueChainLayer[] = [
  {
    id: 'layer-optics',
    level: 'Layer 01',
    title: 'Photolithography & Optical Physics',
    icon: Cpu,
    keyPlayers: 'ASML (Monopoly), Carl Zeiss Optics, Cymer Laser',
    economicDynamic: 'Extreme capital and physics barriers; ~100% gross margin pricing power on EUV scanners; single-point-of-failure for global advanced compute below 7nm.',
    linkedSlug: 'asml',
    isCompanyLink: true,
  },
  {
    id: 'layer-foundry',
    level: 'Layer 02',
    title: 'Foundry & Advanced 2.5D/3D Packaging',
    icon: Layers,
    keyPlayers: 'TSMC (CoWoS), Samsung Foundry, Intel Foundry',
    economicDynamic: 'Sub-3nm process yield learning curves; silicon packaging capacity (CoWoS) serves as the primary near-term accelerator throughput bottleneck.',
    linkedSlug: 'tsmc',
    isCompanyLink: true,
  },
  {
    id: 'layer-compute',
    level: 'Layer 03',
    title: 'Accelerated Compute & Cluster Networking',
    icon: Server,
    keyPlayers: 'NVIDIA (CUDA + NVLink), Broadcom, AMD',
    economicDynamic: 'Software ecosystem lock-in (CUDA API); networking scale-out fabric (NVLink/InfiniBand) creates insurmountable architectural switching costs.',
    linkedSlug: 'nvidia',
    isCompanyLink: true,
  },
  {
    id: 'layer-hyperscaler',
    level: 'Layer 04',
    title: 'Hyperscalers & AI Infrastructure Deployment',
    icon: Database,
    keyPlayers: 'Microsoft Azure, Amazon AWS, Google Cloud, Meta',
    economicDynamic: 'Hundreds of billions in annual infrastructure CAPEX; ultimate ROI depends on converting rapid compute depreciation into enterprise workflow pricing power.',
    linkedSlug: 'semiconductor-value-chains',
    isCompanyLink: false,
  },
];

export const ResearchPreview: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('layer-optics');
  const activeLayer = VALUE_CHAIN_LAYERS.find((l) => l.id === activeLayerId) || VALUE_CHAIN_LAYERS[0];

  const flagshipArticle = SEMI_VALUE_CHAIN_ARTICLE;

  return (
    <section id="research" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <div id="analysis" className="sr-only" tabIndex={-1} />
      
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              05 / Selected Research &amp; Value Chains
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Structural industry investigations &amp;
              <br />
              <em className="text-vermilion not-italic font-semibold">capital cycle analysis.</em>
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-md">
            Every investigation starts with a first-principles engineering question, analyzes audited regulatory filings, and isolates structural competitive moats across the value chain.
          </p>
        </div>

        {/* 4-Tier Interactive Industry Value-Chain Map */}
        <div className="mb-16 p-6 sm:p-8 bg-paper-card border border-paper-border rounded-sm shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-border mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-1">
                Structural Industry Map
              </span>
              <h3 className="font-serif text-2xl text-ink font-semibold">
                The Semiconductor &amp; AI Compute Value Chain
              </h3>
            </div>
            <p className="font-sans text-xs text-ink-muted max-w-sm">
              Click any value-chain tier to inspect how economic rent and technological power flow from optical physics to software.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 4 Interactive Tier Pills */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {VALUE_CHAIN_LAYERS.map((layer) => {
                const isSelected = layer.id === activeLayerId;
                const Icon = layer.icon;

                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-ink text-paper border-ink shadow-sm'
                        : 'bg-paper text-ink border-paper-border hover:border-ink/40'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-sm flex items-center justify-center ${
                        isSelected ? 'bg-vermilion text-ink' : 'bg-paper-card text-ink-muted'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className={`font-mono text-[10px] uppercase tracking-wider block ${
                          isSelected ? 'text-vermilion font-semibold' : 'text-ink-muted'
                        }`}>
                          {layer.level}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-semibold leading-tight">
                          {layer.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${
                      isSelected ? 'text-vermilion' : 'text-ink-muted opacity-40'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Active Tier Dynamic Inspector */}
            <div className="lg:col-span-7 p-6 sm:p-7 bg-paper rounded-sm border border-paper-border flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-paper-border mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-vermilion font-bold">
                    {activeLayer.level} Analysis
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {activeLayer.keyPlayers}
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-ink font-semibold mb-3">
                  {activeLayer.title}
                </h4>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                  {activeLayer.economicDynamic}
                </p>
              </div>

              <div className="pt-4 border-t border-paper-border flex items-center justify-between">
                <Link
                  href={activeLayer.isCompanyLink ? `/companies/${activeLayer.linkedSlug}` : `/research/${activeLayer.linkedSlug}`}
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors group"
                >
                  <span>
                    {activeLayer.isCompanyLink 
                      ? `Inspect ${activeLayer.linkedSlug.toUpperCase()} corporate intelligence` 
                      : 'Read full value-chain research article'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                  Primary research dossier →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Research Article & Upcoming Dossiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Flagship Long-Form Article Feature (7 cols) */}
          <article className="lg:col-span-7 p-8 sm:p-10 bg-paper-card border border-paper-border rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-paper-border mb-6">
                <div className="flex items-center gap-2">
                  <Badge variant="vermilion">
                    {flagshipArticle.status}
                  </Badge>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    Flagship Investigation
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-muted flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {flagshipArticle.readingTimeMinutes} min read
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-2">
                {flagshipArticle.category}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-tight tracking-tight mb-4">
                <Link href={`/research/${flagshipArticle.slug}`} className="hover:text-vermilion transition-colors">
                  {flagshipArticle.title}
                </Link>
              </h3>

              <p className="font-sans text-base text-ink font-medium leading-snug mb-3">
                {flagshipArticle.subtitle}
              </p>

              <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                {flagshipArticle.abstract}
              </p>

              {/* Core Questions Investigated */}
              {flagshipArticle.executiveSummary && flagshipArticle.executiveSummary.length > 0 && (
                <div className="p-4 bg-paper rounded-sm border border-paper-border mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2">
                    Executive Summary Takeaways
                  </h4>
                  <ul className="space-y-1.5 font-sans text-xs text-ink-secondary list-disc list-inside">
                    {flagshipArticle.executiveSummary.slice(0, 3).map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-paper-border flex items-center justify-between">
              <Link
                href={`/research/${flagshipArticle.slug}`}
                className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors group"
              >
                <span>Read complete research publication</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="font-mono text-xs text-ink-muted">
                {flagshipArticle.sources.length} verified citations
              </span>
            </div>
          </article>

          {/* Upcoming Research Queue (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-7 bg-paper-card border border-paper-border rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral">Upcoming Dossier</Badge>
                  <span className="font-mono text-xs text-ink-muted">Q1 2025</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block mb-1">
                  Macro &amp; Infrastructure Finance
                </span>
                <h4 className="font-serif text-xl font-semibold text-ink mb-2">
                  Hyperscaler Capital Allocation &amp; AI ROI
                </h4>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-4">
                  Evaluating whether unprecedented data-center infrastructure expenditure converts into durable enterprise workflow pricing power or rapid economic depreciation.
                </p>
              </div>
              <div className="pt-4 border-t border-paper-border font-mono text-[11px] text-ink-muted">
                MSFT · AMZN · GOOGL · META CAPEX Modeling
              </div>
            </div>

            <div className="p-7 bg-paper-card border border-paper-border rounded-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral">Upcoming Dossier</Badge>
                  <span className="font-mono text-xs text-ink-muted">Q2 2025</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block mb-1">
                  Semiconductor Physics &amp; Packaging
                </span>
                <h4 className="font-serif text-xl font-semibold text-ink mb-2">
                  Physical Packaging as the New Moore’s Law
                </h4>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-4">
                  As optical reticle limits and thermal dissipation constrain single-die scaling, 2.5D/3D silicon interposers and high-bandwidth interconnects become the primary battleground.
                </p>
              </div>
              <div className="pt-4 border-t border-paper-border font-mono text-[11px] text-ink-muted">
                CoWoS · EMIB · SoIC Packaging Yield Analytics
              </div>
            </div>

            {/* Outbound Link to All Research */}
            <div className="p-5 bg-paper rounded-sm border border-paper-border flex items-center justify-between">
              <span className="font-sans text-sm font-medium text-ink">
                All publications and data models are open-access:
              </span>
              <a
                href="https://github.com/mr-sameer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors"
              >
                <span>GitHub Research</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
