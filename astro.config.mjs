import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  	integrations: [
		tailwind({
   		applyBaseStyles: false,
  	}),
  	react(), compress()
	],
});
