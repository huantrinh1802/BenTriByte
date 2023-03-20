<script lang="ts">

  export let component: any;
  export let props: any[] = [];
  export let numberOfCols = 3;
</script>

<div class={`grid grid-cols-${numberOfCols} gap-10`}>
  {#each props as prop}
    <svelte:component
      this={component}
      {...prop}
    />
  {/each}
</div>
