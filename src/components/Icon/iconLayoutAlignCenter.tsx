import { Component, ComponentProps } from "solid-js";

export const IconLayoutAlignCenter: Component<ComponentProps<"svg">> = (
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
    <path d="M12 4v5M12 15v5" />
    <rect width="12" height="6" x="6" y="9" rx="2" />
  </svg>
);
