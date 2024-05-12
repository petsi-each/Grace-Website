import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brancoGrace:"#FEFDFD",
        cinzaGrace: "#504945",
        vinhoGrace: "#870D0D",
        laranjaGrace: "#FA8632",
        pessegoGrace: "#FFB884",
      },
    },
  },
  plugins: [],
};
export default config;
