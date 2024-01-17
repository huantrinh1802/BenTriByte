import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import Icons from 'unplugin-icons/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { enhancedImages } from '@sveltejs/enhanced-img';
export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    purgeCss({
      safelist: {
        // any selectors that begin with "hljs-" will not be purged
        greedy: [/^hljs-/, /.*\/.*/],
      },
    }),
    ViteImageOptimizer(),
    Icons({
      compiler: 'svelte',
    }),
  ],
  histoire: {
    plugins: [HstSvelte()],
    setupFile: './src/histoire.setup.ts',
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
  },
  css: {
    transformer: 'postcss',
  },
  assetsInclude: ['**/*.svx', '**/*.md'],
  resolve: {
    alias: {
      $contents: './src/contents',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
