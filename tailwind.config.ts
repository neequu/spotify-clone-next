import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        focus: "0px 0px 10px 2px #609070",
      },
      colors: {
        "gray-main": "#181818",
        "gray-bg": "#040404",
        page: "#212121",
        "gray-md": "#252525",
        accent: "#1ed760",
        accent2: "#509960",
        "accent2-dark": "#509960cc",
        "accent-dark": "#3bb79988",
      },
      gap: {
        "layout-gap": ".5rem",
      },
      padding: {
        "layout-p": "1rem",
      },
      gridTemplateRows: {
        mobile: "1fr repeat(2, min-content)",
      },
      gridTemplateColumns: {
        md: "min-content, 1fr",
        songs: "repeat(auto-fill,minmax(88px,1fr))",
        "songs-md": "repeat(auto-fill,minmax(110px,1fr))",
        "songs-lg": "repeat(auto-fill,minmax(140px,1fr))",
      },
      screens: {
        bare: "250px",
        xs: "300px",
        sm: "475px",
        md: "680px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
