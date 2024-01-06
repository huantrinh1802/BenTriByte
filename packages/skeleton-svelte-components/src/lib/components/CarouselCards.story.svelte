<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import PostCard from '$lib/components/post/PostCard.svelte';
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;
  const contents: any[] = [
    {
      id: '3b4f3b70-32fc-5f0a-bd87-9881b1f6c27e',
      img: 'https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png',
      tags: [
        { name: 'visa', url: '' },
        { name: 'visa', url: '' },
      ],
      date: '2023-01-22',
      title: 'How to apply for you visa? 1',
      summary:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
    },
    {
      id: '3b4f3b70-32fc-5f0a-bd87-9881b1f6c27e',
      img: 'https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png',
      tags: [
        { name: 'visa', url: '' },
        { name: 'visa', url: '' },
      ],
      date: '2023-01-22',
      title: 'How to apply for you visa? 2',
      summary:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
    },
    {
      id: '3b4f3b70-32fc-5f0a-bd87-9881b1f6c27e',
      img: 'https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png',
      tags: [
        { name: 'visa', url: '' },
        { name: 'visa', url: '' },
      ],
      date: '2023-01-22',
      title: 'How to apply for you visa? 3',
      summary:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
    },
  ];
  let items = contents.map((item) => {
    return {
      component: PostCard,
      props: {
        post: item,
      },
    };
  });
</script>

<Hst.Story layout={{ type: 'single' }}>
  <Carousel {items} />
</Hst.Story>
