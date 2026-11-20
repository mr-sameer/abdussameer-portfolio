'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WaferScene3D } from '@/components/home/WaferScene3D';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[840px] flex flex-col justify-between pt-16 lg:pt-24 pb-12 border-b border-paper-border overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
        {/* Left Editorial Narrative Column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 mb-6 px-3 py-1 bg-paper-card border border-paper-border rounded-full">
            <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Interdisciplinary Thinker · Researcher · Builder
            </span>
          </div>

          {/* Central Statement Headline */}
          <h1 className="font-serif text-[clamp(44px,6.4vw,88px)] leading-[1.04] tracking-[-2px] text-ink mb-6">
            Connecting ideas.
            <br />
            Understanding systems.
            <br />
            <em className="text-vermilion not-italic font-semibold">Solving problems.</em>
          </h1>

          {/* Supporting Philosophy */}
          <p className="font-sans text-lg sm:text-xl leading-relaxed text-ink-secondary max-w-[600px] mb-8 font-normal">
            I am interested in understanding how the world works and how different disciplines connect. 
            From computer science, artificial intelligence, and semiconductor technology to economics, 
            finance, mathematics, business strategy, psychology, and philosophy, I explore ideas across 
            fields to understand complex systems and discover new approaches to meaningful problems.
          </p>

          <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed max-w-[580px] mb-8">
            This platform is where I investigate ideas, research companies and industries, explore emerging technologies, and build things.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <Button href="#research" variant="dark">
              <span>Explore research</span>
              <span aria-hidden="true">↓</span>
            </Button>
            <Button href="/about" variant="text">
              <span>Discover my journey</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Cinematic 3D Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end"
        >
          <WaferScene3D />
        </motion.div>
      </Container>

      {/* Hero Foot Indicator */}
      <Container className="pt-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-ink-muted border-t border-paper-border/60 mt-8">
        <span>Curiosity · Intellectual Depth · Ambition</span>
        <span className="hidden sm:inline">Built on primary evidence and first principles.</span>
      </Container>
    </section>
  );
};
