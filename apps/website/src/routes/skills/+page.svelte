<script lang="ts">
  import Close from '~icons/icon-park/close';
  import SkillBanner, { type Skill } from '$lib/components/SkillBanner.svelte';
  import { type Resume } from '$lib/types/resume';
  let { data } = $props();
  let dialog: HTMLDialogElement = $state();
  let currentContent = $state('Python');
  const { skills } = data.resume as Resume;
  let displayContents = [];
  Object.values(skills).forEach((skillSet) => {
    skillSet.professional.map((item) => {
      displayContents.push(item);
    });
    skillSet.casual.map((item) => {
      displayContents.push(item);
    });
  });
  function handleShowContent(skill: Skill) {
    currentContent = skill;
    dialog.showModal();
  }
</script>

<svelte:head>
  <title>My Skills</title>
  <meta name="description" content="Summary of Ben Trinh's programming skills." />
</svelte:head>
<section class="ks-section">
  <div class="prose dark:prose-invert prose-headings:my-2 prose-p:my-0 gap-4 px-4 py-6 sm:px-10">
    <h2>My Skills</h2>
    <div class="grid gap-2">
      {#each Object.values(skills) as skillSet, index (skillSet.title)}
        <h3>{skillSet.title}</h3>
        <div class="bg divide-surface-600 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {#if skillSet.professional}
            <div class="pr-0 pb-6 sm:pr-6 sm:pb-0">
              <h4>Professional</h4>
              <div class="grid grid-cols-2 grid-rows-subgrid gap-4 xl:grid-cols-3 2xl:grid-cols-4">
                {#each skillSet.professional as pro (pro.title)}
                  <SkillBanner
                    onClick={pro.contents == null ? handleShowContent : null}
                    percentage={pro.percentage}
                    skill={pro.title}
                  />
                {/each}
              </div>
            </div>
          {/if}
          {#if skillSet.casual}
            <div class="pt-6 pl-0 sm:pt-0 sm:pl-6">
              <h4>Casual</h4>
              <div class="grid grid-cols-2 grid-rows-subgrid gap-4 xl:grid-cols-3 2xl:grid-cols-4">
                {#each skillSet.casual as cas (cas.title)}
                  <SkillBanner
                    onClick={cas.contents == null ? handleShowContent : null}
                    percentage={cas.percentage}
                    skill={cas.title}
                  />
                {/each}
              </div>
            </div>
          {/if}
        </div>
        {#if index < Object.keys(skills).length - 1}
          <hr class="bg-surface-600 mb-4 h-1" />
        {/if}
      {/each}
    </div>
  </div>
</section>

<dialog
  class="prose prose-ul:my-0 relative rounded-md"
  bind:this={dialog}
  onclick={(e) => {
    if (e.target == dialog) {
      dialog.close();
    }
  }}
>
  <div class="grid gap-2 p-4">
    <div class="flex items-center">
      <button class="mr-2 ml-auto" onclick={() => dialog.close()}><Close /></button>
    </div>
    {#each displayContents as content (content.title)}
      {#if currentContent === content.title && content.contents != null}
        <ul>
          {#each content.contents as skillContent, index (index)}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <li>{@html skillContent}</li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>
</dialog>

<style>
  @reference "../../app.css";
  .ks-section {
    @apply mx-auto flex flex-col gap-4 md:justify-center;
  }
</style>
