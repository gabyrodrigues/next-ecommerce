import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        basic: "0 0 0.5rem #F231A5"
      },
      colors: {
        primary: "#F231A5",
        secondary: "#3CD3C1",
        darkPrimary: "#DA0D89",
        darkSecondary: "#27B0A0",
        mainBg: "#06092B",
        lightBg: "#F2F2F2",
        lightGray: "#EAEAEA",
        gray: "#8F8F8F",
        darkGray: "#2E2F42",
        red: "#FF6347",
        white: "#FAFAFA",
        black: "#030517",
        transparent: "transparent"
      }
    }
  },
  plugins: []
};
export default config;
