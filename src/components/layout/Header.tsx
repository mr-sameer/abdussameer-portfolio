'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MobileDrawer } from '@/components/layout/MobileDrawer';
import { NAVIGATION_LINKS } from '@/lib/constants';

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-sm border-b border-paper-border">
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-mono text-2xl sm:text-[27px] font-bold tracking-tighter text-ink hover:opacity-90 transition-opacity"
          aria-label="Abdus Sameer home"
        >
          AS<span className="text-vermilion">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink" aria-label="Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isPageLink = link.href.startsWith('/');
            if (isPageLink) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink hover:text-vermilion transition-colors tracking-tight py-1"
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-ink hover:text-vermilion transition-colors tracking-tight py-1"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Connect Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-vermilion transition-colors"
          >
            <span>Let’s connect</span>
            <ArrowUpRight className="w-4 h-4 text-vermilion" />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex md:hidden p-2 text-ink hover:text-vermilion transition-colors rounded-sm"
            aria-label="Open mobile navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* Accessible Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        triggerRef={menuButtonRef}
      />
    </header>
  );
};
