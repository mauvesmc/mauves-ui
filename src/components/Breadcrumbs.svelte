<script lang="ts" context="module">
  import { buildClass } from '../core';
</script>

<script lang="ts">
  export let separator = '-';
  export let spacing = 16;
</script>

<div
  {...$$restProps}
  class={buildClass('breadcrumbs', $$restProps.class)}
  style:--separator={`'${separator}'`}
  style:--spacing={`${spacing}px`}
>
  <slot />
</div>

<style lang="postcss">
  .breadcrumbs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .breadcrumbs > :global(*) {
    position: relative;
    margin-right: var(--spacing);
  }

  .breadcrumbs > :global(*::after) {
    content: var(--separator);
    position: absolute;
    top: 50%;
    left: calc(100% + calc(var(--spacing) / 2));
    transform: translateX(-50%) translateY(-50%);
    color: var(--theme-text-default);
    pointer-events: none;
  }

  .breadcrumbs > :global(*:last-child) {
    margin-right: inherit;
  }

  .breadcrumbs > :global(*:last-child::after) {
    display: none;
  }
</style>
