import {
  argbFromHex,
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
} from "@material/material-color-utilities";
import {
  Theme,
  ThemeBreakpoints,
  ThemeColor,
  ThemeColors,
  ThemeElevation,
  ThemeMotion,
  ThemePalette,
  ThemeShape,
  ThemeSystem,
  ThemeTypography,
  ThemeTypographyItem,
} from "../types/theme";
import { toKebabCase } from "./toKebabCase";

const themeKebabCase = (str: string) => {
  return `--theme-${toKebabCase(str)}`;
};

const generateDefaultColorVariables = (palette: ThemePalette) => {
  const variables: string[] = [];

  variables.push(`${themeKebabCase("white")}:${palette.white}`);
  const whiteArgb = argbFromHex(palette.white);
  variables.push(
    `${themeKebabCase("white-rgb")}:${redFromArgb(whiteArgb)}, ${greenFromArgb(
      whiteArgb
    )}, ${blueFromArgb(whiteArgb)}`
  );
  const blackArgb = argbFromHex(palette.black);
  variables.push(`${themeKebabCase("black")}:${palette.black}`);
  variables.push(
    `${themeKebabCase("black-rgb")}:${redFromArgb(blackArgb)}, ${greenFromArgb(
      blackArgb
    )}, ${blueFromArgb(blackArgb)}`
  );
  return variables;
};

const generateRefColorVariables = (ref: ThemeColors) => {
  const variables: string[] = [];

  Object.keys(ref).forEach((colorName) => {
    const color = ref[colorName] as ThemeColor;

    Object.keys(color).forEach((variant) => {
      const argb = argbFromHex(color[variant]);
      variables.push(
        `${themeKebabCase(`ref-${colorName}-${variant}`)}:${color[variant]}`
      );
      variables.push(
        `${themeKebabCase(`ref-${colorName}-${variant}-rgb`)}:${redFromArgb(
          argb
        )},${greenFromArgb(argb)},${blueFromArgb(argb)}`
      );
    });
  });

  return variables;
};

const generateSystemColorVariables = (system: ThemeSystem) => {
  const variables: string[] = [];

  Object.keys(system).forEach((colorName) => {
    const argb = argbFromHex(system[colorName]);
    variables.push(
      `${themeKebabCase(`sys-${colorName}`)}:${system[colorName]}`
    );
    variables.push(
      `${themeKebabCase(`sys-${colorName}-rgb`)}:${redFromArgb(
        argb
      )},${greenFromArgb(argb)},${blueFromArgb(argb)}`
    );
  });

  return variables;
};

const generateSurfaceVariables = () => {
  const variables: string[] = [];

  variables.push(
    `${themeKebabCase(
      "sys-surface-1"
    )}:linear-gradient(0deg, rgba(var(--theme-sys-surface-tint-rgb), 0.05), rgba(var(--theme-sys-surface-tint-rgb), 0.05)), var(--theme-sys-surface)`
  );
  variables.push(
    `${themeKebabCase(
      "sys-surface-2"
    )}:linear-gradient(0deg, rgba(var(--theme-sys-surface-tint-rgb), 0.08), rgba(var(--theme-sys-surface-tint-rgb), 0.08)), var(--theme-sys-surface)`
  );
  variables.push(
    `${themeKebabCase(
      "sys-surface-3"
    )}:linear-gradient(0deg, rgba(var(--theme-sys-surface-tint-rgb), 0.11), rgba(var(--theme-sys-surface-tint-rgb), 0.11)), var(--theme-sys-surface)`
  );
  variables.push(
    `${themeKebabCase(
      "sys-surface-4"
    )}:linear-gradient(0deg, rgba(var(--theme-sys-surface-tint-rgb), 0.12), rgba(var(--theme-sys-surface-tint-rgb), 0.12)), var(--theme-sys-surface)`
  );
  variables.push(
    `${themeKebabCase(
      "sys-surface-5"
    )}:linear-gradient(0deg, rgba(var(--theme-sys-surface-tint-rgb), 0.14), rgba(var(--theme-sys-surface-tint-rgb), 0.14)), var(--theme-sys-surface)`
  );

  return variables;
};

const generateElevationVariables = (elevation: ThemeElevation) => {
  const variables: string[] = [];

  Object.keys(elevation).forEach((variant) => {
    variables.push(
      `${themeKebabCase(`elevation-${variant}`)}:${elevation[variant]}`
    );
  });

  return variables;
};

const generateStateLayerVariables = (system: ThemeSystem) => {
  const variables: string[] = [];

  Object.keys(system)
    .filter((v) => v !== "scrim")
    .forEach((colorName) => {
      variables.push(
        `${themeKebabCase(`state-${colorName}-8`)}:rgba(${themeKebabCase(
          `sys-${colorName}-rgb`
        )},0.08)`
      );
      variables.push(
        `${themeKebabCase(`state-${colorName}-12`)}:rgba(${themeKebabCase(
          `sys-${colorName}-rgb`
        )},0.12)`
      );
      variables.push(
        `${themeKebabCase(`state-${colorName}-16`)}:rgba(${themeKebabCase(
          `sys-${colorName}-rgb`
        )},0.16)`
      );
    });

  return variables;
};

const generatePaletteVariables = (palette: ThemePalette) => {
  const variables: string[] = [];

  variables.push(...generateDefaultColorVariables(palette));
  variables.push(...generateRefColorVariables(palette.ref));
  variables.push(...generateSystemColorVariables(palette.system));
  variables.push(...generateSurfaceVariables());
  variables.push(...generateElevationVariables(palette.elevation));
  variables.push(...generateStateLayerVariables(palette.system));

  return variables;
};

const generateTypographyVariables = (typography: ThemeTypography) => {
  const variables: string[] = [];
  Object.keys(typography).forEach((variant) => {
    const current = typography[variant] as ThemeTypographyItem;
    variables.push(
      `${themeKebabCase(`typography-${variant}-face`)}:${current.face}`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-font-size`)}:${
        current.fontSize / 16
      }rem`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-letter-spacing`)}:${
        current.letterSpacing / 16
      }rem`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-line-height`)}:${
        current.lineHeight / 16
      }rem`
    );
    variables.push(
      `${themeKebabCase(`typography-${variant}-weight`)}:${current.weight}`
    );
  });
  return variables;
};

const generateShapeVariables = (shape: ThemeShape) => {
  const variables: string[] = [];
  Object.keys(shape).forEach((variant) => {
    const current = shape[variant];
    variables.push(`${themeKebabCase(`shape-${variant}`)}:${current / 16}rem`);
  });
  return variables;
};

const generateBreakpointsVariables = (breakpoints: ThemeBreakpoints) => {
  const variables: string[] = [];
  Object.keys(breakpoints).forEach((variant) => {
    const current = breakpoints[variant];
    variables.push(`${themeKebabCase(`breakpoint-${variant}`)}:${current}px`);
  });
  return variables;
};

const generateMotionVariables = (motion: ThemeMotion) => {
  const variables: string[] = [];
  Object.keys(motion).forEach((variant) => {
    const current = motion[variant];
    variables.push(`${themeKebabCase(`motion-${variant}`)}:${current}`);
  });
  return variables;
};

export const cssFromTheme = (theme: Theme) => {
  const variables = [
    ...generatePaletteVariables(theme.palettes[theme.current]),
    ...generateShapeVariables(theme.shape),
    ...generateTypographyVariables(theme.typography),
    ...generateBreakpointsVariables(theme.breakpoints),
    ...generateMotionVariables(theme.motion),
  ];

  return variables.join(";");
};
