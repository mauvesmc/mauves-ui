import { ComponentProps, JSX, ValidComponent } from "solid-js";
import { Theme, ThemePalette } from "./theme";

export type PropsWithoutStyle<T extends ValidComponent = "div"> = Omit<
  ComponentProps<T>,
  "style"
>;

export type Props<T extends ValidComponent = "div"> = PropsWithoutStyle<T> & {
  as?: ValidComponent;
  w?: number;
  h?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  elevation?: 1 | 2 | 3 | 4 | 5;
  style?: JSX.CSSProperties;
  sx?: (palette: ThemePalette, theme?: Theme) => JSX.CSSProperties;
  [key: string]: any;
};
