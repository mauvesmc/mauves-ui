import { Component, mergeProps, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import styles from "./index.module.scss";

export type DividerOrientation = "vertical" | "horizontal";
export type DividerVariant = "full" | "inset" | "middle-inset";
export type DividerProps = Omit<Props<"div">, "children"> &
  BoxMarginProps & {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
  };

export const Divider: Component<DividerProps> = (rawProps) => {
  const mergedProps = mergeProps(
    { orientation: "horizontal", variant: "full" },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "orientation",
    "variant",
    "classList",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles["divider"]]: true,
        [styles[`divider_orientation-${props.orientation}`]]: true,
        [styles[`divider_variant-${props.variant}`]]: true,
        ...props.classList,
      }}
    />
  );
};
