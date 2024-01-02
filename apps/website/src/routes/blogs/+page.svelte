<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import { type BlogMetadata } from '$lib/types/blog';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  export let data: PageData;
  let blogGroups: { string: BlogMetadata[] } | undefined = undefined;
  $: ({ blogs: blogGroups } = data);
  //   let paginationSettings = {
  //     page: 0,
  //     limit: 5,
  //     size:  blogs.length*3,
  //     amounts: [1, 2, 5, 10],
  // } satisfies PaginationSettings;
  // $: paginatedBlogs = [...blogs, ...blogs, ...blogs].slice(
  // 	paginationSettings.page * paginationSettings.limit,
  // 	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
  // );
</script>

<!-- <div class="flex gap-4 flex-col p-10">
  <div class="grid-col-1 grid-flow-dense grid gap-10 md:grid-cols-2 lg:mx-auto lg:grid-cols-3">
    {#each paginatedBlogs as item}
      <Card content={item} baseUrl="/blogs"/>
    {/each}
  </div>
  <Paginator bind:settings={paginationSettings}/>
</div> -->
<div class="prose p-4 dark:prose-invert md:p-10">
  <h1>Blogs</h1>
  {#each Object.entries(blogGroups) as [name, blogs]}
    <div class="">
      <h2>{convertKebabToTitle(name)}</h2>
      <div class="grid auto-rows-auto gap-4 md:grid-cols-3">
        {#each blogs.slice(0, 2) as blog}
          <Card
            content={blog}
            baseUrl={`${base}/blogs/${name}`} />
        {/each}
      </div>
    </div>
  {/each}
</div>
