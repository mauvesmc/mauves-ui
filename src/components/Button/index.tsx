import { Component, JSX, mergeProps, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box } from "../Box";
import { Typography } from "../Typography";
import styles from "./index.module.css";

export type ButtonVariant =
  | "filled"
  | "outlined"
  | "text"
  | "elevated"
  | "tonal";
export type ButtonProps = Props<"button"> & {
  variant?: ButtonVariant;
  loading?: boolean;
  center?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

export const Button: Component<ButtonProps> = (rawProps) => {
  const mergedProps = mergeProps(
    {
      as: "button",
      variant: "filled",
      disabled: false,
      loading: false,
      center: false,
    },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "classList",
    "variant",
    "center",
    "disabled",
    "loading",
    "leftIcon",
    "rightIcon",
    "children",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles.button]: true,
        [styles.button_enabled]: !props.disabled,
        [styles.button_disabled]: props.disabled,
        [styles[`button_variant-${props.variant}`]]: true,
        [styles["button_icon-left"]]: !!props.leftIcon,
        [styles["button_icon-right"]]: !!props.rightIcon,
        ...props.classList,
      }}
      disabled={props.disabled || props.loading}
    >
      {props.leftIcon}
      <Typography
        variant="labelLarge"
        classList={{
          [styles.button__content]: true,
          [styles.button__content_center]: props.center,
        }}
      >
        {props.children}
      </Typography>
      {props.rightIcon}
    </Box>
  );
};
