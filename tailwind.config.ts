import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        landscape: { raw: '(orientation: landscape)' },
      },
      colors: {
        teal: {
          500: '#14b8a6', // default Tailwind teal
        },
        emerald: {
          500: '#10b981', // default Tailwind emerald
        },
      },
      backgroundImage: {
        'gradient-teal-emerald': 'linear-gradient(135deg, #14b8a6, #10b981)',
      },
    },
  },
  plugins: [],
}

export default config
