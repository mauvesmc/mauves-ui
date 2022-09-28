<script lang="ts" context="module">
	import type { MauvesSize } from '../core';
	import buildClass from '../core/buildClass';
</script>

<script lang="ts">
	export let tag = 'picture';
	export let size: MauvesSize = 'md';
	export let radius: MauvesSize | 'full' | 'none' = 'md';
	export let src = '';

	let error = false;

	$: {
		const tester = new Image();
		tester.onerror = () => {
			error = true;
			tester.remove();
		};
		tester.src = src;
	}
</script>

<svelte:element
	this={tag}
	class={buildClass('avatar', `avatar_size-${size}`, `avatar_radius-${radius}`, $$restProps.class)}
>
	{#if !error}
		<img alt="" loading="lazy" {...$$restProps} class="avatar__image" {src} />
	{:else if $$slots.default}
		<div class="avatar__placeholder">
			<slot />
		</div>
	{/if}
</svelte:element>

<style lang="postcss">
	.avatar {
		position: relative;
		display: block;
		user-select: none;
		overflow: hidden;
		text-decoration: none;
		border: 0px none;
		background-color: transparent;
		padding: 0px;
		box-sizing: border-box;
	}

	.avatar__image {
		object-fit: cover;
		width: 100%;
		height: 100%;
		display: block;
	}

	.avatar__placeholder {
		background-color: var(--theme-secondary-default);
		color: var(--theme-text-default);
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		user-select: none;
		border: 1px solid transparent;
	}

	.avatar_size-sm {
		min-height: 2rem;
		height: 2rem;
		min-width: 2rem;
		width: 2rem;
		font-size: var(--theme-font-size-ht);
		line-height: var(--theme-line-height-ht);
	}

	.avatar_size-md {
		min-height: 2.5rem;
		height: 2.5rem;
		min-width: 2.5rem;
		width: 2.5rem;
		font-size: var(--theme-font-size-b2);
		line-height: var(--theme-line-height-b2);
	}

	.avatar_size-lg {
		min-height: 3rem;
		height: 3rem;
		min-width: 3rem;
		width: 3rem;
		font-size: var(--theme-font-size-st2);
		line-height: var(--theme-line-height-st2);
	}

	.avatar_size-xl {
		min-height: 3.5rem;
		height: 3.5rem;
		min-width: 3.5rem;
		width: 3.5rem;
		font-size: var(--theme-font-size-h4);
		line-height: var(--theme-line-height-h4);
	}

	.avatar_radius-sm {
		border-radius: 0.5rem;
	}

	.avatar_radius-md {
		border-radius: 0.75rem;
	}

	.avatar_radius-lg {
		border-radius: 1rem;
	}

	.avatar_radius-xl {
		border-radius: 1.25rem;
	}

	.avatar_radius-full {
		border-radius: 9999px;
	}
</style>
