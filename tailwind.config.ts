import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        panel: "var(--panel)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        sky: "var(--sky)",
        good: "var(--good)",
        warn: "var(--warn)",
        bad: "var(--bad)",
        slategrid: "var(--slate-grid)",
      },
      borderRadius: {
        md: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15,26,38,0.06)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
