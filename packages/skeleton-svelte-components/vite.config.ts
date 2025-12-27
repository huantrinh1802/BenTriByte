import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import Icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), Icons({ compiler: 'svelte' })],
  css: {
    transformer: 'postcss',
  },
  histoire: {
    plugins: [HstSvelte(), tailwindcss],
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
});
