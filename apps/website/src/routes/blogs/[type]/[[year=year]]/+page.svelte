<script lang="ts">
  import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import { goto } from '$app/navigation';
  import RSS from '~icons/foundation/rss';
  export let data: PageData;
  $: ({ blogs, type, year, years } = data);
  let paginationSettings = {
    page: 0,
    limit: 6,
    size: 0,
    amounts: [6, 18, 48, 96],
  } satisfies PaginationSettings;
  $: {
    if (blogs != null) {
      paginationSettings.size = blogs.length;
    }
  }
  $: paginatedBlogs = blogs.slice(paginationSettings.page * paginationSettings.limit, paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
</script>

<svelte:head><title>{convertKebabToTitle(type)} - {year}</title></svelte:head>
<div class="flex flex-col gap-4 p-10">
  <div class="prose mx-auto dark:prose-invert">
    <div class="flex gap-4 pb-4">
      <h1 class="m-0">{convertKebabToTitle(type)}</h1>
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
    <!-- <label
      for="years"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select an option</label
    > -->
    <select
      on:change={(event) => goto(`${base}/blogs/${type}/${event.currentTarget?.value}`)}
      id="year"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    >
      {#each years as yearValue}
        <option
          value={yearValue}
          selected={year === yearValue}>{yearValue}</option
        >
      {/each}
    </select>
  </div>
  <div class="grid-col-1 grid grid-flow-dense gap-10 md:grid-cols-2 lg:mx-auto lg:grid-cols-3">
    {#each paginatedBlogs as item}
      <Card
        content={item}
        baseUrl={`${base}/blogs/${type}/${year}`}
        placeholderImage="images/blogs/blog_placeholder.avif"
      />
    {/each}
  </div>
  <Paginator bind:settings={paginationSettings} />
</div>
