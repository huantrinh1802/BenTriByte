<script lang="ts">
  import { run } from 'svelte/legacy';

  interface Props {
    url: string;
    urlMetadata: any;
  }

  let { url, urlMetadata }: Props = $props();
  let breadcrumbs: any = $state([]);
  run(() => {
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
  });
</script>

<ol class="breadcrumb">
  {#each breadcrumbs as bc (bc.name)}
    {#if !bc.current}
      <li class="crumb">
        <a
          class="mle-link"
          href={bc.url}>{bc.name}</a>
      </li>
      <li
        class="crumb-separator"
        aria-hidden="true">
        ›
      </li>
    {:else}
      <li class="mle-link">{bc.name}</li>
    {/if}
  {/each}
</ol>
