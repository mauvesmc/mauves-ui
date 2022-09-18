<script lang="ts" context="module">
  import { fade } from 'svelte/transition';
  import type { MauvesSize } from '../core';
  import { buildClass, randomId } from '../core';
</script>

<script lang="ts">
  export let id = randomId();
  export let value = '';
  export let size: MauvesSize = 'md';
  export let group: string = '';

  $: selected = group === value;
</script>

<label
  {...$$restProps}
  class={buildClass(
    'radio',
    `radio_size-${size}`,
    selected && 'radio_selected',
  )}
  data-enabled={$$restProps.disabled === undefined}
  for={id}
>
  <input
    {id}
    type="radio"
    name={$$restProps.name}
    disabled={$$restProps.disabled}
    class={buildClass('visually-hidden', 'radio__input')}
    on:change
    on:click
    checked={selected}
    {value}
    bind:group
  />
  {#if selected}
    <div transition:fade={{ duration: 150 }} class="radio__check" />
  {/if}
</label>

<style lang="postcss">
  .radio {
    --radio-color: transparent;
    width: var(--radio-size);
    min-width: var(--radio-size);
    height: var(--radio-size);
    min-height: var(--radio-size);
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-width: 0;
    border-style: solid;
    border-color: var(--radio-color);
    color: var(--radio-color);
    position: relative;
    border-radius: 9999px;
  }

  .radio[data-enabled='true'] {
    --radio-color: var(--theme-secondary-default);
    cursor: pointer;
  }

  .radio[data-enabled='true']:hover {
    --radio-color: var(--theme-secondary-hover);
  }

  .radio[data-enabled='true']:active {
    --radio-color: var(--theme-secondary-active);
  }

  .radio[data-enabled='false'] {
    --radio-color: var(--theme-disabled-background);
    cursor: not-allowed;
  }

  .radio.radio_selected[data-enabled='true'] {
    --radio-color: var(--theme-primary-default);
  }

  .radio.radio_selected[data-enabled='true']:hover {
    --radio-color: var(--theme-primary-hover);
  }

  .radio.radio_selected[data-enabled='true']:active {
    --radio-color: var(--theme-primary-active);
  }

  .radio__check {
    position: absolute;
    background-color: var(--radio-color);
    border-radius: 9999px;
  }

  .radio_size-sm {
    --radio-size: 0.75rem;
    border-width: 1px;
  }

  .radio_size-sm .radio__check {
    width: 0.25rem;
    height: 0.25rem;
  }

  .radio_size-md {
    --radio-size: 1rem;
    border-width: 1px;
  }

  .radio_size-md .radio__check {
    width: 0.375rem;
    height: 0.375rem;
  }

  .radio_size-lg {
    --radio-size: 1.25rem;
    border-width: 1px;
  }

  .radio_size-lg .radio__check {
    width: 0.5rem;
    height: 0.5rem;
  }

  .radio_size-xl {
    --radio-size: 1.5rem;
    border-width: 1px;
  }

  .radio_size-xl .radio__check {
    width: 0.75rem;
    height: 0.75rem;
  }
</style>
