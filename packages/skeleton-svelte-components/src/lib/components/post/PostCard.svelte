<script lang="ts">
  interface Props {
    post: any;
    baseUrl?: string;
  }

  let { post, baseUrl = '/' }: Props = $props();
</script>

<article class="@container w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
  <div class="@xs:flex-row mb-5 flex flex-col items-center gap-2 text-gray-500">
    <span class="text-primary-800-200 @xs:hidden ml-auto justify-self-end text-sm">{new Date(post.date).toLocaleDateString()}</span>
    <div class="flex w-full flex-wrap gap-2">
      {#each post?.tags as tag}
        <span class="!dark:text-primary-800 bg-primary-100 !text-primary-800 dark:bg-primary-200 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
          <a href={`${baseUrl}?tag=${tag}`}>#{tag}</a>
        </span>
      {/each}
    </div>
    <span class="text-primary-800-200 @xs:block ml-auto hidden justify-self-end text-sm">{new Date(post.date).toLocaleDateString()}</span>
  </div>
  <div class="@md:flex-row flex flex-col place-items-center gap-4">
    <img
      class=" @md:h-full @md:w-1/3 h-fit w-full rounded-md object-fill"
      src={post?.coverImage?.url}
      alt="" />
    <div class="w-full">
      <h4 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"><a href={`${baseUrl}/${post?.slug}`}>{post?.title}</a></h4>
      <p class="text-primary-800-200 mb-5 font-light">{post?.summary}</p>
      <div class="flex items-center justify-between">
        <a
          href={`${baseUrl}/${post?.slug}`}
          class="text-primary-600 dark:text-primary-500 ml-auto inline-flex items-center font-medium hover:underline">
          Read more
          <svg
            class="ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" /></svg>
        </a>
      </div>
    </div>
  </div>
</article>
