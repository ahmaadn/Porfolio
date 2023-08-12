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
        sans: ["Albert Sans", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        54: "54px",
      },
      minWidth: {
        54: "54px",
      },
      height: {
        54: "54px",
      },
      width: {
        54: "54px",
      },
      colors: {
        primary: {
          DEFAULT: "#ffc300",
          50: "#ffd60a",
          100: "#ffc300",
        },
        secondary: {
          DEFAULT: "#003566",
          50: "#003566",
          100: "#001d3d",
          950: "#000814",
        },
      },
    },
  },
  plugins: [],
};
