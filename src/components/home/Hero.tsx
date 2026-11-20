'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WaferScene3D } from '@/components/home/WaferScene3D';
import { Crosshair, Cpu, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[800px] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 pb-6 border-b border-ink/40 overflow-hidden bg-[#070C16] text-paper">
      {/* 1. Spatial Ambient 3D Canvas Background */}
      <div 
        className="absolute right-0 top-0 w-full lg:w-[65%] h-full z-0 flex items-center justify-center lg:justify-end pointer-events-auto"
        aria-hidden="true"
      >
        <WaferScene3D className="w-full h-full min-h-[500px] lg:min-h-[760px]" />
      </div>

      {/* 2. Soft Ambient Vignette for Typographic Contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#070C16]/90 via-[#070C16]/70 to-[#070C16] lg:bg-gradient-to-r lg:from-[#070C16] lg:via-[#070C16]/90 lg:to-transparent"
        aria-hidden="true"
      />

      {/* 3. Precision Optical HUD Overlay Elements */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-10 flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 bg-[#070C16]/80 backdrop-blur-md border border-paper/20 rounded-sm font-mono text-[10px] sm:text-[11px] text-paper/75 select-none shadow-md">
        <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse shadow-[0_0_8px_#ff5d37]" aria-hidden="true" />
        <span className="font-semibold text-paper">EUV OPTICS</span>
        <span className="text-paper/30">|</span>
        <span>λ = 13.5nm</span>
        <span className="text-paper/30 hidden sm:inline">|</span>
        <span className="hidden sm:inline">NA = 0.55 HIGH-NA</span>
        <span className="text-paper/30">|</span>
        <span>300mm Si</span>
      </div>

      {/* Corner Optical Alignment Crosshairs */}
      <div className="absolute top-6 left-6 z-10 hidden lg:flex items-center gap-1.5 font-mono text-[10px] text-paper/50 select-none pointer-events-none">
        <Crosshair className="w-3.5 h-3.5 text-vermilion" />
        <span>SYS_ORIGIN [0.00, 0.00]</span>
      </div>

      {/* 4. Primary Typographic Content Column */}
      <Container className="relative z-10 flex-grow flex flex-col justify-center py-4 sm:py-6 lg:py-8">
        <div className="max-w-2xl lg:max-w-[760px] flex flex-col items-start">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 mb-4 px-3.5 py-1.5 bg-paper/10 backdrop-blur-md border border-paper/20 rounded-full shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-vermilion shadow-[0_0_6px_#ff5d37]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-paper font-semibold">
              Interdisciplinary Thinker · Researcher · Builder
            </span>
          </motion.div>

          {/* Central Statement Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] leading-[1.05] tracking-tight text-paper mb-4"
          >
            Connecting ideas.
            <br />
            Understanding systems.
            <br />
            <em className="text-vermilion not-italic font-semibold drop-shadow-[0_0_16px_rgba(255,93,55,0.35)]">
              Solving problems.
            </em>
          </motion.h1>

          {/* Supporting Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-paper/85 mb-3 font-normal max-w-xl"
          >
            I explore how the world works across computing limits, macroeconomic capital cycles, and complex systemic incentives. 
            From semiconductor physics to artificial intelligence, market structure, and human behaviour, I deconstruct systems 
            that cannot be understood through any single discipline.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm text-paper/60 leading-relaxed mb-6 max-w-lg"
          >
            This studio platform is where I investigate ideas, audit corporate moats, research global supply chains, and build empirical systems.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button href="#research" variant="vermilion">
              <span>Explore research</span>
              <span aria-hidden="true">↓</span>
            </Button>
            <Button href="/about" variant="light" className="bg-transparent text-paper border-paper/40 hover:bg-paper/10 hover:text-paper hover:border-paper">
              <span>Discover my journey</span>
              <span aria-hidden="true">→</span>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* 5. Precision Optical Telemetry Bottom Footer Strip */}
      <Container className="relative z-10 pt-5 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-paper/60 border-t border-paper/15">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-paper font-semibold">
            <Cpu className="w-3.5 h-3.5 text-vermilion" />
            <span>SUBSTRATE: 300mm DIE ARCHITECTURE</span>
          </span>
          <span className="hidden md:inline text-paper/30">|</span>
          <span className="hidden md:inline">PACKAGING: CoWoS-S · HBM3e</span>
        </div>

        <div className="flex items-center gap-3 text-paper/60">
          <span>EVIDENCE TAXONOMY: 5-TIER AUDITED</span>
          <span className="hidden sm:inline text-paper/30">|</span>
          <span className="hidden sm:inline flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-vermilion" />
            <span className="text-paper/80">FIRST PRINCIPLES ONLY</span>
          </span>
        </div>
      </Container>
    </section>
  );
};
