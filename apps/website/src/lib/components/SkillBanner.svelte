<script context="module" lang="ts">
  type ProgrammingLanguage = 'Python' | 'Rust' | 'Javascript';
  type CloudProvider = 'AWS' | 'Vercel' | 'Netlify';
  type Technology = 'IonicJS' | 'Jinja' | 'PostgreSQL';
  type Framework = 'SvelteJS' | 'VueJS' | 'ReactJS' | 'AlpineJS' | 'HTMX';

  export type Skill = ProgrammingLanguage | CloudProvider | Framework | Technology | string;
</script>

<script lang="ts">
  import Python from '~icons/skill-icons/python-dark';
  import AWS from '~icons/skill-icons/aws-dark';
  import VueJS from '~icons/skill-icons/vuejs-dark';
  import Javascript from '~icons/skill-icons/javascript';
  import Rust from '~icons/fa-brands/rust';
  import SvelteJS from '~icons/skill-icons/svelte';
  import MoreUp from '~icons/carbon/popup';
  import Jinja from '~icons/file-icons/jinja';
  import IonicJS from '~icons/logos/ionic-icon';
  import ReactJS from '~icons/skill-icons/react-dark';
  import PostgreSQL from '~icons/skill-icons/postgresql-dark';
  import Vercel from '~icons/skill-icons/vercel-dark';
  import Netlify from '~icons/skill-icons/netlify-dark';
  import HTMX from '~icons/skill-icons/htmx-dark';
  import AlpineJS from '~icons/skill-icons/alpinejs-dark';
  import ProgressBar from './ProgressBar.svelte';

  const icons = {
    Python,
    Rust,
    Javascript,
    AWS,
    SvelteJS,
    VueJS,
    IonicJS,
    Jinja,
    ReactJS,
    PostgreSQL,
    Vercel,
    Netlify,
    HTMX,
    AlpineJS,
  };
  export let onClick;
  export let percentage = 85;
  export let skill: Skill = null;
</script>

<div class="prose grid place-items-center gap-4 rounded-lg bg-primary-700 p-4 prose-headings:my-0 dark:bg-slate-700">
  <h4 class="text-center text-white">{skill}</h4>
  <svelte:component this={icons[skill]} class="h-16 w-16 text-white" />
  {#if onClick != null}
    <button class="btn" title={`More about my ${skill} experience`} on:click={() => onClick(skill)}>
      <MoreUp class="h-10 w-10 text-white" />
    </button>
  {/if}
  <ProgressBar {percentage} />
</div>
