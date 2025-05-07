<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  interface Props {
    Hst: HstType;
  }

  let { Hst }: Props = $props();
</script>

<Hst.Story>
  <ProgressBar percentage={50} title="Python" />
</Hst.Story>
