<script lang="ts">
  import { run } from 'svelte/legacy';

  import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import { goto } from '$app/navigation';
  import RssFeed from '$lib/components/RssFeed.svelte';
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { blogs, type, year, years } = $derived(data);
  let paginationSettings = $state({
    page: 0,
    limit: 6,
    size: 0,
    amounts: [6, 18, 48, 96],
  } satisfies PaginationSettings);
  run(() => {
    if (blogs != null) {
      paginationSettings.size = blogs.length;
    }
  });
  let paginatedBlogs = $derived(
    blogs.slice(
      paginationSettings.page * paginationSettings.limit,
      paginationSettings.page * paginationSettings.limit + paginationSettings.limit
    )
  );
</script>

<svelte:head>
  <title>{convertKebabToTitle(type)} - {year}</title>
  <meta name="description" content={`All the blogs about ${convertKebabToTitle(type)} in ${year}`} />
</svelte:head>
<div class="flex flex-col gap-4 p-10">
  <div class="prose mx-auto dark:prose-invert">
    <div class="flex gap-4 pb-4">
      <h1 class="m-0">{convertKebabToTitle(type)}</h1>
      <RssFeed />
    </div>
    <!-- <label
      for="years"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select an option</label
    > -->
    <select
      onchange={(event) => goto(`${base}/blogs/${type}/${event.currentTarget?.value}`)}
      id="year"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    >
      {#each years as yearValue}
        <option value={yearValue} selected={year === yearValue}>{yearValue}</option>
      {/each}
    </select>
  </div>
  <div class="grid-col-1 grid grid-flow-dense gap-10 md:grid-cols-2 lg:mx-auto xl:grid-cols-3 2xl:grid-cols-4">
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
