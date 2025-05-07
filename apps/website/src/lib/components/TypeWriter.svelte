<script lang="ts">
  interface Props {
    words?: string;
    style?: string;
  }

  let { words = 'Hello world', style = 'text-4xl' }: Props = $props();
  let currentWords = $state([]);
  let current = 0;
  let end = false;
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

<div class="flex w-full">
  <div class={`typewriter h-fit ${style}`} style="font-family: 'Santanelli'; font-display: optimal;">
    {#each currentWords as char}
      {char}
    {/each}
  </div>
</div>

<style lang="postcss">
  .typewriter {
    position: relative;
    letter-spacing: 0.2em; /* Adjust as needed */
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
      width: 100%;
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
