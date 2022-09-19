<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Stack from '../../components/Stack.svelte';
  import TextArea from '../../components/TextArea.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="Обычный">
    <Stack>
      <TextArea
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="sm"
      />
      <TextArea
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="md"
      />
      <TextArea
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="lg"
      />
      <TextArea
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="xl"
      />
    </Stack>
  </Variant>
  <Variant name="Выключенное">
    <Stack>
      <TextArea
        disabled
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="sm"
        radius="full"
      />
      <TextArea
        disabled
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="md"
        radius="full"
      />
      <TextArea
        disabled
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="lg"
        radius="full"
      />
      <TextArea
        disabled
        placeholder="testing"
        style="width: 200px"
        maxRows={3}
        size="xl"
        radius="full"
      />
    </Stack>
  </Variant>
</StoryWrapper>
