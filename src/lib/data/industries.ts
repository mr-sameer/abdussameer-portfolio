/**
 * AbdusSameer V4 — Initial Industry Intelligence Datasets
 * Subjects: Semiconductors, Artificial Intelligence, Cloud Computing
 */

import { IndustryIntelligence } from '../types/industry';

export const SEMICONDUCTORS_INDUSTRY: IndustryIntelligence = {
  id: 'semiconductors',
  slug: 'semiconductors',
  name: 'Semiconductors & Advanced Packaging',
  sector: 'Hardware & Core Infrastructure',
  overview:
    'The semiconductor industry designs and manufactures the physical integrated circuits that power all digital computing. It is characterized by extreme capital intensity, deep intellectual property moats, and single-point-of-failure physical choke points.',
  valueChainStages: [
    {
      level: 'Tier 01',
      title: 'Optical Tooling & Lithography Scanners',
      description: 'Design and precision manufacturing of photolithography systems capable of steering 13.5nm extreme ultraviolet light.',
      keyParticipants: ['ASML', 'Carl Zeiss SMT', 'Cymer'],
      economicDynamic: 'Extreme capex barriers; near-total monopoly pricing power on EUV systems; single-source supplier dependencies.',
      capitalIntensity: 'Extreme',
      grossMarginProfile: '50% – 55%',
      linkedCompanySlug: 'asml',
      linkedArticleSlug: 'semiconductor-value-chains',
    },
    {
      level: 'Tier 02',
      title: 'Raw Substrates & Chemical Photoresists',
      description: 'Synthesis of ultra-pure silicon ingots, chemical photoresists, specialty deposition gases, and wafer planarization slurries.',
      keyParticipants: ['Shin-Etsu Chemical', 'SUMCO', 'Tokyo Ohka Kogyo', 'JSR Corporation'],
      economicDynamic: 'High chemical formulation switching costs; localized geographic concentration in Japan; high purity standards.',
      capitalIntensity: 'High',
      grossMarginProfile: '25% – 35%',
    },
    {
      level: 'Tier 03',
      title: 'Foundry Wafer Fabrication',
      description: 'Executing hundreds of photolithography exposure, etching, and ion implantation cycles onto 300mm silicon wafers.',
      keyParticipants: ['TSMC', 'Samsung Foundry', 'Intel Foundry Services'],
      economicDynamic: 'Multi-billion-dollar fab construction costs; operational yield learning curves; volume-driven unit economics.',
      capitalIntensity: 'Extreme',
      grossMarginProfile: '45% – 55%',
      linkedCompanySlug: 'tsmc',
    },
    {
      level: 'Tier 04',
      title: 'Advanced 2.5D / 3D Packaging & Testing',
      description: 'Stacking logic dies, high-bandwidth memory (HBM), and silicon interposers to circumvent single-monolithic-die physical limits.',
      keyParticipants: ['TSMC (CoWoS)', 'ASE Group', 'Amkor Technology', 'Intel (EMIB)'],
      economicDynamic: 'Modern accelerator scaling bottleneck; interposer yield risks; dense thermal dissipation constraints.',
      capitalIntensity: 'High',
      grossMarginProfile: '30% – 40%',
    },
    {
      level: 'Tier 05',
      title: 'Fabless Design & Micro-Architecture',
      description: 'Architecting instruction sets, computational tensor engines, and interconnect bus fabrics implemented via contract foundries.',
      keyParticipants: ['NVIDIA', 'Apple', 'AMD', 'Qualcomm', 'Broadcom'],
      economicDynamic: 'Asset-light R&D models capturing software-like gross margins; high software ecosystem lock-in (CUDA API).',
      capitalIntensity: 'Low',
      grossMarginProfile: '65% – 75%',
      linkedCompanySlug: 'nvidia',
    },
  ],
  economicDrivers: [
    'Exponential compute scaling demand driven by frontier generative AI model parameter growth.',
    'Automotive electrification and industrial edge compute requiring specialized microcontrollers.',
    'Geopolitical subsidies (U.S. CHIPS Act, European Chips Act) driving regional fab capacity redundancy.',
  ],
  chokePoints: [
    'ASML sole monopoly on commercial EUV lithography scanners.',
    'Carl Zeiss SMT exclusive supplier of high-precision EUV mirror optics.',
    'TSMC concentration in Taiwan producing over 90% of global leading-edge sub-5nm logic.',
    'High-Bandwidth Memory (HBM) packaging yield bottlenecks.',
  ],
  competitiveDynamics:
    'Power is concentrated at the two extremes of the value chain: the irreplaceable physical optical tooling monopoly (ASML) and the fabless software-interconnect ecosystems (NVIDIA). Contract manufacturers absorb the vast majority of capital expenditure and physical depreciation.',
  relatedCompanySlugs: ['asml', 'nvidia', 'tsmc'],
  relatedArticleSlugs: ['semiconductor-value-chains'],
  sources: [
    {
      id: 'semi-sia-factbook-2023',
      title: 'Semiconductor Industry Association (SIA) State of the Industry Report',
      publisher: 'Semiconductor Industry Association',
      date: '2023-06-01',
      tier: 1,
      notes: 'Global semiconductor revenue data and value-chain geographic distribution.',
    },
  ],
  status: 'Published',
  seo: {
    title: 'Semiconductors & Advanced Packaging Industry Map | Abdus Sameer',
    description: 'Structural value-chain map of the global semiconductor industry: from EUV optical physics and foundries to advanced packaging and fabless architectures.',
    canonicalUrl: 'https://abdussameer.com/industries/semiconductors/',
    keywords: ['Semiconductor Value Chain', 'EUV Lithography', 'Foundry Economics', 'TSMC', 'ASML', 'Packaging'],
  },
};

export const AI_INDUSTRY: IndustryIntelligence = {
  id: 'artificial-intelligence',
  slug: 'artificial-intelligence',
  name: 'Artificial Intelligence Systems & Compute',
  sector: 'Software & Accelerated Computing',
  overview:
    'The artificial intelligence systems industry spans the full stack required to train and run machine learning models: from GPU cluster interconnects and model compilers to foundation model architectures and enterprise applications.',
  valueChainStages: [
    {
      level: 'Tier 01',
      title: 'Accelerated Hardware & Interconnect Fabrics',
      description: 'Silicon accelerators, tensor processing cores, and low-latency networking switches (NVLink, InfiniBand).',
      keyParticipants: ['NVIDIA', 'AMD', 'Broadcom'],
      economicDynamic: 'Dominant margin capture during infrastructure buildouts.',
      capitalIntensity: 'Moderate',
      linkedCompanySlug: 'nvidia',
    },
    {
      level: 'Tier 02',
      title: 'Cloud Hyperscaler Cluster Infrastructure',
      description: 'Data centers engineered with high electrical power capacity, liquid cooling, and distributed orchestration.',
      keyParticipants: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud', 'Meta'],
      economicDynamic: 'Tens of billions in annual capital expenditure; asset depreciation risk.',
      capitalIntensity: 'Extreme',
    },
    {
      level: 'Tier 03',
      title: 'Foundational Model Training & Weights',
      description: 'Pre-training dense and mixture-of-experts (MoE) foundation models requiring massive GPU-hour clusters.',
      keyParticipants: ['OpenAI', 'Anthropic', 'Google DeepMind', 'Meta AI'],
      economicDynamic: 'High training R&D costs; competition compressing raw model token API pricing.',
      capitalIntensity: 'High',
    },
    {
      level: 'Tier 04',
      title: 'Enterprise Applications & Agentic Workflows',
      description: 'Software integrating domain-specific data, proprietary context, and workflow execution for business productivity.',
      keyParticipants: ['Salesforce', 'ServiceNow', 'Palantir', 'Enterprise SaaS'],
      economicDynamic: 'Long-term value capture dependent on customer switching costs and workflow defensibility.',
      capitalIntensity: 'Low',
    },
  ],
  economicDrivers: [
    'Hyperscaler multi-year capital commitment races to secure foundational infrastructure lead.',
    'Model capability frontiers expanding from textual chat to multimodal reasoning and autonomous agents.',
    'Enterprise efficiency gains driving demand for private domain fine-tuning.',
  ],
  chokePoints: [
    'Data center electrical power availability and electrical grid transformer lead times.',
    'GPU interconnect fabric memory bandwidth walls.',
    'High-bandwidth memory packaging availability.',
  ],
  competitiveDynamics:
    'Economic rent has accrued predominantly to the physical silicon accelerator and networking monopoly (NVIDIA). Hyperscalers bear the financial risk of massive hardware depreciation, while application-layer software defensibility remains in early stages of discovery.',
  relatedCompanySlugs: ['nvidia'],
  relatedArticleSlugs: ['semiconductor-value-chains'],
  sources: [],
  status: 'Active Research',
  seo: {
    title: 'AI Systems & Compute Infrastructure Industry Map | Abdus Sameer',
    description: 'Systemic breakdown of the artificial intelligence compute stack: from GPU hardware accelerators and cloud data centers to foundation models and software rent capture.',
    canonicalUrl: 'https://abdussameer.com/industries/artificial-intelligence/',
    keywords: ['AI Infrastructure', 'Compute Moats', 'Hyperscaler Capex', 'NVIDIA', 'LLM Scaling'],
  },
};

export const CLOUD_COMPUTING_INDUSTRY: IndustryIntelligence = {
  id: 'cloud-computing',
  slug: 'cloud-computing',
  name: 'Cloud Computing & Enterprise Platforms',
  sector: 'Software & Infrastructure Platforms',
  overview:
    'Enterprise cloud platforms deliver scalable infrastructure, databases, and application software. Analysis focuses on real unit economics, cloud hosting COGS, and customer acquisition payback decay.',
  valueChainStages: [
    {
      level: 'Tier 01',
      title: 'Hyperscale Infrastructure (IaaS)',
      description: 'Commoditized compute, storage, and networking capacity delivered at global scale.',
      keyParticipants: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud'],
      economicDynamic: 'Scale-driven operational cost advantages; substantial capital reinvestment.',
      capitalIntensity: 'Extreme',
    },
    {
      level: 'Tier 02',
      title: 'Enterprise Platform Software (SaaS / PaaS)',
      description: 'Specialized enterprise workflow software operating as multi-tenant cloud applications.',
      keyParticipants: ['Salesforce', 'Workday', 'Snowflake', 'Datadog'],
      economicDynamic: 'Recurring subscription revenue; customer retention decay rates dictate operating leverage.',
      capitalIntensity: 'Low',
    },
  ],
  economicDrivers: [
    'Workload modernization from legacy on-premise servers to cloud environments.',
    'Data consolidation for enterprise machine learning pipelines.',
  ],
  chokePoints: [
    'Data egress charges and proprietary API architectures creating switching friction.',
  ],
  competitiveDynamics:
    'GAAP accounting obscures real cloud infrastructure hosting drag and stock-based compensation dilution. High-gross-margin software resilience requires separating core operating cash flow from financial engineering.',
  relatedCompanySlugs: [],
  relatedArticleSlugs: [],
  sources: [],
  status: 'Framework Planned',
  seo: {
    title: 'Cloud Computing & Enterprise Software Economics | Abdus Sameer',
    description: 'Economic analysis of enterprise software platforms, cloud infrastructure margins, customer retention decay, and capital allocation.',
    canonicalUrl: 'https://abdussameer.com/industries/cloud-computing/',
    keywords: ['Cloud Computing', 'SaaS Economics', 'Unit Economics', 'Gross Margin Drag'],
  },
};

export const ALL_INDUSTRIES: IndustryIntelligence[] = [
  SEMICONDUCTORS_INDUSTRY,
  AI_INDUSTRY,
  CLOUD_COMPUTING_INDUSTRY,
];
