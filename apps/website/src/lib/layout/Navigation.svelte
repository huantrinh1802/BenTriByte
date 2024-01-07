<script lang="ts">
  import { Accordion, AccordionItem, getDrawerStore } from '@skeletonlabs/skeleton';
  export let menuItems;
  const drawerStore = getDrawerStore();
</script>

<div class="flex flex-col gap-4 px-4">
  {#each menuItems as item}
    {#if item.href != undefined}
      <a
        class="rounded-sm p-2 hover:bg-primary-600 hover:text-white"
        on:click={() => drawerStore.close()}
        href={item.href}>{item.name}</a
      >
    {:else}
      <Accordion>
        <AccordionItem
          padding="p-2"
          hover="hover:bg-primary-600 hover:text-white"
        >
          <svelte:fragment slot="summary">{item.name}</svelte:fragment>
          <svelte:fragment slot="content">
            <div class="grid divide-y divide-black rounded-md bg-surface-200 p-4 dark:divide-white dark:bg-surface-700">
              {#each item.subItems as subItem}
                <a
                  on:click={() => drawerStore.close()}
                  class="w-full p-2 hover:bg-primary-600 hover:text-white"
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
