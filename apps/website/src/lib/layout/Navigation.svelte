<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { toggleSidebar } from '$lib/utils/sidebar';
  import { Accordion } from '@skeletonlabs/skeleton-svelte';
  interface Props {
    menuItems: any;
    bg?: string;
  }

  let { menuItems, bg = '' }: Props = $props();
</script>

<div class={`hide-scrollbar flex min-w-[20ch] flex-col gap-4 overflow-y-auto py-2 pl-4 print:hidden ${bg} h-full`}>
  {#each menuItems as item (item.name)}
    {#if item.href != undefined}
      <a
        class="highlight rounded-l-2xl px-4 py-2"
        class:active={item.href === `${page.url.pathname}${page.url.hash}`}
        onclick={() => toggleSidebar()}
        href={resolve(item.href)}>{item.name}</a
      >
    {:else}
      <Accordion collapsible>
        <Accordion.Item
          controlClasses="hover:bg-transparent"
          controlPadding="py-2 pl-4"
          indicatorClasses="!mx-4"
          value={item.name}
          panelPadding="py-2 pl-4"
        >
          {#snippet control()}
            {item.name}
          {/snippet}
          {#snippet panel()}
            <div class="grid divide-black rounded-l-2xl dark:divide-white">
              {#each item.subItems as subItem (subItem.name)}
                <a
                  onclick={() => toggleSidebar()}
                  class="highlight w-full rounded-l-2xl py-2 pl-4"
                  class:active={subItem.href === `${page.url.pathname}${page.url.hash}` ||
                    (page.params.year && subItem.href === page.url.pathname.split(`/${page.params.year}`)[0])}
                  href={resolve(subItem.href)}
                >
                  {subItem.name}
                </a>
              {/each}
            </div>
          {/snippet}
        </Accordion.Item>
      </Accordion>
    {/if}
  {/each}
</div>

<style lang="postcss">
  @reference "../../app.css";
  .active {
    --decorate-corner-size: 1em;
    --background-color: var(--color-surface-50);
    position: relative;
    background-color: var(--background-color);
    /* @apply bg-surface-50-950; */
  }
  :global([data-mode='dark']) .active {
    --background-color: var(--color-surface-950);
  }
  .active:not(:hover)::after {
    content: '';
    position: absolute;
    bottom: calc(var(--decorate-corner-size) * -1);
    right: 0;
    width: var(--decorate-corner-size);
    height: var(--decorate-corner-size);
    box-shadow: 4px -4px 0 4px var(--background-color);
    @apply rounded-tr-2xl;
    z-index: 0;
  }
  .active:not(:hover)::before {
    content: '';
    position: absolute;
    top: calc(var(--decorate-corner-size) * -1);
    right: 0;
    width: var(--decorate-corner-size);
    height: var(--decorate-corner-size);
    box-shadow: 4px 4px 0 4px var(--background-color);
    @apply rounded-br-2xl;
    z-index: 0;
  }
  .highlight:hover {
    @apply bg-primary-600 z-20 text-white;
  }
</style>
