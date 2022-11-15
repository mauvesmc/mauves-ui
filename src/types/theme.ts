export type Theme = {
  current: string;
  motion: ThemeMotion;
  palettes: ThemePalettes;
  breakpoints: ThemeBreakpoints;
  shape: ThemeShape;
  typography: ThemeTypography;
};

export type ThemeMotion = {
  standard: string;
  linear: string;
  "standard-accelerate": string;
  "standard-decelerate": string;
  emphasized: string;
};

export type ThemeShape = {
  none: 0;
  "extra-small": number;
  small: number;
  medium: number;
  large: number;
  "extra-large": number;
  full: 16000;
};

export type ThemeTypographyItem = {
  face: string;
  weight: number;
  fontSize: number;
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

export type ThemeBreakpoints = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type ThemePalettes = {
  dark: ThemePalette;
  light: ThemePalette;
  [key: string]: ThemePalette;
};

export type ThemePalette = {
  white: string;
  black: string;
  ref: ThemeColors;
  system: ThemeSystem;
  elevation: ThemeElevation;
};

export type ThemeSystem = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  surfaceTint: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  scrim: string;
};

export type ThemeColors = {
  primary: ThemeColor;
  secondary: ThemeColor;
  tertiary: ThemeColor;
  success: ThemeColor;
  warning: ThemeColor;
  error: ThemeColor;
  neutral: ThemeColor;
  neutralVariant: ThemeColor;
};

type ThemeColorValues =
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

export type ThemeColor = { [key in ThemeColorValues]: string };

export type ThemeElevation = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};
