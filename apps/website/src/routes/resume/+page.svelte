<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  if (browser) {
    goto(resolve('/resume/ben-trinh'));
  }
</script>
