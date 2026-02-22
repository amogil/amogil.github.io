import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightModeBg: "#E6E6E6",
        darkModeBg: "#1A1A1A",
        accentColor: "#A682FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
