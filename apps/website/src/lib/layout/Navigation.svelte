<script lang="ts">
  import { Accordion, AccordionItem, getDrawerStore } from '@skeletonlabs/skeleton';
  export let menuItems;
  const drawerStore = getDrawerStore();
</script>

<ul class="flex flex-col gap-4 px-4">
  {#each menuItems as item}
    {#if item.href != undefined}
      <li>
        <a
          on:click={() => drawerStore.close()}
          href={item.href}>{item.name}</a>
      </li>
    {:else}
      <Accordion>
        <AccordionItem padding="p-0">
          <svelte:fragment slot="summary">{item.name}</svelte:fragment>
          <svelte:fragment slot="content">
            <ul class="flex flex-col rounded-md bg-surface-200 dark:bg-surface-700 px-4 py-4 divide-y divide-black dark:divide-white">
              {#each item.subItems as subItem}
                <li class="flex py-2">
                  <a
                    on:click={() => drawerStore.close()}
                    class="w-full"
                    href={subItem.href}>
                    {subItem.name}
                  </a>
                </li>
              {/each}
            </ul>
          </svelte:fragment>
        </AccordionItem>
      </Accordion>
    {/if}
  {/each}
</ul>
