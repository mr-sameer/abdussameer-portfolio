'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { 
  Cpu, 
  Binary, 
  Coins, 
  BrainCircuit, 
  Briefcase, 
  Landmark, 
  Layers,
  Compass,
  History,
  Users,
  ArrowRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export interface DomainNode {
  id: string;
  name: string;
  shortName: string;
  category: 'computing' | 'quantitative' | 'economic' | 'behavioural';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const DOMAIN_NODES: DomainNode[] = [
  { id: 'cs', name: 'Computer Science', shortName: 'CompSci', category: 'computing', description: 'Distributed systems, memory hierarchies, computational complexity', icon: Cpu },
  { id: 'ai', name: 'Artificial Intelligence', shortName: 'AI', category: 'computing', description: 'Model architectures, algorithmic scaling laws, training efficiency', icon: Binary },
  { id: 'semi', name: 'Semiconductors & Physics', shortName: 'Silicon', category: 'computing', description: 'Photolithography optics, nanometer nodes, 2.5D/3D packaging', icon: Layers },
  { id: 'math', name: 'Applied Mathematics', shortName: 'Math', category: 'quantitative', description: 'Numerical optimization, information theory, discrete geometry', icon: Compass },
  { id: 'macro', name: 'Macroeconomics', shortName: 'Macro', category: 'economic', description: 'Capital allocation cycles, infrastructure buildouts, supply shocks', icon: Landmark },
  { id: 'fin', name: 'Corporate Finance', shortName: 'Finance', category: 'economic', description: 'Cash-flow duration, economic depreciation, ROIC vs WACC', icon: Coins },
  { id: 'strat', name: 'Business Strategy', shortName: 'Strategy', category: 'economic', description: 'Switching costs, distribution leverage, structural moat durability', icon: Briefcase },
  { id: 'psych', name: 'Cognitive Psychology', shortName: 'Psychology', category: 'behavioural', description: 'Heuristics, risk asymmetry, decision-making under uncertainty', icon: BrainCircuit },
  { id: 'hist', name: 'Economic History', shortName: 'History', category: 'behavioural', description: 'Technological revolutions, infrastructure overbuild, institutional absorption', icon: History },
  { id: 'behav', name: 'Human Behaviour', shortName: 'Behaviour', category: 'behavioural', description: 'Institutional incentives, organizational culture, reflexivity', icon: Users },
];

export interface SynthesisPairing {
  id: string;
  name: string;
  domainIds: [string, string];
  category: string;
  thesis: string;
  mechanism: string;
  caseStudy: string;
  takeaway: string;
  relatedLinkText: string;
  relatedLinkHref: string;
}

export const SYNTHESIS_PAIRINGS: SynthesisPairing[] = [
  {
    id: 'cs-ai',
    name: 'Computer Science × Artificial Intelligence',
    domainIds: ['cs', 'ai'],
    category: 'Computational Architecture',
    thesis: 'Hardware physics and distributed systems define the real boundaries of machine intelligence.',
    mechanism: 'Algorithmic breakthroughs are bounded by physical compute infrastructure: memory wall limits, High-Bandwidth Memory (HBM) packaging yields, and GPU cluster networking topologies (NVLink/InfiniBand).',
    caseStudy: 'Modern LLM training scaling laws are fundamentally distributed systems challenges, not purely mathematical models.',
    takeaway: 'To evaluate modern AI platforms, one must audit cluster network latencies and compiler optimizations, not just high-level benchmark scores.',
    relatedLinkText: 'Inspect NVIDIA architecture intelligence',
    relatedLinkHref: '/companies/nvidia',
  },
  {
    id: 'math-semi',
    name: 'Mathematics × Semiconductors',
    domainIds: ['math', 'semi'],
    category: 'Nanometer Physics & Optics',
    thesis: 'Translating mathematical principles into nanometer-scale manufacturing realities.',
    mechanism: 'Optical wave equations, numerical optimization, and discrete geometry dictate how Extreme Ultraviolet (EUV) light at 13.5nm wavelength can be steered by mirror optics polished to picometer precision.',
    caseStudy: 'ASML’s High-NA EUV lithography systems require real-time anamorphic magnification adjustments computed mathematically at millisecond rates.',
    takeaway: 'Software abstractions eventually crash against physical engineering limits. True competitive moats exist where mathematics meets atomic precision.',
    relatedLinkText: 'Read ASML monopoly analysis',
    relatedLinkHref: '/companies/asml',
  },
  {
    id: 'semi-strat',
    name: 'Semiconductors × Business Strategy',
    domainIds: ['semi', 'strat'],
    category: 'Manufacturing Moats',
    thesis: 'Pure-play manufacturing scale creates an unassailable capital barrier in advanced silicon.',
    mechanism: 'Sub-3nm process yield learning curves require multi-billion-dollar annual R&D that only massive, aggregated volume can amortize. Pure-play foundries eliminate customer conflict while locking in capacity.',
    caseStudy: 'TSMC produces over 90% of global leading-edge logic because no individual fabless company can afford the capital risk of custom manufacturing facilities.',
    takeaway: 'Process yield learning curves are the ultimate physical moat: knowledge is accumulated per wafer processed, not per dollar spent.',
    relatedLinkText: 'Explore TSMC foundry intelligence',
    relatedLinkHref: '/companies/tsmc',
  },
  {
    id: 'econ-fin',
    name: 'Economics × Corporate Finance',
    domainIds: ['macro', 'fin'],
    category: 'Capital Cycles & Valuation',
    thesis: 'Capital cycles dictate whether technological advances generate shareholder returns or commoditized compute excess.',
    mechanism: 'Tracking the velocity of hyperscaler capital expenditure, depreciation schedules, and return on invested capital (ROIC) across multi-year infrastructure deployment cycles.',
    caseStudy: 'Determining whether hundreds of billions in AI data center investment convert into durable software productivity margins or commoditized compute excess.',
    takeaway: 'Financial accounting often obscures true economic depreciation in rapidly obsolescing hardware architectures.',
    relatedLinkText: 'Analyze semiconductor value chains',
    relatedLinkHref: '/research/semiconductor-value-chains',
  },
  {
    id: 'biz-ai',
    name: 'Business Strategy × Artificial Intelligence',
    domainIds: ['strat', 'ai'],
    category: 'Software Ecosystems',
    thesis: 'Superior technical algorithms do not survive without defensible distribution and high switching costs.',
    mechanism: 'Deconstructing value-chain power: evaluating customer lock-in, proprietary developer ecosystems (e.g. CUDA), and supplier concentration leverage.',
    caseStudy: 'NVIDIA’s dominance is governed by the CUDA software library and interconnect fabric, rendering raw silicon competitors economically unviable.',
    takeaway: 'A company’s pricing power is determined by the cost a customer incurs when attempting to replace it.',
    relatedLinkText: 'View NVIDIA CUDA moat audit',
    relatedLinkHref: '/companies/nvidia',
  },
  {
    id: 'psych-econ',
    name: 'Psychology × Human Behaviour',
    domainIds: ['psych', 'behav'],
    category: 'Incentive Structures',
    thesis: 'Incentive structures, career risk, and cognitive biases determine how capital and technology are actually deployed.',
    mechanism: 'Decision-makers operate under institutional constraints, loss aversion, and reflexivity—where market perceptions actively alter underlying corporate fundamentals.',
    caseStudy: 'FOMO-driven hyperscaler CAPEX races: corporate executives risk greater career penalty by under-investing in AI infrastructure than by over-allocating capital.',
    takeaway: 'Understanding real-world economic and business outcomes requires analyzing human psychology and institutional incentives, not idealized rational models.',
    relatedLinkText: 'Read full intellectual profile',
    relatedLinkHref: '/about',
  },
];

export const KnowledgeNetwork: React.FC = () => {
  const [activePairingId, setActivePairingId] = useState<string>('cs-ai');
  const activePairing = SYNTHESIS_PAIRINGS.find((p) => p.id === activePairingId) || SYNTHESIS_PAIRINGS[0];

  const isDomainActive = (domainId: string) => {
    return activePairing.domainIds.includes(domainId);
  };

  const handleDomainClick = (domainId: string) => {
    // Find first pairing that includes this domain
    const match = SYNTHESIS_PAIRINGS.find(p => p.domainIds.includes(domainId));
    if (match) {
      setActivePairingId(match.id);
    }
  };

  return (
    <section id="disciplines" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            02 / Interdisciplinary Synthesis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Complex problems rarely belong to a single discipline.
          </h2>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ink-secondary leading-relaxed">
            Real breakthrough insights emerge at the intersections. By connecting computing architectures, 
            mathematical rigor, economic theory, and human behavioural psychology, I deconstruct systems 
            that cannot be understood through any single lens.
          </p>
        </div>

        {/* 10-Domain Interactive Network Strip */}
        <div className="mb-10 p-5 sm:p-6 bg-paper-card border border-paper-border rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-paper-border">
            <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vermilion" aria-hidden="true" />
              10-Field Convergence Network
            </span>
            <span className="font-mono text-[11px] text-ink-muted">
              Select any discipline or convergence pairing below to inspect the synthesis
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {DOMAIN_NODES.map((domain) => {
              const active = isDomainActive(domain.id);
              const Icon = domain.icon;

              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => handleDomainClick(domain.id)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-mono transition-all duration-200 border ${
                    active
                      ? 'bg-ink text-paper border-ink shadow-sm'
                      : 'bg-paper text-ink-secondary border-paper-border hover:border-ink/30 hover:text-ink'
                  }`}
                  aria-pressed={active}
                  title={`${domain.name}: ${domain.description}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-vermilion' : 'text-ink-muted'}`} />
                  <span className="font-semibold">{domain.name}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-vermilion ml-0.5" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Synthesis Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Interactive Pairing Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1 block">
              Curated Cross-Disciplinary Pairings:
            </span>

            {SYNTHESIS_PAIRINGS.map((pairing) => {
              const isSelected = pairing.id === activePairingId;
              const domainA = DOMAIN_NODES.find(d => d.id === pairing.domainIds[0]);
              const domainB = DOMAIN_NODES.find(d => d.id === pairing.domainIds[1]);
              const IconA = domainA?.icon || Sparkles;
              const IconB = domainB?.icon || Sparkles;

              return (
                <button
                  key={pairing.id}
                  type="button"
                  onClick={() => setActivePairingId(pairing.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-ink text-paper border-ink shadow-md'
                      : 'bg-paper-card text-ink border-paper-border hover:border-ink/40 hover:bg-paper-muted'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-vermilion text-ink' : 'bg-paper text-ink-muted group-hover:text-vermilion'
                      }`}
                    >
                      <IconA className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[11px] uppercase tracking-wider block ${
                          isSelected ? 'text-vermilion font-semibold' : 'text-ink-muted'
                        }`}>
                          {pairing.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug">
                        {pairing.name}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? 'text-vermilion translate-x-1'
                        : 'text-ink-muted opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep Synthesis Dossier */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePairing.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="p-8 sm:p-10 bg-paper-card border border-paper-border rounded-sm shadow-sm"
              >
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-paper-border mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-vermilion" />
                    <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                      {activePairing.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <span className="px-2 py-0.5 bg-paper rounded border border-paper-border text-ink font-semibold">
                      {DOMAIN_NODES.find(d => d.id === activePairing.domainIds[0])?.name}
                    </span>
                    <span>×</span>
                    <span className="px-2 py-0.5 bg-paper rounded border border-paper-border text-ink font-semibold">
                      {DOMAIN_NODES.find(d => d.id === activePairing.domainIds[1])?.name}
                    </span>
                  </div>
                </div>

                {/* Central Thesis */}
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-snug mb-6">
                  “{activePairing.thesis}”
                </h3>

                {/* Detailed Analysis Breakdown */}
                <div className="space-y-6 pt-2">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2">
                      The Underlying Mechanism
                    </h4>
                    <p className="font-sans text-base text-ink-secondary leading-relaxed">
                      {activePairing.mechanism}
                    </p>
                  </div>

                  <div className="p-5 bg-paper rounded-sm border border-paper-border">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-vermilion font-bold mb-2">
                      Applied Case Study
                    </h4>
                    <p className="font-sans text-sm text-ink leading-relaxed">
                      {activePairing.caseStudy}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-paper-border">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1.5">
                      Core Analytical Takeaway
                    </h4>
                    <p className="font-sans text-sm text-ink-secondary font-medium leading-relaxed">
                      {activePairing.takeaway}
                    </p>
                  </div>

                  {/* Cross Link to Platform Subpage */}
                  <div className="pt-4 border-t border-paper-border flex items-center justify-between">
                    <Link
                      href={activePairing.relatedLinkHref}
                      className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors group"
                    >
                      <span>{activePairing.relatedLinkText}</span>
                      <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                      Primary research dossier →
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
