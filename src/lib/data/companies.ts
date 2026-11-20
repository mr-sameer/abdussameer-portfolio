/**
 * AbdusSameer V4 — Initial Company Intelligence Datasets
 * Subjects: ASML, NVIDIA, TSMC
 *
 * Strict Rule: Only verified facts and primary citations are recorded.
 * All ongoing work is marked as 'Draft Analysis' or 'Research in Progress'.
 */

import { CompanyIntelligence } from '../types/company';

export const ASML_COMPANY: CompanyIntelligence = {
  identity: {
    id: 'asml',
    slug: 'asml',
    name: 'ASML Holding N.V.',
    ticker: 'ASML',
    exchange: 'NASDAQ / Euronext Amsterdam',
    sector: 'Information Technology',
    industry: 'Semiconductor Equipment',
    headquarters: 'Veldhoven, Netherlands',
    foundedYear: 1984,
    monogram: {
      letter: 'ASML',
      bg: '#ff5d37',
      text: '#0a1120',
    },
  },
  status: 'Research in Progress',
  overview:
    'ASML is the sole global manufacturer of Extreme Ultraviolet (EUV) photolithography scanners required to print leading-edge semiconductor chips below 7nm.',
  businessDescription:
    'ASML designs and produces photolithography systems used by foundries and integrated device manufacturers to pattern microcircuitry onto silicon wafers. Its product lines encompass Deep Ultraviolet (DUV) immersion tooling and high-precision EUV systems operating at 13.5nm wavelength.',
  productsAndServices: [
    {
      name: 'High-NA EUV (EXE:5000 / EXE:5200)',
      category: 'Extreme Ultraviolet Lithography',
      description: 'Next-generation 0.55 numerical aperture lithography system designed for sub-2nm process nodes.',
      isCore: true,
    },
    {
      name: 'Low-NA EUV (NXE:3600D / NXE:3800E)',
      category: 'Extreme Ultraviolet Lithography',
      description: 'Production-proven 0.33 numerical aperture lithography systems driving volume manufacturing at 5nm and 3nm nodes.',
      isCore: true,
    },
    {
      name: 'DUV Immersion (NXT:2050i / NXT:2100i)',
      category: 'Deep Ultraviolet Lithography',
      description: 'Argon Fluoride (ArFi) immersion systems used across mature and trailing-edge process nodes.',
      isCore: false,
    },
  ],
  revenueModel: {
    description: 'Capital equipment system sales combined with high-margin installed base field maintenance, software upgrades, and optical calibration services.',
    pricingStrategy: 'Monopoly pricing power governed by extreme technological complexity; EUV systems price from ~€180M (Low-NA) to >€350M (High-NA).',
  },
  industryPosition: {
    marketShareDescription: 'Near 100% global monopoly in commercial EUV lithography systems. Major competitor in immersion DUV alongside Nikon and Canon.',
    ranking: '#1 Global Lithography Provider',
  },
  competitiveLandscape: {
    peers: ['Nikon Corporation', 'Canon Inc.'],
    substitutes: ['Nanoimprint Lithography (Canon - Trailing Nodes)', 'Directed Self-Assembly (Experimental)'],
    moatSummary: 'Multi-decade optical physics monopoly protected by over 10,000 active patents, co-invested customer supply agreements, and an irreplaceable proprietary supplier network.',
    switchingCosts: 'Extreme. Re-tooling a high-volume foundry line away from ASML scanner recipes requires complete optical and chemical re-qualification costing billions.',
    intangiblesAndPatents: 'Exclusive commercial rights to Carl Zeiss SMT multi-layer mirror optics and Cymer tin-droplet laser-produced plasma (LPP) source technology.',
  },
  technologyAndIP: {
    coreTechnologies: [
      '13.5nm Extreme Ultraviolet Light Generation via CO2 Laser on Molten Tin Droplets',
      'Bragg Reflector Optics Polished to Picometer Tolerance (Carl Zeiss SMT)',
      'Dual-Stage Wafer Positioning Interferometry operating in High Vacuum',
    ],
    physicalMoatDescription: 'Generating 13.5nm EUV photons requires vaporizing 50,000 microscopic tin droplets per second with a pulsed 30kW CO2 laser, a physical process requiring decades of specialized optical engineering.',
  },
  supplyChain: {
    keySuppliers: ['Carl Zeiss SMT (Optical Mirrors)', 'Trumpf (High-Power Industrial Lasers)', 'Cymer (EUV Light Sources)'],
    keyCustomers: ['Taiwan Semiconductor Manufacturing Co. (TSMC)', 'Intel Corporation', 'Samsung Electronics'],
    singlePointOfFailureRisks: [
      'Total sole-source dependency on Carl Zeiss SMT for extreme EUV mirror polishing.',
      'Geopolitical export restrictions governing shipments of advanced DUV and EUV tooling to mainland China.',
    ],
  },
  financialPerformance: {
    auditedPeriod: 'FY 2023 / FY 2024 Form 20-F Disclosures',
    metrics: [
      { metric: 'Annual Net Sales (FY2023)', value: '€27.6B', period: 'FY2023', sourceTier: 1, sourceFiling: 'SEC Form 20-F (FY2023)' },
      { metric: 'Gross Margin', value: '51.3%', period: 'FY2023', sourceTier: 1, sourceFiling: 'SEC Form 20-F (FY2023)' },
      { metric: 'R&D Intensity', value: '14.4% of Sales', period: 'FY2023', sourceTier: 1, sourceFiling: 'SEC Form 20-F (FY2023)' },
    ],
    commentary: 'High cash flow visibility backed by substantial multi-quarter backlog, though subject to foundry capex timing volatility.',
  },
  growthDrivers: [
    'Leading-edge node transitions driven by artificial intelligence compute accelerator demand.',
    'High-NA EUV adoption at 2nm and sub-2nm nodes by Tier-1 foundries.',
    'Recurring software and upgrade revenue across an expanding installed base of operating EUV systems.',
  ],
  risksAndChallenges: [
    'Geopolitical export controls and licensing restrictions restricting sales to Chinese customers.',
    'Customer concentration: Over 70% of EUV revenue is typically concentrated across three major foundries (TSMC, Intel, Samsung).',
    'High-NA transition cost inflation: Tool costs exceeding €350M require foundries to prove economic viability over double-patterning alternatives.',
  ],
  strategicAnalysis: {
    moatDurability: 'Virtually unassailable over a 5 to 10 year horizon due to the absence of any commercially viable alternative EUV source or optical mirror supplier.',
    capitalAllocationDiscipline: 'Consistent high reinvestment in internal R&D (over €3.9B annually) paired with opportunistic share repurchases and regular dividend growth.',
    pricingPowerAssessment: 'Exceptional. Foundries must purchase ASML EUV tools to produce commercially viable sub-3nm chips; pricing is constrained only by foundry capital budgets.',
  },
  sources: [
    {
      id: 'asml-20f-2023',
      title: 'ASML Holding N.V. Annual Report on Form 20-F for the Fiscal Year Ended December 31, 2023',
      publisher: 'U.S. Securities and Exchange Commission',
      url: 'https://www.sec.gov/edgar/browse/?CIK=0000937966',
      date: '2024-02-28',
      tier: 1,
      notes: 'Audited primary financial statements and segment disclosures.',
    },
    {
      id: 'asml-high-na-spie',
      title: 'High-NA EUV lithography: system design, optical physics and imaging performance',
      author: 'ASML Systems Architecture Team',
      publisher: 'SPIE Advanced Lithography Conference Proceedings',
      date: '2023-03-01',
      tier: 2,
      notes: 'Technical documentation detailing 0.55 NA anamorphic optics and depth-of-focus constraints.',
    },
  ],
  relatedResearchSlugs: ['semiconductor-value-chains'],
  relatedIndustrySlugs: ['semiconductors'],
  seo: {
    title: 'ASML Corporate Intelligence Dossier | Abdus Sameer',
    description: 'In-depth corporate analysis of ASML’s optical physics monopoly, High-NA EUV transition economics, and structural geopolitical supply chain choke points.',
    canonicalUrl: 'https://abdussameer.com/companies/asml/',
    keywords: ['ASML', 'Photolithography', 'EUV', 'High-NA', 'Semiconductors', 'Monopoly Moats'],
  },
};

export const NVIDIA_COMPANY: CompanyIntelligence = {
  identity: {
    id: 'nvidia',
    slug: 'nvidia',
    name: 'NVIDIA Corporation',
    ticker: 'NVDA',
    exchange: 'NASDAQ',
    sector: 'Information Technology',
    industry: 'Semiconductors & AI Infrastructure',
    headquarters: 'Santa Clara, California, USA',
    foundedYear: 1993,
    monogram: {
      letter: 'N',
      bg: '#76b900',
      text: '#ffffff',
    },
  },
  status: 'Draft Analysis',
  overview:
    'NVIDIA is the dominant designer of graphics processing units (GPUs) and full-stack accelerated computing platforms powering modern artificial intelligence training and inference.',
  businessDescription:
    'NVIDIA operates as a fabless computing architecture company. Beyond designing GPU silicon (Hopper, Blackwell), NVIDIA engineers proprietary interconnect networking hardware (NVLink, Quantum InfiniBand) and controls the ubiquitous CUDA parallel computing software ecosystem.',
  productsAndServices: [
    {
      name: 'Blackwell GPU Architecture (B200 / GB200 NVL72)',
      category: 'Accelerated Compute & Systems',
      description: 'Next-generation AI supercomputing platform featuring 208-billion transistor dual-die GPUs connected via 1.8TB/s NVLink 5.',
      isCore: true,
    },
    {
      name: 'Hopper GPU Architecture (H100 / H200)',
      category: 'Accelerated Compute',
      description: 'Industry-standard transformer engine GPU platform driving hyperscaler model training clusters.',
      isCore: true,
    },
    {
      name: 'CUDA Software Ecosystem',
      category: 'Software Platform',
      description: 'Proprietary parallel programming model and software library standard across deep learning frameworks.',
      isCore: true,
    },
    {
      name: 'Mellanox Networking (Quantum-2 InfiniBand / Spectrum-X Ethernet)',
      category: 'Cluster Interconnect Fabrics',
      description: 'Ultra-low latency cluster networking hardware required to scale GPU compute across tens of thousands of nodes.',
      isCore: true,
    },
  ],
  revenueModel: {
    description: 'Direct system and board sales to cloud service providers, enterprise data centers, and original equipment manufacturers, complemented by software licensing.',
    pricingStrategy: 'Value-based full-system pricing capturing substantial economic rent from enterprise AI capital expenditures.',
  },
  industryPosition: {
    marketShareDescription: 'Estimated 80%+ share of the global data center AI acceleration silicon market.',
    ranking: '#1 Global AI Accelerator & GPU Platform',
  },
  competitiveLandscape: {
    peers: ['Advanced Micro Devices (AMD)', 'Intel Corporation', 'Broadcom (Custom Silicon / ASICs)'],
    substitutes: ['Custom Hyperscaler ASICs (Google TPU, AWS Trainium, Meta MTIA)'],
    moatSummary: 'Entrenched two-sided network moat: millions of developers trained on proprietary CUDA libraries paired with hardware-level NVLink scale-up cluster lock-in.',
    switchingCosts: 'High. Deep learning software stacks, kernel optimizations, and distributed training scripts are deeply optimized for CUDA primitives.',
  },
  technologyAndIP: {
    coreTechnologies: [
      'CUDA Parallel Computing Architecture & cuDNN Libraries',
      'NVLink 5 High-Bandwidth GPU-to-GPU Interconnect Fabric (1.8TB/s)',
      'Tensor Core Mixed-Precision Matrix Multiplication Hardware',
    ],
  },
  supplyChain: {
    keySuppliers: ['TSMC (Advanced 4NP Foundry & CoWoS-L Packaging)', 'SK Hynix / Micron / Samsung (High Bandwidth Memory - HBM3e)'],
    keyCustomers: ['Microsoft Azure', 'Amazon Web Services', 'Meta Platforms', 'Google Cloud', 'Oracle Cloud'],
    singlePointOfFailureRisks: [
      'Total dependency on TSMC for leading-edge wafer fabrication and CoWoS advanced packaging capacity.',
      'Sole-source or high-concentration dependencies on HBM memory suppliers during steep production ramps.',
    ],
  },
  financialPerformance: {
    auditedPeriod: 'FY 2024 Form 10-K Disclosures',
    metrics: [
      { metric: 'Revenue (FY2024)', value: '$60.9B', period: 'FY2024', sourceTier: 1, sourceFiling: 'SEC Form 10-K (FY2024)' },
      { metric: 'Data Center Revenue Share', value: '78% of Total', period: 'FY2024', sourceTier: 1, sourceFiling: 'SEC Form 10-K (FY2024)' },
      { metric: 'GAAP Gross Margin', value: '72.7%', period: 'FY2024', sourceTier: 1, sourceFiling: 'SEC Form 10-K (FY2024)' },
    ],
    commentary: 'Unprecedented margin expansion driven by full-stack AI data center pricing power, though tied to cyclical hyperscaler CAPEX deployment cycles.',
  },
  growthDrivers: [
    'Exponential compute intensity required by next-generation generative AI foundational models.',
    'Enterprise adoption of proprietary AI inference models and agentic workflows.',
    'Network expansion: Shift toward rack-scale interconnected systems (GB200 NVL72) expanding content per node.',
  ],
  risksAndChallenges: [
    'Hyperscaler internal silicon substitution: Cloud giants investing heavily in internal custom ASICs to reduce vendor lock-in.',
    'Geopolitical restrictions: Export controls banning shipment of high-performance compute chips to the Chinese market.',
    'Cyclical capex digestion: Potential pause or deceleration in cloud infrastructure spending if AI software monetization lags capital expenditure.',
  ],
  strategicAnalysis: {
    moatDurability: 'Extremely durable in AI model training due to CUDA ecosystem stickiness; faces moderate long-term margin pressure in inference workloads.',
    capitalAllocationDiscipline: 'Asset-light fabless model generates massive free cash conversion, deployed toward strategic packaging supply commitments and share repurchases.',
    pricingPowerAssessment: 'Exceptional during compute shortage phases; dependent on maintaining architectural performance lead over merchant competitors and custom ASICs.',
  },
  sources: [
    {
      id: 'nvda-10k-2024',
      title: 'NVIDIA Corporation Annual Report on Form 10-K for the Fiscal Year Ended January 28, 2024',
      publisher: 'U.S. Securities and Exchange Commission',
      url: 'https://www.sec.gov/edgar/browse/?CIK=0001045810',
      date: '2024-02-21',
      tier: 1,
      notes: 'Audited financial statements, business segment data, and risk disclosures.',
    },
  ],
  relatedResearchSlugs: ['semiconductor-value-chains'],
  relatedIndustrySlugs: ['semiconductors', 'artificial-intelligence'],
  seo: {
    title: 'NVIDIA Corporate Intelligence Dossier | Abdus Sameer',
    description: 'Strategic analysis of NVIDIA’s accelerated computing moat, CUDA developer ecosystem lock-in, NVLink cluster networking, and hyperscaler CAPEX sensitivity.',
    canonicalUrl: 'https://abdussameer.com/companies/nvidia/',
    keywords: ['NVIDIA', 'GPUs', 'CUDA', 'AI Infrastructure', 'Blackwell', 'Data Center Capex'],
  },
};

export const TSMC_COMPANY: CompanyIntelligence = {
  identity: {
    id: 'tsmc',
    slug: 'tsmc',
    name: 'Taiwan Semiconductor Manufacturing Co.',
    ticker: 'TSM',
    exchange: 'NYSE / Taiwan Stock Exchange',
    sector: 'Information Technology',
    industry: 'Dedicated Semiconductor Foundry',
    headquarters: 'Hsinchu Science Park, Taiwan',
    foundedYear: 1987,
    monogram: {
      letter: 'TSMC',
      bg: '#c41230',
      text: '#ffffff',
    },
  },
  status: 'Upcoming',
  overview:
    'TSMC is the world’s largest dedicated pure-play semiconductor foundry, manufacturing over 90% of the world’s leading-edge microchips.',
  businessDescription:
    'TSMC operates an asset-heavy pure-play foundry model. It manufactures integrated circuits for fabless customers (Apple, NVIDIA, AMD, Qualcomm) across proprietary process technologies spanning 3nm (N3), 5nm (N5), and advanced packaging platforms (CoWoS, InFO).',
  productsAndServices: [
    {
      name: 'N3 Process Family (N3B, N3E, N3P)',
      category: 'Leading-Edge Logic Fabrication',
      description: '3-nanometer FinFET logic manufacturing delivering industry-leading transistor density and energy efficiency.',
      isCore: true,
    },
    {
      name: 'CoWoS (Chip-on-Wafer-on-Substrate)',
      category: 'Advanced 2.5D Packaging',
      description: 'Silicon interposer multi-die packaging essential for connecting high-bandwidth memory to GPU compute logic.',
      isCore: true,
    },
  ],
  revenueModel: {
    description: 'Contract wafer fabrication priced per wafer and advanced packaging assembly fees.',
    pricingStrategy: 'Value-pricing on advanced nodes backed by peerless manufacturing yields and lack of leading-edge foundry substitutes.',
  },
  industryPosition: {
    marketShareDescription: 'Over 60% global share of total foundry revenue; estimated 90%+ share of leading-edge sub-5nm fabrication.',
    ranking: '#1 Global Dedicated Foundry',
  },
  competitiveLandscape: {
    peers: ['Samsung Electronics Foundry', 'Intel Foundry Services (IFS)', 'GlobalFoundries (Mature Nodes)'],
    moatSummary: 'Formidable scale, multi-billion-dollar R&D lead, proven operational yield learning curves, and comprehensive customer trust as a non-competing dedicated foundry.',
  },
  sources: [
    {
      id: 'tsmc-20f-2023',
      title: 'Taiwan Semiconductor Manufacturing Company Limited Form 20-F for the Fiscal Year Ended December 31, 2023',
      publisher: 'U.S. Securities and Exchange Commission',
      date: '2024-04-18',
      tier: 1,
      notes: 'Audited annual filing containing capacity, segment revenue, and geopolitical risk disclosures.',
    },
  ],
  relatedResearchSlugs: ['semiconductor-value-chains'],
  relatedIndustrySlugs: ['semiconductors'],
  seo: {
    title: 'TSMC Corporate Intelligence Dossier | Abdus Sameer',
    description: 'Empirical analysis of TSMC’s leading-edge foundry monopoly, CoWoS advanced packaging bottlenecks, and global silicon supply chain dependencies.',
    canonicalUrl: 'https://abdussameer.com/companies/tsmc/',
    keywords: ['TSMC', 'Foundry', 'Semiconductors', 'CoWoS', 'Advanced Packaging', 'N3'],
  },
};

export const ALL_COMPANIES: CompanyIntelligence[] = [
  ASML_COMPANY,
  NVIDIA_COMPANY,
  TSMC_COMPANY,
];
