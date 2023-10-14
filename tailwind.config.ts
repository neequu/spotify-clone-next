import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-main': '#444',
        'gray-bg': '#111',
        accent: '#1ed760',
      },
      gap: {
        'layout-gap': '.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
