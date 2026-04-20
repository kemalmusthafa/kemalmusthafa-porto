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
        bg: "rgb(var(--color-bg-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        "accent-dark": "rgb(var(--color-accent-dark-rgb) / <alpha-value>)",
        text: "rgb(var(--color-text-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-rgb) / <alpha-value>)",
      },
      fontFamily: {
        clash: ["Space Grotesk", "sans-serif"],
        cabinet: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#0A0A0A",
        secondary: "#111111",
      },
      textColor: {
        primary: "#F5F5F5",
        secondary: "#888888",
      },
      borderColor: {
        primary: "#222222",
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        grain: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
