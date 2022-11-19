import { Component, ComponentProps } from "solid-js";

export const IconTriangleInverted: Component<ComponentProps<"svg">> = (
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
    <path d="M5 4h14a2 2 0 0 1 1.84 2.75L13.74 19a2 2 0 0 1-3.5 0L3.14 6.75A2 2 0 0 1 4.89 4" />
  </svg>
);
