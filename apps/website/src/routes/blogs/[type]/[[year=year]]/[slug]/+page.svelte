<script lang="ts">
  import TOC from '~icons/mdi/table-of-contents';
  import type { PageData } from './$types';
  import RssFeed from '$lib/components/RssFeed.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { content, metadata } = $derived(data);
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
</svelte:head>

<div class="prose dark:prose-invert relative grid gap-4 p-4 md:p-10 lg:grid-cols-[1fr_20ch]">
  <!-- <div -->
  <!--   data-popup="toc" -->
  <!--   class="max-h-[60dvh] w-max max-w-[80%] overflow-auto rounded-sm bg-surface-700 px-4 py-4 text-white" -->
  <!-- > -->
  <!--   <TableOfContents regionAnchor="text-white" /> -->
  <!-- </div> -->

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
    <div class="prose-headings:my-0 grid py-4">
      <!-- <div class="mx-auto w-[min(100%,80ch)]" use:tocCrawler={{ mode: 'generate' }}> -->
      <div class="mx-auto w-[min(100%,80ch)]">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <!-- {@render content} -->
        <svelte:component this={content} />
      </div>
    </div>
    <div class="flex w-2/3 flex-wrap gap-4">
      {#each metadata.tags as tag (tag)}
        <a class="text-primary-700-300" href={`/blogs?tag=${tag}`}>#{tag}</a>
      {/each}
    </div>
  </div>
  <div class="relative hidden lg:block">
    <!-- <TableOfContents class="sticky top-0" regionList="pl-0" regionListItem="list-disc" /> -->
  </div>
</div>
