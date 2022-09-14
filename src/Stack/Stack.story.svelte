<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../components/Center.svelte';

  import Stack from '../components/Stack.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Обычный" description="По умолчанию">
    <Stack>
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
    </Stack>
  </Variant>
  <Variant
    name="Растянутые и равноудаленные"
    description="stretch и space-evenly"
  >
    <Stack
      align="stretch"
      justify="space-evenly"
      style="width: 100%; height: 100%; padding: 0 1rem"
    >
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
    </Stack>
  </Variant>
</StoryWrapper>

<style lang="postcss">
</style>
