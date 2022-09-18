<script lang="ts" context="module">
  import { fade } from 'svelte/transition';
  import type { MauvesSize } from '../core';
  import { buildClass, randomId } from '../core';
</script>

<script lang="ts">
  export let id = randomId();
  export let value = '';
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'md';
  export let group: string[] = [];
  export let indeterminate = false;
  export let readonly = false;

  $: selected = group.includes(value);

  const handleClick = () => {
    if (readonly) return;
    if (selected) {
      group = group.filter((v) => v !== value);
    } else {
      group.push(value);
      group = group;
    }
  };
</script>

<label
  {...$$restProps}
  class={buildClass(
    'checkbox',
    `checkbox_size-${size}`,
    `checkbox_radius-${radius}`,
    selected && 'checkbox_selected',
    indeterminate && 'checkbox_indeterminate',
  )}
  data-enabled={$$restProps.disabled === undefined}
  for={id}
>
  <input
    {id}
    type="checkbox"
    name={$$restProps.name}
    disabled={$$restProps.disabled}
    class={buildClass('visually-hidden', 'checkbox__input')}
    {readonly}
    on:change
    on:click={handleClick}
    {value}
    checked={selected}
  />
  {#if selected}
    <div transition:fade={{ duration: 150 }} class="checkbox__check" />
  {:else if indeterminate}
    <div transition:fade={{ duration: 150 }} class="checkbox__indeterminate" />
  {/if}
</label>

<style lang="postcss">
  .checkbox {
    --checkbox-color: transparent;
    width: var(--checkbox-size);
    min-width: var(--checkbox-size);
    height: var(--checkbox-size);
    min-height: var(--checkbox-size);
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-width: 0;
    border-style: solid;
    border-color: var(--checkbox-color);
    color: var(--checkbox-color);
    position: relative;
  }

  .checkbox[data-enabled='true'] {
    --checkbox-color: var(--theme-secondary-default);
    cursor: pointer;
  }

  .checkbox[data-enabled='true']:hover {
    --checkbox-color: var(--theme-secondary-hover);
  }

  .checkbox[data-enabled='true']:active {
    --checkbox-color: var(--theme-secondary-active);
  }

  .checkbox[data-enabled='false'] {
    --checkbox-color: var(--theme-disabled-background);
    cursor: not-allowed;
  }

  .checkbox.checkbox_selected[data-enabled='true'],
  .checkbox.checkbox_indeterminate[data-enabled='true'] {
    --checkbox-color: var(--theme-primary-default);
  }

  .checkbox.checkbox_selected[data-enabled='true']:hover,
  .checkbox.checkbox_indeterminate[data-enabled='true']:hover {
    --checkbox-color: var(--theme-primary-hover);
  }

  .checkbox.checkbox_selected[data-enabled='true']:active,
  .checkbox.checkbox_indeterminate[data-enabled='true']:active {
    --checkbox-color: var(--theme-primary-active);
  }

  .checkbox__indeterminate {
    position: absolute;
    background-color: var(--checkbox-color);
    border-radius: 9999px;
  }

  .checkbox__check {
    position: absolute;
    background-color: var(--checkbox-color);
    transform: rotate(45deg);
  }

  .checkbox_size-sm {
    --checkbox-size: 0.75rem;
    border-width: 1px;
  }

  .checkbox_size-sm .checkbox__indeterminate {
    width: 0.5rem;
    height: 0.125rem;
  }

  .checkbox_size-sm .checkbox__check {
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 1px;
  }

  .checkbox_size-md {
    --checkbox-size: 1rem;
    border-width: 1px;
  }

  .checkbox_size-md .checkbox__indeterminate {
    width: 0.675rem;
    height: 0.125rem;
  }

  .checkbox_size-md .checkbox__check {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 0.125rem;
  }

  .checkbox_size-lg {
    --checkbox-size: 1.25rem;
    border-width: 1px;
  }

  .checkbox_size-lg .checkbox__indeterminate {
    width: 0.75rem;
    height: 0.25rem;
  }

  .checkbox_size-lg .checkbox__check {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.125rem;
  }

  .checkbox_size-xl {
    --checkbox-size: 1.5rem;
    border-width: 1px;
  }

  .checkbox_size-xl .checkbox__indeterminate {
    width: 1rem;
    height: 0.25rem;
  }

  .checkbox_size-xl .checkbox__check {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.25rem;
  }

  .checkbox_radius-sm {
    border-radius: 0.25rem;
  }

  .checkbox_radius-md {
    border-radius: 0.375rem;
  }

  .checkbox_radius-lg {
    border-radius: 0.5rem;
  }

  .checkbox_radius-xl {
    border-radius: 0.625rem;
  }

  .checkbox_radius-full {
    border-radius: 9999px;
  }
</style>
