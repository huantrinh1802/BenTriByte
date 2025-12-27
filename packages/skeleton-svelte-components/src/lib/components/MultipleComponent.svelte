<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
  export let component: any;
  export let props: any[] = [];
  export let numberOfCols = 3;
</script>

<div class={`grid grid-cols-${numberOfCols} gap-10`}>
  {#each props as prop}
    {@const Component = component}
    <Component {...prop} />
  {/each}
</div>
