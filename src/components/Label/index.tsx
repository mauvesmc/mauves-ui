import { Component, mergeProps, splitProps } from "solid-js";
import { Box, BoxProps } from "../Box";
import styles from "./index.module.scss";

export type LabelProps = BoxProps & {
  size?: "small" | "medium" | "large";
};

export const Label: Component<LabelProps> = (rawProps) => {
  const mergedProps = mergeProps({ as: "p", size: "large" }, rawProps);
  const [props, rest] = splitProps(mergedProps, ["classList", "size"]);

  return (
    <Box
      {...rest}
      classList={{
        [styles[`label_size-${props.size}`]]: true,
        ...props.classList,
      }}
    />
  );
};
