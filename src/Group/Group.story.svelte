<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../components/Center.svelte';
  import Group from '../components/Group.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Слева" description="Прилегает к левому краю">
    <Group style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
  <Variant name="Центр" description="Центрируется">
    <Group position="center" style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
  <Variant name="Справа" description="Прилегает к правому краю">
    <Group position="right" style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
  <Variant
    name="Распределенный"
    description="Каждый экземпляр на одном растоянии друг от друга"
  >
    <Group position="apart" style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
  <Variant
    name="Растянутый"
    description="Каждый экземпляр растянут, чтобы занимать максимальную ширину"
  >
    <Group grow style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
  <Variant
    name="С большими отступами"
    description="Каждый экземпляр растянут, чтобы занимать максимальную ширину"
  >
    <Group position="center" spacing="xl" style="width: 100%; padding: 0 1rem">
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
    </Group>
  </Variant>
</StoryWrapper>
