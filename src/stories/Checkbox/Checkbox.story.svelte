<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';

  import Checkbox from '../../components/Checkbox.svelte';
  import Stack from '../../components/Stack.svelte';
  import { id } from '../../core';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let catId = id();
  let dogId = id();
  let elephantId = id();
  let ratId = id();
  let group: string[] = ['dog', 'rat'];
</script>

<StoryWrapper>
  <Variant name="Обычное" description="Обычное поле ввода">
    <Stack>
      <label
        for={catId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="sm"
          id={catId}
          bind:group
          value="cat"
          style="margin-right: 0.25rem"
          radius="sm"
        />
        <span class="typography-ht">Кошка</span>
      </label>
      <label
        for={dogId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="md"
          id={dogId}
          bind:group
          value="dog"
          style="margin-right: 0.25rem"
          radius="md"
        />
        <span class="typography-b2">Собака</span>
      </label>
      <label
        for={elephantId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="lg"
          id={elephantId}
          bind:group
          value="elephant"
          style="margin-right: 0.25rem"
          radius="lg"
        />
        <span class="typography-st2">Слон</span>
      </label>
      <label
        for={ratId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="xl"
          id={ratId}
          bind:group
          value="rat"
          style="margin-right: 0.25rem"
          radius="xl"
        />
        <span class="typography-h4">Крыса</span>
      </label>
    </Stack>
  </Variant>
  <Variant name="Стейты" description="Все стейты">
    <Stack>
      <label
        for="default"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          id="default"
          size="md"
          group={[]}
          value="default"
          style="margin-right: 0.25rem"
          readonly
        />
        <span class="typography-b2">Обычный</span>
      </label>
      <label
        for="indeterminate"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="md"
          id="indeterminate"
          group={[]}
          indeterminate
          value="indeterminate"
          style="margin-right: 0.25rem"
          readonly
        />
        <span class="typography-b2">Неопределённый</span>
      </label>
      <label
        for="checked"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="md"
          id="checked"
          group={['checked']}
          value="checked"
          style="margin-right: 0.25rem"
          readonly
        />
        <span class="typography-b2">Выбранный</span>
      </label>
      <label
        for="default-disabled"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          id="default-disabled"
          size="md"
          group={[]}
          value="default-disabled"
          style="margin-right: 0.25rem"
          readonly
          disabled
        />
        <span class="typography-b2">Обычный + выключенный</span>
      </label>
      <label
        for="indeterminate-disabled"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="md"
          id="indeterminate-disabled"
          group={[]}
          indeterminate
          value="indeterminate-disabled"
          style="margin-right: 0.25rem"
          readonly
          disabled
        />
        <span class="typography-b2">Неопределённый + выключенный</span>
      </label>
      <label
        for="checked"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Checkbox
          size="md"
          id="checked"
          group={['checked']}
          value="checked"
          style="margin-right: 0.25rem"
          readonly
          disabled
        />
        <span class="typography-b2">Выбранный + выключенный</span>
      </label>
    </Stack>
  </Variant>
</StoryWrapper>
