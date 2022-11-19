import { Component, ComponentProps } from "solid-js";

export const IconArrowsDiagonalMinimize: Component<ComponentProps<"svg">> = (
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
    <path d="M6 10h4V6M4 4l6 6M18 14h-4v4M14 14l6 6" />
  </svg>
);
