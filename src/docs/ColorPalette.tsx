import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { Component } from "solid-js";
import { Box } from "../components/Box";
import { Typography } from "../components/Typography";
import { useTheme } from "../context/ThemeProvider";
import { defaultThemeConfig } from "../lib/defaultTheme";

const Plate: Component<{ color: number; textColor: number; label: string }> = (
  props
) => {
  return (
    <Box
      p={16}
      style={{
        "background-color": hexFromArgb(props.color),
        color: hexFromArgb(props.textColor),
        "aspect-ratio": "4 / 3",
      }}
    >
      <Typography>{props.label}</Typography>
    </Box>
  );
};

export const ColorPalette: Component<{ color: string }> = (props) => {
  const [, { setConfig }] = useTheme();

  const generatedTheme = themeFromSourceColor(argbFromHex(props.color));
  const theme = {
    ...defaultThemeConfig,
    palettes: {
      ...defaultThemeConfig.palettes,
      ...generatedTheme.schemes,
    },
  };

  setConfig(theme);

  return (
    <>
      <Box
        p={32}
        sx={(t) => ({
          display: "grid",
          "grid-template-columns": "repeat(4, 1fr)",
          "background-color": hexFromArgb(t.palettes.light.background),
          "border-width": "1px",
          "border-style": "solid",
          "border-color": hexFromArgb(t.palettes[t.current.name].outline),
        })}
      >
        <Plate
          color={theme.palettes.light.primary}
          textColor={theme.palettes.light.onPrimary}
          label="Primary"
        />
        <Plate
          color={theme.palettes.light.onPrimary}
          textColor={theme.palettes.light.primary}
          label="On Primary"
        />
        <Plate
          color={theme.palettes.light.primaryContainer}
          textColor={theme.palettes.light.onPrimaryContainer}
          label="Primary Container"
        />
        <Plate
          color={theme.palettes.light.onPrimaryContainer}
          textColor={theme.palettes.light.primaryContainer}
          label="On Primary Container"
        />
        <Plate
          color={theme.palettes.light.secondary}
          textColor={theme.palettes.light.onSecondary}
          label="Secondary"
        />
        <Plate
          color={theme.palettes.light.onSecondary}
          textColor={theme.palettes.light.secondary}
          label="On Secondary"
        />
        <Plate
          color={theme.palettes.light.secondaryContainer}
          textColor={theme.palettes.light.onSecondaryContainer}
          label="Secondary Container"
        />
        <Plate
          color={theme.palettes.light.onSecondaryContainer}
          textColor={theme.palettes.light.secondaryContainer}
          label="On Secondary Container"
        />
        <Plate
          color={theme.palettes.light.tertiary}
          textColor={theme.palettes.light.onTertiary}
          label="Tertiary"
        />
        <Plate
          color={theme.palettes.light.onTertiary}
          textColor={theme.palettes.light.tertiary}
          label="On Tertiary"
        />
        <Plate
          color={theme.palettes.light.tertiaryContainer}
          textColor={theme.palettes.light.onTertiaryContainer}
          label="Tertiary Container"
        />
        <Plate
          color={theme.palettes.light.onTertiaryContainer}
          textColor={theme.palettes.light.tertiaryContainer}
          label="On Tertiary Container"
        />
        <Plate
          color={theme.palettes.light.error}
          textColor={theme.palettes.light.onError}
          label="Error"
        />
        <Plate
          color={theme.palettes.light.onError}
          textColor={theme.palettes.light.error}
          label="On Error"
        />
        <Plate
          color={theme.palettes.light.errorContainer}
          textColor={theme.palettes.light.onErrorContainer}
          label="Error Container"
        />
        <Plate
          color={theme.palettes.light.onErrorContainer}
          textColor={theme.palettes.light.errorContainer}
          label="On Error Container"
        />
        <Plate
          color={theme.palettes.light.background}
          textColor={theme.palettes.light.onBackground}
          label="Background"
        />
        <Plate
          color={theme.palettes.light.onBackground}
          textColor={theme.palettes.light.background}
          label="On Background"
        />
        <Plate
          color={theme.palettes.light.surface}
          textColor={theme.palettes.light.onSurface}
          label="Surface"
        />
        <Plate
          color={theme.palettes.light.onSurface}
          textColor={theme.palettes.light.surface}
          label="On Surface"
        />
        <Plate
          color={theme.palettes.light.surfaceVariant}
          textColor={theme.palettes.light.onSurfaceVariant}
          label="Surface Variant"
        />
        <Plate
          color={theme.palettes.light.onSurfaceVariant}
          textColor={theme.palettes.light.surfaceVariant}
          label="On Surface Variant"
        />
        <Plate
          color={theme.palettes.light.outline}
          textColor={theme.palettes.light.outlineVariant}
          label="Outline"
        />
        <Plate
          color={theme.palettes.light.outlineVariant}
          textColor={theme.palettes.light.outline}
          label="Outline Variant"
        />
      </Box>
      <Box
        mt={32}
        p={32}
        sx={(t) => ({
          display: "grid",
          "grid-template-columns": "repeat(4, 1fr)",
          "background-color": hexFromArgb(t.palettes.dark.background),
          border: `1px solid ${t.palettes[t.current.name].outline}`,
        })}
      >
        <Plate
          color={theme.palettes.dark.primary}
          textColor={theme.palettes.dark.onPrimary}
          label="Primary"
        />
        <Plate
          color={theme.palettes.dark.onPrimary}
          textColor={theme.palettes.dark.primary}
          label="On Primary"
        />
        <Plate
          color={theme.palettes.dark.primaryContainer}
          textColor={theme.palettes.dark.onPrimaryContainer}
          label="Primary Container"
        />
        <Plate
          color={theme.palettes.dark.onPrimaryContainer}
          textColor={theme.palettes.dark.primaryContainer}
          label="On Primary Container"
        />
        <Plate
          color={theme.palettes.dark.secondary}
          textColor={theme.palettes.dark.onSecondary}
          label="Secondary"
        />
        <Plate
          color={theme.palettes.dark.onSecondary}
          textColor={theme.palettes.dark.secondary}
          label="On Secondary"
        />
        <Plate
          color={theme.palettes.dark.secondaryContainer}
          textColor={theme.palettes.dark.onSecondaryContainer}
          label="Secondary Container"
        />
        <Plate
          color={theme.palettes.dark.onSecondaryContainer}
          textColor={theme.palettes.dark.secondaryContainer}
          label="On Secondary Container"
        />
        <Plate
          color={theme.palettes.dark.tertiary}
          textColor={theme.palettes.dark.onTertiary}
          label="Tertiary"
        />
        <Plate
          color={theme.palettes.dark.onTertiary}
          textColor={theme.palettes.dark.tertiary}
          label="On Tertiary"
        />
        <Plate
          color={theme.palettes.dark.tertiaryContainer}
          textColor={theme.palettes.dark.onTertiaryContainer}
          label="Tertiary Container"
        />
        <Plate
          color={theme.palettes.dark.onTertiaryContainer}
          textColor={theme.palettes.dark.tertiaryContainer}
          label="On Tertiary Container"
        />
        <Plate
          color={theme.palettes.dark.error}
          textColor={theme.palettes.dark.onError}
          label="Error"
        />
        <Plate
          color={theme.palettes.dark.onError}
          textColor={theme.palettes.dark.error}
          label="On Error"
        />
        <Plate
          color={theme.palettes.dark.errorContainer}
          textColor={theme.palettes.dark.onErrorContainer}
          label="Error Container"
        />
        <Plate
          color={theme.palettes.dark.onErrorContainer}
          textColor={theme.palettes.dark.errorContainer}
          label="On Error Container"
        />
        <Plate
          color={theme.palettes.dark.background}
          textColor={theme.palettes.dark.onBackground}
          label="Background"
        />
        <Plate
          color={theme.palettes.dark.onBackground}
          textColor={theme.palettes.dark.background}
          label="On Background"
        />
        <Plate
          color={theme.palettes.dark.surface}
          textColor={theme.palettes.dark.onSurface}
          label="Surface"
        />
        <Plate
          color={theme.palettes.dark.onSurface}
          textColor={theme.palettes.dark.surface}
          label="On Surface"
        />
        <Plate
          color={theme.palettes.dark.surfaceVariant}
          textColor={theme.palettes.dark.onSurfaceVariant}
          label="Surface Variant"
        />
        <Plate
          color={theme.palettes.dark.onSurfaceVariant}
          textColor={theme.palettes.dark.surfaceVariant}
          label="On Surface Variant"
        />
        <Plate
          color={theme.palettes.dark.outline}
          textColor={theme.palettes.dark.outlineVariant}
          label="Outline"
        />
        <Plate
          color={theme.palettes.dark.outlineVariant}
          textColor={theme.palettes.dark.outline}
          label="Outline Variant"
        />
      </Box>
    </>
  );
};
