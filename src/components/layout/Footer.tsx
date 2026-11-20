import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-paper/80 py-10 border-t border-ink-border">
      <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-4">
          <Link href="#top" className="text-paper text-xl font-bold tracking-tighter" aria-label="Back to top">
            AS<span className="text-vermilion">.</span>
          </Link>
          <span className="text-paper/60">
            © {currentYear} Abdus Sameer
          </span>
        </div>

        {/* Legal Disclaimer & Top Link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <p className="text-paper/60 text-[11px] max-w-md">
            For educational purposes only. Independent research, not investment advice.
          </p>
          <a
            href="#top"
            className="text-paper hover:text-vermilion transition-colors inline-flex items-center gap-1"
          >
            <span>Top</span>
            <span>↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
};
