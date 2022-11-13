import { ThemeConfig } from "../types/theme";

export const defaultThemeConfig: ThemeConfig = {
  current: { name: "light", mode: "light" },
  palettes: {
    light: {
      primary: 4278211547,
      onPrimary: 4294967295,
      primaryContainer: 4292600319,
      onPrimaryContainer: 4278196043,
      secondary: 4284046962,
      onSecondary: 4294967295,
      secondaryContainer: 4292731385,
      onSecondaryContainer: 4279638828,
      tertiary: 4285813872,
      onTertiary: 4294967295,
      tertiaryContainer: 4294956792,
      onTertiaryContainer: 4281012779,
      error: 4290386458,
      onError: 4294967295,
      errorContainer: 4294957782,
      onErrorContainer: 4282449922,
      background: 4294900735,
      onBackground: 4279966495,
      surface: 4294900735,
      onSurface: 4279966495,
      surfaceVariant: 4293059308,
      onSurfaceVariant: 4282730063,
      outline: 4285888128,
      outlineVariant: 4291151568,
      shadow: 4278190080,
      scrim: 4278190080,
      inverseSurface: 4281348148,
      inverseOnSurface: 4294111476,
      inversePrimary: 4290037247,
    },
    dark: {
      primary: 4290037247,
      onPrimary: 4278200952,
      primaryContainer: 4278206120,
      onPrimaryContainer: 4292600319,
      secondary: 4290889181,
      onSecondary: 4281020482,
      secondaryContainer: 4282467929,
      onSecondaryContainer: 4292731385,
      tertiary: 4293049307,
      onTertiary: 4282525505,
      tertiaryContainer: 4284104024,
      onTertiaryContainer: 4294956792,
      error: 4294948011,
      onError: 4285071365,
      errorContainer: 4287823882,
      onErrorContainer: 4294948011,
      background: 4279966495,
      onBackground: 4293190374,
      surface: 4279966495,
      onSurface: 4293190374,
      surfaceVariant: 4282730063,
      onSurfaceVariant: 4291151568,
      outline: 4287598746,
      outlineVariant: 4282730063,
      shadow: 4278190080,
      scrim: 4278190080,
      inverseSurface: 4293190374,
      inverseOnSurface: 4281348148,
      inversePrimary: 4278211547,
    },
  },
  typography: {
    displayLarge: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 57,
      lineHeight: 64,
      letterSpacing: 0,
      weight: 400,
    },
    displayMedium: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 45,
      lineHeight: 52,
      letterSpacing: 0,
      weight: 400,
    },
    displaySmall: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 36,
      lineHeight: 44,
      letterSpacing: 0,
      weight: 400,
    },
    headlineLarge: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: 0,
      weight: 400,
    },
    headlineMedium: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 28,
      lineHeight: 36,
      letterSpacing: 0,
      weight: 400,
    },
    headlineSmall: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0,
      weight: 400,
    },
    titleLarge: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 22,
      lineHeight: 28,
      letterSpacing: 0,
      weight: 500,
    },
    titleMedium: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
      weight: 500,
    },
    titleSmall: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
      weight: 500,
    },
    labelLarge: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
      weight: 500,
    },
    labelMedium: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.5,
      weight: 500,
    },
    labelSmall: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
      weight: 500,
    },
    bodyLarge: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
      weight: 400,
    },
    bodyMedium: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.25,
      weight: 400,
    },
    bodySmall: {
      family:
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
      weight: 400,
    },
  },
  elevation: {
    dark: {
      1: "0px 1px 2px 0px #0000004D, 0px 1px 3px 1px #00000026",
      2: "0px 1px 2px 0px #0000004D, 0px 2px 6px 2px #00000026",
      3: "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026",
      4: "0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026",
      5: "0px 4px 4px 0px #0000004D, 0px 8px 12px 6px #00000026",
    },
    light: {
      1: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D;",
      2: "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D",
      3: "0px 1px 3px 0px #0000004D, 0px 4px 8px 3px #00000026",
      4: "0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026",
      5: "0px 4px 4px 0px, 0px 8px 12px 6px #00000026",
    },
  },
};
