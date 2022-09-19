<script lang="ts" context="module">
  import type { MauvesSize } from '../core';
  import { buildClass, randomId } from '../core';
</script>

<script lang="ts">
  export let id = randomId();
  export let value = '';
  export let size: MauvesSize = 'md';
  export let group: string[] = [];
  export let readonly = false;

  $: isOn = group.includes(value);

  const handleClick = () => {
    if (readonly) return;
    if (isOn) {
      group = group.filter((v) => v !== value);
    } else {
      group.push(value);
      group = group;
    }
  };
</script>

<label
  {...$$restProps}
  class={buildClass('switch', `switch_size-${size}`, isOn && 'switch_on')}
  data-enabled={!$$restProps.disabled}
  for={id}
>
  <input
    {id}
    type="checkbox"
    name={$$restProps.name}
    disabled={$$restProps.disabled}
    class={buildClass('visually-hidden', 'switch__input')}
    {readonly}
    on:change
    on:click={handleClick}
    {value}
    checked={isOn}
  />
  <div class="switch__circle" />
</label>

<style lang="postcss">
  .switch {
    --switch-color: transparent;
    --thumb-color: transparent;
    width: calc(var(--switch-size) * 2);
    min-width: calc(var(--switch-size) * 2);
    height: var(--switch-size);
    min-height: var(--switch-size);
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--switch-color);
    position: relative;
    border-radius: 9999px;
  }

  .switch[data-enabled='true'] {
    --switch-color: var(--theme-secondary-default);
    --thumb-color: var(--theme-text-default);
    cursor: pointer;
  }

  .switch[data-enabled='true']:hover {
    --switch-color: var(--theme-secondary-hover);
  }

  .switch[data-enabled='true']:active {
    --switch-color: var(--theme-secondary-active);
  }

  .switch[data-enabled='false'] {
    --switch-color: var(--theme-disabled-background);
    --thumb-color: var(--theme-disabled-foreground);
    cursor: not-allowed;
  }

  .switch.switch_on[data-enabled='true'] {
    --switch-color: var(--theme-primary-default);
    --thumb-color: var(--theme-dark-text-default);
  }

  .switch.switch_on[data-enabled='true']:hover {
    --switch-color: var(--theme-primary-hover);
  }

  .switch.switch_on[data-enabled='true']:active {
    --switch-color: var(--theme-primary-active);
  }

  .switch__circle {
    background-color: var(--thumb-color);
    border-radius: 9999px;
    position: absolute;
    left: 0;
    transition-property: var(--theme-transition-property), transform;
  }

  .switch_size-sm {
    --switch-size: 0.75rem;
  }

  .switch_size-sm .switch__circle {
    --circle-size: calc(0.75rem - 2px - 4px);
    width: var(--circle-size);
    height: var(--circle-size);
    transform: translateX(3px);
  }

  .switch_size-sm.switch_on .switch__circle {
    transform: translateX(
      calc(var(--switch-size) * 2 - 3px - var(--circle-size))
    );
  }

  .switch_size-md {
    --switch-size: 1rem;
  }

  .switch_size-md .switch__circle {
    --circle-size: calc(1rem - 2px - 4px);
    width: var(--circle-size);
    height: var(--circle-size);
    transform: translateX(3px);
  }

  .switch_size-md.switch_on .switch__circle {
    transform: translateX(
      calc(var(--switch-size) * 2 - 3px - var(--circle-size))
    );
  }

  .switch_size-lg {
    --switch-size: 1.25rem;
    padding: 2px;
  }

  .switch_size-lg .switch__circle {
    --circle-size: calc(1.25rem - 4px - 4px);
    width: var(--circle-size);
    height: var(--circle-size);
    transform: translateX(4px);
  }

  .switch_size-lg.switch_on .switch__circle {
    transform: translateX(
      calc(var(--switch-size) * 2 - 4px - var(--circle-size))
    );
  }

  .switch_size-xl {
    --switch-size: 1.5rem;
    padding: 4px;
  }

  .switch_size-xl .switch__circle {
    --circle-size: calc(1.5rem - 4px - 4px);
    width: var(--circle-size);
    height: var(--circle-size);
    transform: translateX(4px);
  }

  .switch_size-xl.switch_on .switch__circle {
    transform: translateX(
      calc(var(--switch-size) * 2 - 4px - var(--circle-size))
    );
  }
</style>
