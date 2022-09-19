<script lang="ts" context="module">
  import { onDestroy, onMount } from 'svelte';
  import type { TransitionConfig } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { buildClass } from '../core';
</script>

<script lang="ts">
  export let ref: HTMLElement;
  export let opened = false;
  export let animation: (node: Element, params: any) => TransitionConfig = fade;
  export let options: any = { duration: 150 };
  export let zIndex = 50;
  export let fullWidth = true;

  let onTop = true;

  const update = () => {
    if (!ref) return;
    const bounding = ref.getBoundingClientRect();

    const yWithHeight = bounding.top + 200 + 48;
    onTop = window.innerHeight <= yWithHeight;
  };

  $: {
    ref;
    update();
  }

  onMount(() => {
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update);
  });

  onDestroy(() => {
    window.removeEventListener('resize', update);
    window.removeEventListener('scroll', update);
  });
</script>

{#if opened}
  <div
    class={buildClass('dropdown shadow-sm')}
    transition:animation={options}
    style:top={!onTop ? '100%' : 'auto'}
    style:bottom={onTop ? '100%' : 'auto'}
    style:width={fullWidth ? '100%' : 'max-content'}
    style:z-index={zIndex}
  >
    <slot />
  </div>
{/if}

<style lang="postcss">
  .dropdown {
    max-width: 100%;
    max-height: 200px;
    position: absolute;
    left: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    overflow-y: auto;
    background-color: var(--theme-secondary-default);
    color: var(--theme-text-default);
    border-radius: 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid var(--theme-secondary-active);
  }

  .dropdown__wrapper {
    position: relative;
  }
</style>
