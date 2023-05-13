<script lang="ts">
  import { browser } from '$app/environment';
  import { fade, slide } from 'svelte/transition';
  export let words: string = 'Hello world';
  export let style: string = 'text-4xl';
  let currentWords = [];
  let current = 0;
  let end: boolean = false;
  function start() {
    let autoplay = setInterval(() => {
      if (current < words.length) {
        currentWords.push(words.at(current));
        currentWords = currentWords;
      } else {
        end = true;
        clearInterval(autoplay);
      }
      current++;
    }, 200);
  }
  export function reset() {
    if (end) {
      end = false;
      currentWords = [];
      current = 0;
      currentWords = currentWords;
      start();
    }
  }
  start();
</script>

<span
  class={`typewriter h-fit ${style}`}
  on:mouseenter={reset}
>
  {#each currentWords as char}
    {char}
  {/each}
</span>

<style lang="postcss">
  .typewriter {
    position: relative;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end);
  }
  .typewriter::after {
    content: '_';
    color: teal;
    animation: blink-caret 0.8s step-end infinite;
  }
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: fit-content;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      color: transparent;
    }
    50% {
      color: teal;
    }
  }
</style>
