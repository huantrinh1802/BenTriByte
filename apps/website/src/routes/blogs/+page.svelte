<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';
  import { type BlogMetadata } from '$lib/types/blog';
  import Card from '$lib/components/Card.svelte';
  import { convertKebabToTitle } from '$lib/utils/strings';
  export let data: PageData;
  let blogGroups: { string: { years: string[]; items: BlogMetadata[] } } | undefined = undefined;
  $: ({ blogs: blogGroups } = data);
</script>

<svelte:head><title>Ben Trinh's All Blogs</title></svelte:head>
<div class="prose p-4 dark:prose-invert md:p-10">
  <h1>Blogs</h1>
  {#each Object.entries(blogGroups) as [name, blogs]}
    <div class="">
      <h2>{convertKebabToTitle(name)}</h2>
      <div class="grid auto-rows-auto gap-4 md:grid-cols-3">
        {#each blogs.items.slice(0, 2) as blog}
          <Card
            content={blog}
            baseUrl={`${base}/blogs/${name}/${blog.date.split('-')[0]}`}
            placeholderImage='images/blogs/blog_placeholder.avif'
          />
        {/each}
      </div>
    </div>
  {/each}
</div>
