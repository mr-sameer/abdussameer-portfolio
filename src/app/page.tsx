import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Ticker } from '@/components/home/Ticker';
import { PersonSection } from '@/components/home/PersonSection';
import { DisciplinesSection } from '@/components/home/DisciplinesSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ResearchGrid } from '@/components/home/ResearchGrid';
import { ApproachSection } from '@/components/home/ApproachSection';
import { FocusSection } from '@/components/home/FocusSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <div id="top" tabIndex={-1} className="sr-only">
        Top of page
      </div>

      {/* 1. Interdisciplinary Hero with 3D Wafer / SVG Reticle */}
      <Hero />

      {/* 2. Coverage Stream Ticker */}
      <Ticker />

      {/* 3. The Person Behind the Ideas (Education & Experience) */}
      <PersonSection />

      {/* 4. Connecting Disciplines (Intellectual Dimensions & Cross-Syntheses) */}
      <DisciplinesSection />

      {/* 5. Projects and Things I'm Building */}
      <ProjectsSection />

      {/* 6. Independent Research Dossier */}
      <ResearchGrid />

      {/* 7. Analytical Approach */}
      <ApproachSection />

      {/* 8. Research Horizons */}
      <FocusSection />

      {/* 9. Direct Inquiry & Dialogue */}
      <ContactSection />
    </>
  );
}
