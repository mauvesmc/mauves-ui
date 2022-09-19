<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Button from '../../components/Button.svelte';
  import Dropdown from '../../components/Dropdown.svelte';
  import Input from '../../components/Input.svelte';
  import OutClick from '../../components/OutClick.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let ref: HTMLElement;
  let isOpened = false;
</script>

<StoryWrapper>
  <Variant name="Обычный">
    <OutClick
      on:outclick={() => (isOpened = false)}
      useWrapper
      style="position: relative"
    >
      <Input
        bind:ref
        placholder="Еблан"
        on:focus={() => (isOpened = true)}
        style="width: 200px"
      />
      <Dropdown {ref} opened={isOpened}>
        <Button fullWidth color="secondary">Тест</Button>
        <Button fullWidth color="secondary">Тест</Button>
        <Button fullWidth color="secondary">Тест</Button>
        <Button fullWidth color="secondary">Тест</Button>
        <Button fullWidth color="secondary">Тест</Button>
      </Dropdown>
    </OutClick>
  </Variant>
</StoryWrapper>
