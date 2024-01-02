// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

import { customTheme } from './custom-theme';

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,svx}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100dvw', // add required value here
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), skeleton({ themes: { custom: [customTheme] } })],
};

export default config;
