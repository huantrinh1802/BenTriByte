<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import img from '$lib/assets/background-images/post_1.jpg';
  export let Hst: any;
  let content = {
    title: 'quisquam sint et',
    contentImage: {
      url: img,
    },
    imgAlt: 'mockup',
    content: {
      html: '<p>Impedit deserunt et qui quia nemo. Distinctio sit praesentium porro ut velit ab distinctio sunt quia. Dicta provident pariatur. Qui provident optio id iste. Quibusdam sed cumque.</p>',
    },
  };
</script>

<Hst.Story>
  <div class="card">
    <Card {content} />
    <Card
      {content}
      reverse={true} />
  </div>
</Hst.Story>

<style lang="postcss">
  .card {
    @apply flex h-screen flex-col gap-10 bg-white;
  }
</style>
