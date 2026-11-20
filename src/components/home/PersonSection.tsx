'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, TrendingUp, Compass, Network } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const PersonSection: React.FC = () => {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-paper-card border-b border-paper-border">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            01 / The Person Behind the Ideas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Driven by curiosity.
            <br />
            <em className="text-vermilion not-italic font-semibold">Thinking across boundaries.</em>
          </h2>
          <p className="font-sans text-lg sm:text-xl text-ink-secondary leading-relaxed">
            I am Abdus Sameer — an interdisciplinary thinker, researcher, and builder. 
            My work is anchored in exploring the interplay between physical computing constraints, 
            economic market realities, and complex systemic incentives.
          </p>
        </div>

        {/* Intellectual Foundation Pillars (Replacing Résumé Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Pillar 1: Computing & Systems */}
          <div className="p-8 bg-paper rounded-sm border border-paper-border flex flex-col justify-between hover:border-ink/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Foundational Discipline
              </span>
              <h3 className="font-serif text-2xl text-ink font-semibold mb-3">
                Computer Science &amp; Systems
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Deconstructing distributed software architectures, advanced semiconductor packaging, 
                and physical computational bottlenecks from the silicon up.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Algorithms · Hardware Acceleration · Micro-architectures
            </div>
          </div>

          {/* Pillar 2: Economics & Markets */}
          <div className="p-8 bg-paper rounded-sm border border-paper-border flex flex-col justify-between hover:border-ink/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Systemic Discipline
              </span>
              <h3 className="font-serif text-2xl text-ink font-semibold mb-3">
                Economics &amp; Capital Cycles
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Analyzing macroeconomic capital cycles, unit economics, cash-flow conversion, and 
                the structural power dynamics that dictate industry moats.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Market Structure · Capital Allocation · Valuation
            </div>
          </div>

          {/* Pillar 3: Mathematics & Applied Models */}
          <div className="p-8 bg-paper rounded-sm border border-paper-border flex flex-col justify-between hover:border-ink/40 transition-colors shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Analytical Discipline
              </span>
              <h3 className="font-serif text-2xl text-ink font-semibold mb-3">
                Applied Mathematics &amp; Strategy
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Synthesizing game theory, quantitative models, and cognitive decision frameworks 
                to evaluate risk and long-term strategic durability.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Game Theory · Probabilistic Thinking · Complexity
            </div>
          </div>
        </div>

        {/* How I Approach Problems Manifesto Card */}
        <div className="p-8 sm:p-12 bg-ink text-paper rounded-sm border border-ink/40 mb-12 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Network className="w-4 h-4 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
              Cognitive Framework
            </span>
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl text-paper mb-6 max-w-2xl">
            A single perspective is never sufficient to solve a complex challenge.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-paper/75 leading-relaxed pt-6 border-t border-paper/15">
            <div>
              <strong className="text-paper block mb-1.5 font-mono text-xs uppercase text-vermilion">1. Engineering</strong>
              Understanding what physical laws, compute limits, and software constraints permit.
            </div>
            <div>
              <strong className="text-paper block mb-1.5 font-mono text-xs uppercase text-vermilion">2. Economics</strong>
              Evaluating whether customer willingness-to-pay and unit margins create durable value.
            </div>
            <div>
              <strong className="text-paper block mb-1.5 font-mono text-xs uppercase text-vermilion">3. Finance</strong>
              Isolating real free cash flows, capital intensity, and downside risk from hype.
            </div>
            <div>
              <strong className="text-paper block mb-1.5 font-mono text-xs uppercase text-vermilion">4. Human Nature</strong>
              Recognizing that incentives, psychology, and organizational incentives dictate reality.
            </div>
          </div>
        </div>

        {/* Dedicated Invitation to Complete Journey on About Page */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 bg-paper border border-paper-border rounded-sm shadow-sm">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-ink font-semibold">
              Explore the complete intellectual journey &amp; background
            </h4>
            <p className="font-sans text-sm sm:text-base text-ink-secondary mt-1 max-w-2xl">
              Discover the full narrative covering my formal education in Computer Science and Economics, 
              commercial frontline execution background, and future research vision.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-paper font-sans text-sm font-bold tracking-tight rounded-sm hover:bg-ink/90 transition-colors flex-shrink-0 shadow-sm"
          >
            <span>Read full biography</span>
            <ArrowUpRight className="w-4 h-4 text-vermilion" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
