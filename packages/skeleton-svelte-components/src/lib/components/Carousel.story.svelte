<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  interface Props {
    Hst: HstType;
  }

  let { Hst }: Props = $props();
  const contents: string[] = ['1', '2', '3'];
  // let items = contents.map((item) => {
  //   return {
  //     component: Span,
  //     props: {
  //       title: item,
  //     },
  //   };
  // });
</script>

<Hst.Story layout={{ type: 'single' }}>
  <!-- <Carousel {items} /> -->
</Hst.Story>
