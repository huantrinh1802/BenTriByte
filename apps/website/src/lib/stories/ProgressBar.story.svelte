<script lang="ts">
  export let Hst: any;
  import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<Hst.Story>
  <ProgressBar
    percentage={50}
    title="Python"
  />
</Hst.Story>
