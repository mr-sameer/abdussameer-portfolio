'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const SemiconductorLattice: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[380px] lg:min-h-[460px] flex items-center justify-center pointer-events-auto"
      aria-hidden="true"
    >
      {/* SVG-first Lithography & Silicon Reticle Geometry */}
      <motion.svg
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: mousePos.x * 12,
                y: mousePos.y * 12,
              }
        }
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        viewBox="0 0 500 500"
        className="w-full max-w-[480px] h-auto select-none overflow-visible"
      >
        <defs>
          {/* Subtle Grid Pattern */}
          <pattern id="die-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <rect width="25" height="25" fill="none" stroke="#0a1120" strokeWidth="0.5" strokeOpacity="0.08" />
            <circle cx="12.5" cy="12.5" r="0.75" fill="#0a1120" fillOpacity="0.12" />
          </pattern>

          {/* Stepper Reticle Field Pattern */}
          <pattern id="reticle-blocks" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="94" height="94" x="3" y="3" fill="none" stroke="#0a1120" strokeWidth="1" strokeOpacity="0.15" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#0a1120" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#0a1120" strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>

        {/* 300mm Silicon Wafer Outer Boundary */}
        <circle cx="250" cy="250" r="215" fill="none" stroke="#0a1120" strokeWidth="1.5" strokeOpacity="0.18" />
        <circle cx="250" cy="250" r="208" fill="none" stroke="#0a1120" strokeWidth="0.75" strokeDasharray="3 4" strokeOpacity="0.2" />

        {/* Wafer Notch Indicator (Top Alignment Notch) */}
        <path d="M 246 35 A 4 4 0 0 0 254 35" fill="none" stroke="#ff5d37" strokeWidth="1.5" />

        {/* Background Die Grid */}
        <rect x="50" y="50" width="400" height="400" fill="url(#die-grid)" rx="200" />
        <rect x="70" y="70" width="360" height="360" fill="url(#reticle-blocks)" rx="180" />

        {/* Central Photomask Exposure Reticle */}
        <rect
          x="150"
          y="150"
          width="200"
          height="200"
          fill="none"
          stroke="#0a1120"
          strokeWidth="1.25"
          strokeOpacity="0.35"
        />

        {/* Optical Alignment Crosshairs */}
        <line x1="250" y1="60" x2="250" y2="440" stroke="#ff5d37" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 4" />
        <line x1="60" y1="250" x2="440" y2="250" stroke="#ff5d37" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 4" />

        {/* Precision Fiducial Alignment Markers */}
        {/* Top-Left */}
        <path d="M 140 160 L 140 140 L 160 140" fill="none" stroke="#0a1120" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Top-Right */}
        <path d="M 340 140 L 360 140 L 360 160" fill="none" stroke="#0a1120" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Bottom-Left */}
        <path d="M 140 340 L 140 360 L 160 360" fill="none" stroke="#0a1120" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Bottom-Right */}
        <path d="M 340 360 L 360 360 L 360 340" fill="none" stroke="#0a1120" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Center Target Fiducial (EUV Exposure Focal Point) */}
        <circle cx="250" cy="250" r="14" fill="none" stroke="#ff5d37" strokeWidth="1.25" strokeOpacity="0.7" />
        <circle cx="250" cy="250" r="3" fill="#ff5d37" />

        {/* Micro-Coordinate Labels */}
        <text x="160" y="170" fill="#0a1120" fillOpacity="0.45" fontSize="8" fontFamily="var(--font-dmmono), monospace">
          X: +014.825nm
        </text>
        <text x="160" y="335" fill="#0a1120" fillOpacity="0.45" fontSize="8" fontFamily="var(--font-dmmono), monospace">
          NA: 0.55 HIGH-NA
        </text>
        <text x="270" y="335" fill="#ff5d37" fontSize="8" fontFamily="var(--font-dmmono), monospace">
          RETICLE LOCK
        </text>
      </motion.svg>
    </div>
  );
};
