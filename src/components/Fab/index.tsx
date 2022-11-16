import { Component, createSignal, mergeProps, splitProps } from "solid-js";
import { useRipple } from "../../hooks/useRipple";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import styles from "./index.module.scss";

export type IconButtonSize = "small" | "medium" | "large";
export type IconButtonColor =
  | "surface"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";

export type FabProps = Props<"button"> &
  BoxMarginProps & {
    size?: IconButtonSize;
    color?: IconButtonColor;
  };

export const Fab: Component<FabProps> = (rawProps) => {
  const mergedProps = mergeProps(
    { size: "medium", color: "primary" },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, ["size", "color", "classList"]);
  const [fabRef, setFabRef] = createSignal(null);
  useRipple(fabRef);

  return (
    <Box
      {...rest}
      ref={setFabRef}
      classList={{
        [styles.fab]: true,
        [styles[`fab_color-${props.color}`]]: true,
        [styles[`fab_size-${props.size}`]]: true,
        ...props.classList,
      }}
    />
  );
};
