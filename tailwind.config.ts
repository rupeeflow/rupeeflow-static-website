import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'border-primary-50': 'var(--border-primary-50)',
        'border-primary-100': 'var(--border-primary-100)',
      }
    }
  },
  plugins: [],
}

export default config