import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
      UnoCSS({
          injectReset: true,
      }),
      mdx()
  ]
});
