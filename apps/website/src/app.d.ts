// See https://kit.svelte.dev/docs/types#app
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface MdsvexFile {
      default: import('svelte/internal').SvelteComponent;
      metadata: Record<string, string>;
    }

    type MdsvexResolver = () => Promise<MdsvexFile>;
  }
  declare module '*.md';
  declare module '*.svx';
}

export {};
