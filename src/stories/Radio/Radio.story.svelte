<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';

  import Radio from '../../components/Radio.svelte';
  import Stack from '../../components/Stack.svelte';
  import { randomId } from '../../core';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
  let catId = randomId();
  let dogId = randomId();
  let group = 'dog';
</script>

<StoryWrapper>
  <Variant name="Обычное" description="Обычное поле ввода">
    <Stack>
      <label
        for={catId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="sm"
          id={catId}
          bind:group
          name="animal"
          value="cat"
          style="margin-right: 0.25rem"
        />
        <span class="typography-ht">Кошка</span>
      </label>
      <label
        for={dogId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="md"
          id={dogId}
          bind:group
          name="animal"
          value="dog"
          style="margin-right: 0.25rem"
        />
        <span class="typography-b2">Собака</span>
      </label>
      <label
        for={dogId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="lg"
          bind:group
          name="animal"
          value="dog"
          style="margin-right: 0.25rem"
        />
        <span class="typography-st2">Собака</span>
      </label>
      <label
        for={dogId}
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="xl"
          bind:group
          name="animal"
          value="dog"
          style="margin-right: 0.25rem"
        />
        <span class="typography-h4">Собака</span>
      </label>
    </Stack>
  </Variant>
  <Variant name="Стейты" description="Все стейты">
    <Stack>
      <label
        for="default"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          id="default"
          size="md"
          group=""
          value="default"
          style="margin-right: 0.25rem"
          readonly
        />
        <span class="typography-b2">Обычный</span>
      </label>
      <label
        for="checked"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="md"
          id="checked"
          group="checked"
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
        <Radio
          id="default-disabled"
          size="md"
          group=""
          value="default-disabled"
          style="margin-right: 0.25rem"
          readonly
          disabled
        />
        <span class="typography-b2">Обычный + выключенный</span>
      </label>
      <label
        for="checked"
        style="display: flex; align-items: center; user-select: none;"
      >
        <Radio
          size="md"
          id="checked"
          group="checked"
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
