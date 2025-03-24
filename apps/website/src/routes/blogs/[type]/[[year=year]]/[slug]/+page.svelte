<script lang="ts">
  import TOC from '~icons/mdi/table-of-contents';
  import type { PageData } from './$types';
  import { TableOfContents, popup, tocCrawler } from '@skeletonlabs/skeleton';
  import RssFeed from '$lib/components/RssFeed.svelte';

  export let data: PageData;
  $: ({ content, metadata } = data);
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
</svelte:head>

<div class="prose relative grid gap-4 p-4 dark:prose-invert md:p-10 lg:grid-cols-[1fr_20ch]">
  <button
    type="button"
    use:popup={{ event: 'click', target: 'toc', placement: 'bottom' }}
    class="variant-filled btn-icon sticky left-2 top-2 md:hidden"><TOC class="text-lg" /></button
  >
  <div
    data-popup="toc"
    class="max-h-[60dvh] w-max max-w-[80%] overflow-auto rounded-sm bg-surface-700 px-4 py-4 text-white"
  >
    <TableOfContents regionAnchor="text-white" />
  </div>

  <div class="grid gap-4">
    <RssFeed style="ml-auto" />
    <div class="mx-auto flex gap-4 pb-4">
      <h1 class="m-0 text-center">{metadata.title}</h1>
    </div>
    <div class="flex flex-col justify-between gap-4 sm:mx-auto sm:w-[min(100%,80ch)] lg:flex-row">
      <!-- <div class="flex flex-wrap gap-4">
        {#each metadata.tags as tag}
          <a href={`/blogs?tag=${tag}`}>#{tag}</a>
        {/each}
      </div> -->
      <div class="ml-auto">{new Date(metadata.date).toLocaleDateString()}</div>
    </div>
    <div class="grid py-4 prose-headings:my-0">
      <div class="mx-auto w-[min(100%,80ch)]" use:tocCrawler={{ mode: 'generate' }}>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html content}
      </div>
    </div>
    <div class="flex w-2/3 flex-wrap gap-4">
      {#each metadata.tags as tag}
        <a class="text-primary-600-300-token" href={`/blogs?tag=${tag}`}>#{tag}</a>
      {/each}
    </div>
  </div>
  <div class="relative hidden lg:block">
    <TableOfContents class="sticky top-0" regionList="pl-0" regionListItem="list-disc" />
  </div>
</div>
