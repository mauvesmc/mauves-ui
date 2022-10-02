<script lang="ts" context="module">
	import buildClass from '../core/buildClass';
</script>

<script lang="ts">
	export let tag = 'div';
	export let column = 'span 1 / span 1';
	export let sm: string = column;
	export let md: string = sm;
	export let lg: string = md;
	export let xl: string = lg;
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={buildClass('column', $$restProps.class)}
	style:--column={column}
	style:--column-sm={sm}
	style:--column-md={md}
	style:--column-lg={lg}
	style:--column-xl={xl}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.column {
		grid-column: var(--column);
		max-width: 100%;
	}

	@media screen and (min-width: 480px) {
		.column {
			grid-column: var(--column-sm);
		}
	}

	@media screen and (min-width: 768px) {
		.column {
			grid-column: var(--column-md);
		}
	}

	@media screen and (min-width: 1000px) {
		.column {
			grid-column: var(--column-lg);
		}
	}

	@media screen and (min-width: 1280px) {
		.column {
			grid-column: var(--column-xl);
		}
	}
</style>
