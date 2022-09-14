import { MauvesThemeBase, Theme } from '../core/theme';
import getColorsCSSVariables from './getColorsCSSVariables';
import getShadowsVariables, { shadowStyles } from './getShadowsVariables';
import getThemeStyles, {
  darkThemeStyles,
  lightThemeStyles,
} from './getThemeStyles';
import getTypographyVariables, {
  typographyStyles,
} from './getTypographyVariables';

const getStyleElementFromTheme = (
  theme: Theme,
  target: string = 'html',
): string => {
  const targetStyles = [
    getTypographyVariables(theme.typography),
    getShadowsVariables(theme.shadows),
    getColorsCSSVariables(theme.colors),
  ];

  const tag = [
    '<style type="text/css">',
    `${target}{${targetStyles.join(';')}}`,
    lightThemeStyles + darkThemeStyles,
    Object.keys(theme.colors)
      .map((theme) => getThemeStyles(theme as MauvesThemeBase))
      .join(''),
    typographyStyles,
    shadowStyles,
    '</style>',
  ];
  return tag.join('');
};

export default getStyleElementFromTheme;
