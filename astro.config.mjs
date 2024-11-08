import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'never'
      },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'synthwave-84',
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  renderers: ['@astrojs/renderer-react'],
  site: 'https://portfolio.github.io',
  integrations: [mdx(), sitemap(), react(), purgecss({
    keyframes: false,
    safelist :{
      greedy: [/*astro*/]
    }
  })]
});