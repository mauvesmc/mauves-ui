<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import { buildClass, randomId } from '../core';
</script>

<script lang="ts">
  export let size: MauvesSize = 'md';
  export let radius: MauvesSize | 'full' | 'none' = 'md';
  export let id = randomId();
  export let value = '';
  export let fullWidth = false;
  export let rows = 1;
  export let maxRows = 9999;

  let textAreaRows = rows;

  let update = () => {
    const rows = (value.match(/(?:\r\n|\r|\n)/g)?.length ?? 0) + 1;
    if (maxRows >= rows) textAreaRows = rows;
  };

  $: {
    value;
    update();
  }
</script>

<label
  {...$$restProps}
  for={id}
  class={buildClass(
    'textarea',
    `textarea_size-${size}`,
    `textarea_radius-${radius}`,
    fullWidth && 'textarea_full-width',
    $$restProps.class,
  )}
  data-enabled={!$$restProps.disabled}
>
  <textarea
    class="textarea__inner"
    name={$$restProps.name}
    disabled={$$restProps.disabled}
    placeholder={$$restProps.placeholder}
    readonly={$$restProps.readonly}
    type="text"
    {id}
    on:change
    on:input
    on:focus
    on:blur
    bind:value
    rows={textAreaRows}
  />
</label>

<style lang="postcss">
  .textarea__inner {
    width: 1px;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    outline: none;
    border: none;
    font-size: inherit;
    margin-top: auto;
    margin-bottom: auto;
    background: none;
    color: inherit;
    user-select: auto;
    resize: none;
  }

  .textarea__inner::placeholder {
    color: var(--theme-text-active);
  }

  .textarea {
    --line-height: 0px;
    box-sizing: border-box;
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
    border: 1px solid var(--theme-secondary-active);
    line-height: var(--line-height) !important;
  }

  .textarea_full-width {
    width: 100%;
  }

  .textarea:focus-within {
    outline-width: 2px;
  }

  .textarea[data-enabled='true'] {
    background-color: var(--theme-secondary-default);
    color: var(--theme-text-default);
    cursor: text;
  }

  .textarea[data-enabled='false'] {
    background-color: var(--theme-disabled-background);
    color: var(--theme-disabled-foreground);
    border-color: currentColor;
  }

  .textarea[data-enabled='false'] .textarea__inner::placeholder {
    color: inherit;
  }

  .textarea_size-sm {
    padding-top: 0.40625rem;
    padding-bottom: 0.40625rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: var(--theme-font-size-ht);
    --line-height: var(--theme-line-height-ht);
  }

  .textarea_size-md {
    padding-top: 0.5625rem;
    padding-bottom: 0.5625rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: var(--theme-font-size-b2);
    --line-height: var(--theme-line-height-b2);
  }

  .textarea_size-lg {
    padding-top: 0.6875rem;
    padding-bottom: 0.6875rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: var(--theme-font-size-st2);
    --line-height: var(--theme-line-height-st2);
  }

  .textarea_size-xl {
    padding-top: 0.78125rem;
    padding-bottom: 0.78125rem;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    font-size: var(--theme-font-size-h4);
    --line-height: var(--theme-line-height-h4);
  }

  .textarea_radius-sm {
    border-radius: 0.5rem;
  }

  .textarea_radius-md {
    border-radius: 0.75rem;
  }

  .textarea_radius-lg {
    border-radius: 1rem;
  }

  .textarea_radius-xl {
    border-radius: 1.25rem;
  }

  .textarea_radius-full {
    border-radius: 9999px;
  }
</style>
