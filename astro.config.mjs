// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gazry.dev',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
