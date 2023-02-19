module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 200,
  "pluginSearchDirs": false,
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleAttributePerLine": true,
  "useTabs": false,
  "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
  "plugins": ["prettier-plugin-svelte", "prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"]
};