<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
</script>

<script lang="ts">
	export let data: { value: string; label: string; disabled?: boolean }[] = [];
	export let value = data[0]?.value ?? '';
	export let size = 'md';
	export let radius = 'md';
	export let disabled = false;
	export let fullWidth = false;
</script>

<div
	{...$$restProps}
	class={buildClass(
		'tabs',
		`tabs_size-${size}`,
		`tabs_radius-${radius}`,
		fullWidth && `tabs_fullwidth`,
		$$restProps.class
	)}
	data-enabled={!disabled}
>
	{#each data as item (item.value)}
		<button
			class={buildClass('tabs__button', value === item.value && `tabs__button_selected`)}
			on:click={() => (value = item.value)}
			disabled={disabled || item.disabled}
		>
			{item.label ?? item.value}
		</button>
	{/each}
</div>

<style lang="postcss">
	.tabs {
		outline: none;
		border: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		position: relative;
		font-weight: 500;
		width: max-content;
		overflow-x: auto;
		border-bottom: 1px solid rgba(var(--theme-secondary-hover-rgb), 0.5);
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tabs[data-enabled='true'] {
		cursor: pointer;
	}

	.tabs[data-enabled='false'] {
		cursor: not-allowed;
	}

	.tabs_fullwidth {
		width: 100%;
	}

	.tabs__button {
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
		font-weight: 500;
		flex-grow: 1;
		height: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.125em;
		padding-bottom: 0.125em;
		font-size: inherit;
		line-height: inherit;
		border-left: 1px solid transparent;
		border-top: 1px solid transparent;
		border-right: 1px solid transparent;
		min-width: max-content;
	}

	.tabs__button:enabled {
		cursor: pointer;
		background-color: transparent;
		color: var(--theme-text-defualt);
	}

	.tabs__button:enabled:hover {
		background-color: rgba(var(--theme-secondary-hover-rgb), 0.25);
	}

	.tabs__button_selected:enabled {
		border-color: rgba(var(--theme-secondary-hover-rgb), 0.5);
		border-bottom-color: transparent;
	}

	.tabs__button:disabled {
		cursor: not-allowed;
		color: var(--theme-disabled-background);
	}

	.tabs__button:last-child {
		margin-right: 0;
	}

	.tabs_size-sm .tabs__button {
		margin-right: 0.375rem;
		height: 2rem;
		min-height: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: var(--theme-font-size-ht);
		line-height: var(--theme-line-height-ht);
	}

	.tabs_size-md .tabs__button {
		margin-right: 0.5rem;
		height: 2.5rem;
		min-height: 2.5rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		font-size: var(--theme-font-size-b2);
		line-height: var(--theme-line-height-b2);
	}

	.tabs_size-lg .tabs__button {
		margin-right: 0.625rem;
		height: 3rem;
		min-height: 3rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		font-size: var(--theme-font-size-st2);
		line-height: var(--theme-line-height-st2);
	}

	.tabs_size-xl .tabs__button {
		margin-right: 0.75rem;
		height: 3.5rem;
		min-height: 3.5rem;
		padding-left: 1.75rem;
		padding-right: 1.75rem;
		font-size: var(--theme-font-size-h4);
		line-height: var(--theme-line-height-h4);
	}

	.tabs_radius-sm .tabs__button {
		border-radius: 0.5rem;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}

	.tabs_radius-md .tabs__button {
		border-radius: 0.75rem;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}

	.tabs_radius-lg .tabs__button {
		border-radius: 1rem;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}

	.tabs_radius-xl .tabs__button {
		border-radius: 1.25rem;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}

	.tabs_radius-full .tabs__button {
		border-radius: 9999px;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}
</style>
