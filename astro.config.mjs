import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.ahmaadn.my.id",
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
