import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.mdmygroup.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
  },
  output: 'static',
  // Add configuration for content directory
  contentDir: './content',

  // image: {
  //   optimize: true,
  // },

  // seo: {
  //   title: 'My Astro Blog',
  //   description: 'A blog built with Astro and MDX',
  // },
  

  // seoConfig: {
  //   author: 'Your Name',
  //   keywords: ['Astro', 'MDX', 'Blog'],
  // },
  

  // additionalSeo: {
  //   robots: 'index, follow',
  //   ogImage: 'https://example.com/image.png',
  // },
});