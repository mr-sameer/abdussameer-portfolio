import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-vermilion text-ink">
      <Container className="max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold block mb-4">
          07 / Direct Inquiry &amp; Dialogue
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink mb-6">
          Let’s make sense
          <br />
          of what’s next.
        </h2>

        <p className="font-sans text-lg sm:text-xl text-ink leading-relaxed max-w-xl mb-10">
          Have an interdisciplinary question, semiconductor supply-chain bottleneck, business model hypothesis, or research collaboration to explore?
        </p>

        <div>
          <a
            href="mailto:hello@abdussameer.com"
            className="inline-flex items-center gap-3 px-6 py-4 bg-paper text-ink font-sans text-sm font-bold tracking-tight rounded-sm hover:bg-paper-card transition-colors shadow-md"
          >
            <span>Say hello</span>
            <ArrowUpRight className="w-4 h-4 text-vermilion" />
          </a>
        </div>
      </Container>
    </section>
  );
};
