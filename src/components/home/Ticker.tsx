import React from 'react';
import { TICKER_ITEMS } from '@/lib/constants';

export const Ticker: React.FC = () => {
  // Duplicate array twice to ensure seamless infinite looping
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      className="w-full bg-vermilion text-ink py-3.5 border-b border-ink/20 overflow-hidden select-none"
      aria-label="Coverage areas ticker"
    >
      <div className="ticker-track">
        {duplicatedItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="inline-flex items-center gap-6 px-4">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink flex-shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};
