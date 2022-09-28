<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import buildClass from '../core/buildClass';
  import ripple from '../core/ripple';
</script>

<script lang="ts">
  export let data: { value: string; label?: string; disabled?: boolean }[] = [];
  export let value: string = data.at(0)?.value ?? '';
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'md';
  export let disabled = false;
  export let fullWidth = false;
  export let disabledRipple = false;
</script>

<div
  {...$$restProps}
  class={buildClass(
    'segmented-control',
    `segmented-control_size-${size}`,
    `segmented-control_radius-${radius}`,
    fullWidth && `segmented-control_fullwidth`,
    $$restProps.class,
  )}
  data-enabled={!disabled}
>
  {#each data as item (item.value)}
    <button
      class={buildClass(
        'segmented-control__button',
        value === item.value && `segmented-control__button_selected`,
      )}
      on:click={() => (value = item.value)}
      disabled={disabled || item.disabled}
      use:ripple={{ disabled: disabledRipple }}
    >
      {item.label ?? item.value}
    </button>
  {/each}
</div>

<style lang="postcss">
  .segmented-control {
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    font-weight: 500;
    width: max-content;
  }

  .segmented-control[data-enabled='true'] {
    cursor: pointer;
    background-color: var(--theme-secondary-default);
  }

  .segmented-control[data-enabled='false'] {
    cursor: not-allowed;
    background-color: var(--theme-disabled-background);
  }

  .segmented-control_fullwidth {
    width: 100%;
  }

  .segmented-control__button {
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    font-weight: 500;
    flex-grow: 1;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: inherit;
    line-height: inherit;
  }

  .segmented-control__button:enabled {
    cursor: pointer;
    background-color: transparent;
    color: var(--theme-text-defualt);
    --ripple-color: currentColor;
  }

  .segmented-control__button:enabled:hover {
    background-color: var(--theme-secondary-hover);
  }

  .segmented-control__button_selected:enabled {
    background-color: var(--theme-secondary-active);
  }

  .segmented-control__button_selected:enabled:hover {
    background-color: var(--theme-secondary-active);
  }

  .segmented-control__button:disabled {
    cursor: not-allowed;
    background-color: var(--theme-disabled-background);
    color: var(--theme-disabled-foreground);
  }

  .segmented-control__button:last-child {
    margin-right: 0;
  }

  .segmented-control_size-sm {
    height: 2rem;
    padding: 0.25rem;
    font-size: var(--theme-font-size-ht);
    line-height: var(--theme-line-height-ht);
  }

  .segmented-control_size-sm .segmented-control__button {
    margin-right: 0.375rem;
  }

  .segmented-control_size-md {
    height: 2.5rem;
    padding: 0.5rem;
    font-size: var(--theme-font-size-b2);
    line-height: var(--theme-line-height-b2);
  }

  .segmented-control_size-md .segmented-control__button {
    margin-right: 0.5rem;
  }

  .segmented-control_size-lg {
    height: 3rem;
    padding: 0.75rem;
    font-size: var(--theme-font-size-st2);
    line-height: var(--theme-line-height-st2);
  }

  .segmented-control_size-lg .segmented-control__button {
    margin-right: 0.625rem;
  }

  .segmented-control_size-xl {
    height: 3.5rem;
    padding: 1rem;
    font-size: var(--theme-font-size-h4);
    line-height: var(--theme-line-height-h4);
  }

  .segmented-control_size-xl .segmented-control__button {
    margin-right: 0.75rem;
  }

  .segmented-control_radius-sm,
  .segmented-control_radius-sm .segmented-control__button,
  .segmented-control_radius-sm .segmented-control__thumb {
    border-radius: 0.5rem;
  }

  .segmented-control_radius-md,
  .segmented-control_radius-md .segmented-control__button,
  .segmented-control_radius-md .segmented-control__thumb {
    border-radius: 0.75rem;
  }

  .segmented-control_radius-lg,
  .segmented-control_radius-lg .segmented-control__button,
  .segmented-control_radius-lg .segmented-control__thumb {
    border-radius: 1rem;
  }

  .segmented-control_radius-xl,
  .segmented-control_radius-xl .segmented-control__button,
  .segmented-control_radius-xl .segmented-control__thumb {
    border-radius: 1.25rem;
  }

  .segmented-control_radius-full,
  .segmented-control_radius-full .segmented-control__button,
  .segmented-control_radius-full .segmented-control__thumb {
    border-radius: 9999px;
  }
</style>
