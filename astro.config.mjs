import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), astroImageTools]
});
