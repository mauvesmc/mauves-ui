import { ThemeConfig } from "../types/theme"

export const defaultThemeConfig: ThemeConfig = {
  palettes: {
    light: {
      primary: 4283389609,
      onPrimary: 4294967295,
      primaryContainer: 4292927743,
      onPrimaryContainer: 4278388581,
      secondary: 4284243314,
      onSecondary: 4294967295,
      secondaryContainer: 4292993273,
      onSecondaryContainer: 4279835180,
      tertiary: 4286075755,
      onTertiary: 4294967295,
      tertiaryContainer: 4294957294,
      onTertiaryContainer: 4281209126,
      error: 4290386458,
      onError: 4294967295,
      errorContainer: 4294957782,
      onErrorContainer: 4282449922,
      background: 4294966271,
      onBackground: 4279966495,
      surface: 4294966271,
      onSurface: 4279966495,
      surfaceVariant: 4293124588,
      onSurfaceVariant: 4282795599,
      outline: 4286019200,
      outlineVariant: 4291282384,
      shadow: 4278190080,
      scrim: 4278190080,
      inverseSurface: 4281348148,
      inverseOnSurface: 4294176756,
      inversePrimary: 4290691839,
    },
    dark: {
      primary: 4290691839,
      onPrimary: 4280231289,
      primaryContainer: 4281810576,
      onPrimaryContainer: 4292927743,
      secondary: 4291151069,
      onSecondary: 4281216834,
      secondaryContainer: 4282664281,
      onSecondaryContainer: 4292993273,
      tertiary: 4293376469,
      onTertiary: 4282721852,
      tertiaryContainer: 4284365907,
      onTertiaryContainer: 4294957294,
      error: 4294948011,
      onError: 4285071365,
      errorContainer: 4287823882,
      onErrorContainer: 4294948011,
      background: 4279966495,
      onBackground: 4293255654,
      surface: 4279966495,
      onSurface: 4293255654,
      surfaceVariant: 4282795599,
      onSurfaceVariant: 4291282384,
      outline: 4287729818,
      outlineVariant: 4282795599,
      shadow: 4278190080,
      scrim: 4278190080,
      inverseSurface: 4293255654,
      inverseOnSurface: 4281348148,
      inversePrimary: 4283389609,
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
  spacing: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
}
