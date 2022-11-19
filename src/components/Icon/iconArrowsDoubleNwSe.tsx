import { Component, ComponentProps } from "solid-js";

export const IconArrowsDoubleNwSe: Component<ComponentProps<"svg">> = (
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
    <path d="M14 21 3 10M3 14v-4h4M17 14h4v-4M10 3l11 11" />
  </svg>
);
