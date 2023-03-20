<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  $: console.log(data.blog.default.render());
</script>

<div class="prose prose-invert">
  {@html data.blog.default.render().html}
</div>
