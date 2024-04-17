<script lang="ts">
  import GreaterThan from '~icons/ic/baseline-greater-than';
  import LessThan from '~icons/ic/baseline-less-than';

  export let items: any;
  export let duration = 6000;
  export let twStyle = '';
  export let indicatorsStyle = 'bottom-4';
  export let showControl = true;
  export let autoplayEnabled = false;
  export let group = 2;
  export let component = null;
  $: console.log(group);
  let current = 0;
  let direction = 30;
  let splitItems = [];
  $: {
    if (items.length >= group) {
      const iterations = Math.floor(items.length / group);
      let finalArr = [];
      for (let i = 0; i < iterations; i++) {
        let tmpArr = [];
        for (let j = 0; j < group; j++) {
          tmpArr.push({
            type: 'custom',
            props: items[i + j],
          });
        }
        finalArr.push(tmpArr);
      }
      splitItems = finalArr;
    }
  }
  let autoplay: NodeJS.Timer | null = null;
  if (autoplayEnabled) {
    autoplay = setInterval(() => {
      if (current == splitItems.length - 1) {
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
    {#each splitItems as items, index}
      <!-- {#if current === index} -->
      <div
        class:hide={current !== index}
        class={`item ${direction > 0 ? 'from-left' : 'from-right'}`}>
        {#each items as item}
          <div data-value={index}>
            {#if item.type === 'custom'}
              <svelte:component
                this={component}
                props={item.props} />
            {:else if item.type === 'img'}
              <!-- svelte-ignore a11y-missing-attribute -->
              <img
                loading="lazy"
                {...item.props}
                data-active={true} />
            {/if}
          </div>
        {/each}
        <!-- {/if} -->
      </div>
    {/each}
  </div>
  <!-- Slider indicators -->
  {#if showControl}
    <div class={`indicators ${indicatorsStyle}`}>
      {#each splitItems as _, index}
        <button
          aria-label={`Page ${index}`}
          class="btn btn-sm"
          on:click={() => {
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
          data-value={index} />
      {/each}
    </div>
    <!-- Slider controls -->
    <button
      aria-label="Previous"
      on:click={() => {
        stopAutoplay();
        calcDirection('neg');
        if (current === 0) {
          current = splitItems.length - 1;
        } else {
          current--;
        }
      }}
      type="button"
      class="controls top-0 left-0 md:-ml-8"
      data-carousel-prev="">
      <span class="item">
        <LessThan />
        <span class="hidden">Previous</span>
      </span>
    </button>
    <button
      aria-label="Next"
      on:click={() => {
        stopAutoplay();
        calcDirection('pos');
        if (current == splitItems.length - 1) {
          current = 0;
        } else {
          current++;
        }
      }}
      type="button"
      class="controls top-0 right-0 md:-mr-6"
      data-carousel-next="">
      <span class="item flex items-center justify-center">
        <GreaterThan />
        <span class="hidden">Next</span>
      </span>
    </button>
  {/if}
</div>

<style lang="postcss">
  .carousel {
    @apply relative h-full;
  }
  .carousel .wrapper {
    @apply relative h-full overflow-x-hidden rounded-lg;
  }
  .carousel .wrapper .item {
    @apply inset-0 flex h-full gap-4;
  }
  .carousel .wrapper .item.hide {
    @apply hidden opacity-0;
  }
  .carousel .wrapper .item.from-left {
    animation: left-slide-in 450ms ease-in-out;
  }
  .carousel .wrapper .item.from-right {
    animation: right-slide-in 450ms ease-in-out;
  }
  .carousel .indicators {
    @apply absolute left-1/2 z-30 flex -translate-x-1/2 space-x-3;
  }
  .carousel .indicators .btn {
    @apply bg-primary-500 rounded-full;
  }
  .carousel .indicators .active {
    @apply bg-slate-400 hover:dark:bg-white;
  }
  .carousel .controls {
    @apply absolute bottom-0 z-30 flex h-full cursor-pointer items-center justify-center focus:outline-none md:px-2;
  }
  .carousel .controls .item {
    @apply dark:bg-primary-800/30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 sm:h-10 sm:w-10;
  }
  @keyframes slideaway {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.2;
    }
    75% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      @apply translate-x-0;
    }
  }
  @keyframes left-slide-in {
    from {
      @apply translate-x-[100px] opacity-0;
    }
    to {
      @apply translate-x-0 opacity-100;
    }
  }
  @keyframes right-slide-in {
    from {
      @apply -translate-x-[100px] opacity-0;
    }
    to {
      @apply translate-x-0 opacity-100;
    }
  }
  img {
    animation: zoom-in-zoom-out 7s ease infinite;
  }
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1.05, 1.05);
    }
    100% {
      transform: scale(1, 1);
    }
  }
</style>
