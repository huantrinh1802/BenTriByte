<script lang="ts">
  import History from '$lib/components/History.svelte';
  import type { PageData } from './$types';
  import Email from '~icons/material-symbols/attach-email-rounded';
  import GitHub from '~icons/skill-icons/github-dark';
  import LinkedIn from '~icons/skill-icons/linkedin';
  import { ProgressBar } from '@skeletonlabs/skeleton';
  export let data: PageData;
  const contacts = [
    { href: 'mailto:huantrinh1802@gmail.com', icon: Email, text: 'huantrinh1802@gmail.com' },
    { href: 'https://www.github.com/huantrinh1802', icon: GitHub, text: 'huantrinh1802' },
    { href: 'https://www.linkedin.com/in/huantrinh1802', icon: LinkedIn, text: 'huantrinh1802' },
  ];
  const experiences = [
    {
      title: 'Full-stack Software Developer',
      subtitle: 'Data Analytics Holdings (FA as Fonto)',
      timeline: '12/2021 - Present',
      location: 'Lavender Bay NSW, Australia',
      summary:
        'At Fonto, I work primarily as Full-stack software developer, but I am also required to perform tasks in the IT department. I daily work with the CTO and PTO to develop and test high quality and secure code to all the projects.',
      tasks: [
        'Maintaining and developing new features for hybrid applications using Python, PostgreSQL, GraphQL, Ionic and VueJS',
        'Maintaining 3rd parties’ APIs including but not limited banking, survey panel and survey scripting',
        'Using Figma to transfer the designs into the applications',
        'Maintaining the company’s websites using WordPress',
        'Developing an internal application using Flask, Starlette, Jinja2 and PostgreSQL',
        'Using AWS services – including but not limited to Elastic Beanstalk, ECS, S3, Lambda functions',
        'Collaborating with teammates across departments using Bitbucket, Jira and Confluence',
        'Analyse and evaluate system program needs, maintain technical program, end user documentation and operational procedures',
      ],
    },
    {
      title: 'Lead Software Developer',
      subtitle: 'PIT-M3D Pty Ltd',
      timeline: '08/2019 - 11/2021',
      location: 'Double Bay NSW, Australia',
      summary:
        'During the time at PIT-M3D, I managed a diverse software development team of 8 Python developers, front-end developers, data engineers and data scientists. Alongside other duties, I was responsible for hiring, managing, planning, structuring, the timely delivery, and the documentation of all development-related activities of our team, which focused on the development of transparent diagnostic decision-making tools.',
      tasks: [
        'Designed and implemented scalable solutions for data extraction, analysis, retrieval and indexing',
        'Prepared detailed reports on updates to project specifications, progress, identified conflicts and team activities',
        'Revised, modulated and updated old code bases to modern development standards, reducing operating costs and improving functionality',
        'Reviewed requirements, specifications and technical design documents to provide timely and meaningful feedback',
      ],
    },
    {
      title: 'Barista',
      subtitle: 'Motown Coffee Brewer',
      timeline: '08/2019 - 11/2021',
      location: 'Sydney NSW, Australia',
      summary:
        'The part-time job as Barista during my IT studies at Macquarie University taught me valuable socialising and customer-relationship skills, and further taught me how to self-manage resources and time. To this day, I value a good coffee.',
      tasks: [
        'Educated co-workers and customers about new products and best practices',
        'Prioritized drink requests while managing interruptions',
        'Educated staff by sharing knowledge and expertise of coffees, teas and merchandise',
        'Constantly expanded personal knowledge about coffee varieties',
      ],
    },
  ];
  const educations = [
    {
      title: 'Bachelor of Information Technology (Software Development)',
      timeline: '03/2015 - 06/2021',
      location: 'Macquarie University, North Ryde NSW, Australia',
    },
    {
      title: 'High School - HSC',
      timeline: '09/2012 - 11/2014',
      location: 'Fairvale High School, Fairfield NSW, Australia',
    },
  ];
</script>

<div class="grid kcp-layout h-full overflow-over">
  <div class="kcp-profile flex items-center">
    <div
      style="background-image: url('/images/hero_no_filter.png')"
      class="kcp-profile-photo flex-shrink-0 bg-primary-700 z-10 border-white border-4 rounded-full flex justify-center items-center print:w-40 print:h-40 w-60 h-60 p-8" />
    <div class="-ml-10 z-0 bg-primary-700 flex justify-center items-center w-full print:h-32 h-40">
      <div>
        <h1>Cong Anh Huan Trinh</h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  </div>
  <div class="kcp-summary flex-col flex gap-4">
    <div class="flex flex-col px-10 gap-4 border-slate-200 rounded-md py-4 print:py-1 print:px-1 border">
      <h2 class="text-center print:text-black print:!text-lg">Contacts</h2>
      {#each contacts as contact}
        <a
          class="flex items-center gap-2 break-all print:!text-xs"
          href={contact.href}>
          <svelte:component
            this={contact.icon}
            class="text-2xl print:!text-sm" />
          <p class="print:!text-xs">{contact.text}</p>
        </a>
      {/each}
      <div class="kcp-history" />
    </div>
    <div class="flex flex-col px-10 gap-4 border-slate-200 rounded-md py-4 border">
      <h2 class="text-center print:text-black print:!text-lg">Skills</h2>
      <div>
        <ProgressBar
          meter="bg-primary-800"
          value={80} />
      </div>
    </div>
  </div>
  <div class="kcp-history flex-col flex justify-center gap-2 print:gap-1 print:text-black">
    <div class="flex flex-col">
      <h2 class="text-center print:text-black print:!text-lg">Experiences</h2>
      {#each experiences as content}
        <History {content} />
        <!-- {#if content.hasSeparator} -->
        <hr class="h-px my-8 print:my-0 bg-gray-200 border-0 dark:bg-gray-700" />
        <!-- {/if} -->
      {/each}
    </div>
    <div class="flex flex-col">
      <h2 class="text-center print:text-black print:!text-lg">Educations</h2>
      {#each educations as content}
        <History {content} />
        <!-- {#if content.hasSeparator} -->
        <hr class="h-px my-8 print:my-0 bg-gray-200 border-0 dark:bg-gray-700" />
        <!-- {/if} -->
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .kcp-profile-photo {
    background-size: cover;
    background-position: 20% 20%;
  }
  .kcp-layout {
    @apply gap-4 p-4;
    grid-template-areas:
      'profile profile'
      'history summary';
    grid-template-columns: 1fr;
  }
  .kcp-profile {
    grid-area: profile;
  }
  .kcp-summary {
    grid-area: summary;
  }
</style>
