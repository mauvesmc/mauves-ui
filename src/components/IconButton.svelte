<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import buildClass from '../core/buildClass';
  import ripple from '../core/ripple';
  import type { IconButtonColor, IconButtonVariant } from './IconButton';
  import Loader from './Loader.svelte';

  const LOADER_SIZES = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '3.5rem',
  };

  const LOADER_INNER_SIZES = {
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
  };
</script>

<script lang="ts">
  export let tag: string = 'button';
  export let variant: IconButtonVariant = 'solid';
  export let color: IconButtonColor = 'primary';
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'full';
  export let loading = false;
  export let disabledRipple = false;
</script>

{#if loading}
  <Loader
    {...$$restProps}
    class="icon-button"
    size={LOADER_SIZES[size]}
    loaderSize={LOADER_INNER_SIZES[size]}
    {color}
  />
{:else}
  <svelte:element
    this={tag}
    {...$$restProps}
    class={buildClass(
      'icon-button',
      `icon-button_color-${color}`,
      `icon-button_variant-${variant}`,
      `icon-button_size-${size}`,
      `icon-button_radius-${radius}`,
      $$restProps.class,
    )}
    on:click
    on:focus
    on:blur
    use:ripple={{ disabled: disabledRipple }}
  >
    <slot />
  </svelte:element>
{/if}

<style lang="postcss" global>
  .icon-button {
    --icon-button-background: transparent;
    --icon-button-foreground: transparent;
    --ripple-color: var(--icon-button-foreground);
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .icon-button:enabled {
    cursor: pointer;
    outline-width: 0;
    outline-offset: 2px;
    outline-style: solid;
  }

  .icon-button_variant-solid:enabled {
    background-color: var(--icon-button-background);
    color: var(--icon-button-foreground);
  }

  .icon-button_variant-subtle:enabled {
    background-color: transparent;
    color: var(--theme-text-default);
  }

  .icon-button_variant-subtle:enabled:hover {
    background-color: var(--icon-button-background);
    color: var(--icon-button-foreground);
  }

  .icon-button:enabled:focus {
    outline-width: 2px;
  }

  .icon-button:disabled {
    cursor: not-allowed;
  }

  .icon-button_variant-solid:disabled {
    background-color: var(--theme-disabled-background);
    color: var(--theme-disabled-foreground);
  }

  .icon-button_variant-subtle:disabled {
    background-color: transparent;
    color: var(--theme-disabled-background);
  }

  .icon-button_color-primary {
    --icon-button-background: var(--theme-primary-default);
    --icon-button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-primary-default-rgb), 0.5);
  }

  .icon-button_color-primary:hover {
    --icon-button-background: var(--theme-primary-hover);
  }

  .icon-button_color-primary:active {
    --icon-button-background: var(--theme-primary-active);
  }

  .icon-button_color-secondary {
    --icon-button-background: var(--theme-secondary-default);
    --icon-button-foreground: var(--theme-text-default);
    outline-color: rgba(var(--theme-secondary-default-rgb), 0.5);
  }

  .icon-button_color-secondary:hover {
    --icon-button-background: var(--theme-secondary-hover);
  }

  .icon-button_color-secondary:active {
    --icon-button-background: var(--theme-secondary-active);
  }

  .icon-button_color-success {
    --icon-button-background: var(--theme-green-default);
    --icon-button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-green-default-rgb), 0.5);
  }

  .icon-button_color-success:hover {
    --icon-button-background: var(--theme-green-hover);
  }

  .icon-button_color-success:active {
    --icon-button-background: var(--theme-green-active);
  }

  .icon-button_color-warning {
    --icon-button-background: var(--theme-yellow-default);
    --icon-button-foreground: var(--theme-light-text-default);
    outline-color: rgba(var(--theme-yellow-default-rgb), 0.5);
  }

  .icon-button_color-warning:hover {
    --icon-button-background: var(--theme-yellow-hover);
  }

  .icon-button_color-warning:active {
    --icon-button-background: var(--theme-yellow-active);
  }

  .icon-button_color-danger {
    --icon-button-background: var(--theme-red-default);
    --icon-button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-red-default-rgb), 0.5);
  }

  .icon-button_color-danger:hover {
    --icon-button-background: var(--theme-red-hover);
  }

  .icon-button_color-danger:active {
    --icon-button-background: var(--theme-red-active);
  }

  .icon-button_color-info {
    --icon-button-background: var(--theme-blue-default);
    --icon-button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-blue-default-rgb), 0.5);
  }

  .icon-button_color-info:hover {
    --icon-button-background: var(--theme-blue-hover);
  }

  .icon-button_color-info:active {
    --icon-button-background: var(--theme-blue-active);
  }

  .icon-button_size-sm {
    width: 2rem;
    height: 2rem;
  }

  .icon-button_size-md {
    width: 2.5rem;
    height: 2.5rem;
  }

  .icon-button_size-lg {
    width: 3rem;
    height: 3rem;
  }

  .icon-button_size-xl {
    width: 3.5rem;
    height: 3.5rem;
  }

  .icon-button_radius-sm {
    border-radius: 0.5rem;
  }

  .icon-button_radius-md {
    border-radius: 0.75rem;
  }

  .icon-button_radius-lg {
    border-radius: 1rem;
  }

  .icon-button_radius-xl {
    border-radius: 1.25rem;
  }

  .icon-button_radius-full {
    border-radius: 9999px;
  }
</style>
