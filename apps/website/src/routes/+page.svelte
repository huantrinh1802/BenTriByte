<script lang="ts">
  import TypeWriter from '$lib/components/TypeWriter.svelte';
  import AboutMe from '$contents/about-me.md';
  import HeroImage from '$lib/images/hero.avif?enhanced';
  import { base } from '$app/paths';

  let helloName = 'World';
  let typewriter;
  let timer;
  const debounce = (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      helloName = event.target.value;
      if (helloName.length === 0) {
        helloName = 'World';
      }
      typewriter.reset();
    }, 900);
  };
</script>

<svelte:head><title>Ben Trinh's Homepage</title></svelte:head>
<div
  id="sections"
  class="w-full gap-4 overflow-y-auto p-4 max-md:grid sm:px-10 md:snap-y md:snap-mandatory xl:h-[calc(100dvh-100px)]"
>
  <section
    class="ks-hero-section hide-scrollbar grid snap-end grid-cols-1 gap-10 overflow-y-auto sm:p-4 md:h-full md:grid-cols-2 md:gap-10"
  >
    <div class="my-auto flex flex-col gap-4">
      <div class="my-auto flex flex-col gap-4">
        <TypeWriter
          style="xl:text-4xl lg:text-xl text-md md:min-w-[50%]"
          words={`Hello {{${helloName}}},`}
          bind:this={typewriter}
        />
        <input
          placeholder="Your name"
          maxlength="24"
          class={`${
            helloName.length > 12 ? 'w-64' : 'w-40'
          } focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none`}
          on:input={debounce}
        />
      </div>
      <!-- <p class="font-serif">My name is Ben.</p>
      <p class="font-serif">Welcome to my page,</p> -->
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <a href={`${base}#intro`} class="variant-filled-primary btn font-serif">Introduction</a>
        <a href={`${base}/skills`} class="variant-filled-primary btn font-serif">Skills</a>
        <a href={`${base}/resume`} class="variant-filled-primary btn font-serif">Resume</a>
        <a href={`${base}/blogs`} class="variant-filled-primary btn font-serif">Blogs</a>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <enhanced:img
        sizes="(min-width:1920px) 400px, (min-width:1080px) 400px, (min-width:768px) 240px, (max-width:768) 240px"
        class="relative mx-auto my-auto w-full max-w-[400px] rounded-3xl object-cover max-sm:w-[240px]"
        src={HeroImage}
        alt="BenTri Byte Hero"
      />
    </div>
  </section>
  <section
    id="intro"
    class="ks-section prose hide-scrollbar overflow-y-auto dark:prose-invert prose-headings:my-0 prose-p:my-0 md:h-full"
  >
    <AboutMe />
  </section>
</div>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex snap-start flex-col gap-4 px-4 sm:w-[min(100%,80ch)] md:justify-center;
  }
</style>
