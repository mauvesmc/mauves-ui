<script lang="ts" context="module">
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { buildClass, debouncing } from '../core';

  type ScrollType = 'auto' | 'always' | 'scroll' | 'hover' | 'never';
</script>

<script lang="ts">
  export let type: ScrollType = 'scroll';
  export let typeY: ScrollType | undefined = undefined;
  export let typeX: ScrollType | undefined = 'never';
  export let scrollbarSize = 16;
  export let thumbSize = 4;
  export let scrollHideDelay = 1000;
  export let offsetX = false;
  export let offsetY = false;

  $: finalTypeX = typeX ? typeX : type;
  $: finalTypeY = typeY ? typeY : type;

  let thumbXSize = 0;
  let thumbXPosition = 0;
  let thumbYSize = 0;
  let thumbYPosition = 0;
  let showX = false;
  let { debounce: debounceShowX, destroy: destroyShowX } =
    debouncing(scrollHideDelay);

  let showY = false;
  let { debounce: debounceShowY, destroy: destroyShowY } =
    debouncing(scrollHideDelay);

  onDestroy(() => {
    destroyShowX();
    destroyShowY();
  });

  let scrollable: HTMLDivElement;

  const updateThumb = () => {
    const height = scrollable.clientHeight;
    const contentHeight = scrollable.scrollHeight;
    thumbYSize = (height / contentHeight) * 100;

    const width = scrollable.clientWidth;
    const contentWidth = scrollable.scrollWidth;
    thumbXSize = (width / contentWidth) * 100;
  };

  const handleScroll = () => {
    updateThumb();

    thumbXPosition =
      (scrollable.scrollLeft /
        ((scrollable as any).scrollLeftMax + scrollable.clientWidth)) *
        100 ?? 0;
    thumbYPosition =
      (scrollable.scrollTop /
        ((scrollable as any).scrollTopMax + scrollable.clientHeight)) *
        100 ?? 0;

    if (
      finalTypeX === 'scroll' ||
      finalTypeX === 'hover' ||
      finalTypeX === 'auto'
    ) {
      showX = true;
      debounceShowX(() => (showX = false));
    }
    if (
      finalTypeY === 'scroll' ||
      finalTypeY === 'hover' ||
      finalTypeY === 'auto'
    ) {
      showY = true;
      debounceShowY(() => (showY = false));
    }
  };

  const handleMouseOver = () => {
    if (finalTypeX === 'hover' || finalTypeX === 'auto') {
      showX = true;
      debounceShowX(() => (showX = false));
    }
    if (finalTypeY === 'hover' || finalTypeY === 'auto') {
      showY = true;
      debounceShowY(() => (showY = false));
    }
  };

  const handleMouseDownY = (event: MouseEvent) => {
    event.preventDefault();

    const boundingTarget = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    let shift = event.y - boundingTarget.top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e: MouseEvent) {
      const bounding = scrollable.getBoundingClientRect();
      const offset = e.y - bounding.top - shift;
      const scrollableSize = bounding.height - boundingTarget.height;

      const maxScroll = (scrollable as any).scrollTopMax;
      scrollable.scrollTop = maxScroll * (offset / scrollableSize);
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  const handleMouseDownX = (event: MouseEvent) => {
    event.preventDefault();

    const boundingTarget = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    let shift = event.x - boundingTarget.left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e: MouseEvent) {
      const bounding = scrollable.getBoundingClientRect();
      const offset = e.x - bounding.left - shift;
      const scrollableSize = bounding.width - boundingTarget.width;

      const maxScroll = (scrollable as any).scrollLeftMax;
      scrollable.scrollLeft = maxScroll * (offset / scrollableSize);
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  $: {
    if (scrollable) updateThumb();
  }

  $: {
    if (finalTypeX === 'auto') {
      showX = thumbXSize < 100;
    } else if (finalTypeX === 'always') {
      showX = true;
    } else {
      showX = false;
    }
  }

  $: {
    if (finalTypeY === 'auto') {
      showY = thumbYSize < 100;
    } else if (finalTypeY === 'always') {
      showY = true;
    } else {
      showY = false;
    }
  }
</script>

<svelte:window on:resize={updateThumb} />

<div {...$$restProps} class={buildClass('scroll-area', $$restProps.class)}>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    class={buildClass(
      'scroll-area__inner',
      offsetX && 'scroll-area__inner-offset-x',
      offsetY && 'scroll-area__inner-offset-y',
    )}
    on:scroll={handleScroll}
    on:mouseover={handleMouseOver}
    bind:this={scrollable}
    style:--scrollbar-width={`${scrollbarSize}px`}
  >
    <div style="min-width: 100%; display: table;">
      <slot />
    </div>
  </div>
  {#if showX}
    <div
      class={buildClass(
        'scroll-area__scrollbar',
        'scroll-area__scrollbar-horizontal',
      )}
      style:--scrollbar-width={`${scrollbarSize}px`}
      style:--scrollbar-thumb-width={`${thumbSize}px`}
      style:--scrollbar-thumb-position={`${thumbXPosition}%`}
      style:--scrollbar-thumb-size={`${thumbXSize}%`}
      draggable
      on:mousedown={handleMouseDownX}
      on:dragstart={() => {}}
      transition:fade={{ duration: 150 }}
    />
  {/if}
  {#if showY}
    <div
      class={buildClass(
        'scroll-area__scrollbar',
        'scroll-area__scrollbar-vertical',
      )}
      style:--scrollbar-width={`${scrollbarSize}px`}
      style:--scrollbar-thumb-width={`${thumbSize}px`}
      style:--scrollbar-thumb-position={`${thumbYPosition}%`}
      style:--scrollbar-thumb-size={`${thumbYSize}%`}
      on:mousedown={handleMouseDownY}
      on:dragstart={() => {}}
      transition:fade={{ duration: 150 }}
    />
  {/if}
</div>

<style lang="postcss">
  .scroll-area {
    position: relative;
    overflow: hidden;
  }

  .scroll-area__inner::-webkit-scrollbar {
    display: none;
  }

  .scroll-area__inner {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    height: 100%;
  }

  .scroll-area__inner-offset-x > :global(* > *) {
    padding-bottom: calc(var(--scrollbar-width) + 0.25rem);
  }

  .scroll-area__inner-offset-y > :global(* > *) {
    padding-right: calc(var(--scrollbar-width) + 0.25rem);
  }

  .scroll-area__scrollbar {
    position: absolute;
    cursor: pointer;
  }

  .scroll-area__scrollbar::after {
    content: '';
    background-color: var(--theme-secondary-active);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 9999px;
  }

  .scroll-area__scrollbar-horizontal {
    width: var(--scrollbar-thumb-size);
    height: var(--scrollbar-width);
    left: var(--scrollbar-thumb-position);
    bottom: 0;
  }

  .scroll-area__scrollbar-horizontal::after {
    height: var(--scrollbar-thumb-width);
    width: calc(100% - 0.25rem);
  }

  .scroll-area__scrollbar-vertical {
    height: var(--scrollbar-thumb-size);
    width: var(--scrollbar-width);
    top: var(--scrollbar-thumb-position);
    right: 0;
  }

  .scroll-area__scrollbar-vertical::after {
    width: var(--scrollbar-thumb-width);
    height: calc(100% - 0.25rem);
  }
</style>
