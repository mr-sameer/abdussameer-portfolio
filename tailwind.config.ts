import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f5f1e9',
          card: '#ebe7df',
          muted: '#e5e0d7',
          border: '#d9d5cd',
        },
        ink: {
          DEFAULT: '#0a1120',
          secondary: '#445064',
          muted: '#596575',
          border: '#3a4655',
        },
        vermilion: {
          DEFAULT: '#ff5d37',
          hover: '#e04b26',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dmsans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-dmmono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
