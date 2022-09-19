<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Breadcrumbs from '../../components/Breadcrumbs.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="-">
    <Breadcrumbs>
      <a href="/">Ссылка 1</a>
      <a href="/">Ссылка 2</a>
      <a href="/">Ссылка 3</a>
      <a href="/">Ссылка 4</a>
    </Breadcrumbs>
  </Variant>
  <Variant name=">">
    <Breadcrumbs separator=">" spacing={40}>
      <a href="/">Ссылка 1</a>
      <a href="/">Ссылка 2</a>
      <a href="/">Ссылка 3</a>
      <a href="/">Ссылка 4</a>
    </Breadcrumbs>
  </Variant>
</StoryWrapper>
