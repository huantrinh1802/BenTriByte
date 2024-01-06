import { HstSvelte } from '@histoire/plugin-svelte';
import { defineConfig } from 'histoire';
import path from 'path';

export default defineConfig({
  setupFile: '/src/histoire.setup.ts',
  plugins: [HstSvelte()],
  viteIgnorePlugins: ['vite-plugin-sveltekit-compile'],
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
    },
  },
});
