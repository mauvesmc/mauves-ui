import { MauvesShadows } from '../core/theme';

export const shadowStyles =
	'.shadow-sm{box-shadow:var(--theme-shadow-sm)}.shadow,.shadow-md{box-shadow:var(--theme-shadow-md)}.shadow-lg{box-shadow:var(--theme-shadow-lg)}.shadow-xl{box-shadow:var(--theme-shadow-xl)}';

const getShadowsVariables = (shadows: MauvesShadows) => {
	return Object.keys(shadows)
		.map((key) => {
			return `--theme-shadow-${key}:${shadows[key]}`;
		})
		.join(';');
};

export default getShadowsVariables;
