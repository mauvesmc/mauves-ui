import { Component, ComponentProps } from "solid-js";

export const IconArrowRoundaboutLeft: Component<ComponentProps<"svg">> = (
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
    <path d="M3 9h8a5 5 0 1 1 5 5v7" />
    <path d="M7 5 3 9l4 4" />
  </svg>
);
