'use client';

import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Binary, 
  Coins, 
  BrainCircuit, 
  Briefcase, 
  Landmark, 
  Layers,
  Compass,
  History,
  Users,
  Crosshair,
  Sparkles,
  ArrowUpRight,
  X
} from 'lucide-react';

export interface ConstellationNode {
  id: string;
  name: string;
  shortName: string;
  category: 'computing' | 'quantitative' | 'economic' | 'behavioural';
  x: number;
  y: number;
  radius: number;
  isCore?: boolean;
  color: string;
  tagline: string;
  thesis: string;
  mechanism: string;
  caseStudy: string;
  takeaway: string;
  relatedLinkText: string;
  relatedLinkHref: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ConstellationEdge {
  id: string;
  source: string;
  target: string;
  label: string;
  relation: string;
}

export const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'cs',
    name: 'Computer Science',
    shortName: 'CompSci',
    category: 'computing',
    x: 410,
    y: 220,
    radius: 36,
    isCore: true,
    color: '#4A9EFF',
    tagline: 'Distributed architectures, memory wall constraints, and computational complexity',
    thesis: 'Hardware physics and distributed systems define the real boundaries of computing.',
    mechanism: 'Algorithmic scaling laws are physically bounded by memory bandwidth, packaging interconnects, and cluster network topologies.',
    caseStudy: 'LLM training clusters are distributed systems challenges (NVLink/InfiniBand topologies), not pure mathematical algorithms.',
    takeaway: 'Evaluate system performance at the physical cluster and compiler layer, not through abstract high-level benchmarks.',
    relatedLinkText: 'Inspect NVIDIA architecture intelligence',
    relatedLinkHref: '/companies/nvidia',
    icon: Cpu,
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    shortName: 'AI Systems',
    category: 'computing',
    x: 560,
    y: 290,
    radius: 34,
    isCore: true,
    color: '#FF5D37',
    tagline: 'Model architectures, empirical scaling laws, and training throughput',
    thesis: 'Statistical machine intelligence converges where compute density meets efficient parameter scaling.',
    mechanism: 'Transformer attention mechanisms scale quadratically with context length unless hardware-accelerated via fused kernels and tensor parallelism.',
    caseStudy: 'Modern frontier models demand co-design between model weights, memory bandwidth (HBM3e), and distributed gradient synchronization.',
    takeaway: 'AI breakthroughs are governed by the economics of hardware floating-point operations per dollar.',
    relatedLinkText: 'Read value-chain research dossier',
    relatedLinkHref: '/research/semiconductor-value-chains',
    icon: Binary,
  },
  {
    id: 'semi',
    name: 'Semiconductors & Physics',
    shortName: 'Silicon',
    category: 'computing',
    x: 350,
    y: 360,
    radius: 36,
    isCore: true,
    color: '#5AE4AA',
    tagline: 'Photolithography optics, nanometer process nodes, and 2.5D/3D packaging',
    thesis: 'Translating mathematical principles into nanometer manufacturing realities.',
    mechanism: 'Extreme Ultraviolet (EUV) light at 13.5nm wavelength steered by picometer-polished optics dictates global leading-edge logic limits.',
    caseStudy: 'ASML’s High-NA EUV scanners and TSMC’s CoWoS silicon interposers serve as the sovereign choke points for all global AI computing.',
    takeaway: 'Software abstractions crash against physical engineering limits. True economic moats exist where mathematics meets atomic precision.',
    relatedLinkText: 'Read ASML monopoly analysis',
    relatedLinkHref: '/companies/asml',
    icon: Layers,
  },
  {
    id: 'math',
    name: 'Applied Mathematics',
    shortName: 'Math',
    category: 'quantitative',
    x: 240,
    y: 160,
    radius: 30,
    color: '#D9D5CD',
    tagline: 'Numerical optimization, information theory, and discrete geometry',
    thesis: 'Mathematical rigor provides the formal language to deconstruct complexity.',
    mechanism: 'Fourier optics, probabilistic distributions, and linear algebra govern both quantum-level silicon etching and neural network loss functions.',
    caseStudy: 'Real-time anamorphic magnification adjustments in High-NA EUV lithography require millisecond mathematical computations.',
    takeaway: 'First-principles proofs expose structural flaws in market consensus and software abstraction layers.',
    relatedLinkText: 'Explore TSMC foundry intelligence',
    relatedLinkHref: '/companies/tsmc',
    icon: Compass,
  },
  {
    id: 'macro',
    name: 'Macroeconomics',
    shortName: 'Macro',
    category: 'economic',
    x: 670,
    y: 170,
    radius: 32,
    color: '#FFB042',
    tagline: 'Capital allocation cycles, infrastructure buildouts, and supply shocks',
    thesis: 'Capital cycles dictate whether technological revolutions yield investor returns or surplus utility.',
    mechanism: 'Tracking the velocity of hyperscaler capital expenditure, depreciation schedules, and return on invested capital across secular investment phases.',
    caseStudy: 'Determining whether hundreds of billions in AI data center investment convert into durable software productivity margins or commoditized compute excess.',
    takeaway: 'Financial accounting obscures true economic depreciation in rapidly obsolescing hardware architectures.',
    relatedLinkText: 'Analyze capital cycles & value chains',
    relatedLinkHref: '/research/semiconductor-value-chains',
    icon: Landmark,
  },
  {
    id: 'fin',
    name: 'Corporate Finance',
    shortName: 'Finance',
    category: 'economic',
    x: 740,
    y: 330,
    radius: 32,
    color: '#FFB042',
    tagline: 'Valuation duration, cash-flow conversion, and ROIC versus WACC',
    thesis: 'Durable value is created only when return on capital exceeds the cost of capital.',
    mechanism: 'Auditing audited balance sheets, free cash flow conversion rates, and stock-based compensation dilution behind high-growth narratives.',
    caseStudy: 'Enterprise software platforms often mask structural hosting COGS inflation and customer acquisition payback decay behind non-GAAP adjustments.',
    takeaway: 'Look past revenue multiples; cash flow duration and reinvestment efficiency dictate true enterprise value.',
    relatedLinkText: 'Explore financial sandbox project',
    relatedLinkHref: '/projects/equity-sandbox',
    icon: Coins,
  },
  {
    id: 'strat',
    name: 'Business Strategy',
    shortName: 'Strategy',
    category: 'economic',
    x: 520,
    y: 470,
    radius: 32,
    color: '#FF7A59',
    tagline: 'Switching costs, distribution leverage, and structural competitive moats',
    thesis: 'Superior technical architecture does not survive without defensible distribution and lock-in.',
    mechanism: 'Deconstructing value-chain power: evaluating customer replacement friction, proprietary developer APIs, and supplier concentration leverage.',
    caseStudy: 'NVIDIA’s primary moat is the CUDA developer library and NVLink cluster fabric, making competing bare-metal silicon economically unviable.',
    takeaway: 'Pricing power is determined by the financial and operational cost a customer incurs when attempting to defect.',
    relatedLinkText: 'View NVIDIA CUDA moat audit',
    relatedLinkHref: '/companies/nvidia',
    icon: Briefcase,
  },
  {
    id: 'psych',
    name: 'Cognitive Psychology',
    shortName: 'Psychology',
    category: 'behavioural',
    x: 760,
    y: 480,
    radius: 28,
    color: '#E066FF',
    tagline: 'Heuristics, risk asymmetry, and decision-making under uncertainty',
    thesis: 'Incentive structures and cognitive biases dictate how capital is actually deployed.',
    mechanism: 'Decision-makers operate under institutional constraints, loss aversion, and reflexivity—where market perceptions alter underlying fundamentals.',
    caseStudy: 'Hyperscaler CAPEX races: corporate executives risk greater career penalty by under-investing in AI infrastructure than by over-allocating capital.',
    takeaway: 'Understanding real-world economic outcomes requires auditing human psychology, not idealized rational models.',
    relatedLinkText: 'Read personal intellectual profile',
    relatedLinkHref: '/about',
    icon: BrainCircuit,
  },
  {
    id: 'hist',
    name: 'Economic History',
    shortName: 'History',
    category: 'behavioural',
    x: 160,
    y: 280,
    radius: 28,
    color: '#D9D5CD',
    tagline: 'Long-wave technological revolutions and infrastructure absorption',
    thesis: 'Secular technology revolutions follow recurring patterns of buildout, speculation, and institutional absorption.',
    mechanism: 'Studying prior General Purpose Technologies (railroads, telegraphs, electrification, internet) to identify the transition from infrastructure to utility.',
    caseStudy: '1840s railroad speculation bankruptcies established the permanent logistics foundation for a century of industrial growth.',
    takeaway: 'Infrastructure builders frequently overbuild and suffer, while the second-wave application layers capture enduring long-term value.',
    relatedLinkText: 'Explore research publications',
    relatedLinkHref: '/research',
    icon: History,
  },
  {
    id: 'behav',
    name: 'Human Behaviour',
    shortName: 'Behaviour',
    category: 'behavioural',
    x: 230,
    y: 450,
    radius: 28,
    color: '#E066FF',
    tagline: 'Organizational incentives, reflexivity, and systemic culture',
    thesis: 'Systems are human constructs; culture and feedback loops determine resilience.',
    mechanism: 'Incentive gaming, organizational inertia, and institutional reflexivity dictate whether engineering breakthroughs scale commercially.',
    caseStudy: 'TSMC’s operational discipline and non-compete culture in Hsinchu cannot be easily replicated by capital expenditure alone.',
    takeaway: 'Technology operates inside sociological contexts. Engineering triumphs fail when disconnected from human incentives.',
    relatedLinkText: 'Discover my journey & philosophy',
    relatedLinkHref: '/about',
    icon: Users,
  },
];

export const CONSTELLATION_EDGES: ConstellationEdge[] = [
  { id: 'cs-ai', source: 'cs', target: 'ai', label: 'Compute Architecture', relation: 'Memory wall limits & cluster networking topology' },
  { id: 'cs-semi', source: 'cs', target: 'semi', label: 'Hardware Acceleration', relation: 'Silicon packaging & micro-architecture limits' },
  { id: 'math-cs', source: 'math', target: 'cs', label: 'Computational Complexity', relation: 'Discrete optimization & algorithms' },
  { id: 'math-semi', source: 'math', target: 'semi', label: 'Optical Physics', relation: 'EUV wave equations & picometer mirror precision' },
  { id: 'semi-strat', source: 'semi', target: 'strat', label: 'Manufacturing Moats', relation: 'Yield learning curves & capital scale barriers' },
  { id: 'macro-fin', source: 'macro', target: 'fin', label: 'Capital Cycles', relation: 'Depreciation velocity & ROIC vs WACC' },
  { id: 'macro-hist', source: 'macro', target: 'hist', label: 'Technology Waves', relation: 'General Purpose Technology installation phases' },
  { id: 'fin-strat', source: 'fin', target: 'strat', label: 'Economic Rent', relation: 'Pricing power, switching costs & gross margin durability' },
  { id: 'strat-ai', source: 'strat', target: 'ai', label: 'Ecosystem Lock-in', relation: 'CUDA proprietary developer platform lock-in' },
  { id: 'psych-behav', source: 'psych', target: 'behav', label: 'Incentive Theory', relation: 'Loss aversion, heuristic decision-making & culture' },
  { id: 'fin-behav', source: 'fin', target: 'behav', label: 'Market Reflexivity', relation: 'Institutional FOMO & CAPEX overbuild cycles' },
  { id: 'semi-ai', source: 'semi', target: 'ai', label: 'Silicon Throughput', relation: 'CoWoS substrate capacity & HBM memory bandwidth' },
  { id: 'hist-behav', source: 'hist', target: 'behav', label: 'Institutional Cycles', relation: 'Historical repetition in organizational behavior' },
];

interface KnowledgeGraphCanvasProps {
  activeNodeId: string | null;
  onSelectNode: (nodeId: string | null) => void;
}

export const KnowledgeGraphCanvas: React.FC<KnowledgeGraphCanvasProps> = ({
  activeNodeId,
  onSelectNode,
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const gradientId = useId();

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const activeOrHoveredId = hoveredNodeId || activeNodeId;

  // Determine connected nodes and edges for active/hovered node
  const connectedNodeIds = new Set<string>();
  const connectedEdgeIds = new Set<string>();

  if (activeOrHoveredId) {
    connectedNodeIds.add(activeOrHoveredId);
    CONSTELLATION_EDGES.forEach((edge) => {
      if (edge.source === activeOrHoveredId) {
        connectedNodeIds.add(edge.target);
        connectedEdgeIds.add(edge.id);
      } else if (edge.target === activeOrHoveredId) {
        connectedNodeIds.add(edge.source);
        connectedEdgeIds.add(edge.id);
      }
    });
  }

  const getNodeById = (id: string) => CONSTELLATION_NODES.find((n) => n.id === id);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[620px] select-none bg-[#050811] rounded-sm border border-paper/15 overflow-hidden shadow-2xl flex items-center justify-center">
      {/* Background Reticle Grid & Optical Coordinate Markings */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Center Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,93,55,0.18) 0%, rgba(74,158,255,0.08) 45%, transparent 70%)',
        }}
      />

      {/* Corner Technical Optical Markings */}
      <div className="absolute top-3 left-3 pointer-events-none font-mono text-[9px] text-paper/40 flex items-center gap-1.5">
        <Crosshair className="w-3 h-3 text-vermilion" />
        <span>RESONANCE_MATRIX [10_NODES · 13_EDGES]</span>
      </div>

      <div className="absolute top-3 right-3 pointer-events-none font-mono text-[9px] text-paper/40 hidden sm:flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
        <span>DYNAMIC INTERDISCIPLINARY COUPLING</span>
      </div>

      {/* SVG Interactive Constellation Engine */}
      <svg
        viewBox="0 0 900 600"
        className="w-full h-full relative z-10"
        aria-label="Interactive Spatial Knowledge Constellation"
        role="group"
        onClick={() => {
          // Clicking empty canvas deselects
          if (activeNodeId) onSelectNode(null);
        }}
      >
        <defs>
          <filter id={`${gradientId}-glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={`${gradientId}-pulse`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. RELATIONAL EDGES (CONNECTING LASER PATHS) */}
        <g className="edges" aria-hidden="true">
          {CONSTELLATION_EDGES.map((edge) => {
            const source = getNodeById(edge.source);
            const target = getNodeById(edge.target);
            if (!source || !target) return null;

            const isConnected = connectedEdgeIds.has(edge.id);
            const isDimmed = activeOrHoveredId && !isConnected;

            // Compute subtle curve control point
            const midX = (source.x + target.x) / 2;
            const midY = (source.y + target.y) / 2;
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            // Orthogonal offset for subtle organic curvature
            const offsetX = -dy * 0.08;
            const offsetY = dx * 0.08;
            const pathData = `M ${source.x} ${source.y} Q ${midX + offsetX} ${midY + offsetY} ${target.x} ${target.y}`;

            return (
              <g key={edge.id} className="transition-opacity duration-300">
                {/* Background Guide Line */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={isConnected ? '#FF5D37' : '#ffffff'}
                  strokeWidth={isConnected ? 2.5 : 1}
                  strokeOpacity={isConnected ? 0.9 : isDimmed ? 0.06 : 0.18}
                  strokeDasharray={isConnected ? 'none' : '3 5'}
                  filter={isConnected ? `url(#${gradientId}-glow)` : undefined}
                />

                {/* Animated Traveling Energy Pulse on Connected Edges */}
                {isConnected && !prefersReducedMotion && (
                  <path
                    d={pathData}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={3}
                    strokeDasharray="12 48"
                    strokeLinecap="round"
                    className="animate-laser-pulse"
                    style={{
                      animation: 'dash 1.8s linear infinite',
                    }}
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* 2. CONSTELLATION NODES */}
        <g className="nodes">
          {CONSTELLATION_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            const isHovered = hoveredNodeId === node.id;
            const isHighlighted = isSelected || isHovered || connectedNodeIds.has(node.id);
            const isDimmed = activeOrHoveredId && !isHighlighted;
            const Icon = node.icon;

            return (
              <g
                key={node.id}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`${node.name} (${node.category}): ${node.tagline}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(isSelected ? null : node.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectNode(isSelected ? null : node.id);
                  } else if (e.key === 'Escape' && isSelected) {
                    onSelectNode(null);
                  }
                }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="cursor-pointer outline-none group focus-visible:outline-none"
                style={{
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  opacity: isDimmed ? 0.22 : 1,
                }}
              >
                {/* Outer Breathing Orbit Ring for Selected or Core Nodes */}
                {(isSelected || isHovered || node.isCore) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 12}
                    fill="none"
                    stroke={isSelected ? '#FF5D37' : node.color}
                    strokeWidth={isSelected ? 1.5 : 1}
                    strokeDasharray="4 6"
                    strokeOpacity={isSelected ? 0.9 : 0.4}
                    className={!prefersReducedMotion ? 'animate-spin-slow' : undefined}
                    style={{
                      transformOrigin: `${node.x}px ${node.y}px`,
                      animationDuration: node.isCore ? '24s' : '36s',
                    }}
                  />
                )}

                {/* Outer Glow Halo on Selection */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 8}
                    fill="#FF5D37"
                    fillOpacity={0.2}
                    filter={`url(#${gradientId}-pulse)`}
                  />
                )}

                {/* Node Solid Disk Substrate */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius}
                  fill={isSelected ? '#140806' : '#0B111E'}
                  stroke={isSelected ? '#FF5D37' : isHighlighted ? node.color : '#334155'}
                  strokeWidth={isSelected ? 2.5 : isHighlighted ? 2 : 1.2}
                  filter={isHighlighted ? `url(#${gradientId}-glow)` : undefined}
                  className="transition-colors duration-200"
                />

                {/* Central Icon */}
                <foreignObject
                  x={node.x - 12}
                  y={node.y - 18}
                  width="24"
                  height="24"
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center text-paper">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-vermilion' : isHighlighted ? 'text-paper' : 'text-paper/60'}`} />
                  </div>
                </foreignObject>

                {/* Monospace Node Label */}
                <text
                  x={node.x}
                  y={node.y + 14}
                  textAnchor="middle"
                  fill={isSelected ? '#FF5D37' : isHighlighted ? '#ffffff' : '#94A3B8'}
                  fontSize={node.isCore ? '11' : '10'}
                  fontWeight={isSelected || node.isCore ? '700' : '600'}
                  fontFamily="monospace"
                  letterSpacing="0.04em"
                  className="pointer-events-none select-none transition-colors duration-200"
                >
                  {node.shortName}
                </text>

                {/* Core Node Pip Indicator */}
                {node.isCore && (
                  <circle
                    cx={node.x}
                    cy={node.y - node.radius + 2}
                    r="2.5"
                    fill="#FF5D37"
                    className="pointer-events-none"
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Embedded CSS for traveling dash pulse */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -60;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
