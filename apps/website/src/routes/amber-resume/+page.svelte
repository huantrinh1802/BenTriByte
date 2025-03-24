<script lang="ts">
  import History from '$lib/components/History.svelte';
  import Email from '~icons/material-symbols/attach-email-rounded';
  import GitHub from '~icons/skill-icons/github-dark';
  import LinkedIn from '~icons/skill-icons/linkedin';
  import Mobile from '~icons/gridicons/phone';
  import { base } from '$app/paths';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { browser } from '$app/environment';
  const contacts = [
    { href: 'mailto:hoaianh2908@gmail.com', icon: Email, text: 'hoaianh2908@gmail.com' },
    { href: 'tel:+61414129702', icon: Mobile, text: '0414 129 702' },
    { href: null, icon: null, text: 'Granville NSW, 2142 Australia' },
  ];
  const summary =
    'Social work graduate with strong academic record and high level of interpersonal skills. Enthusiastic, quick learner and have a high sense of responsibility. Keen to gain experiences in social work industry in general and case management in particular. Available for full-time employment.';
  const experiences = [
    {
      title: 'Day Program Care Coordinator',
      subtitle: 'Alpha Omega Management Consulting',
      timeline: '08/2022 - Present',
      location: 'Cabramatta NSW, Australia',
      summary: null,
      tasks: [
        'Providing team supervision and leadership regarding individual support services to people with disabilities, modelling quality service delivery through a person- centred active support; underpinned by the National Standards for Disability Services.',
        'Being responsible for managing, planning, supervising and coordinating the work of Day Program support workers.',
        'Monitoring and reviewing all general events and incidents; and developing systems to ensure the health and safety of individuals. Conducting investigations involving serious injuries to include making notifications to the NDIS and completing necessary documents.',
        "Acting as a primary contact for Support Coordinators regarding programming questions about the Day Programs and making recommendations of the appropriate programs that suit the individual's needs.",
        "Liaising with participants' health professionals to supervise Day Program staff in planning and coordinating services designed to: teach individuals life skills necessary to establish and maintain their independence and increase individuals' participation in social and community based activities, increase individuals' range of socially appropriate behaviours and habits to increase acceptance and integration in the community at large and assist individuals in maintaining health and safety skills.",
        'Working on the development and ongoing management of future budgets, staffing, maintenance, and safety for the day program operations to provide quality support and engagement with individuals.',
      ],
    },
    {
      title: 'NDIS Support Coordinator',
      subtitle: 'Alpha Omega Management Consulting',
      timeline: '08/2022 - Present',
      location: 'Cabramatta NSW, Australia',
      summary: null,
      tasks: [
        'Managing a case load of 50 clients',
        'Assisting participants to connect to and engage with, informal and mainstream funded supports and services as articulated in their NDIS Plan and which assist them achieve their goals.',
        'Building and sustaining relationships with external service providers and mainstream supports for the purpose of maximising opportunity for participant.',
        'Building capacity in participants and / or their family to maintain support relationships with the end goal being a reduction in the participants need for support coordination into the future.',
        'Advocating for the rights and needs of individuals with disabilities and their families.',
        'Maintaining accurate and reliable documentation and preparing relevant reports.',
      ],
    },
    {
      title: 'NDIS Support Coordinator',
      subtitle: 'Ability Connect',
      timeline: '11/2021 - 07/2022',
      location: 'Bella Vista NSW, Australia',
      summary: null,
      tasks: [
        'Strengthened and enhanced NDIS participants capacity to coordinate supports, self-direct and manage supports and participate in the community, including providing participants with assistance to resolve problems or issues that arise.',
        "Utilised person-centred approach to identify and facilitate a range of support, and support providers to meet participants' identified needs along with ensuring mainstream services meet their obligations for example housing, education, justice and health.",
        'Liaised with NDIA in relation to NDIS participants and their plans; and provided the NDIA reports on outcomes and success indicators within the agreed reporting frequency.',
        'Ensured that support responses focus on participant goals and objectives.',
        'Supported the Ability Connect team to develop professional services and supports to ensure the participants goals are maximised.',
      ],
    },
    {
      title: 'Student Placement',
      subtitle: "Western Sydney University - Men's Health Information and Resource Centre",
      timeline: '02/2021 - 06/2021',
      location: 'Parramatta NSW, Australia',
      summary: null,
      tasks: [
        'Facilitated Nepalese Mental Health Literacy Community event in March with the collaboration of Western Sydney University and Australian Nepal Public Link',
        'Utilised social work research methods to analyse raw data collected from social research surveys',
        "Conducted interviews with elderly people who have experiences in transitions to promote old people's psychological and metal well-being",
        'Established respectful relationship with older people and supported their engagement in group work activities with the aim of promoting their general well-being',
        'Facilitated a wide range of group activities',
      ],
    },
    {
      title: 'Student Placement',
      subtitle: 'Anglicare',
      timeline: '03/2019 - 07/2019',
      location: 'Summer HIll NSW, Australia',
      summary: null,
      tasks: [
        "Experienced in receiving initial phone contact in regard to client's inquiry about organisation's services",
        'Conducted assessment in order to provide clients suitable services and referrals to maximise their potential outcomes using strength-based approach and client- centered approach',
        'Advocated for client to get access to EAPA (Energy Account Payment Assistance)',
        'Conducted assessments with Vietnamese clients who are from non - English speaking background',
      ],
    },
    {
      title: 'Volunteer',
      subtitle: 'AIP Foundation',
      timeline: '07/2016 - 09/2016',
      location: 'Hanoi, Vietnam',
      summary: null,
      tasks: [
        "Distributed free helmets to students in almost every primary school in Hanoi in order to develop people's safety self-awareness.",
        'Followed directions from supervisors and completed tasks within appropriate timeframe.',
        'Offered support and assistance to community members.',
        'Established and maintained relationships with fellow volunteers and organizational stakeholders.',
        'Greeted guests and offered assistance in finding specific departments or personnel.',
      ],
    },
    {
      title: 'Volunteer',
      subtitle: 'Global Road Safety Partnership, GRSP',
      timeline: '06/2015 - 08/2015',
      location: 'Hanoi, Vietnam',
      summary: null,
      tasks: [
        'Engaged with stakeholders and community members and answered questions regarding volunteer programs.',
        'Cultivated relationships and maintained regular communication with nonprofit agencies, schools, and social service agencies to solicit community needs.',
        'Co-organised seminars which were related to Road Safety in Hanoi.',
      ],
    },
    {
      title: 'Volunteer',
      subtitle: 'Asia Injury Prevention (AIP)',
      timeline: '03/2015 - 05/2015',
      location: 'Hanoi, Vietnam',
      summary: null,
      tasks: [
        'Created invitations to potential sponsors with the aim of raising funding for many genital reconstruction surgeries for children who are in poverty',
        "Arranged patients' checking appointments before and after every operation",
        'Instructed patients and their families step by step at the hospital whenever the checks started',
        'Helped organize and implement programs and projects to aid community and individuals.',
        'Entered data into computer systems, updating records and files with new information.',
        'Adhered to strict confidentiality policies in regard to personal and financial data.',
        'Established and maintained relationships with fellow volunteers and organizational stakeholders.',
      ],
    },
  ];
  const educations = [
    {
      title: 'Bachelor of Social Work - Western Sydney University',
      timeline: '07/2021',
      location: 'Parramatta NSW, Australia',
    },
  ];
  const references = [
    {
      name: 'Jennifer Dong',
      title: 'NDIS Operations Manager',
      company: 'Alpha Omega Management Consulting Pty Ltd',
      mobile: { href: 'tel:+61405835487', text: '0405 835 487' },
      email: { href: 'mailto:jennifer@alphaomegaconsulting.com.au', text: 'jennifer@alphaomegaconsulting.com.au' },
    },
    {
      name: 'Tiffany Ho',
      title: 'NDIS Support Coordinator',
      company: 'The Junction Works',
      mobile: { href: 'tel:+61405669205', text: '0405 669 205' },
      email: { href: 'mailto:tiffanyh0831@gmail.com', text: 'tiffanyh0831@gmail.com' },
    },
  ];
  const skills = [
    { title: 'Prepare strategic plans for project' },
    { title: 'Social work research skills' },
    { title: 'Small group facilitation' },
    { title: 'Interpersonal communication skills' },
    { title: 'A high level of empathy and passion for the field' },
    { title: 'Exceptionally compassionate and caring' },
    { title: 'An ability to manage multiple tasks and stay organised' },
    { title: 'Acquired First Aid certificates' },
    { title: 'Case Documentation' },
    { title: 'Case Management' },
    { title: 'Cultural Competency' },
  ];
  const languages = [
    { title: 'Vietnamese - Native', percentage: 100 },
    { title: 'English - Fluent', percentage: 85 },
  ];
  if (browser) {
    window.onbeforeprint = (event) => {
      document.getElementById('page').scrollTo(0, 0);
    };
  }
</script>

<div class="flex p-2 print:hidden">
  <button
    class="btn variant-filled-primary ml-auto"
    on:click={() => {
      document.getElementById('page').scrollTo(0, 0);
      window.print();
    }}>
    Print
  </button>
</div>
<div class="kcp-layout overflow-over flex h-full flex-col print:grid md:grid">
  <div class="kcp-profile flex flex-col items-center print:flex-row md:flex-row">
    <div
      style={`background-image: url('${base}/images/hero_no_filter.png')`}
      class="kcp-profile-photo z-10 flex h-60 w-60 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-400 p-8 print:h-40 print:w-40" />
    <div class="z-0 -mt-8 flex h-20 w-full items-center justify-center rounded-md bg-indigo-600 print:-ml-10 print:mt-0 print:h-24 md:-ml-10 md:mt-0">
      <div>
        <h1 class="text-white print:!text-lg">Hoai Anh (Amber) Duong</h1>
      </div>
    </div>
  </div>
  <div class="kcp-summary flex flex-col gap-4">
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary">Contacts</svelte:fragment>
        <svelte:fragment slot="content">
          {#each contacts as contact}
            <a
              class="flex items-center gap-2 break-all !text-primary-900-50-token print:!text-xs print:!text-teal-900"
              href={contact.href}>
              <svelte:component
                this={contact.icon}
                class="text-2xl print:!text-sm" />
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
          <ul class="list-disc pl-6 flex flex-col gap-2 print:gap-0">
            {#each skills as skill}
              <li class="!whitespace-normal">
                <div>{skill.title}</div>
              </li>
            {/each}
          </ul>
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
    <Accordion class="print:hidden">
      <AccordionItem>
        <svelte:fragment slot="summary">Languages</svelte:fragment>
        <svelte:fragment slot="content">
          {#each languages as language}
            <ProgressBar
              title={language.title}
              percentage={language.percentage} />
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
    <div class="hidden flex-col gap-4 rounded-md border border-slate-200 px-10 py-4 print:flex print:py-1 print:px-1">
      <h2 class="text-center print:!text-lg print:text-black">Contacts</h2>
      {#each contacts as contact}
        <a
          class="flex items-center gap-2 break-all !text-white print:!text-xs print:!text-gray-900"
          href={contact.href}>
          <svelte:component
            this={contact.icon}
            class="text-2xl print:!text-sm" />
          <p class="print:!text-xs">{contact.text}</p>
        </a>
      {/each}
      <div class="kcp-history" />
    </div>
    <div class="hidden flex-col gap-4 rounded-md border border-slate-200 px-10 py-4 print:px-2 print:flex">
      <h2 class="text-center print:!text-lg print:text-black">Skills</h2>
      <div class="flex flex-col gap-2">
        <ul class="list-disc pl-6 flex flex-col gap-2 print:gap-0">
          {#each skills as skill}
            <li class="!whitespace-normal max-w-sm">
              <span class="text-base text-primary-900-50-token print:!text-gray-900 print:text-[10px]">&#x2022; {skill.title}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="hidden flex-col gap-4 rounded-md border border-slate-200 px-10 py-4 print:px-2 print:block print:break-after-page print:break-inside-avoid">
      <h2 class="text-center print:!text-lg print:text-black">Languages</h2>
      <div class="flex flex-col gap-1">
        {#each languages as language}
          <ProgressBar
            title={language.title}
            percentage={language.percentage} />
        {/each}
      </div>
    </div>
  </div>
  <div class="kcp-history flex flex-col justify-center gap-2 px-6 print:gap-1 print:px-0 print:text-black">
    <div class="flex flex-col">
      <h2 class="py-2 text-center print:!text-lg print:text-black">Summary</h2>
      <div class="py-2 print:text-[10px]">{summary}</div>
    </div>
    <div class="flex flex-col">
      <h2 class="py-2 text-center print:!text-lg print:text-black">Experience</h2>
      {#each experiences as content}
        <History {content} />
        <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700 print:my-2" />
      {/each}
    </div>
    <div class="flex flex-col">
      <h2 class="py-2 text-center print:!text-lg print:text-black">Education</h2>
      {#each educations as content}
        <History {content} />
        <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700 print:my-1" />
      {/each}
    </div>
    <div class="flex flex-col">
      <h2 class="py-2 text-center print:!text-lg print:text-black">References</h2>
      {#each references as ref}
        <div class="flex flex-col gap-3 print:block print:break-after-auto print:gap-1">
          <h3 class="print:!text-base">{ref.name}</h3>
          <h4 class="dark:text-gray-200 print:py-2 print:!text-sm text-gray-800 print:!text-gray-800">{ref.title}</h4>
          <h5 class="dark:text-gray-200 print:py-2 print:!text-[10px] text-gray-800 print:!text-gray-800">{ref.company}</h5>
          <a
            class="flex items-center gap-2 break-all !text-white print:!text-xs print:!text-gray-900"
            href={ref.mobile.href}>
            <Mobile class="text-2xl print:!text-sm" />
            <p class="print:!text-xs">{ref.mobile.text}</p>
          </a>
          <a
            class="flex items-center gap-2 break-all !text-white print:!text-xs print:!text-gray-900"
            href={ref.email.href}>
            <Email class="text-2xl print:!text-sm" />
            <p class="print:!text-xs">{ref.email.text}</p>
          </a>
        </div>
        <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700 print:my-1" />
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
  @media print {
    .kcp-layout {
      grid-template-columns: 1fr 35%;
    }
  }
  .kcp-profile {
    grid-area: profile;
  }
  .kcp-summary {
    grid-area: summary;
  }
</style>
