<script lang="ts">
  import RightArrow from '~icons/solar/alt-arrow-right-bold-duotone';
  type HistoryContent = {
    title: string;
    subtitle?: string;
    timeline: string;
    location?: string;
    summary?: string;
    tasks?: string[];
  };
  interface Props {
    content?: HistoryContent;
  }

  let { content = null }: Props = $props();
</script>

<div class="grid gap-3 print:break-before-auto print:gap-2">
  <h3 class="print:!text-md">{content.title}</h3>
  {#if content.subtitle}
    <h4 class="text-surface-700-200-token print:!text-sm print:!text-gray-800">{content.subtitle}</h4>
  {/if}
  <div class="text-surface-700-200-token flex justify-between print:!text-gray-800">
    <div class="text-sm print:!text-xs">{content.timeline}</div>
    <div class="text-sm print:!text-xs">{content.location}</div>
  </div>
  {#if content.summary}
    <p class="py-2">{content.summary}</p>
  {/if}
  {#if content.tasks}
    <ul class="grid gap-2 pl-6 print:break-inside-auto print:gap-1">
      {#each content.tasks as task}
        <li class="flex !whitespace-normal">
          <span><RightArrow /></span>
          <p>{task}</p>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="postcss">
  @media print {
    p,
    span {
      font-size: 12px;
      line-height: 16px;
    }
  }
</style>
