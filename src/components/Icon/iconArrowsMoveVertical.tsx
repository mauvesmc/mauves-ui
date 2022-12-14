import { Component, ComponentProps } from "solid-js";

export const IconArrowsMoveVertical: Component<ComponentProps<"svg">> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 18 3 3 3-3M12 15v6M15 6l-3-3-3 3M12 3v6" />
  </svg>
);
