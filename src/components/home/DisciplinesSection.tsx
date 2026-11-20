'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { 
  Cpu, 
  Binary, 
  Coins, 
  BrainCircuit, 
  Briefcase, 
  Landmark, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PairingData {
  id: string;
  name: string;
  disciplines: [string, string];
  icons: [React.ComponentType<{ className?: string }>, React.ComponentType<{ className?: string }>];
  category: string;
  thesis: string;
  mechanism: string;
  caseStudy: string;
  takeaway: string;
}

const PAIRINGS: PairingData[] = [
  {
    id: 'cs-ai',
    name: 'Computer Science + Artificial Intelligence',
    disciplines: ['Computer Science', 'Artificial Intelligence'],
    icons: [Cpu, Binary],
    category: 'Computational Architecture',
    thesis: 'Hardware physics and distributed systems define the real boundaries of machine intelligence.',
    mechanism: 'Algorithmic breakthroughs are bounded by physical compute infrastructure: memory wall limits, High-Bandwidth Memory (HBM) packaging yields, and GPU cluster networking topologies (NVLink/InfiniBand).',
    caseStudy: 'Modern LLM training scaling laws are fundamentally distributed systems challenges, not purely mathematical models.',
    takeaway: 'To evaluate modern AI platforms, one must audit cluster network latencies and compiler optimizations, not just high-level benchmarks.'
  },
  {
    id: 'math-eng',
    name: 'Mathematics + Engineering',
    disciplines: ['Applied Mathematics', 'Physical Engineering'],
    icons: [Binary, Cpu],
    category: 'First-Principles Design',
    thesis: 'Translating mathematical principles into nanometer-scale manufacturing realities.',
    mechanism: 'Optical wave equations, numerical optimization, and discrete geometry dictate how Extreme Ultraviolet (EUV) light at 13.5nm wavelength can be steered by mirror optics polished to picometer precision.',
    caseStudy: 'ASML’s High-NA EUV lithography systems require real-time anamorphic magnification adjustments computed mathematically at millisecond rates.',
    takeaway: 'Software abstractions eventually crash against physical engineering limits. True moats exist where math meets atomic precision.'
  },
  {
    id: 'econ-fin',
    name: 'Economics + Finance',
    disciplines: ['Macroeconomics', 'Capital Allocation & Valuation'],
    icons: [Coins, Landmark],
    category: 'Systemic Capital Cycles',
    thesis: 'Capital cycles dictate whether technological advances generate shareholder returns or economic surplus for users.',
    mechanism: 'Tracking the velocity of hyperscaler capital expenditure, depreciation schedules, and return on invested capital (ROIC) across multi-year infrastructure deployment cycles.',
    caseStudy: 'Determining whether hundreds of billions in AI data center investment convert into durable software productivity margins or commoditized compute excess.',
    takeaway: 'Financial accounting often obscures true economic depreciation in rapidly obsolescing hardware architectures.'
  },
  {
    id: 'psych-behav',
    name: 'Psychology + Behaviour',
    disciplines: ['Cognitive Psychology', 'Behavioural Decision-Making'],
    icons: [BrainCircuit, Coins],
    category: 'Human Incentives',
    thesis: 'Incentive structures, career risk, and cognitive biases determine how capital and technology are actually deployed.',
    mechanism: 'Decision-makers operate under institutional constraints, loss aversion, and reflexivity—where market perceptions actively alter underlying corporate fundamentals.',
    caseStudy: 'FOMO-driven hyperscaler CAPEX races: corporate executives risk greater career penalty by under-investing in AI infrastructure than by over-allocating capital.',
    takeaway: 'Understanding real-world economic and business outcomes requires analyzing human psychology and institutional incentives, not idealized rational models.'
  },
  {
    id: 'biz-strat',
    name: 'Business + Strategy',
    disciplines: ['Business Models', 'Competitive Strategy'],
    icons: [Briefcase, Cpu],
    category: 'Structural Moats',
    thesis: 'Superior technical architecture does not survive without defensible distribution and high switching costs.',
    mechanism: 'Deconstructing value-chain power: evaluating customer lock-in, proprietary developer ecosystems (e.g. CUDA), and supplier concentration leverage.',
    caseStudy: 'NVIDIA’s dominance is governed by the CUDA software library and interconnect fabric, rendering raw silicon competitors economically unviable.',
    takeaway: 'A company’s pricing power is determined by the cost a customer incurs when attempting to replace it.'
  },
  {
    id: 'hist-econ',
    name: 'History + Economic Systems',
    disciplines: ['Historical Cycles', 'Institutional Economics'],
    icons: [Landmark, Coins],
    category: 'Long-Wave Technology Waves',
    thesis: 'Secular technology revolutions follow predictable patterns of infrastructure installation, speculation, and institutional absorption.',
    mechanism: 'Studying the historical deployment of prior General Purpose Technologies (railroads, telegraph networks, electrification, commercial internet) to identify the transition from infrastructure build-out to economic utility.',
    caseStudy: 'Railroad buildouts in the 1840s created massive bankruptcies among rail operators while establishing the permanent logistics foundation for a century of industrial growth.',
    takeaway: 'Infrastructure builders frequently overbuild and suffer, while the second-wave application layers capture enduring long-term value.'
  }
];

export const DisciplinesSection: React.FC = () => {
  const [activePairingId, setActivePairingId] = useState<string>('cs-ai');
  const activePairing = PAIRINGS.find((p) => p.id === activePairingId) || PAIRINGS[0];

  return (
    <section id="disciplines" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            02 / Interdisciplinary Synthesis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Complex problems rarely belong to a single discipline.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-ink-secondary leading-relaxed">
            Real breakthrough insights emerge at the intersections. By connecting computing architectures, 
            mathematical rigor, economic theory, and human behavioural psychology, I deconstruct systems 
            that cannot be understood through any single lens.
          </p>
        </div>

        {/* Interactive Synthesis Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Pairing Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2 block">
              Select an interdisciplinary convergence:
            </span>

            {PAIRINGS.map((pairing) => {
              const isSelected = pairing.id === activePairingId;
              const IconA = pairing.icons[0];
              const IconB = pairing.icons[1];

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
                      <span className={`font-mono text-[11px] uppercase tracking-wider block ${
                        isSelected ? 'text-vermilion font-semibold' : 'text-ink-muted'
                      }`}>
                        {pairing.category}
                      </span>
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
                    <span>{activePairing.disciplines[0]}</span>
                    <span>×</span>
                    <span>{activePairing.disciplines[1]}</span>
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
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
