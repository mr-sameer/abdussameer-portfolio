import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EDUCATION_ITEMS, PROFESSIONAL_EXPERIENCES, INTERDISCIPLINARY_DIMENSIONS, SYNTHESIS_EXAMPLES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Abdus Sameer | Interdisciplinary Thinker, Researcher & Builder',
  description:
    'The complete journey, education, commercial experience, intellectual philosophy, and future ambitions of Abdus Sameer.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Abdus Sameer — Connecting Ideas. Understanding Systems. Solving Problems.',
    description:
      'Exploring how computer science, economics, finance, business strategy, and human psychology converge to solve complex challenges.',
    url: 'https://abdussameer.com/about',
    type: 'profile',
    images: [
      {
        url: '/og/og-about.svg',
        width: 1200,
        height: 630,
        alt: 'About Abdus Sameer — Personal Narrative & Intellectual Journey',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <article className="py-16 sm:py-24">
      {/* Editorial Masthead for About Page */}
      <Container className="max-w-4xl mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-ink hover:text-vermilion transition-colors">
            ← Return to Home
          </Link>
          <span className="text-paper-border">/</span>
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
            Personal Narrative &amp; Intellectual Journey
          </span>
        </div>

        <h1 className="font-serif text-[clamp(38px,5.5vw,72px)] leading-[1.08] tracking-[-1.5px] text-ink mb-8">
          Connecting ideas.
          <br />
          Understanding systems.
          <br />
          <em className="text-vermilion not-italic font-semibold">Working to solve meaningful problems.</em>
        </h1>

        <p className="font-sans text-xl sm:text-2xl text-ink-secondary leading-relaxed font-light border-l-2 border-vermilion pl-6 mb-12">
          I am curious about how the world works and how different disciplines connect. 
          I don’t believe the most pressing technological and economic questions can be answered from inside a single silo.
        </p>
      </Container>

      {/* Chapter 1: The Core Philosophy */}
      <section className="py-12 border-t border-paper-border">
        <Container className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
            Chapter 01
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold mb-6">
            The Philosophy of Thinking Across Boundaries
          </h2>
          <div className="prose prose-lg text-ink-secondary leading-relaxed space-y-6 max-w-none">
            <p>
              From computer science, artificial intelligence, and semiconductor physics to economics, finance, business strategy, psychology, philosophy, and human behaviour — I explore ideas across fields to understand complex systems and discover new ways of thinking about problems.
            </p>
            <p>
              Too often, technical engineering analysis is blind to commercial realities, financial incentives, and capital cycle dynamics. Conversely, financial commentary frequently treats breakthrough hardware and software architectures as superficial buzzwords without grasping the physical laws or computational trade-offs that govern them.
            </p>
            <p>
              My goal is to stand at the intersection. I use this platform to document my journey, investigate companies and industries, test entrepreneurial experiments, conduct independent research, and build tools that help me understand complex systems better.
            </p>
          </div>
        </Container>
      </section>

      {/* Chapter 2: The Academic Journey */}
      <section className="py-16 bg-paper-card border-y border-paper-border">
        <Container className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
            Chapter 02
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold mb-6">
            Academic Convergence: Computing &amp; Economics
          </h2>
          <p className="font-sans text-lg text-ink-secondary leading-relaxed mb-10">
            My formal education is intentionally interdisciplinary, pairing the computational foundations of computer science with the systemic rigor of economic theory.
          </p>

          <div className="space-y-6 mb-8">
            {EDUCATION_ITEMS.map((item) => (
              <div key={item.degree} className="p-6 bg-paper rounded-sm border border-paper-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold">
                    {item.degree}
                  </h3>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-sm w-fit ${
                      item.status === 'Completed'
                        ? 'bg-ink text-paper font-semibold'
                        : 'bg-vermilion/15 text-vermilion font-bold'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="font-mono text-xs text-ink-muted uppercase mb-2">
                  {item.institution}
                </div>
                <p className="font-sans text-base text-ink-secondary leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-paper-muted border border-paper-border rounded-sm">
            <h4 className="font-serif text-lg text-ink font-semibold mb-2">
              Why pair Computer Science with Economics?
            </h4>
            <p className="font-sans text-sm text-ink-secondary leading-relaxed">
              Computer science teaches how systems are engineered, constrained by memory, compute, and latency. Economics teaches how systems allocate scarce resources, respond to incentives, and experience systemic shocks. Combining both provides an asymmetric framework for evaluating technology companies from the transistor level to the global capital cycle.
            </p>
          </div>
        </Container>
      </section>

      {/* Chapter 3: Professional Journey & Commercial Reality */}
      <section className="py-16 border-b border-paper-border">
        <Container className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
            Chapter 03
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold mb-6">
            Commercial Experience: The Frontline of Business
          </h2>
          <div className="prose prose-lg text-ink-secondary leading-relaxed space-y-6 max-w-none mb-10">
            <p>
              Academic knowledge means little if you do not understand how businesses survive and grow in the real world. My professional background spans sales, business development, and relationship management.
            </p>
            <p>
              Frontline commercial work teaches what financial reports can never capture: the friction of convincing a skeptical enterprise buyer, the psychology of purchasing decisions, how contracts are structured, and why customer retention and trust are the ultimate moat of any commercial enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFESSIONAL_EXPERIENCES.map((exp) => (
              <div key={exp.area} className="p-6 bg-paper-card border border-paper-border rounded-sm">
                <h3 className="font-serif text-xl text-ink font-semibold mb-3">
                  {exp.area}
                </h3>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Chapter 4: The 4 Intellectual Dimensions */}
      <section className="py-16 bg-paper-card border-b border-paper-border">
        <Container className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
            Chapter 04
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold mb-6">
            How I Connect Intellectual Dimensions
          </h2>
          <p className="font-sans text-lg text-ink-secondary leading-relaxed mb-10">
            Rather than accumulating trivia, I view knowledge through interconnected systems. Here is how I organize my intellectual inquiry:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {INTERDISCIPLINARY_DIMENSIONS.map((dim) => (
              <div key={dim.number} className="p-6 bg-paper border border-paper-border rounded-sm">
                <span className="font-mono text-xs font-bold text-vermilion block mb-2">
                  Dimension {dim.number}
                </span>
                <h3 className="font-serif text-2xl text-ink font-semibold mb-2">
                  {dim.title}
                </h3>
                <p className="font-sans text-xs text-ink-muted mb-4">
                  {dim.tagline}
                </p>
                <ul className="space-y-1.5 border-t border-paper-border pt-4">
                  {dim.topics.map((t) => (
                    <li key={t} className="font-sans text-xs text-ink-secondary flex items-start gap-2">
                      <span className="text-vermilion font-bold">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-8 bg-ink text-paper rounded-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-3">
              Syntheses in Practice
            </span>
            <h3 className="font-serif text-2xl text-paper mb-6">
              When disciplines collide, real signal emerges.
            </h3>
            <div className="space-y-4">
              {SYNTHESIS_EXAMPLES.map((synth) => (
                <div key={synth.pairing} className="border-t border-ink-border/60 pt-4">
                  <span className="font-mono text-xs uppercase text-vermilion font-bold block mb-1">
                    {synth.pairing}
                  </span>
                  <p className="font-sans text-sm text-paper/80 leading-relaxed">
                    {synth.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Chapter 5: Current Explorations & Future Ambitions */}
      <section className="py-16 border-b border-paper-border">
        <Container className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
            Chapter 05
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold mb-6">
            Current Explorations &amp; Future Ambitions
          </h2>
          <div className="prose prose-lg text-ink-secondary leading-relaxed space-y-6 max-w-none">
            <p>
              I do not want this website to merely report what I have already done. It is a working laboratory representing what I am actively working to become.
            </p>
            <p>
              Currently, I am deep in the investigation of:
            </p>
            <ul className="space-y-2 font-sans text-base text-ink">
              <li><strong>The Semiconductor Capital Cycle:</strong> Tracking High-NA EUV adoption, advanced packaging yields (CoWoS), and optical interconnects.</li>
              <li><strong>AI Infrastructure Unit Economics:</strong> Evaluating whether massive hyperscaler data center CAPEX generates commensurate software productivity.</li>
              <li><strong>Algorithmic &amp; Analytical Tooling:</strong> Constructing automated parsers and data models for SEC financial disclosures.</li>
              <li><strong>Economic History &amp; Secular Cycles:</strong> Studying the structural patterns of technological revolutions from steam and railways to compute.</li>
            </ul>
            <p>
              My long-term ambition is to build, advise, and operate at the intersection of deep technology and capital allocation — building companies, solving meaningful technical and economic problems, and publishing analysis that cuts through market noise.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/#research"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper font-sans text-sm font-bold tracking-tight rounded-sm hover:bg-ink/90 transition-colors"
            >
              <span>Explore independent research</span>
              <ArrowUpRight className="w-4 h-4 text-vermilion" />
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-paper text-ink font-sans text-sm font-bold tracking-tight rounded-sm border border-paper-border hover:bg-paper-card transition-colors"
            >
              <span>View projects &amp; experiments</span>
              <ArrowUpRight className="w-4 h-4 text-vermilion" />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
