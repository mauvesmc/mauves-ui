import { Component, mergeProps, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box, BoxMarginProps, BoxPaddingProps } from "../Box";
import styles from "./index.module.scss";

export type CardVariant = "elevated" | "filled" | "outlined";
export type CardProps = Props<"div"> &
  BoxMarginProps &
  BoxPaddingProps & {
    variant?: CardVariant;
  };

export const Card: Component<CardProps> = (rawProps) => {
  const mergedProps = mergeProps(
    {
      variant: "filled",
    },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, ["variant", "classList"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles["card"]]: true,
        [styles[`card_variant-${props.variant}`]]: true,
        ...props.classList,
      }}
    />
  );
};
