<script lang="ts">
  import TypeWriter from '$lib/components/TypeWriter.svelte';
  import AboutMe from '$contents/about-me.md';
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
  class="h-[calc(100dvh-var(--sk-header-height)-198px)] w-screen snap-y snap-mandatory overflow-y-auto px-4 sm:h-[calc(100dvh-var(--sk-header-height)-204px)] sm:px-10"
>
  <section class="ks-hero-section show-on-scroll hide-scrollbar grid h-full snap-start grid-cols-1 gap-10 overflow-y-auto p-4 md:grid-cols-2 md:gap-10">
    <div class="my-auto flex flex-col gap-4">
      <div class="my-auto flex flex-col gap-4">
        <TypeWriter
          style="text-4xl font-bold md:min-w-[50%] md:relative "
          words={`Hello {{${helloName}}},`}
          bind:this={typewriter}
        />
        <input
          placeholder="Your name"
          maxlength="24"
          class={`${helloName.length > 12 ? 'w-64' : 'w-40'} focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none`}
          on:input={debounce}
        />
      </div>
      <p class="font-serif">My name is Ben.</p>
      <p class="font-serif">Welcome to my page,</p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          href={`${base}#intro`}
          class="variant-filled-primary btn font-serif">Introduction</a
        >
        <a
          href={`${base}/skills`}
          class="variant-filled-primary btn font-serif">My Skills</a
        >
        <a
          href={`${base}/resume`}
          class="variant-filled-primary btn font-serif">My Resume</a
        >
        <a
          href={`${base}/blogs`}
          class="variant-filled-primary btn font-serif">My Blogs</a
        >
      </div>
    </div>
    <img
      class="relative mx-auto my-auto mb-auto max-w-[400px] rounded-3xl object-cover"
      srcset={`${base}/images/hero.png`}
      alt="BenTri Byte Hero"
    />
  </section>
  <section
    id="intro"
    class="ks-section prose hide-scrollbar h-full overflow-y-auto dark:prose-invert prose-headings:my-0 prose-p:my-0"
  >
    <AboutMe />
  </section>
</div>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex snap-start flex-col gap-4 px-4 md:w-[75ch] md:justify-center;
  }
</style>
