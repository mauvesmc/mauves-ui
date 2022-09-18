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
    '--theme-transition-property: background-color, color, border-color, fill, stroke, text-decoration-color',
    '--theme-transition-duration: 0.15s',
    '--theme-transition-timing-function: ease',
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
