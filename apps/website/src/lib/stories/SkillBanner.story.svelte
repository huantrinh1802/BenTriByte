<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;
  import SkillBanner from '../components/SkillBanner.svelte';
  let percentage = 50;
</script>

<Hst.Story>
  <Hst.Variant title="Python">
    <Hst.Slider bind:value={percentage} step={5} min={5} max={100} title="Percentage" />

    <SkillBanner onClick={null} {percentage} skill="Python" />
  </Hst.Variant>
  <!-- <Hst.Variant title="AWS">
    <svelte:fragment slot="controls">
      Content: <input
        type="number"
        bind:value={percentage}
      />
    </svelte:fragment>
    <SkillBanner {percentage}>
      <AWS slot="logo" />
    </SkillBanner>
  </Hst.Variant> -->
</Hst.Story>
