/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      container: {
         center: true,
         padding: "1rem",
      },
      extend: {
         fontFamily: {
            sans: ["Noto Sans Mono", ...defaultTheme.fontFamily.sans],
         },
         colors: {
            primary: "#FFC300",
            secondary: "#023e8a",
            neutral: "#000814",
            base: {
               100: "#EEF0F2"
            },
            error: "#FF4000",
         },
      },
   },
   plugins: [],
};
