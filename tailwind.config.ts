import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        "ink-soft": "#0B0B0E",
        "ink-card": "#101014",
        cyan: {
          glow: "#7EF0FF",
          soft: "#A9F5FF",
          deep: "#3AD6EA",
        },
        pink: {
          glow: "#FF7EC7",
          soft: "#FFB3DE",
          deep: "#E8549F",
        },
        mist: "#B9B9C3",
        "mist-dim": "#7A7A86",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        cnserif: ["var(--font-noto-serif-sc)", "Songti SC", "serif"],
        cnsans: ["var(--font-noto-sans-sc)", "PingFang SC", "sans-serif"],
      },
      letterSpacing: {
        nav: "0.28em",
        label: "0.22em",
      },
      maxWidth: {
        site: "72rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
