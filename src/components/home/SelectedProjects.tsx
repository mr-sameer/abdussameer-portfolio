'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ALL_PROJECTS } from '@/lib/data/projects';
import { ProjectCaseStudy } from '@/lib/types/project';

export const SelectedProjects: React.FC = () => {
  // Use all 4 curated projects from Stage 1 data
  const projects: ProjectCaseStudy[] = ALL_PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-paper-border bg-paper">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              03 / Selected Projects &amp; Systems
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Building to understand.
              <br />
              <em className="text-vermilion not-italic font-semibold">Testing at the edges.</em>
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-md">
            I build systems to test theoretical hypotheses against empirical data. 
            From supply-chain dependency graphs to financial sandboxes and regulatory NLP diffing tools.
          </p>
        </div>

        {/* 4-Project Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const isFirstOrSecond = idx < 2;

            return (
              <article
                key={project.id}
                className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm border transition-all duration-300 group hover:-translate-y-1 ${
                  isFirstOrSecond
                    ? 'bg-paper-card border-paper-border hover:border-ink/40 shadow-sm'
                    : 'bg-paper-card/70 border-paper-border hover:border-ink/40 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-4 pb-6 border-b border-paper-border mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-vermilion tracking-tighter">
                        {project.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                        {project.category}
                      </span>
                    </div>

                    <Badge variant={project.status === 'Active Development' ? 'vermilion' : 'neutral'}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-serif text-2xl sm:text-[28px] text-ink font-semibold leading-tight tracking-tight mb-4 group-hover:text-vermilion transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Headline & Description */}
                  <p className="font-sans text-base sm:text-lg text-ink font-medium leading-snug mb-3">
                    {project.headline}
                  </p>
                  
                  <p className="font-sans text-sm text-ink-secondary leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 bg-paper rounded-sm border border-paper-border text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-6 border-t border-paper-border flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink group-hover:text-vermilion transition-colors"
                  >
                    <span>Explore project case study</span>
                    <ArrowUpRight className="w-4 h-4 text-vermilion transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-ink transition-colors p-1"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Outbound Hub */}
        <div className="mt-14 p-6 bg-paper-card border border-paper-border rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-vermilion flex-shrink-0" />
            <p className="font-sans text-sm text-ink-secondary">
              All engineering builds are open-source and anchored to verifiable primary data and SEC regulatory filings.
            </p>
          </div>
          <a
            href="https://github.com/mr-sameer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-bold text-ink hover:text-vermilion transition-colors flex-shrink-0"
          >
            <span>Inspect GitHub repositories</span>
            <ArrowUpRight className="w-4 h-4 text-vermilion" />
          </a>
        </div>
      </Container>
    </section>
  );
};
