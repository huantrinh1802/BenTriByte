import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: mdsvexConfig.extensions?.concat('.svelte'),

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    // sveltePreprocess({
    //   postcss: {
    //     configFilePath: join(__dirname, 'postcss.config.cjs'),
    //   },
    // }),
    vitePreprocess(),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    csp: {
      directives: {},
      reportOnly: {
        'report-uri': ['http://localhost:5174'],
      },
    },
    adapter: adapter({
      strict: true,
      precompress: true,
    }),
    alias: {
      $contents: path.resolve('./src/contents'),
    },
    prerender: {
      entries: ['/blogs/', '/projects/', '/sitemaps.xml', '/blogs/feed', '/resume', '/resume/amber-duong'],
    },
    paths: {
      // @ts-ignore
      base: dev ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;
