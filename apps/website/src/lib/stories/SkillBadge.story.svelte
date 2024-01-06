<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;
  import SkillBadge from '../components/SkillBadge.svelte';
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
    <div class="h-20 w-20">
      <SkillBadge {percentage}>
        <Python slot="logo" />
        <div slot="content">I am very good at</div>
      </SkillBadge>
    </div>
  </Hst.Variant>
  <Hst.Variant title="AWS">
    <svelte:fragment slot="controls">
      Content: <input
        type="number"
        bind:value={percentage}
      />
    </svelte:fragment>
    <div class="mx-auto h-1/2 w-1/2">
      <SkillBadge {percentage}>
        <AWS slot="logo" />
      </SkillBadge>
    </div>
  </Hst.Variant>
</Hst.Story>
