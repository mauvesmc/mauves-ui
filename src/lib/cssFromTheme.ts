import {
  blueFromArgb,
  greenFromArgb,
  hexFromArgb,
  redFromArgb,
} from "@material/material-color-utilities";
import {
  ThemeConfig,
  ThemePalette,
  ThemeTypography,
  ThemeTypographyItem,
} from "../types/theme";
import { toKebabCase } from "./toKebabCase";

const themeKebabCase = (str: string) => {
  return `--theme-${toKebabCase(str)}`;
};

const generatePaletteVariables = (palette: ThemePalette) => {
  const variables: string[] = [];
  Object.keys(palette).forEach((variable) => {
    const argb = palette[variable];
    variables.push(`${themeKebabCase(variable)}:${hexFromArgb(argb)}`);
    variables.push(
      `${themeKebabCase(variable)}-rgb:${redFromArgb(argb)}, ${greenFromArgb(
        argb
      )}, ${blueFromArgb(argb)}`
    );
  });
  return variables;
};

const generateElevationVariables = (elevation: {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}) => {
  const variables: string[] = [];
  Object.keys(elevation).forEach((level) => {
    const current = elevation[level];
    variables.push(`${themeKebabCase(`elevation-${level}`)}:${current}`);
  });
  return variables;
};

const generateTypographyVariables = (typography: ThemeTypography) => {
  const variables: string[] = [];
  Object.keys(typography).forEach((variant) => {
    const current = typography[variant] as ThemeTypographyItem;
    variables.push(
      `${themeKebabCase(`typography-${variant}-face`)}:${current.family}`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-font-size`)}:${
        current.fontSize
      }px`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-letter-spacing`)}:${
        current.letterSpacing
      }px`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-line-height`)}:${
        current.lineHeight
      }px`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-weight`)}:${current.weight}`
    );
  });
  return variables;
};

export const cssFromTheme = (config: ThemeConfig) => {
  const palette = config.palettes[config.current.name];
  const elevation = config.elevation[config.current.mode];
  const typography = config.typography;
  const variables = [
    ...generatePaletteVariables(palette),
    ...generateElevationVariables(elevation),
    ...generateTypographyVariables(typography),
  ];

  return variables.join(";");
};
