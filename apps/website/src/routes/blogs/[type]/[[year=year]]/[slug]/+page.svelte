<script lang="ts">
  import type { PageData } from './$types';

  // import type { PageData } from './$types';

  export let data: PageData;
  $: ({ content, metadata } = data);
</script>

<svelte:head><title>{metadata.title}</title></svelte:head>
<div class="prose p-10 dark:prose-invert">
  <h1 class="text-center">{metadata.title}</h1>
  <div class="mx-auto flex w-[75ch] justify-between">
    <div class="flex gap-4">
      {#each metadata.tags as tag}
        <a href={`/blogs?tag=${tag}`}>#{tag}</a>
      {/each}
    </div>
    <div>{new Date(metadata.date).toLocaleDateString()}</div>
  </div>
  <div class="mx-auto w-[75ch]">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html content}
  </div>
</div>
