<script lang="ts">
  import { AppBar, LightSwitch, popup, getDrawerStore } from '@skeletonlabs/skeleton';
  export let menuItems = null;
  const drawerStore = getDrawerStore();
  const popupClick = {
    event: 'click',
    target: 'popupClick',
    placement: 'top',
  };
</script>

<AppBar background="bg-primary-700 text-white">
  <svelte:fragment slot="lead"
    ><button
      class="btn btn-sm mr-4 sm:hidden"
      on:click={() => drawerStore.open({ id: 'sidebar' })}>
      <span>
        <svg
          viewBox="0 0 100 80"
          class="fill-token h-4 w-4">
          <rect
            width="100"
            height="20" />
          <rect
            y="30"
            width="100"
            height="20" />
          <rect
            y="60"
            width="100"
            height="20" />
        </svg>
      </span>
    </button>
    <p>Kong Studio</p></svelte:fragment>
  <svelte:fragment slot="trail">
    <ul class="hidden gap-4 sm:flex">
      {#each menuItems as item}
        {#if item.href != undefined}
          <li><a href={item.href}>{item.name}</a></li>
        {:else}
          <li>
            <button
              class=""
              use:popup={{ event: 'click', target: item.id, placement: 'bottom' }}>
              {item.name}
            </button>
          </li>
          <div data-popup={item.id}>
            <ul class="flex flex-col text-black rounded-md bg-surface-200 divide-y divide-black dark:divide-white dark:bg-surface-800 p-4 shadow-md">
              {#each item.subItems as subItem}
                <li class="px-4 py-2 hover:bg-primary-600 hover:text-white dark:text-white">
                  <a href={subItem.href}>
                    {subItem.name}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      {/each}
    </ul>
    <LightSwitch />
  </svelte:fragment>
  <!-- <svelte:fragment slot="headline" /> -->
</AppBar>
