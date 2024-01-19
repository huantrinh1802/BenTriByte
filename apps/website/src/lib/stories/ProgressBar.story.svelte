<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;
  import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<Hst.Story>
  <ProgressBar percentage={50} title="Python" />
</Hst.Story>
