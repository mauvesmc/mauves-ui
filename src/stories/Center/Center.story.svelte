<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../../components/Center.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Как блок" description="Имеет display равный flex">
    <Center
      style="background: var(--theme-base-2); width: 200px; height: 150px"
    >
      <p>Приколыч</p>
    </Center>
  </Variant>

  <Variant name="Как текст" description="Имеет display равный inline-flex">
    <h1>
      Большая хуюмбула с <Center
        inline
        style="background: var(--theme-base-2); width: 200px; height: var(--theme-font-size-h1); font-size: var(--theme-font-size-ht)"
      >
        центрированием
      </Center>
    </h1>
  </Variant>
</StoryWrapper>
