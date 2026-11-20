'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'vermilion' | 'text';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'dark',
  href,
  onClick,
  className = '',
  external = false,
  'aria-label': ariaLabel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-3 transition-colors duration-200 font-sans text-sm font-bold tracking-tight rounded-sm';

  const variantStyles = {
    dark: 'bg-ink text-paper hover:bg-ink/90 px-5 py-3.5 shadow-sm',
    light: 'bg-paper text-ink hover:bg-paper-card border border-ink/30 px-5 py-3.5',
    vermilion: 'bg-vermilion text-ink hover:bg-vermilion-hover px-5 py-3.5 font-bold',
    text: 'bg-transparent text-ink hover:text-vermilion p-0 font-semibold gap-1.5 underline-offset-4 hover:underline',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedStyles} aria-label={ariaLabel}>
      {children}
    </button>
  );
};
