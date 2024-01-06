<script lang="ts">
  import TypeWriter from '$lib/components/TypeWriter.svelte';
  import AboutMe from '$contents/about-me.md';
  import { base } from '$app/paths';

  let helloName = 'World';
  const contents = [AboutMe];
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
  class="h-[calc(100vh-var(--sk-header-height))] w-screen snap-y snap-mandatory overflow-y-auto px-4 sm:px-10"
>
  <section class="ks-hero-section grid h-full snap-center snap-normal grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
    <div class="my-auto flex flex-col gap-4">
      <div class="my-auto flex flex-col gap-4">
        <TypeWriter
          style="text-4xl font-bold md:min-w-[50%] md:relative "
          words={`Hello {{${helloName}}}`}
          bind:this={typewriter}
        />
        <input
          placeholder="Your name"
          class="focus:shadow-outline w-40 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          on:input={debounce}
        />
      </div>
      <p>My name is Ben. Welcome to my page.</p>
      <div class="flex gap-4">
        <a
          href={`${base}#about-me`}
          class="variant-filled-primary btn">About Me</a
        >
        <a
          href={`${base}/skills`}
          class="variant-filled-primary btn">My Skills</a
        >
        <a
          href={`${base}/blogs`}
          class="variant-filled-primary btn">My Blogs</a
        >
      </div>
    </div>
    <img
      class="relative mx-auto my-auto mb-auto rounded-3xl object-cover"
      srcset={`${base}/images/hero.png`}
      alt="BenTri Byte Hero"
    />
  </section>
  <section
    id="about-me"
    class="ks-section show-on-scroll prose overflow-y-auto dark:prose-invert prose-headings:my-0 prose-p:my-0"
  >
    <AboutMe />
  </section>
</div>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex min-h-full snap-start flex-col gap-4 md:justify-center md:w-[75ch] px-4;
  }
</style>
