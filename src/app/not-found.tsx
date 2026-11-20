import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="py-32 flex items-center justify-center">
      <Container className="text-center max-w-xl">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-4">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-6">
          The thesis you were looking for is not here.
        </h1>
        <p className="font-sans text-base text-ink-secondary mb-8">
          The requested page may have moved or does not exist yet in this research release.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper text-sm font-bold tracking-tight rounded-sm hover:bg-ink/90 transition-colors"
        >
          <span>Return to research homepage</span>
          <span>→</span>
        </Link>
      </Container>
    </div>
  );
}
