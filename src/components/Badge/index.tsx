import { Component, mergeProps, Show, splitProps } from "solid-js";
import { Box, BoxProps } from "../Box";
import { Typography } from "../Typography";
import styles from "./index.module.css";

export type BadgeSize = "small" | "large-single" | "large";
export type BadgeProps = BoxProps & {
  size?: BadgeSize;
};

export const Badge: Component<BadgeProps> = (rawProps) => {
  const mergedProps = mergeProps({ size: "small" }, rawProps);
  const [props, rest] = splitProps(mergedProps, [
    "size",
    "classList",
    "children",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles.badge]: true,
        [styles[`badge_size-${props.size}`]]: true,
        ...props.classList,
      }}
    >
      <Show when={props.children}>
        <Typography variant="labelSmall">{props.children}</Typography>
      </Show>
    </Box>
  );
};
