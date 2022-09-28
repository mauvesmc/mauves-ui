import type { MauvesShadows } from '$lib/core';

export const shadowStyles =
	'.shadow-sm{box-shadow:var(--theme-shadow-sm)}.shadow,.shadow-md{box-shadow:var(--theme-shadow-md)}.shadow-lg{box-shadow:var(--theme-shadow-lg)}.shadow-xl{box-shadow:var(--theme-shadow-xl)}';

const getShadowsVariables = (shadows: MauvesShadows | any) => {
	return Object.keys(shadows)
		.map((key) => {
			return `--theme-shadow-${key}:${shadows[key]}`;
		})
		.join(';');
};

export default getShadowsVariables;
