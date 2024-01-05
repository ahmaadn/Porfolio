import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
});
