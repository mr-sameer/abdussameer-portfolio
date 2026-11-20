/**
 * AbdusSameer V4 — Initial Research Publication Datasets
 * Flagship Investigation: The Semiconductor & AI Compute Value Chain
 */

import { ResearchArticle } from '../types/research';

export const SEMI_VALUE_CHAIN_ARTICLE: ResearchArticle = {
  id: 'semiconductor-value-chains',
  slug: 'semiconductor-value-chains',
  title: 'Why ASML Sits at the Centre of the AI Compute Race',
  subtitle:
    'The optical physics monopoly, High-NA EUV transition economics, and structural geopolitical choke points governing global artificial intelligence infrastructure.',
  abstract:
    'Every modern AI accelerator—from NVIDIA’s Blackwell architecture to custom hyperscaler ASICs—is physically bounded by extreme ultraviolet (EUV) photolithography. This investigation deconstructs how a single Dutch corporation acquired an absolute monopoly on leading-edge optical tooling, examines the commercial economics of the High-NA transition, and analyzes why semiconductor supply chains cannot be rapidly diversified.',
  author: {
    name: 'Abdus Sameer',
    role: 'Interdisciplinary Thinker, Researcher & Builder',
    url: 'https://abdussameer.com/about/',
  },
  publishedAt: '2026-03-15T00:00:00Z',
  updatedAt: '2026-11-20T00:00:00Z',
  readingTimeMinutes: 14,
  sector: 'Semiconductors',
  category: 'Semiconductor Architecture',
  status: 'Research in Progress',
  isFeatured: true,
  tableOfContents: [
    { id: 'optical-monopoly', title: '1. The Optical Physics Monopoly', level: 2 },
    { id: 'physics-of-euv', title: '2. Generating 13.5nm Photons', level: 2 },
    { id: 'high-na-economics', title: '3. High-NA EUV Transition Economics', level: 2 },
    { id: 'foundry-dependency', title: '4. The Foundry Bottleneck & Geopolitics', level: 2 },
    { id: 'strategic-takeaways', title: '5. Strategic & Investment Conclusions', level: 2 },
  ],
  methodology:
    'This research synthesizes primary regulatory disclosures (SEC Form 20-F filings from ASML, TSMC Form 20-Fs), IEEE and SPIE advanced lithography technical papers, and supplier disclosures. All market share and financial figures are verified against audited accounts.',
  executiveSummary: [
    'ASML holds a commercially unassailable 100% monopoly in the production of commercial EUV photolithography scanners required for sub-7nm silicon.',
    'The generation of 13.5nm EUV photons requires vaporizing 50,000 microscopic tin droplets per second with a pulsed 30kW CO2 laser, a technology requiring over 20 years of proprietary supplier co-investment.',
    'High-NA EUV (0.55 numerical aperture) tools cost upwards of €350 million each, shifting the economic battleground from raw transistor density to foundry capital budgeting discipline and advanced 2.5D/3D packaging yields.',
    'Geopolitical export controls and high customer concentration (TSMC, Intel, Samsung) represent the primary structural risks to the ecosystem.',
  ],
  sections: [
    {
      id: 'optical-monopoly',
      heading: 'The Optical Physics Monopoly',
      content:
        'To comprehend modern semiconductor moats, one must understand that advanced computing is governed by optical physics rather than software code. Moore’s Law is not a natural law of nature; it is a manufacturing roadmap dictated by the Rayleigh criterion of optical resolution. As feature sizes shrunk below 10 nanometers, conventional 193nm Deep Ultraviolet immersion scanners hit fundamental diffraction limits. The global semiconductor industry attempted multiple competing pathways to circumvent this barrier—including electron-beam lithography, X-ray lithography, and nanoimprint methods. Only ASML, in coordinated multi-decade partnership with Carl Zeiss and Cymer, successfully commercialized Extreme Ultraviolet lithography at a 13.5nm wavelength.',
      keyTakeaways: [
        'Rayleigh criterion defines the physical limits of feature patterning.',
        'ASML’s monopoly resulted from surviving a multi-billion-dollar R&D valley of death that forced competitors Nikon and Canon to retreat from EUV development.',
      ],
      evidenceNotes: ['Sourced from SPIE Advanced Lithography conference historical proceedings and ASML corporate filings.'],
    },
    {
      id: 'physics-of-euv',
      heading: 'Generating 13.5nm Photons at Scale',
      content:
        'The engineering audacity of an EUV scanner lies in light generation. Natural 13.5nm photons do not exist in standard industrial environments; they are absorbed by air and glass. Within an ASML vacuum chamber, a generator ejects 50,000 molten tin droplets per second. A pulsed industrial CO2 laser fires twice at each microscopic droplet: the prepulse flattens the droplet into a pancake shape, and the main pulse vaporizes it into a high-temperature plasma emitting EUV radiation. The resulting photons are collected by Bragg reflector mirrors polished by Carl Zeiss SMT to tolerances within picometers—smooth enough that if scaled to the size of Germany, the highest bump would measure less than a millimeter.',
      keyTakeaways: [
        'EUV light generation is fundamentally an extreme thermodynamic and optical physics challenge.',
        'Bragg multi-layer mirrors are single-sourced exclusively from Carl Zeiss SMT in Oberkochen, Germany.',
      ],
      evidenceNotes: ['Verified via Carl Zeiss SMT technical specifications and IEEE Transactions on Semiconductor Manufacturing.'],
    },
    {
      id: 'high-na-economics',
      heading: 'High-NA EUV Transition Economics',
      content:
        'The next frontier of semiconductor manufacturing is High-NA EUV, increasing the numerical aperture from 0.33 to 0.55. However, the physical laws of optics introduce severe trade-offs: depth-of-focus diminishes with the square of the numerical aperture, requiring ultra-thin photoresist layers and anamorphic magnification (asymmetric magnification ratios between X and Y axes). At over €350 million per tool, foundries face a critical capital allocation decision: adopt High-NA scanners for single-exposure printing at 2nm/1.4nm, or extend existing 0.33 NA Low-NA scanners using complex, defect-prone multi-patterning techniques.',
      keyTakeaways: [
        'High-NA introduces anamorphic magnification (8x in Y, 4x in X) to avoid mask reticle shadowing.',
        'Tool economics will dictate which foundries can afford leading-edge node transitions.',
      ],
      evidenceNotes: ['Audited from ASML 2023 Form 20-F Capital Allocation and R&D Guidance.'],
    },
    {
      id: 'foundry-dependency',
      heading: 'The Foundry Bottleneck & Geopolitics',
      content:
        'The global AI compute race relies on an extraordinarily fragile physical chain: optical mirrors manufactured in Germany, laser sources assembled in the U.S. and Netherlands, assembled by ASML in Veldhoven, shipped to Taiwan for fabrication by TSMC, and packaged with high-bandwidth memory from South Korea. Over 90% of sub-5nm advanced chips currently flow through this single island corridor. As sovereign states attempt to onshore semiconductor fabrication via the U.S. CHIPS Act and European initiatives, they discover that capital expenditure cannot instantly replicate decades of institutional manufacturing yield experience.',
      keyTakeaways: [
        'Leading-edge semiconductor manufacturing is an irreplaceable global dependency graph.',
        'Onshoring efforts provide fab shell redundancy but remain entirely dependent on ASML tooling.',
      ],
      evidenceNotes: ['Sourced from Semiconductor Industry Association (SIA) global supply chain data.'],
    },
    {
      id: 'strategic-takeaways',
      heading: 'Strategic & Investment Conclusions',
      content:
        'Analyzing artificial intelligence from the perspective of software alone is an epistemological error. Value capture in technological revolutions flows to the points of maximum scarcity and defensibility. In the current compute cycle, that scarcity resides not in software model weights or hyperscaler cloud services, but in the physical equipment and advanced packaging that turn atomic silicon into matrix-multiplication hardware.',
      keyTakeaways: [
        'True moats are physical and thermodynamic, not just programmatic.',
        'Hyperscalers bear the risk of capital asset depreciation; tooling monopolies extract sustained high-margin cash flow.',
      ],
    },
  ],
  sources: [
    {
      id: 'asml-20f-2023',
      title: 'ASML Holding N.V. Form 20-F Annual Report (FY 2023)',
      publisher: 'U.S. Securities and Exchange Commission',
      date: '2024-02-28',
      tier: 1,
      notes: 'Audited financial statements and supply chain disclosures.',
    },
    {
      id: 'spie-high-na-physics',
      title: 'Optical Physics and Imaging Performance of High-NA 0.55 EUV Lithography',
      author: 'ASML Systems Architecture Group',
      publisher: 'SPIE Conference on Advanced Lithography',
      date: '2023-03-01',
      tier: 2,
      notes: 'Technical specification of 0.55 NA anamorphic optics.',
    },
  ],
  relatedCompanySlugs: ['asml', 'tsmc', 'nvidia'],
  relatedIndustrySlugs: ['semiconductors', 'artificial-intelligence'],
  relatedArticleSlugs: [],
  seo: {
    title: 'Why ASML Sits at the Centre of the AI Compute Race | Abdus Sameer',
    description: 'Empirical research investigation into ASML’s optical physics monopoly, EUV photolithography physics, and the economics of the High-NA transition.',
    canonicalUrl: 'https://abdussameer.com/research/semiconductor-value-chains/',
    keywords: ['ASML', 'EUV Lithography', 'Semiconductor Value Chain', 'High-NA', 'AI Compute Moats'],
  },
};

export const ALL_RESEARCH_ARTICLES: ResearchArticle[] = [
  SEMI_VALUE_CHAIN_ARTICLE,
];
