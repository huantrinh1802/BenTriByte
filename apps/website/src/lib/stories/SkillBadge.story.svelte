<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  import SkillBadge from '../components/SkillBadge.svelte';
  import Python from '~icons/skill-icons/python-dark';
  import AWS from '~icons/skill-icons/aws-dark';
  interface Props {
    Hst: HstType;
  }

  let { Hst }: Props = $props();
  let percentage = $state(50);
</script>

<Hst.Story>
  <Hst.Variant title="Python">
    <Hst.Slider bind:value={percentage} step={5} min={5} max={100} title="Percentage" />
    <div class="h-20 w-20">
      <SkillBadge {percentage}>
        {#snippet logo()}
          <Python />
        {/snippet}
        {#snippet content()}
          <div>I am very good at</div>
        {/snippet}
      </SkillBadge>
    </div>
  </Hst.Variant>
  <Hst.Variant title="AWS">
    {#snippet controls()}
      Content: <input type="number" bind:value={percentage} />
    {/snippet}
    <div class="mx-auto h-1/2 w-1/2">
      <SkillBadge {percentage}>
        {#snippet logo()}
          <AWS />
        {/snippet}
      </SkillBadge>
    </div>
  </Hst.Variant>
</Hst.Story>
