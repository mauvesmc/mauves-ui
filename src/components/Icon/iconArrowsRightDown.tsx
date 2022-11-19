import { Component, ComponentProps } from "solid-js";

export const IconArrowsRightDown: Component<ComponentProps<"svg">> = (
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
    <path d="m3 17 4 4 4-4" />
    <path d="M7 21V10a3 3 0 0 1 3-3h11" />
    <path d="m17 11 4-4-4-4" />
  </svg>
);
