import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0D0D0D',
        charcoal: '#1A1A1A',
        'warm-white': '#F5F2ED',
        gold: '#B8A06A',
        'gold-light': '#D4BC8A',
        stone: '#7A7468',
        divider: '#2A2A2A',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
