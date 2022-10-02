<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
</script>

<script lang="ts">
</script>

<div {...$$restProps} class={buildClass('modal', $$restProps.class)}>
	<slot />
</div>

<style lang="postcss">
	.modal {
		width: 576px;
		max-width: calc(100% - 2rem);
		max-height: min(calc(100% - 2rem), max-content);
		background-color: var(--theme-base-1);
		color: var(--theme-text-default);
		overscroll-behavior-y: contain;
	}
</style>
