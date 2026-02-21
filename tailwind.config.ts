import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      colors: {
        ink: "#080808", // Darker ink
        graphite: "#121212", // Richer graphite
        gold: "#b89a62",
        goldSoft: "#dccda8", // Brighter soft gold
        ivory: "#f8f5ee", // Slightly whiter text
        goldDark: "#8a703d",
      },
      boxShadow: {
        premium: "0 10px 30px rgba(0, 0, 0, 0.45)",
        premiumSoft: "0 8px 24px rgba(184, 154, 98, 0.08)",
        goldGlow: "0 0 20px rgba(184, 154, 98, 0.15)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, rgba(184,154,98,0) 0%, rgba(184,154,98,0.7) 50%, rgba(184,154,98,0) 100%)",
        "gold-gradient": "linear-gradient(135deg, #b89a62 0%, #8a703d 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
