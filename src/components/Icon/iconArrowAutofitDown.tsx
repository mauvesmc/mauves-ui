import { Component, ComponentProps } from "solid-js";

export const IconArrowAutofitDown: Component<ComponentProps<"svg">> = (
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
    <path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8M18 4v17M15 18l3 3 3-3" />
  </svg>
);
