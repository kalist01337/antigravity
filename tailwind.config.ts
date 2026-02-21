import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        surface: "#ffffff",
        surfaceSoft: "#f8fafc", // slate-50
        surfaceMuted: "#f1f5f9", // slate-100
        ink: "#0f172a", // slate-900
        inkSoft: "#334155", // slate-700
        inkMuted: "#64748b", // slate-500
        brand: "#2563eb", // blue-600
        brandSoft: "#3b82f6", // blue-500
        brandDark: "#1d4ed8", // blue-700
      },
      boxShadow: {
        premium: "0 20px 40px -10px rgba(0,0,0,0.05)",
        premiumSoft: "0 10px 30px -5px rgba(0,0,0,0.03)",
        brandGlow: "0 10px 30px -5px rgba(37,99,235,0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
