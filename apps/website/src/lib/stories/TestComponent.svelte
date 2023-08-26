<script>
  export let props;
</script>

<a
  href={props.url}
  target="_blank"
  class="flex w-full justify-center">
  <img
    class="rounded-container-token hover:brightness-125"
    src={props.imageUrl}
    alt={props.name}
    title={props.name}
    loading="lazy" />
</a>
