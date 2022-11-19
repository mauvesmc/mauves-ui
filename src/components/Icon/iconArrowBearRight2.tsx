import { Component, ComponentProps } from "solid-js";

export const IconArrowBearRight2: Component<ComponentProps<"svg">> = (
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
    <path d="M15 3h5v5" />
    <path d="m20 3-7.536 7.536A5 5 0 0 0 11 14.07V21M4 5l4.5 4.5" />
  </svg>
);
