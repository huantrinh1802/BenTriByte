<script lang="ts">
  import { page } from '$app/stores';
  import { Accordion, AccordionItem, getDrawerStore } from '@skeletonlabs/skeleton';
  export let menuItems,
    bg = '';
  const drawerStore = getDrawerStore();
</script>

<div class={`hide-scrollbar flex min-w-[20ch] flex-col gap-4 overflow-y-auto py-2 pl-4 print:hidden ${bg} h-full`}>
  {#each menuItems as item}
    {#if item.href != undefined}
      <a
        class="highlight rounded-l-2xl px-4 py-2"
        class:active={item.href === `${$page.url.pathname}${$page.url.hash}`}
        on:click={() => drawerStore.close()}
        href={item.href}>{item.name}</a
      >
    {:else}
      <Accordion>
        <AccordionItem padding="py-2 pl-2" regionCaret="!mx-4" hover="highlight">
          <svelte:fragment slot="summary">{item.name}</svelte:fragment>
          <svelte:fragment slot="content">
            <div class="grid divide-black rounded-l-2xl dark:divide-white">
              {#each item.subItems as subItem}
                <a
                  on:click={() => drawerStore.close()}
                  class="highlight w-full rounded-l-2xl px-4 py-2"
                  class:active={subItem.href === `${$page.url.pathname}${$page.url.hash}` ||
                    ($page.params.year && subItem.href === $page.url.pathname.split(`/${$page.params.year}`)[0])}
                  href={subItem.href}
                >
                  {subItem.name}
                </a>
              {/each}
            </div>
          </svelte:fragment>
        </AccordionItem>
      </Accordion>
    {/if}
  {/each}
</div>

<style lang="postcss">
  .active {
    --decorate-corner-size: 1em;
    --background-color: var(--color-surface-50);
    position: relative;
    background-color: rgb(var(--background-color));
  }
  :global(html.dark) .active {
    --background-color: var(--color-surface-900);
  }
  .active:not(:hover)::after {
    content: '';
    position: absolute;
    bottom: calc(var(--decorate-corner-size) * -1);
    right: 0;
    width: var(--decorate-corner-size);
    height: var(--decorate-corner-size);
    box-shadow: 4px -4px 0 4px rgb(var(--background-color));
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
    box-shadow: 4px 4px 0 4px rgb(var(--background-color));
    @apply rounded-br-2xl;
    z-index: 0;
  }
  .highlight:hover {
    @apply z-20 bg-primary-600 text-white;
  }
</style>
