<script lang="ts">
  import TypeWriter from '$lib/components/TypeWriter.svelte';
  import AboutMe from '$contents/about-me.md';
  import Skills from '$contents/skills.svx';
  import { base } from '$app/paths';
  const contents = [AboutMe, Skills];
</script>

<div class="snap-y snap-mandatory h-[calc(100vh-var(--sk-header-height))] overflow-y-auto w-screen px-10">
  <section class="ks-hero-section snap-normal snap-center h-full flex flex-col-reverse lg:flex-row gap-10 md:gap-2">
    <img
      class="mx-auto my-auto mb-auto md:w-1/2"
      srcset={`./images/hero.svg`}
      alt="King Studio Hero"
    />
    <TypeWriter
      style="text-4xl mr-auto my-auto font-bold md:min-w-[50%]"
      words="Welcome to Kong Island"
    />
  </section>
  {#each contents as content}
    <section class="ks-section show-on-scroll overflow-y-auto">
      <svelte:component this={content} />
    </section>
  {/each}
</div>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex min-h-full snap-start snap-always flex-col gap-4 md:snap-center md:justify-center;
  }
</style>
