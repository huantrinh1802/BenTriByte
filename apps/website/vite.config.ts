import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import Icons from 'unplugin-icons/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    sveltekit(),
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
    transformer: 'postcss'
  },
  assetsInclude: ['**/*.svx', '**/*.md'],
  resolve: {
    alias: {
      $contents: './src/contents',
    },
  },
});
