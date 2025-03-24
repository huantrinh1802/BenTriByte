<script lang="ts">
  import TypeWriter from '$lib/components/TypeWriter.svelte';
  import AboutMe from '$contents/about-me.md';
  import Skills from '$contents/skills.svx';
  import { base } from '$app/paths';
  let helloName = 'World';
  const contents = [AboutMe, Skills];
  let typewriter;
  let timer;
  const debounce = (value) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      helloName = value;
      typewriter.reset();
    }, 900);
  };
</script>

<div class="snap-y snap-mandatory h-[calc(100vh-var(--sk-header-height))] overflow-y-auto w-screen px-10">
  <section class="ks-hero-section snap-normal snap-center h-full grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-10">
    <div class="flex flex-col my-auto gap-4">
      <TypeWriter
        style="text-4xl font-bold md:min-w-[50%] md:relative "
        words={`print("Hello ${helloName}")`}
        bind:this={typewriter} />
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        on:input={({ target: { value } }) => debounce(value)} />
    </div>
    <img
      class="mx-auto my-auto mb-auto rounded-3xl max-w-lg relative object-cover"
      srcset={`/images/hero.png`}
      alt="King Studio Hero" />
  </section>
  {#each contents as content}
    <section class="ks-section show-on-scroll overflow-y-auto">
      <svelte:component this={content} />
    </section>
  {/each}
</div>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex min-h-full snap-start flex-col gap-4 pb-10 md:justify-center;
  }
</style>
