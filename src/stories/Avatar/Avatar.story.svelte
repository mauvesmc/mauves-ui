<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Avatar from '../../components/Avatar.svelte';
  import Group from '../../components/Group.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Sizes NONE" description="Все размеры с радиусом NONE">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="none"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="none"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="none"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="none"
      />
    </Group>
  </Variant>
  <Variant name="Sizes SM" description="Все размеры с радиусом SM">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="sm"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="sm"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="sm"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="sm"
      />
    </Group>
  </Variant>
  <Variant name="Sizes MD" description="Все размеры с радиусом MD">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="md"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="md"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="md"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="md"
      />
    </Group>
  </Variant>
  <Variant name="Sizes LG" description="Все размеры с радиусом LG">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="lg"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="lg"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="lg"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="lg"
      />
    </Group>
  </Variant>
  <Variant name="Sizes XL" description="Все размеры с радиусом XL">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="xl"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="xl"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="xl"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="xl"
      />
    </Group>
  </Variant>
  <Variant name="Sizes FULL" description="Все размеры с радиусом FULL">
    <Group>
      <Avatar
        src="https://mauves.ru/api/v1/head/AntDeoo/current?w=40"
        size="sm"
        radius="full"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/Voodus_/current?w=40"
        size="md"
        radius="full"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FaustGM/current?w=40"
        size="lg"
        radius="full"
      />
      <Avatar
        src="https://mauves.ru/api/v1/head/FerusUs/current?w=40"
        size="xl"
        radius="full"
      />
    </Group>
  </Variant>
  <Variant name="Fallback" description="все размеры fallback'ов">
    <Group>
      <Avatar size="sm" radius="full"><span>An</span></Avatar>
      <Avatar size="md" radius="full"><span>Vo</span></Avatar>
      <Avatar size="lg" radius="full"><span>Fa</span></Avatar>
      <Avatar size="xl" radius="full"><span>Fe</span></Avatar>
    </Group>
  </Variant>
</StoryWrapper>

<style lang="postcss">
</style>
