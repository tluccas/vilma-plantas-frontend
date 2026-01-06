import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: "var(--color-text)",
        body: "var(--color-text-muted)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
      },
      screens: {
        xs: "475px",
      },
      maxWidth: {
        "screen-7xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
