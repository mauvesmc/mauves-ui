<script lang="ts" context="module">
  import type { MauvesTheme } from '../core';
  import { theme } from '../core';
  import getStyleElementFromTheme from '../utils/getStyleElementFromTheme';
</script>

<script lang="ts">
  let nextTheme: MauvesTheme = 'auto';

  const getNextTheme = (theme: MauvesTheme) => {
    switch (theme) {
      case 'auto':
        return 'dark';
      case 'dark':
        return 'light';
      default:
        return 'auto';
    }
  };

  theme.subscribe((t) => {
    nextTheme = getNextTheme(t.theme);
  });
</script>

<svelte:head>
  {@html getStyleElementFromTheme($theme)}
</svelte:head>

<div class="story-wrapper" data-theme={$theme.theme}>
  <button
    class="story-wrapper__theme-switcher typography-b2"
    on:click={() => theme.setTheme(nextTheme)}
  >
    {$theme.theme}
  </button>
  <slot />
</div>

<style lang="postcss">
  .story-wrapper {
    flex: 1;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    position: relative;
    background: var(--theme-base-1);
    scroll-behavior: smooth;
    font-weight: 400;
  }

  .story-wrapper :global(*),
  .story-wrapper :global(*):after,
  .story-wrapper :global(*):before {
    transition-property: var(--theme-transition-property);
    transition-duration: var(--theme-transition-duration);
    transition-timing-function: var(--theme-transition-timing-function);
  }

  .story-wrapper > :global(*),
  .story-wrapper > :global(*):after,
  .story-wrapper > :global(*):before {
    color: var(--theme-text-default);
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    background: none;
    border: none;
    box-sizing: border-box;
    font-family: var(--theme-font-sans);
  }

  .story-wrapper__theme-switcher {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    background-color: var(--theme-secondary-default);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  :global(.page__container.__vbk__) {
    align-self: stretch;
  }

  :global(body) {
    overflow-y: hidden;
    max-height: 100vh;
  }

  :global(.theme.__vbk__) {
    --vbk--fony-family: 'Inter', ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji' !important;
  }

  :global(.visually-hidden) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
</style>
