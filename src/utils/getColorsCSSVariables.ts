import { MauvesColors } from '../core/theme';
import hexToRgb from './hexToRgb';

const getColorCSSVariable = (key: string, color: string) => {
  const rgb = hexToRgb(color).join(',');

  return [`${key}:${color}`, `${key}-rgb:${rgb}`].join(';');
};

const getColorsCSSVariables = (colors: MauvesColors) => {
  let variables: string[] = [];

  Object.keys(colors).forEach((theme) => {
    Object.keys(colors[theme]).forEach((color) => {
      if (color === 'divider') {
        const [dividerColor, dividerModifier] = colors[theme][color].split('.');
        if (dividerModifier.trim() === '') {
          variables.push(
            getColorCSSVariable(
              `--theme-${theme}-${color}`,
              colors[theme][color],
            ),
          );
          return;
        }
        variables.push(
          getColorCSSVariable(
            `--theme-${theme}-${color}`,
            colors[theme][dividerColor][dividerModifier],
          ),
        );
        return;
      }

      Object.keys(colors[theme][color]).forEach((modifier) => {
        if (color === 'disabled') {
          const [disabledColor, disabledModifier] =
            colors[theme][color][modifier].split('.');
          if (disabledModifier.trim() === '') {
            variables.push(
              getColorCSSVariable(
                `--theme-${theme}-${color}-${modifier}`,
                colors[theme][color][modifier],
              ),
            );
            return;
          }
          variables.push(
            getColorCSSVariable(
              `--theme-${theme}-${color}-${modifier}`,
              colors[theme][disabledColor][disabledModifier],
            ),
          );
          return;
        }

        variables.push(
          getColorCSSVariable(
            `--theme-${theme}-${color}-${modifier}`,
            colors[theme][color][modifier],
          ),
        );
      });
    });
  });

  return variables.join(';');
};

export default getColorsCSSVariables;
