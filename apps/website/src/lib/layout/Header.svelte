<script lang="ts">
  import { base } from '$app/paths';
  import LightSwitch from '$lib/components/LightSwitch.svelte';
  import BtbIcon from '$lib/images/BtbIcon.svelte';
  import { toggleSidebar } from '$lib/utils/sidebar';
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  interface Props {
    menuItems?: any;
  }

  let { menuItems = null }: Props = $props();
  let activeSubMenu = $state(null);
</script>

<AppBar background="bg-primary-700 text-white rounded-b">
  {#snippet lead()}
    <a class="flex h-12 items-center gap-4" aria-label="Home" href={`${base}/`}>
      <BtbIcon bg="h-10 w-10" partColor="fill-white" />
      <p style="font-family: 'Santanelli';">BenTri Byte</p>
    </a>
  {/snippet}
  {#snippet trail()}
    <ul class="hidden items-center gap-4 sm:flex">
      {#each menuItems as item, index (index)}
        {#if item.href != undefined}
          <li><a href={item.href}>{item.name}</a></li>
        {:else}
          <li class="relative">
            <button onclick={() => (activeSubMenu = activeSubMenu === index ? null : index)}>
              {item.name}
            </button>
            <div class="absolute top-[2rem] right-[-75%] z-100 hidden" class:hidden={activeSubMenu !== index}>
              <ul
                class="bg-surface-200 dark:bg-surface-800 flex flex-col divide-y divide-black rounded-md p-4 text-black shadow-md dark:divide-white"
              >
                {#each item.subItems as subItem (subItem.name)}
                  <a
                    class="hover:bg-primary-600 min-w-max px-4 py-2 hover:text-white dark:text-white"
                    href={subItem.href}
                  >
                    {subItem.name}
                  </a>
                {/each}
              </ul>
            </div>
          </li>
        {/if}
      {/each}
    </ul>
    <LightSwitch />
    <button aria-label="Open sidebar" class="mr-4 sm:hidden" onclick={() => toggleSidebar()}>
      <span>
        <svg viewBox="0 0 100 80" class="h-4 w-4 fill-white">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg>
      </span>
    </button>
  {/snippet}
  <!-- <svelte:fragment slot="headline" /> -->
</AppBar>
