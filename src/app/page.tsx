import React from 'react';
import { Hero } from '@/components/home/Hero';
import { KnowledgeNetwork } from '@/components/home/KnowledgeNetwork';
import { SelectedProjects } from '@/components/home/SelectedProjects';
import { CompanyIntelPreview } from '@/components/home/CompanyIntelPreview';
import { ResearchPreview } from '@/components/home/ResearchPreview';
import { AboutContactSection } from '@/components/home/AboutContactSection';

export default function HomePage() {
  return (
    <>
      <div id="top" tabIndex={-1} className="sr-only">
        Top of page
      </div>

      {/* 01. Cinematic Hero with 3D Semiconductor Wafer & Orbiting Nodes */}
      <Hero />

      {/* 02. Interdisciplinary Knowledge Network (10-Field Convergence Graph) */}
      <KnowledgeNetwork />

      {/* 03. Selected Projects & Systems (Curated Empirical Builds) */}
      <SelectedProjects />

      {/* 04. Corporate Intelligence (ASML · NVIDIA · TSMC Moat Teardowns) */}
      <CompanyIntelPreview />

      {/* 05. Selected Research & Value Chains (4-Tier Structural Value-Chain Map) */}
      <ResearchPreview />

      {/* 06. Personal Introduction & Subpage Navigation Hub & Direct Contact */}
      <AboutContactSection />
    </>
  );
}
