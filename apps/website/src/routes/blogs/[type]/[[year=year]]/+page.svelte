<script lang="ts">
  import { Pagination } from '@skeletonlabs/skeleton-svelte';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  import { goto } from '$app/navigation';
  import RssFeed from '$lib/components/RssFeed.svelte';
  import IconEllipsis from '~icons/lucide/ellipsis';
  import IconArrowRight from '~icons/lucide/arrow-right';
  import IconArrowLeft from '~icons/lucide/arrow-left';
  import IconFirst from '~icons/lucide/chevron-first';
  import IconLast from '~icons/lucide/chevron-last';
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { blogs, type, year, years } = $derived(data);
  let page = $state(1);
  let size = $state(10);
  let paginatedBlogs = $derived(blogs.slice((page - 1) * size, page * size));
</script>

<svelte:head>
  <title>{convertKebabToTitle(type)} - {year}</title>
  <meta name="description" content={`All the blogs about ${convertKebabToTitle(type)} in ${year}`} />
</svelte:head>
<div class="flex flex-col gap-4 p-10">
  <div class="prose dark:prose-invert mx-auto">
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
      class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
    >
      {#each years as yearValue (yearValue)}
        <option value={yearValue} selected={year === yearValue}>{yearValue}</option>
      {/each}
    </select>
  </div>
  <div class="grid-col-1 grid grid-flow-dense gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    {#each paginatedBlogs as item (item.slug)}
      <Card
        content={item}
        baseUrl={`${base}/blogs/${type}/${year}`}
        placeholderImage="images/blogs/blog_placeholder.avif"
      />
    {/each}
  </div>
  <div class="flex justify-between">
    <select
      name="size"
      id="size"
      class="select max-w-[150px]"
      value={size}
      onchange={(e) => (size = Number(e.currentTarget.value))}
    >
      {#each [10, 25, 50, 100] as v (v)}
        <option value={v}>{v} items</option>
      {/each}
      <option value={blogs.length}>Show All</option>
    </select>
    <!-- Pagination -->
    <Pagination
      data={blogs}
      {page}
      onPageChange={(e) => (page = e.page)}
      pageSize={size}
      onPageSizeChange={(e) => (size = e.pageSize)}
      siblingCount={4}
    >
      {#snippet labelEllipsis()}<IconEllipsis class="size-4" />{/snippet}
      {#snippet labelNext()}<IconArrowRight class="size-4" />{/snippet}
      {#snippet labelPrevious()}<IconArrowLeft class="size-4" />{/snippet}
      {#snippet labelFirst()}<IconFirst class="size-4" />{/snippet}
      {#snippet labelLast()}<IconLast class="size-4" />{/snippet}
    </Pagination>
  </div>
</div>
