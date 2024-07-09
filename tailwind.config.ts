import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'medium-brown': '#7A746E',
      'light-cream': '#FFF7F0',
      'black': '#030303',
      'galactic-blue': '#755CDE',
      'summer-yellow':'#F6A560',
      'pink':'#F39E9E',
      'light-red': '#EB7565',
      'cyan': '#61C4B7',
      'dark-purple':'#552049',
    },
    fontSize: {
      'heading-l': '56px',
      'heading-m': '40px',
      'heading-s': '32px',
      'main': '18px'
    },
    lineHeight: {
      'heading-l': '70px',
      'heading-m': '51px',
      'heading-s': '40px',
      'main': '28px'
    },
    extend: {
      backgroundImage: {
        "logo": "url(../public/assets/logo.svg)",
      },
      fontFamily: {
        "jakarta": "Jakarta"
      }
    },
  },
  plugins: [],
};

export default config;
