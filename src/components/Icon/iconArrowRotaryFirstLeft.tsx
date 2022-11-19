import { Component, ComponentProps } from "solid-js";

export const IconArrowRotaryFirstLeft: Component<ComponentProps<"svg">> = (
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
    <path d="M16 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM16 10v10M13.5 9.5 5 18M10 18H5v-5" />
  </svg>
);
