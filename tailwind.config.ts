import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        surface: "#050505", // Deep obsidian black
        surfaceSoft: "#111111", // slightly lighter dark
        surfaceMuted: "#1a1a1a", // dark grey
        ink: "#ffffff", // Pure white for text
        inkSoft: "#d1d5db", // gray-300
        inkMuted: "#9ca3af", // gray-400
        brand: "#C5A059", // Classic deep gold
        brandSoft: "#D4B572", // Softer light gold
        brandDark: "#9E7D3F", // Darker rich bronze-gold
        // Additional premium accents
        platinum: "#E5E4E2",
        brass: "#B5A642",
      },
      boxShadow: {
        premium: "0 20px 40px -10px rgba(0,0,0,0.8)",
        premiumSoft: "0 10px 30px -5px rgba(0,0,0,0.5)",
        brandGlow: "0 10px 30px -5px rgba(212, 175, 55, 0.15)",
        goldGlow: "0 0 40px -10px rgba(212, 175, 55, 0.3)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #e5c158 0%, #b5952f 100%)",
        "gold-shimmer": "linear-gradient(to right, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)",
        "obsidian-gradient": "radial-gradient(circle at center, #111111 0%, #050505 100%)",
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
