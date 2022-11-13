export type ThemeTypes =
  | "0"
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80"
  | "90"
  | "95"
  | "99"
  | "100";

export type ThemePalettes = "dark" | "light";

export type ThemePalette = {
  primary: number;
  onPrimary: number;
  primaryContainer: number;
  onPrimaryContainer: number;
  secondary: number;
  onSecondary: number;
  secondaryContainer: number;
  onSecondaryContainer: number;
  tertiary: number;
  onTertiary: number;
  tertiaryContainer: number;
  onTertiaryContainer: number;
  error: number;
  onError: number;
  errorContainer: number;
  onErrorContainer: number;
  background: number;
  onBackground: number;
  surface: number;
  onSurface: number;
  surfaceVariant: number;
  onSurfaceVariant: number;
  outline: number;
  outlineVariant: number;
  shadow: number;
  scrim: number;
  inverseSurface: number;
  inverseOnSurface: number;
  inversePrimary: number;
};

export type ThemeTypographyItem = {
  family: string;
  fontSize: number;
  weight: number;
  lineHeight: number;
  letterSpacing: number;
};

export type ThemeTypographyVariant =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headlineLarge"
  | "headlineMedium"
  | "headlineSmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall";

export type ThemeTypography = {
  [key in ThemeTypographyVariant]: ThemeTypographyItem;
};

export type ThemeElevation = {
  [key in ThemePalettes]: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
};

export type ThemeCurrent = {
  name: ThemePalettes | string;
  mode: ThemePalettes;
};

export type ThemeConfig = {
  current: ThemeCurrent;
  palettes: {
    dark: ThemePalette;
    light: ThemePalette;
    [key: string]: ThemePalette;
  };
  typography: ThemeTypography;
  elevation: ThemeElevation;
};
