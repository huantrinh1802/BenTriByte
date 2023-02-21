<script lang="ts">
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
  <svelte:fragment slot="lead">(icon)</svelte:fragment>
  <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
  <!-- <svelte:fragment slot="headline" /> -->
</AppBar>
