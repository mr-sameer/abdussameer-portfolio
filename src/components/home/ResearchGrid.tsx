'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Layers, Cpu, Server, Database, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ResearchCard } from '@/components/home/ResearchCard';
import { RESEARCH_CARDS } from '@/lib/constants';

interface ValueChainLayer {
  id: string;
  level: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  keyPlayers: string;
  economicDynamic: string;
  linkedArticleSlug?: string;
}

const VALUE_CHAIN_LAYERS: ValueChainLayer[] = [
  {
    id: 'layer-optics',
    level: 'Layer 01',
    title: 'Photolithography & Optical Physics',
    icon: Cpu,
    keyPlayers: 'ASML (Monopoly), Zeiss Optics, Cymer Laser',
    economicDynamic: 'Extreme capex barriers; ~100% gross margin pricing power on EUV scanners; single-point-of-failure for global advanced compute.',
    linkedArticleSlug: 'asml',
  },
  {
    id: 'layer-foundry',
    level: 'Layer 02',
    title: 'Foundry & Advanced 2.5D/3D Packaging',
    icon: Layers,
    keyPlayers: 'TSMC (CoWoS), Samsung Foundry, Intel Foundry',
    economicDynamic: 'Sub-3nm process yield learning curves; silicon packaging capacity (CoWoS) serves as the primary near-term accelerator bottleneck.',
  },
  {
    id: 'layer-compute',
    level: 'Layer 03',
    title: 'Accelerated Compute & Cluster Networking',
    icon: Server,
    keyPlayers: 'NVIDIA (CUDA + NVLink), Broadcom, AMD',
    economicDynamic: 'Software ecosystem lock-in (CUDA API); networking scale-out fabric (NVLink/InfiniBand) creates insurmountable architectural switching costs.',
    linkedArticleSlug: 'nvidia',
  },
  {
    id: 'layer-hyperscaler',
    level: 'Layer 04',
    title: 'Hyperscalers & AI Application Utility',
    icon: Database,
    keyPlayers: 'Microsoft Azure, Amazon AWS, Google Cloud, Meta',
    economicDynamic: 'Hundreds of billions in annual infrastructure CAPEX; ultimate ROI depends on converting compute depreciation into enterprise workflow pricing power.',
    linkedArticleSlug: 'ai-infrastructure',
  },
];

export const ResearchGrid: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('layer-optics');
  const activeLayer = VALUE_CHAIN_LAYERS.find((l) => l.id === activeLayerId) || VALUE_CHAIN_LAYERS[0];

  return (
    <section id="research" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <div id="analysis" className="sr-only" tabIndex={-1} />
      
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              04 / Independent Research Dossier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Understand before
              <br />
              you invest.
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-md">
            Every investigation starts with a first-principles engineering question, analyzes audited primary financial filings, and isolates structural competitive moats.
          </p>
        </div>

        {/* Interactive Industry Value-Chain Stack Diagram */}
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
              Click any value-chain tier to inspect how economic rent flows from optical physics to software.
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
            <div className="lg:col-span-7 p-6 bg-paper rounded-sm border border-paper-border flex flex-col justify-between h-full">
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
                <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-4">
                  {activeLayer.economicDynamic}
                </p>
              </div>

              {activeLayer.linkedArticleSlug && (
                <div className="pt-4 border-t border-paper-border flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-muted">
                    Covered in Research Dossier below ↓
                  </span>
                  <span className="font-sans text-xs font-bold text-vermilion">
                    Working Draft
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3-Column Asymmetric Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured Card (ASML) takes 5 cols on lg */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col">
            <ResearchCard item={RESEARCH_CARDS[0]} />
          </div>

          {/* NVIDIA Card takes 4 cols on lg */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col">
            <ResearchCard item={RESEARCH_CARDS[1]} />
          </div>

          {/* AI Infra Card takes 3 cols on lg */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col">
            <ResearchCard item={RESEARCH_CARDS[2]} />
          </div>
        </div>

        {/* Outbound Open-Research Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/mr-sameer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-bold tracking-tight text-ink hover:text-vermilion border-b border-ink pb-1 transition-colors"
          >
            <span>Explore research repositories and data models on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-vermilion" />
          </a>
        </div>
      </Container>
    </section>
  );
};
