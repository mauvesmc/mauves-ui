<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Button from '../../components/Button.svelte';
  import Select from '../../components/Select.svelte';
  import Stack from '../../components/Stack.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let label = '';
  let inputLabel = '';
  let selected: { value: string; label: string } | undefined = undefined;

  let data = [
    { value: 'dog', label: 'Собака' },
    { value: 'cat', label: 'Кошка' },
    { value: 'chicken', label: 'Курица' },
    { value: 'egg', label: 'Яйцо' },
    { value: 'pig', label: 'Свинья' },
  ];

  $: filteredData = data.filter((d) =>
    d.label.toLowerCase().includes(inputLabel.toLowerCase()),
  );
</script>

<StoryWrapper>
  <Variant name="Обычный">
    <Stack>
      <Select
        bind:label
        bind:inputLabel
        disabled
        on:clear={() => (selected = undefined)}
      >
        {#each filteredData as d (d.value)}
          <Button
            fullWidth
            variant="subtle"
            color="secondary"
            on:click={() => {
              label = d.label;
              inputLabel = d.label;
              selected = d;
            }}>{d.label}</Button
          >
        {/each}
      </Select>
      <Select
        bind:label
        bind:inputLabel
        on:clear={() => (selected = undefined)}
      >
        {#each filteredData as d (d.value)}
          <Button
            fullWidth
            variant="subtle"
            color="secondary"
            on:click={() => {
              label = d.label;
              inputLabel = d.label;
              selected = d;
            }}>{d.label}</Button
          >
        {/each}
      </Select>
      <pre>{JSON.stringify(selected, null, 2)}</pre>
    </Stack>
  </Variant>
</StoryWrapper>
