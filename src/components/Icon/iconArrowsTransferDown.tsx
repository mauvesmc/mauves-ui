import { Component, ComponentProps } from "solid-js";

export const IconArrowsTransferDown: Component<ComponentProps<"svg">> = (
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
    <path d="M17 3v6M10 18l-3 3-3-3M7 21V3M20 6l-3-3-3 3M17 21v-2M17 15v-2" />
  </svg>
);
