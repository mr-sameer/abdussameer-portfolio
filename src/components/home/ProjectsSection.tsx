'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { 
  Network, 
  LineChart, 
  FileText, 
  Code2, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'Active Development' | 'Experimental Prototype';
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  problem: string;
  whyItMatters: string;
  howItWorks: string;
  whatWasBuilt: string;
  technologies: string[];
}

const PROJECTS: ProjectDetail[] = [
  {
    id: 'semis-intel',
    number: '01',
    title: 'Semiconductor Moat & Value-Chain Map',
    category: 'Market & Industry Intelligence',
    status: 'Active Development',
    icon: Network,
    headline: 'Tracing structural choke points from photolithography optics to hyperscaler data centers.',
    problem:
      'Traditional research relies on fragmented spreadsheets and sell-side commentary, failing to highlight single-point-of-failure choke points across global silicon supply chains.',
    whyItMatters:
      'Extreme photolithography (ASML), chemical photoresists (Tokyo Ohka), foundries (TSMC), and advanced packaging (CoWoS) create physical and geopolitical bottlenecks that dictate the pace of AI computing.',
    howItWorks:
      'Synthesizes audited annual regulatory filings (Form 10-Ks, 20-Fs), IEEE technical papers, and supplier disclosures into a multi-tiered dependency graph.',
    whatWasBuilt:
      'An interactive relational mapping engine modeling revenue dependency flows and capacity concentration across 15+ Tier-1 semiconductor companies.',
    technologies: ['TypeScript', 'Next.js', 'Relational Mapping', 'SEC EDGAR', 'Vector Geometry'],
  },
  {
    id: 'equity-teardown',
    number: '02',
    title: 'Enterprise Software Economics Sandbox',
    category: 'Financial & Valuation Modeling',
    status: 'Active Development',
    icon: LineChart,
    headline: 'Auditing SaaS unit economics, cloud infrastructure drag, and retention decay.',
    problem:
      'GAAP accounting obscures real cloud hosting COGS, customer acquisition payback decay, and stock-based compensation dilution in enterprise cloud platforms.',
    whyItMatters:
      'Without isolating hosting infrastructure gross margins and net retention decay rates, operators and investors miscalculate long-term free cash flow durability.',
    howItWorks:
      'Dynamic cohort-retention models and discounted cash flow engines that isolate cloud infrastructure cost scaling and sales compensation burn.',
    whatWasBuilt:
      'A repeatable financial modeling framework tested against 5 public enterprise software balance sheets to stress-test operating leverage.',
    technologies: ['Financial Modeling', 'Cohort Analysis', 'Python / Pandas', 'Markdown Teardowns'],
  },
  {
    id: 'ai-synthesizer',
    number: '03',
    title: 'Primary Evidence Extraction Toolkit',
    category: 'AI & Knowledge Systems',
    status: 'Experimental Prototype',
    icon: FileText,
    headline: 'Automating delta analysis across multi-hundred-page regulatory filings.',
    problem:
      'Researchers spend dozens of hours manually diffing 10-K risk factors and MD&A disclosures between reporting quarters.',
    whyItMatters:
      'Subtle shifts in management language, accounting policy changes, and inventory disclosures often reveal inflection points quarters before headline earnings reflect them.',
    howItWorks:
      'Local vector retrieval and lexical diffing pipeline tailored specifically for SEC tables, regulatory footnotes, and earnings call transcripts.',
    whatWasBuilt:
      'A prototype tool that surfaces quarter-over-quarter disclosure shifts while strictly maintaining direct links to verbatim primary sources.',
    technologies: ['TypeScript', 'Vector Retrieval', 'Text Diffing', 'SEC Data Ingestion'],
  },
  {
    id: 'research-publication',
    number: '04',
    title: 'AbdusSameer Independent Research Platform',
    category: 'Software Architecture',
    status: 'Active Development',
    icon: Code2,
    headline: 'An ultra-fast, zero-JS readable digital publication platform for rigorous technology research.',
    problem:
      'Standard publishing platforms (Medium, Substack) are rigid, lack custom interactive visual modeling capabilities, and compromise privacy and performance.',
    whyItMatters:
      'Independent research on complex technological and economic systems deserves a presentation medium crafted with equal technical discipline and typographic dignity.',
    howItWorks:
      'Static-first Next.js App Router architecture with custom design tokens, zero-JS readable semantic HTML, self-hosted OFL typography, and embedded WebGL visualizations.',
    whatWasBuilt:
      'The exact platform you are navigating right now: engineered for sub-1.5s LCP, zero layout shift, and 100% accessible keyboard navigation.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Three.js'],
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>('semis-intel');
  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-paper border-b border-paper-border">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              03 / Projects &amp; Things I’m Building
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink">
              From curiosity to code.
              <br />
              <em className="text-vermilion not-italic font-semibold">Building to understand.</em>
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-md">
            I don’t just analyze systems from a distance. I build software tools, analytical models, 
            and research prototypes to test hypotheses and verify how things actually operate.
          </p>
        </div>

        {/* Asymmetric Project Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {PROJECTS.map((project) => {
              const isSelected = project.id === activeProjectId;
              const Icon = project.icon;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-ink text-paper border-ink shadow-md'
                      : 'bg-paper-card text-ink border-paper-border hover:border-ink/40 hover:bg-paper-muted'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-vermilion' : 'text-ink-muted'
                    }`}>
                      {project.number}
                    </span>
                    <Badge variant={project.status === 'Active Development' ? 'vermilion' : 'neutral'}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className={`font-sans text-xs leading-relaxed line-clamp-2 ${
                    isSelected ? 'text-paper/75' : 'text-ink-secondary'
                  }`}>
                    {project.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Project Inspector */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-paper-card border border-paper-border rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Category & Status Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-paper-border mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                      {activeProject.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-vermilion" aria-hidden="true" />
                      <span className="font-mono text-xs text-ink-muted">
                        {activeProject.status}
                      </span>
                    </div>
                  </div>

                  {/* Title and Headline */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold tracking-tight mb-4">
                    {activeProject.title}
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-ink font-medium leading-relaxed mb-8">
                    {activeProject.headline}
                  </p>

                  {/* 4-Part Structured Teardown */}
                  <div className="space-y-6 pt-4 border-t border-paper-border mb-8">
                    {/* 1. Problem */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-1.5 font-bold">
                        01 / What Problem It Addresses
                      </span>
                      <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                        {activeProject.problem}
                      </p>
                    </div>

                    {/* 2. Why It Matters */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-vermilion block mb-1.5 font-bold">
                        02 / Why It Matters
                      </span>
                      <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                        {activeProject.whyItMatters}
                      </p>
                    </div>

                    {/* 3. How It Works */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-1.5 font-bold">
                        03 / How It Operates
                      </span>
                      <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                        {activeProject.howItWorks}
                      </p>
                    </div>

                    {/* 4. What Was Explored / Built */}
                    <div className="p-4 bg-paper rounded-sm border border-paper-border">
                      <span className="font-mono text-xs uppercase tracking-wider text-ink block mb-1.5 font-bold">
                        04 / What Was Explored &amp; Built
                      </span>
                      <p className="font-sans text-sm text-ink leading-relaxed">
                        {activeProject.whatWasBuilt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies Footer */}
                <div className="pt-6 border-t border-paper-border flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-ink-muted uppercase mr-2">
                    Stack:
                  </span>
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-paper text-ink font-mono text-xs border border-paper-border rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
