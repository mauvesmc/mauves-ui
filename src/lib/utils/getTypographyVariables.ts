import { MauvesTypography, MauvesTypographySize } from '../core/theme';

export const typographyStyles =
	'.typography-h1,h1{font-size:var(--theme-font-size-h1);line-height:var(--theme-line-height-h1);}.typography-h2,h2{font-size:var(--theme-font-size-h2);line-height:var(--theme-line-height-h2);}.typography-h3,h3{font-size:var(--theme-font-size-h3);line-height:var(--theme-line-height-h3);}.typography-h4,h4{font-size:var(--theme-font-size-h4);line-height:var(--theme-line-height-h4);}.typography-st1,h5{font-size:var(--theme-font-size-st1);line-height:var(--theme-line-height-st1);}.typography-st2,h6{font-size:var(--theme-font-size-st2);line-height:var(--theme-line-height-st2);}.typography-b1,p{font-size:var(--theme-font-size-b1);line-height:var(--theme-line-height-b1);}.typography-b2{font-size:var(--theme-font-size-b2);line-height:var(--theme-line-height-b2);}.typography-ht{font-size:var(--theme-font-size-ht);line-height:var(--theme-line-height-ht);}';

const getFontVariables = (
	prefix: string,
	obj: {
		[key in MauvesTypographySize]: string;
	}
) => {
	return Object.keys(obj)
		.map((key) => {
			return `--theme-${prefix}-${key}:${obj[key]}`;
		})
		.join(';');
};

const getFontSizeVariables = (fontSize: {
	[key in MauvesTypographySize]: string;
}) => {
	return getFontVariables('font-size', fontSize);
};

const getLineHeightVariables = (lineHeight: {
	[key in MauvesTypographySize]: string;
}) => {
	return getFontVariables('line-height', lineHeight);
};

const getTypographyVariables = (typography: MauvesTypography) => {
	const variables = [
		`--theme-font-sans:${typography.sans.join(',')}`,
		`--theme-font-mono:${typography.mono.join(',')}`,
		getFontSizeVariables(typography.fontSize),
		getLineHeightVariables(typography.lineHeight)
	];

	return variables.join(';');
};

export default getTypographyVariables;
