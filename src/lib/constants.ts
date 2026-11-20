export interface ResearchCardItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  sector: string;
  status: 'Draft Analysis' | 'Research in Progress' | 'Upcoming';
  readingTime: string;
  isFeatured?: boolean;
  corporateMark?: {
    letter: string;
    bg: string;
    text: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Software Architecture' | 'Financial & Valuation Modeling' | 'AI & Knowledge Systems' | 'Market & Industry Intelligence';
  status: 'Active Development' | 'Experimental Prototype' | 'Ongoing Research';
  purpose: string;
  problem: string;
  approach: string;
  technologies: string[];
  metricsOrOutcome?: string;
}

export const NAVIGATION_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Journey', href: '/about' },
  { label: 'Disciplines', href: '#disciplines' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const TICKER_ITEMS = [
  'COMPUTER SCIENCE',
  'SEMICONDUCTORS',
  'ARTIFICIAL INTELLIGENCE',
  'MACROECONOMICS',
  'FINANCIAL VALUATION',
  'BUSINESS STRATEGY',
  'BEHAVIOURAL PSYCHOLOGY',
  'CAPITAL CYCLES',
  'COMPLEX SYSTEMS',
];

export const EDUCATION_ITEMS = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    status: 'Completed',
    institution: 'Foundational Computer Science',
    focus: 'Computer architecture, algorithms, data structures, software engineering, and database systems.',
  },
  {
    degree: 'MCA (Master of Computer Applications)',
    status: 'Ongoing',
    institution: 'Advanced Computing & Systems',
    focus: 'Distributed computing, advanced software architectures, artificial intelligence, and cloud infrastructure.',
  },
  {
    degree: 'MA Economics',
    status: 'Ongoing',
    institution: 'Economic Theory & Applied Markets',
    focus: 'Macroeconomics, microeconomic behavior, market structures, industrial organization, and econometric modeling.',
  },
];

export const PROFESSIONAL_EXPERIENCES = [
  {
    area: 'Sales & Commercial Execution',
    description:
      'Direct frontline experience understanding client needs, qualifying opportunities, and translating complex product capabilities into tangible business value.',
  },
  {
    area: 'Business Development',
    description:
      'Identifying market whitespace, mapping ecosystem partnerships, evaluating revenue expansion levers, and understanding commercial unit economics in the real world.',
  },
  {
    area: 'Relationship Management',
    description:
      'Cultivating long-term stakeholder alignment, building commercial trust, and understanding why human relationships and customer retention define corporate survival.',
  },
];

export const INTERDISCIPLINARY_DIMENSIONS = [
  {
    number: '01',
    title: 'Technology & Engineering',
    tagline: 'How physical constraints and software architectures shape the digital frontier.',
    topics: [
      'Computer science & systems architecture',
      'Artificial intelligence & machine learning',
      'Semiconductors, lithography & advanced packaging',
      'Cloud infrastructure & distributed networks',
      'Physical compute scaling & power bottlenecks',
    ],
  },
  {
    number: '02',
    title: 'Economics & Finance',
    tagline: 'How capital flows, risks are priced, and businesses generate durable returns.',
    topics: [
      'Microeconomic theory & macroeconomic cycles',
      'Capital allocation & free cash flow conversion',
      'Financial statement analysis & intrinsic valuation',
      'Corporate finance & capital structure strategy',
      'Market liquidity, private equity & M&A dynamics',
    ],
  },
  {
    number: '03',
    title: 'Business & Strategy',
    tagline: 'How companies build defensive moats and out-execute competitors.',
    topics: [
      'Unit economics & scalable business models',
      'Structural moats & customer switching costs',
      'Game theory & strategic decision frameworks',
      'Industrial market structures & power distribution',
      'Commercial execution & strategic partnerships',
    ],
  },
  {
    number: '04',
    title: 'Human & Intellectual Sciences',
    tagline: 'How cognitive biases, historical patterns, and philosophy govern human systems.',
    topics: [
      'Cognitive psychology & incentive structures',
      'Economic history & secular technological revolutions',
      'Philosophy of science & first-principles epistemology',
      'Organizational behavior & decision heuristics',
      'Societal dynamics & institutional durability',
    ],
  },
];

export const SYNTHESIS_EXAMPLES = [
  {
    pairing: 'AI + Economics + Business',
    insight:
      'Evaluating whether massive hyperscaler AI CAPEX converts into durable software productivity, or if economic rent accrues primarily to physical semiconductor monopolies.',
  },
  {
    pairing: 'Computer Science + Finance',
    insight:
      'Auditing technology platforms from the source code up — assessing technical debt, infrastructure margins, and R&D efficiency rather than relying on sell-side multiple heuristics.',
  },
  {
    pairing: 'Psychology + Economics',
    insight:
      'Understanding how managerial incentives, cognitive loss aversion, and market sentiment distort capital allocation during technology bubble-and-bust cycles.',
  },
  {
    pairing: 'Engineering + Strategy',
    insight:
      'Mapping how physical manufacturing bottlenecks (such as High-NA EUV depth-of-focus or CoWoS packaging yields) dictate high-level geopolitical and competitive power.',
  },
  {
    pairing: 'History + Economics',
    insight:
      'Drawing parallels between previous general-purpose technology rollouts (railroads, electrification, internet) and current generative AI infrastructure capital cycles.',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'semis-intel',
    title: 'Semiconductor Moat & Value-Chain Map',
    category: 'Market & Industry Intelligence',
    status: 'Active Development',
    purpose:
      'To build an interactive, data-driven map tracing economic value and technological dependency from optical tooling to foundries and hyperscalers.',
    problem:
      'Traditional research relies on fragmented spreadsheets and sell-side commentary, failing to highlight single-point-of-failure choke points across global silicon supply chains.',
    approach:
      'Synthesized audited annual filings (Form 10-Ks, 20-Fs), IEEE technical papers, and earnings transcripts into a multi-tiered dependency graph.',
    technologies: ['TypeScript', 'Next.js', 'Relational Mapping', 'SEC EDGAR Data'],
    metricsOrOutcome: 'Covering 15+ Tier-1 semiconductor companies with mapped capital dependencies.',
  },
  {
    id: 'equity-teardown',
    title: 'Enterprise Software Economics Sandbox',
    category: 'Financial & Valuation Modeling',
    status: 'Active Development',
    purpose:
      'To model the underlying unit economics, net retention decay, and gross margin resilience of modern enterprise cloud platforms.',
    problem:
      'GAAP accounting obscures real cloud infrastructure costs and long-term customer acquisition payback cycles in enterprise SaaS.',
    approach:
      'Engineered dynamic DCF and cohort retention models that isolate cloud hosting COGS, sales compensation drag, and stock-based dilution.',
    technologies: ['Financial Modeling', 'Cohort Analysis', 'Python / Pandas', 'Markdown Reports'],
    metricsOrOutcome: 'Framework tested against 5 public enterprise software balance sheets.',
  },
  {
    id: 'ai-synthesizer',
    title: 'Primary Evidence Extraction Toolkit',
    category: 'AI & Knowledge Systems',
    status: 'Experimental Prototype',
    purpose:
      'An automated tool that ingests dense 200+ page regulatory disclosures and isolates management commentary changes quarter-over-quarter.',
    problem:
      'Analysts spend dozens of hours manually diffing 10-K risk factors and MD&A disclosures between reporting periods.',
    approach:
      'Constructed a local vector retrieval and lexical diffing pipeline optimized for financial tables and SEC reporting syntax.',
    technologies: ['TypeScript', 'Vector Search', 'Local LLMs', 'Text Embeddings'],
    metricsOrOutcome: 'Accelerates qualitative filing review time by >60% while maintaining source links.',
  },
  {
    id: 'research-publication',
    title: 'AbdusSameer Independent Research Platform',
    category: 'Software Architecture',
    status: 'Active Development',
    purpose:
      'An open-source, ultra-high-performance digital publication platform engineered for rigorous, long-form technology research.',
    problem:
      'Standard publishing platforms (Medium, Substack) are rigid, lack custom interactive visualization capabilities, and compromise privacy and speed.',
    approach:
      'Built with Next.js App Router static-export, custom design tokens, zero-JS readable typography, self-hosted WOFF2 fonts, and vector-first animations.',
    technologies: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'Self-Hosted WOFF2'],
    metricsOrOutcome: 'Targeting sub-1.5s LCP, zero layout shifts, and 100% WCAG AA accessibility.',
  },
];

export const RESEARCH_CARDS: ResearchCardItem[] = [
  {
    id: 'asml',
    slug: 'asml',
    title: 'Why ASML sits at the centre of the AI compute race',
    subtitle:
      'The simple story behind lithography, its optical physics monopoly, High-NA EUV transition economics, and structural geopolitical risks.',
    sector: 'Semiconductors',
    status: 'Research in Progress',
    readingTime: '12 min read',
    isFeatured: true,
  },
  {
    id: 'nvidia',
    slug: 'nvidia',
    title: 'NVIDIA: Beyond the headline numbers',
    subtitle:
      'What actually powers the data center acceleration moat — from the CUDA software ecosystem to NVLink networking lock-in and hyperscaler CAPEX sensitivity.',
    sector: 'AI Infrastructure',
    status: 'Draft Analysis',
    readingTime: '10 min read',
    corporateMark: {
      letter: 'N',
      bg: '#75b943',
      text: '#ffffff',
    },
  },
  {
    id: 'ai-infra',
    slug: 'ai-infrastructure',
    title: 'AI infrastructure, explained simply',
    subtitle:
      'From raw silicon and optical packaging to foundational model training: where economic rent is captured in the modern AI compute stack.',
    sector: 'AI Systems',
    status: 'Upcoming',
    readingTime: '7 min read',
    corporateMark: {
      letter: 'AI',
      bg: '#eae3d8',
      text: '#0a1120',
    },
  },
];

export const APPROACH_PRINCIPLES = [
  {
    number: '01',
    title: 'Start with first principles',
    description:
      'Understand the physical, mathematical, and architectural reality of the technology before analyzing the stock price or market sentiment.',
  },
  {
    number: '02',
    title: 'Show the primary evidence',
    description:
      'Every quantitative claim, margin estimate, and operational metric is anchored in audited SEC filings, earnings transcripts, or technical whitepapers.',
  },
  {
    number: '03',
    title: 'Keep it human',
    description:
      'Disciplined, plain-English clarity beats institutional jargon and promotional buzzwords every time. If a concept cannot be explained simply, it is not yet understood.',
  },
];

export const COVERAGE_AREAS = [
  {
    number: '01',
    title: 'Product software',
    description: 'Enterprise platforms, recurring revenue dynamics, developer ecosystems, and switching costs.',
  },
  {
    number: '02',
    title: 'IT modernization',
    description: 'The talent architectures, capabilities, and multi-year capital cycles driving digital transformation.',
  },
  {
    number: '03',
    title: 'AI companies',
    description: 'Separating genuine economic signal and infrastructure defensibility from short-term market hype.',
  },
  {
    number: '04',
    title: 'Chips & infrastructure',
    description: 'The physical hardware, advanced packaging, and lithography foundations that make modern computing possible.',
  },
];
