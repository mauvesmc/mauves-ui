import { Component } from "solid-js";
import { Box, BoxProps } from "./Box";
import styles from "./index.module.scss";

export type CCProps = BoxProps;

export const CC: Component<CCProps> = (props) => {
  return (
    <Box {...props} class={styles["CC"]}>
      CC component
    </Box>
  );
};
