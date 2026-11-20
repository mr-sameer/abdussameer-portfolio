'use client';

import React from 'react';
import { ArrowUpRight, Cpu, Layers, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ResearchCardItem } from '@/lib/constants';

interface ResearchCardProps {
  item: ResearchCardItem;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ item }) => {
  const isFeatured = item.isFeatured;

  return (
    <article
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-sm transition-all duration-300 ${
        isFeatured
          ? 'bg-ink text-paper min-h-[440px] lg:min-h-[460px] shadow-md hover:-translate-y-1'
          : 'bg-paper-card text-ink min-h-[380px] border border-paper-border hover:-translate-y-1 hover:border-ink/30 shadow-sm'
      }`}
    >
      <div>
        {/* Card Header Meta */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <Badge variant={isFeatured ? 'vermilion' : 'neutral'}>
            {item.status}
          </Badge>
          <span
            className={`font-mono text-xs uppercase tracking-wider ${
              isFeatured ? 'text-paper/60' : 'text-ink-muted'
            }`}
          >
            {item.readingTime}
          </span>
        </div>

        {/* Corporate / Sector Monogram */}
        {item.corporateMark ? (
          <div
            className="w-12 h-12 rounded flex items-center justify-center font-bold text-xl mb-6 select-none shadow-sm"
            style={{
              backgroundColor: item.corporateMark.bg,
              color: item.corporateMark.text,
            }}
            aria-hidden="true"
          >
            {item.corporateMark.letter}
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded flex items-center justify-center font-bold text-lg mb-6 select-none shadow-sm ${
              isFeatured ? 'bg-vermilion text-ink' : 'bg-paper text-ink border border-paper-border'
            }`}
            aria-hidden="true"
          >
            {item.slug === 'asml' ? 'ASML' : 'AI'}
          </div>
        )}

        {/* Sector Tag */}
        <div className="mb-3">
          <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${
            isFeatured ? 'text-vermilion' : 'text-ink-muted'
          }`}>
            {item.sector}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-serif text-2xl sm:text-[28px] leading-snug tracking-tight mb-4 ${
            isFeatured ? 'text-paper' : 'text-ink'
          }`}
        >
          {item.title}
        </h3>

        {/* Subtitle / Excerpt */}
        <p
          className={`font-sans text-sm sm:text-base leading-relaxed ${
            isFeatured ? 'text-paper/75' : 'text-ink-secondary'
          }`}
        >
          {item.subtitle}
        </p>

        {/* Analytical Focus Pillars */}
        <div className="mt-6 pt-4 border-t border-current/10">
          <div className="flex flex-wrap gap-2">
            {item.slug === 'asml' && (
              <>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-paper/10 text-paper/80 border border-paper/15">
                  EUV Optical Physics
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-paper/10 text-paper/80 border border-paper/15">
                  High-NA Economics
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-vermilion/20 text-vermilion border border-vermilion/30">
                  Monopoly Moat
                </span>
              </>
            )}
            {item.slug === 'nvidia' && (
              <>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-ink/5 text-ink-muted border border-ink/10">
                  CUDA Software Moat
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-ink/5 text-ink-muted border border-ink/10">
                  NVLink Interconnect
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-vermilion/15 text-vermilion border border-vermilion/20">
                  CAPEX Sensitivity
                </span>
              </>
            )}
            {item.slug === 'ai-infrastructure' && (
              <>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-ink/5 text-ink-muted border border-ink/10">
                  Data Center Power
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-ink/5 text-ink-muted border border-ink/10">
                  CoWoS Packaging
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-ink/5 text-ink-muted border border-ink/10">
                  Rent Extraction
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="pt-8 mt-auto border-t border-current/10 flex items-center justify-between">
        <span
          className={`font-sans text-sm font-bold tracking-tight inline-flex items-center gap-1.5 transition-colors ${
            isFeatured ? 'text-paper group-hover:text-vermilion' : 'text-ink group-hover:text-vermilion'
          }`}
        >
          <span>Read dossier preview</span>
          <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className="font-mono text-[11px] text-ink-muted">
          {item.status === 'Upcoming' ? 'In Queue' : 'Draft in Progress'}
        </span>
      </div>

      {/* Accessible Anchor Overlay */}
      <a
        href="#contact"
        className="absolute inset-0 z-10 rounded-sm focus:outline-none"
        aria-label={`Preview research on ${item.title} (${item.status})`}
      >
        <span className="sr-only">Read research preview on {item.title}</span>
      </a>
    </article>
  );
};
