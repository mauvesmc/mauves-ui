<script lang="ts" context="module">
  import { fade, fly } from 'svelte/transition';
  import { buildClass } from '../core';
  import OutClick from './OutClick.svelte';
</script>

<script lang="ts">
  export let opened = false;
  export let withBackdrop = false;
</script>

{#if opened}
  <div
    class={buildClass(
      'drawer__wrapper',
      withBackdrop && 'drawer__wrapper-backdrop',
    )}
    transition:fade={{ duration: 150 }}
  >
    <OutClick on:outclick={() => (opened = false)}>
      <div
        {...$$restProps}
        class={buildClass('drawer', $$restProps.class)}
        transition:fly={{ y: 320, duration: 150 }}
      >
        <slot />
      </div>
    </OutClick>
  </div>
{/if}

<style lang="postcss">
  .drawer__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
  }

  .drawer__wrapper-backdrop {
    background-color: rgba(var(--theme-dark-base-1-rgb), 0.75);
    backdrop-filter: blur(2px);
  }

  .drawer {
    margin: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    max-height: calc(100vh - 4rem);
    width: 100%;
    max-width: 576px;
    padding: 0.75rem;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--theme-secondary-default);
    color: var(--theme-text-default);
    overflow-y: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .drawer > :global(*) {
    margin-bottom: 0.5rem;
  }

  .drawer > :global(*:last-child) {
    margin-bottom: 0;
  }
</style>
