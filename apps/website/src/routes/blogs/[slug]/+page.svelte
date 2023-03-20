<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="prose dark:prose-invert">
  <svelte:component this={data.blog?.default} />
</div>
