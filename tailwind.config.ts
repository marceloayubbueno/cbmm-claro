import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas do site FinTech
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          400: "#94A3B8",
          500: "#64748B",
          700: "#334155",
          800: "#1E293B",
        },
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        violet: {
          500: "#7E5FFB",
        },
        cyan: {
          400: "#2DD4BF",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to right top, #2563EB, #3B82F6)",
        "gradient-button": "linear-gradient(to right top, #60A5FA, rgba(96, 165, 250, 0))",
        "gradient-section-light": "linear-gradient(#F1F5F9, rgba(241, 245, 249, 0))",
        "gradient-section-white": "linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0))",
        "gradient-testimonial": "linear-gradient(to top, #1E293B, #334155)",
        "gradient-pricing": "linear-gradient(#DBEAFE, #EFF6FF)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-aspekta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

