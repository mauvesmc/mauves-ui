<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
	import randomId from '$lib/core/randomId';
	import { slide } from 'svelte/transition';
</script>

<script lang="ts">
	export let title = '';
	export let error = '';
	export let id = randomId();
</script>

<div {...$$restProps} class={buildClass('text-field', $$restProps.class)}>
	{#if title}
		<label class="text-field__title typography-b2" for={id}>{title}</label>
	{/if}
	<slot {id} />
	{#if error}
		<p transition:slide={{ duration: 150 }} class="text-field__error typography-ht">{error}</p>
	{/if}
</div>

<style lang="postcss">
	.text-field__title {
		margin-bottom: 0.25rem;
		display: block;
	}

	.text-field__error {
		margin-top: 0.125rem;
		color: var(--theme-red-default);
	}
</style>
