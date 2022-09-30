<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import buildClass from '../core/buildClass';
	import buildStyle from '../core/buildStyle';
</script>

<script lang="ts">
	const dispatch = createEventDispatcher();

	export let excludeByDOMNode: HTMLElement[] = [];
	export let excludeByQuerySelector: string[] = [];

	export let useWrapper = false;

	export let includeSelf = false;

	let wrapper: HTMLElement;

	// Whether the excluded elements contain the event's target or not
	const isClickedOnExcluded = (eventTarget: HTMLElement) => {
		let status = false;

		for (let i = 0; i < excludeByDOMNode.length; i++) {
			if (status) break;
			if (excludeByDOMNode[i] && excludeByDOMNode[i].contains(eventTarget)) {
				status = true;
			}
		}

		for (let i = 0; i < excludeByQuerySelector.length; i++) {
			if (status) break;
			let el = document.querySelector(excludeByQuerySelector[i]);
			if (el && el.contains(eventTarget)) {
				status = true;
			}
		}

		return status;
	};

	const handleClick = (event: Event) => {
		if (
			(includeSelf ? true : !wrapper.contains(event.target as HTMLElement)) &&
			!isClickedOnExcluded(event.target as HTMLElement)
		) {
			dispatch('outclick', { wrapper });
		}
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (
			// With `on:click`, the A11Y `keydown` event doesn't trigger on `document.body`, so we are just duplicating the same behavior here.
			event.target !== document.body &&
			// With `on:click`, the A11Y `keydown`, only these keys trigger the event
			['Enter', 'NumpadEnter', 'Space'].includes(event.code)
		) {
			handleClick(event);
		}
	};
</script>

<!-- We have this to capture the window on pointerdown and keydown event. -->
<svelte:window on:pointerdown={handleClick} on:keydown={handleKeydown} />

<div
	bind:this={wrapper}
	{...$$restProps}
	class={buildClass('outclick', $$restProps.class)}
	style={buildStyle(
		!$$restProps.class && !useWrapper ? 'display: contents' : '',
		$$restProps.style
	)}
>
	<slot />
</div>
