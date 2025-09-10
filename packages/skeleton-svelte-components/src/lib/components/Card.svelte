<script
  module
  lang="ts">
  export interface CardContent {
    title: string;
    contentImage: any;
    imgAlt: string;
    content: any;
  }
</script>

<script lang="ts">
  interface Props {
    twStyle?: string;
    reverse?: boolean;
    // export let class: string = '';
    content: CardContent | null;
  }

  let { twStyle = 'w-full', reverse = false, content }: Props = $props();
</script>

<section class={` ${twStyle}`}>
  <div
    class="mle-card x-auto flex max-w-screen-xl flex-col gap-4 px-4 py-8"
    class:sm:flex-row-reverse={reverse}
    class:sm:flex-row={!reverse}>
    <div class="mle-card-image flex items-center justify-center rounded-md md:mt-0 md:basis-1/4 lg:flex">
      <img
        class="rounded-md"
        src={content?.contentImage.url}
        alt={content?.imgAlt} />
    </div>
    <div class="mle-card-content mr-auto grid grid-flow-row gap-4 place-self-center md:basis-3/4">
      <!-- <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">{content.title}</h1> -->
      <h2 class="leading-none tracking-tight">{content?.title}</h2>
      <div class="prose dark:prose-invert max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
        {@html content?.content.html}
      </div>
    </div>
  </div>
</section>
