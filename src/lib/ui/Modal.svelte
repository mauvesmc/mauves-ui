<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
</script>

<script lang="ts">
	export let title: string;
	export let description = '';
</script>

<div {...$$restProps} class={buildClass('modal shadow-md', $$restProps.class)}>
	<h4 class={buildClass('modal__title', !description && 'modal__padding')}>{title}</h4>
	{#if description}
		<p class="modal__description modal__padding typography-b2">{description}</p>
	{/if}
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
		padding: 2rem;
		border-radius: 1.5rem;
		border: 1px solid var(--theme-secondary-active);
	}

	.modal__title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.modal__description {
		color: var(--theme-text-hover);
		margin-top: 0.5rem;
	}

	.modal__padding {
		margin-bottom: 1rem;
	}
</style>
