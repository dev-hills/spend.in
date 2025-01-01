import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" }, // Styles apply to screens that are 1535px and smaller
      xl: { max: "1279px" }, // Styles apply to screens that are 1279px and smaller
      // lg: { max: "1023px" }, // Styles apply to screens that are 1023px and smaller
      md: { min: "601px", max: "1200px" }, // Styles apply to screens that are 767px and smaller
      sm: { max: "600px" }, // Styles apply to screens that are 600px and smaller
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
