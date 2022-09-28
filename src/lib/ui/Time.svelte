<script lang="ts" context="module">
	import { onDestroy } from 'svelte';
</script>

<script lang="ts">
	export let date: string | number | Date = new Date();
	export let live = false;
	export let updateTime = 1000;
	export let relative = false;
	export let forceRelativeUnit:
		| 'second'
		| 'minute'
		| 'hour'
		| 'day'
		| 'month'
		| 'year'
		| undefined = undefined;
	export let locale: string | undefined = undefined;
	export let rtfOptions: Intl.RelativeTimeFormatOptions | undefined = undefined;
	export let options: Intl.DateTimeFormatOptions | undefined = undefined;

	let rtf = new Intl.RelativeTimeFormat(locale, rtfOptions);
	let finalDate = new Date(date);
	let liveInterval: number | any = undefined;
	let relativeInterval: number | any = undefined;
	let relativeValue = 0;
	let relativeUnit: Intl.RelativeTimeFormatUnit = 'second';

	onDestroy(() => {
		clearInterval(liveInterval);
		clearInterval(relativeInterval);
	});

	const liveTime = () => {
		clearInterval(liveInterval);
		finalDate = new Date();
		if (updateTime) {
			liveInterval = setInterval(() => {
				finalDate = new Date();
			}, updateTime);
		}
	};

	$: {
		if (live) {
			liveTime();
		}
	}

	const relativeTime = () => {
		const [value, unit] = getRelative(finalDate.getTime() - new Date().getTime());
		relativeValue = value;
		relativeUnit = unit;
		if (updateTime) {
			clearInterval(relativeInterval);
			relativeInterval = setInterval(() => {
				const [value, unit] = getRelative(finalDate.getTime() - new Date().getTime());
				relativeValue = value;
				relativeUnit = unit;
			}, updateTime);
		}
	};

	$: {
		if (relative) {
			relativeTime();
		}
	}

	const getRelative = (timeInMilliseconds: number): [number, Intl.RelativeTimeFormatUnit] => {
		const seconds = timeInMilliseconds / 1000;
		if (Math.abs(seconds) < 60) {
			switch (forceRelativeUnit) {
				case 'second':
					return [Math.round(seconds), 'seconds'];
				case 'minute':
					return [0, 'minutes'];
				case 'hour':
					return [0, 'hours'];
				case 'day':
					return [0, 'days'];
				case 'month':
					return [0, 'months'];
				case 'year':
					return [0, 'years'];
				default:
					return [Math.round(seconds), 'seconds'];
			}
		}

		const minutes = seconds / 60;
		if (Math.abs(minutes) < 60) {
			switch (forceRelativeUnit) {
				case 'second':
					return [Math.round(minutes * 60), 'seconds'];
				case 'minute':
					return [Math.round(minutes), 'minutes'];
				case 'hour':
					return [0, 'hours'];
				case 'day':
					return [0, 'days'];
				case 'month':
					return [0, 'months'];
				case 'year':
					return [0, 'years'];
				default:
					return [Math.round(minutes), 'minutes'];
			}
		}

		const hours = minutes / 60;
		if (Math.abs(hours) < 24) {
			switch (forceRelativeUnit) {
				case 'second':
					return [Math.round(hours * 60 * 60), 'seconds'];
				case 'minute':
					return [Math.round(hours * 60), 'minutes'];
				case 'hour':
					return [Math.round(hours), 'hours'];
				case 'day':
					return [0, 'days'];
				case 'month':
					return [0, 'months'];
				case 'year':
					return [0, 'years'];
				default:
					return [Math.round(hours), 'hours'];
			}
		}

		const days = hours / 24;
		if (Math.abs(days) < 30) {
			switch (forceRelativeUnit) {
				case 'second':
					return [Math.round(days * 24 * 60 * 60), 'seconds'];
				case 'minute':
					return [Math.round(days * 24 * 60), 'minutes'];
				case 'hour':
					return [Math.round(days * 24), 'hours'];
				case 'day':
					return [Math.round(days), 'days'];
				case 'month':
					return [0, 'months'];
				case 'year':
					return [0, 'years'];
				default:
					return [Math.round(days), 'days'];
			}
		}

		const months = days / 30;
		if (Math.abs(months) < 12) {
			switch (forceRelativeUnit) {
				case 'second':
					return [Math.round(months * 30 * 24 * 60 * 60), 'seconds'];
				case 'minute':
					return [Math.round(months * 30 * 24 * 60), 'minutes'];
				case 'hour':
					return [Math.round(months * 30 * 24), 'hours'];
				case 'day':
					return [Math.round(months * 30), 'days'];
				case 'month':
					return [Math.round(months), 'months'];
				case 'year':
					return [0, 'years'];
				default:
					return [Math.round(months), 'months'];
			}
		}

		const years = months / 12;
		switch (forceRelativeUnit) {
			case 'second':
				return [Math.round(years * 12 * 30 * 24 * 60 * 60), 'seconds'];
			case 'minute':
				return [Math.round(years * 12 * 30 * 24 * 60), 'minutes'];
			case 'hour':
				return [Math.round(years * 12 * 30 * 24), 'hours'];
			case 'day':
				return [Math.round(years * 12 * 30), 'days'];
			case 'month':
				return [Math.round(years * 12), 'months'];
			case 'year':
				return [Math.round(years), 'years'];
			default:
				return [Math.round(years), 'years'];
		}
	};
</script>

<time {...$$restProps} datetime={finalDate.toISOString()}>
	{#if relative}
		{rtf.format(relativeValue, relativeUnit)}
	{:else}
		<slot final={finalDate}>
			{finalDate.toLocaleString(locale, options)}
		</slot>
	{/if}
</time>
