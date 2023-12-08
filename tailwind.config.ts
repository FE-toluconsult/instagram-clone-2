import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-gray': '#737373',
        'ig-hover-overlay': 'rgba(0, 0, 0, .05)'
      },
      width: {
        'nav-narrow': '72px',
        'nav-medium': '244px',
        'nav-wide': '335px',
      }
    },
  },
  plugins: [],
}
export default config
