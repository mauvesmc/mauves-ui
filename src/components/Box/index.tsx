import { Component, mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useTheme } from "../../context/ThemeProvider";
import { Props } from "../../types";

export type BoxProps = Props;

export const Box: Component<BoxProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "div" }, rawProps);
  const [props, rest] = splitProps(mergedProps, [
    "elevation",
    "w",
    "h",
    "m",
    "mx",
    "my",
    "mt",
    "mr",
    "mb",
    "ml",
    "p",
    "px",
    "py",
    "pt",
    "pr",
    "pb",
    "pl",
    "sx",
    "as",
    "style",
  ]);
  const theme = useTheme();

  return (
    <Dynamic
      {...rest}
      component={props.as}
      style={{
        width: props.w ? `${props.w}px` : undefined,
        height: props.h ? `${props.h}px` : undefined,
        "box-shadow": props.elevation
          ? `var(--theme-elevation-${props.elevation})`
          : undefined,
        "margin-top": props.mt
          ? `${props.mt}px`
          : props.my
          ? `${props.my}px`
          : props.m
          ? `${props.m}px`
          : undefined,
        "margin-right": props.mr
          ? `${props.mr}px`
          : props.mx
          ? `${props.mx}px`
          : props.m
          ? `${props.m}px`
          : undefined,
        "margin-bottom": props.mb
          ? `${props.mb}px`
          : props.my
          ? `${props.my}px`
          : props.m
          ? `${props.m}px`
          : undefined,
        "margin-left": props.ml
          ? `${props.ml}px`
          : props.mx
          ? `${props.mx}px`
          : props.m
          ? `${props.m}px`
          : undefined,
        "padding-top": props.pt
          ? `${props.pt}px`
          : props.py
          ? `${props.py}px`
          : props.p
          ? `${props.p}px`
          : undefined,
        "padding-right": props.pr
          ? `${props.pr}px`
          : props.px
          ? `${props.px}px`
          : props.p
          ? `${props.p}px`
          : undefined,
        "padding-bottom": props.pb
          ? `${props.pb}px`
          : props.py
          ? `${props.py}px`
          : props.p
          ? `${props.p}px`
          : undefined,
        "padding-left": props.pl
          ? `${props.pl}px`
          : props.px
          ? `${props.px}px`
          : props.p
          ? `${props.p}px`
          : undefined,
        ...props.style,
        ...props.sx?.(theme.palettes[theme.current], theme),
      }}
    />
  );
};
