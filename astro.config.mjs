import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  image: {
    service: { type: "compile" }, // ← 这里是对象
  },
  site: process.env.SITE_URL || "https://war3maps.net/",
  integrations: [icon()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
