import { Component, mergeProps, splitProps } from "solid-js";
import { classList, Dynamic } from "solid-js/web";
import { css } from "solid-styled-components";
import { useThemeConfig } from "../../lib/useThemeConfig";
import { Props } from "../../types";

export type BoxProps = Props;

export const Box: Component<BoxProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "div" }, rawProps);
  const [props, rest] = splitProps(mergedProps, [
    "as",
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
    "classList",
  ]);
  const theme = useThemeConfig();

  const style = css({
    width: props.w ? `${props.w}px` : undefined,
    height: props.h ? `${props.h}px` : undefined,
    marginTop: props.mt
      ? `${props.mt}px`
      : props.my
      ? `${props.my}px`
      : props.m
      ? `${props.m}px`
      : undefined,
    marginRight: props.mr
      ? `${props.mr}px`
      : props.mx
      ? `${props.mx}px`
      : props.m
      ? `${props.m}px`
      : undefined,
    marginBottom: props.mb
      ? `${props.mb}px`
      : props.my
      ? `${props.my}px`
      : props.m
      ? `${props.m}px`
      : undefined,
    marginLeft: props.ml
      ? `${props.ml}px`
      : props.mx
      ? `${props.mx}px`
      : props.m
      ? `${props.m}px`
      : undefined,
    paddingTop: props.pt
      ? `${props.pt}px`
      : props.py
      ? `${props.py}px`
      : props.p
      ? `${props.p}px`
      : undefined,
    paddingRight: props.pr
      ? `${props.pr}px`
      : props.px
      ? `${props.px}px`
      : props.p
      ? `${props.p}px`
      : undefined,
    paddingBottom: props.pb
      ? `${props.pb}px`
      : props.py
      ? `${props.py}px`
      : props.p
      ? `${props.p}px`
      : undefined,
    paddingLeft: props.pl
      ? `${props.pl}px`
      : props.px
      ? `${props.px}px`
      : props.p
      ? `${props.p}px`
      : undefined,
    ...(typeof props.sx === "function" ? props.sx(theme) : props.sx),
  });

  return (
    <Dynamic
      {...rest}
      component={props.as}
      classList={{
        [style]: true,
        ...classList,
      }}
    />
  );
};
