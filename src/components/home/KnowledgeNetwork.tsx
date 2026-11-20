'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { 
  KnowledgeGraphCanvas, 
  CONSTELLATION_NODES, 
  CONSTELLATION_EDGES,
  ConstellationNode 
} from '@/components/home/KnowledgeGraphCanvas';
import { 
  Sparkles, 
  ArrowUpRight, 
  X, 
  Activity, 
  Compass, 
  ChevronRight,
  Share2
} from 'lucide-react';

export const KnowledgeNetwork: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>('semi');

  const activeNode: ConstellationNode | undefined = activeNodeId 
    ? CONSTELLATION_NODES.find((n) => n.id === activeNodeId) 
    : undefined;

  // Find all edges connected to the active node
  const activeConnectedEdges = activeNodeId
    ? CONSTELLATION_EDGES.filter((e) => e.source === activeNodeId || e.target === activeNodeId)
    : [];

  return (
    <section id="disciplines" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
            02 / Interdisciplinary Synthesis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Complex problems rarely belong to a single discipline.
          </h2>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ink-secondary leading-relaxed">
            Real breakthrough insights emerge at the intersections. By connecting computing architectures, 
            mathematical rigor, economic theory, and human behavioural psychology, I deconstruct systems 
            that cannot be understood through any single lens.
          </p>
        </div>

        {/* Constellation Architecture Module */}
        <div className="space-y-6">
          {/* Constellation Controls & Telemetry Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-paper-card border border-paper-border rounded-sm">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-vermilion animate-pulse shadow-[0_0_6px_#ff5d37]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider text-ink font-bold">
                Spatial Knowledge Constellation
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-ink-muted">
                (Click any node to explore its systemic connections)
              </span>
            </div>

            <div className="flex items-center gap-2">
              {activeNode && (
                <button
                  type="button"
                  onClick={() => setActiveNodeId(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper border border-paper-border rounded-sm text-xs font-mono text-ink hover:text-vermilion hover:border-vermilion transition-colors"
                  aria-label="Deselect active node and return to constellation overview"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Deselect node</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Constellation Canvas */}
          <KnowledgeGraphCanvas
            activeNodeId={activeNodeId}
            onSelectNode={(nodeId) => setActiveNodeId(nodeId)}
          />

          {/* Quick Domain Selector Bar */}
          <div className="p-4 bg-paper-card border border-paper-border rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Select domain node:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {CONSTELLATION_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNodeId(isSelected ? null : node.id)}
                    className={`px-2.5 py-1 rounded-sm text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-ink text-paper border-ink shadow-sm'
                        : 'bg-paper text-ink-secondary border-paper-border hover:border-ink/30 hover:text-ink'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {node.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contextual Synthesis Information Panel */}
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-paper-card border border-paper-border rounded-sm shadow-md"
              >
                {/* Panel Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-paper-border mb-6">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-sm flex items-center justify-center text-paper shadow-sm"
                      style={{ backgroundColor: activeNode.color }}
                    >
                      <activeNode.icon className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-vermilion font-bold">
                          {activeNode.category.toUpperCase()} ARCHITECTURE
                        </span>
                        {activeNode.isCore && (
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm bg-vermilion/15 text-vermilion font-bold border border-vermilion/30">
                            Foundational Core
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                        {activeNode.name}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveNodeId(null)}
                    className="p-2 text-ink-muted hover:text-ink transition-colors rounded-sm border border-paper-border hover:border-ink/30"
                    aria-label="Close active domain dossier"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Central Thesis */}
                <h4 className="font-serif text-xl sm:text-2xl text-ink font-semibold leading-snug mb-6">
                  “{activeNode.thesis}”
                </h4>

                {/* Analysis Breakdown Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  {/* Left Column: First-Principles Mechanism */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-vermilion" />
                        <span>The Underlying Mechanism</span>
                      </h5>
                      <p className="font-sans text-base text-ink-secondary leading-relaxed">
                        {activeNode.mechanism}
                      </p>
                    </div>

                    <div className="p-5 bg-paper rounded-sm border border-paper-border">
                      <h5 className="font-mono text-xs uppercase tracking-wider text-vermilion font-bold mb-2">
                        Applied Empirical Case Study
                      </h5>
                      <p className="font-sans text-sm text-ink leading-relaxed">
                        {activeNode.caseStudy}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-1.5">
                        Core Analytical Takeaway
                      </h5>
                      <p className="font-sans text-sm text-ink-secondary font-medium leading-relaxed">
                        {activeNode.takeaway}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Active Relational Convergence Edges */}
                  <div className="lg:col-span-5 p-6 bg-paper rounded-sm border border-paper-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 pb-3 border-b border-paper-border mb-4">
                        <Share2 className="w-3.5 h-3.5 text-vermilion" />
                        <span className="font-mono text-xs uppercase tracking-wider text-ink font-bold">
                          Active Relational Couplings ({activeConnectedEdges.length})
                        </span>
                      </div>

                      <div className="space-y-3">
                        {activeConnectedEdges.map((edge) => {
                          const neighborId = edge.source === activeNode.id ? edge.target : edge.source;
                          const neighborNode = CONSTELLATION_NODES.find((n) => n.id === neighborId);
                          if (!neighborNode) return null;

                          return (
                            <button
                              key={edge.id}
                              type="button"
                              onClick={() => setActiveNodeId(neighborNode.id)}
                              className="w-full text-left p-3 rounded-sm border border-paper-border hover:border-vermilion hover:bg-paper-card transition-all group flex items-start justify-between gap-3"
                            >
                              <div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-vermilion font-bold block mb-0.5">
                                  {edge.label}
                                </span>
                                <h6 className="font-serif text-sm font-semibold text-ink group-hover:text-vermilion transition-colors">
                                  {neighborNode.name}
                                </h6>
                                <p className="font-sans text-xs text-ink-secondary mt-1">
                                  {edge.relation}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-ink-muted group-hover:text-vermilion flex-shrink-0 transition-transform group-hover:translate-x-0.5 mt-1" />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Direct Cross-Link to Dedicated Research / Company Page */}
                    <div className="pt-6 mt-6 border-t border-paper-border">
                      <Link
                        href={activeNode.relatedLinkHref}
                        className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors group"
                      >
                        <span>{activeNode.relatedLinkText}</span>
                        <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="p-8 bg-paper-card border border-paper-border rounded-sm text-center">
                <Compass className="w-6 h-6 text-vermilion mx-auto mb-3 opacity-80" />
                <h4 className="font-serif text-xl font-semibold text-ink mb-1">
                  Constellation in Overview Mode
                </h4>
                <p className="font-sans text-sm text-ink-secondary max-w-md mx-auto">
                  Click any of the 10 domain nodes in the constellation diagram above or use the selector bar to inspect how computing architecture, macroeconomic capital cycles, and human behaviour connect.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
