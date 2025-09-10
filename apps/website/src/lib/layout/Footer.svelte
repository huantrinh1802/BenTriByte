<script lang="ts">
  import Phone from '~icons/mdi/phone-dial-outline';
  import Email from '~icons/ic/outline-email';
  import GitHub from '~icons/skill-icons/github-dark';
  import LinkedIn from '~icons/skill-icons/linkedin';
  import Address from '~icons/mdi/map-marker-radius-outline';
  import { base } from '$app/paths';
  import Kofi from '$lib/components/Kofi.svelte';
  type Social = {
    name: string;
    label: string;
    href: string;
  };
  interface Props {
    socials?: Social[];
    className?: string;
  }

  let { socials = [], className = '' }: Props = $props();
</script>

<footer
  id="footer"
  class={`bg-surface-100-900 relative p-4 text-gray-600 sm:p-4 dark:text-gray-400 print:hidden ${className}`}
>
  <!-- <div class="flex">
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-6">
      <div class="grid gap-4">
        <h2 class="!text-xl font-semibold">Reach Me @</h2>
        <ul class="flex gap-4">
          {#if socials != null}
            {#each socials as social}
              <li class="flex gap-4">
                <a
                  href={social.href}
                  class="pointer flex gap-2 hover:underline"
                  aria-label={social.label}
                >
                  {#if social.name === 'Phone'}
                    <Phone class="text-lg" />
                  {:else if social.name === 'Email'}
                    <Email class="text-lg" />
                  {:else if social.name === 'Address'}
                    <Address class="text-lg" />
                  {:else if social.name === 'GitHub'}
                    <GitHub class="text-lg" />
                  {:else if social.name === 'LinkedIn'}
                    <LinkedIn class="text-lg" />
                  {/if}
                  {social.label}
                </a>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
  </div>
  <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" /> -->

  <div class="grid px-2 max-xl:divide-y xl:grid-cols-3">
    <div class="grid gap-4 max-xl:pb-4">
      <h2 class="mr-auto !text-xl font-semibold">Reach Me @</h2>
      <ul class="mx-auto flex gap-4">
        {#if socials != null}
          {#each socials as social (social.name)}
            <li class="flex gap-4">
              <a href={social.href} class="pointer flex gap-2 hover:underline" aria-label={social.label}>
                {#if social.name === 'Phone'}
                  <Phone class="text-lg" />
                {:else if social.name === 'Email'}
                  <Email class="text-lg" />
                {:else if social.name === 'Address'}
                  <Address class="text-lg" />
                {:else if social.name === 'GitHub'}
                  <GitHub class="text-lg" />
                {:else if social.name === 'LinkedIn'}
                  <LinkedIn class="text-lg" />
                {/if}
                {social.label}
              </a>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
    <div class="text-primary-800-200 flex flex-col items-center justify-center max-xl:py-4">
      <span class="text-sm sm:text-center"
        >© {new Date().getFullYear()}
        <a href={`${base}/`} aria-label="Go to Home" class="mle-link hover:underline">BenTriByte.</a>
        All Rights Reserved.
      </span>
      <span class="text-sm sm:text-center"
        >Built by
        <a
          class="mle-link text-lg font-semibold"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/huantrinh1802">Ben Trinh</a
        >
      </span>
    </div>
    <div class="grid place-items-center gap-4 max-xl:pb-4">
      <Kofi />
    </div>
  </div>
</footer>
