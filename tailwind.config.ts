import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#0f172a", light: "#1e293b" },
        accent: { DEFAULT: "#0d9488", light: "#14b8a6" },
        surface: "#f8fafc",
        card: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
