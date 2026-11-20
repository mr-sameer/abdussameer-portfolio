'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/lib/constants';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, triggerRef }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Body scroll locking and Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard listener for Escape key and Focus Trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button
    const closeBtn = drawerRef.current?.querySelector<HTMLButtonElement>('button');
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  const handleLinkClick = () => {
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden" aria-labelledby="drawer-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-paper border-l border-paper-border p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-paper-border">
                <span id="drawer-title" className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 -mr-2 text-ink hover:text-vermilion rounded-sm transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile Navigation">
                {NAVIGATION_LINKS.map((link) => {
                  const isPageLink = link.href.startsWith('/');
                  if (isPageLink) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="font-serif text-2xl text-ink hover:text-vermilion transition-colors py-1"
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="font-serif text-2xl text-ink hover:text-vermilion transition-colors py-1"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Connect Action */}
            <div className="pt-6 border-t border-paper-border">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="inline-flex w-full items-center justify-between px-4 py-3 bg-ink text-paper text-sm font-bold tracking-tight rounded-sm hover:bg-ink/90 transition-colors"
              >
                <span>Let’s connect</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion" />
              </a>
              <p className="mt-4 text-xs font-mono text-ink-muted text-center">
                Curiosity · Systems · Solutions
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
