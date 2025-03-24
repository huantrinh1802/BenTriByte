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
      contents: ['Using professionally', 'Using professionally'],
    },
    {
      percentage: 75,
      skill: 'Javascript',
      contents: ['Using professionally', ''],
    },
  ];
  const pro_clouds_contents: Content[] = [
    {
      percentage: 80,
      skill: 'AWS',
      contents: ['Using professionally', 'Using professionally'],
    },
  ];
  const pro_tech_contents: Content[] = [
    {
      percentage: 80,
      skill: 'VueJS',
      contents: ['Using professionally', 'Using professionally'],
    },
    {
      percentage: 80,
      skill: 'IonicJS',
      contents: ['Using professionally', 'Using professionally'],
    },
    {
      percentage: 80,
      skill: 'PostgreSQL',
      contents: ['Using professionally', 'Using professionally'],
    },
    {
      percentage: 80,
      skill: 'Jinja',
      contents: ['Using professionally', 'Using professionally'],
    },
  ];
  const casual_lang_contents: Content[] = [
    {
      percentage: 25,
      skill: 'Rust',
      contents: ['Using professionally', 'Using professionally'],
    },
  ];
  const casual_tech_contents: Content[] = [
    {
      percentage: 80,
      skill: 'SvelteJS',
      contents: ['<strong>Using</strong> professionally', 'Using professionally'],
    },
    {
      percentage: 45,
      skill: 'ReactJS',
      contents: ['Using professionally', 'Using professionally'],
    },
  ];
  const casual_clouds_contents: Content[] = [
    {
      percentage: 80,
      skill: 'Vercel',
      contents: ['Using professionally', 'Using professionally'],
    },
    {
      percentage: 80,
      skill: 'Netlify',
      contents: ['Using professionally', 'Using professionally'],
    },
  ];
  let skills = {
    'Professional Skills': [
      { name: 'Programming Languages', items: pro_lang_contents },
      { name: 'Technologies / Frameworks', items: pro_tech_contents },
      { name: 'Clouds', items: pro_clouds_contents },
    ],
    'Casual Skills': [
      { name: 'Programming Languages', items: casual_lang_contents },
      { name: 'Technologies / Frameworks', items: casual_tech_contents },
      { name: 'Clouds / Platform', items: casual_clouds_contents },
    ],
  };
  function handleShowContent(skill: Skill) {
    currentContent = skill;
    dialog.showModal();
  }
</script>

<!-- <div class="prose dark:prose-invert prose-p:my-0 prose-headings:my-0 grid gap-4">
  <h2>My Skills</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="grid gap-4">
      <h3>Professional Skills</h3>
      <div class="grid gap-2">
        <h4>Programming Languages</h4>
        <div class="flex gap-4">
          {#each pro_lang_contents as content}
            <SkillBanner
              onClick={handleShowContent}
              percentage={content.percentage}
              skill={content.skill}
            />
          {/each}
          <div class=" h-28 w-28">
            <SkillBadge percentage={80}>
              <VueJS slot="logo" />
            </SkillBadge>
          </div>
        </div>
      </div>
      <div>
        <h4>Cloud Providers</h4>
        <div class="flex gap-4">
          <div class=" h-28 w-28">
            <SkillBadge percentage={70}>
              <AWS slot="logo" />
            </SkillBadge>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>Non-pro Skills</h3>
      <h4>Programming Languages</h4>
      <div class="flex gap-4">
        <div class=" h-28 w-28">
          <SkillBadge percentage={80}>
            <SvelteJS slot="logo" />
          </SkillBadge>
        </div>
        <div class=" h-28 w-28">
          <SkillBadge percentage={30}>
            <Rust slot="logo" />
          </SkillBadge>
        </div>
      </div>
    </div>
  </div>
</div> -->
<div class="prose gap-4 px-4 py-6 dark:prose-invert prose-headings:my-0 prose-p:my-0 sm:px-10">
  <h2>My Skills</h2>
  <div class="grid items-start divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:divide-white">
    {#each Object.entries(skills) as [key, skillSet]}
      <div class="skills-table grid grid-cols-subgrid gap-4">
        <h3>{key}</h3>
        {#each skillSet as skillGroup}
          <div class="grid gap-2">
            <h4>{skillGroup.name}</h4>
            <div class="row-span-2 grid grid-cols-2 grid-rows-subgrid gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {#if skillGroup.items != null}
                {#each skillGroup.items as content}
                  <SkillBanner
                    onClick={handleShowContent}
                    percentage={content.percentage}
                    skill={content.skill}
                  />
                {/each}
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

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
      {#if currentContent === content.skill}
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
  .skills-table {
    @apply first:pb-4 last:pt-4 sm:first:pb-0 sm:first:pl-0 sm:first:pr-4 sm:last:pb-0 sm:last:pl-4 sm:last:pr-0 sm:last:pt-0;
    grid-template-areas:
      'prolang caslang'
      'protech castech'
      'proplat casplat';
  }
</style>
