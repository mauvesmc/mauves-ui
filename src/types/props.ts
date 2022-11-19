import { ComponentProps, JSX, ValidComponent } from "solid-js";
import { Theme, ThemePalette } from "./theme";

export type PropsWithoutStyle<T extends ValidComponent = "div"> = Omit<
  ComponentProps<T>,
  "style"
>;

export type Props<T extends ValidComponent = "div"> = PropsWithoutStyle<T> & {
  as?: ValidComponent;
  style?: JSX.CSSProperties;
  sx?: (palette: ThemePalette, theme?: Theme) => JSX.CSSProperties;
  [key: string]: any;
};
