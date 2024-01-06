<script lang="ts">
  import Close from '~icons/icon-park/close';
  import SkillBanner, { type Skill } from '$lib/components/SkillBanner.svelte';
  type Content = {
    percentage: number;
    skill: Skill;
    contents: string[];
  };
  let dialog;
  let currentContent = 'Python';
  const pro_lang_contents: Content[] = [
    {
      percentage: 90,
      skill: 'Python',
      contents: null,
    },
    {
      percentage: 75,
      skill: 'Javascript',
      contents: null,
    },
  ];
  const pro_clouds_contents: Content[] = [
    {
      percentage: 80,
      skill: 'AWS',
      contents: null,
    },
  ];
  const pro_tech_contents: Content[] = [
    {
      percentage: 80,
      skill: 'VueJS',
      contents: null,
    },
    {
      percentage: 80,
      skill: 'IonicJS',
      contents: null,
    },
    {
      percentage: 80,
      skill: 'PostgreSQL',
      contents: null,
    },
    {
      percentage: 80,
      skill: 'Jinja',
      contents: null,
    },
  ];
  const casual_lang_contents: Content[] = [
    {
      percentage: 25,
      skill: 'Rust',
      contents: null,
    },
  ];
  const casual_tech_contents: Content[] = [
    {
      percentage: 80,
      skill: 'SvelteJS',
      contents: null,
    },
    {
      percentage: 45,
      skill: 'ReactJS',
      contents: null,
    },
  ];
  const casual_clouds_contents: Content[] = [
    {
      percentage: 80,
      skill: 'Vercel',
      contents: null,
    },
    {
      percentage: 80,
      skill: 'Netlify',
      contents: null,
    },
  ];
  const skills = [
    { name: 'Programming Languages', professional: pro_lang_contents, casual: casual_lang_contents },
    { name: 'Technologies / Frameworks', professional: pro_tech_contents, casual: casual_tech_contents },
    { name: 'Clouds / Platforms', professional: pro_clouds_contents, casual: casual_clouds_contents },
  ];
  function handleShowContent(skill: Skill) {
    currentContent = skill;
    dialog.showModal();
  }
</script>

<svelte:head><title>Ben Trinh's skills</title></svelte:head>
<section class="ks-section">
  <div class="prose gap-4 px-4 py-6 dark:prose-invert prose-headings:my-2 prose-p:my-0 sm:px-10">
    <h2>My Skills</h2>
    <div class="grid gap-2">
      {#each skills as skillSet, index}
        <h3>{skillSet.name}</h3>
        <div class="bg grid divide-y divide-surface-600 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {#if skillSet.professional}
            <div class="pb-6 pr-0 sm:pb-0 sm:pr-6">
              <h4>Professional</h4>
              <div class="grid grid-cols-2 grid-rows-subgrid gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {#each skillSet.professional as pro}
                  <SkillBanner
                    onClick={pro.contents != null ? handleShowContent : null}
                    percentage={pro.percentage}
                    skill={pro.skill}
                  />
                {/each}
              </div>
            </div>
          {/if}
          {#if skillSet.casual}
            <div class="pl-0 pt-6 sm:pl-6 sm:pt-0">
              <h4>Casual</h4>
              <div class="grid grid-cols-2 grid-rows-subgrid gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {#each skillSet.casual as cas}
                  <SkillBanner
                    onClick={cas.contents != null ? handleShowContent : null}
                    percentage={cas.percentage}
                    skill={cas.skill}
                  />
                {/each}
              </div>
            </div>
          {/if}
        </div>
        {#if index < skills.length - 1}
          <hr class="mb-4 h-1 bg-surface-600" />
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  class="prose relative rounded-md prose-ul:my-0"
  bind:this={dialog}
  on:click={(e) => {
    if (e.target == dialog) {
      dialog.close();
    }
  }}
>
  <div class="grid gap-2 p-4">
    <div class="flex items-center">
      <button
        class="ml-auto mr-2"
        on:click={dialog.close()}><Close /></button
      >
    </div>
    {#each [...pro_lang_contents, ...pro_clouds_contents, ...pro_tech_contents, ...casual_lang_contents, ...casual_tech_contents] as content}
      {#if currentContent === content.skill && content.contents != null}
        <ul>
          {#each content.contents as skillContent}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <li>{@html skillContent}</li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>
</dialog>

<style lang="postcss">
  .ks-section {
    @apply mx-auto flex min-h-full flex-col gap-4 md:justify-center;
  }
</style>
