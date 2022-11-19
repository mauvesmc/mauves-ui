import { Component, ComponentProps } from "solid-js";

export const IconSpacingVertical: Component<ComponentProps<"svg">> = (
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
    <path d="M4 20v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M16 12H8" />
  </svg>
);
