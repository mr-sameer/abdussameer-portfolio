'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ALL_COMPANIES } from '@/lib/data/companies';
import { CompanyIntelligence } from '@/lib/types/company';

export const CompanyIntelPreview: React.FC = () => {
  const companies: CompanyIntelligence[] = ALL_COMPANIES.slice(0, 3);

  return (
    <section id="companies" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              04 / Corporate Intelligence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Deconstructing structural moats &amp;
              <br />
              <em className="text-vermilion not-italic font-semibold">capital durability.</em>
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-md">
            Independent teardowns of foundational global enterprises. 
            Auditing pricing power, customer lock-in, R&amp;D productivity, and capital allocation from verified regulatory filings.
          </p>
        </div>

        {/* 3-Company Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {companies.map((company, idx) => {
            const isFeatured = idx === 0; // ASML is featured anchor
            const id = company.identity;
            const moat = company.competitiveLandscape?.moatSummary;
            const tech = company.technologyAndIP?.coreTechnologies || [];

            return (
              <article
                key={id.slug}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-sm transition-all duration-300 ${
                  isFeatured
                    ? 'bg-ink text-paper shadow-md hover:-translate-y-1'
                    : 'bg-paper-card text-ink border border-paper-border hover:border-ink/40 shadow-sm hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Status & Sector Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <Badge variant={isFeatured ? 'vermilion' : 'neutral'}>
                      {company.status}
                    </Badge>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                        isFeatured ? 'text-vermilion' : 'text-ink-muted'
                      }`}
                    >
                      {id.ticker || id.sector}
                    </span>
                  </div>

                  {/* Brand Monogram & Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center font-bold text-sm tracking-tight select-none shadow-sm flex-shrink-0"
                      style={{
                        backgroundColor: id.monogram.bg,
                        color: id.monogram.text,
                      }}
                      aria-hidden="true"
                    >
                      {id.monogram.letter}
                    </div>
                    <div>
                      <span className={`font-mono text-[11px] uppercase tracking-wider block ${
                        isFeatured ? 'text-paper/60' : 'text-ink-muted'
                      }`}>
                        {id.sector}
                      </span>
                      <h3 className={`font-serif text-2xl font-semibold leading-tight ${
                        isFeatured ? 'text-paper' : 'text-ink'
                      }`}>
                        <Link href={`/companies/${id.slug}`} className="hover:underline">
                          {id.name}
                        </Link>
                      </h3>
                    </div>
                  </div>

                  {/* Company Overview */}
                  <p className={`font-sans text-sm sm:text-base leading-relaxed mb-6 ${
                    isFeatured ? 'text-paper/85' : 'text-ink-secondary'
                  }`}>
                    {company.overview}
                  </p>

                  {/* Moat Highlight Box */}
                  {moat && (
                    <div className={`p-4 rounded-sm border mb-6 text-xs leading-relaxed ${
                      isFeatured 
                        ? 'bg-paper/10 border-paper/15 text-paper/90' 
                        : 'bg-paper border-paper-border text-ink'
                    }`}>
                      <strong className={`block font-mono text-[10px] uppercase tracking-wider mb-1 ${
                        isFeatured ? 'text-vermilion' : 'text-vermilion font-bold'
                      }`}>
                        Structural Moat
                      </strong>
                      {moat}
                    </div>
                  )}

                  {/* Core Technologies Pills */}
                  {tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tech.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm border ${
                            isFeatured
                              ? 'bg-paper/5 text-paper/70 border-paper/10'
                              : 'bg-paper text-ink-muted border-paper-border'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action & Evidence Citation */}
                <div className={`pt-6 border-t mt-auto flex items-center justify-between ${
                  isFeatured ? 'border-paper/15' : 'border-paper-border'
                }`}>
                  <Link
                    href={`/companies/${id.slug}`}
                    className={`inline-flex items-center gap-1.5 font-sans text-sm font-bold tracking-tight transition-colors ${
                      isFeatured ? 'text-paper group-hover:text-vermilion' : 'text-ink group-hover:text-vermilion'
                    }`}
                  >
                    <span>Read intelligence dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-1" title="Audited regulatory disclosure">
                    <FileCheck className={`w-3.5 h-3.5 ${isFeatured ? 'text-paper/40' : 'text-ink-muted'}`} />
                    <span className={`font-mono text-[10px] ${isFeatured ? 'text-paper/40' : 'text-ink-muted'}`}>
                      SEC Tier-1
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Epistemological Attribution Strip */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-paper-card border border-paper-border rounded-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-vermilion flex-shrink-0" />
            <p className="font-sans text-xs text-ink-muted">
              Analysis strictly adheres to the 5-Tier Evidence Taxonomy. Audited SEC Form 10-Ks, 20-Fs, and statutory filings are separated from speculative estimates.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink hover:text-vermilion transition-colors flex-shrink-0"
          >
            <span>View All Research Publications</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-vermilion" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
