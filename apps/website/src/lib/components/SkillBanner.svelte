<script lang="ts">
  import { browser } from '$app/environment';

  export let percentage = 85;
  $: hsl = (() => {
    if (percentage >= 100) {
      percentage = 100;
    } else if (percentage <= 0) {
      percentage = 1;
    }
    let hue = (120 / 100) * percentage;
    return `hsl(${hue}, 100%, 30%)`;
  })();
  let animating: boolean = false;
  let duration: number = 1;
  let direction: boolean = true;
  export let logoOnly: boolean = true;
  async function animate() {
    direction = !direction;
    if (browser) {
      animating = true;
      new Promise((resolve) => {
        setTimeout(() => {
          animating = false;
          resolve;
        }, duration * 1000);
      });
    }
  }
  function handleMouseMove(e: MouseEvent) {
    direction = !direction;
  }
</script>

<div
  class="rotate relative flex h-full justify-center items-center"
  style={`--dashoffset: ${percentage};`}
  on:mouseenter={animate}
  on:mouseleave={handleMouseMove}
>
  <div
    class="ks-skill-icon-wrapper h-full w-full relative grow flex items-center justify-center "
    class:rotated={direction}
    class:logo-only={logoOnly}
  >
    <div class="absolute ks-banner-logo h-full w-full p-[20%] grow flex items-center justify-center">
      <slot name="logo" />
    </div>
    <div class="absolute ks-banner-content flex items-center justify-center">
      <slot name="content" />
    </div>
  </div>
  <svg
    class="absolute w-full h-full"
    viewBox="0 0 36 36"
  >
    <path
      id="progress-bar"
      class:progress-bar-animating={animating}
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke={hsl}
      stroke-width="1.5"
      stroke-dasharray={`${percentage}, 100`}
    />
  </svg>
</div>

<style>
  .progress-bar-animating {
    stroke-dashoffset: var(--dashoffset);
    animation: complete 1s linear forwards;
  }

  @keyframes complete {
    to {
      stroke-dashoffset: 0;
    }
  }
  .ks-skill-icon-wrapper > .ks-banner-content {
    opacity: 0;
  }
</style>
