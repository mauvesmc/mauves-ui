import {
  Component,
  createEffect,
  createSignal,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { useRipple } from "../../hooks";
import { randomId } from "../../lib";
import { Props } from "../../types";
import { Box, BoxMarginProps } from "../Box";
import { IconCheck } from "../Icon/iconCheck";
import { IconMinus } from "../Icon/iconMinus";
import styles from "./index.module.scss";

export type CheckboxColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error";
export type CheckboxProps = Props<"input"> &
  BoxMarginProps & {
    color?: CheckboxColor;
    indeterminate?: boolean;
  };

export const Checkbox: Component<CheckboxProps> = (rawProps) => {
  const mergedProps = mergeProps(
    {
      id: randomId(),
      color: "primary",
      disabled: false,
      indeterminate: false,
      checked: false,
    },
    rawProps
  );
  const [wrapperProps, others] = splitProps(mergedProps, [
    "class",
    "style",
    "sx",
    "classList",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "mr",
    "ml",
    "as",
  ]);
  const [props, rest] = splitProps(others, [
    "checked",
    "color",
    "indeterminate",
    "disabled",
    "id",
  ]);
  const [focused, setFocused] = createSignal(false);
  const [checkboxRef, setCheckboxRef] = createSignal<HTMLElement>(null);

  createEffect(() => {
    if (props.disabled) return;
    useRipple(checkboxRef);
  });

  return (
    <Box
      {...wrapperProps}
      classList={{
        [styles.checkbox__wrapper]: true,
        ...wrapperProps.classList,
      }}
    >
      <Box
        as="label"
        for={props.id}
        classList={{
          [styles.checkbox]: true,
          [styles[`checkbox_color-${props.color}`]]: true,
          [styles[`checkbox_state-enabled`]]: !props.disabled,
          [styles[`checkbox_state-disabled`]]: props.disabled,
          [styles.checkbox_focused]: focused(),
          [styles.checkbox_selected]: props.checked,
          [styles.checkbox_indeterminated]:
            !props.checked && props.indeterminate,
        }}
        ref={setCheckboxRef}
      >
        <Box class={styles.checkbox__checkmark}>
          <Show when={props.checked}>
            <IconCheck />
          </Show>
          <Show when={!props.checked && props.indeterminate}>
            <IconMinus />
          </Show>
        </Box>
      </Box>
      <input
        {...rest}
        id={props.id}
        checked={props.checked}
        disabled={props.disabled}
        type="checkbox"
        class="visually-hidden"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Box>
  );
};
