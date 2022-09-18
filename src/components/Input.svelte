<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import { buildClass, randomId } from '../core';
</script>

<script lang="ts">
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'md';
  export let id = randomId();
  export let value = '';
  export let type = 'text';
  export let fullWidth = false;

  const inputType = (node: HTMLInputElement) => {
    node.type = type;

    return {
      destroy() {},
    };
  };
</script>

<label
  {...$$restProps}
  for={id}
  class={buildClass(
    'input',
    `input_size-${size}`,
    `input_radius-${radius}`,
    $$slots.start && 'input_icon-left',
    $$slots.end && 'input_icon-right',
    fullWidth && 'input_full-width',
    $$restProps.class,
  )}
  data-enabled={$$restProps.disabled === undefined}
>
  {#if $$slots.start}
    <slot name="start" />
  {/if}
  <input
    class="input__inner"
    name={$$restProps.name}
    disabled={$$restProps.disabled}
    placeholder={$$restProps.placeholder}
    readonly={$$restProps.readonly}
    {id}
    on:change
    on:input
    on:focus
    on:blur
    use:inputType
    bind:value
  />
  {#if $$slots.end}
    <slot name="end" />
  {/if}
</label>

<style lang="postcss">
  .input {
    display: flex;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    font-weight: 500;
    user-select: none;
    outline-width: 0;
    outline-offset: 2px;
    outline-style: solid;
    outline-color: rgba(var(--theme-primary-default-rgb), 0.5);
  }

  .input_full-width {
    width: 100%;
  }

  .input:focus-within {
    outline-width: 2px;
  }

  .input[data-enabled='true'] {
    background-color: var(--theme-secondary-default);
    color: var(--theme-text-default);
    cursor: text;
  }

  .input[data-enabled='false'] {
    background-color: var(--theme-disabled-background);
    color: var(--theme-disabled-foreground);
  }

  .input[data-enabled='false'] .input__inner::placeholder {
    color: inherit;
  }

  .input__inner {
    width: 1px;
    flex-grow: 1;
    outline: none;
    border: none;
    font-size: inherit;
    height: 100%;
    background: none;
    color: inherit;
    user-select: auto;
  }

  .input__inner::placeholder {
    color: var(--theme-text-active);
  }

  .input > :global(*:last-child) {
    margin-right: 0;
  }

  .input_size-sm {
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: var(--theme-font-size-ht);
    line-height: var(--theme-font-size-ht);
  }

  .input_size-sm > :global(*) {
    margin-right: 0.375rem;
  }

  .input_size-sm.input_icon-left {
    padding-left: 0.5rem;
  }

  .input_size-sm.input_icon-right {
    padding-right: 0.5rem;
  }

  .input_size-md {
    height: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: var(--theme-font-size-b2);
    line-height: var(--theme-font-size-b2);
  }

  .input_size-md > :global(*) {
    margin-right: 0.5rem;
  }

  .input_size-md.input_icon-left {
    padding-left: 0.75rem;
  }

  .input_size-md.input_icon-right {
    padding-right: 0.75rem;
  }

  .input_size-lg {
    height: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: var(--theme-font-size-st2);
    line-height: var(--theme-font-size-st2);
  }

  .input_size-lg > :global(*) {
    margin-right: 0.625rem;
  }

  .input_size-lg.input_icon-left {
    padding-left: 1rem;
  }

  .input_size-lg.input_icon-right {
    padding-right: 1rem;
  }

  .input_size-xl {
    height: 3.5rem;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    font-size: var(--theme-font-size-h4);
    line-height: var(--theme-font-size-h4);
  }

  .input_size-xl > :global(*) {
    margin-right: 0.75rem;
  }

  .input_size-xl.input_icon-left {
    padding-left: 1.25rem;
  }

  .input_size-xl.input_icon-right {
    padding-right: 1.25rem;
  }

  .input_radius-sm {
    border-radius: 0.5rem;
  }

  .input_radius-md {
    border-radius: 0.75rem;
  }

  .input_radius-lg {
    border-radius: 1rem;
  }

  .input_radius-xl {
    border-radius: 1.25rem;
  }

  .input_radius-full {
    border-radius: 9999px;
  }
</style>
