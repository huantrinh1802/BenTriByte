<script lang="ts">
  import History from '$lib/components/History.svelte';
  import Email from '~icons/mdi-light/email';
  import GitHub from '~icons/skill-icons/github-dark';
  import LinkedIn from '~icons/skill-icons/linkedin';
  import Mobile from '~icons/fluent/call-20-regular';
  import { base } from '$app/paths';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  export let data: PageData;
  let contactsIcons = {
    email: Email,
    github: GitHub,
    linkedin: LinkedIn,
  };
  $: ({ profile, contacts, experiences, educations, skills, languages, references, summary } = data.resume);
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
<div class="btb-layout overflow-over flex flex-col print:grid print:px-2 lg:grid">
  <div class="btb-profile flex flex-col items-center print:break-after-avoid print:flex-row lg:flex-row">
    {#if profile.showPhoto}
      <div
        style={`background-image: url('${base}/${profile.image}'); background-color: ${profile.themeColour};`}
        class="btb-profile-photo z-10 flex h-60 w-60 flex-shrink-0 items-center justify-center rounded-full border-4 border-surface-200 bg-primary-500 p-8 print:h-40 print:w-40 print:!border-white dark:border-surface-900"
      />
    {/if}
    <div
      style={`background-color: ${profile.themeColour};`}
      class={`z-0 -mt-8 flex h-40 w-full items-center justify-center rounded-md print:mt-0 print:h-32 lg:mt-0 ${
        profile.showPhoto ? 'print:-ml-10 lg:-ml-10' : ''
      }`}
    >
      <div>
        <h1 class="font-semibold text-white print:!text-lg">{profile['name']}</h1>
        <h2 class="text-white print:!text-base">{profile['job']}</h2>
      </div>
    </div>
  </div>
  <div class="btb-break h-full border-l-2 border-surface-200"></div>
  <div class="btb-summary flex flex-col gap-4 print:divide-y">
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:break-after-avoid print:px-1 print:py-1">
      <h2 class="btb-section-heading">Contacts</h2>
      {#each contacts as contact}
        <a class="flex items-center gap-2 break-all text-white print:!text-xs print:text-black" href={contact.href}>
          <svelte:component this={contactsIcons[contact.type]} class="text-2xl print:!text-sm" />
          <p class="print:!text-xs">{contact.printText ?? contact.href}</p>
        </a>
      {/each}
      <!-- <div class="btb-history" /> -->
    </div>
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:px-2">
      <h2 class="btb-section-heading">Skills</h2>
      <!-- <div class="grid gap-2"> -->
      <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
      <div class="grid break-inside-auto gap-4">
        {#each Object.values(skills) as skillSet}
          {#if skillSet.title}
            <strong class="text-md">{skillSet.title}</strong>
          {/if}
          <div class="grid gap-2">
            {#each skillSet.professional as item}
              {#if item.percentage != null}
                <ProgressBar title={item.title} percentage={item.percentage} />
              {:else}
                <div class="mb-1 flex justify-between">
                  <span class="text-primary-900-50-token text-base print:!text-xs print:!text-black">{item.title}</span>
                </div>
              {/if}
            {/each}
            {#if skillSet.casual}
              {#each skillSet.casual as item}
                <ProgressBar title={item.title} percentage={item.percentage} />
              {/each}
            {/if}
          </div>
        {/each}
      </div>
      <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
      <!-- </div> -->
    </div>
    <div class="hidden flex-col gap-4 px-10 py-4 print:flex print:px-2">
      <h2 class="btb-section-heading">Languages</h2>
      <div class="grid gap-2">
        {#each languages as language}
          <ProgressBar title={language.title} percentage={language.percentage} />
        {/each}
      </div>
    </div>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary"><h2 class="btb-section-heading">Contacts</h2></svelte:fragment>
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
        <svelte:fragment slot="summary"><h2 class="btb-section-heading">Skills</h2></svelte:fragment>
        <svelte:fragment slot="content">
          <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
          <div class="grid gap-4">
            {#each Object.values(skills) as skillSet}
              {#if skillSet.title}
                <strong class="text-md">{skillSet.title}</strong>
              {/if}
              <div class="grid gap-2">
                {#each skillSet.professional as item}
                  {#if item.percentage != null}
                    <ProgressBar title={item.title} percentage={item.percentage} />
                  {:else}
                    <div class="mb-1 flex justify-between">
                      <span class="text-primary-900-50-token text-base font-medium print:!text-xs print:!text-black"
                        >{item.title}</span
                      >
                    </div>
                  {/if}
                {/each}
                {#if skillSet.casual}
                  {#each skillSet.casual as item}
                    <ProgressBar title={item.title} percentage={item.percentage} />
                  {/each}
                {/if}
              </div>
            {/each}
          </div>
          <!-- TODO (BT - 25/01/2024): Use snippet in Svelte 5  -->
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary"><h2 class="btb-section-heading">Languages</h2></svelte:fragment>
        <svelte:fragment slot="content">
          {#each languages as language}
            <ProgressBar title={language.title} percentage={language.percentage} />
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </div>
  <div class="btb-history flex flex-col gap-2 px-4 print:gap-1 print:pl-0 print:text-black">
    {#if summary}
      <h2 class="btb-section-heading">Summary</h2>
      <p>{summary}</p>
      <hr class="my-8 h-[2px] border-0 bg-gray-700 print:my-1 dark:bg-gray-200" />
    {/if}
    <h2 class="btb-section-heading">Experiences</h2>
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
      <h2 class="btb-section-heading">Educations</h2>
      {#each educations as content, index}
        <History {content} />
        {#if index != educations.length - 1}
          <hr class="my-8 h-px border-0 bg-gray-200 print:my-1 dark:bg-gray-700" />
        {/if}
      {/each}
    </div>
    {#if references}
      <div class="grid">
        <h2 class="py-2 text-center text-lg print:text-black">References</h2>
        <div class="grid gap-4">
          {#each references as ref}
            <div class="grid gap-2 print:break-after-auto print:gap-1">
              <h3 class="font-semibold print:!text-base">{ref.name}</h3>
              <h4 class="text-gray-800 print:!text-sm print:!text-gray-800 dark:text-gray-200">{ref.title}</h4>
              <h5 class="text-gray-800 print:!text-[10px] print:!text-gray-800 dark:text-gray-200">
                {ref.company}
              </h5>
              <a class="flex items-center gap-2 break-all text-sm print:!text-gray-900" href={ref.mobile.href}>
                <Mobile class="text-lg print:!text-sm" />
                <p class="print:!text-xs">{ref.mobile.text}</p>
              </a>
              <a class="flex items-center gap-2 break-all text-sm print:text-black" href={ref.email.href}>
                <Email class="text-lg print:!text-sm" />
                <p class="print:!text-xs">{ref.email.text}</p>
              </a>
            </div>
            <hr class="my-8 h-px border-0 bg-gray-200 print:my-1 dark:bg-gray-700" />
          {/each}
        </div>
      </div>
    {/if}
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
  .btb-profile-photo {
    background-size: cover;
    background-position: 20% 20%;
  }
  .btb-layout {
    @apply gap-4 py-4;
    grid-template-areas:
      'profile profile profile'
      'history break summary';
    grid-template-columns: 1fr 1px 30ch;
  }
  .btb-profile {
    grid-area: profile;
  }
  .btb-break {
    grid-area: break;
  }
  .btb-summary {
    grid-area: summary;
  }
  @media print {
    p {
      font-size: 12px;
      line-height: 16px;
    }
    .btb-layout {
      grid-template-columns: 1fr 1px 20ch;
    }
  }
  @media print {
    p,
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
  .btb-section-heading {
    @apply py-2 text-lg font-semibold underline print:text-black;
  }
</style>
