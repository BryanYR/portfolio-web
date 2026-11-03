import type { Config } from 'tailwindcss'

// Colors are CSS variables (see assets/css/main.css) so light/dark swap without dark: variants.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './constants/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'sans-serif'],
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        ink: token('ink'),
        muted: token('muted'),
        olive: token('olive'),
        stamp: token('stamp'),
        // The ticket is a physical object: same paper in both themes
        paper: { DEFAULT: '#FBF8F0', ink: '#1A1914', stamp: '#B93A1D' },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both',
        drop: 'drop 1.1s cubic-bezier(0.2, 0.7, 0.1, 1) 0.25s both',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(0.35em)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drop: {
          '0%': { opacity: '0', transform: 'translateY(-24px) rotate(-4deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0)' },
        },
      },
    },
  },
} satisfies Config
