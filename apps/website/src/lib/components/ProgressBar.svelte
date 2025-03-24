<script lang="ts">
  export let title: string = '';
  export let percentage: number = 50;
</script>

<div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white">{title}</span>
  <!-- <span class="text-sm font-medium text-blue-700 dark:text-white">{percentage}%</span> -->
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class={`bg-blue-600 h-2.5 rounded-full w-[${percentage}%]`} />
</div>
