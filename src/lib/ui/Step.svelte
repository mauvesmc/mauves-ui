<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
</script>

<script lang="ts">
	export let currentStep: number;
	export let index: number;
</script>

<button
	{...$$restProps}
	class={buildClass(
		'step',
		currentStep === index ? 'step_current' : '',
		index < currentStep ? 'step_success' : '',
		$$restProps.class
	)}
	on:click
>
	<div class="step__index">
		<h6>{index}</h6>
	</div>
</button>

<style lang="postcss">
	.step {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex: 1;
		color: var(--theme-text-default);
		cursor: pointer;
		position: relative;
		--line-color: currentColor;
	}

	.step::before {
		content: '';
		width: 100%;
		height: 2px;
		background: var(--line-color);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		border-radius: 4px;
	}

	.step:disabled {
		--line-color: var(--theme-disabled-background);
	}

	.step:first-child {
		width: max-content;
		flex: 0;
	}

	.step:first-child::before {
		display: none;
	}

	.step:disabled .step__index {
		background-color: var(--theme-disabled-background);
		color: var(--theme-disabled-foreground);
	}

	.step__index {
		border-radius: 1000px;
		height: 2.5rem;
		width: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		z-index: 1;
	}

	.step__index:last-child {
		margin-right: 0;
	}

	.step_current {
		--line-color: var(--theme-primary-default);
	}

	.step_current .step__index {
		background-color: var(--theme-secondary-default);
	}

	.step_success {
		--line-color: var(--theme-primary-default);
	}

	.step_success .step__index {
		background-color: var(--theme-primary-default);
		color: var(--theme-dark-text-default);
	}
</style>
