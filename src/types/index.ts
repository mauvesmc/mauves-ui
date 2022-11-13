import { ComponentProps, ValidComponent } from "solid-js";
import { CSSAttribute } from "solid-styled-components";
import { ThemeConfig } from "./theme";

export type Props<T extends ValidComponent = "div"> = ComponentProps<T> & {
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
  sx?: CSSAttribute | ((theme: ThemeConfig) => CSSAttribute);
};
