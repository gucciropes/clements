import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9b1c1c", // brand red
          dark: "#7f1313", // darker red for hover/active
          muted: "#f7f2f2",
        },
        ink: "#0b0c0f",
        lightgray: "#f3f4f6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: [
          "var(--font-serif)",
          "Merriweather",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 6px 30px -12px rgba(0,0,0,0.15)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 600ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;


