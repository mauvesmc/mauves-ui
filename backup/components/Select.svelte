<script lang="ts" context="module">
	import Dropdown from './Dropdown.svelte';
	import Input from './Input.svelte';

	import { createEventDispatcher } from 'svelte';
	import type { MauvesSize } from '../core';
	import buildClass from '../core/buildClass';
	import randomId from '../core/randomId';
	import OutClick from './OutClick.svelte';
</script>

<script lang="ts">
	export let label = '';
	export let inputLabel = label;
	export let id = randomId();
	export let size: MauvesSize = 'md';
	export let radius: MauvesSize | 'full' | 'none' = 'md';
	export let placeholder = '';
	export let disabled = false;
	export let readonly = false;

	const dispatch = createEventDispatcher();

	let ref: HTMLElement;
	let isOpened = false;

	const clearValue = (inputLabel: string) => {
		if (label === inputLabel) return;
		label = '';
		dispatch('clear');
	};

	$: clearValue(inputLabel);
</script>

<OutClick
	on:outclick={() => (isOpened = false)}
	useWrapper
	{...$$restProps}
	class={buildClass('select', $$restProps.class)}
>
	<Input
		bind:ref
		bind:value={inputLabel}
		{id}
		{size}
		{radius}
		{placeholder}
		{disabled}
		{readonly}
		fullWidth
		on:focus={() => (isOpened = true)}
		style="width: 200px"
	/>
	<Dropdown {ref} opened={isOpened}>
		<slot />
	</Dropdown>
</OutClick>

<style lang="postcss">
	:global(.select) {
		position: relative;
	}
</style>
