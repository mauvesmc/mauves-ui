import { Component, mergeProps, splitProps } from "solid-js";
import { Box, BoxProps } from "../Box";
import styles from "./index.module.scss";

export type BodyProps = BoxProps & {
  size?: "small" | "medium" | "large";
};

export const Body: Component<BodyProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", size: "large" }, rawProps);
  const [props, rest] = splitProps(mergedProps, ["classList", "size"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles[`body_size-${props.size}`]]: true,
        ...props.classList,
      }}
    />
  );
};
