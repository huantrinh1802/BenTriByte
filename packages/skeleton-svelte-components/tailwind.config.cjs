/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4)/,
    },
  ],
  theme: {
    extend: {},
  },
  // @ts-ignore
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography'), ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
};
