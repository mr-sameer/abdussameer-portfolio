import React from 'react';
import { Container } from '@/components/ui/Container';
import { COVERAGE_AREAS } from '@/lib/constants';

export const FocusSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-paper-border">
      <Container>
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            06 / Research Horizons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            Technology is
            <br />
            not one story.
          </h2>
        </div>

        {/* 4 Structured Horizontal Rows */}
        <div className="border-t border-ink divide-y divide-ink">
          {COVERAGE_AREAS.map((area) => (
            <div
              key={area.number}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-paper-card/50 px-2 sm:px-4"
            >
              <span className="md:col-span-2 font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                {area.number}
              </span>
              <h3 className="md:col-span-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-semibold tracking-tight">
                {area.title}
              </h3>
              <p className="md:col-span-5 font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
