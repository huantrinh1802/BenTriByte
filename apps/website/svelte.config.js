import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { fileURLToPath } from 'url';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
const dev = process.argv.includes('dev');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: mdsvexConfig.extensions?.concat('.svelte'),

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: { configFilePath: path.join(__dirname, 'postcss.config.cjs') },
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter({
      strict: true
    }),
    alias: {
      $contents: path.resolve('./src/contents'),
    },
    prerender: {
      entries: ['/blogs/', '/projects/'],
    },
    paths: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      base: dev ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;
