<script lang="ts">
  import RSS from '~icons/foundation/rss';
  import { PUBLIC_SITE_URL } from '$env/static/public';
  export let style = '';
  let trigger: HTMLButtonElement;
  let copied = false;
</script>

<button
  bind:this={trigger}
  title="Subscribe to RSS"
  aria-label="Subscribe to RSS"
  on:click={async () => {
    copied = !copied;
    navigator.clipboard.writeText(`${PUBLIC_SITE_URL}/blogs/feed`);
    await new Promise((resolve) => {
      setTimeout(() => {
        copied = !copied;
        resolve;
      }, 800);
    });
  }}
  class={`btn btn-icon h-10 w-fit bg-primary-500 ${style}`}
>
  {#if copied}
    <p class="px-2 py-1 text-base">Copied link</p>
  {:else}
    <RSS class="px-2 text-2xl text-white" />
  {/if}
</button>
