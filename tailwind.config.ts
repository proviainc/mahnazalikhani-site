import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    '../../packages/web-core/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
          surface: 'var(--brand-surface)',
          text: 'var(--brand-text)',
          muted: 'var(--brand-muted)',
        },
        warmIvory: '#FBF7EF',
        softSand: '#EFE3D1',
        espresso: '#2A211C',
        copper: '#A8643D',
        copperDark: '#7D472B',
        copperLight: '#D6A37E',
        deepTeal: '#245E5A',
        muted: '#514A45',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(42, 33, 28, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

