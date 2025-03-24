<script lang="ts">
  import RSS from '~icons/foundation/rss';
  import { PUBLIC_SITE_URL } from '$env/static/public';
  import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  export let style = '';
  let trigger: HTMLButtonElement;
  const popupClick: PopupSettings = {
    event: 'click',
    target: 'popupClick',
    placement: 'bottom',
    state: async (event) => {
      if (event.state) {
        await new Promise((resolve) => {
          setTimeout(() => {
            trigger.click();
            resolve;
          }, 500);
        });
      }
    },
  };
</script>

<button
  bind:this={trigger}
  title="Subscribe to RSS"
  aria-label="Subscribe to RSS"
  on:click={async () => {
    navigator.clipboard.writeText(`${PUBLIC_SITE_URL}/blogs/feed`);
  }}
  class={`btn btn-icon h-10 w-10 bg-primary-500 ${style}`}
  use:popup={popupClick}
>
  <RSS class="text-2xl text-white" />
</button>
<div class="card variant-filled-primary px-4 py-1" data-popup="popupClick">
  <p class="p-0 text-sm">Copied link</p>
  <!-- <div class="arrow variant-filled-primary" /> -->
</div>
