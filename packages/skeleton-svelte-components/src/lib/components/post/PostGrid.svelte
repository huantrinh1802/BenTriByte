<script
  lang="ts"
  context="module">
  export interface Filter {
    tag: string[] | undefined;
    type: string | null;
  }
</script>

<script lang="ts">
  import PostCard from './PostCard.svelte';
  import { Paginator } from '@skeletonlabs/skeleton';
  export let posts: any[] = [];
  export let baseUrl = '/';
  export let filter: Filter = { tag: [], type: null };
  let page = {
    page: 0,
    limit: 15,
    size: posts.length,
    amounts: [15, 25],
  };
  $: page.size = posts.length;
  $: paginatedSource = posts.slice(
    page.page * page.limit, // start
    page.page * page.limit + page.limit // end
  );
  function checkTags(tags: string[]) {
    return tags.some((t) => filter?.tag?.includes(t));
  }
</script>

<div class="grid-col-1 mb-6 grid gap-10 md:grid-cols-2 lg:mx-auto lg:w-3/4 lg:grid-cols-3">
  {#each paginatedSource as post}
    {#if (filter?.tag?.length === 0 && filter.type === null) || (filter.tag !== undefined && filter.tag.length !== 0 && checkTags(post.tags)) || (filter.type !== null && post.type.toLowerCase() === filter?.type)}
      <PostCard
        {post}
        {baseUrl} />
    {/if}
  {/each}
</div>
<div class="mx-auto w-2/3 md:w-3/4">
  <Paginator bind:settings={page} />
</div>
