import { Component, mergeProps, splitProps } from "solid-js";
import { toKebabCase } from "../../lib/toKebabCase";
import { ThemeTypographyVariant } from "../../types/theme";
import { Box, BoxProps } from "../Box";
import styles from "./index.module.css";

export type TypographyProps = BoxProps & {
  variant?: ThemeTypographyVariant;
};

export const Typography: Component<TypographyProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", variant: "bodyLarge" }, rawProps);
  const [props, rest] = splitProps(mergedProps, ["variant", "classList"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles[`typography_variant-${toKebabCase(props.variant)}`]]: true,
        ...props.classList,
      }}
    />
  );
};
