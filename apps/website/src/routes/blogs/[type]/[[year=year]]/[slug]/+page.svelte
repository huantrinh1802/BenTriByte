<script lang="ts">
  import { base } from '$app/paths';
  import RSS from '~icons/foundation/rss';
  import TOC from '~icons/mdi/table-of-contents';
  import type { PageData } from './$types';
  import { TableOfContents, popup, tocCrawler } from '@skeletonlabs/skeleton';

  export let data: PageData;
  $: ({ content, metadata } = data);
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
</svelte:head>

<div class="prose relative grid gap-4 p-10 dark:prose-invert lg:grid-cols-[1fr_20ch]">
  <button
    type="button"
    use:popup={{ event: 'click', target: 'toc', placement: 'bottom' }}
    class="variant-filled btn-icon sticky left-4 top-10 md:hidden"><TOC class="text-lg" /></button
  >
  <div data-popup="toc" class="max-h-[60dvh] w-max max-w-[80%] overflow-auto rounded-sm bg-surface-700 px-4 py-4">
    <TableOfContents />
  </div>

  <div class="grid gap-4">
    <div class="flex gap-4 pb-4">
      <h1 class="m-0 text-center">{metadata.title}</h1>
      <a
        title="Subscribe to RSS"
        aria-label="Subscribe to RSS"
        target="_blank"
        href={`${base}/blogs/feed`}
        class="btn btn-icon flex h-10 w-10 bg-primary-500"
      >
        <RSS class=" text-2xl" /></a
      >
    </div>
    <div class="flex flex-col justify-between gap-4 sm:mx-auto sm:w-[min(100%,80ch)] lg:flex-row">
      <div class="flex flex-wrap gap-4">
        {#each metadata.tags as tag}
          <a href={`/blogs?tag=${tag}`}>#{tag}</a>
        {/each}
      </div>
      <div class="ml-auto">{new Date(metadata.date).toLocaleDateString()}</div>
    </div>
    <div class="grid py-4 prose-headings:my-0">
      <div class="mx-auto w-[min(100%,80ch)]" use:tocCrawler={{ mode: 'generate' }}>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html content}
      </div>
    </div>
  </div>
  <div class="relative hidden lg:block">
    <TableOfContents class="sticky top-0" regionList="pl-0" regionListItem="list-disc" />
  </div>
</div>
