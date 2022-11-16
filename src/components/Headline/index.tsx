import { Component, mergeProps, splitProps } from "solid-js";
import { Box, BoxProps } from "../Box";
import styles from "./index.module.scss";

export type HeadlineProps = BoxProps & {
  size?: "small" | "medium" | "large";
};

export const Headline: Component<HeadlineProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", size: "large" }, rawProps);
  const [props, rest] = splitProps(mergedProps, ["classList", "size"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles[`headline_size-${props.size}`]]: true,
        ...props.classList,
      }}
    />
  );
};
