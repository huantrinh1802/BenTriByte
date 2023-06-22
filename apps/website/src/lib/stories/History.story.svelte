<script lang="ts">
  export let Hst: any;
  import History from '$lib/components/History.svelte';
  let content = {
    title: 'Software Engineer',
    subtitle: 'Fonto',
    timeline: '12/2021 - Present',
    location: 'Sydney, Australia',
    tasks: [
      'Odio enim asperiores. Odit eius dolor minima perferendis maxime commodi illum et. Repudiandae impedit veniam qui repellendus. Est minima dolorem voluptatem eum id cum officia.',
      'Odio enim asperiores. Odit eius dolor minima perferendis maxime commodi illum et. Repudiandae impedit veniam qui repellendus. Est minima dolorem voluptatem eum id cum officia.',
    ],
  };
</script>

<Hst.Story>
  <History {content} />
</Hst.Story>
