<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../../components/Center.svelte';
  import Column from '../../components/Column.svelte';
  import Container from '../../components/Container.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="С блоками" description="Имеет пару блоков">
    <Container>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
      <Column
        column="1 / -1"
        md="span 3 / span 3"
        lg="span 4 / span 4"
        xl="span 3 / span 3"
        style="background: var(--theme-base-2); padding: 1rem"
      >
        <Center>Приколыч</Center>
      </Column>
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
