<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const { blogs } = data;
  $: console.log(blogs);
</script>

{#each blogs as item}
  <div class="prose prose-invert">
    {JSON.stringify(item)}
    <img
      src={item.preview}
      alt=""
      loading="lazy"
    />
  </div>
{/each}
