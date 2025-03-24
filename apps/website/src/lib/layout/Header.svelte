<script lang="ts">
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  export let menuItems = null;
</script>

<AppBar>
  <svelte:fragment slot="lead"><p>Kong Studio</p></svelte:fragment>
  <svelte:fragment slot="trail">
    <ul class="flex gap-4">
      {#each menuItems as item}
        <li><a href={item.href}>{item.name}</a></li>
      {/each}
    </ul>
    <LightSwitch />
  </svelte:fragment>
  <!-- <svelte:fragment slot="headline" /> -->
</AppBar>
