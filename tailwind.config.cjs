/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Noto Sans Mono", ...defaultTheme.fontFamily.sans],
				mono: ["Noto Sans Mono", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
