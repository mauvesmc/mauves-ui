import {
  Component,
  createSignal,
  For,
  JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { useRipple } from "../../hooks/useRipple";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import { ButtonColor } from "../Button";
import { Divider } from "../Divider";
import { Label } from "../Label";
import styles from "./index.module.scss";

export type SegmentedButtonsProps = Omit<Props<"div">, "children"> &
  BoxMarginProps & {
    color?: ButtonColor;
    density: 0 | -1 | -2 | -3;
    children: JSX.Element[];
  };

export const SegmentedButtons: Component<SegmentedButtonsProps> & {
  Button: typeof SegmentedButton;
} = (rawProps) => {
  const mergedProps = mergeProps({ density: 0, color: "primary" }, rawProps);
  const [props, rest] = splitProps(mergedProps, [
    "density",
    "color",
    "classList",
    "children",
  ]);

  return (
    <Box
      {...rest}
      classList={{
        [styles["segmented-button__wrapper"]]: true,
        [styles[`segmented-button__wrapper_density-${props.density}`]]: true,
        [styles[`segmented-button__wrapper_color-${props.color}`]]: true,
        ...props.classList,
      }}
    >
      <For each={props.children}>
        {(item, index) => (
          <>
            {item}
            <Show when={index() !== props.children.length - 1}>
              <Divider
                orientation="vertical"
                style={{ background: "var(--theme-sys-outline)" }}
              />
            </Show>
          </>
        )}
      </For>
    </Box>
  );
};

export type SegmentedButtonProps = Props<"button"> & {
  icon?: JSX.Element;
  selected?: boolean;
};

const SegmentedButton: Component<SegmentedButtonProps> = (rawProps) => {
  const mergedProps = mergeProps(
    { as: "button", selected: false, disabled: false },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "icon",
    "selected",
    "disabled",
    "children",
    "classList",
  ]);
  const [buttonRef, setButtonRef] = createSignal(null);
  useRipple(buttonRef);

  return (
    <Box
      {...rest}
      ref={setButtonRef}
      classList={{
        [styles["segmented-button"]]: true,
        [styles["segmented-button_with-icon"]]: !!props.icon || props.selected,
        [styles["segmented-button_selected"]]: props.selected,
        [styles["segmented-button_not-selected"]]: !props.selected,
        [styles["segmented-button_state-enabled"]]: !props.disabled,
        [styles["segmented-button_state-disabled"]]: props.disabled,
        ...props.classList,
      }}
      disabled={props.disabled}
    >
      <Show when={props.icon || props.selected}>
        <Box class={styles["segmented-button__icon-wrapper"]}>
          <Show when={props.icon && !props.selected}>{props.icon}</Show>
          <Show when={props.selected}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-check"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </Show>
        </Box>
      </Show>
      <Label size="large" style={{ "white-space": "nowrap" }}>
        {props.children}
      </Label>
    </Box>
  );
};

SegmentedButtons.Button = SegmentedButton;
