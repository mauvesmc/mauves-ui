import {
  Component,
  createSignal,
  JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { useRipple } from "../../hooks/useRipple";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import { FabColor } from "../Fab";
import { Label } from "../Label";
import styles from "./index.module.scss";

export type FabExtendedProps = Props<"button"> &
  BoxMarginProps & {
    color?: FabColor;
    icon?: JSX.Element;
  };

export const FabExtended: Component<FabExtendedProps> = (rawProps) => {
  const mergedProps = mergeProps({ color: "primary" }, rawProps);
  const [props, rest] = splitProps(mergedProps, [
    "color",
    "icon",
    "children",
    "classList",
  ]);
  const [fabRef, setFabRef] = createSignal(null);
  useRipple(fabRef);

  return (
    <Box
      {...rest}
      ref={setFabRef}
      classList={{
        [styles["fab-extended"]]: true,
        [styles[`fab-extended_color-${props.color}`]]: true,
        ...props.classList,
      }}
    >
      <Show when={props.icon}>
        <Box class={styles["fab-extended__icon-wrapper"]}>{props.icon}</Box>
      </Show>
      <Label size="large">{props.children}</Label>
    </Box>
  );
};
