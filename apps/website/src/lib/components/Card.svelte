<script lang="ts">
  import { base } from '$app/paths';
  import type { BlogMetadata } from '$lib/types/blog';
  export let content: BlogMetadata;
  export let baseUrl = '/';
  export let placeholderImage: string;
</script>

<article
  class="@container card grid w-full gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
>
  <div class="@xs:flex-row flex flex-col items-center gap-2 text-gray-500">
    <div class="flex w-full flex-wrap gap-2">
      {#each content?.tags as tag}
        <span
          class="inline-flex items-center rounded bg-primary-600 px-2.5 py-1 text-base font-medium text-white dark:bg-primary-500"
        >
          <a class="text-inherit" href={`${baseUrl}?tag=${tag}`}>#{tag}</a>
        </span>
      {/each}
    </div>
    <span class="@xs:block text-primary-700-200-token ml-auto hidden justify-self-end text-sm"
      >{new Date(content.date).toLocaleDateString()}</span
    >
  </div>
  <span class="@xs:hidden text-primary-700-200-token ml-auto justify-self-end text-sm"
    >{new Date(content.date).toLocaleDateString()}</span
  >
  <div class="@md:flex-row flex flex-col gap-4">
    <a class="@md:h-full mx-auto my-0 h-fit w-full" href={`${baseUrl}/${content?.slug}`}>
      <img
        loading="lazy"
        class="rounded-md object-fill"
        src={`${base}/${content?.preview ?? placeholderImage}`}
        alt="Blog's preview"
      />
    </a>
    <!-- <div class="flex h-full w-full"> -->
    <h4 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href={`${baseUrl}/${content?.slug}`}>{content?.title}</a>
    </h4>
    <!-- <p class="text-primary-700-200-token font-light">{content?.summary}</p> -->
    <!-- </div> -->
  </div>
  <div class="flex items-center">
    <a
      href={`${baseUrl}/${content?.slug}`}
      class="ml-auto inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400"
    >
      Read more
      <svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </a>
  </div>
</article>

<style lang="postcss">
  .card {
    grid-template-rows: subgrid;
    grid-row: span 4;
  }
</style>
