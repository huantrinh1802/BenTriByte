<script lang="ts">
  import '../app.css';
  import Header from '$lib/layout/Header.svelte';
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import { sidebarOpened, toggleSidebar } from '$lib/utils/sidebar';
  import type { AfterNavigate } from '@sveltejs/kit';
  import { afterNavigate, onNavigate } from '$app/navigation';
  import Top from '~icons/mdi/arrow-top';
  import BtbIcon from '$lib/images/BtbIcon.svelte';

  // Import each language module you require
  import Navigation from '$lib/layout/Navigation.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import Footer from '$lib/layout/Footer.svelte';
  import type { PageData } from './$types';
  import LightSwitch from '$lib/components/LightSwitch.svelte';
  interface Props {
    data: PageData;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
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

<div class="app-container">
  <header id="header" class="lg:hidden">
    <Header {menuItems} />
  </header>
  <aside id="sidebar" class="w-4/5 lg:w-80 lg:block sm:hidden" class:opened={$sidebarOpened}>
    <div class="bg-surface-200-800 h-full flex-col gap-6 pl-4 pt-4 md:flex print:!hidden">
      <a class="flex flex-col items-center gap-2 bg-transparent" aria-label="Home" href={`${base}/`}>
        <BtbIcon bg="bg-transparency px-2 h-16 w-16" partColor="dark:fill-white fill-primary-800" />
        <p style="font-family: 'Santanelli';">BenTri Byte</p>
      </a>
      <Navigation {menuItems} />
      <div class="mx-atuo flex w-full justify-center pb-4"><LightSwitch /></div>
    </div>

  </aside>
  <main id="main">
    {@render children?.()}
    <Footer className="sm:hidden" {socials} />
  </main>
  <Footer className="hidden sm:block" {socials} />
</div>
<button
  type="button"
  aria-label="Go to top"
  onclick={() => {
    const sections = document.querySelector('#sections');
    if (sections != null) {
      sections.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector('#page').scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
  class="preset-filled btn-icon fixed right-4 bottom-10 print:hidden"><Top /></button
>
