import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	image: {
		service: squooshImageService(),
	},
});
