<script lang="ts">
  import History from '$lib/components/History.svelte';
  import Email from '~icons/material-symbols/attach-email-rounded';
  import GitHub from '~icons/skill-icons/github-dark';
  import LinkedIn from '~icons/skill-icons/linkedin';
  import { base } from '$app/paths';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import resumeData from '$contents/ben/resume.json';
  import { onMount } from 'svelte';
  let contactsIcons = {
    email: Email,
    github: GitHub,
    linkedin: LinkedIn,
  };
  const { profile, contacts, experiences, educations, skills, languages } = resumeData;
  onMount(() => {
    window.onbeforeprint = () => {
      document.getElementById('page').scrollTo(0, 0);
    };
  });
</script>

<svelte:head>
  <title>{profile['name']}'s Resume</title>
  <meta name="description" content={`Summary of ${profile['name']}'s professional career.`} />
</svelte:head>
<div class="kcp-layout overflow-over flex flex-col print:grid print:px-6 lg:grid">
  <div class="kcp-profile flex flex-col items-center print:break-after-avoid print:flex-row lg:flex-row">
    <div
      style={`background-image: url('${base}/images/hero_no_filter.avif')`}
      class="kcp-profile-photo z-10 flex h-60 w-60 flex-shrink-0 items-center justify-center rounded-full border-4 border-surface-200 bg-primary-500 p-8 print:h-40 print:w-40 print:!border-white dark:border-surface-900"
    />
    <div
      class="z-0 -mt-8 flex h-40 w-full items-center justify-center rounded-md bg-primary-500 print:-ml-10 print:mt-0 print:h-32 lg:-ml-10 lg:mt-0"
    >
      <div>
        <h1 class="text-white print:!text-lg">{profile['name']}</h1>
        <h2 class="text-white print:!text-base">{profile['job']}</h2>
      </div>
    </div>
  </div>
  <div class="btb-break h-full border-l-2 border-surface-200"></div>
  <div class="kcp-summary flex flex-col gap-4 print:divide-y">
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:px-1 print:py-1">
      <h2 class="text-center print:!text-lg print:text-black">Contacts</h2>
      {#each contacts as contact}
        <a class="flex items-center gap-2 break-all text-white print:!text-xs print:text-black" href={contact.href}>
          <svelte:component this={contactsIcons[contact.type]} class="text-2xl print:!text-sm" />
          <p class="print:!text-xs">{contact.printText ?? contact.href}</p>
        </a>
      {/each}
      <div class="kcp-history" />
    </div>
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:px-2">
      <h2 class="text-center print:!text-lg print:text-black">Skills</h2>
      <div class="grid gap-2">
        <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
        <div class="grid gap-4">
          {#each Object.values(skills) as skillSet}
            <strong class="text-md">{skillSet.title}</strong>
            <div class="grid gap-2">
              {#each skillSet.professional as item}
                <ProgressBar title={item.title} percentage={item.percentage} />
              {/each}
              {#each skillSet.casual as item}
                <ProgressBar title={item.title} percentage={item.percentage} />
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:px-2">
      <h2 class="text-center print:!text-lg print:text-black">Languages</h2>
      <div class="grid gap-2">
        {#each languages as language}
          <ProgressBar title={language.title} percentage={language.percentage} />
        {/each}
      </div>
    </div>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary">Contacts</svelte:fragment>
        <svelte:fragment slot="content">
          {#each contacts as contact}
            <a
              class="!text-primary-900-50-token flex items-center gap-2 break-all print:!text-xs print:!text-teal-900"
              href={contact.href}
            >
              <svelte:component this={contactsIcons[contact.type]} class="text-2xl print:!text-sm" />
              <p class="print:!text-xs">{contact.text}</p>
            </a>
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary">Skills</svelte:fragment>
        <svelte:fragment slot="content">
          <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
          <div class="grid gap-4">
            {#each Object.values(skills) as skillSet}
              <strong class="text-md">{skillSet.title}</strong>
              <div class="grid gap-2">
                {#each skillSet.professional as item}
                  <ProgressBar title={item.title} percentage={item.percentage} />
                {/each}
                {#each skillSet.casual as item}
                  <ProgressBar title={item.title} percentage={item.percentage} />
                {/each}
              </div>
            {/each}
          </div>
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary">Languages</svelte:fragment>
        <svelte:fragment slot="content">
          {#each languages as language}
            <ProgressBar title={language.title} percentage={language.percentage} />
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </div>
  <div class="kcp-history flex flex-col justify-center gap-2 px-4 print:gap-1 print:pl-0 print:text-black">
    <h2 class="py-2 text-center text-lg print:text-black">Experiences</h2>
    <div class="flex flex-col gap-2">
      {#each experiences as content, index}
        <History {content} />
        {#if index != experiences.length - 1}
          <hr class="my-8 h-px border-0 bg-gray-200 print:my-1 dark:bg-gray-700" />
        {/if}
      {/each}
    </div>
    <hr class="my-8 h-[2px] border-0 bg-gray-700 print:my-1 dark:bg-gray-200" />
    <div class="flex flex-col gap-4">
      <h2 class="py-2 text-center text-lg print:text-black">Educations</h2>
      {#each educations as content, index}
        <History {content} />
        {#if index != experiences.length - 1}
          <hr class="my-8 h-px border-0 bg-gray-200 print:my-1 dark:bg-gray-700" />
        {/if}
      {/each}
    </div>
  </div>
</div>
<div class="flex p-2 print:hidden">
  <button
    class="variant-filled-primary btn ml-auto"
    on:click={() => {
      document.getElementById('page').scrollTo(0, 0);
      window.print();
    }}
  >
    Print
  </button>
</div>

<style lang="postcss">
  .kcp-profile-photo {
    background-size: cover;
    background-position: 20% 20%;
  }
  .kcp-layout {
    @apply gap-4 py-4;
    grid-template-areas:
      'profile profile profile'
      'history break summary';
    grid-template-columns: 1fr 1px 30ch;
  }
  @media print {
    .kcp-layout {
      grid-template-areas:
        'profile summary'
        'history summary';
    }
  }
  .kcp-profile {
    grid-area: profile;
  }
  .btb-break {
    grid-area: break;
  }
  .kcp-summary {
    grid-area: summary;
  }
  @media print {
    p {
      font-size: 12px;
      line-height: 16px;
    }
    .kcp-layout {
      grid-template-columns: 1fr 1px 20ch;
    }
  }
</style>
