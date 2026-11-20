import type { Metadata } from 'next';
import { playfair, dmSans, dmMono } from '@/lib/fonts';
import { SkipLink } from '@/components/ui/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdus Sameer | Interdisciplinary Thinker, Researcher & Builder',
  description:
    'Connecting ideas. Understanding systems. Solving problems. Independent technology, semiconductor, and economic analysis by Abdus Sameer.',
  metadataBase: new URL('https://abdussameer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abdus Sameer — Connecting ideas. Understanding systems. Solving problems.',
    description:
      'Independent technology, semiconductor, economics, and business research by Abdus Sameer.',
    url: 'https://abdussameer.com',
    siteName: 'Abdus Sameer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/og-home.svg',
        width: 1200,
        height: 630,
        alt: 'Abdus Sameer — Connecting ideas. Understanding systems. Solving problems.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdus Sameer — Interdisciplinary Thinker, Researcher & Builder',
    description:
      'Connecting ideas. Understanding systems. Solving problems. Exploring technology, economics, and human systems.',
    images: ['/og/og-home.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://abdussameer.com/#person',
        name: 'Abdus Sameer',
        jobTitle: 'Interdisciplinary Thinker, Researcher & Builder',
        url: 'https://abdussameer.com',
        sameAs: ['https://github.com/mr-sameer'],
        description:
          'Curious about how the world works. Connecting computer science, artificial intelligence, semiconductors, economics, finance, business strategy, and human behavior to understand complex systems.',
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Bachelor of Computer Applications (BCA)',
          },
        ],
        knowsAbout: [
          'Computer Science & Distributed Systems',
          'Semiconductor Manufacturing & EUV Lithography',
          'Artificial Intelligence & Machine Learning',
          'Macroeconomics & Financial Valuation',
          'Business Strategy & Competitive Moats',
          'Cognitive Psychology & Behavioral Decision-Making',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://abdussameer.com/#website',
        url: 'https://abdussameer.com',
        name: 'Abdus Sameer | Intellectual Platform & Research Publication',
        publisher: { '@id': 'https://abdussameer.com/#person' },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-vermilion selection:text-ink">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
