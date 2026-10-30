import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF1801",
        "primary-glow": "rgba(255, 24, 1, 0.45)",
        "accent-orange": "#FF6B00",
        "accent-gold": "#FFB800",
        "accent-cyan": "#00F0FF",
        "bg-obsidian": "#000000",
        "bg-card": "#0B0B0C",
        "bg-card-hover": "#141416",
        "text-main": "#FFFFFF",
        "text-sub": "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
