<script lang="ts" context="module">
	import buildClass from '../core/buildClass';
</script>

<script lang="ts">
	export let inline = false;
</script>

<div {...$$restProps} class={buildClass('center', inline && 'center_inline', $$restProps.class)}>
	<slot />
</div>

<style lang="postcss">
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.center_inline {
		display: inline-flex;
	}
</style>
