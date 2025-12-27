<script lang="ts">
  import { sineInOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  // import GreaterThan from '~icons/ic/baseline-greater-than';

  interface Props {
    // import LessThan from '~icons/ic/baseline-less-than';
    items: any;
    duration?: number;
    twStyle?: string;
    indicatorsStyle?: string;
  }

  let { items, duration = 3000, twStyle = '', indicatorsStyle = 'bottom-4' }: Props = $props();
  export const autoplayEnabled = false;

  let current = $state(0);

  let direction = $state(500);

  let autoplay: number | null = null;
  if (autoplayEnabled) {
    autoplay = window.setInterval(() => {
      if (current == items.length - 1) {
        calcDirection('neg');
        current = 0;
      } else {
        calcDirection('pos');
        current++;
      }
    }, duration);
  }
  function stopAutoplay() {
    if (autoplay !== null) {
      clearInterval(autoplay);
      autoplay = null;
    }
  }
  function calcDirection(dir: 'pos' | 'neg') {
    if (dir === 'pos') {
      direction = Math.abs(direction);
    } else {
      direction = -1 * Math.abs(direction);
    }
  }
</script>

<div class={`carousel ${twStyle}`}>
  <!-- Carousel wrapper -->
  <div class="wrapper">
    {#each items as item, index}
      {#if current === index}
        <div
          class={`item`}
          data-value={index}
          in:fly|global={{
            x: direction,
            easing: sineInOut,
          }}>
          <item.component {...item.props} />
        </div>
      {/if}
    {/each}
  </div>
  <!-- Slider indicators -->
  <div class={`indicators ${indicatorsStyle}`}>
    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
    {#each items as _item, index}
      <button
        class="btn btn-sm"
        aria-current={current === index ? 'true' : 'false'}
        aria-label={`Slide ${index + 1}`}
        onclick={() => {
          stopAutoplay();
          if (current > index) {
            calcDirection('neg');
          } else {
            calcDirection('pos');
          }
          current = index;
        }}
        type="button"
        class:active={current === index}
        data-value={index}></button>
    {/each}
  </div>
  <!-- Slider controls -->
  <button
    onclick={() => {
      stopAutoplay();
      calcDirection('neg');
      if (current === 0) {
        current = items.length - 1;
      } else {
        current--;
      }
    }}
    type="button"
    class="controls top-0 left-0"
    data-carousel-prev="">
    <span class="item">
      <p>GT</p>
      <span class="hidden">Previous</span>
    </span>
  </button>
  <button
    onclick={() => {
      stopAutoplay();
      calcDirection('pos');
      if (current == items.length - 1) {
        current = 0;
      } else {
        current++;
      }
    }}
    type="button"
    class="controls top-0 right-0"
    data-carousel-next="">
    <span class="item flex items-center justify-center">
      >
      <span class="hidden">Next</span>
    </span>
  </button>
</div>

<style lang="postcss">
  .carousel {
    @apply relative;
  }
  .carousel .wrapper {
    @apply relative h-max rounded-lg;
  }
  .carousel .wrapper .item {
    @apply inset-0 translate-x-0 transform transition-all duration-700 ease-in-out;
  }

  .carousel .indicators {
    @apply absolute left-1/2 z-30 flex -translate-x-1/2 space-x-3;
  }
  .carousel .indicators .btn {
    @apply rounded-full bg-slate-500;
  }
  .carousel .indicators .active {
    @apply bg-slate-400 hover:dark:bg-white;
  }
  .carousel .controls {
    @apply absolute bottom-0 z-30 flex h-full cursor-pointer items-center justify-center focus:outline-none md:px-2;
  }
  .carousel .controls .item {
    @apply inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 sm:h-10 sm:w-10 dark:bg-gray-800/30;
  }
</style>
