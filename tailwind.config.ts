import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rejoov: {
          teal: '#4FD1C5',
          mint: '#81E6D9',
          neon: '#00FFCB',
          ink: '#313133',
          sand: '#FAF6F0',
          gold: '#D4AF7A'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        rejoov: '0 12px 28px rgba(79,209,197,0.64)'
      },
      backgroundImage: {
        'rejoov-glow':
          'linear-gradient(135deg, rgba(129,230,217,0.15) 0%, rgba(79,209,197,0.25) 100%)'
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(79,209,197,0.55)' },
          '70%': { boxShadow: '0 0 0 16px rgba(79,209,197,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(79,209,197,0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        pulseRing: 'pulseRing 2s infinite',
        fadeUp: 'fadeUp .6s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
