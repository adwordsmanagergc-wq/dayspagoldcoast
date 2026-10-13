import type { Config } from 'tailwindcss';

// Tokens mirror DESIGN.md. Legacy `rejoov-*` names are remapped onto the new
// palette so long-form pages adopt it without per-page rewrites.
const c = {
  canvas: '#F3F1EC',
  canvasSoft: '#EAE7E0',
  surface: '#FBFAF7',
  ink: '#16231F',
  inkMute: '#56625D',
  hairline: '#D9D6CE',
  lagoon: '#1E6F66',
  lagoonPress: '#175A53',
  lagoonWash: '#DCE8E3',
  lagoonMark: '#0F8F80'
};

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: c.canvas, soft: c.canvasSoft },
        surface: c.surface,
        ink: { DEFAULT: c.ink, mute: c.inkMute },
        hairline: c.hairline,
        lagoon: { DEFAULT: c.lagoon, press: c.lagoonPress, wash: c.lagoonWash, mark: c.lagoonMark },
        rejoov: {
          teal: c.lagoon,
          mint: c.lagoonWash,
          neon: c.lagoonMark,
          ink: c.ink,
          sand: c.canvas,
          shell: c.canvasSoft,
          gold: c.inkMute,
          deep: c.lagoon,
          night: c.ink,
          bronze: c.inkMute
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      borderRadius: { surface: '20px' },
      boxShadow: {
        card: '0 1px 2px rgba(22,35,31,0.05), 0 18px 40px -24px rgba(22,35,31,0.28)',
        raised: '0 2px 4px rgba(22,35,31,0.06), 0 28px 60px -28px rgba(22,35,31,0.35)',
        rejoov: '0 1px 2px rgba(22,35,31,0.05), 0 18px 40px -24px rgba(22,35,31,0.28)'
      },
      backgroundImage: {
        'rejoov-glow': `linear-gradient(180deg, ${c.canvas} 0%, ${c.canvasSoft} 100%)`
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        in: 'cubic-bezier(0.7, 0, 0.84, 0)'
      },
      maxWidth: { site: '1320px' }
    }
  },
  plugins: []
};

export default config;
