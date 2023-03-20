<script lang="ts">
  export let url: string;
  export let urlMetadata: any;
  let breadcrumbs: any = [];
  $: {
    breadcrumbs = [
      {
        name: 'Home',
        url: '/',
        current: false,
      },
    ];
    let urlArray: string[] = url.split('/');
    breadcrumbs.push({
      name: (urlArray?.at(-2) as string).toLocaleUpperCase().replace('_', ' '),
      url: url.slice(0, url.indexOf(urlArray.at(-1) as string)),
      current: false,
    });
    if (urlMetadata?.type !== undefined) {
      breadcrumbs.push({
        name: urlMetadata?.type.toUpperCase().replace('_', ' '),
        url: `${url.slice(0, url.indexOf(urlArray.at(-1) as string))}?type=${urlMetadata?.type?.toLowerCase()}`,
        current: false,
      });
    }
    breadcrumbs.push({
      name: urlMetadata.name,
      url: url,
      current: true,
    });
  }
</script>

<ol class="breadcrumb">
  {#each breadcrumbs as bc}
    {#if !bc.current}
      <li class="crumb">
        <a
          class="mle-link"
          href={bc.url}>{bc.name}</a
        >
      </li>
      <li
        class="crumb-separator"
        aria-hidden
      >
        &rsaquo;
      </li>
    {:else}
      <li class="mle-link">{bc.name}</li>
    {/if}
  {/each}
</ol>
