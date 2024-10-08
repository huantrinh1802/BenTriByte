<script lang="ts">
  import '../app.postcss';
  import 'highlight.js/styles/github-dark.css';
  import {
    AppShell,
    Drawer,
    LightSwitch,
    setInitialClassState,
    storePopup,
    initializeStores,
    getDrawerStore,
  } from '@skeletonlabs/skeleton';
  import Header from '$lib/layout/Header.svelte';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import type { AfterNavigate } from '@sveltejs/kit';
  import { afterNavigate, onNavigate } from '$app/navigation';
  import Top from '~icons/mdi/arrow-top';
  import BtbIcon from '$lib/images/BtbIcon.svelte';
  import { computePosition, autoUpdate, offset, shift, flip, arrow, hide } from '@floating-ui/dom';

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
  import { convertKebabToTitle } from '$lib/utils/strings';
  import Footer from '$lib/layout/Footer.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
  onNavigate((navigation) => {
    if (!document.startViewTransition || navigation.from === navigation.to) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  afterNavigate((params: AfterNavigate) => {
    const isNewPage: boolean = params.from?.url.pathname !== params.to?.url.pathname;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage !== null) {
      elemPage.scrollTop = 0;
    }
  });
  hljs.registerLanguage('xml', xml); // for HTML
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('shell', shell);
  hljs.registerLanguage('python', python);
  storeHighlightJs.set(hljs);
  initializeStores();
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow, hide });
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
    {
      name: 'About',
      id: 'about',
      // href: `${base}/skills`,
      subItems: [
        { name: 'Me', id: 'intro', href: `${base}/#intro` },
        { name: 'Skills', id: 'skills', href: `${base}/skills` },
        { name: 'Projects', id: 'projects', href: `${base}/projects` },
        { name: 'Resume', id: 'resume', href: `${base}/resume/ben-trinh` },
      ],
    },
    {
      name: 'Blogs',
      id: 'blogs',
      subItems: [
        { id: 'all-blogs', name: 'All Blogs', href: `${base}/blogs` },
        ...Object.keys(data.blogs).map((blog) => {
          return { id: blog, name: convertKebabToTitle(blog), href: `${base}/blogs/${blog}` };
        }),
      ],
    },
  ];
  const socials = [
    { href: 'https://www.github.com/huantrinh1802', name: 'GitHub', label: 'gh/huantrinh1802' },
    { href: 'https://www.linkedin.com/in/huantrinh1802', name: 'LinkedIn', label: 'in/huantrinh1802' },
  ];
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>
<Drawer width="lg:w-80 w-4/5">
  {#if $drawerStore.id === 'sidebar'}
    <div class="flex flex-col gap-4 pb-4">
      <button
        aria-label="Toggle sidebar"
        on:click={() => drawerStore.close()}
        type="button"
        class="ml-auto inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Close main menu</span>
        <svg class="h-6 w-6 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
          ><path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          /></svg
        >
      </button>
      <Navigation {menuItems} />
    </div>
  {/if}
</Drawer>
<AppShell slotPageContent="print:bg-white" scrollbarGutter="stable">
  <svelte:fragment slot="header">
    <div class="md:hidden print:hidden">
      <Header {menuItems} />
    </div>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <div class="bg-surface-200-700-token hidden h-full flex-col gap-6 pl-4 pt-4 md:flex print:!hidden">
      <a class="flex flex-col items-center gap-2 bg-transparent" aria-label="Home" href={`${base}/`}>
        <BtbIcon bg="bg-transparency px-2 h-16 w-16" partColor="dark:fill-white fill-primary-800" />
        <p style="font-family: 'Santanelli';">BenTri Byte</p>
      </a>
      <Navigation {menuItems} />
      <div class="mx-atuo flex w-full justify-center pb-4"><LightSwitch /></div>
    </div>
  </svelte:fragment>
  <!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
  <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">
    <Footer {socials} />
  </svelte:fragment>
  <svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
<button
  type="button"
  aria-label="Go to top"
  on:click={() => {
    const sections = document.querySelector('#sections');
    if (sections != null) {
      sections.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector('#page').scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
  class="variant-filled btn-icon fixed bottom-10 right-4 print:hidden"><Top /></button
>
