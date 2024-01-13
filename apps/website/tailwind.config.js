// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

import { customTheme } from './custom-theme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,svx}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts,svx}')],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100dvw', // add required value here
            h1: {
              textWrap: 'balance',
            },
            h2: {
              textWrap: 'balance',
            },
            h3: {
              textWrap: 'balance',
            },
            h4: {
              textWrap: 'balance',
            },
            p: {
              // maxWidth: "var(--p-max-width, 65ch)",
              textWrap: 'pretty',
            },
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), skeleton({ themes: { custom: [customTheme] } })],
};
