<script lang="ts" context="module">
	import buildClass from '../core/buildClass';
	import type { LoaderColor } from './Loader';
</script>

<script lang="ts">
	export let size: number | string = 40;
	export let loaderSize: number | string = 24;
	export let color: LoaderColor = 'current';

	$: cssSize = typeof size === 'number' ? `${size}px` : size;
	$: cssLoaderSize = typeof loaderSize === 'number' ? `${loaderSize}px` : loaderSize;
</script>

<div
	{...$$restProps}
	class={buildClass('loader', `loader_color-${color}`, $$restProps.class)}
	style:width={cssSize}
	style:height={cssSize}
>
	<span class="loader__inner" style:width={cssLoaderSize} style:height={cssLoaderSize} />
	<span class="loader__inner" style:width={cssLoaderSize} style:height={cssLoaderSize} />
</div>

<style lang="postcss">
	.loader {
		--loader-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: default;
	}

	.loader_color-primary {
		--loader-color: var(--theme-primary-default);
	}

	.loader_color-secondary {
		--loader-color: var(--theme-secondary-default);
	}

	.loader_color-success {
		--loader-color: var(--theme-green-default);
	}

	.loader_color-warning {
		--loader-color: var(--theme-yellow-default);
	}

	.loader_color-danger {
		--loader-color: var(--theme-red-default);
	}

	.loader_color-info {
		--loader-color: var(--theme-blue-default);
	}

	.loader_color-text {
		--loader-color: var(--theme-text-default);
	}

	.loader_color-alt-text {
		--loader-color: var(--theme-base-1);
	}

	.loader_color-current {
		--loader-color: currentColor;
	}

	.loader__inner {
		border: 2px solid currentColor;
		border-radius: 1rem;
		color: var(--loader-color);
		animation-name: loader;
		animation-duration: 2s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
		position: absolute;
		opacity: 0;
	}

	.loader__inner:nth-child(2) {
		animation-delay: 1s;
	}

	@keyframes loader {
		0% {
			transform: scale(0) rotate(45deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: scale(1) rotate(225deg);
			opacity: 0;
		}
	}
</style>
