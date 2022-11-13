export type ThemeSize = "sm" | "md" | "lg" | "xl"

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
  | "100"

export type ThemeColors = {
  primary: { [key in ThemeTypes]: string }
  secondary: { [key in ThemeTypes]: string }
  tertiary: { [key in ThemeTypes]: string }
  error: { [key in ThemeTypes]: string }
  neutral: { [key in ThemeTypes]: string }
  neutralVariant: { [key in ThemeTypes]: string }
  [key: string]: any
}

export type ThemePalette = {
  mode: "light" | "dark"
  colors: ThemeColors
}

export type ThemeTypographyItem = {
  family: string
  fontSize: number
  weight: number
  lineHeight: number
  letterSpacing: number
}

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
  | "bodySmall"

export type ThemeTypography = {
  [key in ThemeTypographyVariant]: ThemeTypographyItem
}

export type ThemeConfig = {
  palette: ThemePalette
  typography: ThemeTypography
  spacing: {
    [key in ThemeSize]: number
  }
  radius: {
    [key in ThemeSize]: number
  }
}
