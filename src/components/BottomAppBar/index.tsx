import { Component, JSX, splitProps } from "solid-js";
import { Props } from "../../types";
import { Box } from "../Box";
import styles from "./index.module.scss";

export type BottomAppBarProps = Props<"div"> & {
  fab?: JSX.FunctionElement;
};

export const BottomAppBar: Component<BottomAppBarProps> = (rawProps) => {
  const [props, rest] = splitProps(rawProps, ["classList", "fab", "children"]);

  return (
    <Box
      {...rest}
      classList={{ [styles["bottom-app-bar"]]: true, ...props.classList }}
    >
      <Box class={styles["bottom-app-bar__icon-buttons"]}>{props.children}</Box>
      {props.fab}
    </Box>
  );
};
