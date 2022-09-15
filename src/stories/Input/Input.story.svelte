<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import { Cloud, Icon } from 'svelte-hero-icons';

  import Group from '../../components/Group.svelte';
  import Input from '../../components/Input.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Обычное" description="Обычное поле ввода">
    <Input style="width: 100%; max-width: 200px" placeholder="Подсказка..." />
  </Variant>
  <Variant name="Выключенное" description="Выключенное">
    <Input
      style="width: 100%; max-width: 200px"
      placeholder="Подсказка..."
      disabled
    />
  </Variant>
  <Variant name="Иконки" description="С иконками">
    <Input fullWidth placeholder="Подсказка...">
      <Icon slot="start" src={Cloud} size="24" />
      <Icon slot="end" src={Cloud} size="24" />
    </Input>
  </Variant>
  <Variant name="Размеры" description="Все размеры">
    <Group style="width: 100%;" position="center">
      <Input
        size="sm"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="md"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="lg"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
    </Group>
  </Variant>
  <Variant name="Загругления" description="Все закругления">
    <Group style="width: 100%;" position="center">
      <Input
        size="xl"
        radius="none"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        radius="sm"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        radius="md"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        radius="lg"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        radius="xl"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
      <Input
        size="xl"
        radius="full"
        style="width: 100%; max-width: 200px"
        placeholder="Подсказка..."
      />
    </Group>
  </Variant>
</StoryWrapper>
