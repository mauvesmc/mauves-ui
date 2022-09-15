<script lang="ts" context="module">
  import { Variant } from '@vitebook/client';

  import AspectRatio from '../../components/AspectRatio.svelte';
  import StoryWrapper from '../StoryWrapper.svelte';
</script>

<script lang="ts">
</script>

<StoryWrapper>
  <Variant name="2 / 3" description="Изображение в соотношении 2 к 3">
    <AspectRatio ratio={2 / 3} style="width: 400px">
      <img
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="панда"
      />
    </AspectRatio>
  </Variant>

  <Variant name="4 / 3" description="Изображение в соотношении 4 к 3">
    <AspectRatio ratio={4 / 3} style="width: 600px">
      <img
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="панда"
      />
    </AspectRatio>
  </Variant>

  <Variant name="16 / 9" description="Изображение в соотношении 16 к 9">
    <AspectRatio ratio={16 / 9} style="width: 720px">
      <img
        src="https://i.ytimg.com/vi/HPnCsD0OfGI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJcF4CJU-_6J8cNCLd3CCRmqz4Cw"
        alt="превью"
      />
    </AspectRatio>
  </Variant>
</StoryWrapper>
