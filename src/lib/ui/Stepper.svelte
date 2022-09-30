<script lang="ts" context="module">
	import buildClass from '$lib/core/buildClass';
</script>

<script lang="ts">
	export let fullWidth = false;
</script>

<section
	{...$$restProps}
	class={buildClass('stepper', fullWidth && 'stepper_full-width', $$restProps.class)}
>
	<slot />
</section>

<style lang="postcss">
	.stepper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.stepper_full-width {
		width: 100%;
	}
</style>
