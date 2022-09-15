<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import { buildClass } from '../core';
  import type { GroupPosition } from './Group';
</script>

<script lang="ts">
  export let position: GroupPosition = 'left';
  export let spacing: MauvesSize = 'md';
  export let grow = false;
</script>

<div
  {...$$restProps}
  class={buildClass(
    'group',
    `group_position-${position}`,
    `group_spacing-${spacing}`,
    grow && 'group_grow',
    $$restProps.class,
  )}
>
  <slot />
</div>

<style lang="postcss">
  .group {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .group > :global(*) {
    box-sizing: border-box;
  }

  .group_grow > :global(*) {
    flex-grow: 1;
  }

  .group_position-left {
    justify-content: flex-start;
  }

  .group_position-center {
    justify-content: center;
  }

  .group_position-right {
    justify-content: flex-end;
  }

  .group_position-apart {
    justify-content: space-between;
  }

  .group_spacing-sm > :global(*) {
    margin-right: 0.5rem;
  }

  .group_spacing-md > :global(*) {
    margin-right: 1rem;
  }

  .group_spacing-lg > :global(*) {
    margin-right: 2rem;
  }

  .group_spacing-xl > :global(*) {
    margin-right: 3rem;
  }

  .group > :global(*:last-child) {
    margin-right: 0;
  }
</style>
