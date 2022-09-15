<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Group from '../../components/Group.svelte';

  import Button from '../../components/Button.svelte';
  import ButtonGroup from '../../components/ButtonGroup.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Sizes" description="Все размеры">
    <Group position="center">
      <Button size="sm">Кнопка</Button>
      <Button size="md">Кнопка</Button>
      <Button size="lg">Кнопка</Button>
      <Button size="xl">Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Colors Solid" description="Все цвета">
    <Group position="center">
      <Button color="primary">Кнопка</Button>
      <Button color="secondary">Кнопка</Button>
      <Button color="success">Кнопка</Button>
      <Button color="warning">Кнопка</Button>
      <Button color="danger">Кнопка</Button>
      <Button color="info">Кнопка</Button>
      <Button color="info" disabled>Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Colors Subtle" description="Все цвета">
    <Group position="center">
      <Button variant="subtle" color="primary">Кнопка</Button>
      <Button variant="subtle" color="secondary">Кнопка</Button>
      <Button variant="subtle" color="success">Кнопка</Button>
      <Button variant="subtle" color="warning">Кнопка</Button>
      <Button variant="subtle" color="danger">Кнопка</Button>
      <Button variant="subtle" color="info">Кнопка</Button>
      <Button variant="subtle" color="info" disabled>Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Loading" description="Загрузка">
    <Group position="center">
      <Button loading>Кнопка</Button>
      <Button loading>Кнопка</Button>
      <Button loading>Кнопка</Button>
      <Button loading loaderPosition="right">Кнопка</Button>
      <Button loading loaderPosition="right">Кнопка</Button>
      <Button loading loaderPosition="right">Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Radius" description="Все закругления">
    <Group position="center">
      <Button size="xl" radius="none">Кнопка</Button>
      <Button size="xl" radius="sm">Кнопка</Button>
      <Button size="xl" radius="md">Кнопка</Button>
      <Button size="xl" radius="lg">Кнопка</Button>
      <Button size="xl" radius="xl">Кнопка</Button>
      <Button size="xl" radius="full">Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Uppercase FullWidth" description="Максимальная ширина">
    <Group position="center" style="width: 100%">
      <Button fullWidth uppercase>Кнопка</Button>
    </Group>
  </Variant>
  <Variant name="Horizotal Group" description="Группа кнопок по горизонтали">
    <ButtonGroup>
      <Button variant="subtle" color="secondary">Кнопка</Button>
      <Button variant="subtle" color="secondary">Кнопка</Button>
      <Button variant="subtle" color="secondary">Кнопка</Button>
    </ButtonGroup>
  </Variant>
  <Variant name="Vertical Group" description="Группа кнопок по вертикали">
    <ButtonGroup orientation="vertical">
      <Button color="secondary">Кнопка</Button>
      <Button color="secondary">Кнопка</Button>
      <Button color="secondary">Кнопка</Button>
    </ButtonGroup>
  </Variant>
</StoryWrapper>
