import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.ahmaadn.my.id",
	integrations: [sitemap()],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
