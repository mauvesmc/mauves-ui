<script lang="ts" context="module">
  import { onDestroy, onMount } from 'svelte';
</script>

<script lang="ts">
  export let query: string;

  let matches = false;
  let mediaQueryList: MediaQueryList;

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    matches = e.matches;
  };

  onMount(() => {
    mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', mediaQueryListener);
    matches = mediaQueryList.matches;
  });

  onDestroy(() => {
    mediaQueryList.removeEventListener('change', mediaQueryListener);
  });
</script>

<slot {matches} />

<style lang="postcss">
</style>
