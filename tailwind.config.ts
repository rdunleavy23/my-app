import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15,26,38,0.06)",
        "hover-button": "0 4px 6px rgba(59, 130, 246, 0.3)",
        "hover-card": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "1": "0.5rem",  /* 8px */
        "2": "1rem",    /* 16px */
        "3": "1.5rem",  /* 24px */
        "4": "2rem",    /* 32px */
        "5": "3rem",    /* 48px */
        "6": "4rem",    /* 64px */
        "7": "5rem",    /* 80px */
        "8": "6rem",    /* 96px */
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.2, 0, 0, 1)",
      },
      transitionDuration: {
        "150": "150ms",
        "300": "300ms",
      },
    },
  },
  plugins: [],
};

export default config;