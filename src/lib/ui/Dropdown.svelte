<script lang="ts" context="module">
	import type { TransitionConfig } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import type { MauvesSize } from '../core';
	import buildClass from '../core/buildClass';
</script>

<script lang="ts">
	export let ref: HTMLElement;
	export let opened = false;
	export let animation: (node: Element, params: any) => TransitionConfig = fade;
	export let options: any = { duration: 150 };
	export let zIndex = 50;
	export let fullWidth = false;
	export let radius: MauvesSize | 'none' = 'md';

	let onTop = true;

	const update = () => {
		if (!ref) return;
		const bounding = ref.getBoundingClientRect();

		const yWithHeight = bounding.top + 200 + 48;
		onTop = window.innerHeight <= yWithHeight;
	};

	$: {
		ref;
		update();
	}
</script>

<svelte:window on:resize={update} on:scroll={update} />

{#if opened}
	<div
		{...$$restProps}
		class={buildClass('dropdown shadow-sm', `dropdown_radius-${radius}`, $$restProps.class)}
		transition:animation={options}
		style:top={!onTop ? '100%' : 'auto'}
		style:bottom={onTop ? '100%' : 'auto'}
		style:width={fullWidth ? 'auto' : 'max-content'}
		style:min-width={fullWidth ? '100%' : 'max-content'}
		style:z-index={zIndex}
	>
		<slot />
	</div>
{/if}

<style lang="postcss">
	.dropdown {
		max-height: 200px;
		position: absolute;
		left: 0;
		margin: 0.5rem 0;
		overflow: hidden;
		overflow-y: auto;
		background-color: var(--theme-secondary-default);
		color: var(--theme-text-default);
		border-radius: 0.5rem;
		padding: 0.5rem;
		box-sizing: border-box;
		border: 1px solid var(--theme-secondary-active);
	}

	.dropdown_radius-sm {
		border-radius: 0.5rem;
	}

	.dropdown_radius-md {
		border-radius: 0.75rem;
	}

	.dropdown_radius-lg {
		border-radius: 1rem;
	}

	.dropdown_radius-xl {
		border-radius: 1.25rem;
	}
</style>
