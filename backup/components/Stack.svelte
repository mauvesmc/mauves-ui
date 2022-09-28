<script lang="ts" context="module">
	import type { MauvesSize } from '../core';
	import buildClass from '../core/buildClass';
	import buildStyle from '../core/buildStyle';
</script>

<script lang="ts">
	export let align: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'stretch';
	export let justify:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-around'
		| 'space-between'
		| 'space-evenly' = 'flex-start';
	export let spacing: MauvesSize = 'md';
</script>

<div
	{...$$restProps}
	class={buildClass('stack', `stack_spacing-${spacing}`, $$restProps.class)}
	style={buildStyle(`justify-content: ${justify}`, `align-items: ${align}`, $$restProps.style)}
>
	<slot />
</div>

<style lang="postcss">
	.stack {
		display: flex;
		flex-direction: column;
	}

	.stack_spacing-sm > :global(*) {
		margin-bottom: 0.5rem;
	}

	.stack_spacing-md > :global(*) {
		margin-bottom: 1rem;
	}

	.stack_spacing-lg > :global(*) {
		margin-bottom: 2rem;
	}

	.stack_spacing-xl > :global(*) {
		margin-bottom: 3rem;
	}

	.stack > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
