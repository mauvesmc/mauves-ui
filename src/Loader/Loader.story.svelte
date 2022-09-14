<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Group from '../components/Group.svelte';
  import Loader from '../components/Loader.svelte';

  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Все" description="Все цвета лоадеров">
    <Group position="center">
      <Loader color="primary" />
      <Loader color="secondary" />
      <Loader color="success" />
      <Loader color="warning" />
      <Loader color="danger" />
      <Loader color="info" />
      <Loader color="text" />
      <Loader color="alt-text" />
      <Loader color="current" />
    </Group>
  </Variant>
</StoryWrapper>
