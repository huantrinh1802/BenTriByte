<script
  lang="ts"
  module>
  export interface Filter {
    tag: string[] | undefined;
    type: string | null;
  }
</script>

<script lang="ts">
  import PostCard from './PostCard.svelte';
  import { Pagination } from '@skeletonlabs/skeleton-svelte';
  import IconEllipsis from '~icons/lucide/ellipsis';
  import IconArrowRight from '~icons/lucide/arrow-right';
  import IconArrowLeft from '~icons/lucide/arrow-left';
  import IconFirst from '~icons/lucide/chevron-first';
  import IconLast from '~icons/lucide/chevron-last';
  interface Props {
    posts?: any[];
    baseUrl?: string;
    filter?: Filter;
  }

  let { posts = [], baseUrl = '/', filter = { tag: [], type: null } }: Props = $props();
  let page = $state(0);
  let size = $state(10);
  let paginatedSource = $derived(posts.slice((page - 1) * size, page * size));
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
  <Pagination
    data={posts}
    {page}
    onPageChange={(e) => (page = e.page)}
    pageSize={size}
    onPageSizeChange={(e) => (size = e.pageSize)}
    siblingCount={4}>
    {#snippet labelEllipsis()}<IconEllipsis class="size-4" />{/snippet}
    {#snippet labelNext()}<IconArrowRight class="size-4" />{/snippet}
    {#snippet labelPrevious()}<IconArrowLeft class="size-4" />{/snippet}
    {#snippet labelFirst()}<IconFirst class="size-4" />{/snippet}
    {#snippet labelLast()}<IconLast class="size-4" />{/snippet}
  </Pagination>
</div>
