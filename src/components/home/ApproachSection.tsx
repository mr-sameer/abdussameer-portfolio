import React from 'react';
import { Container } from '@/components/ui/Container';
import { APPROACH_PRINCIPLES } from '@/lib/constants';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-paper-muted border-b border-paper-border">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-8">
          05 / Analytical Approach
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Headline Column */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
              “How complex it is
              <br />
              doesn’t matter.
              <br />
              <em className="text-vermilion not-italic font-semibold">We’ll make it clear.</em>”
            </h2>
            <p className="font-sans text-lg sm:text-xl leading-relaxed text-ink-secondary max-w-lg">
              Rigorous technology analysis starts with first principles. I deconstruct complex semiconductor physical limits, software business models, and industry shifts into clear, actionable frameworks.
            </p>
          </div>

          {/* Right Principles Column */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-paper-border border-y border-paper-border">
            {APPROACH_PRINCIPLES.map((principle) => (
              <div key={principle.number} className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                <span className="sm:col-span-2 font-mono text-xs uppercase tracking-wider text-vermilion font-bold">
                  {principle.number}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold mb-2">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
