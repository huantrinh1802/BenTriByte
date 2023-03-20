<script lang="ts">
  import ArticleLayout from './ArticleLayout.svelte';
  export let Hst: any;
  const post = {
    id: '3b4f3b70-32fc-5f0a-bd87-9881b1f6c27e',
    coverImage: {
      url: 'https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png',
    },
    tags: ['visa', 'visa'],
    date: '2023-01-22',
    title: 'How to apply for you visa?',
    summary:
      'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
    content: {
      html: '<p>dfsdfsd</p>',
    },
  };
</script>

<Hst.Story>
  <div class="h-screen">
    <ArticleLayout article={post} />
  </div>
</Hst.Story>
