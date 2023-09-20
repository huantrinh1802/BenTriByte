module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:svelte/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  rules: { 'svelte/no-at-html-tags': 'warn' },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  globals: {
    NodeJS: true,
  },
  // settings: {
  //   'svelte3/typescript': () => require('typescript'),
  // },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
