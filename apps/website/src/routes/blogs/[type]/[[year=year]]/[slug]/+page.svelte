<script lang="ts">
  import type { PageData } from './$types';
  import { TableOfContents, popup, tocCrawler } from '@skeletonlabs/skeleton';
  // import type { PageData } from './$types';

  export let data: PageData;
  $: ({ content, metadata } = data);
</script>

<svelte:head><title>{metadata.title}</title></svelte:head>
<div class="relative prose p-10 dark:prose-invert">
  <button
    type="button"
    use:popup={{ event: 'click', target: 'toc', placement: 'bottom' }}
    class="variant-filled btn-icon fixed top-20 left-4">TOC</button
  >
  <div data-popup="toc" class="bg-surface-700 px-4 py-4 w-max max-w-[80%] rounded-sm max-h-[60dvh] overflow-auto">
    <TableOfContents/>

  </div>
  <h1 class="text-center">{metadata.title}</h1>
  <div class="flex flex-col justify-between gap-4 sm:mx-auto sm:w-[75ch]">
    <div class="flex flex-wrap gap-4">
      {#each metadata.tags as tag}
        <a href={`/blogs?tag=${tag}`}>#{tag}</a>
      {/each}
    </div>
    <div class="ml-auto">{new Date(metadata.date).toLocaleDateString()}</div>
  </div>
  <div class="grid py-4 prose-headings:my-0 md:grid-cols-[20ch_1fr]">
    <div class="relative hidden md:block">
      <TableOfContents
        class="sticky top-0"
        regionList="pl-0"
        regionListItem="list-disc"
      />
    </div>
    <div
      class="mx-auto w-[min(100%,80ch)]"
      use:tocCrawler={{ mode: 'generate' }}
    >
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html content}
    </div>
  </div>
</div>
