<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';
  import Center from '../../components/Center.svelte';

  import MediaQuery from '../../components/MediaQuery.svelte';
  import buildStyle from '../../core/buildStyle';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant
    name="Меньше 1000px"
    description="Если меньше 1000px, то делает блок красным"
  >
    <MediaQuery query="(max-width: 999px)" let:matches>
      <Center
        style={buildStyle(
          matches ? 'background: red' : 'background: var(--theme-base-2)',
          'padding: 1rem',
          'grid-column: span 2 / span 2',
        )}
      >
        <p>{matches}</p>
      </Center>
    </MediaQuery>
  </Variant>
</StoryWrapper>
