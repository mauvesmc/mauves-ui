<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';

  import Stack from '../../components/Stack.svelte';
  import Switch from '../../components/Switch.svelte';
  import randomId from '../../core/randomId';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let catId = randomId();
  let dogId = randomId();
  let elephantId = randomId();
  let ratId = randomId();
  let group: string[] = ['dog', 'rat'];
</script>

<StoryWrapper>
  <Variant name="Обычное" description="Обычное поле ввода">
    <Stack>
      <label
        for={catId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Switch
          size="sm"
          id={catId}
          bind:group
          value="cat"
          style="margin-right: 0.25rem"
        />
        <span class="typography-ht">Кошка</span>
        <Switch
          size="sm"
          bind:group
          value="cat"
          disabled
          style="margin-left: 0.25rem"
        />
      </label>
      <label
        for={dogId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Switch
          size="md"
          id={dogId}
          bind:group
          value="dog"
          style="margin-right: 0.25rem"
        />
        <span class="typography-b2">Собака</span>
        <Switch
          size="md"
          bind:group
          value="dog"
          disabled
          style="margin-left: 0.25rem"
        />
      </label>
      <label
        for={elephantId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Switch
          size="lg"
          id={elephantId}
          bind:group
          value="elephant"
          style="margin-right: 0.25rem"
        />
        <span class="typography-st2">Слон</span>
        <Switch
          size="lg"
          bind:group
          value="elephant"
          disabled
          style="margin-left: 0.25rem"
        />
      </label>
      <label
        for={ratId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Switch
          size="xl"
          id={ratId}
          bind:group
          value="rat"
          style="margin-right: 0.25rem"
        />
        <span class="typography-h4">Крыса</span>
        <Switch
          size="xl"
          bind:group
          value="rat"
          disabled
          style="margin-left: 0.25rem"
        />
      </label>
    </Stack>
  </Variant>
</StoryWrapper>
