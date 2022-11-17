import { Component } from "solid-js";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { ThemeProvider } from "../context/ThemeProvider";
import { buildPalette } from "../lib/buildPalette";
import { defaultTheme } from "../lib/defaultTheme";
import { ThemePalette } from "../types/theme";

const Plate: Component<{
  bg: (palette: ThemePalette) => string;
  txt: (palette: ThemePalette) => string;
  label: string;
}> = (props) => {
  return (
    <Box
      p={16}
      sx={(t) => ({
        "background-color": props.bg(t),
        color: props.txt(t),
        "aspect-ratio": "6 / 3",
        display: "flex",
        "flex-direction": "column",
      })}
    >
      <Label size="large">{props.label}</Label>
    </Box>
  );
};

const BasePlates: Component<{
  color: (palette: ThemePalette) => string;
  onColor: (palette: ThemePalette) => string;
  colorContainer: (palette: ThemePalette) => string;
  onColorContainer: (palette: ThemePalette) => string;
  label: string;
}> = (props) => {
  return (
    <>
      <Plate bg={props.color} txt={props.onColor} label={props.label} />
      <Plate bg={props.onColor} txt={props.color} label={`On ${props.label}`} />
      <Plate
        bg={props.colorContainer}
        txt={props.onColorContainer}
        label={`${props.label} Container`}
      />
      <Plate
        bg={props.onColorContainer}
        txt={props.colorContainer}
        label={`On ${props.label} Container`}
      />
    </>
  );
};

const Plates = () => {
  return (
    <>
      <BasePlates
        color={(t) => t.system.primary}
        onColor={(t) => t.system.onPrimary}
        colorContainer={(t) => t.system.primaryContainer}
        onColorContainer={(t) => t.system.onPrimaryContainer}
        label="Primary"
      />
      <BasePlates
        color={(t) => t.system.secondary}
        onColor={(t) => t.system.onSecondary}
        colorContainer={(t) => t.system.secondaryContainer}
        onColorContainer={(t) => t.system.onSecondaryContainer}
        label="Secondary"
      />
      <BasePlates
        color={(t) => t.system.tertiary}
        onColor={(t) => t.system.onTertiary}
        colorContainer={(t) => t.system.tertiaryContainer}
        onColorContainer={(t) => t.system.onTertiaryContainer}
        label="Tertiary"
      />
      <BasePlates
        color={(t) => t.system.success}
        onColor={(t) => t.system.onSuccess}
        colorContainer={(t) => t.system.successContainer}
        onColorContainer={(t) => t.system.onSuccessContainer}
        label="Success"
      />
      <BasePlates
        color={(t) => t.system.warning}
        onColor={(t) => t.system.onWarning}
        colorContainer={(t) => t.system.warningContainer}
        onColorContainer={(t) => t.system.onWarningContainer}
        label="Warning"
      />
      <BasePlates
        color={(t) => t.system.error}
        onColor={(t) => t.system.onError}
        colorContainer={(t) => t.system.errorContainer}
        onColorContainer={(t) => t.system.onErrorContainer}
        label="Error"
      />
      <Plate
        label="Background"
        bg={(t) => t.system.background}
        txt={(t) => t.system.onBackground}
      />
      <Plate
        label="On Background"
        bg={(t) => t.system.onBackground}
        txt={(t) => t.system.background}
      />
      <Plate
        label="Surface"
        bg={(t) => t.system.surface}
        txt={(t) => t.system.onSurface}
      />
      <Plate
        label="On Surface"
        bg={(t) => t.system.onSurface}
        txt={(t) => t.system.surface}
      />
      <Plate
        label="Surface Variant"
        bg={(t) => t.system.surfaceVariant}
        txt={(t) => t.system.onSurfaceVariant}
      />
      <Plate
        label="On Surface Variant"
        bg={(t) => t.system.onSurfaceVariant}
        txt={(t) => t.system.surfaceVariant}
      />
      <Plate
        label="Outline"
        bg={(t) => t.system.outline}
        txt={(t) => t.system.outlineVariant}
      />
      <Plate
        label="Outline Variant"
        bg={(t) => t.system.outlineVariant}
        txt={(t) => t.system.outline}
      />
      <Plate
        label="Shadow"
        bg={(t) => t.system.shadow}
        txt={(t) => t.ref.neutral[100]}
      />
      <Plate
        label="Surface Tint"
        bg={(t) => t.system.surfaceTint}
        txt={(t) => t.system.onPrimary}
      />
      <Plate
        label="Inverse Surface"
        bg={(t) => t.system.inverseSurface}
        txt={(t) => t.system.inverseOnSurface}
      />
      <Plate
        label="Inverse On Surface"
        bg={(t) => t.system.inverseOnSurface}
        txt={(t) => t.system.inverseSurface}
      />
      <Plate
        label="Inverse Primary"
        bg={(t) => t.system.inversePrimary}
        txt={(t) => t.system.scrim}
      />
      <Plate
        label="Scrim"
        bg={(t) => t.system.scrim}
        txt={(t) => t.ref.neutral[100]}
      />
    </>
  );
};

export const ColorPalette: Component<{
  color: string;
  success: string;
  warning: string;
  error: string;
}> = (props) => {
  const copy = (text: string) => {
    window.navigator.clipboard.writeText(text);
  };

  const palette = buildPalette(props.color, {
    success: props.success,
    warning: props.warning,
    error: props.error,
  });

  return (
    <>
      <Box
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "grid-column": "1 / -1",
        }}
      >
        <Button
          color="primary"
          variant="tonal"
          onClick={() => copy(JSON.stringify(palette.ref))}
        >
          Скопировать Ref
        </Button>
      </Box>
      <ThemeProvider
        current="light"
        config={{
          ...defaultTheme,
          palettes: {
            ...defaultTheme.palettes,
            light: {
              ...defaultTheme.palettes.light,
              ref: palette.ref,
              system: palette.light,
            },
          },
        }}
        target={null}
      >
        <Box
          mt={32}
          p={32}
          sx={(t) => ({
            display: "grid",
            "grid-template-columns": "repeat(4, 1fr)",
            "background-color": t.system.background,
            "border-width": "1px",
            "border-style": "solid",
            "border-color": t.system.outline,
            "border-radius": "var(--theme-shape-extra-large)",
          })}
        >
          <Plates />
          <Box
            mt={16}
            style={{
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "grid-column": "1 / -1",
            }}
          >
            <Button
              variant="tonal"
              color="secondary"
              onClick={() => copy(JSON.stringify(palette.light))}
            >
              Скопировать Light
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
      <ThemeProvider
        current="dark"
        config={{
          ...defaultTheme,
          palettes: {
            ...defaultTheme.palettes,
            dark: {
              ...defaultTheme.palettes.dark,
              ref: palette.ref,
              system: palette.dark,
            },
          },
        }}
        target={null}
      >
        <Box
          mt={32}
          p={32}
          sx={(t) => ({
            display: "grid",
            "grid-template-columns": "repeat(4, 1fr)",
            "background-color": t.system.background,
            "border-width": "1px",
            "border-style": "solid",
            "border-color": t.system.outline,
            "border-radius": "var(--theme-shape-extra-large)",
          })}
        >
          <Plates />

          <Box
            mt={16}
            style={{
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "grid-column": "1 / -1",
            }}
          >
            <Button
              variant="tonal"
              color="secondary"
              onClick={() => copy(JSON.stringify(palette.dark))}
            >
              Скопировать Dark
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
