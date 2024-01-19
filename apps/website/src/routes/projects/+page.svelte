<script lang="ts">
  export let data;

  // pull the store reference from the route props
</script>

<div class="grid rounded-md bg-secondary-400 p-2">
  {#each data.repositories as repo}
    <div class="card prose dark:prose-invert">
      <h2 class="text-center">{repo.name}</h2>
      <div>{repo.description}</div>
      <div>
        <a target="_blank" href={repo.homepageUrl} class="btn">Visit the page</a>
      </div>
      {#each repo.languages.nodes as language}
        <div class="language-wrapper" style={`--backgroundColor: ${language.color}`}>
          <p class="language">{language.name}</p>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  .language-wrapper {
    mix-blend-mode: screen;
    background-color: var(--backgroundColor);
  }
  .language {
    color: black;
    mix-blend-mode: difference;
  }
</style>
