import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDF6EC",
          50: "#FFFBF5",
          100: "#FDF6EC",
          200: "#F9ECD9",
        },
        espresso: {
          DEFAULT: "#2A1A12",
          700: "#4A3325",
          500: "#6B4A33",
          300: "#9C7A61",
        },
        caramel: {
          DEFAULT: "#C77B30",
          light: "#E2A04D",
          dark: "#A85F1C",
        },
        rose: {
          bakery: "#E36588",
          light: "#F3A6BA",
        },
        honey: "#E8A33D",
        pistachio: "#A7C272",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-warm":
          "radial-gradient(at 18% 22%, rgba(227,101,136,0.20) 0px, transparent 48%), radial-gradient(at 82% 12%, rgba(232,163,61,0.22) 0px, transparent 45%), radial-gradient(at 75% 78%, rgba(199,123,48,0.18) 0px, transparent 50%), radial-gradient(at 25% 88%, rgba(167,194,114,0.14) 0px, transparent 45%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(86, 47, 23, 0.12)",
        "glass-lg": "0 20px 60px rgba(86, 47, 23, 0.18)",
        glow: "0 0 40px rgba(232, 163, 61, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
