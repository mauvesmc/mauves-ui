import { Component, JSX, mergeProps, Show, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import { Label } from "../Label";
import styles from "./index.module.scss";

export type ButtonVariant =
  | "elevated"
  | "filled"
  | "tonal"
  | "outlined"
  | "text";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";
export type ButtonProps = Props<"button"> &
  BoxMarginProps & {
    variant?: ButtonVariant;
    color?: ButtonColor;
    loading?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
  };

export const Button: Component<ButtonProps> = (rawProps) => {
  const mergedProps = mergeProps(
    { variant: "filled", color: "primary", loading: false, disabled: false },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "leftIcon",
    "rightIcon",
    "loading",
    "disabled",
    "children",
    "classList",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles.button]: true,
        [styles[`button_variant-${props.variant}`]]: true,
        [styles[`button_color-${props.color}`]]: true,
        [styles["button_with-left-icon"]]: !!props.leftIcon,
        [styles["button_with-right-icon"]]: !!props.rightIcon,
        [styles["button_state-enabled"]]: !props.disabled,
        [styles["button_state-disabled"]]: props.disabled,
        ...props.classList,
      }}
    >
      <Show when={props.leftIcon}>
        <Box
          classList={{
            [styles["button__icon-wrapper"]]: true,
            [styles["button__icon-wrapper_left"]]: true,
          }}
        >
          {props.leftIcon}
        </Box>
      </Show>
      <Label as="span" size="large" class={styles.button__content}>
        {props.children}
      </Label>
      <Show when={props.rightIcon}>
        <Box
          classList={{
            [styles["button__icon-wrapper"]]: true,
            [styles["button__icon-wrapper_right"]]: true,
          }}
        >
          {props.rightIcon}
        </Box>
      </Show>
    </Box>
  );
};
