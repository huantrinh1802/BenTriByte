<script lang="ts">
  import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import Card from '$lib/components/Card.svelte';
  export let data: PageData;
  $: ({ blogs, type } = data);
  let paginationSettings = {
    page: 0,
    limit: 6,
    size: 0,
    amounts: [6, 18, 48, 96],
  } satisfies PaginationSettings;
  $: {
    if (blogs != null) {
      paginationSettings.size = blogs.length * 3;
    }
  }
  $: paginatedBlogs = [...blogs, ...blogs, ...blogs].slice(paginationSettings.page * paginationSettings.limit, paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
</script>

<div class="flex flex-col gap-4 p-10">
  <div class="grid-col-1 grid grid-flow-dense gap-10 md:grid-cols-2 lg:mx-auto lg:grid-cols-3">
    {#each paginatedBlogs as item}
      <Card
        content={item}
        baseUrl={`${base}/blogs/${type}`} />
    {/each}
  </div>
  <Paginator bind:settings={paginationSettings} />
</div>
