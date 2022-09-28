<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import { buildClass, ripple } from '../core';
  import type { ButtonColor, ButtonVariant } from './Button';
  import Loader from './Loader.svelte';

  const LOADER_SIZES = {
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  };
</script>

<script lang="ts">
  export let tag: string = 'button';
  export let variant: ButtonVariant = 'solid';
  export let color: ButtonColor = 'primary';
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'md';
  export let loading = false;
  export let loaderPosition: 'left' | 'right' = 'left';
  export let uppercase = false;
  export let fullWidth = false;
  export let disabledRipple = false;
</script>

<svelte:element
  this={loading ? 'div' : tag}
  {...$$restProps}
  class={buildClass(
    'button',
    `button_color-${color}`,
    `button_variant-${variant}`,
    `button_size-${size}`,
    `button_radius-${radius}`,
    loading && 'button_loading',
    loading && `button_icon-${loaderPosition}`,
    $$slots.start && 'button_icon-left',
    $$slots.end && 'button_icon-right',
    fullWidth && 'button_full-width',
    uppercase && 'button_uppercase',
    $$restProps.class,
  )}
  on:click
  on:focus
  on:blur
  use:ripple={{ disabled: disabledRipple }}
  data-enabled={!$$restProps.disabled}
>
  {#if loading && loaderPosition === 'left'}
    <Loader size={LOADER_SIZES[size]} loaderSize={LOADER_SIZES[size]} />
  {:else if $$slots.start}
    <slot name="start" />
  {/if}
  <div class="button__content">
    <slot />
  </div>
  {#if loading && loaderPosition === 'right'}
    <Loader size={LOADER_SIZES[size]} loaderSize={LOADER_SIZES[size]} />
  {:else if $$slots.end}
    <slot name="end" />
  {/if}
</svelte:element>

<style lang="postcss">
  .button {
    --button-background: transparent;
    --button-foreground: transparent;
    --ripple-color: var(--button-foreground);
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    font-weight: 500;
  }

  .button_loading {
    cursor: not-allowed;
  }

  .button_full-width {
    width: 100%;
  }

  .button_uppercase {
    text-transform: uppercase;
  }

  .button[data-enabled='true'] {
    cursor: pointer;
    outline-width: 0;
    outline-offset: 2px;
    outline-style: solid;
  }

  .button__content {
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .button_variant-solid[data-enabled='true'],
  :global(div.button_variant-solid) {
    background-color: var(--button-background);
    color: var(--button-foreground);
  }

  .button_variant-subtle[data-enabled='true'],
  :global(div.button_variant-subtle) {
    background-color: transparent;
    color: var(--theme-text-default);
  }

  .button_variant-subtle[data-enabled='true']:hover,
  :global(div.button_variant-subtle:hover) {
    background-color: var(--button-background);
    color: var(--button-foreground);
  }

  .button[data-enabled='true']:focus {
    outline-width: 2px;
  }

  .button[data-enabled='false'] {
    cursor: not-allowed;
  }

  .button_variant-solid[data-enabled='false'] {
    background-color: var(--theme-disabled-background);
    color: var(--theme-disabled-foreground);
  }

  .button_variant-subtle[data-enabled='false'] {
    background-color: transparent;
    color: var(--theme-disabled-background);
  }

  .button_variant-subtle[data-enabled='false'] {
    background-color: transparent;
    color: var(--theme-disabled-background);
  }

  .button_color-primary {
    --button-background: var(--theme-primary-default);
    --button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-primary-default-rgb), 0.5);
  }

  .button_color-primary:hover {
    --button-background: var(--theme-primary-hover);
  }

  .button_color-primary:active {
    --button-background: var(--theme-primary-active);
  }

  .button_color-secondary {
    --button-background: var(--theme-secondary-default);
    --button-foreground: var(--theme-text-default);
    outline-color: rgba(var(--theme-secondary-default-rgb), 0.5);
  }

  .button_color-secondary:hover {
    --button-background: var(--theme-secondary-hover);
  }

  .button_color-secondary:active {
    --button-background: var(--theme-secondary-active);
  }

  .button_color-success {
    --button-background: var(--theme-green-default);
    --button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-green-default-rgb), 0.5);
  }

  .button_color-success:hover {
    --button-background: var(--theme-green-hover);
  }

  .button_color-success:active {
    --button-background: var(--theme-green-active);
  }

  .button_color-warning {
    --button-background: var(--theme-yellow-default);
    --button-foreground: var(--theme-light-text-default);
    outline-color: rgba(var(--theme-yellow-default-rgb), 0.5);
  }

  .button_color-warning:hover {
    --button-background: var(--theme-yellow-hover);
  }

  .button_color-warning:active {
    --button-background: var(--theme-yellow-active);
  }

  .button_color-danger {
    --button-background: var(--theme-red-default);
    --button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-red-default-rgb), 0.5);
  }

  .button_color-danger:hover {
    --button-background: var(--theme-red-hover);
  }

  .button_color-danger:active {
    --button-background: var(--theme-red-active);
  }

  .button_color-info {
    --button-background: var(--theme-blue-default);
    --button-foreground: var(--theme-dark-text-default);
    outline-color: rgba(var(--theme-blue-default-rgb), 0.5);
  }

  .button_color-info:hover {
    --button-background: var(--theme-blue-hover);
  }

  .button_color-info:active {
    --button-background: var(--theme-blue-active);
  }

  .button > :global(*:last-child) {
    margin-right: 0;
  }

  .button_size-sm {
    height: 2rem;
    min-height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: var(--theme-font-size-ht);
    line-height: var(--theme-line-height-ht);
  }

  .button_size-sm > :global(*) {
    margin-right: 0.375rem;
  }

  .button_size-sm.button_icon-left {
    padding-left: 0.5rem;
  }

  .button_size-sm.button_icon-right {
    padding-right: 0.5rem;
  }

  .button_size-md {
    height: 2.5rem;
    min-height: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: var(--theme-font-size-b2);
    line-height: var(--theme-line-height-b2);
  }

  .button_size-md > :global(*) {
    margin-right: 0.5rem;
  }

  .button_size-md.button_icon-left {
    padding-left: 0.75rem;
  }

  .button_size-md.button_icon-right {
    padding-right: 0.75rem;
  }

  .button_size-lg {
    height: 3rem;
    min-height: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: var(--theme-font-size-st2);
    line-height: var(--theme-line-height-st2);
  }

  .button_size-lg > :global(*) {
    margin-right: 0.625rem;
  }

  .button_size-lg.button_icon-left {
    padding-left: 1rem;
  }

  .button_size-lg.button_icon-right {
    padding-right: 1rem;
  }

  .button_size-xl {
    height: 3.5rem;
    min-height: 3.5rem;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    font-size: var(--theme-font-size-h4);
    line-height: var(--theme-line-height-h4);
  }

  .button_size-xl > :global(*) {
    margin-right: 0.75rem;
  }

  .button_size-xl.button_icon-left {
    padding-left: 1.25rem;
  }

  .button_size-xl.button_icon-right {
    padding-right: 1.25rem;
  }

  .button_radius-sm {
    border-radius: 0.5rem;
  }

  .button_radius-md {
    border-radius: 0.75rem;
  }

  .button_radius-lg {
    border-radius: 1rem;
  }

  .button_radius-xl {
    border-radius: 1.25rem;
  }

  .button_radius-full {
    border-radius: 9999px;
  }
</style>
