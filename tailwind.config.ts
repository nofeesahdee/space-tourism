import type { Config } from "tailwindcss";
import image from "./starter-code/assets/home/background-home-desktop.jpg"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop": "../../starter-code/assets/home/background-home-desktop.jpg",
        "tablet": "../../starter-code/assets/home/background-home-tablet.jpg",
        "mobile": "../../starter-code/assets/home/background-home-mobile.jpg",
      },
      screens: {
        'md': '374px',
        'lg': '770px',
      },
    },
  },
  plugins: [],
};
export default config;
