<script lang="ts">
  import { run } from 'svelte/legacy';

  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import { type BlogMetadata } from '$lib/types/blog';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import RssFeed from '$lib/components/RssFeed.svelte';
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let blogGroups: { string: { years: string[]; items: BlogMetadata[] } } | undefined = $state(undefined);
  run(() => {
    ({ blogs: blogGroups } = data);
  });
  let filteredBlogs: BlogMetadata[] = $state([]);
  run(() => {
    if (browser && $page.url.searchParams.getAll('tag').length > 0) {
      let blogs: BlogMetadata[] = [];
      const tags = $page.url.searchParams.getAll('tag');
      Object.entries(blogGroups).forEach((blogGroup) => {
        blogs.push(...blogGroup[1].items);
      });
      filteredBlogs = blogs.filter((blog: BlogMetadata) => blog.tags.some((blogTags) => tags.includes(blogTags)));
    }
  });
</script>

<svelte:head>
  <title>BenTriByte: All Blogs</title>
  <meta name="description" content="A wall of Ben Trinh's blogs" />
</svelte:head>
<div class="grid gap-4 p-4 md:p-10">
  <div class="prose flex gap-4 dark:prose-invert">
    <h1 class="m-0">Blogs</h1>
    <RssFeed />
  </div>
  {#if browser && $page.url.searchParams.getAll('tag').length === 0}
    {#each Object.entries(blogGroups) as [name, blogs]}
      <div class="grid gap-2">
        <a
          class="prose dark:prose-invert"
          aria-label={`View more ${convertKebabToTitle(name)} blogs`}
          href={`${base}/blogs/${name}`}
        >
          <h2>{convertKebabToTitle(name)}</h2>
        </a>
        <div class="grid auto-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {#each blogs.items.slice(0, 2) as blog}
            <Card
              content={blog}
              baseUrl={`${base}/blogs/${name}/${blog.date.split('-')[0]}`}
              placeholderImage="images/blogs/blog_placeholder.avif"
            />
          {/each}
        </div>
      </div>
    {/each}
  {:else if filteredBlogs.length > 0}
    <div class="grid auto-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {#each filteredBlogs as blog}
        <Card
          content={blog}
          baseUrl={`${base}/blogs/${blog.type}/${blog.date.split('-')[0]}`}
          placeholderImage="images/blogs/blog_placeholder.avif"
        />
      {/each}
    </div>
  {:else}
    <div>
      <p>There is no blogs for current filters</p>
      <a href={`${base}/blogs`} aria-label="Go back to blogs">Go back</a>
    </div>
  {/if}
</div>
