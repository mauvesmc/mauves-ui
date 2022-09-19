<script lang="ts" context="module">
</script>

<script lang="ts">
  import { Variant } from '@vitebook/client';
  import SegmentedControl from '../../components/SegmentedControl.svelte';
  import Stack from '../../components/Stack.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';

  const data = [
    { value: 'cat', label: 'Кошка' },
    { value: 'rat' },
    { value: 'dog', label: 'Собака' },
    { value: 'bird', label: 'Птичка', disabled: true },
  ];
</script>

<StoryWrapper>
  <Variant name="SM">
    <Stack style="width: 70vw" align="center">
      <SegmentedControl {data} size="sm" radius="none" />
      <SegmentedControl {data} size="sm" radius="none" disabled />
      <SegmentedControl {data} size="sm" radius="sm" />
      <SegmentedControl {data} size="sm" radius="sm" disabled />
      <SegmentedControl {data} size="sm" radius="md" />
      <SegmentedControl {data} size="sm" radius="md" disabled />
      <SegmentedControl {data} size="sm" radius="lg" />
      <SegmentedControl {data} size="sm" radius="lg" disabled />
      <SegmentedControl {data} size="sm" radius="xl" />
      <SegmentedControl {data} size="sm" radius="xl" disabled />
      <SegmentedControl fullWidth {data} size="sm" radius="full" />
      <SegmentedControl fullWidth {data} size="sm" radius="full" disabled />
    </Stack>
  </Variant>
  <Variant name="MD">
    <Stack style="width: 70vw" align="center">
      <SegmentedControl {data} size="md" radius="none" />
      <SegmentedControl {data} size="md" radius="none" disabled />
      <SegmentedControl {data} size="md" radius="sm" />
      <SegmentedControl {data} size="md" radius="sm" disabled />
      <SegmentedControl {data} size="md" radius="md" />
      <SegmentedControl {data} size="md" radius="md" disabled />
      <SegmentedControl {data} size="md" radius="lg" />
      <SegmentedControl {data} size="md" radius="lg" disabled />
      <SegmentedControl {data} size="md" radius="xl" />
      <SegmentedControl {data} size="md" radius="xl" disabled />
      <SegmentedControl fullWidth {data} size="md" radius="full" />
      <SegmentedControl fullWidth {data} size="md" radius="full" disabled />
    </Stack>
  </Variant>
  <Variant name="LG">
    <Stack style="width: 70vw" align="center">
      <SegmentedControl {data} size="lg" radius="none" />
      <SegmentedControl {data} size="lg" radius="none" disabled />
      <SegmentedControl {data} size="lg" radius="sm" />
      <SegmentedControl {data} size="lg" radius="sm" disabled />
      <SegmentedControl {data} size="lg" radius="md" />
      <SegmentedControl {data} size="lg" radius="md" disabled />
      <SegmentedControl {data} size="lg" radius="lg" />
      <SegmentedControl {data} size="lg" radius="lg" disabled />
      <SegmentedControl {data} size="lg" radius="xl" />
      <SegmentedControl {data} size="lg" radius="xl" disabled />
      <SegmentedControl fullWidth {data} size="lg" radius="full" />
      <SegmentedControl fullWidth {data} size="lg" radius="full" disabled />
    </Stack>
  </Variant>
  <Variant name="XL">
    <Stack style="width: 70vw" align="center">
      <SegmentedControl {data} size="xl" radius="none" />
      <SegmentedControl {data} size="xl" radius="none" disabled />
      <SegmentedControl {data} size="xl" radius="sm" />
      <SegmentedControl {data} size="xl" radius="sm" disabled />
      <SegmentedControl {data} size="xl" radius="md" />
      <SegmentedControl {data} size="xl" radius="md" disabled />
      <SegmentedControl {data} size="xl" radius="lg" />
      <SegmentedControl {data} size="xl" radius="lg" disabled />
      <SegmentedControl {data} size="xl" radius="xl" />
      <SegmentedControl {data} size="xl" radius="xl" disabled />
      <SegmentedControl fullWidth {data} size="xl" radius="full" />
      <SegmentedControl fullWidth {data} size="xl" radius="full" disabled />
    </Stack>
  </Variant>
</StoryWrapper>
