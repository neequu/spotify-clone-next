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
        'gray-main': '#181818',
        'gray-bg': '#040404',
        accent: '#1ed760',
        'accent-dark': '#3ba36688',
      },
      gap: {
        'layout-gap': '.5rem',
      },
      padding: {
        'layout-p': '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
