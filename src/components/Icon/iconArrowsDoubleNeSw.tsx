import { Component, ComponentProps } from "solid-js";

export const IconArrowsDoubleNeSw: Component<ComponentProps<"svg">> = (
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
    <path d="M3 14 14 3M10 3h4v4M10 17v4h4M21 10 10 21" />
  </svg>
);
