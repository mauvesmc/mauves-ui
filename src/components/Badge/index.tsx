import { Component, mergeProps, Show, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box } from "../Box";
import { Label } from "../Label";
import styles from "./index.module.scss";

export type BadgeColor =
  | "primary"
  | "primary-container"
  | "secondary"
  | "secondary-container"
  | "tertiary"
  | "tertiary-container"
  | "success"
  | "success-container"
  | "warning"
  | "warning-container"
  | "error"
  | "error-container";
export type BadgeSize = "small" | "large" | "large-label";
export type BadgeProps = Props<"div"> & {
  size?: BadgeSize;
  color?: BadgeColor;
  defaultPosition?: boolean;
};

export const Badge: Component<BadgeProps> = (rawProps) => {
  const mergedProps = mergeProps(
    { size: "small", color: "error", defaultPosition: false },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "size",
    "color",
    "defaultPosition",
    "classList",
    "children",
  ]);
  return (
    <Box
      {...rest}
      classList={{
        [styles.badge]: true,
        [styles[`badge_size-${props.size}`]]: true,
        [styles[`badge_color-${props.color}`]]: true,
        [styles[`badge_default-position`]]: props.defaultPosition,
        ...props.classList,
      }}
    >
      <Show when={props.children && props.size !== "small"}>
        <Label size="small" as="span">
          {props.children}
        </Label>
      </Show>
    </Box>
  );
};
