<script lang="ts" context="module">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, type TransitionConfig } from 'svelte/transition';
</script>

<script lang="ts">
	export let duration: number;
	export let text: string;
	export let animation: (node: Element, params: any) => TransitionConfig = fade;
	export let options: any = { duration: 150 };

	const dispatch = createEventDispatcher();

	onMount(() => {
		setTimeout(() => dispatch('destroy'), duration);
	});
</script>

<div in:animation={{ delay: 150, ...options }} out:animation={options} class="toast shadow-sm">
	{text}
</div>

<style lang="postcss">
	.toast {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		max-width: 100%;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		font-size: var(--theme-font-size-b2);
		line-height: var(--theme-line-height-b2);
		background-color: rgba(var(--theme-secondary-default-rgb), 0.9);
		backdrop-filter: blur(2px);
		color: var(--theme-text-default);
		border-radius: 9999px;
		width: max-content;
		max-width: calc(100% - 2rem);
		overscroll-behavior-y: contain;
		border: 1px solid var(--theme-secondary-active);
	}
</style>
