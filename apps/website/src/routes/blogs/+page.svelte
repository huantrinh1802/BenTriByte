<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import { type BlogMetadata } from '$lib/types/blog';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import RSS from '~icons/foundation/rss';
  export let data: PageData;
  let blogGroups: { string: { years: string[]; items: BlogMetadata[] } } | undefined = undefined;
  $: ({ blogs: blogGroups } = data);
  let filteredBlogs: BlogMetadata[] = [];
  $: {
    if (browser && $page.url.searchParams.getAll('tag').length > 0) {
      let blogs: BlogMetadata[] = [];
      const tags = $page.url.searchParams.getAll('tag');
      Object.entries(blogGroups).forEach((blogGroup) => {
        blogs.push(...blogGroup[1].items);
      });
      filteredBlogs = blogs.filter((blog: BlogMetadata) => blog.tags.some((blogTags) => tags.includes(blogTags)));
    }
  }
</script>

<svelte:head>
  <title>Ben Trinh's All Blogs</title>
  <meta name="description" content="A wall of Ben Trinh's blogs" />
</svelte:head>
<div class="prose p-4 dark:prose-invert md:p-10">
  <div class="flex gap-4">
    <h1 class="m-0">Blogs</h1>
    <a
      title="Subscribe to RSS"
      aria-label="Subscribe to RSS"
      target="_blank"
      href={`${base}/blogs/feed`}
      class="btn btn-icon flex bg-primary-500"
    >
      <RSS class=" text-2xl" /></a
    >
  </div>
  {#if browser && $page.url.searchParams.getAll('tag').length === 0}
    {#each Object.entries(blogGroups) as [name, blogs]}
      <div>
        <a aria-label={`View more ${convertKebabToTitle(name)} blogs`} href={`${base}/blogs/${name}`}>
          <h2>{convertKebabToTitle(name)}</h2>
        </a>
        <div class="grid auto-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    <div class="grid auto-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
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
