<script lang="ts">
  export let Hst: any;
  import SkillBanner from './SkillBanner.svelte';
  import Python from '~icons/skill-icons/python-dark';
  import AWS from '~icons/skill-icons/aws-dark';
  let percentage = 50;
</script>

<Hst.Story>
  <Hst.Variant title="Python">
    <Hst.Slider
      bind:value={percentage}
      step={5}
      min={5}
      max={100}
      title="Percentage"
    />
    <div class="h-1/2 w-1/2 mx-auto">
      <SkillBanner {percentage}>
        <Python slot="logo" />
        <div slot="content">I am very good at</div>
      </SkillBanner>
    </div>
  </Hst.Variant>
  <Hst.Variant title="AWS">
    <svelte:fragment slot="controls">
      Content: <input
        type="number"
        bind:value={percentage}
      />
    </svelte:fragment>
    <div class="h-1/2 w-1/2 mx-auto">
      <SkillBanner {percentage}>
        <AWS slot="logo" />
      </SkillBanner>
    </div>
  </Hst.Variant>
</Hst.Story>
