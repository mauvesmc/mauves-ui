<script lang="ts" context="module">
  import buildClass from '../core/buildClass';
</script>

<script lang="ts">
  export let fluid = false;
</script>

<div
  {...$$restProps}
  class={buildClass('container', fluid && 'container_fluid', $$restProps.class)}
>
  <slot />
</div>

<style lang="postcss">
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .container_fluid {
    max-width: 100% !important;
  }

  @media screen and (min-width: 480px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      max-width: 768px;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media screen and (min-width: 1000px) {
    .container {
      max-width: 1000px;
      grid-template-columns: repeat(8, 1fr);
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      max-width: 1280px;
      grid-template-columns: repeat(12, 1fr);
    }
  }
</style>
