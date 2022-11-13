import {
  Component,
  createSignal,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { randomId } from "../../lib/randomId";
import { Props } from "../../types";
import { Box } from "../Box";
import styles from "./index.module.css";

export type CheckboxProps = Props<"input"> & {
  indeterminate?: boolean;
  error?: boolean;
};

export const Checkbox: Component<CheckboxProps> = (rawProps) => {
  const mergedProps = mergeProps(
    {
      indeterminate: false,
      error: false,
      disabled: false,
      checked: false,
      as: "label",
      id: randomId(),
    },
    rawProps
  );
  const [props, rest] = splitProps(mergedProps, [
    "indeterminate",
    "error",
    "class",
    "classList",
    "disabled",
    "checked",
    "id",
    "as",
  ]);
  const [hovered, setHovered] = createSignal(false);
  const [focused, setFocused] = createSignal(false);

  const rippleHandler = (e: any) => {
    const x = e.layerX;
    const y = e.layerY;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.borderRadius = "9999px";
    circle.style.position = "absolute";
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.width = `80px`;
    circle.style.height = `80px`;
    circle.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
    circle.style.backgroundColor = "var(--ripple)";
    circle.style.zIndex = "5";

    const node = e.currentTarget.querySelector(`.${styles.checkbox__circle}`);
    if (!node) return;
    node.appendChild(circle);

    circle.animate(
      [
        {
          transform: "translateX(-50%) translateY(-50%) scale(0)",
        },
        {
          transform: "translateX(-50%) translateY(-50%) scale(1)",
        },
      ],
      { duration: 300, iterations: 1, easing: "ease" }
    );

    setTimeout(() => {
      circle.remove();
    }, 300);
  };

  return (
    <Box
      as={props.as}
      htmlFor={props.id}
      class={props.class}
      classList={{
        [styles.checkbox]: true,
        [styles.checkbox_enabled]: !props.disabled,
        [styles.checkbox_disabled]: props.disabled,
        [styles.checkbox_selected]: props.checked,
        [styles.checkbox_indeterminate]: !props.checked && props.indeterminate,
        [styles.checkbox_error]: props.error,
        [styles.checkbox_focused]: focused(),
        ...props.classList,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseUp={rippleHandler}
    >
      <input
        {...rest}
        id={props.id}
        class="visually-hidden"
        type="checkbox"
        disabled={props.disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <Box class={styles.checkbox__check}>
        <Show when={props.checked}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "min-width": "24px", "min-height": "24px" }}
          >
            <path
              d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
              fill="currentColor"
            />
          </svg>
        </Show>
        <Show when={!props.checked && props.indeterminate}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "min-width": "24px", "min-height": "24px" }}
          >
            <path d="M7 13V11H17V13H7Z" fill="currentColor" />
          </svg>
        </Show>
      </Box>

      <Show when={hovered() || focused()}>
        <Box class={styles.checkbox__circle} />
      </Show>
    </Box>
  );
};
