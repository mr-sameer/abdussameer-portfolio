import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'vermilion' | 'neutral' | 'dark' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'vermilion',
  className = '',
}) => {
  const variantStyles = {
    vermilion: 'bg-vermilion text-ink font-semibold',
    neutral: 'bg-paper-card text-ink font-medium border border-paper-border',
    dark: 'bg-ink text-paper font-medium',
    outline: 'border border-ink/40 text-ink-secondary font-medium',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
