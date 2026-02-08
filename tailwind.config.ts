import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        muted: "#52606d",
        line: "#d9e2ec",
        paper: "#f8f5ef",
        accent: "#3b4d61"
      },
      maxWidth: {
        measure: "72ch"
      },
      fontFamily: {
        serif: ["'Lora'", "Georgia", "serif"],
        sans: ["'Source Sans 3'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
