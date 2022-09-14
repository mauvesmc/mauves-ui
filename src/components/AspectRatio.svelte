<script lang="ts" context="module">
  import { buildClass } from '../core/index';
</script>

<script lang="ts">
  export let ratio: number;
</script>

<div
  {...$$restProps}
  class={buildClass('aspect-ratio', $$restProps.class)}
  style:--ratio={ratio}
>
  <slot />
</div>

<style lang="postcss">
  .aspect-ratio {
    position: relative;
    max-width: 100%;
  }

  .aspect-ratio::before {
    content: '';
    height: 0;
    display: block;
    padding-bottom: calc(1 / var(--ratio) * 100%);
  }

  .aspect-ratio::after {
    content: '';
    display: table;
    clear: both;
  }

  .aspect-ratio > :global(*:not(style)) {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .aspect-ratio > :global(img),
  .aspect-ratio > :global(video) {
    object-fit: cover;
  }
</style>
