import { Component, mergeProps, splitProps } from "solid-js";
import { Box, BoxProps } from "../Box";
import styles from "./index.module.scss";

export type DisplayProps = BoxProps & {
  size?: "small" | "medium" | "large";
};

export const Display: Component<DisplayProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", size: "large" }, rawProps);
  const [props, rest] = splitProps(mergedProps, ["classList", "size"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles[`display_size-${props.size}`]]: true,
        ...props.classList,
      }}
    />
  );
};
