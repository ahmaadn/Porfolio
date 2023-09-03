import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: squooshImageService()
  },
  output: "server",
  adapter: netlify()
});