import { Component, ComponentProps } from "solid-js";

export const IconBoxAlignTopRight: Component<ComponentProps<"svg">> = (
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
    <path d="M19 11.01h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM20 15.01V15M20 20.01V20M15 20.01V20M9 20.01V20M9 4.01V4M4 20.01V20M4 15.01V15M4 9.01V9M4 4.01V4" />
  </svg>
);
