<script lang="ts" context="module">
	import buildClass from '../core/buildClass';
</script>

<script lang="ts">
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
</script>

<div
	{...$$restProps}
	class={buildClass('button-group', `button-group_orientation-${orientation}`, $$restProps.class)}
>
	<slot />
</div>

<style lang="postcss">
	.button-group {
		display: flex;
	}

	.button-group_orientation-horizontal {
		flex-direction: row;
	}

	.button-group_orientation-vertical {
		flex-direction: column;
	}

	.button-group > :global(.button:focus) {
		z-index: 1;
	}

	.button-group > :global(.button:first-of-type) {
		border-bottom-right-radius: 0;
	}

	.button-group_orientation-horizontal > :global(.button:first-of-type) {
		border-top-right-radius: 0;
	}

	.button-group_orientation-vertical > :global(.button:first-of-type) {
		border-bottom-left-radius: 0;
	}

	.button-group > :global(.button:last-of-type) {
		border-top-left-radius: 0;
	}

	.button-group_orientation-horizontal > :global(.button:last-of-type) {
		border-bottom-left-radius: 0;
	}

	.button-group_orientation-vertical > :global(.button:last-of-type) {
		border-top-right-radius: 0;
	}

	.button-group > :global(.button:not(:first-of-type):not(:last-of-type)) {
		border-radius: 0;
	}
</style>
