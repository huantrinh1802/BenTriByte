<script lang="ts">
  import '../app.postcss';
  import 'highlight.js/styles/github-dark.css';
  import { AppShell, Drawer } from '@skeletonlabs/skeleton';
  import Header from '$lib/layout/Header.svelte';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
  import hljs from 'highlight.js/lib/core';

  // Import each language module you require
  import xml from 'highlight.js/lib/languages/xml'; // for HTML
  import css from 'highlight.js/lib/languages/css';
  import json from 'highlight.js/lib/languages/json';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import shell from 'highlight.js/lib/languages/shell';
  import python from 'highlight.js/lib/languages/python';
  import { storeHighlightJs } from '@skeletonlabs/skeleton';
  import Navigation from '$lib/layout/Navigation.svelte';
  hljs.registerLanguage('xml', xml); // for HTML
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('shell', shell);
  hljs.registerLanguage('python', python);
  storeHighlightJs.set(hljs);
  initializeStores();
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
  const drawerStore = getDrawerStore();
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      } else {
        entry.target.classList.remove('animate-fadeIn');
      }
    });
  };
  if (browser) {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.show-on-scroll');
    targets.forEach(function (target) {
      target.classList.add('opacity-0');
      observer.observe(target);
    });
  }
  const menuItems = [
    { name: 'Home', id: 'hone', href: `${base}/` },
    { name: 'My Resume', id: 'resume', href: `${base}/resume` },
    {
      name: 'Blogs',
      id: 'blogs',
      subItems: [
        { id: 'all-blogs', name: 'All Blogs', href: `${base}/blogs` },
        { id: 'today-i-learn', name: 'Today I Learn', href: `${base}/blogs/today-i-learn` },
      ],
    },
  ];
</script>

<Drawer width="lg:w-80 w-4/5">
  {#if $drawerStore.id === 'sidebar'}
    <div class="flex flex-col">
      <button
        on:click={() => drawerStore.close()}
        type="button"
        class="ml-auto inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
        aria-controls="mobile-menu-2"
        aria-expanded="false">
        <span class="sr-only">Close main menu</span>
        <svg
          class="dark: h-6 w-6 fill-primary-800 dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          ><path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
      </button>
      <!-- <Navigation {menuItems} /> -->
    </div>
  {/if}
</Drawer>
<AppShell slotPageContent="print:bg-white">
  <svelte:fragment slot="header">
    <div class="print:hidden">
      <Header {menuItems} />
    </div>
  </svelte:fragment>
  <!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
  <!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
  <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
  <!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
