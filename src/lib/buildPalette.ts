import {
  argbFromHex,
  hexFromArgb,
  Theme,
  themeFromSourceColor,
  TonalPalette,
} from "@material/material-color-utilities";
import { ThemeColor, ThemeColors, ThemeSystem } from "../types/theme";

export const buildPalette: (
  sourceColor?: string,
  additional?: Partial<{ success: string; warning: string; error: string }>
) => { ref: ThemeColors; dark?: ThemeSystem; light: ThemeSystem } = (
  sourceColor = "#2563eb",
  { success = "#2feb1f", warning = "#f5c13b", error = "#e1824d" } = {}
) => {
  const generated = themeFromSourceColor(argbFromHex(sourceColor), [
    { blend: true, name: "success", value: argbFromHex(success) },
    { blend: true, name: "warning", value: argbFromHex(warning) },
    { blend: true, name: "error", value: argbFromHex(error) },
  ]);
  const ref = getRef(generated);

  return {
    ref,
    light: getSystemLight(ref),
    dark: getSystemDark(ref),
  };
};

const getRef = (generated: Theme): ThemeColors => {
  const warning = generated.customColors.find(
    (c) => c.color.name === "warning"
  ).value;
  const success = generated.customColors.find(
    (c) => c.color.name === "success"
  ).value;
  const error = generated.customColors.find(
    (c) => c.color.name === "error"
  ).value;

  return {
    error: generateThemeColorFromTonal(TonalPalette.fromInt(error)),
    neutral: generateThemeColorFromTonal(generated.palettes.neutral),
    neutralVariant: generateThemeColorFromTonal(
      generated.palettes.neutralVariant
    ),
    primary: generateThemeColorFromTonal(generated.palettes.primary),
    secondary: generateThemeColorFromTonal(generated.palettes.secondary),
    success: generateThemeColorFromTonal(TonalPalette.fromInt(success)),
    tertiary: generateThemeColorFromTonal(generated.palettes.tertiary),
    warning: generateThemeColorFromTonal(TonalPalette.fromInt(warning)),
  };
};

const generateThemeColorFromTonal = (tonal: TonalPalette): ThemeColor => {
  return {
    0: hexFromArgb(tonal.tone(0)),
    10: hexFromArgb(tonal.tone(10)),
    20: hexFromArgb(tonal.tone(20)),
    30: hexFromArgb(tonal.tone(30)),
    40: hexFromArgb(tonal.tone(40)),
    50: hexFromArgb(tonal.tone(50)),
    60: hexFromArgb(tonal.tone(60)),
    70: hexFromArgb(tonal.tone(70)),
    80: hexFromArgb(tonal.tone(80)),
    90: hexFromArgb(tonal.tone(90)),
    95: hexFromArgb(tonal.tone(95)),
    99: hexFromArgb(tonal.tone(99)),
    100: hexFromArgb(tonal.tone(100)),
  };
};

const getSystemLight = (ref: ThemeColors): ThemeSystem => {
  return {
    primary: ref.primary[40],
    onPrimary: ref.primary[100],
    primaryContainer: ref.primary[90],
    onPrimaryContainer: ref.primary[10],
    secondary: ref.secondary[40],
    onSecondary: ref.secondary[100],
    secondaryContainer: ref.secondary[90],
    onSecondaryContainer: ref.secondary[10],
    tertiary: ref.tertiary[40],
    onTertiary: ref.tertiary[100],
    tertiaryContainer: ref.tertiary[90],
    onTertiaryContainer: ref.tertiary[10],
    success: ref.success[40],
    onSuccess: ref.success[100],
    successContainer: ref.success[90],
    onSuccessContainer: ref.success[10],
    warning: ref.warning[40],
    onWarning: ref.warning[100],
    warningContainer: ref.warning[90],
    onWarningContainer: ref.warning[10],
    error: ref.error[40],
    onError: ref.error[100],
    errorContainer: ref.error[90],
    onErrorContainer: ref.error[10],
    background: ref.neutral[99],
    onBackground: ref.neutral[10],
    surface: ref.neutral[99],
    onSurface: ref.neutral[10],
    surfaceVariant: ref.neutralVariant[90],
    onSurfaceVariant: ref.neutralVariant[30],
    outline: ref.neutralVariant[50],
    outlineVariant: ref.neutralVariant[80],
    shadow: ref.neutral[0],
    surfaceTint: ref.primary[40],
    inverseSurface: ref.neutral[20],
    inverseOnSurface: ref.neutral[95],
    inversePrimary: ref.primary[80],
    scrim: ref.neutral[0],
  };
};

const getSystemDark = (ref: ThemeColors): ThemeSystem => {
  return {
    primary: ref.primary[80],
    onPrimary: ref.primary[20],
    primaryContainer: ref.primary[30],
    onPrimaryContainer: ref.primary[90],
    secondary: ref.secondary[80],
    onSecondary: ref.secondary[20],
    secondaryContainer: ref.secondary[30],
    onSecondaryContainer: ref.secondary[90],
    tertiary: ref.tertiary[80],
    onTertiary: ref.tertiary[20],
    tertiaryContainer: ref.tertiary[30],
    onTertiaryContainer: ref.tertiary[90],
    success: ref.success[80],
    onSuccess: ref.success[20],
    successContainer: ref.success[30],
    onSuccessContainer: ref.success[90],
    warning: ref.warning[80],
    onWarning: ref.warning[20],
    warningContainer: ref.warning[30],
    onWarningContainer: ref.warning[90],
    error: ref.error[80],
    onError: ref.error[20],
    errorContainer: ref.error[30],
    onErrorContainer: ref.error[90],
    background: ref.neutral[10],
    onBackground: ref.neutral[90],
    surface: ref.neutral[10],
    onSurface: ref.neutral[90],
    surfaceVariant: ref.neutralVariant[30],
    onSurfaceVariant: ref.neutralVariant[80],
    outline: ref.neutralVariant[60],
    outlineVariant: ref.neutralVariant[30],
    shadow: ref.neutral[0],
    surfaceTint: ref.primary[80],
    inverseSurface: ref.neutral[90],
    inverseOnSurface: ref.neutral[20],
    inversePrimary: ref.primary[40],
    scrim: ref.neutral[0],
  };
};
