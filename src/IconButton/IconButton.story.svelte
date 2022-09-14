<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Group from '../components/Group.svelte';

  import { Cloud, Icon } from 'svelte-hero-icons';
  import IconButton from '../components/IconButton.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Primary Full" description="Все размеры primary цвета">
    <Group position="center">
      <IconButton variant="solid" size="sm">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton variant="solid" size="md">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton variant="solid" size="lg" loading>
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton variant="solid" size="xl" disabled>
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton variant="subtle" size="sm">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton variant="subtle" size="md">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton variant="subtle" size="lg">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton variant="subtle" size="xl" disabled>
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
  <Variant name="Secondary XL" description="Все размеры secondary цвета">
    <Group position="center">
      <IconButton color="secondary" variant="solid" size="sm" radius="xl">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="secondary" variant="solid" size="md" radius="xl">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton
        color="secondary"
        variant="solid"
        size="lg"
        radius="xl"
        loading
      >
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="secondary"
        variant="solid"
        size="xl"
        radius="xl"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton color="secondary" variant="subtle" size="sm" radius="xl">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="secondary" variant="subtle" size="md" radius="xl">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="secondary" variant="subtle" size="lg" radius="xl">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="secondary"
        variant="subtle"
        size="xl"
        radius="xl"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
  <Variant name="Success LG" description="Все размеры success цвета">
    <Group position="center">
      <IconButton color="success" variant="solid" size="sm" radius="lg">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="success" variant="solid" size="md" radius="lg">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="success" variant="solid" size="lg" radius="lg" loading>
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="success"
        variant="solid"
        size="xl"
        radius="lg"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton color="success" variant="subtle" size="sm" radius="lg">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="success" variant="subtle" size="md" radius="lg">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="success" variant="subtle" size="lg" radius="lg">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="success"
        variant="subtle"
        size="xl"
        radius="lg"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
  <Variant name="Warning MD" description="Все размеры warning цвета">
    <Group position="center">
      <IconButton color="warning" variant="solid" size="sm" radius="md">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="warning" variant="solid" size="md" radius="md">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="warning" variant="solid" size="lg" radius="md" loading>
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="warning"
        variant="solid"
        size="xl"
        radius="md"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton color="warning" variant="subtle" size="sm" radius="md">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="warning" variant="subtle" size="md" radius="md">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="warning" variant="subtle" size="lg" radius="md">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="warning"
        variant="subtle"
        size="xl"
        radius="md"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
  <Variant name="Danger SM" description="Все размеры danger цвета">
    <Group position="center">
      <IconButton color="danger" variant="solid" size="sm" radius="sm">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="danger" variant="solid" size="md" radius="sm">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="danger" variant="solid" size="lg" radius="sm" loading>
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton color="danger" variant="solid" size="xl" radius="sm" disabled>
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton color="danger" variant="subtle" size="sm" radius="sm">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="danger" variant="subtle" size="md" radius="sm">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="danger" variant="subtle" size="lg" radius="sm">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="danger"
        variant="subtle"
        size="xl"
        radius="sm"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
  <Variant name="Info NONE" description="Все размеры info цвета">
    <Group position="center">
      <IconButton color="info" variant="solid" size="sm" radius="none">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="info" variant="solid" size="md" radius="none">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="info" variant="solid" size="lg" radius="none" loading>
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton color="info" variant="solid" size="xl" radius="none" disabled>
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
      <IconButton color="info" variant="subtle" size="sm" radius="none">
        <Icon src={Cloud} size="1.25rem" />
      </IconButton>
      <IconButton color="info" variant="subtle" size="md" radius="none">
        <Icon src={Cloud} size="1.5rem" />
      </IconButton>
      <IconButton color="info" variant="subtle" size="lg" radius="none">
        <Icon src={Cloud} size="2rem" />
      </IconButton>
      <IconButton
        color="info"
        variant="subtle"
        size="xl"
        radius="none"
        disabled
      >
        <Icon src={Cloud} size="2.5rem" />
      </IconButton>
    </Group>
  </Variant>
</StoryWrapper>
