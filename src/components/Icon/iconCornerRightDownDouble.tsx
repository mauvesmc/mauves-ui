import { Component, ComponentProps } from "solid-js";

export const IconCornerRightDownDouble: Component<ComponentProps<"svg">> = (
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
    <path d="M5 4h6a3 3 0 0 1 3 3v7" />
    <path d="m10 10 4 4 4-4m-8 5 4 4 4-4" />
  </svg>
);
