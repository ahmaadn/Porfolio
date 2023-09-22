/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 3,
	printWidth: 100,
	semi: true,
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: true,
	endOfLine: "lf",
	singleAttributePerLine: false,
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-tailwindcss",
		"@trivago/prettier-plugin-sort-imports",
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
