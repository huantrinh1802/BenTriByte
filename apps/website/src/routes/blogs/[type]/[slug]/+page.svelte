<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: ({content, metadata} = data);
</script>

<div class="prose dark:prose-invert p-10">
  <h1 class="text-center">{metadata.title}</h1>
  <div class="flex justify-between">
    <div class="flex gap-4">
      {#each metadata.tags as tag}
        <a href={`/blogs?tag=${tag}`}>#{tag}</a>
      {/each}
    </div>
    <div>{new Date(metadata.date).toLocaleDateString()}</div>
  </div>
    {@html content}
</div>
