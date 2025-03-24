<script lang="ts">
  import PostCard from './PostCard.svelte';
  export let Hst: any;
  const post = {
    id: '3b4f3b70-32fc-5f0a-bd87-9881b1f6c27e',
    coverImage: { url: 'https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png' },
    tags: ['visa', 'migration'],
    date: '2023-01-22',
    title: 'How to apply for you visa?',
    summary:
      'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
    slug: 'fasdf-safasdf-asdfas',
  };
</script>

<Hst.Story layout={{ type: 'single' }}>
  <div class="flex flex-col gap-20">
    <div>
      <h1>Single post</h1>
      <PostCard {post} />
    </div>
    <div>
      <h1>Posts in grid</h1>
      <div class=" grid h-screen w-full grid-cols-2 gap-8">
        <PostCard {post} />
        <PostCard {post} />
        <PostCard {post} />
        <PostCard {post} />
      </div>
    </div>
  </div>
</Hst.Story>
