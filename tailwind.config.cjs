/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["retro", "luxury"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
