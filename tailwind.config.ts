import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#111111",
        surface: "#171717",
        text: "#FFFFFF",
        muted: "#A1A1AA",
        red: "#E50914"
      }
    }
  },
  plugins: []
};

export default config;
