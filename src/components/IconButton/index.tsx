import { Component, mergeProps, splitProps } from "solid-js";
import { Props } from "types";
import { Box, BoxMarginProps } from "../Box";
import styles from "./index.module.scss";

export type IconButtonVariant = "filled" | "tonal" | "outlined" | "standard";
export type IconButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";
export type IconButtonProps = Props<"button"> &
  BoxMarginProps & {
    variant?: IconButtonVariant;
    color?: IconButtonColor;
    loading?: boolean;
    selected?: boolean;
  };

export const IconButton: Component<IconButtonProps> = (rawProps) => {
  const mergedProps = mergeProps(
    {
      variant: "filled",
      color: "primary",
      as: "button",
      disabled: false,
      loading: false,
      selected: false,
    },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "variant",
    "classList",
    "disabled",
    "loading",
    "selected",
    "color",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles["icon-button"]]: true,
        [styles["icon-button_state-enabled"]]: !props.disabled,
        [styles["icon-button_state-disabled"]]: props.disabled,
        [styles["icon-button_selected"]]: props.selected,
        [styles["icon-button_not-selected"]]: !props.selected,
        [styles[`icon-button_variant-${props.variant}`]]: true,
        [styles[`icon-button_color-${props.color}`]]: true,
        ...props.classList,
      }}
      disabled={props.disabled || props.loading}
    />
  );
};
