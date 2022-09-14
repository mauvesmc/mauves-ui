<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../components/Center.svelte';
  import Container from '../components/Container.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="С блоками" description="Имеет пару блоков">
    <Container>
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
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
    </Container>
  </Variant>
  <Variant name="Без блоков" description="Не имеет блоков">
    <Container style="height: 100px" />
  </Variant>

  <Variant name="На всю ширину" description="Растягивается на всю ширину">
    <Container fluid>
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
      <Center
        style="background: var(--theme-base-2); padding: 1rem; grid-column: span 2 / span 2"
      >
        <p>Приколыч</p>
      </Center>
    </Container>
  </Variant>
</StoryWrapper>

<style lang="postcss">
</style>
