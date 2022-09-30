<script lang="ts" context="module">
	import Button from '$lib/ui/Button.svelte';
	import Dropdown from '$lib/ui/Dropdown.svelte';
	import OutClick from '$lib/ui/OutClick.svelte';
	import Stack from '$lib/ui/Stack.svelte';
</script>

<script lang="ts">
	let count = 0;
	let ref;
</script>

<div style="background-color: rgba(0,0,0,0.5); width: 100%; height: 100vh">
	<OutClick excludeByQuerySelector={['.header__menu-wrapper']} on:outclick={() => count++}>
		<div bind:this={ref} class="header__menu-wrapper" style="position: relative">
			<button class="header__menu"> {count}</button>
			<Dropdown
				{ref}
				options={{ duration: 150, y: 16 }}
				opened={true}
				class="header__menu-dropdown"
			>
				<Stack spacing="sm">
					<Button class="header__menu-button" fullWidth variant="subtle" color="secondary">
						Профиль
					</Button>
					<Button
						tag="a"
						href="/rules"
						class="header__menu-button"
						fullWidth
						variant="subtle"
						color="secondary"
					>
						Правила
					</Button>
					<Button
						tag="a"
						href="/api/v1/auth/logout"
						rel="external"
						class="header__menu-button"
						fullWidth
						variant="subtle"
						color="danger"
					>
						Выйти
					</Button>
				</Stack>
			</Dropdown>
		</div>
	</OutClick>
</div>

<style lang="postcss">
</style>
