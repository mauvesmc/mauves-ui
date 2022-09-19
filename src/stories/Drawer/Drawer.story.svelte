<script lang="ts" context="module">
  import Button from '../../components/Button.svelte';
  import Drawer from '../../components/Drawer.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let isOpened = false;
</script>

<StoryWrapper>
  <Button on:click={() => (isOpened = true)}>Открыть</Button>
  <Drawer bind:opened={isOpened} withBackdrop>
    <Button fullWidth color="primary">Куча</Button>
    <Button fullWidth color="secondary">Не нужных</Button>
    <Button fullWidth color="success">Бесполезных</Button>
    <Button fullWidth color="warning">Кнопок</Button>
    <Button fullWidth color="danger">Кнопка</Button>
    <Button fullWidth color="info">Кнопка</Button>
  </Drawer>
</StoryWrapper>
