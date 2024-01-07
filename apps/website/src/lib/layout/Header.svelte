<script lang="ts">
  import { base } from '$app/paths';
  import { AppBar, LightSwitch, popup, getDrawerStore } from '@skeletonlabs/skeleton';
  export let menuItems = null;
  const drawerStore = getDrawerStore();
</script>

<AppBar background="bg-primary-700 text-white rounded">
  <svelte:fragment slot="lead"
    ><button
      class="btn btn-sm mr-4 sm:hidden"
      on:click={() => drawerStore.open({ id: 'sidebar' })}
    >
      <span>
        <svg
          viewBox="0 0 100 80"
          class="h-4 w-4 fill-white"
        >
          <rect
            width="100"
            height="20"
          />
          <rect
            y="30"
            width="100"
            height="20"
          />
          <rect
            y="60"
            width="100"
            height="20"
          />
        </svg>
      </span>
    </button>
    <a
      class="flex items-center gap-4"
      aria-label="Home"
      href={`${base}/`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <rect
          x="2"
          y="10"
          width="44"
          height="28"
          fill="#007777"
          stroke="none"
        />
        <defs>
          <mask id="ipSTerminal0">
            <g
              fill="none"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <rect
                class="!fill-white !stroke-white"
                width="40"
                height="32"
                x="4"
                y="8"
                rx="2"
              />
              <path
                stroke="#000"
                stroke-linecap="round"
                d="m12 18l7 6l-7 6m11 2h13"
              />
            </g>
          </mask>
        </defs>
        <path
          class="!fill-white"
          d="M0 0h48v48H0z"
          mask="url(#ipSTerminal0)"
        />
      </svg>
      <p style="font-family: 'Santanelli';">BenTri Byte</p>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <ul class="hidden gap-4 sm:flex">
      {#each menuItems as item}
        {#if item.href != undefined}
          <li><a href={item.href}>{item.name}</a></li>
        {:else}
          <li>
            <button
              class=""
              use:popup={{ event: 'click', target: item.id, placement: 'bottom' }}
            >
              {item.name}
            </button>
          </li>
          <div data-popup={item.id}>
            <ul class="flex flex-col divide-y divide-black rounded-md bg-surface-200 p-4 text-black shadow-md dark:divide-white dark:bg-surface-800">
              {#each item.subItems as subItem}
                <a
                  class="px-4 py-2 hover:bg-primary-600 hover:text-white dark:text-white"
                  href={subItem.href}
                >
                  {subItem.name}
                </a>
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
