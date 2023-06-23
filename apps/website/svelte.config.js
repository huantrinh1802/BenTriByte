import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $contents: path.resolve('./src/contents'),
    },
    prerender: {
      entries: ['/blogs/first-blog', '/blogs/'],
    },
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;
