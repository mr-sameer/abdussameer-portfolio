'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Cpu, 
  TrendingUp, 
  Compass, 
  Mail, 
  Github, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const AboutContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-paper border-b border-paper-border">
      <div id="about" className="sr-only" tabIndex={-1} />
      <div id="approach" className="sr-only" tabIndex={-1} />
      
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            06 / Orientation &amp; Contact Hub
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Driven by curiosity.
            <br />
            <em className="text-vermilion not-italic font-semibold">Thinking across boundaries.</em>
          </h2>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ink-secondary leading-relaxed">
            I am Abdus Sameer — an interdisciplinary thinker, researcher, and builder. 
            My work explores the intersections of physical computing constraints, macroeconomic capital cycles, 
            and complex systemic incentives to discover new approaches to meaningful problems.
          </p>
        </div>

        {/* 3 Core Intellectual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          <div className="p-8 bg-paper-card rounded-sm border border-paper-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Foundational Discipline
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold mb-3">
                Computer Science &amp; Systems
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Deconstructing distributed software architectures, advanced semiconductor packaging, 
                and physical computational bottlenecks from the silicon up.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Silicon Physics · Distributed Systems · Compilers
            </div>
          </div>

          <div className="p-8 bg-paper-card rounded-sm border border-paper-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Systemic Discipline
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold mb-3">
                Economics &amp; Capital Cycles
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Analyzing macroeconomic capital cycles, unit economics, cash-flow conversion, and 
                the structural power dynamics that dictate industry moats.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Market Structure · Capital Allocation · Valuation
            </div>
          </div>

          <div className="p-8 bg-paper-card rounded-sm border border-paper-border flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-sm bg-ink/5 border border-ink/10 flex items-center justify-center text-vermilion mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted block mb-2">
                Analytical Discipline
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold mb-3">
                Applied Mathematics &amp; Strategy
              </h3>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                Synthesizing game theory, quantitative models, and cognitive decision frameworks 
                to evaluate risk, uncertainty, and long-term strategic durability.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-paper-border font-mono text-[11px] text-ink-muted">
              Game Theory · Probabilistic Thinking · Complexity
            </div>
          </div>
        </div>

        {/* Subpage Navigation Hub Matrix */}
        <div className="mb-14 p-8 bg-paper-card border border-paper-border rounded-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
              Explore The Platform
            </span>
          </div>
          <h3 className="font-serif text-2xl text-ink font-semibold mb-6">
            Detailed research, case studies, and full intellectual background
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="p-5 bg-paper rounded-sm border border-paper-border hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-vermilion font-semibold block mb-1">
                  Personal Biography &amp; Journey
                </span>
                <h4 className="font-serif text-lg font-semibold text-ink group-hover:text-vermilion transition-colors mb-2">
                  Read Complete Story →
                </h4>
                <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                  Full background covering formal education in Computer Science and Economics, commercial frontline execution, and research philosophy.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-paper-border flex items-center gap-1.5 font-sans text-xs font-bold text-ink group-hover:text-vermilion">
                <span>View About Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="p-5 bg-paper rounded-sm border border-paper-border hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-vermilion font-semibold block mb-1">
                  Engineering &amp; Finance Builds
                </span>
                <h4 className="font-serif text-lg font-semibold text-ink group-hover:text-vermilion transition-colors mb-2">
                  Browse Project Teardowns →
                </h4>
                <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                  Deep-dive 4-part architectural case studies on the Semiconductor Value-Chain Map, Software Economics Sandbox, and Evidence Diffing tools.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-paper-border flex items-center gap-1.5 font-sans text-xs font-bold text-ink group-hover:text-vermilion">
                <span>Explore Projects Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/research"
              className="p-5 bg-paper rounded-sm border border-paper-border hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-vermilion font-semibold block mb-1">
                  Independent Publications
                </span>
                <h4 className="font-serif text-lg font-semibold text-ink group-hover:text-vermilion transition-colors mb-2">
                  Explore Research Platform →
                </h4>
                <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                  Scholarly value-chain investigations and corporate intelligence dossiers on ASML, NVIDIA, and TSMC with audited primary citations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-paper-border flex items-center gap-1.5 font-sans text-xs font-bold text-ink group-hover:text-vermilion">
                <span>Browse Research Index</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Direct Contact Vermilion Card */}
        <div className="p-8 sm:p-12 bg-vermilion text-ink rounded-sm shadow-md">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold block mb-3">
              Direct Inquiry &amp; Dialogue
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-semibold leading-tight tracking-tight mb-5">
              Let’s make sense
              <br />
              of what’s next.
            </h3>
            <p className="font-sans text-base sm:text-lg text-ink font-medium leading-relaxed mb-8 max-w-xl">
              Have an interdisciplinary inquiry, semiconductor bottleneck to discuss, business model hypothesis, or research collaboration to explore?
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@abdussameer.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-paper font-sans text-sm font-bold tracking-tight rounded-sm hover:bg-ink/90 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-vermilion" />
                <span>Say hello (hello@abdussameer.com)</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion" />
              </a>

              <a
                href="https://github.com/mr-sameer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-paper/90 text-ink font-sans text-sm font-semibold tracking-tight rounded-sm hover:bg-paper transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
