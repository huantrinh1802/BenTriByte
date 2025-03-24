<script lang="ts">
  import '../app.postcss';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../theme.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import Header from '$lib/layout/Header.svelte';
  function scrollHandler(event: UIEvent & { currentTarget: EventTarget & HTMLDivElement }) {
    console.log(event.currentTarget.scrollTop);
  }
</script>

<AppShell on:scroll={scrollHandler}>
  <svelte:fragment slot="header"><Header /></svelte:fragment>
  <!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
  <!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
  <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
  <!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
